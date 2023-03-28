function CharCard(props){
    return(
        <li className={props.status} key={props.id}>
            <h3>{props.name}</h3>
            <img src={props.image} alt="" />
        </li>
    )
}

export default CharCard;