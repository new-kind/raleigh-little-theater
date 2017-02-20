# Raleigh Little Theatre

## Tech Stack

- CMS: Wordpress
- Hosting: WPEngine
- Tools:
	- Gulp: Task Runner
	- Yarn: Package Manager
- Libraries:
	- Require.js: To modularize javascript
	- jQuery: For DOM manipulation.
	- Chosen.js: For beautiful multi-select forms
- Languages:
	- Typescript: a JS-superset that uses static-typing and provides ES6 transpilation
	- SASS: a common css-preprocessing language

## Installation

1. To install a local copy of this site, you'll need to clone this repo into whatever folder you have MAMP pointing to. If you are not using MAMP, then you'll need to configure your local environment as required.
2. Update wp-config.php as necessary to connect to your local database. 
3. Inside of the theme folder:
	- Run `yarn install`. If you do not have yarn installed globally, first run `npm install -g yarn`.
	- Run `gulp`. This should begin watching for any local changes and also use browser-sync to open a browser to preview changes.


### Questions?

Contact [Josh Mobley](https://joshmobley.net) with questions as they relate to the build. 

### License

This project is built especially for Raleigh Little Theatre in Raleigh, NC. No reuse of any code allowed without explicit permission from Raleigh Little Theatre. All rights reserved. 