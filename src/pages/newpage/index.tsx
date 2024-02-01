import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, Key } from "react";
import backgroundImage1 from "@/assets/homepage/Hero.png";
import logo from "@/assets/homepage/Logo.png";
import Hero from "@/assets/homepage/Hero_img.png";
import Speed from "@/assets/homepage/Speed.png";
import Automatic from "@/assets/homepage/Automatic.png";
import Secure from "@/assets/homepage/Secure.png";
import Personalized from "@/assets/homepage/Personalised.png";
import Image1 from "@/assets/homepage/Image1.png";
import Image2 from "@/assets/homepage/Image2.png";
import Image3 from "@/assets/homepage/Image3.png";
import Banner from "@/assets/homepage/Banner.png";
import Banner2 from "@/assets/homepage/Banner2.png"
import Card from "@/assets/homepage/Card.png";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import Blog from "@/assets/homepage/blog_img.png";
// import Rectangle from "@/assets/homepage/Rectangle.png";
import Image from "@/assets/homepage/Img.png";
import Instagram from "@/assets/homepage/Instagram.png";
import Twitter from "@/assets/homepage/TwitterLogo.png";
import Footer from "@/assets/homepage/Footer.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { animateScroll as scroll } from "react-scroll";
import { useGetAllblogs } from "@/features/blog/blog";
// import { any } from "zod";

