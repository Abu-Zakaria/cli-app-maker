# cli-app-maker
This is a node.js package which helps you to create cli apps.

### Installation
```
$ npm install @cynax/cli-app-maker
```

### Usage
First, create a file named `welcome.txt` in your project root directory. The contents of this file will be printed everytime this cli app is started.
The project stucture would be something like this.
```
_
|- index.js
|- welcome.txt
```

After completing this step, you can start using this package.

```javascript
const cli_app_maker = require("@cynax/cli-app-maker");

cli_app_maker.run();
```

You can also disable "welcome" option by:
```javascript
cli_app_maker.app.disableWelcome();
cli_app_maker.run();
```
You wont have to create any `welcome.txt` if you do this.
