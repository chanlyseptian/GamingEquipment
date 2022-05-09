const { brand, item } = require('../models');

class BrandController {
    static async getBrands(req, res) {
        try {
            let brands = await brand.findAll({
                order: [
                    ['id', 'asc']
                ]
            });
            res.json(brands);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async getBrand(req, res) {
        const id = +req.params.id;

        try {
            let findBrand = await brand.findOne({
                where: { id: id }
            })

            res.json(findBrand);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async create(req, res) {
        const { name, image } = req.body;

        try {
            let created = await brand.create({
                name, image
            })

            res.json(created);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async delete(req, res) {
        const id = +req.params.id;

        try {
            let deleted = await brand.destroy({
                where: { id }
            })

            const deleteItem = await item.destroy({
                where: { brandId: id }
            })

            res.json(deleted);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async update(req, res) {
        const id = +req.params.id;
        const { name, image } = req.body;

        try {
            let updated = await brand.update({
                name, image
            }, {
                where: { id }
            })

            res.json(updated);
        }
        catch (e) {
            res.json(e);
        }
    }
}

module.exports = BrandController;