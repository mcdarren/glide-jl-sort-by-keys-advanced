window.function = function (data, sort_keys, delimiter, sort_type, sort_order) {
  if (data.value === undefined) return undefined;
  if (sort_keys.value === undefined) return undefined;
  var delim = delimiter.value ? delimiter.value : ',';
  var sorttype = sort_type.value ? sort_type.value : 'numerical';
  var ordering = sort_order.value ? sort_order.value : 'desc';

  var data_arr = data.value.split(delim);
  var keys_arr = sort_keys.value.split(delim);
  var obj = {};
  for (i=0; i<data_arr.length; i++) {
    obj[data_arr[i]] = keys_arr[i];
  }
  var sorted;
  if (sorttype === 'lexical') {
    sorted = Object.keys(obj).sort((a,b) => (obj[b] > obj[a]) ? 1 : ((obj[a] > obj[b]) ? -1 : 0));
  }
  else {
    sorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]});
  }
  if (ordering === 'asc') {
    sorted = sorted.reverse();
  }
  var joined = sorted.join('');

  return joined;
}
