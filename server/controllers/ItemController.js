const { item, brand, member } = require('../models');

class ItemController {
    static async getItems(req, res) {
        try {
            let items = await item.findAll({
                order: [
                    ['updatedAt', 'desc']
                ],
                include: [member, brand]
            });
            res.json(items);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async getItem(req, res) {
        const id = +req.params.id;

        try {
            let findItem = await item.findOne({
                where: { id: id }
            })

            res.json(findItem);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async create(req, res) {
        const { name, category, price, image, memberId, brandId } = req.body;

        try {
            let created = await item.create({
                name, category, price, image, memberId, brandId
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
            let deleted = await item.destroy({
                where: { id }
            })

            res.json(deleted);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async update(req, res) {
        const id = +req.params.id;
        const { name, category, price, image, memberId, brandId } = req.body;

        try {
            let updated = await item.update({
                name, category, price, image, memberId, brandId
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

module.exports = ItemController;