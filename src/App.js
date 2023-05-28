//import logo from './logo.svg';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { Routes,Route ,useNavigate} from 'react-router-dom';
import './App.css';
import Box from "@mui/material/Box"
 import AppBar from '@mui/material/AppBar/AppBar';
 import Toolbar from '@mui/material/Toolbar/Toolbar';
 import Button from '@mui/material/Button/Button';
// import { Routes, Route, Link, Router, useNavigate, useParams } from "react-router-dom";
// import {Form,Button,Checkbox} from "semantic-ui-react"
// import AppBar from '@mui/material/AppBar';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
       <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/create")} >Create</Button>
            <Button color="inherit" onClick={() => navigate("/read")}>Read</Button>
            <Button color="inherit"  onClick={() => navigate("/update")} >Update</Button>
            
       </Toolbar>
     </AppBar>
     </Box>
     <h1>CRUD OPERATION</h1>
      {/* <h1>Welcome to the Home Page😍💙😇❤️⭐✌</h1> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>
      {/* </BrowserRouter> */}
      
    </div>
  );
}
function Profile() {

  return (
    <div>
      <h1>Welcome to the Home Page😍💙😇❤️⭐✌</h1>
      {/* <h1>Welcome to the Home Page⭐😊❤️🙋</h1> */}
    </div>
  )
}


export default App;
