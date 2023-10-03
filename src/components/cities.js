import {useEffect, useState} from 'react'
import {fetchWeather} from "../redux/weatherSlice"
import { useDispatch, useSelector } from 'react-redux'
import {Container} from "react-bootstrap"

function Cities() {
    const status=useSelector(state=>state.weather.status)
    const [title, setTitle]=useState("")
    const [city, setCity]=useState("ankara")

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchWeather(city))
    },[dispatch, city])
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        setCity(title)
        setTitle("")
    }

  return (
    <Container>
        <form onSubmit={handleSubmit} className="form text-center pt-4">
            <input 
            type="text"
            value={title}   
            placeholder="Şehir Ara..." 
            onChange={(e)=>setTitle(e.target.value)}
            />
        </form>
        {
            status==="successed" ? (
                <h3 className=' text-center my-5 text-uppercase text-black'>{city}</h3>
            ): ""
        }
    </Container>
  )
}

export default Cities
