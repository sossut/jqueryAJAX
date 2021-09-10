'use strict';

const apiURL = 'https://api.tvmaze.com/search/shows?';

const search = function(event) {
    event.preventDefault();

    //console.log($(this).serialize());

    $("#result").empty();

    $.getJSON(apiURL + $(this).serialize(), function(response) {
        //console.log(response);
        
        $.each(response, function(index, tvShow) {
            console.log(tvShow.show);

            $("#result").append(`<article>
            <h2>${tvShow.show.name}</h2>
            <p>${tvShow.show.genres}</p>
            <a href="${tvShow.show.officialSite ? tvShow.show.officialSite : tvShow.show.url}">Linkki kotisivulle</a>
            <figure>
            <img src="${tvShow.show.image ? tvShow.show.image.medium : 'tile.png'}" alt="${tvShow.show.name}"></img>
            <figcaption>${tvShow.show.name}</figcaption>
            <p>${tvShow.show.summary}</p>
            </figure>
        </article>`);
        }).fail(function() {
            $("#result").append("<h1>Virhe</h1>");
        });
        
    });
}
$("form").submit(search);

/*
"use strict";

const apiURL = "https://api.tvmaze.com/search/shows?";

const hae = function (event) {
  event.preventDefault();
  $("#tulos").empty();
  $.getJSON(apiURL + $(this).serialize(), function (response) {
    $("#tulos").append("<h1>Tulokset</h1>");
    if (response.length > 0) {
      $.each(response, function (indeksi, sarja) {
        console.log(sarja.show);
        $("#tulos").append(`<article>
    <h2>${sarja.show.name}</h2>
    <p>${sarja.show.genres}</p>
    <a href="${
      sarja.show.officialSite ? sarja.show.officialSite : sarja.show.url
    }">Linkki kotisivulle</a>
    <figure>
      <img src="${
        sarja.show.image ? sarja.show.image.medium : "tile.png"
      }" alt="${sarja.show.name}">
      <figcaption>${sarja.show.name}</figcaption>
    </figure>
    <p>${sarja.show.summary}</p>
  </article>`);
      });
    } else {
        $("#tulos").append("<h1>Ei tuloksia</h1>");
    }
  }).fail(function () {
    $("#tulos").append("<h1>Virhe</h1>");
  });
};

$("form").submit(hae);
*/
