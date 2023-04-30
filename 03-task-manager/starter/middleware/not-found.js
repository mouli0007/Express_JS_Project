const notFound = (req, res) => {
  res.status(404).send("Route Dosent Exist !");
  return;
};

module.exports.NotFound = notFound;
