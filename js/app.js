console.log("Designed and Developed By Aryan Sejani @aryansejani.com");

gsap.registerPlugin(ScrollTrigger);


// ! Preloader

Pace.on('done', function () {
    $('#pre-loader-h1').delay(500).animate({ top: '30%', opacity: '0' }, 3000, $.bez([0.19, 1, 0.22, 1]));

    $('#pre-loader').delay(1500).animate({ top: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));

    // const video = document.querySelector('#video');

    const tl = new TimelineMax();

    tl.fromTo("#video", 1.5, { opacity: "0" }, { opacity: "1", ease: "power1.inOut" })
    tl.fromTo("#video", 1.5, { height: "100%", width: "100%", y: "0%" }, { height: "85%", width: "90%", y: "3%" })
    tl.fromTo(".video-top-appear", 1, { opacity: "0", y: "-50%" }, { opacity: "1", y: "0%", ease: "none" })
    tl.fromTo(".video-left-appear", 1, { opacity: "0", x: "30%" }, { opacity: "1", x: "0%", ease: "none" }, "-=1")
    tl.fromTo(".video-right-appear", 1, { opacity: "0", x: "-30%" }, { opacity: "1", x: "0%", ease: "none" }, "-=1")
    tl.fromTo(".video-bottom-appear", 1, { opacity: "0", y: "50%" }, { opacity: "1", y: "0%", ease: "none" }, "-=1")
    tl.fromTo(".video-btn-left-appear", .5, { opacity: "0", x: "-30%" }, { opacity: "1", x: "0%", ease: "none" }, "-=.5")
    tl.fromTo(".video-btn-right-appear", .5, { opacity: "0", x: "30%" }, { opacity: "1", x: "0%", ease: "none" }, "-=.5")
    tl.fromTo("#opening-video-scroll-down", .5, { opacity: "0" }, { opacity: "1", ease: "none" }, "-=0.5")
    tl.fromTo("#header-logo", 1, { opacity: "0", x: "-30%" }, { opacity: "1", x: "0%", ease: "none" }, "-=1")
    tl.fromTo("#hamburger", 1, { opacity: "0", y: "-50%" }, { opacity: "1", y: "0%", ease: "none" }, "-=1")
});


//! nav

document.getElementById("hamburger").addEventListener('click', function () {
    gsap.fromTo('header nav', 0.5, { y: "-100%" }, { y: "0%" });
});
document.getElementById("exit-nav").addEventListener('click', function () {
    gsap.to('header nav', 0.5, { y: "100%", });
});

function navExit() {
    gsap.to('header nav', 0.5, { y: "100%", });
}


//!   hero section

const tlHero1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "90% 50%",
        end: "90% 51%",
        scrub: 2,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})
tlHero1.fromTo(".video-top-appear", 0.5, { opacity: "1", y: "0%", }, { opacity: "0", y: "-50%", ease: "none" })
tlHero1.fromTo(".video-left-appear", 0.5, { opacity: "1", x: "0%" }, { opacity: "0", x: "30%", ease: "none" }, "-=0.5")
tlHero1.fromTo(".video-right-appear", 0.5, { opacity: "1", x: "0%" }, { opacity: "0", x: "-30%", ease: "none" }, "-=0.5")
tlHero1.fromTo(".video-bottom-appear", 0.5, { opacity: "1", y: "0%" }, { opacity: "0", y: "50%", ease: "none" }, "-=0.5")
tlHero1.fromTo(".video-btn-left-appear", 0.5, { opacity: "1", x: "0%" }, { opacity: "0", x: "-30%", ease: "none" }, "-=.1")
tlHero1.fromTo(".video-btn-right-appear", 0.5, { opacity: "1", x: "0%" }, { opacity: "0", x: "30%", ease: "none" }, "-=0.5")
tlHero1.fromTo("#opening-video-scroll-down", 0.5, { opacity: "1" }, { opacity: "0", ease: "none" }, "-=1")

