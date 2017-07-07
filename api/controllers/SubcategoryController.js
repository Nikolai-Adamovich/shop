/**
 * SubcategoryController
 *
 * @description :: Server-side logic for managing Subcategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    addProduct: function (req, res) {
        Subcategory.findOne({name: req.param('subcategory')}, function (err, subcategory) {
            let response = {};
            if (err) {
                res.status(400);
                return res.send(err);
            }
            if (subcategory) {
                subcategory.products.add({name: req.param('name'), url: req.param('url'), price: req.param('price')});
                subcategory.save(function (err) {
                    if (err) {
                        res.status(400);
                        return res.send(err);
                    }
                });
                return res.send(subcategory);
            }
        });
    },
};

