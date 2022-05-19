import React from "react";
import style from "./AuthorizationPage.module.scss";
import Button from "../src/components/Button";
import InputData from "../src/components/InputData";
import { NavLink } from "react-router-dom";


const AuthorizationPage = (props) => {
    return (
        <div className={style.Authorization}>
            <div >
                <div className={style.text}>
                    Выполните вход
                </div>
            </div>
            <div>
                <InputData
                    onChange={props.updateLoginTextArea}
                    value={props.loginValue}
                    input_type="text"
                    text="Login:"
                    placeholder="Login"
                />
            </div>
            <div>
                <InputData
                    onChange={props.updatePasswordTextArea}
                    value={props.passwordValue}
                    input_type="password"
                    text="Password:"
                    placeholder="Password"
                />
            </div>
            <div className={`${style.Button__place}`}>
                <Button
                    actionOnClick={props.onLogInClick}
                    text="Sign In"
                />
                <Button
                    actionOnClick={props.onSignInClick}
                    text="Sign Up"
                />
                 <NavLink
                    to={`/apiselector/api-choose`}
                >
                    CHOOSE
                </NavLink>
            </div>
        </div>
    )
}




export default AuthorizationPage;