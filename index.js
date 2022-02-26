const App = require("./src/app");
const app = new App();

function run() {
  app
    .init_welcome()
    .then(() => {
      app.start();
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  app: app,
  run: run,
};
