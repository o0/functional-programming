const unique = list => {
  const items = {};
  const uniqueList = [];

  for (const it of list) {
    if (!(it in items)) {
      items[it] = it;
      uniqueList.push(it);
    }
  }

  return uniqueList;
};
