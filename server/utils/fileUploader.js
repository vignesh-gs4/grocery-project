import streamifier from "streamifier";
import cloudinary from "../config/cloudinary.js"

const uploadStream = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const upld_stream = cloudinary.uploader.upload_stream(
            { folder: "product_image" },
            (error, result) => {
                if(error) reject(error);
                resolve(result.secure_url);
            }
        );
        streamifier.createReadStream(fileBuffer).pipe(upld_stream);
    })

};

export default uploadStream;