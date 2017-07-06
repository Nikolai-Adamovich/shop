/**
 * SubcategoryController
 *
 * @description :: Server-side logic for managing Subcategories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    addProduct: function (req, res) {
        console.log(req.param('subcategory'), req.param('name'), req.param('url'), req.param('price'));
        Subcategory.findOne({name: req.param('subcategory')}, function (err, subcategory) {
            console.log('=================================================');
            console.log(err, subcategory);
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

