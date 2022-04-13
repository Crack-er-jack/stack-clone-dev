import React from 'react'
import Sidebar from './Sidebar';
import Main from './Main';
import './css/index.css';
import axios from 'axios';

function Index () {
  const [questions, setQuestions] = React.useState([])
  React.useEffect(() => {
    async function getQuestion () {
        await axios.get('http://localhost:8080/api/question').then((res) => {
        console.log(res.data)
        console.log(res.data.length)
        setQuestions(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getQuestion();
  }, []) 

  return (
    <div className="stack-index">
        <div className='stack-index-content'>
            <Sidebar />
            <Main questions={questions} />
        </div>
    </div>
  )
}

export default Index; 