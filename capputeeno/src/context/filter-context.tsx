"use client";

import { FilterTypes } from "@/enum/filter-types.enum";
import { PriorityTypes } from "@/enum/priority-types.enum";
import { createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterTypes.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterTypes) => {},
});

interface ProvideProps {
    children: React.ReactNode;
}

export function FilterContextProvider({children}: ProvideProps){
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterTypes.ALL);
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY);

    return(
        <FilterContext.Provider 
            value={{
                search, 
                page, 
                type, 
                priority, 
                setPriority, 
                setSearch, 
                setPage, 
                setType
            }}>
            {children}
        </FilterContext.Provider>
    )
}