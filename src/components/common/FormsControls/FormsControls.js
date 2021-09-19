import React from 'react';
import s from './FormsControls.module.scss';

const FormControl = ({ input, meta: {touched, error}, children }) => {
   const hasError = touched && error;
   return (
      <div className={`${s.formsControl} ${hasError ? s.error : ''}`}>
         <div>
            {children}
         </div>
         { hasError && <span>{error}</span> }
      </div>
   )
};

export const Textarea = (props) => {
   const { input, meta, ...restProps } = props;
   return <FormControl {...props} ><textarea {...input} {...restProps}></textarea></FormControl>
};



export const Input = (props) => {
   const { input, meta, ...restProps } = props;
   return <FormControl {...props} ><input {...input} {...restProps}></input></FormControl>
};