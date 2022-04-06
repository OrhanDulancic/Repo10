function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Don Mcleon",
      title: "American pie",
      release_year: 1971,
      formats: {
        1: "DVD",
        2: "8T8",
        3: "LPR",
      },
      gold: false,
    },
  };
  return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;
