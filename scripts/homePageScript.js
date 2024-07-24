
const rightRect = document.querySelector('.right-rect-holder');
const leftRect = document.querySelector('.left-rect-holder');
const handHolder = document.querySelector('.holder');
const circle = document.querySelector('.circle')
const textHolder = document.querySelector('.text-holder');
const spn = document.querySelector('.section-holder span');
const aiLayer = document.querySelector('#products .text-holder h4');
let a =document.body.getBoundingClientRect().height- aiLayer.getBoundingClientRect().bottom;
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
window.addEventListener('load',()=>{
    window.scrollTo(0,0);
    heroAnim;
});

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
        start:'30% 20%',
        end: 'bottom 10%',
        scrub:true,
        // markers:true,
        toggleActions: 'play none reverse none',
        
    }
    
})

whyAnim.to(circle,{
    top:'28vh',
    x:'60%',  
})
whyAnim.to(circle,{
    top:'34vh',
    x:'80%',  
})
whyAnim.to(circle,{
    top:(rightRect.getBoundingClientRect().top-8+window.scrollY)-rightRect.getBoundingClientRect().height/1.7,
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
whyAnim.to('.section-holder',{
    opacity:1,
    },'<')
   
    whyAnim.from('.p-holder',{
        y:200,
        ease:"bounce.out"
    },'<')
whyAnim.to(circle,{
    top:(-12)+(leftt+window.scrollY)-leftRect.getBoundingClientRect().height/2,
    // x:'-660%',  
    x: leftRect.getBoundingClientRect().right-window.innerWidth,
    duration:.8,    
},'-=0.6')

whyAnim.to(leftRect,{
    rotateZ:'200deg',
    duration:.4,
})
whyAnim.to(circle,{
    // top:'92vh',
    top:usSpan.top+window.scrollY-(4*usSpan.height),
    // x:'-550%',
    x:usSpan.right-window.innerWidth-2*(usSpan.width),
    scale:.6,
    duration:.8,
},'-=0.3')

whyAnim.to(circle,{
    // top:((usSpan.top)-15-usSpan.height/1.5)+window.scrollY,
    // onStart:()=> {console.log('start')},
    top:usSpan.top+window.scrollY-(2*usSpan.height),
    // top:window.innerHeight+.085*window.innerHeight,
    // x:-((usSpan.left/2)+7)-usSpan.width/1.5,
    x:usSpan.right-window.innerWidth+4*(usSpan.width),
    scale:.2,
    // opacity:0,  
    duration:.5,
})
whyAnim.to('.us-img-one',{
    top:'-15%',
},'<')
    // whyAnim.to(spn,{
    //     opacity:1,
    // },'-=0.1')


//section 2-3 animation
let prodsAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#us>.section-holder',
        start:'top 10%',
        // end: 'bottom 5%',
        scrub:true,
        // markers:true,
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
    top:(document.querySelectorAll('.p-holder p')[2].getBoundingClientRect().top+window.scrollY),
    x:'-50%',
    // x:-(aiLayer.getBoundingClientRect().left),
    duration:1,
    scale:.4,
    
},'<')

prodsAnim.to('.products-holder .text-holder ',{
    opacity:1,
},'<')


prodsAnim.to(circle,{
    // scale:.2,
    opacity:1,
    // onStart:()=>{console.log('this')},
    x:'50%',
    top:aiLayer.getBoundingClientRect().bottom-aiLayer.getBoundingClientRect().height+window.scrollY-35,
    duration:1,
},'<')

prodsAnim.from('.left-arrow',{
left:'-150%'
},'<')
prodsAnim.from('.right-arrow',{
    right:'150%'
    },'<')
prodsAnim.to(circle,{
    scale:.8,
})
prodsAnim.to(circle,{
    width:300,
    // height:document.querySelector('.exp').style.height,
    borderRadius:'25px',
    left:(window.innerWidth/2)-aiLayer.getBoundingClientRect().right,
    zIndex:'9!important',
    opacity:0,
})

