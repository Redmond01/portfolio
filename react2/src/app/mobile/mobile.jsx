import React, { useEffect, useRef, useState } from 'react';
import profile from '../../asset/fff.png';
import WebSvgs from '../../asset/svg/vector.svg'
import WebSvg from '../../asset/svg/vectors.svg'
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from '.././style.module.css';
import { FaAlignJustify, FaTimes, FaExternalLinkAlt, FaGithub, FaYoutube, FaTwitter, FaUser } from 'react-icons/fa'
import { onSideNav, offSideNav } from '../../redux/slice';




const mobile = () => {
    const [Frame1, setFrame1] = useState(true);
    const [Frame2, setFrame2] = useState(true);
    const [Frame3, setFrame3] = useState(true);
    const dispatch = useDispatch()
    const slider = useSelector(function (state) {
        return state.mobile.slider
    })

    class WindowEffects {
        closeSliderMethod() {
            const body = document.body
            body.addEventListener('click', function () {
                if (slider === false) {
                    dispatch(offSideNav(true))
                    console.log('clicked')
                }
            })

        };
    }


    const urlLocation = useLocation()
    const currentLocation = urlLocation.pathname
    const ref = useRef(currentLocation)
    useEffect(function () {
        const callingWindowEffect = new WindowEffects()
        callingWindowEffect.closeSliderMethod()

        const storeLoaction = location.pathname;
        if (storeLoaction !== ref) {
            dispatch(offSideNav(true))
        };

        window.addEventListener('scroll', function () {
            if (window.scrollY < 150) {
                setFrame1(false)
            }
            if (window.scrollY < 600) {
                setFrame2(false)
            }
            if (window.scrollY > 850) {
                setFrame3(false)
            }
        })
    }, []);



    return (
        <div className='w-full h-full sm:block md:hidden lg:hidden'>
            <div className={`w-full h-[280svh] bg-[#171717] relative transition-all duration-[.5s]  ${slider ? `opacity-1` : `opacity-[.9]`}`}>
                <div className='w-full h-[10svh] flex justify-between items-center px-3 top-0 sticky bg-lightblack z-[2]'>
                    <h1 className='text-white capitalize font-[700] text-[calc(1px_+_3svw_+_3svh)] font-sans'>raymond</h1>
                    <FaAlignJustify fill='white' className={`transition-all duration-[.5s] ${slider ? `opacity-1` : `opacity-0`} text-[calc(1px_+_2svw_+_2svh)]`} onClick={function () {
                        dispatch(onSideNav(false))
                    }} />

                    <div className={`transition-all duration-[.5s] ${slider ? styles.close : styles.open}`}>
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
                <div className='w-full h-[7svh]'></div>
                <div className='w-full h-[35svh] flex'>
                    <div className='w-[50%] h-full'>
                        <div className='w-full h-[10%]'></div>
                        <div className='w-full h-[60%] px-3'>
                            <h3 className='text-[calc(1px_+_2.2svw_+_2.2svh)] font-sans font-[700] capitalize text-white'>
                                hi, i <span className='lowercase'>am</span> <br /> <span className='text-[calc(1px_+_1.7svw_+_1.7svh)] tracking-[1px] '>Oke Raymond </span>
                            </h3>
                            <h3 className='text-[calc(1px_+_1.2svw_+_1.2svh)] font-sans font-[300] capitalize text-[#828282]'>
                                frontend developer
                            </h3>
                        </div>
                        <div className='w-full h-[20%] flex gap-3 justify-center items-start px-2'>
                            <div className=' w-[calc(1px_+_27svw)] h-[calc(1px_+_3.5svh)]  bg-[#27AE60] rounded-full flex justify-center items-center'>
                                <h3 className='text-[calc(1px_+_.9svw_+_.8svh)] capitalize font-[500] font-sans text-white'>donwload CV</h3>
                            </div>
                            <div className=' w-[calc(1px_+_25svw)] h-[calc(1px_+_3.5svh)] border border-white  rounded-full flex justify-center items-center'>
                                <h3 className='text-[calc(1px_+_.9svw_+_.9svh)] capitalize font-[500] font-sans text-white'>projects</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] h-full py-10 flex justify-center items-start'>
                        <div className='w-[80%] h-[60%] flex justify-center items-center'>
                            <img src={profile} alt="img" className='w-[90%] h-auto' />
                        </div>
                    </div>
                </div>
                <div className='w-fulll h-[5svh] flex justify-center items-center'>
                    <hr className='border-[px] border-white rounded-full w-[85%]' />
                </div>

                <div className='w-full h-[40svh] flex flex-col relative'>
                    <div className='w-full h-[10svh] text-center'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white'>about me</h3>
                    </div>
                    <div className={`w-full h-[30svh] flex justify-center text-center ${styles.firstMobileElementMovement}`}>
                        <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-sans font-[400] text-whites p-1 leading-[170%]'>
                            I am Oke Raymond, a frontend developer from
                            Nigeria. I create beautiful and intuitive user interfaces
                            that are both functional and user-friendly. I have experience
                            working with HTML, CSS, JavaScript, and React.</h3>
                    </div>
                </div>
                <div className='w-full h-[95svh] flex flex-col justify-center items-center relative'>
                    <div className='w-[80%] h-[90%] relative '>
                        <div className={Frame1 ? "hidden" : `w-full h-[24%] flex items-center absolute top-0 ${styles.secondMobileElementF1}`}>
                            <div className='w-[calc(1px_+_30%)] h-[calc(1px_+_60%)] bg-[#212121] rounded-full flex justify-center items-center'>
                                <Link><FaUser className='fill-green text-[calc(1px_+_1.7svw_+_1.7svh)]' /></Link>
                            </div>
                            <div className='w-[70%] h-[60%] flex justify-center items-center'>
                                <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-sans font-[700] capitalize text-whites text-center'>
                                    my name
                                    <br />
                                    <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[500] capitalize text-whites'>
                                        oke raymond jesutofunmi
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className={Frame1 ? "hidden" : `w-full h-[24%] flex items-center absolute top-[25%] ${styles.secondMobileElementF1}`}>
                            <div className='w-[calc(1px_+_30%)] h-[calc(1px_+_60%)] bg-[#212121] rounded-full flex justify-center items-center'>
                                <Link><FaUser className='fill-green text-[calc(1px_+_1.7svw_+_1.7svh)]' /></Link>
                            </div>
                            <div className='w-[70%] h-[60%] flex justify-center items-center'>
                                <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-sans font-[700] capitalize text-whites text-center'>
                                    email
                                    <br />
                                    <span className='text-[calc(1px_+_.7svw_+_.7svh)] font-sans font-[500] capitalize text-whites'>
                                        okeraymondjesutofunmi099@gmail.com
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className={Frame2 ? "hidden" : `w-full h-[24%] flex items-center absolute top-[50%] ${styles.secondMobileElementF2}`}>
                            <div className='w-[calc(1px_+_30%)] h-[calc(1px_+_60%)] bg-[#212121] rounded-full flex justify-center items-center'>
                                <Link><FaUser className='fill-green text-[calc(1px_+_1.7svw_+_1.7svh)]' /></Link>
                            </div>
                            <div className='w-[70%] h-[60%] flex justify-center items-center'>
                                <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-sans font-[700] capitalize text-whites text-center'>
                                    twitter
                                    <br />
                                    <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[500] capitalize text-whites'>
                                        @raymonddev_
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className={`w-full h-[24%] flex items-center absolute top-[75%] ${styles.secondMobileElementF2}`}>
                            <div className='w-[calc(1px_+_30%)] h-[calc(1px_+_60%)] bg-[#212121] rounded-full flex justify-center items-center'>
                                <Link><FaUser className='fill-green text-[calc(1px_+_1.7svw_+_1.7svh)]' /></Link>
                            </div>
                            <div className='w-[70%] h-[60%] flex justify-center items-center'>
                                <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] font-sans font-[700] capitalize text-whites text-center'>
                                    linkedin
                                    <br />
                                    <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[500] capitalize text-whites'>
                                        oke raymond jesutofunmi
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[40svh] flex flex-col relative'>
                    <div className='w-full h-[10svh] text-start px-4'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white'>what i do</h3>
                    </div>
                    <div className={Frame3 ? "hidden" : `w-full h-[30svh] flex justify-center items-start gap-6 absolute top-[25%] ${styles.secondMobileElementF3}`}>
                        <div className='w-[40svw] h-[20svh] bg-[#212121] flex flex-col justify-center items-start'>
                            <img src={WebSvgs} alt="logo" className='px-3 w-[40%] h-auto' />
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] px-3 font-[500] font-sans text-[#535353] capitalize'>web app development</h3>
                        </div>
                        <div className='w-[40svw] h-[20svh] bg-[#212121] flex flex-col justify-center items-start'>
                            <img src={WebSvg} alt="logo" className='px-3 w-[40%] h-auto' />
                            <h3 className='text-[calc(1px_+_1.5svw_+_1.5svh)] px-2 font-[500] font-sans text-[#535353] capitalize'>software development</h3>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[25svh]'>
                    <div className='w-full h-1/3 text-start px-4'>
                        <h3 className='text-[calc(1px_+_3svw_+_3svh)] font-sans font-[700] capitalize text-white'>my skills</h3>
                    </div>
                    <div className='w-full h-2/3 bg-blacks flex justify-evenly items-center py-4'>
                        <h3 className='text-[calc(1px_+1.8svw_+_1.8svh)] font-sans font-[700] capitalize text-[#535353] leading-[70%]'>
                            82%
                            <br />
                            <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[700] capitalize text-green'>JavaScript</span>
                        </h3>
                        <h3 className='text-[calc(1px_+1.8svw_+_1.8svh)] font-sans font-[700] capitalize text-[#535353] leading-[70%]'>
                            78%
                            <br />
                            <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[700] capitalize text-green'>ReactJS</span>
                        </h3>
                        <h3 className='text-[calc(1px_+1.8svw_+_1.8svh)] font-sans font-[700] capitalize text-[#535353] leading-[70%]'>
                            73%
                            <br />
                            <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[700] capitalize text-green'>ExpressJS</span>
                        </h3>
                        <h3 className='text-[calc(1px_+1.8svw_+_1.8svh)] font-sans font-[700] capitalize text-[#535353] leading-[70%]'>
                            70%
                            <br />
                            <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[700] capitalize text-green'>NodeJS</span>
                        </h3>
                        <h3 className='text-[calc(1px_+1.8svw_+_1.8svh)] font-sans font-[700] capitalize text-[#535353] leading-[70%]'>
                            70%
                            <br />
                            <span className='text-[calc(1px_+_1svw_+_1svh)] font-sans font-[700] capitalize text-green'>NextJS</span>
                        </h3>
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

export default mobile