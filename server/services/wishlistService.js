const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Product = require('../models/productModel');


// @desc    Add product to wishlist
// @route   POST /api/v1/wishlist
// @access  Protected/User
exports.addProductToWishlist = asyncHandler(async (req, res, next) => {
  try {
    const productId = req.body.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        status: 'error',
        message: 'Product not found.',
      });
    }

    if (!req.user || !req.user._id) {
      return res.status(400).json({
        status: 'error',
        message: 'User ID is missing.',
      });
    }

    // $addToSet => add productId to wishlist array if productId not exist
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $addToSet: { wishlist: productId },
      },
      { new: true }
    ).populate('wishlist', '-__v');

    res.status(200).json({
      status: 'success',
      message: 'Product added successfully to your wishlist.',
      data: product,
    });
  } catch (err) {
    next(err);
  }
});


// @desc    Remove product from wishlist
// @route   DELETE /api/v1/wishlist/:productId
// @access  Protected/User
exports.removeProductFromWishlist = asyncHandler(async (req, res, next) => {
  // $pull => remove productId from wishlist array if productId exist
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { wishlist: req.params.productId },
    },
    { new: true }
  );

  res.status(200).json({
    status: 'success',
    message: 'Product removed successfully from your wishlist.',
    data: user.wishlist,
  });
});

// @desc    Get logged user wishlist
// @route   GET /api/v1/wishlist
// @access  Protected/User
exports.getLoggedUserWishlist = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate('wishlist');

  res.status(200).json({
    status: 'success',
    results: user.wishlist.length,
    data: user.wishlist,
  });
});
