const App = require("./app");
const app = new App();

function run() {
  app.init_welcome().then(() => {
    app.render_input();
  });
}

module.exports = {
  app: app,
  run: run,
};
