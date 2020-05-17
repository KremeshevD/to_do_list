import React, { useEffect } from 'react';
import style from './Items.module.css'


const Items = (props) => {

    return (
        <div className={style.slow_appearance}>
           { ([...props.tasks]).reverse().map( (e,i,arr) => {
                return (
                    
                    <div className={style.item_container + " " + (e.completed && style.completed)
                        + " " + (e.id === arr.length ? style.slow_appearance : "")
                    } key={e.id}>
                        <div >{e.title}</div>
                        <div><input type='checkbox' onClick={() => props.toggleComplete(e.id)} checked={e.completed}/></div>
                    </div>
                )
                }
            )
            }
        </div>
    )
}


export default Items

