import React from 'react'
import c from './BottomFooter.module.css'

const BottomFooter = () => {
  return (
    <div className={c.bottomFooter}>
      <div className={c.line}></div>
      <div className={c.info}>
        <p className={c.text}>2016-2022 ©texnomart.uz. Все права защищены. Указанная стоимость товаров и условия их приобретения действительны по состоянию на текущую дату</p>
      </div>
    </div>
  )
}

export default BottomFooter