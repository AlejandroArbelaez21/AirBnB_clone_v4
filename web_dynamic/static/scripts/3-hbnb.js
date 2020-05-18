$(() => {
  $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
    if (res.status === 'OK') {
      $('header #api_status').addClass('available');
    }
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
function createTemplate (place) {
  return (`
    <article>
      <div class="title_box">
        <h2>{{ place.name }}</h2>
        <div class="price_by_night">$${place.price_by_night}</div>
      </div>
      <div class="information">
        <div class="max_guest">{{ place.max_guest }} Guest{% if place.max_guest != 1 %}s{% endif %}</div>
        <div class="number_rooms">{{ place.number_rooms }} Bedroom{% if place.number_rooms != 1 %}s{% endif %}</div>
        <div class="number_bathrooms">{{ place.number_bathrooms }} Bathroom{% if place.number_bathrooms != 1 %}s{% endif %}</div>
      </div>
      <div class="user">
        <b>Owner:</b> {{ place.user.first_name }} {{ place.user.last_name }}
      </div>
      <div class="description">
        {{ place.description | safe }}
      </div>
  </article>`);
}
