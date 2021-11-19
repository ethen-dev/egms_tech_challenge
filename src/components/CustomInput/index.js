import './CustomInput.css';

export const CustomInput = ({type, placeHolder, onInputChange}) => (
    <input
        type={type}
        placeholder={placeHolder}
        className="custom-input"
        onChange={onInputChange}
    />
)