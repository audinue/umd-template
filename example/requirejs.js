requirejs(['pluralise'], function(pluralise) {
  document.write("0 " + pluralise(0, 'cow') + "<br>");
  document.write("1 " + pluralise(1, 'cow') + "<br>");
  document.write("2 " + pluralise(2, 'cow') + "<br>");
  document.write("0 " + pluralise(0, 'sheep', 'sheep') + "<br>");
  document.write("1 " + pluralise(1, 'sheep', 'sheep') + "<br>");
  document.write("2 " + pluralise(2, 'sheep', 'sheep') + "<br>");
  document.write("0 " + pluralise(0, 'pony', 'ponies') + "<br>");
  document.write("1 " + pluralise(1, 'pony', 'ponies') + "<br>");
  document.write("2 " + pluralise(2, 'pony', 'ponies') + "<br>");
});
