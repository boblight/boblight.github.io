$(document).ready(function () {

    function parsequerystring(){
         
    }

    $("#twitter-share-btn").click(function () {

        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('code');
        let twiturl = 'https://twitter.com/intent/tweet?text=';
        let msg = "Truth Seeker ID: ";
        msg = msg.replace(/\s+/g, "%20");
        msg = msg.concat(myParam);
        twiturl = twiturl.concat(msg);
        window.location.href = twiturl;

    });

    $("#facebook-share-btn").click(function () {

        // const urlParams = new URLSearchParams(window.location.search);
        //const myParam = urlParams.get('code');
        //let hrefpage = "facebookshare.html?code=";
        //hrefpage = hrefpage.concat(myParam);
        //window.location.href = hrefpage;  

        FB.ui({
            display: 'popup',
            method: 'share',
            quote: 'Join us in Truth Seekers!',
            href: 'https://developers.facebook.com/',
            media: '', 

        }, function (response) { });

    });

    




});