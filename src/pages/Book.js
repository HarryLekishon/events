import React from 'react'
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
import Header from '../components/Header';


function Book(props) {


    const { _id, name,author, description, date,location, time } = props.book;
    const history = useNavigate();


    const { user } = useSelector((state) => state.auth)

    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:5000/books/${_id}`)
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/books"));

    };
    return (
        <>
        
            <section className="date">
              <time>
                <button className=" btn btn-sm  btn-outline-warning">Register</button>                
              </time>
            </section>
            <section className=" ticket-card-cont">
              <small><i className="fas fa-user-cog"></i>{author}</small>
              <br/>              
              <h3>{name}</h3>
              <br/>
              <div className="row">
              <div className="even-date col-6 fl-left">              
                <time>
                  <i className="fa fa-calendar-days" > <hr style={{width:"inherit",color: "inherit",fontWeight: "bolder", height: "2px"}}/></i>
                  <span><Moment format='YYYY/MM/DD'>{date}</Moment></span>
                  <br/>
                  <i className="fa fa-clock-four"><hr style={{width:"inherit",color: "inherit",fontWeight: "bolder", height: "2px"}}/></i>
                  <span>{time}</span>
                  <br/>
                </time>
              </div>
              <div className="even-info col-6 fl-right" >                  
                <i className="fa fa-map-location-dot"><hr style={{width:"inherit",color: "inherit",fontWeight: "bolder", height: "2px"}}/></i>
                <span>{location}</span>
                <i className="fa fa-map-location-dot"><hr style={{width:"inherit",color: "inherit",fontWeight: "bolder", height: "2px"}}/></i>
                <span>{description}</span>
              </div>
            </div>
              <a href="#!"><Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} className="fl-left">View</Button></a>
              
              <ul>
                {user ? (
                    <li>
                        <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
                            Delete
                        </Button>
                    </li>
                ) : (
                    <>
                        hello
                    </>
                )}
            </ul>
            </section>

            {/* <h3>{name}</h3>
            <h3>{description}</h3>
            <p><Moment format='YYYY/MM/DD'>{date}</Moment></p>
            br
            <p>{time}</p>
            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
                Update
            </Button>

            <ul>
                {user ? (
                    <li>
                        <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
                            Delete
                        </Button>
                    </li>
                ) : (
                    <>
                        hello
                    </>
                )}
            </ul> */}

        </>
    )
}

export default Book
