import React from "react";
import styled from 'styled-components'






function FormField({ label, type, name, value, onChange }) {
  return (
    <Container>
      <Text>
        {label}: 
        <Input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Text>
    </Container>
  )
}

const Text = styled.label`
    color: red;
    padding-bottom: 25px
`;

const Input = styled.input`
    background-color: #53585D;
    border: 0
`

const Container = styled.div`
    
    padding: 1em;
    border-radius: 1em;
`


export default FormField;