gsap.from('.page1 .box',{
    scale:0,
    rotate:270,
    duration:2,
    delay:1,
    
})

gsap.from('.page2 .box',{
    rotate:360,
    duration:10,
    scale:0,
    delay:1,
    scrollTrigger:{
        trigger:'.page2 .box',
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top 30%',
        scrub:5
    } 
})

gsap.to('.page3 .box',{
    rotate:360,
    x:500,
    duration:4,
    // scale:0,
    delay:1,
    scrollTrigger:{
        trigger:'.page3 .box',
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top 30%',
        scrub:4,
        pin:true
    } 
})