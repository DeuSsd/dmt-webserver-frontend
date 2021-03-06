import React, { useState } from "react";
import Select from 'react-select';
import style from "./SelectorFieldPT.module.scss"


const SelectorFieldPT = (props) => {
    // const [selectedOption, setSelectedOption] = useState(props.value);
    const [selectedOption, setSelectedOption] = useState({value: props.value, label: props.value});

    // debugger

    
    let onTextAreaValueChange = (newSelected) => {
        // debugger
        setSelectedOption(newSelected)

        let APiID = props.APiID
        let parameterAPI = props.parameterAPI;
        // let valueParameterAPI = selectedOption.value;
        let valueParameterAPI = newSelected.value;
        // debugger
        props.updateAPIParameterInputAreaCreator(APiID,parameterAPI, valueParameterAPI);

    }
    const options = props.data.map((element) =>({value: element, label: element}))




    // debugger
    console.log(props.value)
    return (
        <div className={style.InputData}>
            <div>
                {props.text}
            </div>
            <div>
                {/* <input
                    onChange={onTextAreaValueChange}
                    value={props.value}
                    type={props.input_type}
                    placeholder={props.placeholder} /> */}
                <Select 
                    options={options}
                    value={selectedOption}
                    onChange={onTextAreaValueChange}
                />

            </div>
        </div>
    )
}


export default SelectorFieldPT;