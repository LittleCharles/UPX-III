import './stylesheet.css';
function FormInput(props){
    return (
        <div>
             <label for={props.name} class="formlabel">{props.label}</label><br/>
            <input value={props.value} placeholder={props.label} type = {props.type} onChange={props.onChange}/>
            <br/>
        </div>
      );
}

export default FormInput;