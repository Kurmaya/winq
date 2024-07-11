


const rightRect = document.querySelector('.right-rect-holder');
const leftRect = document.querySelector('.left-rect-holder');
const handHolder = document.querySelector('.holder');
const circle = document.querySelector('.circle')
const textHolder = document.querySelector('.text-holder');
const spn = document.querySelector('.section-holder span');
const aiLayer = document.querySelector('#products .text-holder h4');
// let distTop = ((aiLayer.getBoundingClientRect().top)-aiLayer.getBoundingClientRect())+window.scrollY;
const usSpan = document.querySelector('#us span').getBoundingClientRect();
var element =  aiLayer;
var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top ;

// let targetNode = aiLayer;
// let centerY = targetNode.offsetTop + targetNode.offsetHeight / 2;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin)
let heroAnim = gsap.timeline();
window.addEventListener('load',heroAnim);
heroAnim.from(handHolder,{
    width:'100%',
    scale:1.2,
    rotateZ:'-15deg',
    duration:.8,
    ease:"bounce.out"
})
heroAnim.to(rightRect,{
    right:'-8%',
    duration:.8,
    ease:"bounce.out"
},'<')
heroAnim.to(leftRect,{
    left:'0',
    duration:.8,
    ease:"bounce.out"
},'<')
heroAnim.to(circle,{
    scale:1,
    duration:.8,
    ease:"bounce.out"
},'<')
heroAnim.from(textHolder,{
    opacity:0,
    y:200,
    duration:.8,
    ease:"bounce.out"
},'<')
gsap.registerPlugin(ScrollTrigger);
//section 1-2 animation
let whyAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'-50px 1%',
        end: 'bottom 10%',
        scrub:true,
        // markers:true,
        toggleActions: 'play none reverse none',
        
    }
    
})

whyAnim.to(circle,{
    top:'22vh',
    x:'60%',  
})
whyAnim.to(circle,{
    top:'42vh',
    x:'80%',  
})
whyAnim.to(circle,{
    top:(rightRect.getBoundingClientRect().top-8+window.scrollY)-rightRect.getBoundingClientRect().height/2,
    x:'50%',  
    duration:.5,
})

whyAnim.to(rightRect.querySelectorAll('img')[0],{
    rotateZ:'-45deg',
    x:'10%',
    y:20,
    duration:.3
},'-=0.1')
whyAnim.to(rightRect.querySelectorAll('img')[1],{
    rotateZ:'-45deg',
    x:'10%',
    y:20,
    duration:.3
},'-=0.1')

const leftt = leftRect.getBoundingClientRect().top;

whyAnim.to(circle,{
    top:12+(leftt+window.scrollY)-leftRect.getBoundingClientRect().height/2,
    // x:'-660%',  
    x: leftRect.getBoundingClientRect().right-window.innerWidth,
    duration:.8,    
},'-=0.4')
whyAnim.to(leftRect,{
    rotateZ:'200deg',
    duration:.4,
})
whyAnim.to(circle,{
    top:'90vh',
    x:'-550%',
    scale:.6,
    duration:.8,
},'-=0.3')

whyAnim.to(circle,{
    top:((usSpan.top)-15-usSpan.height/1.5)+window.scrollY,
    // x:-((usSpan.left/2)+7)-usSpan.width/1.5,
    x:usSpan.right-window.innerWidth+4*(usSpan.width),
    scale:.2,
    // opacity:0,  
    duration:.5,
})
whyAnim.to('.section-holder',{
    opacity:1,
    },'<')
   
    whyAnim.from('.p-holder',{
        y:200,
        ease:"bounce.out"
    },'<')
    // whyAnim.to(spn,{
    //     opacity:1,
    // },'-=0.1')


//section 2-3 animation
let prodsAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#us',
        start:'top 1%',
        // end: 'bottom 5%',
        scrub:true,
        markers:true,
        toggleActions: 'play none reverse none',
    }
})
prodsAnim.to(spn,{
    opacity:0,
})
prodsAnim.to(circle,{
    // scale:.2,
    opacity:1,
    // duration:.4,
    y:(document.querySelectorAll('.p-holder p')[2].getBoundingClientRect().top)/2,
    x:'+=12vw',
    duration:.5,
    scale:.4,
},'<')
prodsAnim.to(circle,{
    // scale:.2,
    opacity:1,
    // duration:.4,
    // y:((offset-((circle.getBoundingClientRect().top)))/1.8)+20,
    y:(aiLayer.getBoundingClientRect().y/2)+(aiLayer.getBoundingClientRect().height),
    duration:1,
},'+=0.5')
prodsAnim.to(circle,{
    scale:1,
})
prodsAnim.to(circle,{
    width:300,
    // height:document.querySelector('.exp').style.height,
    borderRadius:'25px',
    x:(window.innerWidth/2)-aiLayer.getBoundingClientRect().right,
    zIndex:'9!important',
    opacity:0,
})
prodsAnim.to('.products-holder .text-holder ',{
    opacity:1,
    
},'<')
prodsAnim.to('.prods-bg',{
    rotateZ:'-110deg',
    borderRadius: '25%',
})
prodsAnim.to('#us > img',{
    y:400,
  },'<')


