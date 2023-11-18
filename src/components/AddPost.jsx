import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from './NavBar'

export const AddPost = () => {
    const navigate = useNavigate()
    const [inputField, changeinputField] = useState(
        {

            "userid": "",
            "title": "",
            "message": "",

        }
    )
    const inputHandler = (event) => {
        changeinputField({ ...inputField, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(inputField);
        axios.post("http://127.0.0.1:8000/post/Addpost/", inputField).then((response) => {
            alert(response.data.message);
        })
    };
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>Add Post Details</h1>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">userid</label>
                                <input type="text" name="userid" value={inputField.userid} onChange={inputHandler} className="form-control" />
                            </div>
                         
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">title</label>
                                <input type="text" name="title" value={inputField.title} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">message</label>
                                <textarea name="message" value={inputField.message} onChange={inputHandler} id="" cols="30" rows="10" className="form-control"></textarea>

                            </div>
                           
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-success">submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
