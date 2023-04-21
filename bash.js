// The prompt function is defined to output data to the console and write a > prompt character to the terminal. This function is called at the start of the program to output a welcome message and write the initial > prompt character.
const prompt = (data) => {
  console.log(data);
  process.stdout.write('> ');
};
// process.stdout.write is used to write data to the standard output stream, which is typically the terminal where the Node.js process is running. It takes a string as an argument and writes it to the terminal. In the code above, process.stdout.write is used to display the > prompt character and the user's input.




// The main function is where the core logic of the program is defined. It takes the user's input as an argument, splits it into a command and an argument (if applicable), and then uses a switch statement to determine which command to execute. For example, if the user enters the pwd command, the program requires the ./pwd module and passes a callback function (prompt) to the pwd function. The same pattern is followed for the ls, cat, and curl commands.
const main = (data) => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');
  // entry is the string entered by the user in the terminal. split() is a method of strings in JavaScript that breaks a string into an array of substrings based on a specified separator. In this case, the separator is a space, so entry.split(' ') will create an array with two elements: the first element is the command entered by the user, and the second element is the argument (if any) for that command.

//   The code uses destructuring assignment to assign the first element of the array to the variable command and the second element (if it exists) to the variable arg. This allows the code to easily access the command and its argument (if any) later in the switch statement.

// For example, if the user enters the command cat file.txt, entry.split(' ') will create an array with the elements ['cat', 'file.txt']. The destructuring assignment const [command, arg] = entry.split(' ') will assign 'cat' to command and 'file.txt' to arg. This allows the cat command function to easily access the name of the file to be read ('file.txt') in order to display its contents to the user.
  switch (command) {
    case 'pwd':
      require('./pwd')(prompt);
      break;
    case 'ls':
      require('./ls')(prompt);
      break;
    case 'cat':
      require('./cat')(arg, prompt);
      break;
    case 'curl':
      require('./curl')(arg, prompt);
      break;
    default:
      prompt('not found');
  }
};

prompt('Welcome to Node Shell!');
// process.stdin.on is used to listen for data events on the standard input stream, which is where the user enters data in the terminal. It takes two arguments: the first is the name of the event to listen for (in this case, data), and the second is a callback function that will be called when the event is triggered. In the code above, process.stdin.on is used to listen for the user's input, and when it receives a data event, it calls the main function with the user's input as an argument.
process.stdin.on('data', main);
// The main function is set as the event handler for the data event on the stdin stream. This means that whenever the user enters a line of text in the terminal and presses Enter, the main function is called with the user's input as an argument.
