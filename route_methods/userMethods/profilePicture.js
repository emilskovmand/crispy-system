var userModel = require("../../models/User");
var multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() }).single("file")

async function UploadProfilePicture (req, res, userId) {
    var result = upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            res.json({
                filename: null,
                name: null,
                err: err,
                success: false 
            }).status(500);
        } else if (err) {
            res.json({
                filename: null,
                name: null,
                err: err,
                success: false 
            }).status(500);
        }

        var buf = req.file.buffer.toString('base64');

        await userModel.findByIdAndUpdate(userId, {
            ProfilePicture: {
                data: new Buffer.from(buf, 'base64'),
                contentType: req.file.mimetype
            }
        })

        res.json({
            filename: req.file.filename,
            name: req.file.originalname,
            err: null,
            success: true
        }).status(200)
    });
}

module.exports = UploadProfilePicture