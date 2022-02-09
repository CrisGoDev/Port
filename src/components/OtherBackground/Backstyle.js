import styled from 'styled-components'
import { keyframes } from 'styled-components';

const animate=keyframes`
0%{
  transform:rotate(0deg);
  //filter:hue-rotate(0deg);
}
100%{
  transform:rotate(360deg);
 // filter:hue-rotate(360deg);
}

`

export const Loader = styled.div`
position:absolute;
width:150px;
height:150px;
 z-index:100;
left:720px;
top:100px;

& span{
  position:absolute;
  top:50px;
  left:160px;
  width:100%;
  height:100%;
  transform:rotate(calc(36deg*var(--i)))

}

& span:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:15px;
  height:15px;
  border-radius:50%;
  box-sizing:border-box;
  background:transparent;
  border: 4px solid #0F1624;
  box-shadow:0 0 20px #00efff,
  -30px -30px 0 #0F1624,
  -30px -30px 20px #00efff,
  30px 30px 0 #00efff,
  30px 30px 20px #0F1624,
  30px -30px 0 #00efff,
  30px -30px 20px #00efff,
  -30px 30px 0 #00efff,
  -30px 30px 20px #00efff
  ;
  
  animation: ${animate} 5s linear infinite;
  animation-delay:calc(-0.25s * var(--i))
  transform-origin:20px;
  transition:2s;
  
}

&:hover span:before{
  border: 4px solid #00efff;
  box-shadow:0 0 20px #0F1624,
  -60px -60px 0 #00efff,
  -30px -630px 20px #00efff,
  60px 60px 0 #00efff,
  6px 60px 6px #0F1624,
  60px -60px 0 #00efff,
  60px -60px 20px #00efff,
  -60px 60px 0 #00efff,
  -60px 60px 20px #0F1624,
  -60px 60px 20px #00efff,
  -60px 60px 20px #0F1624
  ;
  transform-origin:150px;
}

`;



export const Spanact = styled.span`
position:absolute;
transform:rotate(36deg)
&:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:25px;
  height:25px;
  border-radius:50%;
  background:#00efff;
  border: 4px solid #00efff
  box-shadow:0 0 20px #00efff
}
`;


