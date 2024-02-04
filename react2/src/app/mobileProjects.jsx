import React, { useEffect, useRef } from 'react'
import { FaAlignJustify, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import styles from './style.module.css'
import { useLocation, Link } from 'react-router-dom'
import { offSideNav, onSideNav } from '../redux/slice'


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
    return (
        <div className='sm:block md:hidden lg:hidden'>
            <div className='w-full h-[120svh] border border-white bg-blacks'>
                <div className='w-full h-[10svh] flex justify-between items-center px-3 top-0 sticky bg-blacks z-[2]'>
                    <h1 className='text-white capitalize font-[700] text-[calc(1px_+_3svw_+_3svh)] font-sans'>raymond</h1>
                    <FaAlignJustify fill='white' className={`transition-all duration-[2s] ${show ? `opacity-1` : `opacity-0`} text-[calc(1px_+_2svw_+_2svh)]`} onClick={function () {
                        dispatch(onSideNav(false))
                    }} />

                    <div className={`transition-all duration-[2s] ${show ? styles.close : styles.open}`}>
                        <div className='w-full h-[20%]'> <FaTimes fill='black' className='text-[calc(1px_+_4svw_+_4svh)] p-2 ' onClick={function () {
                            dispatch(offSideNav(true))
                        }} />
                        </div>
                        <div className='w-full h-[80%] flex flex-col justify-center items-center'>
                            <Link to={'/'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>home</h3>
                                <FaExternalLinkAlt />
                            </Link>
                            <hr className='w-[90%] border-1 border-black' />
                            <Link to={'/project'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>projects</h3>
                                <FaExternalLinkAlt />
                            </Link>
                            <hr className='w-[90%] border-1 border-black' />

                            <Link to={'/about'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>about me</h3>
                                <FaExternalLinkAlt />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[50svh]'>
                    <div className='w-full h-[15svh] '>
                        <div className='w-full h-full px-4 text-center flex justify-center items-end'>
                            <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] font-sans font-[700] capitalize text-white underline underline-offset-4'>projects</h3>
                        </div>
                    </div>
                    <div className='w-full h-[15svh] '>
                        <div className='w-full h-full px-4 text-center flex justify-center items-end'>
                            <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] font-sans font-[700] capitalize text-white'>cooking some :)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileProjects