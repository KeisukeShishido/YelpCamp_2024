const express = require('express');
const campgrounds = require('../controllers/campgrounds');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn,isAuthor,validateCampground } = require('../middleware');
const multer  = require('multer')
const {storage} = require('../cloudinary');
const upload = multer({ storage })

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn,upload.array('image'),validateCampground, catchAsync(campgrounds.createCampground));
    // .post(upload.array('image'),(req,res) => {
    //     console.log(req.body, req.files);
    //     res.send('受け付けました。');
    // })

router.get('/new',isLoggedIn,campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor,upload.array('image'),validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor,catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit',isLoggedIn,isAuthor,catchAsync(campgrounds.renderEditForm));

module.exports = router;