function accBeforeLoop(string) {
  var acc = 0;
  string = string.split('\n');
  var index = 0;
  var usedCommands = {};
  var looped = false;

  while (!looped) {
    var currentCommmand = string[index];
    // makea unique identifier through command and index
    var uniqueIdentifier = '' + currentCommmand + index;
    // check if the command has been ran before
    if (usedCommands[uniqueIdentifier]) {
      looped = true;
      break;
    }
    // if not, execute the code
    usedCommands[uniqueIdentifier] = true;
    currentCommmand = currentCommmand.split(' ');
    if (currentCommmand[0] === 'nop') {
      index++;
    } else if (currentCommmand[0] === 'acc') {
      acc += Number(currentCommmand[1]);
      index++;
    } else if (currentCommmand[0] === 'jmp') {
      index += Number(currentCommmand[1]);
    }
  }

  return acc;
};

function oneEdit(string) {
  var acc = 0;
  string = string.split('\n');
  var index = 0;
  var usedCommands = {};
  var looped = false;

  while (!looped) {
    if (index === string.length) {
      break;
    }
    var currentCommmand = string[index];
    // makea unique identifier through command and index
    var uniqueIdentifier = '' + currentCommmand + index;
    currentCommmand = currentCommmand.split(' ');
    // check if the command has been ran before
    if (usedCommands[uniqueIdentifier]) {
      if (currentCommmand[0] === 'nop') {
        currentCommmand[0] === 'jmp'
      } else if (currentCommmand[0] === 'jmp') {
        currentCommmand[0] === 'nop'
      }
    }
    // if not, execute the code
    usedCommands[uniqueIdentifier] = true;
    if (currentCommmand[0] === 'nop') {
      index++;
    } else if (currentCommmand[0] === 'acc') {
      acc += Number(currentCommmand[1]);
      index++;
    } else if (currentCommmand[0] === 'jmp') {
      index += Number(currentCommmand[1]);
    }
  }

  return acc;
};