'use strict';

$.ajax('/data/page-1.json')
  .then(myData => {

    myData.forEach(element => {
      //console.log(element);
      $('select').append(`<option>${element.keyword}</option>`);
      let map = {};
      $('select option').each(function () {
        if (map[this.value]) {
          $(this).remove();
        }
        map[this.value] = true;
      });
      $('#photo-template').append(`<h2>${element.title}</h2>`);
      $('#photo-template').append(`<img src="${element.image_url}"></img>`);
      $('#photo-template').append(`<p>${element.description}</p>`);
      $('#photo-template').append(`<p> Horns : ${element.horns}</p>`);
    });
  });
