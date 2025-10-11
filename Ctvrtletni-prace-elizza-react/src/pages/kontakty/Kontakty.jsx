import { MainMenu } from "../../MainMenu/MainMenu"
import { useState } from "react"
import './Kontakty.css'
import { BottomMenu } from "../../BottomMenu/BottomMenu";

export function Kontaky() {
  const [data, setData] = useState([{
    name: 'Telefon',
    value: '732 599 993'
  }, {
    name: 'Adresa',
    value: 'Brandlova 1386/21 149 00 Praha 4, Chodov',
  }, {
    name: 'E-mail',
    value: 'ttcelizzapraha@seznam.cz'
  }, {
    name: 'Bankovní spojení',
    value: 'Česká spořitelna, č.ú. 287412319/0800'
  }]);

  return (


    <>
      <title>Kontakty</title>
      <MainMenu />

      <div className='kontaky-page-container'>
        <div className="kontakty-data-container">
          <div className="kontakty-data-grid">
            {data.map((item) => {
              return (
                <div key={item.name} className='data-item-container'>
                  <div className='data-item-name'>
                    {item.name}
                  </div>
                  <div className='data-item-value'>
                    {item.value}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="map-container">
          <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1297.5247650019944!2d14.518600126672688!3d50.03312662160899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b92159004e693%3A0x7ba31074b268e260!2sTTC%20Elizza%20Praha%2C%20z.s.!5e0!3m2!1scs!2scz!4v1760183425612!5m2!1scs!2scz"} width={'100%'} height={"500"} style={{ border: '0' }} allowFullScreen={''} loading={"lazy"} referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

      <BottomMenu />      

    </>
  )
}