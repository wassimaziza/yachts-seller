import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import axios from 'axios'

const App = () => {
  const [yachts, setYachts] = useState([])
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    $.ajax({
      url: 'http://localhost:3000/api/yachts/',
      type: 'GET',
      success: (data) => {
        console.log(data,'here')
        setYachts(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])


  const add=function(body){
    axios.post('http://localhost:3000/api/yachts/addOne',body).then((res)=>{
      console.log(res);
    }).catch((err) => {console.log(err);})
}
 const dele =(id)=>{
  axios.delete(`/api/yachts/${id}`).then((res)=>{console.log(res);}).catch((err)=>{
    console.log(err);
  })
 }
 const up=(id,body) => {
  axios.put(`/api/yachts/${id}`,body).then(()=>{
    setUpdate(!update)
  }).catch((err)=>{console.log(err)})
 }
  return (
    <div>
      <List yachts={yachts} add={add} dele={dele} up={up}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
