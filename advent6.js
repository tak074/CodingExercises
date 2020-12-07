function sumOfYes(answers) {
  // break into answers by group
  answers = answers.split('\n\n');
  var answersCount = 0;

  // loop through each group
  for (var i = 0; i < answers.length; i++) {
    var codex = {};
    var currGroup = answers[i];

    // break each answers into answer per person
    currGroup = currGroup.split('\n');

    // foreach person, check if current entry exits in the codex
    currGroup.forEach((ans) => {
      ans = ans.split('');
      // loop through all the answers by that person
      ans.forEach((char) => {
        // if not, add it.
        if (!codex[char]) {
          codex[char] = true;
        }
      })
    })
    // increase the answersCount by the number of answers by this group
    answersCount += Object.keys(codex).length;
  }

  return answersCount;
}