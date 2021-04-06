$(document).ready(function () {

    function getSharingText() {

        //returns sharing text according to user type
        return (sessionStorage.getItem("user") == 0 ? "New assignment added. Please use this code to access: " : "I've created a new quiz. Join me by using this code: ") + sessionStorage.getItem("code");

    }

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).val()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    $("#twitter-share-btn").click(function () {

        let twiturl = "https://twitter.com/intent/tweet?text=" + getSharingText().replace(/\s+/g, "%20");
        window.location.href = twiturl;

    });

    $("#sharing-dialog-text").val(getSharingText());

    $("#copy-btn").click(function () {
        copyToClipboard("#sharing-dialog-text");
    })

    $("#fb-post-btn").click(function () {

        FB.ui({
            display: 'popup',
            method: 'share',
            quote: 'Join us in Truth Seekers!',
            href: 'https://developers.facebook.com/',
            media: '',

        }, function (response) { });

    })

});