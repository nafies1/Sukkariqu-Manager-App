/** @format */

const { getKulakanCollection } = require("../helpers/getCollections");
const { ObjectID } = require("mongodb");

class KulakanController {
  static create(req, res, next) {
    const { no, item, quantity, unit, price } = req.body;
    const kulakan = getKulakanCollection(req.db);
    kulakan
      .insertOne({ no, item, quantity, unit, price, createdAt: new Date() })
      .then(({ ops }) => {
        res.status(201).json(ops[0]);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static findAll(req, res, next) {
    const kulakan = getKulakanCollection(req.db);
    kulakan
      .find({})
      .toArray()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static findOne(req, res, next) {
    const kulakan = getKulakanCollection(req.db);
    const { id } = req.params;
    kulakan
      .findOne({ _id: ObjectID(id) })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static update(req, res, next) {
    const { no, item, quantity, unit, price } = req.body;
    const kulakan = getKulakanCollection(req.db);
    const { id } = req.params;
    kulakan
      .updateOne(
        { _id: ObjectID(id) },
        { $set: { no, item, quantity, unit, price, updatedAt: new Date() } }
      )
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static delete(req, res, next) {
    const kulakan = getKulakanCollection(req.db);
    const { id } = req.params;
    kulakan
      .deleteOne({ _id: ObjectID(id) })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = KulakanController;
