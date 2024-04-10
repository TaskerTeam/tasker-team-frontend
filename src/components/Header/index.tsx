import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContent>
            <div>
                <img src="src/assets/icons/logo.svg" />
                <span>TaskerTeam</span>
            </div>
        </HeaderContent>
    );
}

const HeaderContent = styled.header`
    width: 100vw;
    height: 74px;
    gap: 0px;
    border-bottom: 1px solid #A9A9A9;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        gap: 10px;

        span {
            color: #2496FF;
            font-size: 24px;
            font-weight: bold;
        }

        img {
            width: 24px;
            height: 22px;
        }
    }
    
`;
