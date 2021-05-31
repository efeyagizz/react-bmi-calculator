import React, { useState } from 'react'
import './BmiCalc.css'
import { Button } from './Button';
import DietList from './dietLists/DietList';
import DietList2 from './dietLists/DietList2';
import DietList3 from './dietLists/DietList3';
import DietList4 from './dietLists/DietList4';


function BmiCalc() {

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [dietList, setDietList] = useState();


    const handleHeightChange = e => {

      localStorage.setItem('Height', e.target.value);

      setHeight(e.target.value)
      }

    const handleWeightChange = e => {

      localStorage.setItem('Weight', e.target.value);

      setWeight(e.target.value)
      }

      const handleBmi = () => {
        const val = (
          [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi("Vücut Kitle İndeksiniz: " + val);
        if (val < 18.5) {
          setInfo("Zayıf");
          setDietList(<DietList />);
        } else if (val >= 18.5 && val <= 24.9) {
          setInfo("Sağlıklı");
          setDietList(<DietList2 />);
        } else if (val >= 24.9 && val < 30) {
          setInfo("Kilolu");
          setDietList(<DietList3 />);
        } else {
          setInfo("Obez");
          setDietList(<DietList4 />);
        }
      }; 

    
    return (
        <div className="container">
            <h1 className="mt-3">BMI Calculator</h1>
            <div className="inputContainer">
                <input className="heightInput" type="text" placeholder="Boyunuzu giriniz örn:180" onChange={handleHeightChange}/>
                <input className="weightInput ml-3" type="text" placeholder="Kilonuzu giriniz örn:75" onChange={handleWeightChange}/>
            </div>
            <Button onClick={handleBmi}>Hesapla</Button>
            <h1>{bmi}</h1>
            <h2>{info}</h2>
            <div className="dietList">{dietList}</div>
        </div>
    )
}

export default BmiCalc
