const util = require("util");
const cloudinary = require("cloudinary").v2;
const { Game } = require("../models");
const uploadPromise = util.promisify(cloudinary.uploader.upload);
const fs = require("fs");
// getallGames ctrl
exports.getAllgames = async (req, res, next) => {
    try {
        const game = await Game.findAll();
        res.send({ game });
    } catch (err) {
        next(err);
    }
};

// getoneGame
exports.getOnegames = async (req, res, next) => {
    try {
        const { id } = req.params;
        const oneGame = await Game.findOne({
            where: {
                id,
            },
        });
        res.send({ oneGame });
    } catch (err) {
        next(err);
    }
};

// editGames ctrl
exports.editGames = async (req, res, next) => {
    try {
        const { name, price, discount, trailerLink, discription } = req.body;
        const result = await Promise.all(req.files.map(item => uploadPromise(item.path, { timeout: 6000000 })));
        const { id } = req.params;
        const edit = await Game.update(
            {
                gameCover: result[0].secure_url,
                gamePoster: result[1].secure_url,
                gameLogo: result[2].secure_url,
                name,
                price,
                discount,
                trailerLink,
                discription,
            },
            { where: { id } }
        );
        req.files.map(item => fs.unlinkSync(item.path));
        res.status(200).send({ edit });
    } catch (err) {
        next(err);
    }
};

// delGames ctrl
exports.deleteGames = async (req, res, next) => {
    try {
        const { id } = req.params;
        const delrow = await Game.destroy({
            where: {
                id,
            },
        });
        res.send(delrow);
    } catch (err) {
        next(err);
    }
};
