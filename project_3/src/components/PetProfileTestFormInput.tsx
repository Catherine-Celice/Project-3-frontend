interface Props {
    firstname: string;
    lastname: string;
    email: string;
    phone?: string;
    userID: string;
    password1: string;
    password2: string;
  }
  
//   TO DO -- CAC: Have to look up how to label an optional parameter in a function call, i.e. phone)
// TO DO -- CAC: have to figure out how to make form stuff
  function ProfileTestFormInput({firstname, lastname, email, userID, password1, password2, phone}: Props) {
    return (
      <p className="PTFormInput">
          {/* <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={value}  onChange={e => onChange(e.target.value)} required={required} minLength={minLength}/> */}
      </p>
    );
  }
  
  export default ProfileTestFormInput;