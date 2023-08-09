const path = require('path');
const SubCategory = require('../server/models/subCategoryModel');

const Product = require('../server/models/productModel');
const User = require('./models/userModel');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

dotenv.config({ path: 'config.env' });
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');
const dbConnection = require('./config/database');
const filter = require("./utils/apiFeatures")
// Routes
const mountRoutes = require('./routes');
const { webhookCheckout } = require('./services/orderService');

// Connect with db
dbConnection();

// express app
const app = express();

// Enable other domains to access your application
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(cors());
app.options('*', cors());

// compress all responses
app.use(compression());

// Checkout webhook
app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  webhookCheckout
);

const router = express.Router();
//const getProducts = async (req, res) => {
  
const getProducts = async (req, res) => {
  try {
    const userId = req.params.id;
    
    const products = await Product.find({  createdBy: userId });
    const productCount = products.length;
    res.status(200).json({count : productCount,products});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
app.get('/products/fav/:id', getProducts);
// Add product to user's favorites
const addFavoriteProduct = async (req, res) => {
  try {
    const userId = req.body._id
    const productId = req.body._id


    const user = await User.findById(userId);
    const product = await Product.findById(productId);
    if (!user || !product) {
      throw new Error('User or product not found');
    }
    user.wishlist.push(product);
    await user.save();
    return user;
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to add product to user wishlist');
  }
};
app.post('/favorites',addFavoriteProduct)
app.get('/products/:iduser', async (req, res) => {
  try {
    const userId = req.params.iduser;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const products = await Product.find({ createdBy: userId }).populate('category');
    res.json({ user, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const getAllFavoriteProducts = async (userId) => {
  try {
    const user = await User.findById(userId).populate('wishlist');
    if (!user) {
      throw new Error('User not found');
    }
    return user.wishlist;
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to get user wishlist');
  }
};
app.get('/favorites/:userId',getAllFavoriteProducts)



// Get all user's favorite products
app.get('/latest-products', async (req, res) => {
  try {
    const latestProducts = await Product.find()
      .sort({ createdAt: 'desc' })
      .limit(8);
    res.json(latestProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/latest', async (req, res) => {
  try {
    const latestProducts = await Product.find()
      .sort({ createdAt: 'desc' })
      
    res.json(latestProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/highp', async (req, res) => {
  try {
    const latestProducts = await Product.find()
      .sort("-price")
      
    res.json(latestProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/lowp', async (req, res) => {
  try {
    const latestProducts = await Product.find()
      .sort("price")
      
    res.json(latestProducts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/products/rated', async (req, res) => {
  try {
    const products = await Product.find({ ratingsAverage: { $gt: 0 } });
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});
app.get('/subcategory/:id', async (req, res) => {
  try {
    const subCategoryId = req.params.id;
    const subCategory = await SubCategory.findById(subCategoryId).populate('category');
    if (!subCategory) {
      return res.status(404).send('Subcategory not found');
    }
    const products = await Product.find({ subcategories: subCategoryId }).populate('category').populate('subcategories').exec();
    res.json({
      subcategory: subCategory,
      category: subCategory.category,
      products: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/rate', async (req, res) => {
  try {
    const products = await Product.find().sort({ ratingsAverage: -1 });
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
});

// Middlewares
app.use(express.json({ limit: '20kb' }));
app.use(express.static(path.join(__dirname, 'uploads')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Limit each IP to 100 requests per `window` (here, per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message:
    'Too many accounts created from this IP, please try again after an hour',
});

// Apply the rate limiting middleware to all requests
app.use('/api', limiter);

// Middleware to protect against HTTP Parameter Pollution attacks
app.use(
  hpp({
    whitelist: [
      'price',
      'sold',
      'quantity',
      'ratingsAverage',
      'ratingsQuantity',
    ],
  })
);

// Mount Routes
mountRoutes(app);

app.all('*', (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});

// favorit add and get 





const SubCategoryModel = require('./models/subCategoryModel');
const CategoryModel = require('./models/categoryModel');

// assuming that you've already set up your database connection with mongoose

// define the route with a parameter for the category ID




// Handle rejection outside express
process.on('unhandledRejection', (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
