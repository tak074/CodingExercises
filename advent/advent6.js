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

function sumOfAnyYes(answers) {
  // break into answers by group
  answers = answers.split('\n\n');
  var answersCount = 0;

  // loop through each group
  for (var i = 0; i < answers.length; i++) {
    var codex = {};
    var currGroup = answers[i];
    var numOfCommonYes = 0;

    // break each answers into answer per person
    currGroup = currGroup.split('\n');

    // foreach person, check if current entry exits in the codex
    currGroup.forEach((ans) => {
      ans = ans.split('');
      // loop through all the answers by that person
      ans.forEach((char) => {
        // if not, add it.
        if (!codex[char]) {
          codex[char] = 1;
        } else {
          //increase it by one
          codex[char] = codex[char] + 1;
        }
      })
    })

    // loop through finished codex
    for (var key in codex) {
      // if a value of the codex === currGroup.length
      if (codex[key] === currGroup.length) {
        numOfCommonYes++;
      }
    }
    answersCount += numOfCommonYes;
  }

  return answersCount;
}