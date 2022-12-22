const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const proImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedTxt = document.querySelectorAll('.animated-bg-text');
setTimeout(getData, 2500)
function getData (){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    proImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
    name.innerHTML = 'Rakesh Parab';
    date.innerHTML = '11 oct 2022';
    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedTxt.forEach(bg => bg.classList.remove('animated-bg-text'));

}


/* '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
Lorem ipsum dolor sit amet'
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'*/