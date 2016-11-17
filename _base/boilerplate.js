( function() {

// global namespace
window.FizzyDocs = {};

// -------------------------- helpers -------------------------- //

window.filterBind = function( elem, type, selector, listener ) {
  elem.addEventListener( type, function( event ) {
    if ( matchesSelector( event.target, selector ) ) {
      listener( event );
    }
  });
};

})();
