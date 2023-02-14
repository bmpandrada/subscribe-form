import React, { useState } from 'react'
import image from '../assets/IMG_1151-1.jpg'

const Home = () => {
  const [data, setData] = useState({fname:'', email:''})
  const [newData, setNewData] = useState([])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.fname && data.email){
      const person = {...data, id:new Date().getTime().toString()}
      setNewData([...newData,person])
      setData({fname:'', email:''})
    }
  }
  return (
    <div className='container-email'>
        <div className='email-card'>
          <div className="email-container-flex">
            <img className='email-image' src={image} alt="" />
            <div className="email-content">
            <div className="email-content-text">
              <h1>Cacao Delilio</h1>
              <p className="email-content-detail">
                Eat better and relax better. Sign up for the Cacao Delilio newsletter.
              </p>
              <form onSubmit={handleSubmit}
              className="email-form-container">
                <input value={data.email} onChange={handleChange} name='email'
                className='email-input' type="email" placeholder='Enter your email address' />
                <input value={data.fname} onChange={handleChange} name='fname'
                 className='email-input' type="fname" placeholder='Enter your name' />
                <button className='email-button'>Submit</button>
              </form>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;