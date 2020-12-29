( function() {

  let ghButtonGUID = 0;

  FizzyDocs['gh-button'] = function( elem ) {

    let hrefParts = elem.href.split('/');
    let user = hrefParts[3];
    let repo = hrefParts[4];
    let statTextElem = elem.querySelector('.gh-button__stat__text');

    // get data
    ghButtonGUID++;
    let callbackName = 'ghButtonCallback' + ghButtonGUID;

    window[ callbackName ] = function( response ) {
      let starText = addCommas( response.data.stargazers_count );
      statTextElem.textContent = starText;
    };

    function addCommas( num ) {
      return num.toString().replace( /(\d)(?=(\d{3})+$)/g, '$1,' );
    }

    // create & load script
    let script = document.createElement('script');
    script.src = 'https://api.github.com/repos/' + user + '/' + repo +
      '?callback=' + callbackName;
    document.head.appendChild( script );

  };

} )();
