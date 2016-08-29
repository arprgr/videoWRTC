'use strict';
module.exports = function(sequelize, DataTypes) {
    var VIDEOSTORE = sequelize.define('VIDEOSTORE', {
        vMesg: { 
        type : DataTypes.BLOB
        },
                
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                // associations can be defined heres
            }
        }
    });
    return VIDEOSTORE;
};
