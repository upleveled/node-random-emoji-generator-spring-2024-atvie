import { argv } from 'node:process';
import * as emoji from 'node-emoji';

const emojiName = argv[2];

if (argv.length < 3) {
  // This happens if there is no user input
  console.log(emoji.random().emoji);
} else if (emoji.get(emojiName)) {
  // This happens if the emoji exists
  console.log(emoji.get(emojiName));
} else {
  // This happens only if the emoji doesn't exist
  console.log(`The emoji "${emojiName}" doesn't exist`);
}
