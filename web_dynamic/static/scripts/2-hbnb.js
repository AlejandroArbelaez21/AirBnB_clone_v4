$(() => {
  const listId = {};
  let lish = [];
  $('.amenities .popover li input').change(function () {
    if ($(this).is(':checked')) {
      lish.push($(this).attr('data-name'));
      listId[$(this).attr('data_id')] = $(this).attr('data-name');
    } else {
      delete listId[$(this).attr('data_id')];
    }
    $('div.amenities h4').html(Object.values(listId).join(', ') || '&nbsp;');
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
    if (res.status === 'OK') {
      $('header #api_status').addClass('available');
    }
  });
});
