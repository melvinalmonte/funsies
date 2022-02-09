import { Radio } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

const RadioInput = ({ children, ...props }) => {
  const [field] = useField(props);
  return (
    <Radio {...field} {...props}>
      {children}
    </Radio>
  );
};

export default RadioInput;
