gsap.registerPlugin(ScrollTrigger)

let h = document.querySelector('.section6').offsetHeight;

let mm = gsap.matchMedia();

mm.add("(max-width: 500px)", () => {

    gsap.from(".img1",{
        scrollTrigger:{
            trigger: ".img1",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text1",{
        scrollTrigger:{
            trigger: ".text1",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img2",{
        scrollTrigger:{
            trigger: ".img2",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text2",{
        scrollTrigger:{
            trigger: ".text2",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img3",{
        scrollTrigger:{
            trigger: ".img3",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text3",{
        scrollTrigger:{
            trigger: ".text3",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img4",{
        scrollTrigger:{
            trigger: ".img4",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text4",{
        scrollTrigger:{
            trigger: ".text4",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });
    

    gsap.from(".img5",{
        scrollTrigger:{
            trigger: ".img5",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text5",{
        scrollTrigger:{
            trigger: ".text5",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img6",{
        scrollTrigger:{
            trigger: ".img6",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text6",{
        scrollTrigger:{
            trigger: ".text6",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".info",{
        scrollTrigger:{
            trigger: ".info",
            start: "top 80%",
            end: "+=100",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        stagger:.2,
        ease: "sine.inOut",
     });


    gsap.to(".liston",{
        scale:1.1, 
        duration:1, 
        repeat: -1, 
        yoyo:true, 
        ease: "sine.inOut" 
    });

    let section = 0;

    let tl = gsap.timeline({
        defaults:{
            ease: "sine.inOut"
        },
        scrollTrigger:{
            trigger:".page-content",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        }
    })
    


    tl.to(".circle",{y:h*1.3},section*.5)

    section+=1;
    
    tl.to(".circle",{y:h*2.3},section*.5)

    section+=1;

    tl.to(".circle",{y:h*3.3},section*.5)

    section+=1;

    tl.to(".circle",{y:h*4.3},section*.5)

    section+=1;

    tl.to(".circle",{y:h*5.3},section*.5)

    section+=1;

    tl.to(".circle",{y:h*6.3},section*.5)

    section+=1;

    tl.to(".circle",{y:h*7.3, opacity:0},section*.5)

    section+=1;


})

mm.add("((min-width:501px) and (max-width: 840px))", () => {

    gsap.from(".img1",{
        scrollTrigger:{
            trigger: ".img1",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text1",{
        scrollTrigger:{
            trigger: ".text1",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img2",{
        scrollTrigger:{
            trigger: ".img2",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text2",{
        scrollTrigger:{
            trigger: ".text2",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img3",{
        scrollTrigger:{
            trigger: ".img3",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text3",{
        scrollTrigger:{
            trigger: ".text3",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img4",{
        scrollTrigger:{
            trigger: ".img4",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text4",{
        scrollTrigger:{
            trigger: ".text4",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });
    

    gsap.from(".img5",{
        scrollTrigger:{
            trigger: ".img5",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text5",{
        scrollTrigger:{
            trigger: ".text5",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".img6",{
        scrollTrigger:{
            trigger: ".img6",
            start: "top 80%",
            end: "+=80",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        ease: "sine.inOut",
    });  
    
    gsap.from(".text6",{
        scrollTrigger:{
            trigger: ".text6",
            start: "top 80%",
            end: "+=200",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".info",{
        scrollTrigger:{
            trigger: ".info",
            start: "top 80%",
            end: "+=100",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        stagger:.2,
        ease: "sine.inOut",
     });


    gsap.to(".liston",{
        scale:1.1, 
        duration:1, 
        repeat: -1, 
        yoyo:true, 
        ease: "sine.inOut" 
    });

    let section = 0;

    let tl = gsap.timeline({
        defaults:{
            ease: "sine.inOut"
        },
        scrollTrigger:{
            trigger:".page-content",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        }
    })
    


    tl.to(".circle",{y:h*1.2},section*.5)

    section+=1;
    
    tl.to(".circle",{y:h*2.2},section*.5)

    section+=1;

    tl.to(".circle",{y:h*3.2},section*.5)

    section+=1;

    tl.to(".circle",{y:h*4.2},section*.5)

    section+=1;

    tl.to(".circle",{y:h*5.2},section*.5)

    section+=1;

    tl.to(".circle",{y:h*6.2},section*.5)

    section+=1;

    tl.to(".circle",{y:h*7.2, opacity:0},section*.5)

    section+=1;


})

mm.add("(min-width:841px)", () => {

    gsap.from(".img1",{
        scrollTrigger:{
            trigger: ".img1",
            start: "top center",
            end: "+=80",
            scrub: 3,
        },
        x:400,
        opacity:0,
        ease: "sine.inOut",
    });
   
    gsap.from(".text1",{
       scrollTrigger:{
           trigger: ".text1",
           start: "top 80%",
           end: "+=200",
           scrub: 3,
       },
       x:-400,
       opacity:0,
       ease: "sine.inOut",
   });
   
   gsap.from(".img2",{
       scrollTrigger:{
           trigger: ".img2",
           start: "top center",
           end: "+=80",
           scrub: 3,
       },
       x:-400,
       opacity:0,
       ease: "sine.inOut",
   });
   
   gsap.from(".text2",{
      scrollTrigger:{
          trigger: ".text2",
          start: "top 80%",
          end: "+=200",
          scrub: 3,
      },
      x:400,
      opacity:0,
      ease: "sine.inOut",
   });
   
   gsap.from(".img3",{
       scrollTrigger:{
           trigger: ".img3",
           start: "top center",
           end: "+=80",
           scrub: 3,
       },
       x:400,
       opacity:0,
       ease: "sine.inOut",
   });
   
   gsap.from(".text3",{
      scrollTrigger:{
          trigger: ".text3",
          start: "top 80%",
          end: "+=200",
          scrub: 3,
      },
      x:-400,
      opacity:0,
      ease: "sine.inOut",
   });
   
   gsap.from(".img4",{
       scrollTrigger:{
           trigger: ".img4",
           start: "top center",
           end: "+=80",
           scrub: 3,
       },
       x:-400,
       opacity:0,
       ease: "sine.inOut",
   });
   
   gsap.from(".text4",{
      scrollTrigger:{
          trigger: ".text4",
          start: "top 80%",
          end: "+=200",
          scrub: 3,
      },
      x:400,
      opacity:0,
      ease: "sine.inOut",
   });
   
   gsap.from(".img5",{
       scrollTrigger:{
           trigger: ".img5",
           start: "top center",
           end: "+=80",
           scrub: 3,
       },
       x:400,
       opacity:0,
       ease: "sine.inOut",
   });
   
   gsap.from(".text5",{
      scrollTrigger:{
          trigger: ".text5",
          start: "top 80%",
          end: "+=200",
          scrub: 3,
      },
      x:-400,
      opacity:0,
      ease: "sine.inOut",
   });
   
   gsap.from(".img6",{
       scrollTrigger:{
           trigger: ".img6",
           start: "top center",
           end: "+=80",
           scrub: 3,
       },
       x:-400,
       opacity:0,
       ease: "sine.inOut",
   });
   
   gsap.from(".text6",{
      scrollTrigger:{
          trigger: ".text6",
          start: "top 80%",
          end: "+=200",
          scrub: 3,
      },
      x:400,
      opacity:0,
      ease: "sine.inOut",
   });
   
   gsap.from(".info",{
       scrollTrigger:{
           trigger: ".info",
           start: "top 80%",
           end: "+=100",
           scrub: 3,
       },
       x:-400,
       opacity:0,
       stagger:.2,
       ease: "sine.inOut",
    });

    

    gsap.to(".liston",{
        scale:1.1, 
        duration:1, 
        repeat: -1, 
        yoyo:true, 
        ease: "sine.inOut" 
    });

    let section = 0;

    let tl = gsap.timeline({
        defaults:{
            ease: "sine.inOut"
        },
        scrollTrigger:{
            trigger:".page-content",
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
        }
    })
    


    tl.to(".circle",{x:380,y:h},section*.5)

    section+=1;
    
    tl.to(".circle",{x:-380,y:h*2},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*3},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*4},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*5},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*6},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*7, opacity:0},section*.5)

    section+=1;


})