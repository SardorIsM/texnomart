import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import { RiScales3Fill } from 'react-icons/ri'
import c from './TopPdpComponen.module.css'

const TopPdpComponent = () => {

    const [classActiveH, setClassActiveH] = useState()
    const [classActiveS, setClassActiveS] = useState()
    const [products, setProducts] = useState([])
    const { id } = useParams();

    const HeartActive = () => {
        if(classActiveH === undefined) {
            setClassActiveH(c.iconActive)
        } else {
            setClassActiveH()
        }
    }
    const ScalesActive = () => {
        if(classActiveS === undefined) {
            setClassActiveS(c.iconActive)
        } else {
            setClassActiveS()
        }
    }
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])

    return (
        <div className={c.topPdpComponent}>
            <h3 className={c.topPdpComponentTitle}>{products.description}</h3>
            <div className={c.topPdpComponentContainer}>
                <div className={c.topPdpComponentStatus}>
                    <img src="https://texnomart.uz/_nuxt/img/star_not_active.06189ec.svg" alt="" className={c.topPdpComponentStar} />
                    <img src="https://texnomart.uz/_nuxt/img/star_not_active.06189ec.svg" alt="" className={c.topPdpComponentStar} />
                    <img src="https://texnomart.uz/_nuxt/img/star_not_active.06189ec.svg" alt="" className={c.topPdpComponentStar} />
                    <img src="https://texnomart.uz/_nuxt/img/star_not_active.06189ec.svg" alt="" className={c.topPdpComponentStar} />
                    <img src="https://texnomart.uz/_nuxt/img/star_not_active.06189ec.svg" alt="" className={c.topPdpComponentStar} />
                    <div onClick={HeartActive} className={c.topPdpComponentLike}>
                        <BsHeart  className={classActiveH}/>
                        <p className={c.topPdpComponentInfoText} >В избранное</p>
                    </div>
                    <div onClick={ScalesActive} className={c.topPdpComponentCompare}>
                        <RiScales3Fill  className={classActiveS}/>
                        <p className={c.topPdpComponentInfoText} >В сравнение</p>
                    </div>
                </div>
                <p>Код: {products.id}</p>
            </div>
        </div>
    )
}

export default TopPdpComponent