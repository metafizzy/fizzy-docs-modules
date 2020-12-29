( function() {

// global namespace
window.FizzyDocs = {};

// -------------------------- helpers -------------------------- //

window.filterBind = function( elem, type, selector, listener ) {
  elem.addEventListener( type, function( event ) {
    if ( event.target.matches( selector ) ) {
      listener( event );
    }
  } );
};

} )();
