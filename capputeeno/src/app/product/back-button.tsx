import styled from "styled-components";
import { BackIcon } from "../../components/icons/back-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    color: var(--secondary-text);
`

interface BtnProps {
    navgate: string;
}

export function BackBtn({ navgate }: BtnProps){
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navgate)
    }

    return (
        <Button onClick={handleNavigate}>
            <BackIcon/>
            Voltar
        </Button>
    )
}