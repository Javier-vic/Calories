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

    return (
        <>
          <Navbar/>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Calculadora</h5>
                        <h6 className="card-subtitle mb-2 text-muted">El resultado de esta calculadora no es exacto y deberia ser utilizado com un aproximado.</h6>
                        <InputSelect options={selectGender} selectText="Sexo" selectPlaceholder="Seleccione su sexo" />
                        <Input inputText="Edad" inputId="inputAge" inputType="number" inputPlaceholder=""/>
                        <Input inputText="Altura" inputId="inputAge" inputType="number" inputPlaceholder=""/>
                        <Input inputText="Peso" inputId="inputAge" inputType="number" inputPlaceholder="" />
                        <InputSelect options={selectActivity} selectText="Actividad" selectPlaceholder="Seleccione su nivel de actividad" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
