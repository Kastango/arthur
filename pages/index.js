import Head from "next/head";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";


export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 520.00,
          minWidth: 350.00,
          highlightColor: 0xfab66f,
          midtoneColor: 0x202dfa,
          lowlightColor: 0x1f2c78,
          baseColor: 0xfff7e9,
          blurFactor: 0.9,
          speed: 1.60,
          zoom: 0.90
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
        <Head>
          <title>Arthur Sosnowski</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-off-white h-screen">
          <div className="flex justify-between p-8">
            <ul className="flex space-x-5 font-medium" >
              <a href="https://www.behance.net/ArthurSosnowski">projects</a>   
              <Link href="/about"><a>about</a></Link>
              <a href="https://drive.google.com/file/d/17LAq6Pgof09QMV8Yjhn5s645kBic29KS/view?usp=sharing">resume</a>
            </ul>
            <ul className="flex space-x-5" >
              <a href="https://www.instagram.com/arthur.ber7/">
                <img className="h-6" src='/instagram-symbol.svg' alt="instagram"/>
              </a>
              <a href="https://www.linkedin.com/in/arthur-sosnowski">
                <img className="h-6" src='/linkedin-sign.svg' alt="linkedin" />
              </a>
            </ul>
          </div>
          <div className="flex justify-center self-center mt-28">
            <div className="h-grady w-gradx rounded-t-full overflow-hidden flex relative" ref={vantaRef}></div>
            <div className="flex md:flex-row md:space-x-6 z-10 absolute place-self-center my-auto flex-col">
              <img className="h-10" src='/arthur.svg' draggable="false" alt="arthur"/>
              <img className="h-10" src='/sosnowski.svg' draggable="false" alt="sosnowski"/>
            </div>
          </div>
        </main>
    </div>
  );
}