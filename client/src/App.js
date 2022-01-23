import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [name, setname] = useState();
  const [avater, setavater] = useState();
  const [img, setimg] = useState([]);

  const submitHandel = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avater", avater);

    axios
      .post("http://localhost:4000/singal", formData)
      .then((val) => setimg(val.data.avater))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
    .get('http://localhost:4000/all')
    .then((res) => setimg(res.data))
    .catch((err) => console.log(err));
  
  }, []);
  
 
   
   
  

  
  
 

  return (
    <div className="App">
      <form
        action=""
        onSubmit={submitHandel}
        method="POST"
        enctype="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          onChange={(e) => setname(e.target.value)}
          id=""
        />
        <input
          type="file"
          name="avater"
          id=""
          onChange={(e) => setavater(e.target.files[0])}
          required
          accept="image/png ,image/jpg,image/jpeg , image/svg+xml ,application/pdf "
        />
        <input type="submit" value="upload" />
      </form>
      <div>
     { img.map((val) => {
       return <img style={{width:"200px"}} src={`http://localhost:4000/${val.avater}`} alt="" />;
     })}
      </div>
    </div>
  );
}

export default App;
