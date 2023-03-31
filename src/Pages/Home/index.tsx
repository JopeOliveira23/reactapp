import Card from '../../components/Card';
import './styles.css';

function Home() {

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite seu nome..."/>
      <button type="button">Adicionar</button>

      < Card name="Caio"    time="11:40:00" />
      < Card name="Rafael"  time="15:53:00" />
      < Card name="João"    time="16:20:00" />
      < Card name="Igor"    time="22:37:00" />

    </div>
  )
}

export default Home;