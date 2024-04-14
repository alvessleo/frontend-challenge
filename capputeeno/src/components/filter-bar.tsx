import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: left;
    justify-content: space-between;
`

export function FilterBar(props: FilterBarProps){
    return(
        <FilterContainer>
            <FilterByType></FilterByType>
            <FilterByPriority></FilterByPriority>
        </FilterContainer>
    )
}