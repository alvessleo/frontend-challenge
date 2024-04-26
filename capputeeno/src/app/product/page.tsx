"use client";
import { BackBtn } from "@/app/product/back-button";
import { DefaultPageLayout } from "@/components/default-page-layout";
import styled from "styled-components"

interface ProductProps {

}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`



export default function Product(props: ProductProps) {
    return (
        <DefaultPageLayout>
            <Container>
                <BackBtn navgate="/"/>
                <section>informações do produto</section>
            </Container>
        </DefaultPageLayout>
    )
}