prodsAnim.to('.exp',{
    background:'#EA5583',
    borderRadius:'25px',
    // left:'-5px',
    paddingLeft:'1rem',
    
},'<')

prodsAnim.to('.prods-bg',{
    rotateZ:'-110deg',
    borderRadius: '35%',
    x:'-20%',
    y:'10%'
    // width:'700px'
})
prodsAnim.to('.us-img-holder',{
    y:300,
  },'<')


// prodsAnim.to(circle,{
//     x:'-450%',
//     duration:.5,
// })

// prodsAnim.to(circle,{
//     opacity:0,
//     duration:.1,
// },'<')
prodsAnim.to('.products-holder .image-holder',{
    left:0    
})



//usp section animations
let uspAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#products',
        start:'45% 40%',
        end:'bottom 5%',
        scrub:true,
        // markers:true,
    }
})
uspAnim.to(aiLayer,{
    background:'transparent',
})

uspAnim.to(circle,{
    width:'50px',
    height:'50px',
    opacity:1,
    left:aiLayer.getBoundingClientRect().left*3+50,
    zIndex:'9',
},'<')
.to('#usp',{
    background: 'linear-gradient(#004AAD 50%, transparent 50%)',
})

uspAnim.to('.prods-bg',{
    rotateZ:'0',
},'<')
uspAnim.to(circle,{
    top:(document.querySelector('#usp').getBoundingClientRect().top+window.scrollY)+100,
    left:'-8%',
},'<')

// uspAnim.from('.usp-text-holder',{
//     left:'150%'
// },'+=0.1')

uspAnim.to(circle,{
    scale:0.6,
    top:(document.querySelector('.usp-image-holder').getBoundingClientRect().top+window.scrollY)-40,
    left:document.querySelector('.usp-image-holder').getBoundingClientRect().left,
})
.from('.usp-holder',{
    top:'-50%',
},'<')

uspAnim.from('.usp-image-holder',{
    opacity:0,
    scale:0,
    rotateZ:'180deg',
    duration:0.6
},'+=0.2')
uspAnim.to('.usp-overlay',{
    opacity:0,
},'<')


// usp-team animations

let uspTeamAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#usp',
        start:'40% 40%',
        scrub:true,
    }
})
// uspTeamAnim.to('.usp-holder',{
//     width:'80%',
//     rotateZ:'-75deg',
//     left:'-55%', 
// })
.to('.usp-image-holder',{
    opacity:0,
})
.from('.team-bg',{
    left:'-150%',
},'<')
uspTeamAnim.to(circle,{
    left:(document.querySelector('.team-desc').getBoundingClientRect().right)-10,
    top:document.querySelector('.team-desc').getBoundingClientRect().top+window.scrollY,
},'<')
uspTeamAnim.to(circle,{
    top:(document.querySelector('.team-bg').getBoundingClientRect().bottom+scrollY)-80,
    left:'50%',
    scale:.6,
},'+=0.1')
const teamPersons = document.querySelectorAll('.team-person');
let teamAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#team',
        start:'20% 30%',
        end:'130% 80%',
        scrub:true,
        // markers:true,
    }
})


teamAnim.to(circle,{
    top:teamPersons[0].getBoundingClientRect().top+window.scrollY+(teamPersons[0].getBoundingClientRect().height)/20,
    left:(teamPersons[0].getBoundingClientRect().right)-teamPersons[3].getBoundingClientRect().width/3.5,
})
teamAnim.to(circle,{
    top:teamPersons[3].getBoundingClientRect().top+window.scrollY+(teamPersons[3].getBoundingClientRect().height)/5,
    left:(teamPersons[3].getBoundingClientRect().left)-teamPersons[3].getBoundingClientRect().width/2.5,
})
teamAnim.to(circle,{
    top:teamPersons[1].getBoundingClientRect().top+window.scrollY+(teamPersons[1].getBoundingClientRect().height)/5,
    left:(teamPersons[1].getBoundingClientRect().right)-teamPersons[1].getBoundingClientRect().width/3.5,
})
teamAnim.to(circle,{
    top:teamPersons[4].getBoundingClientRect().top+window.scrollY+(teamPersons[4].getBoundingClientRect().height)/5,
    left:(teamPersons[4].getBoundingClientRect().left)-teamPersons[4].getBoundingClientRect().width/2.5,
})
teamAnim.to(circle,{
    top:teamPersons[2].getBoundingClientRect().top+window.scrollY+(teamPersons[2].getBoundingClientRect().height)/5,
    left:(teamPersons[2].getBoundingClientRect().right)-teamPersons[2].getBoundingClientRect().width/3.5,
})
// teamAnim.to(circle,{
//     top:document.getElementById('partners').getBoundingClientRect().top+window.scrollY,
//     left:.3*(window.innerWidth),
// })
.to(circle,{
    top:(document.getElementById('partners').getBoundingClientRect().top+window.scrollY),
    left:'59%',
})
teamAnim.from('.partners-bg',{
    left:'-150%',
},'<')
// .to(circle,{
//     top:(document.querySelector('.partners-desc').getBoundingClientRect().bottom+window.scrollY)-80,
//     left:'78%',
// })
.to(circle,{
    top:(document.querySelector('.partners-desc').getBoundingClientRect().bottom+window.scrollY)+20,
    left:'83%',
})



let partnerAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#partners',
        start:'30% 30%',
        end:'80% 40%',
        scrub:true,
        // markers:true,
    }
})

partnerAnim.to(circle,{
top:(document.querySelector('.partners-holder').getBoundingClientRect().top+window.scrollY)+100,
left:'35%',
// left:'78%',
})
partnerAnim.to(circle,{
    top:(document.querySelector('.partners-holder').getBoundingClientRect().bottom+window.scrollY)-document.querySelector('.partners-holder').getBoundingClientRect().height/2,
    left:'-10%',
    })
partnerAnim.to(circle,{
    top:(document.querySelector('#testimonials h2').getBoundingClientRect().top+window.scrollY)-30,
    // left:'-8%',
    // left:'78%',
    left:'25%',
    })
    partnerAnim.to(circle,{
        top:(document.querySelector('.inner-holder>img').getBoundingClientRect().top+window.scrollY)-50,
        // left:'-8%',
        // left:'78%',
        left:'55%',
        })
        
    .from('#testimonials',{
        left:'-150%',
    },'<')

// testimonials animation
let testiAnim = gsap.timeline({
    scrollTrigger:{
        trigger:'#testimonials',
        start:'50% 40%',
        end:'90% 30%',
        scrub:true,
        onStart:()=>{
            document.querySelector('.faqs-bg').classList.remove('active');
        },
        onended:()=>{
            document.querySelector('.faqs-bg').classList.remove('active');
        }
        // markers:true,
    }
})

testiAnim.to(circle,{
    top:document.getElementById('faqs').getBoundingClientRect().top+window.scrollY,
    left:document.querySelector('.q-circle').getBoundingClientRect().left-58,

})

testiAnim.from('#faqs h2',{
    left:'-150%',
},'<')
.to(circle,{
    top:(document.querySelector('.q-circle').getBoundingClientRect().top+window.scrollY)-document.querySelector('.q-circle').getBoundingClientRect().height/.62,
    scale:.4,
    left:document.querySelector('.q-circle').getBoundingClientRect().left-38,
    // opacity:0,
})
.to(circle,{
    opacity:0,
})
.to('.q-circle',{
    opacity:1,
    onended:()=>{
        document.querySelector('.faqs-bg').classList.remove('active');
    }
},'<')
// testiAnim.from('.bg-holder > * ',{
//     // opacity:0,
//     top:'-25%',
// },'-=0.3')
