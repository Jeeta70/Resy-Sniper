import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import backgroundImage from "@/assets/homepage/Hero.png"
import logo from '@/assets/homepage/Logo.png'
import Hero from '@/assets/homepage/Hero_img.png'
import Speed from '@/assets/homepage/Speed.png'
import Automatic from '@/assets/homepage/Automatic.png'
import Secure from '@/assets/homepage/Secure.png'
import Personalized from '@/assets/homepage/Personalised.png'
import Image1 from '@/assets/homepage/Image1.png'
import Image2 from '@/assets/homepage/Image2.png'
import Image3 from '@/assets/homepage/Image3.png'
import Banner from '@/assets/homepage/Banner.png'
import Card from '@/assets/homepage/Card.png'
// import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import { PlusIcon } from "@heroicons/react/24/outline";
// import { MinusIcon } from "@heroicons/react/24/outline";
import Blog from '@/assets/homepage/blog_img.png'
import Rectangle from '@/assets/homepage/Rectangle.png'
import Image from '@/assets/homepage/Img.png'
import Instagram from '@/assets/homepage/Instagram.png'
import Twitter from '@/assets/homepage/TwitterLogo.png'
import Footer from '@/assets/homepage/Footer.png'
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import { XMarkIcon } from "@heroicons/react/24/outline";











