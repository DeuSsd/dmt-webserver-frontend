import React from "react";
import style from "./Button.module.scss";



const Button = (props) => {
    return (
        <div className={style.Button}>
            <button onClick={() => {props.actionOnClick()}}>
                {props.text}
            </button>
        </div>
    )
}


export default Button;