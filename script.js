gsap.registerPlugin(ScrollTrigger)

let h = document.querySelector('.section6').offsetHeight;

let mm = gsap.matchMedia();

mm.add("(max-width: 500px)", () => {

    gsap.from(".lapida",{
        scrollTrigger:{
            trigger: ".lapida",
            start: "top 70%",
            end: "+=70",
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 1,
            //snap: 0.1,
        }
    })
    


    tl.to(".circle",{y:h*0.72,rotation:90},section*.5)

    section+=1;
    
    tl.to(".circle",{y:h*1.88,scale:1.1,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*3.05,scale:1,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*4.05,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*5.05,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*6.05,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*7.05,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*8.05,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*8.85, scale:1.5, opacity:0.5,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*10.05, scale:0, opacity:0,rotation:-90},section*.5)

    section+=1;


})

mm.add("((min-width:501px) and (max-width: 912px))", () => {

    gsap.from(".lapida",{
        scrollTrigger:{
            trigger: ".lapida",
            start: "top 70%",
            end: "+=70",
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 1,
             //snap: 0.1,
        }
    })
    


    tl.to(".circle",{y:h*0.8,rotation:90},section*.5)

    section+=1;
    
    tl.to(".circle",{y:h*1.9, scale:1.5,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*3.05,scale:1,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*4.05,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*5.05,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*6.05,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*7.05,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*8.05,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*8.85,scale:2, opacity:0.5,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*10.05,scale:0,opacity:0,rotation:-90},section*.5)

    section+=1;


})

mm.add("(min-width:913px)", () => {

    gsap.from(".lapida",{
        scrollTrigger:{
            trigger: ".lapida",
            start: "top 60%",
            end: "+=70",
            scrub: 2,
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
            scrub: 2,
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
           scrub: 2,
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
           scrub: 2,
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
          scrub: 2,
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
           scrub: 2,
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
          scrub: 2,
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
           scrub: 2,
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
          scrub: 2,
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
           scrub: 2,
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
          scrub: 2,
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
           scrub: 2,
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
          scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 2,
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
            scrub: 1,
            //snap: 0.1,
        }
    })
    


    tl.to(".circle",{x:0,y:h*0.7,rotation:90},section*.5)

    section+=1;
    
    tl.to(".circle",{x:0,y:h*1.7,scale:1.5,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*2.7,scale:1,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*3.7,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*4.7,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*5.7,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{x:380,y:h*6.7,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{x:-380,y:h*7.7,rotation:-90},section*.5)

    section+=1;

    tl.to(".circle",{x:0,y:h*8.7,scale:2,opacity:0.5,rotation:90},section*.5)

    section+=1;

    tl.to(".circle",{y:h*9.7,scale:0,opacity:0,rotation:-90},section*.5)

    section+=1;


})