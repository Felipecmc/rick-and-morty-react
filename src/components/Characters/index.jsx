
import CharCard from "../Charcard";
import { useNavigate } from "react-router-dom";

function Characters({characterList}) {
  const navigate = useNavigate();

  function handleCharCardClick(id) {
    console.log("clicou")
    navigate(`/character/${id}`);
  }

  return(
    <div>
      <ul>
        {characterList.map((character) => {
          return (
            <CharCard
              key={character.id}
              status={character.status}
              name={character.name}
              id={character.id}
              image={character.image}
              onClick={() => handleCharCardClick(character.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Characters;