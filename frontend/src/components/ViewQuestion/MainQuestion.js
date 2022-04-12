import { Avatar } from '@material-ui/core'
import { Bookmark, History } from '@mui/icons-material'
import { borderRadius } from '@mui/system';
import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Link} from 'react-router-dom';
import './index.css';

function MainQuestion() {
  const [show, setShow] = useState(false);
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-top'>
          <h2>I am a Question Title</h2>
          <Link to="/add-question"><button className=''>Ask Question</button></Link>
        </div>
        <div className='main-desc'>
          <div className='info'>
            <p>Timestamp</p>
            <p>Active<span>Today</span></p>
            <p>Viewed<span>43times</span></p>
          </div>
        </div>
        <div className='all-questions'>
          <div className='all-questions-container'>
            <div className='all-questions-left'>
              <div className='all-options'>
                <p className="arrow">▲</p>
                <p className="arrow">0</p>
                <p className="arrow">▼</p>
                <Bookmark/>
                <History/>
              </div>
            </div>
            <div className='question-answer'>
              <p>Question Body</p>
              <div className='author'>
                <small>asked "Timestamp"</small>
                <div className='auth-details'>
                  <Avatar/>
                  <p>question author</p>
                </div>
              </div>
              <div className='comments'>
                <div className='comment'>
                  <p>Wow such a nice q - <span>username</span><small>Timestamp</small></p>
                </div>
                <p onClick={() => {setShow(!show)}}>Add a comment</p>
                {
                  show && <div className='title'>
                    <textarea type ="text" placeholder="Add your comment..." rows={5} style={{
                      margin: "5px 0px",
                      padding: "10px",
                      border: "1px solid rgba(0, 0, 0, 0.2)",
                      borderRadius: "3px",
                      outline: 'none'
                    }}></textarea>
                    <button style={{
                      maxWidth: "fit-content"
                    }}>Add comment</button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className='all-questions' style={{
          flexDirection: "column"
        }}>
          <p style={{
            marginBottom: "20px",
            fontSize: "1.3rem",
            fontWeight: "300"
          }}>No of answers</p>
          <div className='all-questions-container'>
            <div className='all-questions-left'>
              <div className='all-options'>
                <p className="arrow">▲</p>
                <p className="arrow">0</p>
                <p className="arrow">▼</p>
                <Bookmark/>
                <History/>
              </div>
            </div>
            <div className='question-answer'>
              <p>Answer Body</p>
              <div className='author'>
                <small>asked "Timestamp"</small>
                <div className='auth-details'>
                  <Avatar/>
                  <p>question author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-answer'>
        <h3 style={{
          fontSize: "22px",
          margin: "10px 0",
          fontWeight: "400"
        }}>Your Answer</h3>
        <ReactQuill className='react-quill' theme='snow' style={{height: "200px"}}/>
      </div>
      <button style={{maxWidth: "fit-content", marginTop: "80px"}}>Post Your Answer</button>
    </div>
    
  )
}

export default MainQuestion