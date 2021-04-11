'use strict';
renderPage1();
renderPage2();
$('#button1').click(function(){
  $('main').empty();

  renderPage1();

});
$('#button2').click(function(){
  $('main').empty();

  renderPage2();

});
//page 1 function//
function renderPage1() {
  $.ajax('./data/page-1.json')
    .then (myData => {
      myData.forEach(element => {
        let newAnimal = new Animal (element);
        newAnimal.render();
      });
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
    /*   let dataClone=$( '#photo-template' ).clone();
  dataClone.addClass( this.keyword );

  dataClone.find( 'h2' ).text( this.title );
  dataClone.find( 'img' ).attr( 'src', this.image );
  dataClone.find( 'p' ).text( this.description ); */
    let dataClone = $('.photo-template').html();
    let dataSet = Mustache.render(dataClone,this);
    $( 'main' ).append( dataSet );
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
    $( '.div' ).hide();
    $( `.${selected}` ).show();
  } );

  selectList();
}

//////////////
//page 2 function:
//////////////
function renderPage2() {
  $.ajax('./data/page-2.json')
    .then (data1 => {
      data1.forEach(element => {
        let newOne = new Animal2 (element);
        newOne.render();
      });
    });
  function Animal2(data1) {
    this.image = data1.image_url;
    this.title = data1.title;
    this.description = data1.description;
    this.keyword = data1.keyword;
    this.horns = data1.horns;
    animal2Array.push(this);
  }
  let animal2Array = [];
  Animal2.prototype.render = function () {
    let option=$( '<option></option>' ).text( this.keyword );
    $( 'select' ).append( option );
    let map = {};
    $('select option').each(function () {
      if (map[this.value]) {
        $(this).remove();
      }
      map[this.value] = true;
    });
    /*   let dataClone=$( '#photo-template' ).clone();
  dataClone.addClass( this.keyword );

  dataClone.find( 'h2' ).text( this.title );
  dataClone.find( 'img' ).attr( 'src', this.image );
  dataClone.find( 'p' ).text( this.description ); */
    let dataClone = $('.photo-template').html();
    let dataSet = Mustache.render(dataClone,this);
    $( 'main' ).append( dataSet );
  };
  function myList() {
    let shown = {};
    let select = $( 'select' );
    animal2Array.forEach( ( element ) => {
      if ( ! shown[element.keyword] ) {
        let option = `<option value="${element.keyword}">${element.keyword}</option>`;
        select.append( option );
        shown[element.keyword] = true;
      }
    } );
  }

  $( 'select' ).on( 'change', function() {
    let selected = $( this ).val();
    $( '.div' ).hide();
    $( `.${selected}` ).show();
  } );

  myList();
}

