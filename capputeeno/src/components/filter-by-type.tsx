import { FilterTypes } from "@/enum/filter-types.enum";
import { useFilter } from "@/hooks/useFilter";
import styled from "styled-components";

interface FilterByTypeProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const FilterItem  = styled.li<FilterByTypeProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);
    list-style: none;
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : 'none'};
`

export function FilterByType(){
    const { type, setType } = useFilter();

    const handleChangeType = (value: FilterTypes) => {
        setType(value);
    }

    return(
        <FilterList>

            <FilterItem 
                selected={type === FilterTypes.ALL} 
                onClick={() => handleChangeType(FilterTypes.ALL)}
            >Todos os produtos</FilterItem>

            <FilterItem 
                selected={type === FilterTypes.SHIRT}
                onClick={() => handleChangeType(FilterTypes.SHIRT)}
            >Camisetas</FilterItem>

            <FilterItem 
                selected={type === FilterTypes.MUG}
                onClick={() => handleChangeType(FilterTypes.MUG)}
            >Canecas</FilterItem>
            
        </FilterList>
    )
}
