import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  height:500px;
  // position:relative;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    height:200px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height:200px;
  }
`;
