const filterObject = (data, fields) =>
  Object.keys(data)
    .filter((key) => fields.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

module.exports = { filterObject };
