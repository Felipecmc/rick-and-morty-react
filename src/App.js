
import './App.css';
import {useState, useEffect} from 'react'
import Characters from './components/Characters'


function App() {
  const [characterList, setCharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page="+ currentPage)
    .then(res => res.json())
    .then((res) => setCharacterList(res.results))
    .catch(err => console.log(err))
  })

  const NextPage = () => (
    setCurrentPage(currentPage + 1)
  )

  const PreviousPage = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
  }
  if(currentPage === 1){
    return(
      <div className="App">
      <h2>Personagens</h2>
      <button onClick={() => NextPage()}>Próxima Página</button>
     <Characters
     characterList={characterList}
     />
    </div>
  );
    
  }
  return (
    <div className="App">
      <h2>Personagens</h2>
      <button onClick={() => PreviousPage()}>Página Anterior</button><button onClick={() => NextPage()}>Próxima Página</button>
     <Characters
     characterList={characterList}
     />
    </div>
  );
}

export default App;
