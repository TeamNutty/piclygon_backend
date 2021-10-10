module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
        "Game",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                validate: {
                    isNumeric: true,
                },
            },
            discount: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: true,
                defaultValue: 0,
            },
            trailerLink: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            discription: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            gameCover: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isUrl: true,
                },
            },
            gamePoster: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isUrl: true,
                },
            },
            gameLogo: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isUrl: true,
                },
            },
            like: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            dislike: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        },
        {
            underscored: true,
        }
    );

    Game.associate = models => {
        Game.hasMany(models.Comment, {
            foreignKey: {
                name: "gameId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
        }),
            Game.hasMany(models.Library, {
                foreignKey: {
                    name: "gameId",
                    allowNull: false,
                },
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            });
    };

    return Game;
};
