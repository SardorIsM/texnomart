import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { SlBasket } from 'react-icons/sl'
import { HiOutlineTrash } from 'react-icons/hi'
import './BasketModule.css'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'

const BasketModule = ({ isBasketModuleActive, setIsBasketModuleActive }) => {

    const dispatch = useDispatch()
    const allAddedProducts = useSelector(state => state);
    // console.log(allAddedProducts?.products?.productInfo?.map((product) => { return product }));
    return (
        <div className={isBasketModuleActive === true ? "basketModule basketModuleActive" : "basketModule"}>
            <div className='basketModule__wrapper'>
                <h4 className='titleBasketModule'>Купить сейчас</h4>
                <TiDeleteOutline className='quitThisModule' onClick={() => { setIsBasketModuleActive(false) }} />
            </div>
            {
                allAddedProducts.products.productInfo?.length > 0 ? null :
                    <div className='mainBasketIcon__wrapper'>
                        <SlBasket className='mainBasketIcon' />
                        <p className='mainBasketIconText'>В корзине пока нет продуктов</p>
                    </div>
            }
            {
                allAddedProducts.products.productInfo?.map((product) =>
                    <div key={uuidv4()} className='eachProductContainer'>
                        <div>
                            <img src={product.category.image} alt="" style={{ width: "120px", height: "120px", marginRight: "50px"}} />
                        </div>
                        <div style={{ marginRight: "100px", width: "400px"}}>
                            <h5 style={{ fontSize: "20px", marginBottom: "15px" }}>{product.title}</h5>
                            <p style={{ fontSize: "18px" }}>{product.price} $</p>
                        </div>
                        <div>
                            <HiOutlineTrash className='eachProductContainerTrashIcon' onClick={() => {
                                dispatch({
                                    type: "DELETE",
                                    data: product
                                })
                            }} />
                        </div>
                    </div>
                )


            }

        </div>
    )
}

export default BasketModule