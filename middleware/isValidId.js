const { isValidObjectId } = require('mongoose');
// const {}
const isValidId = (req, _, next) => {
  const { id } = req.params;
  const isCorrectId = isValidObjectId(id);

  if (!isCorrectId) {
    const error = `${id} is not correct id format `;
    console.log(error);
  }
  next();
};

module.exports = isValidId;
