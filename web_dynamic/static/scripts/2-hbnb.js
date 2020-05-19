$(() => {
  const listId = {};
  $('.amenities .popover li input').change(function () {
    if ($(this).is(':checked')) {
      listId[$(this).attr('data_id')] = $(this).attr('data-name');
      console.log(listId);
      
    } else {
      delete listId[this.dataset.id];
    }
    $('div.amenities h4').html(Object.values(listId).join(', ') || '&nbsp;');
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
    if (res.status === 'OK') {
      $('header #api_status').addClass('available');
    }
  });
});
