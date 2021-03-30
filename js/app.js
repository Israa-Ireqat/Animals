'use strict';
$.ajax('./data/page-1.json')
  .then (myData => {
    myData.forEach(element => {
      let newAnimal = new Animal (element);
      newAnimal.render();
    });
    $( '#photo-template' ).first().remove();
  });
function Animal(myData) {
  this.image = myData.image_url;
  this.title = myData.title;
  this.description = myData.description;
  this.keyword = myData.keyword;
  this.horns = myData.horns;
  animalArray.push(this);
}
let animalArray = [];
Animal.prototype.render = function () {
  let option=$( '<option></option>' ).text( this.keyword );
  $( 'select' ).append( option );
  let map = {};
  $('select option').each(function () {
    if (map[this.value]) {
      $(this).remove();
    }
    map[this.value] = true;
  });

  let dataClone=$( '#photo-template' ).clone();
  dataClone.addClass( this.keyword );

  dataClone.find( 'h2' ).text( this.title );
  dataClone.find( 'img' ).attr( 'src', this.image );
  dataClone.find( 'p' ).text( this.description );
  $( 'main' ).append( dataClone );
};
function selectList() {
  let shown = {};
  let select = $( 'select' );
  animalArray.forEach( ( element ) => {
    if ( ! shown[element.keyword] ) {
      let option = `<option value="${element.keyword}">${element.keyword}</option>`;
      select.append( option );
      shown[element.keyword] = true;
    }
  } );
}

$( 'select' ).on( 'change', function() {
  let selected = $( this ).val();
  $( 'div' ).hide();
  $( `.${selected}` ).show();
} );

selectList();


