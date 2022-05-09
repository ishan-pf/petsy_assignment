// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
// import {useState}from "react"
import { Link } from 'react-router-dom'
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrows";


const Container=styled.div`
width:100%;
height:100vh;
display: flex;
position: relative;
overflow:hidden;
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
cursor: pointer;
opacity:0.5;
top:0;
bottom: 0;
margin: auto;
z-index:2 ;
`


const Wrapper=styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);

margin-top:40px;
`

const Slide=styled.div`
display: flex;
align-items: center;
width:100vw;
height:60vh;
background: white;
/* background-color:#${props=>props.bg}; */
padding:50px 20px;
margin-bottom:40px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;


const ImgContainer=styled.div`
flex:0.5;
height:100%;
margin: 30px;

padding:50px 0 50px 50px;

`

const Image=styled.img`
height:100%;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`

const InfoContainer =styled.div`
flex:1;
padding: 30px;

`

const Title =styled.h1`
font-size: 60px;


`
const Desc=styled.p`
margin:50px 0px;
font-size: 25px;
font-weight:500;
letter-spacing: 20px;
width:95%;

`
const Button=styled.button`
padding: 12px;
font-size: 18px;
background-color: transparent;
cursor: pointer;
border:none;
background-color:teal;
border-radius:5px;
color:white;
position: relative;
left:30%;
`

const silderImages = [
    {
        id: 1,
       src:"https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHVwcGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      title:" Collection",
        desc: "Cute & Adorable Puppy for your family.",
        button: "Shop Now"
},
{
    id: 2,
   title:"Lovers Collection",
   src:"https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "Cute & Adorable Puppy for your family.",
    button: "Shop Now"
},
{
    id: 3,
   title:"Birthday Collection",
    src:"https://images.unsplash.com/photo-1590634332992-b8b4a4b7ae47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1cHBpZXMlMjBwdWd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    desc: "Cute & Adorable Puppy for your family.",
    button: "Shop Now"
},
{
    id: 4,
   title:"Spring Collection",
   src:"https://images.unsplash.com/photo-1619980296991-5c0d64b23950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1cHBpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    desc: "Cute & Adorable Puppy for your family.",
    button: "Shop Now"
},
{
    id: 5,
   title:"Wedding Collection",
   src:"https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHBpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    desc: "Cute & Adorable Puppy for your family.",
    button: "Shop Now"
},
{
    id: 6,
   title:"Anniversay Collection",
   src:"https://images.unsplash.com/photo-1608393498386-b1b50fa93fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwdXBwaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    desc: "Cute & Adorable Puppy for your family.",
    button: "Shop Now"
},
]



const Slider = () => {
    // const [slideIndex, setSlideIndex]=useState(0);
    // const handleClick=(direction)=>{
    //     if(direction === "left"){
    //         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5);
    //     } else {
    //         setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0);
    //     }

    // };

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay:true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return (
//         <Container>
//             <Arrow direction="left" onClick={()=> handleClick("left")}>
//              <ArrowLeftOutlined/>
//             </Arrow>
//             <Wrapper slideIndex={slideIndex}>
//             {silderImages.map((item) =>(

//                 <Slide key={item.id}>
                
//                 <ImgContainer>
//                 <Image src={item.src} alt={item.title} />
//                 </ImgContainer>
//                 <InfoContainer>
//                     <Title>{item.title}</Title>
//                     <Desc>{item.desc}</Desc>
//                     <Button>{item.button}</Button>
//                 </InfoContainer>

// </Slide>

//             ))}
  
//             </Wrapper>

//             <Arrow direction="right" onClick={()=> handleClick("right")}>
//              <ArrowRightOutlined/>
//             </Arrow>

//         </Container>
            <HeroSlider {...settings}>
          
                {silderImages.map((item) =>(
                    <Wrapper>
                 <Slide key={item.id}>
                <ImgContainer>
                 <Image src={item.src} alt={item.title} />
                </ImgContainer>
                 <InfoContainer>
                   <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>{item.button}</Button>
                </InfoContainer>
                
 </Slide>
                </Wrapper>
             ))}
                   
            </HeroSlider>

    )
}

export default Slider