const NewPage = () => {
    const navigate = useNavigate();
    const { blogs } = useGetAllblogs()
    const [activeIndex, setActiveIndex] = useState(0);
    const [show, setShow] = useState(false);


    const data = [
        {
            image: Speed,
            heading: "Speed",
            text: "Lightning-fast reservations for last-minute dining plans",
        },
        {
            image: Automatic,
            heading: "Automatic",
            text: "Automatic reservation monitoring during peak dining hours",
        },
        {
            image: Secure,
            heading: "Secure",
            text: "Secure and compliant platform for worry-free dining",
        },
        {
            image: Personalized,
            heading: "Personalized",
            text: "Customizable job creation for personalized booking preferences",
        },
    ];

    const cardData = [
        {
            heading: "Connect Account",
            text: "Connect your Resy and or OpenTable account to the website. This integration allows the website to manage reservations on behalf of the user.",
            image: Image1,
        },
        {
            heading: "Specify details",
            text: "You specify details such as the desired restaurant, date and time range, number of guests, specific preferences (like seating options), etc.",
            image: Image2,
        },
        {
            heading: "Secure Reservations",
            text: "When a matching reservation becomes available, the we book it on behalf your behalf, so you can see the reservation on your own account",
            image: Image3,
        },
    ];

    const priceTiles = [
        {
            style: "REGULAR",
            price: "$25",
            details: [
                "5 active booking requests",
                "Single date, single venue booking",
            ],
            button: "#12171A",
        },
        {
            style: "PRO",
            price: "$50",
            details: [
                "25 active booking requests",
                "Priority booking",
                "Multiple dates and venues booking",
                "Same date booking",
                "Select sitting type",
                "Reservations of premium restaurants",
            ],
            button: "#EA3A4B",
        },
    ];

    const faq = [
        {
            heading: "How does Resy Sniper work?",
            text: "Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.",
        },
        {
            heading: "Is Resy Sniper secure?",
            text: "Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.",
        },
        {
            heading: "Can I use Resy Sniper for any restaurant?",
            text: "Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.",
        },
        {
            heading: "How does Resy Sniper notify me of a successful booking?",
            text: "Resy Sniper allows you to create jobs that will automatically monitor specified restaurants between certain hours on a specified day. If any reservations come up, they will be instantly booked for you.",
        },
    ];
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setActiveIndex((prevIndex) => (prevIndex + 1) % faq.length);
    //     }, 5000);

    //     return () => clearInterval(intervalId);
    // }, [faq.length]);

    const [scrolling, setScrolling] = useState(false);

    // const blogData = [
    //     {
    //         image: Rectangle,
    //         title: "Reservation Guide",
    //         date: "October 22, 2023",
    //         text: "Unlock the Secret to Dining at Carbone: Your Exclusive Guide",
    //         color: "#F69046",
    //     },
    //     {
    //         image: Rectangle,
    //         title: "Food & Drink Guides",
    //         date: "October 22, 2023",
    //         text: "Navigating New York Elite Dining Scene: A Guide to Snagging the Hardest Reservations",
    //         color: "yellow",
    //     },
    //     {
    //         image: Rectangle,
    //         title: "User Guide",
    //         date: "October 22, 2023",
    //         text: "Mastering the Art of Reservation: Tips to Increase Your Odds with Resy Sniper",
    //         color: "green",
    //     },
    // ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: scrolling || show ? "white" : "transparent",
        border: scrolling || show ? "2px solid black" : "transparent",
    };

    const scrollToElement = (elementId: string) => {
        const targetElement = document.getElementById(elementId);

        if (targetElement) {
            scroll.scrollTo(targetElement.offsetTop);
        }
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const backgroundImage = windowWidth <= 767 ? Banner2 : Banner;

    const getDate = (image: Date) => {
        const originalDateString = image;
        const originalDate = new Date(originalDateString);

        const options: any = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const formattedDate = originalDate.toLocaleDateString('en-US', options);
        return formattedDate
    }

    return (
        <>
            <div>
                <div className="" id="home">
                    {/* *****************************First Component or Banner************************************** */}

                    <div
                        className="bg-cover"
                        style={{ backgroundImage: `url(${backgroundImage1})` }}
                    >
                        <div
                            className={`lg:flex md:hidden hidden justify-between py-[24px] lg:px-[134px] md:px-4 px-4 items-center fixed w-[100%] bg-[${navbarStyle.backgroundColor}] border-[${navbarStyle.border}]`}
                        >
                            <div>
                                <img
                                    src={logo}
                                    onClick={() => scrollToElement('home')}
                                />
                            </div>
                            <div className="sm:flex hidden gap-7 items-center font-inter text-base !font-[600]">
                                <p
                                    className="hover:text-[#D62637] text-black cursor-pointer"
                                    onClick={() => scrollToElement('features')}
                                >
                                    {" "}
                                    Features
                                </p>
                                <p
                                    className="hover:text-[#D62637] cursor-pointer"
                                    onClick={() => scrollToElement('how-it-works')}
                                >
                                    {" "}
                                    How it Works
                                </p>
                                <p
                                    className="hover:text-[#D62637] cursor-pointer"
                                    onClick={() => scrollToElement('pricing')}
                                >
                                    {" "}
                                    Pricing
                                </p>
                                <p
                                    className="hover:text-[#D62637] cursor-pointer"
                                    onClick={() => scrollToElement('faq')}
                                >
                                    {" "}
                                    FAQ's
                                </p>
                                <p
                                    className="hover:text-[#D62637] cursor-pointer"
                                    onClick={() => scrollToElement('blog')}
                                >
                                    {" "}
                                    Blog
                                </p>
                                <button
                                    type="button"
                                    className="bg-[#EA3A4B] hover:bg-[#D62637] ml-5 py-2 font-inter px-4 rounded-md text-white text-base font-medium "
                                    onClick={() => navigate("/login")}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                        <div
                            className={`lg:hidden md:flex flex justify-between py-5 lg:px-44 md:px-20 px-4 items-center fixed w-[100%] bg-[${navbarStyle.backgroundColor}]`}
                        >
                            <div>
                                <img
                                    src={logo}
                                    onClick={() => scrollToElement('home')}
                                />
                            </div>
                            <div className="lg:hidden md:block block">
                                {show ? (
                                    <XMarkIcon
                                        className="h-8 w-8 text-[#12171A]"
                                        onClick={() => setShow(false)}
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="h-8 w-8 text-[#12171A]"
                                        onClick={() => setShow(true)}
                                    />
                                )}
                            </div>
                            {show ? (
                                <>
                                    <div className="absolute w-[100%] p-10 text-left top-[72px] left-0 right-0 bg-white">
                                        <div className="grid grid-rows gap-5 font-inter text-sm !font-[600]">
                                            <p
                                                className="hover:text-[#D62637] text-black cursor-pointer"
                                                onClick={() => scrollToElement('features')}
                                            >
                                                {" "}
                                                Features
                                            </p>
                                            <p
                                                className="hover:text-[#D62637] cursor-pointer"
                                                onClick={() => scrollToElement('how-it-works')}
                                            >
                                                {" "}
                                                How it Works
                                            </p>
                                            <p
                                                className="hover:text-[#D62637] cursor-pointer"
                                                onClick={() => scrollToElement('pricing')}
                                            >
                                                {" "}
                                                Pricing
                                            </p>
                                            <p
                                                className="hover:text-[#D62637] cursor-pointer"
                                                onClick={() => scrollToElement('faq')}
                                            >
                                                {" "}
                                                FAQ's
                                            </p>
                                            <p
                                                className="hover:text-[#D62637] cursor-pointer"
                                                onClick={() => scrollToElement('blog')}
                                            >
                                                {" "}
                                                Blog
                                            </p>
                                            <button
                                                type="button"
                                                className="bg-[#EA3A4B] hover:bg-[#D62637] w-[70%]  py-2 font-inter px-4 rounded-md text-white text-sm font-medium "
                                                onClick={() => navigate("/login")}
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="md:grid block lg:grid-cols-[55%,45%] md:grid-cols-[50%,50%] sm:grid-cols-[50%,50%] lg:pl-16 md:pl-2 pl-1 pt-16 sm:pt-24">
                            <div className=" sm:pr-8 pr-3 sm:py-20 py-5 sm:pl-5 md:pl-16 pl-3">
                                <h1 className="lg:text-[60px] md:text-[40px] text-[45px] !font-[700] leading-snug font-inter">
                                    Never miss a Reservation again
                                    <span className="text-[#EA3A4B] font-semibold">.</span>
                                </h1>
                                <p className="text-[20px] mt-2 text-[#595D5F] font-inter !font-[500]">
                                    Say goodbye to the frustration of restaurant reservations
                                </p>
                                <button
                                    onClick={() => navigate("/sign-up")}
                                    type="button"
                                    className="font-inter !font-[500] px-8 py-4 mt-10 text-white rounded-md bg-[#EA3A4B] hover:bg-[#D62637] text-[16px] sm:w-auto w-[100%]"
                                >
                                    Get Started Now
                                </button>

                            </div>
                            <div className="flex justify-end">
                                <img src={Hero} className="mt-10 lg:pl-10 md:pl-2 sm:pl-2 pl-10 "></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:block hidden">
                    <p className="text-center flex justify-center text-[20px] mt-2 text-[#595D5F] font-inter !font-[500]"> We are not associated with resy opentable or any other brands</p>
                </div>

                {/* *****************************Second Component or Icons************************************** */}

                <div className="" id="features">
                    <div className="text-center text-[#12171A] sm:pt-[120px] pt-[60px] sm:px-[134px] px-5">
                        <h1 className="text-[40px] !font-[600] leading-snug font-inter">
                            Features
                        </h1>
                        <p className="font-inter text-[16px] !font-[500] mt-3 text-[#6C6F71]">
                            Resy Sniper offers everything you need
                        </p>
                    </div>
                    <div className="sm:flex justify-between block gap-10 items-center m-auto w-[100%] sm:pb-[120px] pb-[60px] lg:px-[134px] md:px-[50px] px-5 sm:mt-10 mt-8">
                        {data.map((ele, key) => (
                            <div
                                className="text-center sm:flex sm:flex-col grid grid-cols-[28%,72%] gap-3 sm:items-center items-end"
                                key={key}
                            >
                                <div>
                                    <img
                                        src={ele.image}
                                        className="h-[100px] sm:w-[100px] w-[140px]"
                                    ></img>
                                </div>
                                <div>
                                    <h1 className="sm:mt-5 mt-2 text-[24px] font-inter !font-[600] sm:text-center text-left text-[#12171A]">
                                        {ele.heading}
                                    </h1>
                                    <p className="text-[14px] mt-2 !font-[500] sm:text-center text-left font-inter text-[#6C6F71]">
                                        {ele.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* *****************************Third Component************************************** */}

                <div
                    className="bg-[#F3F5F6] sm:py-[120px] py-16 xl:px-[134px] lg:px-[10px] px-5"
                    id="how-it-works"
                >
                    <div className="">
                        <div className="">
                            <h1 className="text-[40px] font-inter !font-[700] text-[#12171A] leading-snug">
                                How it works
                            </h1>
                            <p className="text-[16px] text-[#6C6F71] !font-[500] font-inter pb-5">
                                Resy Sniper offers everything you need.
                            </p>
                        </div>
                        <div className="lg:flex md:grid grid grid-rows-3 justify-between sm:gap-[60px] gap-2">
                            {cardData.map((ele, key) => (
                                <div
                                    className="grid grid-rows-2 lg:w-[600px] w-auto bg-[#12171A] text-white rounded-md"
                                    key={key}
                                >
                                    <div className="p-[40px]">
                                        <h1 className="text-white font-inter text-[24px] !font-[600]">
                                            {ele.heading}
                                        </h1>
                                        <p className="mt-3 font-inter text-[#D0D1D1]">{ele.text}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <img src={ele.image} className="h-full"></img>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* *****************************Forth Component or Banner************************************** */}
                <div
                    className="bg-cover bg-no-repeat  sm:h-auto h-[100vh]"
                    id="banner"
                    style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}
                >
                    <div>
                        <div className="lg:w-[690px] md:w-auto w-[100%] py-24 lg:pl-32 md:pl-5 pl-5 pr-5 sm:pr-1">
                            <h1 className="font-inter sm:text-[52px] text-[45px] !font-[700] leading-snug text-white">
                                Save your precious time with Resy Sniper
                            </h1>
                            <p className="text-white opacity-[80%] font-inter text-[16px] !font-[500] lg:mt-2 mt-4">
                                This tool is particularly valuable for those looking to dine at
                                in-demand locations without the need to constantly check the
                                Resy app themselves.
                            </p>
                            <button
                                type="button"
                                className="px-[28px] sm:w-auto w-[100%] font-inter py-[16px] mt-10 text-white rounded-md bg-[black] text-[16px]"
                                onClick={() => navigate("/sign-up")}
                            >
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* *****************************Fifth Component or Pricing Section************************************** */}

                <div
                    className="sm:py-[120px] py-[60px] xl:px-[134px] lg:px-[10px] md:px-[10px] px-5"
                    id="pricing"
                >
                    <div className="pb-[40px]">
                        <h1 className="text-[40px] font-inter !font-[700] leading-snug text-center">
                            Pricing Plans
                        </h1>
                    </div>
                    <div className="lg:flex md:grid lg:justify-between  md:grid-rows block  lg:gap-8 gap-4">
                        <div
                            className="bg-cover rounded-md h-[500px] lg:w-[600px] w-auto "
                            style={{ backgroundImage: `url(${Card})` }}
                        >
                            <div className="text-white py-10 px-5">
                                <h1 className="text-[24px] font-inter !font-[600]">
                                    Choose a plan that’s right for you
                                </h1>
                                <p className="mt-3 font-inter !font-[500] text-[16px]">
                                    Fast turnarounds. Flat monthly fee. Cancel anytime.
                                </p>
                            </div>
                        </div>
                        {priceTiles.map((ele, key) => (
                            <div className="rounded-md border border-[gray] w-auto lg:w-[600px] lg:mt-0 mt-2" key={key}>
                                <div
                                    className={`bg-[${ele.button}] text-white p-5 rounded-t-md`}
                                >
                                    <h1 className="text-[20px] font-inter !font-[600]">
                                        {ele.style}
                                    </h1>
                                    <p className="mt-8 pb-3 !font-[600] font-inter text-[36px]">
                                        {ele.price}
                                        <span className="text-[14px]">.00/month</span>
                                    </p>
                                </div>
                                <div className="lg:h-[230px] h-auto px-5 mt-8">
                                    {ele.details.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-3 items-center text-sm leading-snug mt-3"
                                        >
                                            <CheckCircleIcon className="h-4 w-4 text-[#12171A] !font-[500]" />
                                            <p className="font-inter text-[#12171A] !font-[500]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-end px-5 py-5">
                                    <button
                                        type="button"
                                        className={`bg-[${ele.button}] px-[20px] text-[14px] !font-[500] font-inter py-[10px] text-white rounded-md`}
                                        onClick={() => navigate("/sign-up")}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* *****************************Sixth Component or FAQ Section************************************** */}

                <div className="bg-[#F3F5F6]" id="faq">
                    <div className="sm:grid sm:grid-cols-2 block gap-10 xl:w-[90%] w-[100%] sm:m-auto m-auto px-2">
                        <div>
                            <div className="sm:py-20 py-10 w-[85%] sm:px-0 px-3">
                                <h1 className="text-[40px] text-[#12171A] font-inter !font-[700] leading-snug">
                                    Frequently asked questions
                                </h1>
                                <p className="mt-3 font-inter text-[16px] text-[#6C6F71] !font-[500]">
                                    If you have any other questions or feedback, please{" "}
                                    <span className="text-[#EA3A4B] text-[16px] underline">
                                        contact us
                                    </span>{" "}
                                    and I’ll get back to you shortly.
                                </p>
                            </div>
                        </div>
                        <div className="sm:p-10 p-2 sm:my-5 my-2 w-[90%] sm:w-[100%]">
                            {faq.map((ele, key) => (
                                <div
                                    className={`${key === activeIndex
                                        ? "h-auto transition-all duration-500 py-10"
                                        : "h-auto transition-all duration-500 py-6 grid items-center"
                                        }  border-b mb-3`}
                                    key={key}
                                >
                                    <div
                                        className="flex items-center justify-between xl:text-[20px] text-[16px] !font-[600] text-[#12171A] cursor-pointer"
                                        onClick={() => setActiveIndex(key)}
                                    >
                                        <p className="font-inter">{ele.heading}</p>
                                        {key != activeIndex ? (
                                            <PlusIcon className="h-6 w-6 text-[#12171A] text-[20px]" />
                                        ) : (
                                            <MinusIcon className="h-6 w-6 text-[#12171A] text-[20px]" />
                                        )}
                                    </div>
                                    <p
                                        className={`faq-content font-inter text-sm transition-all duration-500 ${activeIndex === key ? "active-faq" : "hidden"
                                            }`}
                                    >
                                        {ele.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* *****************************Seventh Component ************************************** */}

                <div className="" id="blog">
                    <div className="sm:grid sm:grid-cols-[46%,54%] flex flex-col-reverse">
                        <div className="">
                            <img src={Blog} className="h-[800px] md:h-[100%] sm:h-[100%] lg:h-[100%] xl:h-[920px] xl:w-[900px] sm:w-[630px] w-auto"></img>
                        </div>
                        <div className="sm:py-[100px] py-[30px] sm:pl-[50px] pl-5">
                            <div className="pb-10">
                                <h1 className="text-[40px] font-inter !font-[700]">
                                    Resy Sniper Blog
                                </h1>
                                <p className="mt-3 font-inter !font-[500] text-[16px] text-[#6C6F71]">
                                    Catch up on all our latest news.
                                </p>
                            </div>
                            <div className="lg:w-[90%] md:w-[100%] w-[96%]">
                                {console.log(blogs?.data)}
                                {blogs?.data.slice(0, 3).map((blog: any, key: Key) => {
                                    // return <div
                                    //     dangerouslySetInnerHTML={{ __html: blog.body }}
                                    // /> 
                                    return <div
                                        className="flex gap-5 sm:items-center items-start sm:mt-7 mt-8 lg:w-[80%] md:w-[auto] w-auto"
                                        key={key}
                                    >
                                        <div>
                                            <img
                                                src={`https://resysniperblog.s3.amazonaws.com/${blog?.image_url}`}
                                                className="!max-w-[92px]  rounded-lg h-[92px]"
                                                alt={blog?.image_alt}
                                            ></img>
                                        </div>
                                        <div>
                                            <div className="sm:flex grid sm:gap-[12px] gap-2 items-center">
                                                <p
                                                    className={` ${key === 0 ? 'bg-[#F69046]' : ''} ${key === 1 ? 'bg-[#E2C00B]' : ''} ${key === 2 ? 'bg-[#22C376]' : ''} w-[fit-content] rounded-xl font-inter px-[8px] py-[4px] text-white text-[12px]`}
                                                >
                                                    {blog.category}
                                                </p>
                                                <p className="text-[14px] text-[#6C6F71] font-inter">
                                                    {getDate(blog.created_at)}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="pt-3 font-inter text-[20px] !font-[600] text-[#12171A]">
                                                    {blog.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                })}
                                {/* {blogData.map((ele, key) => (
                                    <div
                                        className="flex gap-5 sm:items-center items-start sm:mt-5 mt-8 lg:w-[80%] md:w-[auto] w-auto"
                                        key={key}
                                    >
                                        <div>
                                            <img
                                                src={ele.image}
                                                className="sm:!max-w-[100px] !max-w-[150px] rounded-md"
                                            ></img>
                                        </div>
                                        <div>
                                            <div className="sm:flex grid sm:gap-[12px] gap-2 items-center">
                                                <p
                                                    className={`bg-[#F69046] w-[fit-content] rounded-xl font-inter px-[8px] py-[4px] text-white text-[12px]`}
                                                >
                                                    {ele.title}
                                                </p>
                                                <p className="text-[14px] text-[#6C6F71] font-inter">
                                                    {ele.date}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="pt-3 font-inter text-[20px] !font-[600]">
                                                    {ele.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))} */}
                            </div>
                            <div className="mt-10">
                                <button
                                    className="py-[16px] px-[28px] sm:w-auto w-[95%] border border-[#D0D1D1] text-[16px] !font-[600] text-[#12171A] rounded-md"
                                    onClick={() => navigate("/blogs")}
                                >
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ***************************** Footer Section ************************************** */}

                <div>
                    <div
                        className="bg-cover text-white"
                        style={{ backgroundImage: `url(${Footer})` }}
                        id="footer"
                    >
                        <div className="sm:px-28 px-5 pt-20 pb-10 text-center">
                            <h1 className="lg:text-[52px] text-[38px] md:text-[45px] font-inter !font-[700]">
                                Fast, secure, and easy-to-use
                            </h1>
                            <p className="text-[16px] mt-2 font-inter opacity-[80%] text-[white]">
                                Try Resy Sniper today and never miss a reservation again!
                            </p>
                            <button
                                type="button"
                                className="bg-[#EA3A4B] sm:w-auto w-[100%] text-[16px] !font-[500] text-white py-[16px] px-[28px] mt-8 rounded-md"
                                onClick={() => navigate("/sign-up")}
                            >
                                Get started now
                            </button>
                        </div>
                        <div className="lg:w-[65%] xl:w-[50%] w-[100%] m-auto">
                            <img src={Image} className="sm:w-[100%] w-[100%]"></img>
                        </div>
                    </div>
                    <div className="bg-[#000000]">
                        <div className="sm:grid sm:grid-cols-[30%,30%,40%] md:grid-cols-[30%,30%,40%] lg:grid-cols-[30%,30%,40%] xl:grid-cols-[30%,40%,30%] block border-b border-[gray] lg:mx-[121px] md:mx-[10px] mx-3 sm:py-[60px] text-white py-12">
                            <div>
                                <img src={logo}></img>
                                <div className="flex gap-3 mt-5">
                                    <a href="https://www.instagram.com/resysniper/" target="_blank"><img src={Instagram}></img></a>
                                    <img src={Twitter}></img>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 mt-8 sm:mt-auto">
                                <div>
                                    <ul>
                                        <li className="font-inter text-[16px] !font-[600]">
                                            <p>About</p>
                                        </li>
                                        <li className="my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter">
                                            <Link to={"#"} onClick={() => scrollToElement('features')}>Features</Link>
                                        </li>
                                        <li className="my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter">
                                            <Link to={"#"} onClick={() => scrollToElement('how-it-works')}>How it works</Link>
                                        </li>
                                        <li className="my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter">
                                            <Link to={"#"} onClick={() => scrollToElement('pricing')}>Pricing</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className="font-inter text-[16px] !font-[600]">
                                            <p>Help</p>
                                        </li>
                                        <li className="my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter">
                                            <Link to={"#"} onClick={() => scrollToElement('faq')}>FAQ’s</Link>
                                        </li>
                                        <li className="my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter">
                                            <Link to={"mailto:support@resysniper.com"}>Support</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className="font-inter text-[16px] !font-[600]">
                                            <p>Legal</p>
                                        </li>
                                        <li className="my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter">
                                            <Link to={"#"}>Privacy</Link>
                                        </li>
                                        <li className="my-3 text-[14px] !font-[500] text-[#D0D1D1] font-inter">
                                            <Link to={"#"}>Terms</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="mt-8 sm:mt-0">
                                <h1 className="font-inter">Subscribe to Our Newsletter</h1>
                                <div className="flex mt-5">
                                    <input
                                        type="text"
                                        placeholder="Your Email"
                                        className="px-[12px] lg:w-[310px] md:w-auto w-[100%] font-inter bg-[#303538] rounded-l-md text-[14px] text-[#D0D1D1]"
                                    ></input>
                                    <button
                                        type="button"
                                        className="px-6 py-3 bg-[#EA3A4B] font-inter rounded-r-md text-sm text-white"
                                        onClick={() => navigate("/sign-up")}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div> */}
                        </div>
                        <div className="sm:py-16 py-8 text-center px-10 text-[#D0D1D1] text-[12px]">
                            <p className="font-inter">
                                © 2024 Resy Sniper - All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewPage;
