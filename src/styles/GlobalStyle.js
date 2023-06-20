import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.container {
    max-width: 120rem;
    margin: 0 7rem;
}

.grid {
    display: grid;
    gap:1rem;
}

.grid-two-columns {
    grid-template-columns: repeat(2,1fr);
}
.grid-three-columns {
    grid-template-columns: repeat(3,1fr);
}

.grid-four-columns {
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}
`;
