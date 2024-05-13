const InputSelect = ({ selectText, options, selectPlaceholder }) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">{selectText}</label>
            </div>
            <select className="form-select" id="inputGroupSelect01">
                <option >{selectPlaceholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default InputSelect;