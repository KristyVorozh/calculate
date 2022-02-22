import React from 'react';
interface PropsCalculate {
    number: string
    numberName:string
    class?: boolean
    onClickFunction: (e:any) => void;
}
const ButtonNumber = (props: PropsCalculate) => {
    return (
        <div>
            <button className={props.class ? 'main_flex-clear' : 'main_flex-number'} name={props.numberName} onClick={props.onClickFunction}>{props.number}</button>
        </div>
    );
};

export default ButtonNumber;