import React from "react";
import style from "./APiCell.module.scss"



const APiCell = (props) => {
    return (

        <div
            className={style.APiCell}
            {...props}
            ref={props.innerRef}

        >
            {props.APi.title}
        </div>
    )
}


export default APiCell;