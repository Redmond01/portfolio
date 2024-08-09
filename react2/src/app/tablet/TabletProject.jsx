import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-loading';
import { projects } from '../desktop/Desktop';

const TabletProject = () => {
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
    <div className='w-full h-[100svh] bg-blacks sm:hidden md:block lg:hidden'>
      <div className={`${loadingState ? "block" : "hidden"} w-full h-[100svh] flex justify-center items-center`}>
        <Wave width={'5rem'} height={'5rem'} />
      </div>

      <div className={`${loadingState ? "hidden" : "block"}`}>
        <div className='w-full h-[10svh] flex '>
          <div className='w-[50%] h-full flex items-center justify-start px-4'>
            <div className='w-[10%] h-full'></div>
            <h3 className='text-whites font-[600] w-[70%] font-sans capitalize text-[calc(1px_+_1.5svw_+_1.5svh)]'> raymond</h3>
          </div>
          <div className='w-[50%] h-full flex justify-evenly items-center'>
            <div className='w-[30%] h-full'></div>
            <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] cursor-pointer'><Link to={'/'}> about me</Link></h3>
            <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] cursor-pointer'><Link to={'/projects'}> projects</Link></h3>
            {/* <h3 className='text-whites font-[600] font-sans capitalize text-[calc(1px_+_.6svw_+_.6svh)] cursor-pointer'> contact me</h3> */}
          </div>
        </div>

        <div className='w-full h-[90svh] '>
          <div className='w-full h-[5rem] flex justify-center items-center'>
            <div className='w-[40%] h-full flex justify-center items-center'>
              <h3 className='text-[2rem] text-white uppercase font-poppins'>MY PROJECTS</h3>
            </div>
          </div>
          <div className='w-full h-[70svh] p-5 flex justify-start items-start flex-wrap flex-col gap-[2rem]'>
            {projects.map(function (detials) {
              return (
                <Link to={detials.link} target='_blanck' key={detials.id}><div className='w-[20rem] h-[18rem] border border-white cursor-pointer rounded-[1.5rem]' id={detials.id} key={detials.id}>
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

export default TabletProject