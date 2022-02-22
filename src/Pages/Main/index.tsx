import React, {useState} from 'react';
import ButtonNumber from '../../Component/ButtonNumber'
import './style.css'

const Main = () => {
    const [numberList, setNumberList] = useState<string>('')
    const addNumber = (e:any)=>{
        setNumberList(numberList?.concat(e.target.name))
    }
    const clearFunc = ()=>{
        setNumberList('')
    }
    const deleteFunc = () => {
        setNumberList(numberList?.slice(0, - 1))
    }
    const calculateFunc = () => {
        try {
            setNumberList(eval(numberList).toString())
        } catch (err) {
            setNumberList('Error')
        }
    }
    return (
        <div className='main_container'>
            <input value={numberList} />
            <div className='main'>
            <div className='main_flex'>
                <ButtonNumber class={true} number={'clear'} numberName={'clear'} onClickFunction={clearFunc}/>
                <ButtonNumber number={'C'} numberName={'C'} onClickFunction={deleteFunc}/>
                <ButtonNumber number={'%'} numberName={'%'} onClickFunction={addNumber}/>
            </div>
            <div className='main_flex'>
                <ButtonNumber number={'7'} numberName={'7'} onClickFunction={addNumber}/>
                <ButtonNumber number={'8'} numberName={'8'} onClickFunction={addNumber}/>
                <ButtonNumber number={'9'} numberName={'9'} onClickFunction={addNumber}/>
                <ButtonNumber number={'*'} numberName={'*'} onClickFunction={addNumber}/>
            </div>
            <div className='main_flex'>
                <ButtonNumber number={'4'} numberName={'4'} onClickFunction={addNumber}/>
                <ButtonNumber number={'5'} numberName={'5'} onClickFunction={addNumber}/>
                <ButtonNumber number={'6'} numberName={'6'} onClickFunction={addNumber}/>
                <ButtonNumber number={'-'} numberName={'-'} onClickFunction={addNumber}/>
            </div>
            <div className='main_flex'>
                <ButtonNumber number={'1'} numberName={'1'} onClickFunction={addNumber}/>
                <ButtonNumber number={'2'} numberName={'2'} onClickFunction={addNumber}/>
                <ButtonNumber number={'3'} numberName={'3'} onClickFunction={addNumber}/>
                <ButtonNumber number={'+'} numberName={'+'} onClickFunction={addNumber}/>
            </div>
            <div className='main_flex'>
                <ButtonNumber number={'0'} numberName={'0'} onClickFunction={addNumber}/>
                <ButtonNumber number={'.'} numberName={'.'} onClickFunction={addNumber}/>
                <ButtonNumber number={'='} numberName={'='} onClickFunction={calculateFunc}/>
                <ButtonNumber number={'/'} numberName={'/'} onClickFunction={addNumber}/>
            </div>
            </div>
        </div>
    );
};

export default Main;