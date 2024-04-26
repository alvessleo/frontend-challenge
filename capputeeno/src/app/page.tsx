"use client";

import { DefaultPageLayout } from "@/components/default-page-layout";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { QueryClient } from "@tanstack/react-query";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Home() {
  const client = new QueryClient();
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar/>
        <ProductsList/>
      </PageWrapper>   
    </DefaultPageLayout>
   
  );
}
