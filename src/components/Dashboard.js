import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from 'react-datepicker';
import { TimePicker } from "react-ios-time-picker";
import "react-datepicker/dist/react-datepicker.css"
import Header from "./Header";


function Dashboard() {
  const today = new Date();
  const curTime = today.getHours() + ':' + today.getMinutes();

  // const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState(today);
  const [time, setTime] = useState(curTime)
  const onChange = (timeValue) => { setTime(timeValue); }



  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
  });


  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        date: String(selectedDate),
        description: String(inputs.description),
        location: String(inputs.location),
        time: String(time),

      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/"));
  };



  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >

          <FormLabel>Author</FormLabel>
          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />

          <FormLabel>Time</FormLabel>
          <TimePicker onChange={onChange} value={time} />


          <DatePicker selected={selectedDate} onChange={(date: Date) => setSelectedDate(date)} />



          <FormLabel>Location</FormLabel>
          <TextField
            value={inputs.location}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="location"
          />

          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />



          <Button variant="contained" type="submit">
            Add Book
          </Button>
        </Box>
      </form>

      <a href="/"><Button variant="contained">View Upcoming Events</Button></a>
    </>
  )
}

export default Dashboard
