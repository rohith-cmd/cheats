import {React,useState} from "react"
import Logo from "../components/logo"
import Form from "react-bootstrap/Form"
import Navbar from "../components/navbar"
import "../styles/search.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button"
import axios from "axios"
import {Link} from "react-router-dom"

const Search = ()=>{
  const [from,setfrom] = useState(" ");
  const [to,setTo] = useState(" ");

  const handleTO = (event)=>{
    setfrom(event.target.value)
  }
  const handleFrom = (event)=>{
    setTo(event.target.value)
  }

const postData = ()=>{
    const data = {
      "start":from,
      "end":to
    }
    axios.post("http://localhost:5000/search",data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
}

    return(
      <div>
      <Logo/>
      <Navbar/>
      <h1 className="headed">Where you headed ??</h1>
        <div className="center">               
        <Form.Group>
        <Form.Control  onChange={handleFrom} size="lg" type="text" placeholder="From" />
        <br />
        <br />
        <Form.Control  onChange={handleTO} size="lg" type="text" placeholder="To"/>
        <br />
        </Form.Group>
        <Link to={{
          pathname:"/select"
        }
        }>
        <Button onClick={postData} variant="outline-success" size="lg">Lets go</Button>
        </Link>
      </div>
      </div>
    )
}
export default Search;