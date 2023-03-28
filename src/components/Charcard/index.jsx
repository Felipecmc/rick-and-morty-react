// function CharCard(props){
//     return(
//         <li className={props.status} key={props.id}>
//             <h3>{props.name}</h3>
//             <img src={props.image} alt="" />
//         </li>
//     )
// }

// export default CharCard;

function CharCard({ status, name, id, image, onClick}) {
    return (
      <li>
        <div className={status} onClick={onClick}>
          <img src={image} alt={name} />
          <div className="char-card-details">
            <h2>{name}</h2>
            <p>{status}</p>
          </div>
        </div>
      </li>
    );
  }
  
  export default CharCard;



