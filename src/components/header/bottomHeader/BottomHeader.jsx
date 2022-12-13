import React, { useEffect, useState } from 'react'
import { BiCategory } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'
import { BsFillLightningFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import c from './BottomHeader.module.css'
import { v4 as uuidv4 } from 'uuid';

const BottomHeader = ({isCatalogActive, setCatalogActive}) => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/categories")
      .then(res => res.json())
      .then(data => setCategories(data.slice(0,10)))
  }, [])

  return (
    <div className={c.bottomHeader}>
      <div className={c.mainCatalog} onClick={() => {
        isCatalogActive ? setCatalogActive(false) : setCatalogActive(true)
      }} >
        {
          isCatalogActive ? <MdCancel className={c.catalogIcon} /> : <BiCategory className={c.catalogIcon} />
        }
        <p className={c.catalogName}>Каталог</p>
      </div>
      <div className={c.bottomHeaderCategories}>
        <div className={c.categoryYellow}>
          <Link className={c.yellowLink}>
            <BsFillLightningFill className={c.zipIcon} />
            <p>ЖЕЛТАЯ НЕДЕЛЯ</p>
          </Link>
        </div>
        {
          categories.map(info =>
            <Link key={uuidv4()} className={c.categoriesLink}>
              <p key={info.id}>{info.name}</p>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default BottomHeader