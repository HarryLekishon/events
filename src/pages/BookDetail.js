import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './details.css'

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);



  return (
    <div>
      {inputs && (



        <div class="container1 container">
          <div class="row">
            <div class="col-md-4">
              <p class="logo">{inputs.author}<br /><span>{inputs.name}</span></p>
              <br />
              <p>{inputs.location}</p>
              <div class="image"><img src="https://img.icons8.com/color/96/000000/meeting.png" /></div>
              <h6 class="mt-3 text-center">{inputs.description}</h6>
              <p>{inputs.date}</p>
              <p>{inputs.time}</p>
            </div>
            <div class="col-md-8">
              <div class="d-flex pt-3 pr-2">
                <p class="ml-auto mb-0">want to speak with an agent?</p>
              </div>
              <div class="d-flex pr-2">
                <p class="ml-auto"><strong><i class="fas fa-phone-volume"></i>866.645.0592</strong></p>
              </div>
              <form class="information">

                <h4 class="form-heading">Let's get back to your quotes!</h4>
                <p class="form-para">
                  Make sure to use the same information you used during your earlier visit,this is how we keep your information secure.
                </p>
                <div class="form-group"> <input type="email" class="form-control" id="email" required /><label class="form-control-placeholder" for="email">Email address</label> </div>


                <div class="form-group"> <input type="text" class="form-control" id="name" required /><label class="form-control-placeholder" for="name">Last name</label> </div>

                <div class="form-group"> <input type="text" class="form-control" id="number" required /><label class="form-control-placeholder" for="number">Birthdate</label> </div>

                <div class="form-group mt-3"><button type="button" class="btn btn-block btn-primary"><span>Return to my quotes &nbsp;<i class="fas fa-arrow-right"></i></span></button></div>

                <p class="terms mt-4">By clicking "Return to my quotes", you consent to the Zebra storing the information submitted on this page so you can get most up-to-date quotes, no matter what device you are using. You also agree to The Zebra's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
              </form>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default BookDetail;

