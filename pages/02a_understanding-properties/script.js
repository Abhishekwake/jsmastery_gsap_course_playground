import gsap from 'gsap';
gsap.to('.box', {
    opacity : 1,
    duration : 1,
    rotation: 360,
    background : '#ff6f61',
    borderRadius: '50%',
    scale: 1.25,
    ease: 'power1.inOut',
    // repeat: -1 , //infinity // 
    // yoyo: true,
    // repeatDelay: 2,
    // paused : true
    // stagger: 1,2,3... offset timing for For a raise of targets /multiple object like 1 2 3 4
})

    // delay: 1.3,
    // rotationY : 360,
    // rotationX : 360,
    // x: -200,
    // y: -200, 
    //repeat:2,