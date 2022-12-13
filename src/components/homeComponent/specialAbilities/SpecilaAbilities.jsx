import React from 'react'
import c from './SpecialAbilities.module.css'

const SpecilaAbilities = () => {
    return (
        <div className={c.specilaAbilities}>
            <h2 className={c.mainInfo}>Телефоны и бытовая техника в рассрочку</h2>
            <div className={c.specilaAbilitiesContainer}>
                <div className={c.infoWrapper}>
                    <div className={c.iconWrapper}>
                        <img src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg" alt="" />
                    </div>
                    <h4 className={c.infoTitle}>Покупка в рассрочку</h4>
                    <p className={c.infoText}>
                        Удобная онлайн рассрочка на товары бытовой техники в Texnomart
                    </p>
                </div>
                <div className={c.infoWrapper}>
                    <div className={c.iconWrapper}>
                        <img src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg" alt="" />
                    </div>
                    <h4 className={c.infoTitle}>Бесплатная доставка</h4>
                    <p className={c.infoText}>
                        Условия доставки товаров в Техномарт
                    </p>
                </div>
                <div className={c.infoWrapper}>
                    <div className={c.iconWrapper}>
                        <img src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg" alt="" />
                    </div>
                    <h4 className={c.infoTitle}>Гарантия на товары</h4>
                    <p className={c.infoText}>
                        Узнайте всё о гарантии и возврате товара в Texnomart
                    </p>
                </div>
                <div className={c.infoWrapper}>
                    <div className={c.iconWrapper}>
                        <img src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg" alt="" />
                    </div>
                    <h4 className={c.infoTitle}>Бонусная система</h4>
                    <p className={c.infoText}>
                        Бонусная система
                    </p>
                </div>
                <div className={c.infoWrapper}>
                    <div className={c.iconWrapper}>
                        <img src="https://texnomart.uz/_nuxt/img/installment-5.513f513.svg" alt="" />
                    </div>
                    <h4 className={c.infoTitle}>Помощь</h4>
                    <p className={c.infoText}>
                        Частые вопросы
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SpecilaAbilities