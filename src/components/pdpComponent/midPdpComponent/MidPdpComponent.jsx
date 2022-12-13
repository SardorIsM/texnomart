import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import c from './MidPdpComponent.module.css'
import { SlBasket } from 'react-icons/sl'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';

const MidPdpComponent = () => {

  const qwerty = useRef()
  const dispatch = useDispatch()
  // const allAddedProducts = useSelector(state => state);
  const [products, setProducts] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [id])

  return (
    <div className={c.midPdpComponent}>
      <div className={c.midPdpComponentContainer}>
        <img src={products?.category?.image} alt="" className={c.midPdpComponentImage} />
        <div>
          {
            products?.images?.map((productImage) =>
              productImage !== "" ? <img key={uuidv4()} src={productImage} alt="" className={c.productImage}></img> : <p key={uuidv4()} className={c.noImage}>У этого продукта нет альтернатив</p>
            )
          }
        </div>
      </div>
      <div className={c.midPdpComponentCentral}>
        <h4 className={c.midPdpComponentCentralTitle}>Информация о продукте</h4>
        <p className={c.midPdpComponentCentralText}>Название: {products?.title}</p>
        <p className={c.midPdpComponentCentralText}>Цена: {products?.price}$</p>
        <p className={c.midPdpComponentCentralText}>Категория продукта: {products?.category?.name}</p>
      </div>
      <div className={c.midPdpComponentEnd}>
        <div className={c.midPdpComponentEndContainer}>
          <h2>{products?.price} $</h2>
          <div ref={qwerty} className={c.midPdpComponentEndBasket} onClick={() => {
          // allAddedProducts.products.productInfo?.map(elem => elem.id === products.id ? qwerty.current.classList.add(`${c.midPdpComponentEndBasketDisabled}`) : null )
            dispatch({
              type: "ADD_TO_PRODUCT",
              data: products
          })
          }}>
            <SlBasket className={c.midPdpComponentEndBasketIcon}/>
            <p className={c.midPdpComponentEndBasketText}>В корзину</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidPdpComponent