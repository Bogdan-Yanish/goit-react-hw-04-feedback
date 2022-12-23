import styled from "styled-components";

export const StatisticsList = styled.ul`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    gap:10px;
`
export const StatisticsItem = styled.li`
    font-size:18px;
    font-weight:500;

    &:nth-last-child(-n+2){
        font-size:24px;
        color:blue;
    }
    
`