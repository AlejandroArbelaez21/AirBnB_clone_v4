$(() => {
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
    if (res.status === 'OK') {
      $('header #api_status').addClass('available');
    }
  });
  const listId = {};
  $('.amenities .popover li input').change(function (event) {
    if (this.checked) {
      listId[this.dataset.id] = this.dataset.name;
    } else {
      delete listId[this.dataset.id];
    }
    const listval = Object.values(listId);
    $('.amenities h4').text(listval.join(', '));
  });
});
