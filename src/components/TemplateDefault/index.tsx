import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../Header";

interface TemplateDefaultProps {
    children: ReactNode;
    asideChildren: ReactNode;
}

export default function TemplateDefault({
    children,
    asideChildren,
}: TemplateDefaultProps) {
    return (
        <DivTemplate>
            <Header />
            <PageContent>
                <AsideContent>{asideChildren}</AsideContent>
                <MainContent>{children}</MainContent>
            </PageContent>
        </DivTemplate>
    );
}

const DivTemplate = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const PageContent = styled.div`
    display: flex;
    height: 100vh;
`;

const MainContent = styled.div`
    flex: 1;
    height: 100%;

    display: flex;
    justify-content: center;
    padding: 1em 2em;
`

const AsideContent = styled.div`
    width: 490px;
    height: 100%;
    background-color: #f5f5f5;
    border-top-right-radius: 16px;

    //Temp
    display: flex;
    justify-content: center;
    align-items: center;
    //...
`;


