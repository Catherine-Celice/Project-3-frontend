import '../styles/CreateYourUserProfileInput.css';

interface Props {
    label: string;
    id: string;
    value: string;
    onChange: (value: string) => void;
    //onSubmit: (value: string) => void;
    type?: string,
    required?: boolean,
    minlength?: number
  }
  
  function CreateYourUserProfileInput({label, id, value, onChange,  type = "text", required, minlength}: Props) {
    return (
      <p className="CreateYourUserProfileInput">
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={value}  onChange={e => onChange(e.target.value)} required={required} minLength={minlength}/>
      </p>
    );
  }
  
  export default CreateYourUserProfileInput;


