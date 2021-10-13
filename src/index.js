// import javascript for carousel, navbar.
import "bootstrap/js/src/collapse";
import "bootstrap/js/src/carousel";

import "./scss/style.scss";

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

let sub = require('./module/sub');
sub();
