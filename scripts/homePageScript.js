


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
    top:(rightRect.getBoundingClientRect().top+window.scrollY)-rightRect.getBoundingClientRect().height/2,
    x:'50%',  
    duration:.5,
})

whyAnim.to(rightRect.querySelectorAll('img')[0],{
    rotateZ:'-45deg',
    x:'10%',
    y:20,
    duration:.2
},'-=0.1')
whyAnim.to(rightRect.querySelectorAll('img')[1],{
    rotateZ:'-45deg',
    x:'10%',
    y:20,
    duration:.2
},'-=0.1')

const leftt = leftRect.getBoundingClientRect().top;

whyAnim.to(circle,{
    top:(leftt+window.scrollY)-leftRect.getBoundingClientRect().height/2,
    x:'-650%',  
    duration:.8,    
},'-=0.1')
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
    top:((usSpan.top)-15-usSpan.height/2)+window.scrollY,
    x:-((usSpan.left/2)+5)-usSpan.width/1.5,
    scale:.2,
    opacity:0,  
    duration:.5,
})
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
prodsAnim.to(circle,{
    scale:.2,
    opacity:1,
    duration:.4,
})

prodsAnim.to(circle,{
    y:(offset-(circle.getBoundingClientRect().top-bodyRect.top))-32,
    x:'+=12vw',
    duration:1,
})

prodsAnim.to('#us > img',{
    y:1000,
  })

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