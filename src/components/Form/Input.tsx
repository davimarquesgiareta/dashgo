import { Input as ChakraInput,  FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { FieldError } from'react-hook-form'

import { FormErrorMessage } from "@chakra-ui/react"
interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error: FieldError
}


export function Input({name, label, error, ...rest}:InputProps){
    return(
        <FormControl isInvalid={!!error}>
       {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput 
          name={name} 
          id={name}
          type="email" 
          focusBorderColor="pink.500" 
          bg="gray.900" variant="filled" 
          _hover={{bgColor: "gray.900"}}
          size="lg"
          {...rest}
        />  

        {  !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}

      </FormControl>

      
    )
}