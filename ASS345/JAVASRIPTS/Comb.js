function George(p, s, what, young) {
  return s + " bought " + p + what;
}

function chop(ticket, father, works, talk) {
  var interpret = ticket + talk;

  interpret = father + " bags of " + works;

  interpret = George(interpret, "I", "yesterday", 10);

  return interpret;
}

var she = chop(3, "3", "rice", 10);
console.log(she);
