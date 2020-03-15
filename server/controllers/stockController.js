/** @format */

const { getStockCollection } = require("../helpers/getCollections");
const { ObjectID } = require("mongodb");

module.exports = {
  getStock(req, res, next) {
    const order = getStockCollection(req.db);
    const { id } = req.params;
    order
      .findOne({ _id: ObjectID(id) })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  updateStock(req, res, next) {
    const { stock } = req.body;
    const order = getStockCollection(req.db);
    const { id } = req.params;
    order
      .updateOne({ _id: ObjectID(id) }, { $set: { stock } })
      .then(({ result }) => {
        let message = "Update stock failed";
        if (result.n) message = "Update stock success";
        res.status(200).json({ message });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
