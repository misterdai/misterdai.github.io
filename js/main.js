$(document).ready(function() {
  var index, store;
  $('#searchClose').click(function(event) {
    event.preventDefault();
    $('#searchUi').removeClass('show');
  });
  fetch('/lunr.idx.json')
    .then(function(response) { return response.json(); })
    .then(function(lunrData) {
      index = lunr.Index.load(lunrData.index);
      store = lunrData.store;
      $('input#search').on('keyup', function() {
        var query = $(this).val();
        var result = index.search(query).slice(0, 6);
        var resultEl = $('#searchResults');
        resultEl.find('.search-item').remove();
        if (result.length === 0) {
          $('<a class="dropdown-item disabled search-item" href="#">No results</a>')
            .appendTo(resultEl);
          $('#searchUi').addClass('show');
          return;
        } else {
          for (var item in result) {
            var ref = result[item].ref;
            var searchItem = $('<a class="dropdown-item search-item" />');
            searchItem.attr('href', store[ref].href);
            searchItem.text(store[ref].title);
            resultEl.append(searchItem);
          }
        }
        $('#searchUi').addClass('show');
      });
    });
});