// prodsAnim.to(circle,{
//     x:'-450%',
//     duration:.5,
// })
prodsAnim.to('.exp',{
    background:'#EA5583',
    borderRadius:'25px',
    // left:'-5px',
    paddingLeft:'1rem',
    
},'<')
// prodsAnim.to(circle,{
//     opacity:0,
//     duration:.1,
// },'<')
prodsAnim.to('.products-holder .image-holder',{
    left:0    
})

const prodsList = document.querySelectorAll('.prods-list li');
const prodsHead = document.getElementById('prod-sub');
const prodsPara = document.getElementById('prod-p');

    prodsList.forEach(p=> {
        p.addEventListener('click',(e)=>{
            prodsList.forEach(ac=>{
                ac.classList.remove('active');
            })
            let tl = gsap.timeline();
            switch (e.target.textContent) {
                case '1':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.3,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.3
                    },'<')
                    .to('.image-holder',{
                        left:'-100%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
        
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'AI-Layered Marketing:',
                    })
                    .to(prodsPara,{
                        textContent:'WINQ empowers brokers with a powerful AI marketing suite for cross-platform posting, lead generation and complete social media management.',
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/bot.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                  
                    console.log('1');
                    e.target.classList.add('active');
                    break;
                case '2':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.1,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.1
                    },'<')
                    .to('.image-holder',{
                        left:'-150%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'Digital Insurance Storefront with unlimited social & marketing tools:',
                    })
                    .to(prodsPara,{
                        textContent:'WINQ empowers brokers with a diverse portfolio of insurance products and the ability to create unlimited social media content, landing pages, and product-specific campaigns designed to enhance their social/digital presence and build brand awareness. Our social media experts provide personalised guidance, helping you craft a captivating online strategy that resonates with your audience and strengthens your brand.',
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/prods-hand.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    console.log('2');
                    e.target.classList.add('active');
                    break;
                    case '3':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.1,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.1
                    },'<')
                    .to('.image-holder',{
                        left:'-150%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'Intuitive Quote Management:',
                    })
                    .to(prodsPara,{
                        textContent:"WINQ's intuitive quote management system simplifies customer effort by relating to the buyer's specific needs and then comparing and presenting quotes from various insurance carriers, saving valuable time and effort. No more cookie-cutter quotes!",
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/prods-hand.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    console.log('3');
                    e.target.classList.add('active');
                    break;
                    case '4':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.1,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.1
                    },'<')
                    .to('.image-holder',{
                        left:'-150%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'Multi-Carrier Marketplace: ',
                    })
                    .to(prodsPara,{
                        textContent:'The WINQ marketplace enables brokers to present a diverse array of products from leading insurance companies, catering to a wide spectrum of client needs and maximizing sales opportunities. This curated platform empowers brokers to expand their offerings and better serve their clientele, enhancing both reach and revenue potential.',
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/prods-hand.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    console.log('4');
                    e.target.classList.add('active');
                    break;
                    case '5':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.1,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.1
                    },'<')
                    .to('.image-holder',{
                        left:'-150%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'Cost Optimization Tools:',
                    })
                    .to(prodsPara,{
                        textContent:"WINQ is designed to reduce brokerages' operational costs through automated workflows, simplified compliance procedures, efficient quote management, and more. No more exhaustive paperwork or excel sheets. Make life simple with WINQ.",
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/prods-hand.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    console.log('5');
                    e.target.classList.add('active');
                    break;
                    case '6':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.1,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.1
                    },'<')
                    .to('.image-holder',{
                        left:'-150%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'Continuous Learning & Development:',
                    })
                    .to(prodsPara,{
                        textContent:"WINQ provides access to comprehensive training modules to keep brokers updated on industry trends and equip them with the latest knowledge. (https://www.webce.com/)",
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/prods-hand.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    console.log('6');
                    e.target.classList.add('active');
                    break;
                    case '7':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.1,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.1
                    },'<')
                    .to('.image-holder',{
                        left:'-150%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'Special Discount for WINQ Users',
                    })
                    .to(prodsPara,{
                        textContent:'Unlock exclusive savings for WINQ users! Enjoy 10% to 15% discounts* on select items just for you. *Conditions apply ',
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/prods-hand.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    console.log('7');
                    e.target.classList.add('active');
                    break;
                    case '8':
                    
                    tl.to(prodsHead,{
                        textContent:' ',
                        width:0,
                        opacity:0,
                        duration:.1,
                        ease:'power1'
                    })
                    .to(prodsPara,{
                        textContent:' ',
                        opacity:0,
                        duration:0.1
                    },'<')
                    .to('.image-holder',{
                        left:'-150%',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    .to(prodsHead,{
                        opacity:1,
                    })
                    
                    .to(prodsHead,{
                        width:'auto',
                        // duration:.3,
                        // ease:'power1'
                    })
                    .to(prodsHead,{
                        textContent:'Dedicated Quote Support:',
                    })
                    .to(prodsPara,{
                        textContent:'WINQ facilitates seamless communication between brokers/brokerages and customers through a user-friendly live chat feature, ensuring prompt interaction and a faster sales cycle.',
                        opacity:1,
                    },'<')
                    .set('.image-holder>img',{attr:{src:"./assets/prods-hand.png"}})
                    .to('.image-holder',{
                        left:'0',
                        duration:0.2,
                        ease:'power1'
                    },'<')
                    console.log('8');
                    e.target.classList.add('active');
                    break;
                default:
                    break;
            }
        })
    })


