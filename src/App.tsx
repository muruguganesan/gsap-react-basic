import {useEffect, useRef} from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

import './App.css'

function App() {
  const fEle = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".f",
    //     toggleActions: "restart reverse reverse pause",
    //     start: "top center",
    //     markers: true
    //   }
    // }).
    // to('.f',{
    //   x: 800,
    //   duration: 3,
    //   rotation: 360
    // });

    gsap.to(fEle.current, {
      scrollTrigger: {
        trigger: fEle.current,
        toggleActions: "play pause reverse pause",
        start: "top center",
        markers: true,
        // scrub: true,
        // pin:".a"
      }, 
      x: 300,
      duration: 3,
      rotation: 360,
      ease: "none"
  });
  },[]);
  

  return (
    <div className="wrapper">
      <div className="box a">a1</div>
      <div className="box b">b1</div>
      <div className="box c">c1</div>
      <div className="box d">d1</div>
      <div className="box e">e1</div>
      <div className="box f" ref={fEle}>f1</div>
      <div className="box a">a2</div>
      <div className="box b">b2</div>
      <div className="box c">c2</div>
      <div className="box d">d2</div>
      <div className="box a">a3</div>
      <div className="box b">b3</div>
      <div className="box c">c3</div>
      <div className="box d">d3</div>

    </div>
  )
}

export default App
