const close = document.querySelector('.close');
close.addEventListener('click',()=>{
close.classList.toggle('active');
document.querySelector('.navlinks').classList.toggle('active');
})
const prodsList = document.querySelectorAll('.prods-list li');
const prodsHead = document.getElementById('prod-sub');
const prodsPara = document.getElementById('prod-p');
const leftArr = document.querySelector('.left-arrow'), 
rightArr = document.querySelector('.right-arrow');
leftArr.style.opacity='0';
let count = 0;
const tl = gsap.timeline();
function grow(el){
    let fl = gsap.timeline();
    fl.to(el,{
        scale:1.1,
        duration:0.15,
        ease:'power1'
    })
    fl.to(el,{
        scale:1,
        duration:.15,
        ease:'power1'
    })
}
leftArr.addEventListener('click',()=>{
    grow(leftArr);
    console.log('left');
    if(count>=0){
        count--;
        rightArr.style.opacity='1';
        leftArr.style.opacity='1';
    }
    switch (count) {
        case 0:
            leftArr.style.opacity='0';
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
                textContent:'AI-Layered Marketing',
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
          
            console.log('0');
            
            break;
        case 1:
            
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
                textContent:'Digital Insurance Storefront with unlimited social & marketing tools',
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
            console.log('1');
            
            break;
            case 2:
            
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
                textContent:'Intuitive Quote Management',
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
            console.log('2');
            
            break;
            case 3:
            
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
                textContent:'Multi-Carrier Marketplace',
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
            console.log('3');
            
            break;
            case 4:
            
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
                textContent:'Cost Optimization Tools',
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
            console.log('4');
            
            break;
            case 5:
            
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
                textContent:'Continuous Learning & Development',
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
            console.log('5');
            
            break;
            case 6:
            
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
            console.log('6');
            
            break;
            case 7:
            
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
                textContent:'Dedicated Quote Support',
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
            console.log('7');
            
            break;
        default:
            break;
    }
})
rightArr.addEventListener('click',()=>{
    grow(rightArr);
    console.log('right')
    if(count<=7){
        count++;
        console.log(count)
        rightArr.style.opacity='1';
        leftArr.style.opacity='1';
    }

    switch (count) {
        case 0:
            leftArr.style.opacity='0';
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
                textContent:'AI-Layered Marketing',
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
          
            console.log('0');
            
            break;
        case 1:
            
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
                textContent:'Digital Insurance Storefront with unlimited social & marketing tools',
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
            console.log('1');
            
            break;
            case 2:
            
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
                textContent:'Intuitive Quote Management',
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
            console.log('2');
            
            break;
            case 3:
            
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
                textContent:'Multi-Carrier Marketplace',
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
            console.log('3');
            
            break;
            case 4:
            
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
                textContent:'Cost Optimization Tools',
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
            console.log('4');
            
            break;
            case 5:
            
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
                textContent:'Continuous Learning & Development',
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
            console.log('5');
            
            break;
            case 6:
            
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
            console.log('6');
            
            break;
            case 7:
                rightArr.style.opacity='0';
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
                textContent:'Dedicated Quote Support',
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
            console.log('7');
            
            break;
        default:
            
            break;
    }
})

