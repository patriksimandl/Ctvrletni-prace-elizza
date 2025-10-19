import { BottomMenu } from "../../BottomMenu/BottomMenu";
import { MainMenu } from "../../MainMenu/MainMenu";
import { zapisy, years } from "../../data/zapisyVyboru";
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import { Years } from "./Years";
import './ZapisyVyboru.css'
import Harimoto from '../../assets/Images/harimoto-celebration.avif'


export function ZapisyVyboru() {
  const [zapisyVyboru, setZapisy] = useState(zapisy);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWinWidth(width);
    };


    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize) }
  }, [])


  return (
    <>
      <title>Zápisy výboru a turnaje</title>
      <MainMenu />

      <div className="zapisy-vyboru-page-container">
        <div className="gradiant" />
        <img src={Harimoto} className='background-image' />
        <div className="green-gradiant" />
        <div className="zapisy-vyboru-link-container">

          {years.map((year) => {
            return (
              <Years key={year} year={year} winWidth={winWidth} />
            )
          })}
        </div>
      </div>
      <BottomMenu />
    </>
  )
}