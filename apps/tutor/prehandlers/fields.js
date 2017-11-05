const ktoolkit = require('ktoolkit');
const logger = ktoolkit.logger.output;

async function errorHandler(req, res, error) {
  logger.error(error);

  res.json({
    successful: false,
    error: error
  });
}

module.exports = {
  errorHandler: errorHandler
};
