import React from 'react';
import s from './FormsControls.module.scss';

const FormControl = ({ input, meta, children, ...props }) => {
   const hasError = meta.touched && meta.error;
   return (
      <div className={`${s.formsControl} ${hasError ? s.error : ''}`}>
         <div>
            {children}
         </div>
         { hasError && <span>{meta.error}</span> }
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