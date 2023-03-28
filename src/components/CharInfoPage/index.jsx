import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CharImage, CharName, CharStatus, CharSpecies, CharGender, CharLocation, Container, BackButton } from "./styles";

function CharInfoPage() {
  const { id } = useParams(); // Obtém o ID do personagem a partir dos parâmetros da rota
  const [charData, setCharData] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharData(response.data);
        console.log(charData)
      })
      .catch(error => {
        console.log(error);
      });
  },);

    return (
        <Container>
          <CharImage src={charData.image} alt={charData.name} />
          <CharName>{charData.name}</CharName>
          <CharStatus>Status: {charData.status}</CharStatus>
          <CharSpecies>Species: {charData.species}</CharSpecies>
          <CharGender>Gender: {charData.gender}</CharGender>
          <CharLocation>Id: {charData.id}</CharLocation>
        </Container>
      );
    }

export default CharInfoPage;
