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
});
