import React, { useRef, useState } from 'react'
import c from './Catalog.module.css'
import CatalogMainInfo from '../../dummy-data-catalogMainInfo.json'
import CatalogInfo from '../../dummy-data-catalogInfo.json'
import { v4 as uuidv4 } from 'uuid';

import { IoIosArrowForward } from 'react-icons/io'


const Catalog = ({ isCatalogActive }) => {

    const take = useRef()


    window.addEventListener("scroll", function () {
        take?.current?.classList?.toggle(`${c.scrollCatalogActive}`, this?.window?.scrollY > 200)
    })

    const [CatalogActive, setCatalogActive] = useState(
        <div>
            <h4 className={c.catalogChangeTitle}>{CatalogInfo[0].title}</h4>
            <div className={c.catalogChangeContainer}>
                {CatalogInfo[0].info.map(first =>
                    <div key={uuidv4()} className={c.catalogChangeTextWrapper}>
                        <p style={{ fontSize: "16px", marginBottom: "15px" }}>{first.secondTitle}</p>
                        {
                            first.text.map(second =>
                                <p key={uuidv4()} style={{ fontSize: "14px", marginBottom: "5px" }}>{second}</p>
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div ref={take} className={isCatalogActive === true ? `${c.catalog} ${c.catalogActive}` : c.catalog}>
            <div className={c.catalogContainer}>
                <div className={c.catalogMainInfo}>
                    {
                        CatalogMainInfo.map((info) =>
                            <div key={info.id} className={c.catalogInfoWrapper} onMouseEnter={(e) => {
                                CatalogInfo.map((catalogInformation) =>
                                    catalogInformation.id === info.id ?
                                        setCatalogActive(<div key={uuidv4()}>
                                            <h4 className={c.catalogChangeTitle}>{catalogInformation.title}</h4>
                                            <div className={c.catalogChangeContainer}>
                                                {catalogInformation.info.map(first =>
                                                    <div key={uuidv4()} className={c.catalogChangeTextWrapper}>
                                                        <p style={{ fontSize: "16px", marginBottom: "15px" }}>{first.secondTitle}</p>
                                                        {
                                                            first.text.map(second =>
                                                                <p style={{ fontSize: "14px", marginBottom: "5px" }}>{second}</p>
                                                            )
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        </div>) :
                                        <></>
                                )
                            }}>
                                <div className={c.catalogInfoItems}>
                                    <img style={{ marginRight: "20px" }} src={info.iconImage} alt="" />
                                    <p>{info.text}</p>
                                </div>
                                <IoIosArrowForward />
                            </div>
                        )
                    }
                </div>
                <div className={c.catalogChange}>
                    {CatalogActive}
                </div>
            </div>
        </div>
    )
}

export default Catalog