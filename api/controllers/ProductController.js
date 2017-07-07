/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getProducts: function (req, res) {
        Product.find().paginate({page: req.param('pageNumber'), limit: req.param('count')}).exec(function (err, products) {
            if (err) {
                res.status(400);
                return res.send(err);
            }
            return res.send({products: products});
        });
    }
};

