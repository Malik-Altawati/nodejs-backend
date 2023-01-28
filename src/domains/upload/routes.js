const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const filesPayloadExists = require('../../middleware/filesPayloadExists');
const fileExtLimiter = require('../../middleware/fileExtLimiter');
const fileSizeLimiter = require('../../middleware/fileSizeLimiter');
const path = require("path");
const {URL} = process.env;


router.post('/',
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(['.png','.PNG', '.jpg','.JPG', '.jpeg','.JPEG']),
    fileSizeLimiter,
    (req, res) => {
        const files = req.files
        var LocationsList = []
        Object.keys(files).forEach(key => {
            var extention = files[key].name.split(".")[1]
            var newFileName = `${Date.now()}`+"."+extention
            const filepath = path.join(__dirname, 'files',newFileName)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err })
            })
            LocationsList.push(`${URL}/src/domains/upload/files/${newFileName}`)

        })

        return res.status(200).json({ status: 'success',message: LocationsList })
    }
)




module.exports = router;