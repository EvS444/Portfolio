// efeito 3d suave

const card = document.querySelector('.features');

    card.addEventListener("mousemove", cardEffect);
    card.addEventListener("mouseleave", cardBack);
    card.addEventListener("mouseenter", cardEnter);

    function cardEffect(event)
    {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth/2;
        const centerY = card.offsetTop + cardHeight/2;
        const positionX = event.clientX - centerX;
        const positionY = event.clientY - centerY;
        
        const rotateX = ((+1)*1*positionY/(cardHeight/2)).toFixed(2);
        const rotateY = ((-1)*1*positionX/(cardWidth/2)).toFixed(2);

        console.log(rotateX,rotateY);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

    function cardBack(event)
    {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        cardTransition();
    }

    function cardTransition()
    {
        clearInterval(card.transitionId);
        card.style.transition = 'transform 400ms';
        card.transitionId = setTimeout(() => {
            card.style.transition = '';
        },400);
    }

    function cardEnter(event)
    {
        cardTransition();
    }