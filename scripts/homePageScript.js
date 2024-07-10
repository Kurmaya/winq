


const rightRect = document.querySelector('.right-rect-holder');
const leftRect = document.querySelector('.left-rect-holder');
const handHolder = document.querySelector('.holder');
const circle = document.querySelector('.circle')
const textHolder = document.querySelector('.text-holder');
const spn = document.querySelector('.section-holder span');
const aiLayer = document.querySelector('#products .text-holder h4');
// let distTop = ((aiLayer.getBoundingClientRect().top)-aiLayer.getBoundingClientRect())+window.scrollY;
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
    right:'-5%',
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

let whyAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'top 5%',
        end: 'bottom 95%',
        duration:1.5,
        // scrub:.1,
        // markers:true,
        toggleActions: 'play none reverse reverse',
        // pin:true,
        // onUpdate:()=>{console.log(circle)},
        // snap:.98,
    }
    
})
whyAnim.to(circle,{
    top:'10%',
    right:'5%',  
})
whyAnim.to(circle,{
    top:'52vh',
    right:'-2%',  
    duration:1,
})
whyAnim.to(window,{
    scrollTo:{y:300,autoKill: true}
},'<')
whyAnim.to(rightRect.querySelectorAll('img')[0],{
    rotateZ:'-45deg',
    // rotateX:'180deg',
    x:'10%',
    y:20,
    duration:.2
},'-=0.1')
whyAnim.to(rightRect.querySelectorAll('img')[1],{
    rotateZ:'-45deg',
    // rotateX:'180deg',
    x:'10%',
    y:20,
    duration:.2
})

whyAnim.to(handHolder,{
    opacity:0,
    duration:.2,
},'<')
whyAnim.to(textHolder,{
    opacity:0,
    duration:.2,
},'<')

whyAnim.to(circle,{
    top:'+=32vh',
    left:'0',  
    duration:.6,    
},'-=0.4')
whyAnim.to(window,{
    scrollTo:{y:750,autoKill: true}
},'-=0.1')
whyAnim.to(circle,{
    top:'+=13vh',
    left:'50%',
    scale:.5,
    opacity:0,  
    duration:.8,
},'<')

whyAnim.to('.section-holder',{
    opacity:1,
    },'<')
   
    whyAnim.from('.p-holder',{
        y:200,
        ease:"bounce.out"
    },'<')
    whyAnim.to(spn,{
        opacity:1,
    },'-=0.1')



let prodsAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#us',
        start:'top 5%',
        end: 'bottom 5%',
        markers:true,
        toggleActions: 'play none reset reset',
    }
})
prodsAnim.to('#us > img',{
  y:1000,
})
prodsAnim.to(circle,{
    y:(offset-(circle.getBoundingClientRect().top-bodyRect.top))-32,
    x:'+=12vw',
    opacity:1,
    duration:1,
})


// prodsAnim.to(leftRect,{
//     y:'+=90vh',
//     zIndex:'100'
// },'<')
prodsAnim.to(window,{
    scrollTo:{y:'#products'}
},'<')
// prodsAnim.to(circle,{
//     opacity:0,
//     duration:.1,
// },'+=0.1')
prodsAnim.to('.products-holder',{
    bottom:'-10%',
},'<')


prodsAnim.to('.products-holder > .text-holder',{
    opacity:1,
    
})
prodsAnim.to('.exp',{
    background:'#EA5583',
    borderRadius:'25px',
    left:'-5px',
    paddingLeft:'1rem',
    
})
prodsAnim.to(circle,{
    opacity:0,
    duration:.1,
},'<')
prodsAnim.to('.products-holder > .image-holder',{
    left:0    
})