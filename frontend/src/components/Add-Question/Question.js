import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import { TagsInput } from "react-tag-input-component";
import './Question.css';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {useSelector} from 'react-redux';
import {selectUser} from '../../features/userSlice'
import axios from 'axios';

function Question() {
    const user = useSelector(selectUser);
    const [loading, setLoading] = useState(false)

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const history = useHistory();

    const handleQuill = (value) => {
        setBody(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title !== "" && body !== "") {
            setLoading(true)
            const bodyJSON = {
                title: title,
                body: body,
                tag: JSON.stringify(tags),
                user: user
            }
            // some shit happened here
            await axios.post('http://localhost:8080/api/question', bodyJSON).then((res) => {
                alert("Question added successfully")
                setLoading(false)
                history.push('/')
            }).catch((err) => {
                console.log(err)
                setLoading(false)
            })
        }
    }
  return (
    <div className='add-question'>
        <div className='add-question-container'>
            <div className='head-title'>
                <h1>Ask a public question</h1>
            </div>
            <div className='question-container'>
                <div className='question-options'>
                    <div className='question-option'>
                        <div className='title'>
                            <h3>Title</h3>
                            <small>Be specific and imagine you're asking a question to another question</small>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="eg: What is MERN Stack?"/>  
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title'>
                            <h3>Body</h3>
                            <small>Include all the information someone would need to answer your question</small>
                            <ReactQuill value={body} onChange={handleQuill} className='react-quill' theme='snow'/>
                        </div>
                    </div>
                    <div className='question-option'>
                        <div className='title'>
                            <h3>Tags</h3>
                            <small>Be specific and imagine you're asking a question to another question</small>
                            <TagsInput value={tags} onChange={setTags} name='tags' placeHolder='press enter to add new tags'/>  
                        </div>
                    </div>
                </div>
            </div>
            <button disabled={loading} type='submit' onClick={handleSubmit} className='button'>{loading? "Adding question..." : "Add your question"}</button>
        </div>
    </div>
  )
}

export default Question