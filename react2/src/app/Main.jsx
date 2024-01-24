import React, { useState } from 'react'
import axios from 'axios'


function Main() {
    const [data, setData]= useState({
        username:'',
        password:'',
        email:''
    })
    const handlechange=(e) => {
      setData({...data, [e.target.name]:e.target.value})
    }



    const handleSubmit= async (e) => {
        console.log(data);
        try {
            const url= ('http://localhost:5500/api')
            await axios.post(url, data)

            setData({
                username:'',
                password:'',
                email:''
            })
            console.log('data sent successfully');
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <div>
        <div className='w-full h-[100vh] bg-yellow-700 flex justify-center items-center'>
            <div className='w-[30rem] h-[30rem] bg-green-600'>
                <form className='flex flex-col space-y-12'onSubmit={handleSubmit} >
                    <label htmlFor="username">username:
                        <input type="text" name='username' value={data.username} id="" onChange={handlechange}/>
                    </label>
                    <label htmlFor="password">username:
                        <input type="text" name='password' value={data.password} id=""  onChange={handlechange}/>
                    </label>
                    <label htmlFor="email">username:
                        <input type="text" name='email' value={data.email} id=""  onChange={handlechange}/>
                    </label>
                    <input type="submit" value="submit" className='border border-white'onSubmit={handleSubmit} />
                </form>
            </div>
        </div>
        <div className="dd">hello</div>
    </div>
  )
}

export default Main