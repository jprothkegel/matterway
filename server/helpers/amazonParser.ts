export const amazonParser = (name: string) => {
  const newName = name.split(" ").join("+");
  return `https://amazon.com/s?k=${newName}&ref=nb_sb_noss`;
};
