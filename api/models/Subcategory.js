/**
 * Subcategory.js
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
        url: {
            type: 'string',
            required: true,
            unique: true,
            primaryKey: true
        },
        parentCategory: {
            model: 'category'
        },
        products: {
            collection: 'product',
            via: 'parentSubcategory'
        }
    },
    autoCreatedAt: false,
    autoUpdatedAt: false
};
