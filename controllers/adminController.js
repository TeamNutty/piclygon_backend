const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploadPromise = util.promisify(cloudinary.uploader.upload);
const { Game } = require("../models");
const fs = require("fs");

exports.postgame = async (req, res, next) => {
    try {
        const { name, price, discount, trailerLink, discription } = req.body;
        const result = await Promise.all(req.files.map(item => uploadPromise(item.path, { timeout: 200000 })));
        console.log(req.files);

        const game = await Game.create({
            gameCover: result[0].secure_url,
            gamePoster: result[1].secure_url,
            gameLogo: result[2].secure_url,
            name,
            price,
            discount,
            trailerLink,
            discription,
        });
        // fs.unlinkSync(req.file.path);
        res.send({ result });
        console.log(result);
    } catch (err) {
        next(err);
    }
};
