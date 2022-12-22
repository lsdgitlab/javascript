const buttons = document.querySelectorAll('.ripple');

buttons.forEach( btn => {
    btn.addEventListener('click', function (eve) {
        const x = eve.clientX
        const y = eve.clientY
        // console.log(x, y);

        const btnTop = eve.target.offsetTop;
        const btnLeft = eve.target.offsetLeft;
        // console.log(btnTop, btnLeft);

        const xInside = x - btnLeft;
        const yInside = y - btnTop;
        // console.log(xInside, yInside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500)

    })
})