import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import backgroundImage from '../../assets/homepage/Hero.png'
import logo from '../../assets/homepage/logo.png'
import Hero from '../../assets/homepage/Hero_img.png'
import Speed from '../../assets/homepage/Speed.png'
import Automatic from '../../assets/homepage/Automatic.png'
import Secure from '../../assets/homepage/Secure.png'
import Personalized from '../../assets/homepage/Personalised.png'
import Image1 from '../../assets/homepage/Image1.png'
import Image2 from '../../assets/homepage/Image2.png'
import Image3 from '../../assets/homepage/Image3.png'
import Banner from '../../assets/homepage/Banner.png'
import Card from '../../assets/homepage/Card.png'
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import Blog from '../../assets/homepage/blog_img.png'
import Rectangle from '../../assets/homepage/Rectangle.png'
import Image from '../../assets/homepage/Img.png'
import Instagram from '../../assets/homepage/Instagram.png'
import Twitter from '../../assets/homepage/TwitterLogo.png'





const NewPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
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
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % faq.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [faq.length]);


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
    return (
        <>
            <div>
                <div>

                    {/* *****************************First Component or Banner************************************** */}

                    <div
                        className="bg-cover"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    >
                        <div className='flex justify-between py-5 px-44 items-center'>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className='flex gap-7 items-center font-inter text-sm !font-[600]'>
                                <p><Link to={''} > Features</Link></p>
                                <p><Link to={''} > How it Works</Link></p>
                                <p><Link to={''} > Pricing</Link></p>
                                <p><Link to={''} > FAQ's</Link></p>
                                <p><Link to={''} > Blog</Link></p>
                                <button type='button' className='bg-[#EA3A4B] ml-5 py-2 font-inter px-4 rounded-md text-white text-sm font-medium' >Sign In</button>
                            </div>
                        </div>
                        <div className='grid grid-cols-[55%,45%] pl-16'>
                            <div className='m-auto pr-8 py-20 pl-24'>
                                <h1 className='text-[60px] font-semibold leading-snug font-inter'>Never miss a Reservation again<span className='text-[#EA3A4B] font-semibold'>.</span></h1>
                                <p className='text-[20px] mt-2 text-[#595D5F] font-inter !font-[500]'>Say goodbye to the frustration of restaurant reservations</p>
                                <button type='button' className='font-inter !font-[500] px-8 py-4 mt-10 text-white rounded-md bg-[#EA3A4B] text-[16px]'>Get Started Now</button>
                            </div>
                            <div className='flex justify-end'>
                                <img src={Hero} className='mt-10'></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *****************************Second Component or Icons************************************** */}

                <div>
                    <div className='text-center text-[#12171A] pt-[120px] px-[134px]'>
                        <h1 className='text-[40px] !font-[600] leading-snug font-inter'>Features</h1>
                        <p className='font-inter text-[16px] !font-[500] mt-3 text-[#6C6F71]'>Resy Sniper offers everything you need</p>
                    </div>
                    <div className='flex gap-10 items-center m-auto w-[100%] pb-[120px]  px-[134px] mt-10'>
                        {data.map((ele, key) => (
                            <div className='text-center flex flex-col items-center' key={key}>
                                <img src={ele.image} className='h-[100px] w-[100px]'></img>
                                <h1 className='mt-5 text-[24px] font-inter !font-[600] text-[#12171A]'>{ele.heading}</h1>
                                <p className='text-[14px] mt-2 font-inter text-[#6C6F71]'>{ele.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* *****************************Third Component************************************** */}

                <div className='bg-[#F3F5F6] py-[120px] px-[134px]'>
                    <div className=''>
                        <div className=''>
                            <h1 className='text-[40px] font-inter !font-[700] text-[#12171A] leading-snug'>How it works</h1>
                            <p className='text-[16px] text-[#6C6F71] !font-[500] font-inter pb-5'>Resy Sniper offers everything you need.</p>
                        </div>
                        <div className='flex gap-[60px]'>
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
                        <div className='w-[690px] py-24 pl-32'>
                            <h1 className='font-inter text-[52px] !font-[700] leading-snug text-white'>Save your precious time with Resy Sniper</h1>
                            <p className='text-white opacity-[80%] font-inter text-[16px] !font-[500] mt-2'>This tool is particularly valuable for those looking to dine at in-demand locations without the need to constantly check the Resy app themselves.</p>
                            <button type='button' className='px-[28px] font-inter py-[16px] mt-10 text-white rounded-md bg-[black] text-[16px]'>Get Started Now</button>
                        </div>
                    </div>
                </div>


                {/* *****************************Fifth Component or Pricing Section************************************** */}

                <div className='py-[120px] px-[134px]'>
                    <div className='pb-[40px]'>
                        <h1 className='text-[40px] font-inter !font-[700] leading-snug text-center'>Pricing Plans</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-8'>
                        <div className='bg-cover' style={{ backgroundImage: `url(${Card})` }}>
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
                                            <CheckCircleIcon className="h-4 w-4 text-[#12171A] !font-[500]" />
                                            <p className='font-inter text-[#12171A] !font-[500]'>{item}</p>
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
                    <div className='grid grid-cols-2 gap-10 w-[80%] m-auto'>
                        <div>
                            <div className='py-20 w-[75%] '>
                                <h1 className='text-5xl font-inter font-semibold leading-snug'>Frequently asked questions</h1>
                                <p className='mt-3 font-inter text-sm'>If you have any other questions or feedback, please <span className='text-[red] underline'>contact us</span> and I’ll get back to you shortly. </p>
                            </div>
                        </div>
                        <div className='p-10 my-5'>
                            {faq.map((ele, key) => (
                                <div className={`${key === activeIndex ? '' : ''} h-28 border-b mb-3`} key={key}>
                                    <div className='flex gap-5 items-center justify-between cursor-pointer' onClick={() => setActiveIndex(key)}>
                                        <p className='font-inter'>{ele.heading}</p>
                                        {key != activeIndex ? <PlusIcon className="h-6 w-6 text-gray-500" /> :
                                            <MinusIcon className="h-6 w-6 text-gray-500" />}
                                    </div>
                                    <p className={`${key === activeIndex ? 'active-faq font-inter text-sm ' : 'hidden'}`}>{ele.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* *****************************Seventh Component ************************************** */}

                <div className=''>
                    <div className='grid grid-cols-[45%,55%]'>
                        <div className=''>
                            <img src={Blog} className='h-[800px]'></img>
                        </div>
                        <div className='w-[80%] m-auto'>
                            <div className='py-10'>
                                <h1 className='text-[40px] font-inter !font-[700]'>Resy Sniper Blog</h1>
                                <p className='mt-3 font-inter'>Catch up on all our latest news.</p>
                            </div>
                            <div className='w-[90%]'>
                                {blogData.map((ele, key) => (
                                    <div className='flex gap-5 items-center shadow-sm mt-5 w-[80%]' key={key}>
                                        <div>
                                            <img src={ele.image} className='!max-w-[100px] rounded-md' ></img>
                                        </div>
                                        <div>
                                            <div className='flex gap-5 items-center'>
                                                <p className={`bg-[${ele.color}] rounded-xl font-inter px-2 text-xs`}>{ele.title}</p>
                                                <p className='text-xs font-inter'>{ele.date}</p>
                                            </div>
                                            <div>
                                                <p className='pt-3 font-inter text-[20px] !font-[600]'>{ele.text}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div className='my-10'>
                                <button className='p-3 border border-[gray] rounded-md'>View All</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* *****************************Seventh Component ************************************** */}

                <div>
                    <div className='bg-[#12171A] text-white'>
                        <div className='px-28 pt-20 pb-10 text-center'>
                            <h1 className='text-4xl font-inter font-semibold'>Fast, secure, and easy-to-use</h1>
                            <p className='text-sm mt-2 font-inter text-[gray]'>Try Resy Sniper today and never miss a reservation again!</p>
                            <button type='button' className='bg-[#EA3A4B] text-sm text-white py-4 px-6 mt-8 rounded-md'>Get started now</button>
                        </div>
                        <div className='w-[60%] m-auto'>
                            <img src={Image} ></img>
                        </div>
                    </div>
                    <div className='bg-[#000000]'>
                        <div className='grid grid-cols-[30%,40%,30%] border-b border-[gray] mx-[121px] py-[60px] text-white'>
                            <div>
                                <img src={logo} ></img>
                                <div className='flex gap-3 mt-5'>
                                    <img src={Instagram} ></img>
                                    <img src={Twitter} ></img>
                                </div>
                            </div>
                            <div className='grid grid-cols-3'>
                                <div>
                                    <ul>
                                        <li className='font-inter'><p>About</p></li>
                                        <li className='my-2 font-inter'><Link to={'#'}>Features</Link></li>
                                        <li className='my-2 font-inter'><Link to={'#'}>How it works</Link></li>
                                        <li className='my-2 font-inter'><Link to={'#'}>Pricing</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className='font-inter'><p>Help</p></li>
                                        <li className='my-2 font-inter'><Link to={'#'}>FAQ’s</Link></li>
                                        <li className='my-2 font-inter'><Link to={'#'}>Support</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className='font-inter'><p>Legal</p></li>
                                        <li className='my-2 font-inter'><Link to={'#'}>Privacy</Link></li>
                                        <li className='my-2 font-inter'><Link to={'#'}>Terms</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-inter'>Subscribe to Our Newsletter</h1>
                                <div className='flex mt-5'>
                                    <input type='text' placeholder='Your Email' className='px-5 py-3 bg-[gray]'></input>
                                    <button type='button' className='px-6 py-3 bg-[#EA3A4B] font-inter text-sm text-white'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className='py-16 text-center px-10 text-white'>
                            <p className='font-inter'>© 2024 Resy Sniper - All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NewPage