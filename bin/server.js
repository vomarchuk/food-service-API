const app = require('../app');
const { connectDatabase, PORT } = require('../config');

const start = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Database connection successful on port ${PORT}!`);
    });
  } catch (error) {
    console.log('Failed to start application with error: ', error.message);
    process.exit(1);
  }
};

start();
