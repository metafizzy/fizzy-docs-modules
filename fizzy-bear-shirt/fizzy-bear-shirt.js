FizzyDocs['fizzy-bear-shirt'] = function( elem ) {
  var endDate = new Date( 2016, 10, 30 );
  var days = Math.round( ( endDate - new Date() ) / ( 1000 * 60 * 60 * 24 ) );
  elem.querySelector('.fizzy-bear-shirt__title').textContent = 'Rainbow bear shirts. ' +
    'Only on sale for ' + days + ' more days.';

};
