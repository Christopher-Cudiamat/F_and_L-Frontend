export const slugParser = (str: string) => {
  const invalidWords = ['a', 'the', 'or', 'an', 'and', 'of', 'but'];
  const formatted = str
    .split('-')
    .map((item) => {
      if (invalidWords.includes(item)) return item;
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(' ');

  return formatted;
};
