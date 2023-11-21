import './App.css';
import { useRef, useState } from 'react';


function App() {
  const inputRef = useRef(null)
  const [searchedStudent, setSearchedStudent] = useState('')

  const handelChange =() => {
    let content = inputRef.current.value

    setSearchedStudent (content)
  }
  const students =[
    { name: "Jhon", grade: '86%' },
    { name: "David", grade: "100%" },
    { name: "Sun", grade: '70% '},
    { name: "Noah", grade: '45%' },
    { name: "Foufa", grade: '80%' },
    { name: "Adam", grade: '30%' },
    { name: "Joury", grade: '100%' },
    
]
const studentJSX = students.map((student, index) => {
  return (
    <div className='rec' key={index}>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h3>{student.name}</h3>
          <h3>{student.grade}</h3>
        </div>
      </div>
    );
  });
  const searchedStudentJSX = students
  .filter(student => student.name === searchedStudent)
  .map((student, index) => (
    <div className='rec' key={index}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3>{student.name}</h3>
        <h3>{student.grade}</h3>
      </div>
    </div>
  ));


  return (
    <div className="App">
      <h2> Grades </h2>
      {searchedStudent && searchedStudentJSX}

       <input type='text' ref={inputRef} />
      
       <button onClick={handelChange} >Click here</button>
       
      </div>
  );
}

export default App;
