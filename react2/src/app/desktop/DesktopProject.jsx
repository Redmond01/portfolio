import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-loading';
import { projects } from './Desktop';

const desktopContact = () => {
  const [loadingState, setLoadingState] = useState(true)
  useEffect(function () {
    const timer = setTimeout(function () {
      setLoadingState(false)
    }, 1000)

    return function () {
      clearTimeout(timer)
    }
  }, [])


  return (
    <div className='sm:hidden md:hidden lg:block w-full h-[150svh] bg-blacks'>
      <div className={`${loadingState ? "block" : "hidden"} w-full h-[100svh] flex justify-center items-center`}>
        <Wave width={'5rem'} height={'5rem'} />
      </div>
      <div className={`${loadingState ? "hidden" : "block"}`}>
        <div className='w-full h-[10svh] flex '>
          <div className='w-[50%] h-full flex items-center justify-start px-4'>
            <div className='w-[10%] h-full'></div>
            <h3 className='text-whites font-[600] w-[70%] font-sans capitalize text-[calc(1px_+_2svw_+_2svh)]'> raymond</h3>
          </div>
          <div className='w-[50%] h-full flex justify-evenly items-center'>
            <div className='w-[30%] h-full'></div>
            <Link to={'/'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> about me</h3></Link>
            <Link to={'/project'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> projects</h3></Link>
            {/* <Link to={'#links'}> <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.8svw_+_.8svh)] cursor-pointer'> contact me</h3></Link> */}
          </div>
        </div>

        <div className='w-full h-[90svh] '>
          <div className='w-full h-[5rem] flex justify-center items-center'>
            <div className='w-[40%] h-full flex justify-center items-center'>
              <h3 className='text-[3rem] text-white uppercase font-poppins'>MY PROJECTS</h3>
            </div>
          </div>
          <div className='w-full h-[78svh] p-3 flex flex-col flex-wrap gap-[2rem]'>
            {projects.map(function (detials) {
              return (
                <Link to={detials.link} target='_blanck' key={detials.id}><div className='w-[25rem] h-[20rem] border border-white cursor-pointer rounded-[1.5rem]' id={detials.id} key={detials.id}>
                  <div className='w-full h-[70% flex justify-center items-center'>
                    <img src={detials.img} alt="img" className='w-[90%] h-auto' />
                  </div>
                  <div className='w-full h-[30% flex flex-col justify-center p-4'>
                    <h3 className='text-[.8rem] capitalize font-poppins font-[500] text-whites '>name: {detials.name}</h3>
                    <h3 className='text-[.8rem] capitalize font-poppins font-[500] text-whites '>device:{detials.responsive}</h3>
                    <h3 className='text-[.8rem] capitalize font-poppins font-[500] text-whites '>tools:{detials.tools}</h3>
                    <h3 className='text-[.8rem] capitalize font-poppins font-[500] text-whites '>link:{detials.link}</h3>
                    <h3 className='text-[.8rem] capitalize font-poppins font-[500] text-whites '>type:{detials.type}</h3>
                  </div>
                </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default desktopContact