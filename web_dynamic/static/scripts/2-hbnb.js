$(() => {
  const listId = {};
  $('.amenities .popover li input').change(function () {
    if ($(this).is(':checked')) {
      listId[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete listId[$(this).attr('data-id')];
    }
    $('div.amenities h4').text(Object.values(listId).join(', '));
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
    if (res.status === 'OK') {
      $('header #api_status').addClass('available');
    }
  });
});
