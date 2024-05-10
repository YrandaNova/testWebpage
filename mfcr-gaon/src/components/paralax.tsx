/* eslint-disable @next/next/no-img-element */
"use client";
import { use } from "react";
import "/home/yranda/Documents/tecnicalDebt/Gaon-Front-Test/mfcr-gaon/src/styles/globals.css"; // Replace "../path/to/globals.css" with the actual path to your globals.css file
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Paralax() {
  const [background, setBackground] = useState(20);

  const parallaxRef = useRef(null);
  const cityBack2 = useRef(null);
  const cityBack = useRef(null);
  const spaceship = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".parallax",
          start: "top top",
          end: "5000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });

      tl.to(
        cityBack2.current,
        {
          y: "-=80",
        },
        0
      );
      tl.to(
        cityBack.current,
        {
          opacity: 0,
          y: "-=30",
        },
        0
      );

      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.5
      );
      tl.to(
        spaceship.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );

      tl.to(
        sun.current,
        {
          y: "+=210",
        },
        0
      );
      tl.to(
        copy.current,
        {
          y: "-250%",
          opacity: 1,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1.5,
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={parallaxRef}
        className="parallax bg-blue-500"
        style={{
          background: `linear-gradient( 
            #1C1678, #4633E5 ,#705FFF ${background}% ,#8576FF, #7BC9FF, #A3FFD6)`,
        }}
      >
        <img
          className="cityBack2"
          src={"/cityBack2.png"}
          alt="cityBack"
          ref={cityBack2}
        />
        <img
          className="cityBack"
          src={"/cityBack.png"}
          alt="cityBack"
          ref={cityBack}
        />
        <img className="stars" src={"/stars.png"} alt="Stars" ref={stars} />
        <img
          className="spaceship"
          src={"/spaceship.png"}
          alt="spaceship"
          ref={spaceship}
        />
        <img className="sun" src={"/sun2.png"} alt="sun" ref={sun} />
        <div className="copy">
          <h1>ヴ ェ イ パ ー ウ ェ イ ヴ</h1>
          <span ref={btn}>Aesthetic</span>
        </div>
      </div>
    </div>
  );
}
