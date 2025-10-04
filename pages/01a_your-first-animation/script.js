import gsap from "gsap";
gsap.to('.card', {
    opacity : 1,
    scale: 1,
    duration : 0.5,
    onComplete: () => {
        gsap.to('.card', {
            y: -20,
            repeat: -1,
            yoyo: true,
            duration: 0.2, 
        })
        // alert("Animation Completed yeahhhhhhh")

    }
})

gsap.from


//properties like opacities durations .to methods as well as on complete HANDLER