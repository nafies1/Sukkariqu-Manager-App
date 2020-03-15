module.exports = {
  getOrderCollection(db) {
    const order = db.collection("order");
    return order;
  },
  getStockCollection(db) {
    const stock = db.collection("stock");
    return stock;
  },
  getKulakanCollection(db) {
    const kulakan = db.collection("kulakan");
    return kulakan;
  }
};
