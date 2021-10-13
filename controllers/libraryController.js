const { Library, Game, User, Comment } = require("../models");

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
        const { comment, gameId, userId } = req.body;
        const newcomment = await Comment.create({
            comment,
            gameId,
            userId,
        });
        res.status(200).send({ newcomment });
    } catch (err) {
        next(err);
    }
};

exports.getAllcommentGame = async (req, res, next) => {
    try {
        const allComment = await Comment.findAll({
            include: [
                { model: Game, require: true },
                { model: User, require: true },
            ],
        });
        res.status(200).send({ allComment });
    } catch (err) {
        next(err);
    }
};
