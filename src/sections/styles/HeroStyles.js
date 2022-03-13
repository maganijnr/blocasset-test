import styled from 'styled-components/macro'


export const HeroBody = styled.div`
   width: 100%;
   height: 100%;
   min-height: 900px;
   position: relative;
   background: rgba(255, 255, 255, 1);
   display: flex;
   align-items: center;
   justify-content: center;

   @media (max-width: 768px){
      height: 100%;
      min-height: 800px;
   }

   @media (max-width: 550px){
      height: 100%;
      min-height: 600px;
   }
`

export const HeroContainer = styled.div`
   width: 100%;
   height: 100%;
   max-width: 1540px;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin:0 auto;
   padding: 50px 20px;
   background:url(${(props)=>props.bgImage});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   

   @media (max-width: 1025px){
      padding: 40px 20px;
   }

   @media (max-width: 768px){
      padding: 40px 20px;
   }

   @media (max-width: 550px){
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`


export const HeroInfo = styled.div`
   width: 683px;
   max-width: 683px;
   margin: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;

   @media (max-width: 768px){
      width: 600px;
      max-width: 600px;
      margin: 2rem auto;
   }

   @media (max-width: 550px){
      width: 360px;
      max-width: 360px;
      margin: 1rem auto;
   }
`

export const HeroTitle = styled.h2`
   font-size: 70px;
   font-weight: 700;
   flex-wrap: wrap;
   text-align: center;


   @media (max-width: 1025px){
      font-size: 64px;
   }

   @media (max-width: 768px){
      font-size: 56px;
   }

   @media (max-width: 550px){
      font-size: 36px;
   }
`

export const HeroH5 = styled.h5`
   font-size: 18px;
   font-weight: 400;
   flex-wrap: wrap;
   text-align: center;

   @media (max-width: 768px){
      font-size: 16px;
   }

   @media (max-width: 768px){
      font-size: 14px;
   }

   @media (max-width: 768px){
      font-size: 14px;
      padding: 0px 8px;
   }

`

export const CoinImgOne = styled.div`
   position: absolute;
   top: 32%;
   left: 20%;
   transform: translate(-80%, -68%);
   display: flex;

   @media (max-width: 1025px){
      width: 150px;
      height: 150px;
      top: 25%;
      left: 18%;
      transform: translate(-82%, -75%);

      img{
         width: 100%;
      }
   }

   @media (max-width: 768px){
      display: none;
   }
`

export const CoinImgTwo = styled.div`
   position: absolute;
   top: 62%;
   left: 80%;
   transform: translate(-20%, -38%);
   display: flex;

   @media (max-width: 1025px){
      width: 150px;
      height: 150px;
      top: 50%;
      left: 85%;
      transform: translate(-15%, -50%);

      img{
         width: 100%;
      }
   }

      @media (max-width: 768px){
      display: none;
   }
`

export const InputContainer = styled.div`
   width: 720px;
   margin: 4rem auto 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   padding: 10px 0;

   @media (max-width: 1025px){
      max-width: 600px;
      margin: 2rem auto 0;
      padding: 5px 0;
   }

   @media (max-width: 768px){
      max-width: 500px;
   }

   @media (max-width: 550px){
      width: 345px;
   }
`

export const InputP = styled.p`
   font-size: 14px;
   font-weight: 400;
   color: rgba(107, 114, 128, 1);
   text-align: center;
   margin-top: 1rem;

   @media (max-width: 550px){
      font-size: 12px;
   }
`

export const InputWrapper = styled.div`
   height: 72px;
   width: 100%;
   max-width: 720px;
   border-radius: 8px;
   overflow: hidden;
   margin: auto;
   display: flex;
   border: 1px solid rgba(209, 213, 219, 1);
   box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
   
   @media (max-width: 1025px){
      max-width: 600px;
   }

   @media (max-width: 550px){
      height: 52px;
      max-width: 360px;
   }
`

export const DropDown = styled.select`
   flex:1;
   width: 100%;
   border-radius: 8px 0px 0px 8px;
   border-right: 1px solid rgba(229, 231, 235, 1);
   border-top: 0;
   border-bottom: 0;
   border-left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   padding:0 20px;
   font-size: 16px;
   font-weight: 500;
   outline: none;

   @media (max-width: 550px){
      font-size: 14px;
      padding: 0 10px;
   }
`

export const DropDownOption = styled.option`
   font-size: 18px;
   font-weight: 500;

   @media (max-width: 550px){
      font-size: 14px;
   }
`

export const Input = styled.input`
   flex:3;
   width: 100%;
   border: 0px;
   outline: none;
   padding-left: 10px;
   font-size: 18px;

   @media (max-width: 550px){
      font-size: 14px;
   }
`

export const Button = styled.button`
   flex:.6;
   width: 100%;
   border: 0px 8px 8px 0px;
   border: 0px;
   background: rgba(17, 24, 39, 1);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;

   @media (max-width: 550px){
      flex:.7;
      font-size: 14px;
      padding: 0 10px;

      img{
         width: 20px;
         height: 20px;
      }
   }
`