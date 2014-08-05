jQuery(function($){
function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    document.getElementById('signinButton').setAttribute('style', 'display: none');
  } else {
    console.log('Sign-in state: ' + authResult['error']);
  }
}

})