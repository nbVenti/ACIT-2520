
const wordPosition = (words) => {
    let new_word = {};
    for (u in words) {
        new_word[words[u]] = []
    }
    for (i in words) {
        if (words[i] in new_word) {
            new_word[words[i]].push(parseInt(i));
        }
    }
    return new_word;
}

const input = [
    "buy",
    "it",
    "use",
    "it",
    "break",
    "it",
    "fix",
    "it",
    "trash",
    "it",
    "change",
    "it",
    "mail",
    "upgrade",
    "it",
];

const output = wordPosition(input);

console.log(output);
/*
Output should look like so:
{
  break: [ 4 ],
  buy: [ 0 ],
  change: [10],
  fix: [ 6 ],
  it:  [1, 3, 5, 7, 9, 11, 14],
  mail: [ 12 ],
  trash: [ 8 ],
  upgrade: [ 13 ],
  use: [ 2 ],
}

*/