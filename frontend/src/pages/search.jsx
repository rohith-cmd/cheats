import {React,useState} from "react"
import Logo from "../components/logo"
import Form from "react-bootstrap/Form"
import Navbar from "../components/navbar"
import "../styles/search.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button"
import axios from "axios"
import {Link} from "react-router-dom"
import PlacesAutocomplete from "react-places-autocomplete"
import Spinner from "react-bootstrap/Spinner"

const Search = ()=>{
  const [from,setfrom] = useState(" ");
  const [to,setTo] = useState(" ");

  const handleTO = (value)=>{
    setTo(value)
  }
  const handleFrom = (value)=>{
    setfrom(value)
  }

const postData = ()=>{
    const data = {
      "start":from,
      "end":to
    }
    axios.post("https://asia-south1-electrek-308100.cloudfunctions.net/app/search",data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
}
    return(
      <div>
      <Logo/>
      <Navbar/>
      <h1 className="headed">Where you headed ??</h1>
      <div className="center">
      <PlacesAutocomplete value={from} onChange={setfrom} onSelect={handleFrom}>
        {
          ({getInputProps, suggestions, getSuggestionItemProps, loading })=>{
            return(
              <div>
                <Form>
                <Form.Group>
                <Form.Label>From</Form.Label>
                <Form.Control value={from} size="lg"   {...getInputProps()}/>
                </Form.Group>
                </Form>
                <div>
                  {loading?<Spinner animation="border" variant="success" role="status" />:null}
                  {suggestions.map(suggestion=>{
                    const style = {
                      backgroundColor : suggestion.active ? "#4fde90" : "#fff",
                    }
                    return(
                      <>
                      <div className="auto" {...getSuggestionItemProps(suggestion,{style})}>{suggestion.description}</div>
                      </>
                    )
                  })}
                </div>
              </div>
            )
          }
        }
      </PlacesAutocomplete>
      <PlacesAutocomplete value={to} onChange={setTo} onSelect={handleTO}>
        {
          ({getInputProps, suggestions, getSuggestionItemProps, loading })=>{
            return(
              <div>
                <Form>
                <Form.Group>
                <Form.Label>To</Form.Label>
                <Form.Control value={to} size="lg"{...getInputProps()}/>
                </Form.Group>
                </Form>
                <div className="autocomplete">
                  {loading?<Spinner animation="border" variant="success" role="status"/>:null}
                  {suggestions.map(suggestion=>{
                    console.log(suggestion)
                    const style = {
                      backgroundColor : suggestion.active ? "#4fde90" : "#fff"
                    }
                    return(
                      <div className="auto" {...getSuggestionItemProps(suggestion,{style})}>{suggestion.description}</div>
                    )
                  })}
                </div>
                <Link to={{
                     pathname:"/select"
                    }
                  }>
                  <Button onClick={postData} variant="outline-success" size="lg">Lets go</Button>
                  </Link>
              </div>
            )
          }
        }
      </PlacesAutocomplete>   
      </div>
      </div>
    )
}
export default Search;