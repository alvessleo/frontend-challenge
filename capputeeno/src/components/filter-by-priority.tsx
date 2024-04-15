import styled from "styled-components"
import { ArrowIcon } from "./icons/arrow-icon"
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/enum/priority-types.enum";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;

    button{
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        color: var(--text-dark);
        line-height: 22px;
        margin-right: 16px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg{
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    background-color: white;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    list-style: none;
    width: 220px;
    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;s
    }

    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority(){
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => {
        setIsOpen((prev: boolean) => !prev);
    }

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value);
        setIsOpen(false);
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por 
                <ArrowIcon/>
            </button>

            {isOpen && <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>}

        </FilterContainer>
    )
}