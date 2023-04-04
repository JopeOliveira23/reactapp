import {useState} from 'react';
import Card from '../../components/Card';
import './styles.css';

function Home() {

  const [studentName, setStudentName] = useState('');
  const [student, setStudent] = useState([]);

  function handleAddsStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudent((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" 
             placeholder="Digite seu nome..."
             onChange={e => setStudentName(e.target.value)}/>
      <button type="button" onClick={handleAddsStudent}>Adicionar</button>

      {
      student.map((student) => < Card name= {student.name} time={student.time} />)
      }
      
    </div>
  )
}

export default Home;