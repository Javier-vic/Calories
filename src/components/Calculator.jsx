import Input from './Input.jsx';
import InputSelect from './InputSelect.jsx';

function Calculator() {
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
        <div className="container row py-4">
            <div className="calculator col-8 mx-auto px-0">
                <div className="calculator-title p-2 text-white">
                    <h5 className="card-title text-center">Calculadora</h5>
                    <h6 className="card-subtitle mb-2 ">El resultado de esta calculadora no es exacto y deberia ser utilizado como un aproximado.</h6>
                </div>
                <div className="calculator-body p-2 px-3">
                    <InputSelect options={selectGender} selectText="Sexo" selectPlaceholder="Seleccione su sexo" selectId="selectGender" />
                    <Input inputText="Edad" inputId="inputAge" inputType="number" inputPlaceholder="" />
                    <Input inputText="Altura" inputId="inputHeight" inputType="number" inputPlaceholder="" />
                    <Input inputText="Peso" inputId="inputWeight" inputType="number" inputPlaceholder="" />
                    <InputSelect options={selectActivity} selectText="Actividad" selectPlaceholder="Seleccione su nivel de actividad" selectId="selectActivity" />
                    <button id="submitButton" type="button" className="btn btn-primary" onClick={handleButtonClick}>Calcular</button>
                </div>
            </div>
            <div id="results" className="results col-4 d-none">
                <div className="main-calories mb-3 text-center p-2">
                    <h6 className="text-white ">Calor&iacute;as diarias</h6>
                    <h1 className="text-white" id="mainCalories"></h1>
                </div>
                <div className="secondary-calories mb-3 text-center p-2">
                    <h6 className=" ">Calor&iacute;as para perder peso</h6>
                    <h1 className="" id="cutCalories"></h1>
                </div>
                <div className="secondary-calories mb-3 text-center p-2">
                    <h6 className=" ">Calor&iacute;as para ganar peso</h6>
                    <h1 className="" id="bulkCalories"></h1>
                </div>
            </div>
        </div>
    );
}

function calorieCalculator() {
    let age = document.getElementById('inputAge').value;
    let height = document.getElementById('inputHeight').value;
    let weight = document.getElementById('inputWeight').value;
    let gender = document.getElementById('selectGender').value;
    let activity = document.getElementById('selectActivity').value;
    let results = document.getElementById('results');

    if (age.trim() !== '' && height.trim() !== '' && weight.trim() !== '' && gender !== '-1' && activity !== '-1') {
        results.classList.remove('d-none');

        let calories, cutCal, bulkCal;

        if (gender == 1) {
            calories = 5 + (10 * weight) + (6.25 * height) - (5 * age);
        } else {
            calories = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }
        calories *= activity;
        cutCal = calories - 350;
        bulkCal = calories * 1.15;

        let mainCalories = document.getElementById('mainCalories');
        let cutCalories = document.getElementById('cutCalories');
        let bulkCalories = document.getElementById('bulkCalories');
        mainCalories.innerText = Math.trunc(calories);
        cutCalories.innerText = Math.trunc(cutCal);
        bulkCalories.innerText = Math.trunc(bulkCal);
    } else {
        results.classList.add('d-none');
    }
}

export default Calculator;