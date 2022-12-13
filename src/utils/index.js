import c from './index.module.css';

const Overlay = ({callback}) => {
    return(
      <div onClick={() => {callback(false)}} className={c.overlay}></div>  
    )
  }
const CatalogOverlay = ({callback}) => {
    return(
      <div onClick={() => {callback(false)}} className={c.catalogOverlay}></div>  
    )
  }
  
  export { Overlay, CatalogOverlay } 