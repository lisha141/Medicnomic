window.profile;
function onSignIn(googleUser) {
    location.href = "./mainpage.html"
    profile = googleUser.getBasicProfile()
    console.log('user is' + JSON.stringify(profile))
}
function signOut() {
    
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    })
}
window.onbeforeunload = function (e) {
    gapi.auth2.getAuthInstance().signOut();
}

