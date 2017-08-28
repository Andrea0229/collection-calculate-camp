'use strict';

function average_to_letter(collection) {
  let ave = Math.ceil(collection.reduce((x,y)=> x+y) / collection.length);
  return String.fromCodePoint( parseInt(ave) + 96 );
}

module.exports = average_to_letter;

