import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import {Slider} from './component/Slider'
import {Skill} from './component/Skill'
import {Form} from './component/Form'
import {Interview} from './component/Interview'
import db from './data/db.json'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as="h1">
            <a href="#home">
              <svg  viewBox="0 0 355.04 137.45" >
                <g>
                  <g>
                    <path d="M8.99,110.42c0,2.46-2.01,4.44-4.5,4.44c-2.49,0-4.5-1.98-4.5-4.44c0-2.46,2.01-4.44,4.5-4.44
                      C6.98,105.98,8.99,107.96,8.99,110.42z"/>
                    <path d="M24.01,38.59h29.28c16.55,0,25.93,7.47,25.93,19.38c0,8.41-5.93,15.88-14.06,17.2c9.76,1.23,17.7,7.56,17.7,18.34
                      c0,12-9.85,19.75-26.69,19.75H24.01V38.59z M53.38,73.75c13.78,0,21.72-5.48,21.72-15.78c0-10.21-7.94-15.69-21.72-15.69H28.13
                      v31.47H53.38z M56.25,109.57c13.87,0,22.48-5.58,22.48-16.07c0-10.49-8.61-16.07-22.48-16.07H28.13v32.13H56.25z"/>
                    <path d="M94.52,86.79c0-15.69,11-27.79,26.02-27.79c12.72,0,20.95,8.03,23.06,13.99V60.33h4.02v52.93h-4.02v-12.66
                      c-2.1,5.95-10.33,13.99-23.06,13.99C105.52,114.58,94.52,102.48,94.52,86.79z M143.7,86.79c0-13.61-9.47-24.1-22.87-24.1
                      s-22.29,10.49-22.29,24.1s8.9,24.1,22.29,24.1S143.7,100.4,143.7,86.79z"/>
                    <path d="M165.22,60.33h4.02v13.14c1.53-5.01,8.99-14.46,22-14.46c12.15,0,20.95,9.07,20.95,22.97v31.28h-4.02V82.63
                      c0-12.95-6.89-19.94-17.8-19.94c-11.86,0-21.14,11.91-21.14,22.97v27.6h-4.02V60.33z"/>
                    <path d="M229.04,119.02h4.21c1.43,7.75,7.65,14.74,20.38,14.74c12.25,0,20.86-7.84,20.86-21.93v-11.25
                      c-2.1,5.95-10.33,13.99-23.06,13.99c-15.02,0-26.02-12.1-26.02-27.79c0-15.69,11-27.79,26.02-27.79
                      c12.72,0,20.95,8.03,23.06,13.99V60.33h4.02v51.51c0,15.5-9.85,25.61-24.88,25.61C238.7,137.45,231.05,129.14,229.04,119.02z
                      M274.58,86.79c0-13.61-9.47-24.1-22.87-24.1c-13.39,0-22.29,10.49-22.29,24.1s8.9,24.1,22.29,24.1
                      C265.11,110.89,274.58,100.4,274.58,86.79z"/>
                    <path d="M300.79,100.5V86.6c0-6.24-2.3-9.26-9.66-9.26v-3.97c7.37,0,9.66-3.02,9.66-9.26V50.22c0-9.83,7.27-16.54,19.23-16.54
                      v3.78c-9.76,0-15.12,4.82-15.12,13.14v13.23c0,5.67-1.53,10.11-7.46,11.53c5.93,1.42,7.46,5.86,7.46,11.53v13.23
                      c0,8.32,5.36,13.14,15.12,13.14v3.78C308.06,117.04,300.79,110.33,300.79,100.5z"/>
                    <path d="M326.15,113.26c9.76,0,15.12-4.82,15.12-13.14V86.89c0-5.67,1.53-10.11,7.46-11.53c-5.93-1.42-7.46-5.86-7.46-11.53V50.59
                      c0-8.32-5.36-13.14-15.12-13.14v-3.78c11.96,0,19.23,6.71,19.23,16.54v13.89c0,6.24,2.3,9.26,9.66,9.26v3.97
                      c-7.37,0-9.66,3.02-9.66,9.26v13.89c0,9.83-7.27,16.54-19.23,16.54V113.26z"/>
                  </g>
                  <g >
                    <path d="M31.29,15.6c1.21-0.17,2.23-0.48,3.06-0.89v1.97c-1.21,0.63-3.47,1.06-6.12,1.06h-7.14V15.8h2.19V2.95H21.2V1h12.19v1.95
                      h-2.1V15.6z M28.25,15.8c0.33,0,0.63,0,0.93-0.02V2.95h-3.78V15.8H28.25z M37.97,0.33v18.53h-2.15V0.33H37.97z"/>
                    <path d="M41.57,15.95h18.51v2.02H41.57V15.95z M42.78,1h16.08v2H44.97v6.94h14.1v2H42.78V1z"/>
                    <path d="M71.03,10.94H63V0.65h2v3.23h4.06V0.65h1.97V10.94z M63.89,12.98h16.36v5.88h-2.13v-4.04H63.89V12.98z M69.06,9.18V5.62
                      H65v3.56H69.06z M80.25,0.33v11.63h-2.04V6.66H75.2v5.1h-2.04V0.43h2.04v4.23h3.02V0.33H80.25z"/>
                    <path d="M90.36,15.73c2.5,0,4.75-0.22,6.08-0.78v2.02c-1.32,0.54-3.52,0.78-6.05,0.78h-7.07v-2.02h3.23V7.88h2.17v7.85H90.36z
                      M92.42,3.04h-8.44v-2h10.61v11.8h-2.17V3.04z M102.68,9.72h-2.56v9.13h-2.15V0.33h2.15v7.33h2.56V9.72z"/>
                    <path d="M122.25,3.54H110.3V1.89h5.12V0h2.17v1.89h4.67V3.54z M116.5,10.98c-2.95,0-5.34-1.15-5.34-3.21
                      c0-2.06,2.39-3.21,5.34-3.21c2.97,0,5.36,1.15,5.36,3.21C121.86,9.83,119.47,10.98,116.5,10.98z M125.62,11.74h2.08v6.88h-15.77
                      v-6.88h2.08v1.67h11.61V11.74z M116.5,9.42c2.04,0,3.3-0.69,3.3-1.65c0-0.93-1.26-1.63-3.3-1.63c-2.02,0-3.3,0.69-3.3,1.63
                      C113.2,8.72,114.48,9.42,116.5,9.42z M125.62,16.92v-1.87h-11.61v1.87H125.62z M127.7,0.33v10.39h-2.13V9.2h-2.8V7.38h2.8V5.29
                      h-2.8v-1.8h2.8V0.33H127.7z"/>
                    <path d="M148.57,0.33v9.5h-2.15v-3.8h-3.78c-0.46,2.19-2.54,3.67-5.62,3.67c-3.52,0-5.73-1.89-5.73-4.58
                      c0-2.69,2.21-4.58,5.73-4.58c2.99,0,5.06,1.39,5.58,3.49h3.82V0.33H148.57z M146.44,10.85h2.13v7.77h-15.56v-7.77h2.1v1.95h11.33
                      V10.85z M140.58,5.12c0-1.74-1.43-2.8-3.56-2.8s-3.58,1.06-3.58,2.8s1.45,2.8,3.58,2.8S140.58,6.86,140.58,5.12z M146.44,16.86
                      v-2.34h-11.33v2.34H146.44z"/>
                    <path d="M151.99,15.95h18.51v2.02h-18.51V15.95z M152.9,6.6c0-3.56,3.28-5.88,8.33-5.88c5.06,0,8.33,2.32,8.33,5.88
                      c0,3.56-3.28,5.88-8.33,5.88C156.18,12.48,152.9,10.15,152.9,6.6z M167.31,6.6c0-2.34-2.43-3.93-6.08-3.93
                      c-3.65,0-6.08,1.58-6.08,3.93c0,2.34,2.43,3.93,6.08,3.93C164.88,10.52,167.31,8.94,167.31,6.6z"/>
                    <path d="M191.37,15.99v1.97h-18.51v-1.97h8.12V12.5h-6.88V5.82h13.93V2.91H174.1V1h16.06v6.66h-13.91v2.93h14.19v1.91h-7.27v3.49
                      H191.37z"/>
                    <path d="M199.85,10.37V8.42c3.47-0.65,5.51-3.97,5.55-7.92l2.15,0.13c0,1.43-0.24,2.78-0.69,3.99l5.64,3.86L211.31,10l-5.29-3.65
                      C204.69,8.51,202.56,10,199.85,10.37z M217.41,15.1c0,2.71-3.51,3.75-8.01,3.75c-4.49,0-8.01-1.04-8.01-3.75s3.51-3.75,8.01-3.75
                      C213.89,11.35,217.41,12.39,217.41,15.1z M215.13,15.1c0-1.37-2.54-2-5.73-2s-5.73,0.63-5.73,2c0,1.37,2.54,2,5.73,2
                      S215.13,16.47,215.13,15.1z M215.11,5.25h-4.47V3.34h4.47V0.33h2.15v10.42h-2.15V5.25z"/>
                    <path d="M220.94,10.2V8.27c3.06-0.41,4.95-2.67,5.23-5.62h-4.99V0.8H233v1.84h-4.69c-0.04,0.72-0.17,1.41-0.37,2.06l5.64,3.47
                      l-1.06,1.61l-5.36-3.36C225.91,8.48,223.72,9.92,220.94,10.2z M237.73,15.02c0,2.78-3.49,3.84-7.94,3.84
                      c-4.43,0-7.94-1.06-7.94-3.84s3.51-3.84,7.94-3.84C234.24,11.17,237.73,12.24,237.73,15.02z M235.43,15.02
                      c0-1.41-2.47-2.06-5.64-2.06c-3.15,0-5.64,0.65-5.64,2.06c0,1.43,2.5,2.06,5.64,2.06C232.96,17.08,235.43,16.45,235.43,15.02z
                      M240.06,3.86V5.9h-2.6v4.67h-2.15V0.33h2.15v3.54H240.06z"/>
                    <path d="M247.15,3.21h3.88v1.93h-9.89V3.21h3.88V0.28h2.13V3.21z M250.49,12.28c0,3.69-1.82,5.69-4.32,5.69
                      c-2.47,0-4.3-2-4.3-5.69s1.82-5.69,4.3-5.69C248.67,6.6,250.49,8.59,250.49,12.28z M248.51,12.28c0-2.43-1-3.8-2.34-3.8
                      c-1.32,0-2.3,1.37-2.3,3.8s0.98,3.8,2.3,3.8C247.52,16.08,248.51,14.71,248.51,12.28z M259.36,0.33v18.53h-2V9.81h-2.97v8.72h-2
                      V0.43h2v7.36h2.97V0.33H259.36z"/>
                    <path d="M262.9,9.11v-1.8c5.21-0.02,8.53-1.3,8.53-4.3V2.58h-8.53v-1.8h10.67v1.89C273.57,7.2,269.28,9.11,262.9,9.11z
                      M265.85,16.92h13.8v1.69h-15.93v-4.9h13.34v-1.61h-13.39v-1.69h15.51v4.9h-13.34V16.92z M281.8,3.58V5.6h-2.6v3.8h-2.15V0.33
                      h2.15v3.25H281.8z"/>
                    <path d="M300.84,9.81h-10.83V0.65h2.1v2.67h6.62V0.65h2.1V9.81z M306.42,15.17c0,2.67-3.49,3.69-7.94,3.69
                      c-4.43,0-7.94-1.02-7.94-3.69s3.51-3.69,7.94-3.69C302.93,11.48,306.42,12.5,306.42,15.17z M298.74,8.03V5.08h-6.62v2.95H298.74z
                      M304.14,15.17c0-1.32-2.5-1.93-5.66-1.93c-3.15,0-5.66,0.61-5.66,1.93c0,1.35,2.52,1.93,5.66,1.93
                      C301.65,17.1,304.14,16.51,304.14,15.17z M308.74,4.23v2.06h-2.6v4.6h-2.15V0.33h2.15v3.91H308.74z"/>
                    <path className='arr' d="M328.74,15.95v2.02h-18.51v-2.02h8.14v-4.17h-6.92V0.87h2.13v3.32h11.8V0.87h2.13v10.91h-6.94v4.17H328.74z M313.58,9.85
                      h11.8V6.12h-11.8V9.85z"/>
                    <path className='arr' d="M336.98,9.94c-3.49,0-5.68-1.91-5.68-4.71c0-2.78,2.19-4.71,5.68-4.71c3.52,0,5.71,1.93,5.71,4.71
                      C342.69,8.03,340.5,9.94,336.98,9.94z M348.72,15.02c0,2.78-3.49,3.84-7.92,3.84c-4.43,0-7.9-1.06-7.9-3.84s3.47-3.84,7.9-3.84
                      C345.23,11.17,348.72,12.24,348.72,15.02z M336.98,8.14c2.13,0,3.56-1.06,3.56-2.91s-1.43-2.91-3.56-2.91
                      c-2.13,0-3.56,1.06-3.56,2.91S334.86,8.14,336.98,8.14z M346.42,15.02c0-1.41-2.5-2.06-5.62-2.06c-3.12,0-5.62,0.65-5.62,2.06
                      c0,1.43,2.5,2.06,5.62,2.06C343.93,17.08,346.42,16.45,346.42,15.02z M346.42,6.57V3.82h-3.1l-0.13-1.84h3.23V0.33h2.13v10.24
                      h-2.13V8.42h-3.23l0.13-1.84H346.42z"/>
                  </g>
                </g>
              </svg>
           </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="scrollspy-nav" />
          <Navbar.Collapse id="scrollspy-nav">
            <Nav className="ml-auto" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="#section1">Section 1</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#section2">Section 2</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#section3">Section 3</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#section4">Section 4</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Slider ></Slider>
        <Skill title={db.skill}>
                                
        </Skill>

        <Interview h2="사전인터뷰"></Interview>
        <Form h2='면접제안'></Form>
      </Container>
    </div>
  );
}

export default App;
