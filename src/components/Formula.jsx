function Formula(){
    return (
        <div className="container row py-4  mx-auto">
            <div className="formula col-sm-8 col-13 mx-auto p-3">
                <h3 className="text-color-1 text-center">C&oacute;mo calculamos las calor&iacute;as</h3>
                <p className="mt-3">
                    Calculamos las calor&iacute;as diarias utilizando la f&oacute;rmula de Mifflin-St Jeor,
                    que toma en cuenta tu edad, altura, peso, g&eacute;nero y nivel de actividad.
                    Esta f&oacute;rmula proporciona una estimaci&oacute;n precisa de la cantidad de calor&iacute;as necesarias
                    para mantener tu peso actual.
                    Ten en cuenta que esta es solo una estimaci&oacute;n y los resultados pueden variar.
                    Es importante utilizar esta informaci&oacute;n como una gu&iacute;a y consultar con un profesional de la salud para obtener asesoramiento personalizado.
                </p>
                <div className="mt-3">
                    <h5 className="text-color-1">F&oacute;rmula de Mifflin-St Jeor:</h5>
                    <p>
                        <strong className="text-color-1">Hombres:</strong> <br />
                        BMR = 10 * peso (kg) + 6.25 * altura (cm) - 5 * edad (a&ntilde;os) + 5
                    </p>
                    <p>
                        <strong className="text-color-1">Mujeres:</strong> <br />
                        BMR = 10 * peso (kg) + 6.25 * altura (cm) - 5 * edad (a&ntilde;os) - 161
                    </p>
                </div>
                <p className="mt-3  text-center">
                    Recuerda que la nutrici&oacute;n adecuada y un estilo de vida saludable son clave para el bienestar general.
                    Mant&eacute;n una dieta balanceada y haz ejercicio regularmente para obtener los mejores resultados.
                    &iexcl;Esta calculadora es un buen punto de partida para ayudarte a alcanzar tus objetivos de salud y fitness!
                </p>
            </div>            
        </div>
    );
}

export default Formula;