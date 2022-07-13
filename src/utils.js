// Search for all data items with fields matching query
function findQueryMatch({query, data}) {
  return data.filter((item) =>
    Object.keys(query).every((field) =>
      query[field] === String(item[field])));
}

module.exports.findQueryMatch = findQueryMatch;
