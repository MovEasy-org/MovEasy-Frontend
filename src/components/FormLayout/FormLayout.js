import React from 'react';
import "./FormLayout.scss";
import Input from '../Input/Input';
const FormLayout = ({state,children}) => {

    const onSubmit =(e)=>{
        e.preventDefault();
        console.log(state)
    }

    return (
        <form className="form-layout" onSubmit={onSubmit} state={state}>
            {children}
        </form>
    )
}

export default FormLayout
