const Input = ({ inputText, inputId, inputType, inputPlaceholder }) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">{inputText}</span>
            </div>
            <input type={inputType} className="form-control" id={inputId} placeholder={inputPlaceholder} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    );
}

export default Input;