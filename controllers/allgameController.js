const { Game } = require("../models");
// getallGames ctrl
exports.getAllgames = async (req, res, next) => {
    try {
        const game = await Game.findAll();
        res.send({ game });
    } catch (err) {
        next(err);
    }
};
// editGames ctrl
exports.editGames = async (req, res, next) => {};
// editGames ctrl
exports.deleteGames = async (req, res, next) => {};
