import { ReactNode } from "react"
import styled from "styled-components"

interface TemplateDefaultProps {
    children: ReactNode
}

export default function TemplateDefault({children}: TemplateDefaultProps) {
    return <DivTemplate>
        {children}
    </DivTemplate>
}

const DivTemplate = styled.div``