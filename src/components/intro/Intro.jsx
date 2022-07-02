import "./intro.scss";
import { ArrowDownward } from "@material-ui/icons"
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  // when page onload it will work once 
  useEffect(() => {
    init( textRef.current , 
      { showCursor: true, 
        backDelay: 1500,
        backSpeed: 60,
        strings: ['Software Developer', 'Automotive Engineer'],
      })
    }, [])

  return (
    <div className='intro' id="intro">

      <div className="left">
        <div className="imgContainer">
          <img src="assets/my_photo.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There , I'm</h2>
          <h1>Abdulsamet Aybaz</h1>
          <h3> Freelance <span ref={textRef}></span> </h3>
        </div>
      </div>

      <a href="#portfolio">
        <ArrowDownward className="icon" />
      </a>

    </div>
  )
}
