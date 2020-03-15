/** @format */

const { getOrderCollection } = require("../helpers/getCollections");
const { ObjectID } = require("mongodb");

class OrderController {
  static create(req, res, next) {
    const { name, box, kg, payment_status, remain_payment } = req.body;
    const order = getOrderCollection(req.db);
    order
      .insertOne({ name, box, kg, payment_status, remain_payment })
      .then(({ ops }) => {
        res.status(201).json(ops[0]);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static findAll(req, res, next) {
    const order = getOrderCollection(req.db);
    order
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
    const order = getOrderCollection(req.db);
    const { id } = req.params;
    order
      .findOne({ _id: ObjectID(id) })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static update(req, res, next) {
    const { name, box, kg, payment_status, remain_payment } = req.body;
    const order = getOrderCollection(req.db);
    const { id } = req.params;
    order
      .updateOne(
        { _id: ObjectID(id) },
        { $set: { name, box, kg, payment_status, remain_payment } }
      )
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static delete(req, res, next) {
    const order = getOrderCollection(req.db);
    const { id } = req.params;
    order
      .deleteOne({ _id: ObjectID(id) })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = OrderController;
