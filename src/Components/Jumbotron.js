import React from "react";
import {MDBContainer, MDBJumbotron} from "mdbreact";
import Bgcar from '../bgcar.jpg';
import styled from "styled-components";

const Styles = styled.div`
    .jumbo{
        background: url(${Bgcar}) no-repeat fixed top;
        background-size: cover;
        color: #efefef;
        height: 600px;
        position: relative;
        top: 100px;
        z-index:-2;
    }
    
    .overlay{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.40);
    }
    
    h1 {
    
    font-size: 65px;
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
    text-align: center;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    }
`

const Jumbotron = () =>(
    <Styles>
    <MDBJumbotron fluid className="jumbo">
     <div className="overlay">
         <MDBContainer>
             <h1>A STATEMENT FROM LAND ROVER</h1>
             <p>We’ve always believed in going Above and Beyond.
        This resilience has never been more appropriate.
        Our global family will do everything we can to support people with the passion and capability Land Rover is so proud of.
        It’s not easy for anyone right now, but together we can and will get through this.
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the
        release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of
        Lorem Ipsum.</p>
    </MDBContainer>
    </div>
    </MDBJumbotron>
    </Styles>
)
export default Jumbotron;