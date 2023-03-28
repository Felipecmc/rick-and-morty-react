import CharCard from "../CharCard"

function Characters({characterList}) {
    return(
        <ul>
            
            {characterList.map((character) => {
                return (
                    <CharCard
                    status={character.status}
                    name={character.name}
                    id={character.id}
                    image={character.image}
                    />
            )
            })
            }
        </ul>
    )
}

export default Characters;