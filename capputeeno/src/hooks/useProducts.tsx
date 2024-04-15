import { ProductsFetchResponse } from '@/models/response/products-reponse';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise }from 'axios';
import { useFilter } from './useFilter';
import { mountQuery } from '@/utils/graphQL-filters';
import { useDeferredValue } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string; 

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, {query})
}

export function useProducts(){
    const { type, priority, search } = useFilter();
    const searchDeferred = useDeferredValue(search);
    const query = mountQuery(type, priority)
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority] // DAR UM NOME PARA A REQUISICAO, PARA O CACHE
    })

    const products = data?.data?.data?.allProducts;
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()));

    return {
        data: filteredProducts
    }
}

// npm i axios
// npm i @tanstack/react-query