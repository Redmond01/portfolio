import React, { useEffect, useRef } from 'react'
import { FaAlignJustify, FaTimes, FaExternalLinkAlt , FaTwitter, FaGithub, FaYoutube} from 'react-icons/fa'
import styles from './style.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { onSideNav, offSideNav } from '../redux/slice'
const MobileProjects = () => {
    const dispatch = useDispatch()
    const show = useSelector(function (state) {
        return state.mobile.slider
    })

    const urlLocation = useLocation()
    const currentLocation = urlLocation.pathname
    const ref = useRef(currentLocation)


    useEffect(function () {
        const storeLoaction = location.pathname
        if (storeLoaction !== ref) {
            dispatch(offSideNav(true))
        }
    }, [])

    return (
        <div className='w-full h-full sm:block md:hidden lg:hidden'>
            <div className='w-full h-[180svh] bg-blacks'>
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
                            <Link to={'/projects'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>projects</h3>
                                <FaExternalLinkAlt />
                            </Link>
                            <hr className='w-[90%] border-1 border-black' />
                            <Link to={'/'} className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>projects</h3>
                                <FaExternalLinkAlt />
                            </Link>
                            <hr className='w-[90%] border-1 border-black' />

                            <div className='w-full h-[32%] flex items-center justify-center gap-2'>
                                <h3 className='font-sans font-[600] capitalize text-center text-[1px_+_3svw_+_3svh]'>blog</h3>
                                <FaExternalLinkAlt />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[15svh] '>
                    <div className='w-full h-full px-4 text-center flex justify-center items-end'>
                        <h3 className='text-[calc(1px_+_2.5svw_+_2.5svh)] font-sans font-[700] capitalize text-white underline underline-offset-4'>about me</h3>
                    </div>
                </div>
                <div className='w-full h-[130svh]'>
                    <div className='w-full h-full px-4 '>
                        <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-sans font-[400] capitalize text-white'>
                            Greetings! I'm Oke Raymond Jesutofunmi, a 24-year-old frontend developer based in Nigeria. Currently, I'm pursuing my education at Gateway Polytechnic Saapade, where I am honing my skills and passion for technology.

                            As a dedicated MERN stack enthusiast, my journey in the world of web development has been both exciting and fulfilling. I find joy in crafting seamless and visually appealing user experiences. Whether it's designing intuitive interfaces or diving into the intricacies of coding, I thrive on the challenges that come with being a frontend developer.

                            My educational pursuits at Gateway Polytechnic Saapade have provided me with a solid foundation, while my professional journey has given me hands-on experience in the dynamic field of web development. I am committed to continuous learning and staying at the forefront of industry trends to deliver innovative solutions.

                            Beyond the lines of code, I am proudly Nigerian, embracing the rich diversity and vibrant culture that defines my heritage. My goal is not just to write code but to contribute meaningfully to the ever-evolving landscape of technology, making a positive impact with every project I undertake.

                            Here's to the exciting journey ahead as I continue to blend creativity and technology in the realm of frontend development.</h3>
                    </div>
                </div>
                
                <div className='w-full h-[20svh]'>
                    <div className='w-full h-[40%] text-center px-4'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white'>contacts</h3>
                    </div>
                    <div className='w-full h-[60%] flex justify-evenly items-center'>
                        <Link to={'https://twitter.com/raymonddev_'} target='_blank'><FaTwitter className='text-[calc(1px_+_4svw_+_4svh)] border border-white rounded-lg p-1 fill-[#1DA1F2]' /></Link>
                        <Link to={'https://github.com/Redmond01'} target='_blank'><FaGithub className='text-[calc(1px_+_4svw_+_4svh)] border border-white rounded-lg p-1 fill-whites' /></Link>
                        <Link to={'https://youtube.com/@okeraymond?si=TT2vu6tv-_QMyHje'} target='_blank'><FaYoutube className='text-[calc(1px_+_4svw_+_4svh)] border border-white rounded-lg p-1 fill-[red]' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileProjects