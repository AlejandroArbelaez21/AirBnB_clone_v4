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
});
