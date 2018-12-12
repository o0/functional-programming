const findNextUnique = ([list, uniqueList = [], i = 0, items = {}]) => i === list.length
  ? uniqueList
  : findNextUnique(
    list,
    list[i] in items ? uniqueList : uniqueList.concat([list[i]]),
    i + 1,
    list[i] in items ? items : Object.assign({}, items, {
      [list[i]] : true
    }),
  );
