import React from "react";
import {Button, Carousel} from "react-bootstrap";
import Pape from '../Pape.jpg';
import Pape2 from '../Pape2.jpg';
import Pape3 from '../Pape3.jpg';
import styled from "styled-components";

const Styles = styled.div `
     
    .carousel{
    background: black;
    }
    
     img {
     
     position: relative;
     opacity: 0.40;
     }
     
     .carousel-item{
     height: 950px;
     }
     
   .carousel-caption {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    margin-bottom: -200px;
    transform: translate(-50%, -50%)
    }
    
    h3 {
    
    font-size: 125px;
    line-height: 1.4em;
    font-weight: 600;  
    position: absolute;
    top: 30%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    }
    
    p{
    font-size: 25px;
    font-weight: 200;
    width: 75%;
    margin: 0;
    position: absolute;
    top: 60%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    }
    
    button{
    font-size: 20px;
    font-weight: 400;
    width: 10%;
    margin: 0;
    position: absolute;
    top: 80%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    
    }
`

export default function Slider (){
    return(
        <>
        <Styles>
            <Carousel>

                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src={Pape}
                        alt="First slide"
                    />
                    <Carousel.Caption >

                        <h3>First slide label</h3>
                        <p>Toyota Cars (Volkswagen) – General Motors, Ford, Fiat Chrysler and Toyota have each invested $20 billion in new production facilities for their vehicles.
                            It isn't just that they build cars at plants where there are jobs; it's the millions of other workers who work with them to create a better world through innovation and mass-production.</p>
                        <Button variant="warning" className="m-sm-3">Show More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Pape2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Toyota Cars (Volkswagen) – General Motors, Ford, Fiat Chrysler and Toyota have each invested $20 billion in new production facilities for their vehicles. It isn't just that they build cars at plants where there are jobs; it's the millions of other workers who work with them to create a better world through innovation and mass-production.</p>
                        <Button variant="warning" className="m-sm-3">Show More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Pape3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Toyota Cars (Volkswagen) – General Motors, Ford, Fiat Chrysler and Toyota have each invested $20 billion in new production facilities for their vehicles. It isn't just that they build cars at plants where there are jobs; it's the millions of other workers who work with them to create a better world through innovation and mass-production.</p>
                        <Button variant="warning" className="m-sm-3">Show More</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Styles>
        </>
    )}