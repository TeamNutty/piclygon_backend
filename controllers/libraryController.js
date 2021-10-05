const { Game } = require("../models");
exports.getAllgames = async (req, res, next) => {
    try {
        const game = await Game.findAll();
    } catch (err) {
        next(err);
    }
};
