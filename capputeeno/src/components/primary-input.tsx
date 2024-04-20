import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    background-color: var(--bg-secondary);
    padding: 10px 16px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);
    border: none;

    @media (${props => props.theme.desktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }
`
const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (${props => props.theme.desktopBreakpoint}){
        width: 352px;
        
    }

`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}