gsap.to("#opening-video", {
    background: "#fcf2ed",
    scrollTrigger: {
        trigger: "#opening-video",
        start: "1%",
        end: "2%",
        scrub: "1",
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})

gsap.to(".video-wrapper", {
    scale: "1.3",
    opacity: 1,
    // duration: 1,
    scrollTrigger: {
        trigger: "#home",
        start: "top bottom",
        end: "bottom ",
        scrub: "1",
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})

//!  home section

ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 1000px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
        tl.fromTo("#home-left-img-box", { y: "50%", }, { y: "-50%", });
    },


    // mobile
    // 	"(max-width: 799px)": function() {
    //     let tl = gsap.timeline({ 
    //         scrollTrigger:{
    //           trigger: ".gray",
    //           scrub: 1,
    //           end: "200%",
    //           pin: true
    //         }
    //       });
    //     tl.to(".mobile", {scale: 2, rotation: 360})
    //       .to(".mobile", {scale: 1});
    //   }, 

    // 	// all 
    // 	"all": function() {

    // 	}


});

ScrollTrigger.saveStyles("#home-right-img-box img");

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "top 80%",
                end: "30% 80%",
                scrub: true,
                //  markers: {
                //     fontSize: "2rem"
                //  }
            }
        })
        tl.fromTo("#home-right-img-box img", { height: "0%", }, { height: "100%", });
    },



});


//!  services section


ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-text1", {
            y: "-40%",
            scrollTrigger: {
                trigger: ".services-wrapper1",
                start: "top",
                end: "35%",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-text2", {
            y: "-40%",
            scrollTrigger: {
                trigger: ".services-wrapper2",
                start: "top",
                end: "35%",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-text3", {
            y: "-40%",
            scrollTrigger: {
                trigger: ".services-wrapper3",
                start: "top",
                end: "35%",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-loader1", {
            height: "40%",
            scrollTrigger: {
                trigger: "#home",
                start: "50%",
                end: "bottom",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-loader2", {
            height: "40%",
            scrollTrigger: {
                trigger: ".services-wrapper1",
                start: "50%",
                end: "bottom",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-loader3", {
            height: "40%",
            scrollTrigger: {
                trigger: ".services-wrapper2",
                start: "50%",
                end: "bottom",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-logo1", {
            y: "-20%",
            scrollTrigger: {
                trigger: ".services-wrapper1",
                start: "top",
                end: "35%",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-logo2", {
            y: "-20%",
            scrollTrigger: {
                trigger: ".services-wrapper2",
                start: "top",
                end: "35%",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".services-logo3", {
            y: "-20%",
            scrollTrigger: {
                trigger: ".services-wrapper3",
                start: "top",
                end: "35%",
                scrub: true,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        });
    },

});

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to(".panel", {
            xPercent: -100,
            scrollTrigger: {
                trigger: ".panel",
                scrub: 1,
                pin: true,
                end: "+=500"
            }
        });
    },

});



//! images section

document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

ScrollTrigger.matchMedia({

    "(min-width: 1000px)": function () {
        gsap.to("#images-img-side", {
            scrollTrigger: {
                trigger: "#images-img-side",
                start: "top",
                end: "bottom bottom",
                scrub: true,
                pin: "#images-text-side",
                pinSpacing: false,
                // markers: {
                //     fontSize: "2rem"
                // }
            }
        })
    },

    "(max-width: 999px)": function () {
        gsap.to("#images-text-side", {
            opacity: "0",
            scrollTrigger: {
                trigger: "#images-text-side",
                start: "top",
                end: "50%",
                scrub: true,
                pin: "#images",
                pinSpacing: false,
                markers: {
                    fontSize: "2rem"
                }
            }
        })
    },

});


gsap.to("#images-img-side", {
    scrollTrigger: {
        trigger: "#images-img-side",
        start: "top",
        end: "bottom bottom",
        scrub: true,
        pin: "#images-img-side-wrapper",
        pinSpacing: false,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})
//! contact section



const tlContact1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top",
        end: "bottom",
        scrub: true,
        // markers: {
        //     fontSize: "2rem"
        // }
    }
})

tlContact1.fromTo(".about-wrapper", { width: "100%", height: "100%", }, { width: "85%", height: "85%", duration: 1 });

