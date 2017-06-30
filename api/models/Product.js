/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        price: {
            type: 'float',
            required: true
        },
        createdAt: {
            type: 'datetime'
        },
        updatedAt: {
            type: 'datetime'
        },
        id: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        parentSubcategory: {
            model: 'subcategory'
        }
    }
};
