import React from 'react'
import c from './DownloadAppendix.module.css'

const DownloadAppendix = () => {
    return (
        <div className={c.downloadAppendix}>
            <div className={c.downloadAppendixContainer}>
                <img src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png" alt="" className={c.downloadAppendixImage} />
                <div className={c.downloadAppendixSecondColon}>
                    <h3 className={c.downloadAppendixHTag}>Скачивайте приложение</h3>
                    <p className={c.downloadAppendixPTag}>Совершайте покупки в мобильном приложении, не выходя из дома!</p>
                    <div className={c.downloadAppendixCameraInfo}>
                        <img src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png" alt="" className={c.downloadAppendixCameraImg} />
                        <p className={c.downloadAppendixCameraText}>Наведите камеру и скачайте бесплатное приложение Texnomart</p>
                    </div>
                    <img src="https://texnomart.uz/_nuxt/img/play-market-ru.d25f1ad.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default DownloadAppendix