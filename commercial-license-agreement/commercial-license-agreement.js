FizzyDocs['commercial-license-agreement'] = function( elem ) {

  let licenseData = {
    developer: {
      title: 'Developer',
      'for-official': 'one (1) Licensed Developer',
      'for-plain': 'one individual Developer',
    },
    team: {
      title: 'Team',
      'for-official': 'up to eight (8) Licensed Developer(s)',
      'for-plain': 'up to 8 Developers',
    },
    organization: {
      title: 'Organization',
      'for-official': 'an unlimited number of Licensed Developer(s)',
      'for-plain': 'an unlimited number of Developers',
    },
  };

  // ----- clone h2 ----- //

  let buttonGroup = elem.querySelector('.button-group');

  let h2 = elem.querySelector('h2');
  let cloneH2 = h2.cloneNode( true );
  cloneH2.style.borderTop = 'none';
  cloneH2.style.marginTop = 0;
  cloneH2.id = '';
  cloneH2.innerHTML = cloneH2.innerHTML.replace( 'Commercial License',
      'Commercial <span data-license-property="title"></span> License' );
  h2.textContent = '';

  buttonGroup.parentNode.insertBefore( cloneH2, buttonGroup.nextSibling );

  // ----- propertyElems ----- //

  let propertyParts = [];

  let dataPropertyElems = elem.querySelectorAll('[data-license-property]');

  for ( let i = 0, len = dataPropertyElems.length; i < len; i++ ) {
    let dataPropertyElem = dataPropertyElems[i];
    let part = {
      property: dataPropertyElem.getAttribute('data-license-property'),
      element: dataPropertyElem,
    };
    propertyParts.push( part );
  }

  // ----- button ----- //

  function onButtonClick( button ) {
    // change selected class
    let prevSelected = buttonGroup.querySelector('.is-selected');
    if ( prevSelected ) {
      prevSelected.classList.remove('is-selected');
    }
    button.classList.add('is-selected');
    // get license data for developer, team, or organization
    let optionKey = button.getAttribute('data-license-option');
    let licenseOption = licenseData[ optionKey ];
    // set elements text accordingly
    propertyParts.forEach( function( part ) {
      part.element.textContent = licenseOption[ part.property ];
    } );
  }

  // click developer button
  onButtonClick( buttonGroup.querySelector('.button--developer') );

  filterBind( buttonGroup, 'click', '.button', function( event ) {
    onButtonClick( event.target );
  } );

};
