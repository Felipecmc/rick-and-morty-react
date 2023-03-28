import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
background-color: #f5f5f5;
border-radius: 12px;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
max-width: 800px;
margin: 0 auto;
`;

export const CharImage = styled.img`
max-width: 100%;
margin-bottom: 24px;
border-radius: 8px;
`;

export const CharName = styled.h2`
font-size: 36px;
margin-bottom: 8px;
color: #222;
font-weight: bold;
text-align: center;
`;

export const CharStatus = styled.p`
font-size: 24px;
margin-bottom: 16px;
color: #777;
`;

export const CharSpecies = styled.p`
font-size: 24px;
margin-bottom: 16px;
color: #777;
`;

export const CharGender = styled.p`
font-size: 24px;
margin-bottom: 16px;
color: #777;
`;

export const CharLocation = styled.p`
font-size: 24px;
color: #777;
`;

export const BackButton = styled.button`
border: none;
background-color: transparent;
color: #777;
font-size: 18px;
font-weight: bold;
margin-top: 16px;
cursor: pointer;
transition: color 0.2s ease-in-out;

&:hover {
  color: #222;
}
`;
