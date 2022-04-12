import React from 'react';
import {Link} from 'react-router-dom';

import { Avatar } from "@material-ui/core";
import './css/AllQuestions.css';

function AllQuestions() {
  return (
    <div className='all-questions'>
        <div className='all-questions-container'>
            <div className='all-questions-left'>
                <div className='all-options'>
                    <div className='all-option'>
                        <p>0</p>
                        <span>votes</span>
                    </div>
                    <div className='all-option'>
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className='all-option'>
                        <p>0</p>
                        <small>views</small>
                    </div>
                </div>
            </div>
            <div className='question-answer'>
                <Link to="/question">Some random question title</Link>
                <div style={{width: "90%"}}>
                    <div>Question body. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </div>
                <div style={{display: "flex"}}>
                    <span className='question-tags'>react</span>
                    <span className='question-tags'>dummy</span>
                    <span className='question-tags'>lolol</span>
                </div>
                <div className='author'>
                    <small>Timestamp</small>
                    <div className='auth-details'>
                        <Avatar/>
                        <p>username</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllQuestions