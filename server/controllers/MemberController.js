const { member, item } = require('../models');

class MemberController {
    static async getMembers(req, res) {
        try {
            let members = await member.findAll();
            res.json(members);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async getMember(req, res) {
        const id = +req.params.id;

        try {
            let findMember = await member.findOne({
                where: { id: id }
            })

            res.json(findMember);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async create(req, res) {
        const { name, role, status } = req.body;

        try {
            let created = await member.create({
                name, role, status
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
            let deleted = await member.destroy({
                where: { id }
            })

            const deleteItem = await item.destroy({
                where: { memberId: id }
            })

            res.json(deleted);
        }
        catch (e) {
            res.json(e);
        }
    }

    static async update(req, res) {
        const id = +req.params.id;
        const { name, role, status } = req.body;

        try {
            let updated = await member.update({
                name, role, status
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

module.exports = MemberController;