gsap.registerPlugin(ScrollTrigger)

let h = document.querySelector('.section6').offsetHeight;

let mm = gsap.matchMedia();

mm.add("(max-width: 500px)", () => {

    gsap.from(".lapida",{
        scrollTrigger:{
            trigger: ".lapida",
            start: "top 70%",
            end: "+=70",
            scrub: 3,
        },
        y:60,
        scale: 0.5,
        opacity:0,
        ease: "sine.inOut",
    });

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
            trigger: ".section7",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        stagger:.2,
        ease: "sine.inOut",
     });

     gsap.from(".fem",{
        scrollTrigger:{
            trigger: ".fem",
            start: "top 90%",
            end: "+=70",
            scrub: 3,
        },
        rotation:-60,
        scale: 0.7,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".masc",{
        scrollTrigger:{
            trigger: ".masc",
            start: "top 90%",
            end: "+=70",
            scrub: 3,
        },
        rotation:60,
        scale: 0.7,
        opacity:0,
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
            snap: 0.1111,
        }
    })
    


    tl.to(".circle",{y:h*1.13},section*.5)

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

    tl.to(".circle",{y:h*7.3},section*.5)

    section+=1;

    tl.to(".circle",{y:h*8.1,scale:2, opacity:0.5},section*.5)

    section+=1;

    tl.to(".circle",{y:h*9.3, scale:0, opacity:0},section*.5)

    section+=1;


})

mm.add("((min-width:501px) and (max-width: 912px))", () => {

    gsap.from(".lapida",{
        scrollTrigger:{
            trigger: ".lapida",
            start: "top 70%",
            end: "+=70",
            scrub: 3,
        },
        y:60,
        scale: 0.5,
        opacity:0,
        ease: "sine.inOut",
    });

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
            trigger: ".section7",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 3,
        },
        x:-400,
        opacity:0,
        stagger:.2,
        ease: "sine.inOut",
     });

     gsap.from(".fem",{
        scrollTrigger:{
            trigger: ".fem",
            start: "top 80%",
            end: "+=70",
            scrub: 3,
        },
        rotation:-60,
        scale: 0.7,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".masc",{
        scrollTrigger:{
            trigger: ".masc",
            start: "top 90%",
            end: "+=70",
            scrub: 3,
        },
        rotation:60,
        scale: 0.7,
        opacity:0,
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
            snap: 0.1111,
        }
    })
    


    tl.to(".circle",{y:h*1.1},section*.5)

    section+=1;
    
    tl.to(".circle",{y:h*2.25},section*.5)

    section+=1;

    tl.to(".circle",{y:h*3.23},section*.5)

    section+=1;

    tl.to(".circle",{y:h*4.23},section*.5)

    section+=1;

    tl.to(".circle",{y:h*5.23},section*.5)

    section+=1;

    tl.to(".circle",{y:h*6.23},section*.5)

    section+=1;

    tl.to(".circle",{y:h*7.23},section*.5)

    section+=1;

    tl.to(".circle",{y:h*8.05,scale:1.5,opacity:0.5},section*.5)

    section+=1;

    tl.to(".circle",{y:h*9.23},section*.5)

    section+=1;


})

mm.add("(min-width:913px)", () => {

    gsap.from(".lapida",{
        scrollTrigger:{
            trigger: ".lapida",
            start: "top 60%",
            end: "+=70",
            scrub: 3,
        },
        y:60,
        scale: 0.5,
        opacity:0,
        ease: "sine.inOut",
    });

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
            trigger: ".section7",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 3,
       },
       x:-400,
       opacity:0,
       stagger:.2,
       ease: "sine.inOut",
    });

    gsap.from(".fem",{
        scrollTrigger:{
            trigger: ".fem",
            start: "top 80%",
            end: "+=70",
            scrub: 3,
        },
        rotation:-60,
        scale: 0.7,
        opacity:0,
        ease: "sine.inOut",
    });

    gsap.from(".masc",{
        scrollTrigger:{
            trigger: ".masc",
            start: "top 80%",
            end: "+=70",
            scrub: 3,
        },
        rotation:60,
        scale: 0.7,
        opacity:0,
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
            snap: 0.1111,
        }
    })
    


    tl.to(".circle",{x:0,y:h,scale:1.5},section*.5)

    section+=1;
    
    tl.to(".circle",{x:380,y:h*2,scale:1},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*3},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*4},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*5},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*6},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*7},section*.5)

    section+=1;

    tl.to(".circle",{x:0,y:h*8,opacity:0.5,scale:2},section*.5)

    section+=1;

    tl.to(".circle",{y:h*9,scale:0, opacity:0},section*.5)

    section+=1;


})