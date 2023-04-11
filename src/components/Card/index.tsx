import './styles.css';

function Card(props: any) {
    return(
        <div className='card'>
            <div className='post'>
                <img src="https://pbs.twimg.com/profile_images/1522005855939485699/hn_l-crI_400x400.jpg" alt="Foto de Perfil" />
                <strong>Jopeskt</strong>
                <small>{props.time}</small>
            </div>
            <div className='text'>
                <p>{props.post}</p>
            </div>
            <div className='resources'>
                <a className='pi pi-heart'></a>
                <a className='pi pi-comments'></a>
                <a className='pi pi-send'></a>
            </div>               
        </div>
    )
}

export default Card;