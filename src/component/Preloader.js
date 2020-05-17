import React from 'react'
import style from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div className={style.loader}><div className={style.loaderInercircle}></div></div>
    )
}

export default Preloader