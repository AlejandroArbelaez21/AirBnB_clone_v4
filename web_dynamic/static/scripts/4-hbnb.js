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
  amenityIds = [];
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
    if (res.status === 'OK') {
      $('header #api_status').addClass('available');
    }
  });
  $('.filters button').click(() => {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      contentType: 'application/json',
      data: JSON.stringify({amenities: Object.keys(amenityIds)}),
      success: function (data) {
        let listCheck = [];
        for (let index = 0; index < data.length; index++) {
          listCheck.push(createTemplate(data[index]));
        }
        listCheck = listCheck.join('');
        $('section.places > article').remove();
        $('section.places').append(listCheck);
      }
    });
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
      for (let index = 0; index < data.length; index++) {
        $('section.places').append(createTemplate(data[index]));
      }
    }
  });
});
function createTemplate (place) {
  return (`
      <article>
      <div class="title_box">
        <h2>${place.name}</h2>
        <div class="price_by_night">$${place.price_by_night}</div>
      </div>
      <div class="information">
        <div class="max_guest">${place.max_guest} Guests</div>
        <div class="number_rooms">${place.number_rooms} Rooms</div>
        <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
      </div>
      <div class="user">
      </div>
      <div class="description">
        ${place.description}
      </div>
  </article>`);
}
