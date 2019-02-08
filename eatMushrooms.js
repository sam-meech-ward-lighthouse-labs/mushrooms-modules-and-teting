function growMushoorms() {

}

var shrooms = ["👞", '🍄'];

// exports.growMushoorms = growMushoorms;

// core application functionality
function eatMushrooms(type) {
  if (type === 'maigc') {
    return 'hallucinations';
  }
  if (type === 'poisen') {
    return 'die';
  }

  return shrooms[1];
}

// exports.testing = "🍄";

// module.exports.eatMushrooms = eatMushrooms;

// exports = eatMushrooms; wont work
module.exports = eatMushrooms;

// module.exports = {
//   eatMushrooms: eatMushrooms
// }