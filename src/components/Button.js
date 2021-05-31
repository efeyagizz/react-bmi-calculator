import styled from 'styled-components/macro'

export const Button = styled.button`
    white-space: wrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3;
    margin-top: 10px;
    padding: 16px 20px;
    font-size: 14px;
    margin-top: 15px;

    &:hover {
        transform: translateY(-2px);
    }
`