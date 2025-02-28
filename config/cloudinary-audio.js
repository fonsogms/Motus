const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});
const storage = cloudinaryStorage({
  cloudinary,
  folder: "motus-audio", // The name of the folder in cloudinary
  allowedFormats: ["mp3", "ogg"],
  params: { resource_type: "raw", format: "mp3" },

  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: function(req, res, cb) {
    cb(null, res.originalname); // The file on cloudinary would have the same name as the original file name
  }
});
const uploadAudio = multer({ storage });
module.exports = uploadAudio;
