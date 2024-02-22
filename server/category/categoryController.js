const Category = require('./categoryModel')

add = (req, res) => {
  //  The following code is to chick the validation.
  var validationError = []
  if (!req.body.categoryName) validationError.push('Category Name is required!')
  if (!req.body.description) validationError.push('Description is required!')

  // console.log(validationError)
  // console.log(validationError.length)
  if (validationError.length > 0) {
    res.json({
      status: 422,
      success: false,
      message: 'Validation error!',
      error: validationError,
    })
  } else {
    // the following code is to chick for the duplication of the records.

    Category.findOne({
      categoryName: req.body.categoryName,
    })
      .then((categoryData) => {
        if (!categoryData) {
          let categoryObject = new Category()
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
        } else {
          res.json({
            status: 422,
            success: false,
            message: 'Record already exist!',
          })
        }
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
}

module.exports = {
  add,
}
