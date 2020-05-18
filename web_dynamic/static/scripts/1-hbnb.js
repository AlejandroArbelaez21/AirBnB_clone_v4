
const listId = {};
$('input#amenChbox').change(() => {
  if (this.checked) {
    listId[this.dataset.id] = this.dataset.name;
  } else {
    delete listId[this.dataset.id];
  }
  const listVal = Object.values(listId);
  $('.amenities h4').text(listVal.join(', '));
});
