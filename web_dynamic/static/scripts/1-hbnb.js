const listID = {};
$('input#amenChbox').change( () => {
    if (this.checked) {
        listID[this.dataset.id] = this.dataset.name;
    } else {
        delete listID[this.dataset.id]
    }
    const listVal = Object.values(listId);
    $(".amenities h4").text(listVal.join(', ');
});