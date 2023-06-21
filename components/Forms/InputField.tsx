import React, { useState } from 'react'
import { InputProps } from '../../types/propTypes'
import {
    Container,
    HidePassIcon,
    Input,
    ShowPassIcon,
    Wrapper,
    ErrorText
} from './InputFieldElements'

const InputFeild = ({ placeholder, icon, type, required, value, onChange, name, error }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordIcon = () => {
        setShowPassword(!showPassword)
    }

    const renderPasswordIcon = () => {
        if (showPassword) {
            return (
                <div  onClick={togglePasswordIcon}>

                <HidePassIcon />
                </div>
            )
        }
        else {
            return (
                <div onClick={togglePasswordIcon}>

                <ShowPassIcon />
                </div>
            )
        }
    }

    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <Container>
            <Wrapper>
                {icon}

                <Input
                    placeholder={placeholder}
                    type={inputType}
                    required={required}
                    value={value}
                    onChange={onChange}
                    name={name}
                />

                {
                    type === 'password' &&
                    renderPasswordIcon()
                }
            </Wrapper>

            {
                error &&
                <ErrorText>
                    {error}
                </ErrorText>
            }
        </Container>
    )
}

export default InputFeild