import React from 'react'
import styled from 'styled-components'
import HeroImg from "../Assets/ai.png"
import People from "../Assets/people.png"
import { Button } from './Header'


const Div = styled.div`
    display: flex;
    align-items: center;
    justify-items: space-between;
    padding: 0 5rem;
    margin-top: 3rem;

    .hero-content{
        gap: 2rem;
        display: flex;
        flex-direction: column;
            
    }

    .hero-img{
        width: 80%;
        flex: 0 0 50%;
    }

    
    p{
        grid-row: 2/3;
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.5);

    }

    form{
       display: flex;
       width: 100%;


       input{
        flex: 1;
        padding: 1rem 0;
        padding-left: 1rem;
        background-color: #052D56;
        border: none;
        color: rgba(255, 255, 255, 0.308);
       }

    }

    .people-img{
        
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: rgb(255, 255, 255);


        img{
            width: 20%;
            height: 20%;

        }
        
    }

    .hero-img{
        text-align: center;
        img{
            height: 80%;
            width: 80%;
        }
    }

 `
function Hero() {


    return (
        <Div>
            <div className="hero-content">
                <h1 className='h1'>
                    Lets Build Something Amazing with GPT-3 OpenAI
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, aspernatur eaque eius quas optio quae officiis accusamus quos provident molestias Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit quidem consectetur sunt sapiente dolores.</p>
                <form>
                    <input type="text" placeholder='Enter Your Email Address' />
                    <Button  p1 = "0" p2 ="2rem">Get Started</Button>
                </form>
                <figure className='people-img'>
                    <img src={People} alt="" />
                    <figcaption>1,600 people requested access a visit in last 24 hours</figcaption>
                </figure>
            </div>
            <figure className='hero-img'>
                <img src={HeroImg} alt="" />
            </figure>

        </Div>
    )
}

export default Hero