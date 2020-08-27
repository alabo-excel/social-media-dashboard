var toggle = document.getElementById('toggle');
var header = document.getElementById('header');

var insta = document.getElementById('insta');
var facebook = document.getElementById('facebook');
var tube = document.getElementById('tube');
var twitter = document.getElementById('twitter');

var main = document.body;

toggle.addEventListener('click', () => {
    if (main.style.backgroundColor === 'white') {

        main.style.backgroundColor = 'hsl(230, 17%, 14%)'
        main.style.color = 'white'
        insta.style.backgroundColor = 'hsl(228, 28%, 20%)'
        facebook.style.backgroundColor = 'hsl(228, 28%, 20%)'
        twitter.style.backgroundColor = 'hsl(228, 28%, 20%)'
        tube.style.backgroundColor = 'hsl(228, 28%, 20%)'
        header.style.backgroundColor = 'hsl(232, 19%, 15%)'

    } else {
        main.style.color = 'hsl(230, 17%, 14%)'
        main.style.backgroundColor = 'white'
        header.style.backgroundColor = 'hsl(227, 47%, 96%)'
        insta.style.backgroundColor = 'hsl(227, 47%, 96%)'
        facebook.style.backgroundColor = 'hsl(227, 47%, 96%)'
        twitter.style.backgroundColor = 'hsl(227, 47%, 96%)'
        tube.style.backgroundColor = 'hsl(227, 47%, 96%)'
    }
})