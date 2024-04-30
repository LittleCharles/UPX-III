import './stylesheet.css';
function FormInput(props){
    return (
        <div>
            <input value={props.value} placeholder={props.label} type = {props.type} onChange={props.onChange}/>
            <br/>
        </div>
      );
}

export default FormInput;