const NewPage = () => {
  const navigate =   useNavigate()
    const [activeIndex, setActiveIndex] = useState(0);
    const [show] = useState(false)
    const data = [
        {
            image: Speed,
            heading: 'Speed',
            text: 'Lightning-fast reservations for last-minute dining plans'
        },
        {
            image: Automatic,
            heading: 'Automatic',
            text: 'Automatic reservation monitoring during peak dining hours'
        },
        {
            image: Secure,
            heading: 'Secure',
            text: 'Secure and compliant platform for worry-free dining'
        },
        {
            image: Personalized,
            heading: 'Personalized',
            text: 'Customizable job creation for personalized booking preferences'
        },
    ]


    const cardData = [
        {
            heading: 'Connect Account',
            text: 'Connect your Resy and or OpenTable account to the website. This integration allows the website to manage reservations on behalf of the user.',
            image: Image1
        },
        {
            heading: 'Specify details',
            text: 'You specify details such as the desired restaurant, date and time range, number of guests, specific preferences (like seating options), etc.',
            image: Image2
        },
        {
            heading: 'Secure Reservations',
            text: 'When a matching reservation becomes available, the we book it on behalf your behalf, so you can see the reservation on your own account',
            image: Image3
        },
    ]

    const priceTiles = [
        {
            style: 'REGULAR',
            price: '$25',
            details: ["5 active booking requests", "Single date, single venue booking"],
            button: '#12171A'
        },
        {
            style: 'PRO',
            price: '$50',
            details: ["25 active booking requests", "Priority booking", "Multiple dates and venues booking", "Same date booking", "Select sitting type", "Reservations of premium restaurants"],
            button: '#EA3A4B'
        },
    ]

    const faq = [
        {
            heading: 'How does Resy Sniper work?',
            text: 'Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.'
        },
        {
            heading: 'Is Resy Sniper secure?',
            text: 'Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.'
        },
        {
            heading: 'Can I use Resy Sniper for any restaurant?',
            text: 'Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.'
        },
        {
            heading: 'How does Resy Sniper notify me of a successful booking?',
            text: 'Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.'
        },
    ]
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setActiveIndex((prevIndex) => (prevIndex + 1) % faq.length);
    //     }, 5000);

    //     return () => clearInterval(intervalId);
    // }, [faq.length]);

    const [scrolling, setScrolling] = useState(false);

    const blogData = [
        {
            image: Rectangle,
            title: 'Reservation Guide',
            date: 'October 22, 2023',
            text: 'Unlock the Secret to Dining at Carbone: Your Exclusive Guide',
            color: '#F69046'
        },
        {
            image: Rectangle,
            title: 'Food & Drink Guides',
            date: 'October 22, 2023',
            text: 'Navigating New York Elite Dining Scene: A Guide to Snagging the Hardest Reservations',
            color: 'yellow'
        },
        {
            image: Rectangle,
            title: 'User Guide',
            date: 'October 22, 2023',
            text: 'Mastering the Art of Reservation: Tips to Increase Your Odds with Resy Sniper',
            color: 'green'
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: scrolling ? 'white' : 'transparent',
        border: scrolling ? '2px solid black' : 'transparent',
    };
    return (
        <>
            <div>
                <div>

                    {/* *****************************First Component or Banner************************************** */}

                    <div
                        className="bg-cover"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    >
                        <div className={`sm:flex hidden justify-between py-5 sm:px-44 px-4 items-center fixed w-[100%] bg-[${navbarStyle.backgroundColor}] border-[${navbarStyle.border}]`}>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className='sm:flex hidden gap-7 items-center font-inter text-sm !font-[600]'>
                                <p className='hover:text-[#D62637] text-black'><Link to={''} > Features</Link></p>
                                <p className='hover:text-[#D62637]'><Link to={''} > How it Works</Link></p>
                                <p className='hover:text-[#D62637]'><Link to={''} > Pricing</Link></p>
                                <p className='hover:text-[#D62637]'><Link to={''} > FAQ's</Link></p>
                                <p className='hover:text-[#D62637]'><Link to={''} > Blog</Link></p>
                                <button type='button' className='bg-[#EA3A4B] hover:bg-[#D62637] ml-5 py-2 font-inter px-4 rounded-md text-white text-sm font-medium ' onClick={() => navigate("/login")} >Sign In</button>
                            </div>
                        </div>
                        <div className={`sm:hidden flex justify-between py-5 sm:px-44 px-4 items-center fixed w-[100%] bg-[${navbarStyle.backgroundColor}]`}>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className='sm:hidden block'>
                                {/* {show ?
                                    <XMarkIcon className="h-8 w-8 text-[#12171A]" onClick={() => setShow(false)} /> :
                                    <Bars3Icon className="h-8 w-8 text-[#12171A]" onClick={() => setShow(true)} />} */}
                            </div>
                            {show ? <>
                                <div className='absolute w-[100%] p-10 text-center top-[72px] left-0 right-0 bg-white'>
                                    <div className='grid grid-rows gap-5 font-inter text-sm !font-[600]'>
                                        <p><Link to={''} > Features</Link></p>
                                        <p><Link to={''} > How it Works</Link></p>
                                        <p><Link to={''} > Pricing</Link></p>
                                        <p><Link to={''} > FAQ's</Link></p>
                                        <p><Link to={''} > Blog</Link></p>
                                        <button type='button' className='bg-[#EA3A4B] hover:bg-[#D62637] ml-5 py-2 font-inter px-4 rounded-md text-white text-sm font-medium ' >Sign In</button>
                                    </div>
                                </div>
                            </> : ""}
                        </div>
                        <div className='sm:grid block grid-cols-[55%,45%] sm:pl-16 pl-1 pt-16 sm:pt-24'>
                            <div className='m-auto sm:pr-8 pr-3 sm:py-20 py-5 sm:pl-24 pl-1'>
                                <h1 className='sm:text-[60px] text-[45px] !font-[700] leading-snug font-inter'>Never miss a Reservation again<span className='text-[#EA3A4B] font-semibold'>.</span></h1>
                                <p className='text-[20px] mt-2 text-[#595D5F] font-inter !font-[500]'>Say goodbye to the frustration of restaurant reservations</p>
                                <button type='button' className='font-inter !font-[500] px-8 py-4 mt-10 text-white rounded-md bg-[#EA3A4B] hover:bg-[#D62637] text-[16px] sm:w-auto w-[100%]'>Get Started Now</button>
                            </div>
                            <div className='flex justify-end'>
                                <img src={Hero} className='mt-10 pl-10 sm:pl-auto'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *****************************Second Component or Icons************************************** */}

                <div>
                    <div className='text-center text-[#12171A] sm:pt-[120px] pt-[60px] sm:px-[134px] px-5'>
                        <h1 className='text-[40px] !font-[600] leading-snug font-inter'>Features</h1>
                        <p className='font-inter text-[16px] !font-[500] mt-3 text-[#6C6F71]'>Resy Sniper offers everything you need</p>
                    </div>
                    <div className='sm:flex block gap-10 items-center m-auto w-[100%] sm:pb-[120px] pb-[60px] sm:px-[134px] px-5 sm:mt-10 mt-12'>
                        {data.map((ele, key) => (
                            <div className='text-center sm:flex sm:flex-col flex gap-3 sm:items-center items-start' key={key}>
                                <div>
                                    <img src={ele.image} className='h-[100px] sm:w-[100px] w-[120px]'></img>
                                </div>
                                <div>
                                    <h1 className='mt-5 text-[24px] font-inter !font-[600] sm:text-center text-left text-[#12171A]'>{ele.heading}</h1>
                                    <p className='text-[14px] mt-2 sm:text-center text-left font-inter text-[#6C6F71]'>{ele.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* *****************************Third Component************************************** */}

                <div className='bg-[#F3F5F6] sm:py-[120px] py-16 sm:px-[134px] px-5'>
                    <div className=''>
                        <div className=''>
                            <h1 className='text-[40px] font-inter !font-[700] text-[#12171A] leading-snug'>How it works</h1>
                            <p className='text-[16px] text-[#6C6F71] !font-[500] font-inter pb-5'>Resy Sniper offers everything you need.</p>
                        </div>
                        <div className='sm:flex grid grid-rows-3 sm:gap-[60px] gap-2'>
                            {cardData.map((ele, key) => (
                                <div className='grid grid-rows-2 bg-[#12171A] text-white rounded-md' key={key}>
                                    <div className='p-[40px]'>
                                        <h1 className='text-white font-inter text-[24px] !font-[600]'>{ele.heading}</h1>
                                        <p className='mt-3 font-inter text-[#D0D1D1]'>{ele.text}</p>
                                    </div>
                                    <div>
                                        <img src={ele.image} className='h-full'></img>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* *****************************Forth Component or Banner************************************** */}
                <div className='bg-cover' style={{ backgroundImage: `url(${Banner})` }}>
                    <div>
                        <div className='sm:w-[690px] w-[100%] py-24 sm:pl-32 pl-5 pr-5 sm:pr-1'>
                            <h1 className='font-inter sm:text-[52px] text-[36px] !font-[700] leading-snug text-white'>Save your precious time with Resy Sniper</h1>
                            <p className='text-white opacity-[80%] font-inter text-[16px] !font-[500] mt-2'>This tool is particularly valuable for those looking to dine at in-demand locations without the need to constantly check the Resy app themselves.</p>
                            <button type='button' className='px-[28px] sm:w-auto w-[100%] font-inter py-[16px] mt-10 text-white rounded-md bg-[black] text-[16px]'>Get Started Now</button>
                        </div>
                    </div>
                </div>


                {/* *****************************Fifth Component or Pricing Section************************************** */}

                <div className='sm:py-[120px] py-[60px] sm:px-[134px] px-5'>
                    <div className='pb-[40px]'>
                        <h1 className='text-[40px] font-inter !font-[700] leading-snug text-center'>Pricing Plans</h1>
                    </div>
                    <div className='sm:grid sm:grid-cols-3 md:grid-cols-3 grid grid-rows sm:gap-8 gap-4'>
                        <div className='bg-cover rounded-md' style={{ backgroundImage: `url(${Card})` }}>
                            <div className='text-white py-10 px-5'>
                                <h1 className='text-[24px] font-inter !font-[600]'>Choose a plan that’s right for you</h1>
                                <p className='mt-3 font-inter !font-[500] text-[16px]'>Fast turnarounds. Flat monthly fee.
                                    Cancel anytime.</p>
                            </div>
                        </div>
                        {priceTiles.map((ele, key) => (
                            <div className='rounded-md border border-[gray]' key={key}>
                                <div className={`bg-[${ele.button}] text-white p-5 rounded-t-md`}>
                                    <h1 className='text-[20px] font-inter !font-[600]'>{ele.style}</h1>
                                    <p className='mt-8 pb-3 !font-[600] font-inter text-[36px]'>{ele.price}<span className='text-[14px]'>.00/month</span></p>
                                </div>
                                <div className='h-[230px] px-5 mt-8'>
                                    {ele.details.map((item, index) => (
                                        <div key={index} className='flex gap-3 items-center text-sm leading-snug mt-3'>
                                            {/* <CheckCircleIcon className="h-4 w-4 text-[#12171A] !font-[500]" /> */}
                                            <p className='font-inter text-[#12171A] !font-[500]'>{item}</p>CheckCircleIcon
                                        </div>
                                    ))}
                                </div>
                                <div className='flex items-end px-5 pb-5'>
                                    <button type='button' className={`bg-[${ele.button}] px-[20px] text-[14px] !font-[500] font-inter py-[10px] text-white rounded-md`}>Subscribe</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* *****************************Sixth Component or FAQ Section************************************** */}

                <div className='bg-[#F3F5F6]'>
                    <div className='sm:grid sm:grid-cols-2 block gap-10 sm:w-[80%] w-[100%] sm:m-auto m-auto px-2'>
                        <div>
                            <div className='sm:py-20 py-10 w-[85%] '>
                                <h1 className='text-[40px] text-[#12171A] font-inter !font-[700] leading-snug'>Frequently asked questions</h1>
                                <p className='mt-3 font-inter text-[16px] text-[#6C6F71] !font-[500]'>If you have any other questions or feedback, please <span className='text-[#EA3A4B] text-[16px] underline'>contact us</span> and I’ll get back to you shortly. </p>
                            </div>
                        </div>
                        <div className='sm:p-10 p-2 sm:my-5 my-2 w-[90%] sm:w-[100%]'>
                            {faq.map((ele, key) => (
                                <div className={`${key === activeIndex ? 'h-auto transition-all duration-500 py-10' : 'h-auto transition-all duration-500 py-6 grid items-center'}  border-b mb-3`} key={key}>
                                    <div className='flex items-center justify-between text-[20px] !font-[600] text-[#12171A] cursor-pointer' onClick={() => setActiveIndex(key)}>
                                        <p className='font-inter'>{ele.heading}</p>
                                        {/* {key != activeIndex ? <PlusIcon className="h-6 w-6 text-[#12171A] text-[20px]" /> :
                                            <MinusIcon className="h-6 w-6 text-[#12171A] text-[20px]" />} */}
                                    </div>
                                    <p className={`faq-content font-inter text-sm transition-all duration-500 ${activeIndex === key ? 'active-faq' : 'hidden'}`}>{ele.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* *****************************Seventh Component ************************************** */}

                <div className=''>
                    <div className='sm:grid sm:grid-cols-[46%,54%] flex flex-col-reverse'>
                        <div className=''>
                            <img src={Blog} className='h-[800px] sm:w-[630px] w-auto'></img>
                        </div>
                        <div className='sm:py-[100px] py-[30px] sm:pl-[50px] pl-5'>
                            <div className='pb-10'>
                                <h1 className='text-[40px] font-inter !font-[700]'>Resy Sniper Blog</h1>
                                <p className='mt-3 font-inter !font-[500] text-[16px] text-[#6C6F71]'>Catch up on all our latest news.</p>
                            </div>
                            <div className='w-[90%]'>
                                {blogData.map((ele, key) => (
                                    <div className='flex gap-5 sm:items-center items-start sm:mt-5 mt-8 sm:w-[80%] w-auto' key={key}>
                                        <div>
                                            <img src={ele.image} className='sm:!max-w-[100px] !max-w-[150px] rounded-md' ></img>
                                        </div>
                                        <div>
                                            <div className='sm:flex grid sm:gap-[12px] gap-2 items-center'>
                                                <p className={`bg-[#F69046] w-[fit-content] rounded-xl font-inter px-[8px] py-[4px] text-white text-[12px]`}>{ele.title}</p>
                                                <p className='text-[14px] text-[#6C6F71] font-inter'>{ele.date}</p>
                                            </div>
                                            <div>
                                                <p className='pt-3 font-inter text-[20px] !font-[600]'>{ele.text}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div className='mt-10'>
                                <button className='py-[16px] px-[28px] sm:w-auto w-[100%] border border-[#D0D1D1] text-[16px] !font-[600] text-[#12171A] rounded-md'>View All</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* ***************************** Footer Section ************************************** */}

                <div>
                    <div className='bg-cover text-white' style={{ backgroundImage: `url(${Footer})` }}>
                        <div className='sm:px-28 px-5 pt-20 pb-10 text-center'>
                            <h1 className='sm:text-[52px] text-[45px] font-inter !font-[700]'>Fast, secure, and easy-to-use</h1>
                            <p className='text-[16px] mt-2 font-inter opacity-[80%] text-[white]'>Try Resy Sniper today and never miss a reservation again!</p>
                            <button type='button' className='bg-[#EA3A4B] sm:w-auto w-[100%] text-[16px] !font-[500] text-white py-[16px] px-[28px] mt-8 rounded-md'>Get started now</button>
                        </div>
                        <div className='sm:w-[65%] w-[100%] m-auto'>
                            <img src={Image} ></img>
                        </div>
                    </div>
                    <div className='bg-[#000000]'>
                        <div className='sm:grid sm:grid-cols-[30%,30%,40%] block border-b border-[gray] sm:mx-[121px] mx-3 sm:py-[60px] text-white py-12'>
                            <div>
                                <img src={logo} ></img>
                                <div className='flex gap-3 mt-5'>
                                    <img src={Instagram} ></img>
                                    <img src={Twitter} ></img>
                                </div>
                            </div>
                            <div className='grid grid-cols-3 mt-8 sm:mt-auto'>
                                <div>
                                    <ul>
                                        <li className='font-inter text-[16px] !font-[600]'><p>About</p></li>
                                        <li className='my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter'><Link to={'#'}>Features</Link></li>
                                        <li className='my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter'><Link to={'#'}>How it works</Link></li>
                                        <li className='my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter'><Link to={'#'}>Pricing</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className='font-inter text-[16px] !font-[600]'><p>Help</p></li>
                                        <li className='my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter'><Link to={'#'}>FAQ’s</Link></li>
                                        <li className='my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter'><Link to={'#'}>Support</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className='font-inter text-[16px] !font-[600]'><p>Legal</p></li>
                                        <li className='my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter'><Link to={'#'}>Privacy</Link></li>
                                        <li className='my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter'><Link to={'#'}>Terms</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='mt-8 sm:mt-auto'>
                                <h1 className='font-inter'>Subscribe to Our Newsletter</h1>
                                <div className='flex mt-5'>
                                    <input type='text' placeholder='Your Email' className='px-[12px] sm:w-[310px] w-[100%] font-inter bg-[#303538] rounded-l-md text-[14px] text-[#D0D1D1]'></input>
                                    <button type='button' className='px-6 py-3 bg-[#EA3A4B] font-inter rounded-r-md text-sm text-white'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className='sm:py-16 py-8 text-center px-10 text-[#D0D1D1] text-[12px]'>
                            <p className='font-inter'>© 2024 Resy Sniper - All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewPage