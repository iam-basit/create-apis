const category = require('./categoryModel')

add = (req, res) => {
  let categoryObject = new category()
  categoryObject.categoryName = req.body.categoryName
  categoryObject.description = req.body.description
  categoryObject
    .save()
    .then((saveResponse) => {
      res.json({
        status: 200,
        success: true,
        message: 'Record inserted',
        date: saveResponse,
      })
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: 'Internal server error!',
        error: err.message,
      })
    })
}

module.exports = {
  add,
}
