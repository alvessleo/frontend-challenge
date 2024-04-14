import { ProductsFetchResponse } from '@/models/response/products-reponse';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise }from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string; 

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL,
        {
            query: `query {
                allProducts{
                id
                name
                price_in_cents
                image_url
                }
            }`
        })
}

export function useProducts(){
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products'] // DAR UM NOME PARA A REQUISICAO, PARA O CACHE
    })

    return {
        data: data?.data?.data?.allProducts
    }
}

// npm i axios
// npm i @tanstack/react-query