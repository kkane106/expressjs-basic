var fortuneCookies = [ "Conquer fears",
                   "Rivers need springs",
                   "Do not fear the unknown",
                   "Pleasant surprises await",
                   "Keep it simple stupid"
                ];

exports.getFortune = function() {
  var index = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[index];
};
