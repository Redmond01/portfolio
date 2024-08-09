import React, { useEffect, useRef, useState } from 'react'
import { FaAlignJustify, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../style.module.css'
import { useLocation, Link } from 'react-router-dom'
import { offSideNav, onSideNav } from '../../redux/slice';
import Wave from 'react-loading';
import { projects } from '../desktop/Desktop'


const MobileProjects = () => {
    const dispatch = useDispatch()
    const show = useSelector(function (state) {
        return state.mobile.slider
    })

    const location = useLocation()
    const currentLocation = location.pathname
    const locationReference = useRef(currentLocation)
    useEffect(function () {
        const displayLoaction = location.pathname
        if (displayLoaction !== locationReference) {
            dispatch(offSideNav(true))
        }
    }, [])



    const [loadingState, setLoadingState] = useState(true)

    useEffect(function () {
        const loadingStateTimer = setTimeout(function () {
            setLoadingState(false)
        }, 1000)

        return function () {
            clearTimeout(loadingStateTimer)
        }
    }, [])
    return (
        <div className='sm:block md:hidden lg:hidden'>
            <div className={loadingState ? `w-full h-[100svh] bg-blacks flex justify-center items-center` : "hidden"}>
                <Wave width={'5rem'} height={'5rem'} />
            </div>
            <div className='w-full h-[150svh] bg-blacks'>
                <div className='w-full h-[10svh] flex justify-between items-center px-3 top-0 sticky bg-blacks z-[2]'>
                    <h1 className='text-white capitalize font-[700] text-[calc(1px_+_3svw_+_3svh)] font-sans'>raymond</h1>
                    <FaAlignJustify fill='white' className={`transition-all duration-[2s] ${show ? `opacity-1` : `opacity-0`} text-[calc(1px_+_2svw_+_2svh)]`} onClick={function () {
                        dispatch(onSideNav(false))
                    }} />

                    <div className={`transition-all duration-[2s] ${show ? styles.close : styles.open}`}>
                        <div className='w-full h-[20%] p-3'> <FaTimes fill='black' className='text-[calc(1px_+_4svw_+_4svh)] p-1 ' onClick={function () {
                            dispatch(offSideNav(true))
                        }} />
                        </div>
                        <div className='w-full h-[80%] flex flex-col justify-center items-center'>
                            <Link to={'/'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1.5rem]'>home</h3>
                                <FaExternalLinkAlt />
                            </Link>
                            <hr className='w-[90%] border-1 border-black' />
                            <Link to={'/project'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1.5rem]'>projects</h3>
                                <FaExternalLinkAlt />
                            </Link>
                            <hr className='w-[90%] border-1 border-black' />
                            <Link to={'https://www.dropbox.com/scl/fi/ynzcm7dpz9ne0qlzsrizg/OKE-RAYMOND-JESUTOFUNMI-CV.pdf?rlkey=hjvlzwp45l69ydf865tvigfca&st=y6rxkuxp&dl=0'} target='_blanck' className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1.5rem]'>download CV</h3>
                                <FaExternalLinkAlt />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[50svh]'>
                    <div className='w-full h-[15svh] '>
                        <div className='w-full h-full px-4 text-center flex justify-center items-end'>
                            <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] font-sans font-[700] capitalize text-white'>projects</h3>
                        </div>
                    </div>
                    {/* <div className='w-full h-[15svh] '>
                        <div className='w-full h-full px-4 text-center flex justify-center items-end'>
                            <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] font-sans font-[700] capitalize text-white'>cooking some :)</h3>
                        </div>
                    </div> */}
                    <div className='w-full h-[70svh] p-5 flex flex-col gap-[3rem] items-center'>
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

export default MobileProjects