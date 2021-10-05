module.exports = (sequelize, DataTypes) => {
    const Library = sequelize.define(
        "Library",
        {
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                validate: {
                    isNumeric: true,
                },
            },
        },
        {
            underscored: true,
        }
    );

    Library.associate = models => {
        Library.belongsTo(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
        }),
            Library.belongsTo(models.Game, {
                foreignKey: {
                    name: "gameId",
                    allowNull: false,
                },
                onDelete: "RESTRICT",
                onUpdate: "RESTRICT",
            });
    };

    return Library;
};
