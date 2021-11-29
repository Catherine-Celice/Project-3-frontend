interface Props {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  type?: string,
  required?: boolean,
  minLength?: number

  }
  // TO DO -- CAC find out how to handle optional parameters (currentlyHave) or add a "none" category
  function MatchingQuizFormInput({label, id, value, onChange, type = "text", required, minLength}: Props) {
    return (
      <p className="MQFormInput">
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={value}  onChange={e => onChange(e.target.value)} required={required} minLength={minLength}/>
      </p>
    );
  }
  
  export default MatchingQuizFormInput;