import React from 'react'
import c from './BottomPdpComponent.module.css'

const BottomPdpComponent = () => {
  return (
    <div className={c.bottomPdpComponent}>
      <h4 className={c.bottomPdpComponentTitle}>Отзывы покупателей</h4>
      <div className={c.bottomPdpComponentContainer}>
        <img src="https://texnomart.uz/_nuxt/img/reviews-empty.ea844aa.svg" alt="" className={c.bottomPdpComponentImage} />
        <div>
          <p className={c.bottomPdpComponentFirstText}>Ваш отзыв будет первым!</p>
          <p className={c.bottomPdpComponentSecondText}>Оставьте отзыв, и другие пользователи будут вам благодарны.</p>
          <div className={c.bottomPdpComponentButton}>
            Оставить первый отзыв
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomPdpComponent