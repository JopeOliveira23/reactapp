import React, { useState } from 'react';
import Card from '../../components/Card';
import './styles.css';

function Home() {

  //! useState sempre precisa ser tipado com  " <StateProperties[]> "  no TypeScript

  const [studentName, setStudentName] = useState<string>('');
  const [student, setStudent] = useState<object[]>([]);

  function handleAddsStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudent(prevState => [...prevState, newStudent]);
  }

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      <input type="text" 
             placeholder="Digite seu nome..."
             onChange={e => setStudentName(e.target.value)}/>
      <button type="button" onClick={handleAddsStudent}>Adicionar</button>

      {
      student.map((student: any) => (
        <Card 
          key= {student.time}
          name= {student.name} 
          time={student.time} 
        />
      ))
      }
      
    </div>
  )
}

export default Home;