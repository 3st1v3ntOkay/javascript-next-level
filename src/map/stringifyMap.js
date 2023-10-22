// ? Luego pasarlo a Typescript
const myMap = new Map();

const setValuesToMap = (key, value) => {
  return myMap.set(key, value);
};

setValuesToMap("a", 1);
setValuesToMap("b", 2);
setValuesToMap("c", 3);
setValuesToMap("d", 4);

const stringifyMap = (map) => {
  let mapToJSON = JSON.stringify(Array.from(map.entries()));
  return mapToJSON;
};

const stringified = stringifyMap(myMap);
console.log(stringified);

const parseMap = (mapJSON) => {
  let parseToJSON = new Map(JSON.parse(mapJSON));
  return parseToJSON;
};

const parsed = parseMap(stringified);
console.log(parsed);

const updateNumberValue = (map, key, replace = 1) => {
  const value = map.get(key);
  return map.set(key, value + replace);
};

updateNumberValue(myMap, "a", 3);
updateNumberValue(myMap, "a", 3);

console.log(myMap);
