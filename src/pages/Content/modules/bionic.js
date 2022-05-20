const bold = (str) =>
  `${'<b style="font-weight: bold !important;">' + str + '</b>'}`;

const splitMapJoin = (str, char, fn) => {
  return str.split(char).map(fn).join(char);
};

export const bionicText = (text) =>
  splitMapJoin(text, '\n', (line) =>
    splitMapJoin(line, ' ', (word) => {
      const firstHalf = word.substring(0, Math.ceil(word.length / 2));
      return word.replace(firstHalf, bold(firstHalf));
    })
  );
