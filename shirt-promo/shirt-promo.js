FizzyDocs['shirt-promo'] = function( elem ) {
  let endDate = new Date( 2017, 9, 6 );
  let days = Math.round( ( endDate - new Date() ) / ( 1000 * 60 * 60 * 24 ) );
  let title = elem.querySelector('.shirt-promo__title');
  title.textContent += `. Only on sale for ${days} more days.`;
};
