FizzyDocs['shirt-promo'] = function( elem ) {
  var endDate = new Date( 2017, 9, 6 );
  var days = Math.round( ( endDate - new Date() ) / ( 1000 * 60 * 60 * 24 ) );
  var title = elem.querySelector('.shirt-promo__title');
  title.textContent += '. ' + 'Only on sale for ' + days + ' more days.';
};
