$(document).ready(function () {
    $(window).scrollTop(0);
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".viewbox-snake-blue-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1-delay",
            start: "top top",
            endTrigger: ".viewbox-trigger1",
            end: "top 66%",
            scrub: 1
        },
        top: "100%"
    })



    gsap.to(".viewbox-snake-red-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1-delay",
            start: "top top",
            endTrigger: ".viewbox-trigger1",
            end: "top 66%",
            scrub: 1
        },
        left: "0"
    })

    gsap.to(".viewbox-snake-white-1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1-delay",
            start: "top top",
            endTrigger: ".viewbox-trigger1",
            end: "top top",
            scrub: 1
        },
        left: "100%"
    })













    // ---------------------------PPT 2 -----------------------------------

    gsap.to(".ppt2-wrapper", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "top 66%",
            end: "top 24%",
            scrub: 1
        },
        top: 0
    })

    gsap.to(".ppt1-title", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "top 66%",
            end: "top 24%",
            scrub: 1
        },
        opacity: 0
    })



    gsap.from(".ppt2-sidetitle1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "top 66%",
            end: "bottom 50%",
            scrub: 1
        },
        width: 0,
        opacity: 0
    })

    gsap.from(".ppt2-sidetitle2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "bottom 50%",
            end: "bottom top",
            scrub: 1
        },
        width: 0,
        opacity: 0
    })

    gsap.from(".ppt2-sidetitle3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger2",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        width: 0,
        opacity: 0
    })


        gsap.to(".ppt2-title", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger2",
            start: "bottom bottom",
            end: "bottom 50%",
            scrub: 1
        },
        opacity: 1
    })

    gsap.to(".ppt2-neon", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger2",
            start: "bottom bottom",
            end: "bottom 50%",
            scrub: 1
        },
        opacity: 1
    })

    gsap.to(".ppt2-reflection", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger2",
            start: "bottom bottom",
            end: "bottom 50%",
            scrub: 1
        },
        opacity: 1
    })

    gsap.to(".ppt2-blue-light", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger2",
            start: "bottom bottom",
            end: "bottom 50%",
            scrub: 1
        },
        opacity: 1
    })








    gsap.from(".ppt2-tv", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        opacity: 0,
        scale: 4
    })

    gsap.from(".ppt2-tel", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "bottom 50%",
            end: "bottom top",
            scrub: 1
        },
        opacity: 0,
        scale: 4
    })

    gsap.from(".ppt2-laptop", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger2",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        left: "14%",
        opacity: 0
    })






    
    gsap.to(".viewbox-snake-red-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "bottom 50%",
            endTrigger: ".viewbox-trigger3",
            end: "bottom bottom",
            scrub: 1
        },
        right: "100%"
    })


    gsap.to(".viewbox-snake-white-2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "bottom 50%",
            endTrigger: ".viewbox-trigger3",
            end: "bottom bottom",
            scrub: 1
        },
        top: "94%"
    })

    gsap.to(".viewbox-snake-red-3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger1",
            start: "bottom 50%",
            endTrigger: ".viewbox-trigger3",
            end: "top 42%",
            scrub: 1
        },
        left: "100%"
    })






    // ---------------------------PPT 3 -----------------------------------

    gsap.to(".ppt3-wrapper", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger3",
            start: "top 42%",
            end: "bottom bottom",
            scrub: 1
        },
        left: 0
    })

    gsap.from(".ppt3-girl", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger3",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        top: "-100%",
        opacity: 0
    })

    gsap.from(".ppt3-boy", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            scroller: ".screen1-wrapper",
            trigger: ".viewbox-trigger3",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        top: "100%",
        opacity: 0
    })




    
    // ---------------------------PPT 4 -----------------------------------
    gsap.to(".pin1", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
        },
        height: "15.416666666666668VW"
    })
    gsap.to(".pin1-title", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
        },
        opacity: 1
    })


    gsap.to(".pin2", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1,
        },
        height: "15.260416666666668VW"
    })
    gsap.to(".pin2-title", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1,
        },
        opacity: 1
    })




    gsap.to(".pin3", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        height: "11.770833333333334VW"
    })
    gsap.to(".pin3-title", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        opacity: 1
    })



    gsap.to(".pin4", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
        },
        height: "13.854166666666668VW"
    })
    gsap.to(".pin4-title", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        opacity: 1
    })


    gsap.to(".worldmap", {
        scrollTrigger: {
            toggleActions: "play pause resume reset",
            trigger: ".mtelglobal-container",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
        },
        opacity: 1,
        bottom: 0,
    })



})