# TaskSimple

TaskSimple is a lightweight task app that uses Node.js, MongoDB, and Angular.

## Installation

Navigate to the `/Express` folder. Install dependencies:

`npm install`

The `.sample-env` file has been provided for you to add your MongoDB URL (among other vars). Make sure to rename this file to `.env` once you've done so.

Start the server:

`npm start`

Server output can be found at

`localhost:3000`

Navigate to the `/Angular` folder. Install dependencies:

`npm install`

The `environment.local.ts` file has been provided for you to add your Firebase config.

Start the server:

`npm start --configuration=local`

The homepage can be found at

`localhost:4200`

Tests can be run with:

`ng test` (optionally specify _only_ Chrome or Firefox with the `--browsers` flag) and `ng e2e --configuration=local`

## Contributing

Pull requests are welcome. For major changes, please open an issue.

## License

[MIT](https://choosealicense.com/licenses/mit/)
