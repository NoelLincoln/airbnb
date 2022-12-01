const cloudinary = require("cloudinary").v2;

require("dotenv").config();

const cloud_name = "ddvlpoy4j";
const api_key = 784574139734844;
const api_secret = "Nu70HTehzjICDH9Js-9LPERMpKI";

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

exports.cloudUpload = (file) => cloudinary.uploader.upload(file);
