const { Library, Game, User } = require("../models");

exports.buygame = async (req, res, next) => {
    try {
        const { price, gameId, userId } = req.body;
        const newlibrary = await Library.create({
            price,
            gameId,
            userId,
        });
        res.status(200).send({ newlibrary });
    } catch (err) {
        next(err);
    }
};

exports.getToshowlibrary = async (req, res, next) => {
    try {
        const gameLibrary = await Library.findAll({
            include: [
                { model: Game, require: true },
                { model: User, require: true },
            ],
        });
        res.status(200).send({ gameLibrary });
    } catch (err) {
        next(err);
    }
};

exports.commentGame = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};
