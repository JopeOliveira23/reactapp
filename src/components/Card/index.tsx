import './styles.css';

function Card(props: any) {
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

export default Card;