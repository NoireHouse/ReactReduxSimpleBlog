import React from 'react';

const renderField = ({
  input,
  textarea,
  meta: { touched, error, invalid }
}) => {
  const textareaType = <textarea {...input} placeholder={input.name} className={`form-control`}/>;
  const inputType = <input {...input} placeholder={input.name} className={`form-control`}/>;
  
  return (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
      <label className='form-control-label'>{input.name}</label>
        <div>
          {textarea ? textareaType : inputType}
          {touched && (error && <span className='form-control-feedback'>{error}</span>)}
        </div>
    </div>
  );
};

export default renderField;
