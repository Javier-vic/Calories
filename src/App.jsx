/*import { useState } from 'react'*/
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/Navbar.jsx'
import Input from './components/Input.jsx'
import InputSelect from './components/InputSelect.jsx'

function App() {
    const selectGender = [
        { value: "1", label: "Hombre" },
        { value: "0", label: "Mujer" }
    ];

    const selectActivity = [
        { value: "1.2", label: "Sedentario" },
        { value: "1.375", label: "Ligero" },
        { value: "1.55", label: "Intermedio" },
        { value: "1.725", label: "Activo" },
        { value: "1.9", label: "Muy Activo" },
    ];

    const handleButtonClick = () => {
        calorieCalculator();
    };

    return (
        <>
          <Navbar/>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Calculadora</h5>
                        <h6 className="card-subtitle mb-2 text-muted">El resultado de esta calculadora no es exacto y deberia ser utilizado com un aproximado.</h6>
                        <InputSelect options={selectGender} selectText="Sexo" selectPlaceholder="Seleccione su sexo" selectId="selectGender" />
                        <Input inputText="Edad" inputId="inputAge" inputType="number" inputPlaceholder=""/>
                        <Input inputText="Altura" inputId="inputHeight" inputType="number" inputPlaceholder=""/>
                        <Input inputText="Peso" inputId="inputWeight" inputType="number" inputPlaceholder="" />
                        <InputSelect options={selectActivity} selectText="Actividad" selectPlaceholder="Seleccione su nivel de actividad" selectId="selectActivity"/>
                        <button type="button" className="btn btn-primary" onClick={handleButtonClick}>Primary</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App

function calorieCalculator() {
    let age = document.getElementById('inputAge').value;
    let height = document.getElementById('inputHeight').value;
    let weight = document.getElementById('inputWeight').value;
    let gender = document.getElementById('selectGender').value;
    let activity = document.getElementById('selectActivity').value;

    let calories;

    if (gender == 1) {
        calories = 5 + (10 * weight) + (6.25 * height) - (5 * age);
    } else {
        calories = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    calories *= activity;
    console.log(calories);
}