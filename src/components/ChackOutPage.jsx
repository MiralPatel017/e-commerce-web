import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import Slider from "react-slick";
import ProductList from "./ProductList.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const ChackOutPage = ({ darkMode }) => {

    const [sliderPosition, setSliderPosition] = React.useState(0); // to track the current slide position
    const sliderRef = React.useRef(null);
    const product = ProductList.products

    // chackbox
    const [isChacked1, setIsChacked1] = React.useState(true)
    const [isChacked2, setIsChacked2] = React.useState(true)
    const [isChacked3, setIsChacked3] = React.useState(true)

    // input field


    // Custom Next Arrow
    const CustomNextArrow = ({ onClick }) => (
        <div
            className={darkMode ? "absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-black rounded-full p-2" : "absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2"}
            onClick={onClick}
        >
            <FaChevronRight size={20} />
        </div>
    );

    // Custom Prev Arrow
    const CustomPrevArrow = ({ onClick }) => (
        <div
            className={darkMode ? "absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-black rounded-full p-2" : "absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2"}
            onClick={onClick}
        >
            <FaChevronLeft size={20} />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1030, // Tablet
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 760, // Mobile
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const renderStars = (rating) => {
        const totalStars = 5; // Total stars in the rating system
        const filledStars = '★'.repeat(rating); // Filled stars based on the rating
        const emptyStars = '☆'.repeat(totalStars - rating); // Remaining empty stars
        return filledStars + emptyStars; // Combine filled and empty stars
    };

    const [showInput, setShowInput] = React.useState(false);


    const states = [
        "Choose a State",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Maharashtra",
        "Madhya Pradesh",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        " Tripura",
        " Telangan",
        "Uttar Pradesh",
        " Uttarakhand",
        "West Bengal",
        "Andaman & Nicobar",
        " Chandigarh",
        " Dadra & Nagar Haveli and Daman & Diu",
        "Delhi",
        " Jammu & Kashmir",
        "Ladakh",
        "Lakshadweep",
        "Puducherry",
    ]

    const navigate = useNavigate()

    const handlePayment = () => {
        navigate("/PaymentMethodPage");
    };


    return (
        <div className={darkMode ? 'bg-black text-white duration-300' : 'bg-white text-black duration-300'}>
            <div className={darkMode ? 'mt-[60px] pt-[10px]' : 'mt-[60px] pt-[10px]'}>


                {/* main screen view */}
                <div className='container max-lg:hidden'>
                    {/* page Title */}
                    <div className='text-3xl uppercase font-bold mt-5'>
                        Checkout
                    </div>

                    {/* page navigation */}
                    <div className="flex space-x-7 mt-5 uppercase text-[18px]">
                        <p className="font-bold text-center w-[80px]"> <Link to="/AddToCartPage"> Cart </Link> <hr className={darkMode ? 'border-[1.58px] mt-[5px] border-white justify-center w-[100%]' : 'border-[1.58px] mt-[5px] border-black justify-center w-[100%]'} /></p>
                        <p className="font-bold text-center w-[140px]"> <Link to="/ChackOutPage"> Shopping </Link> <hr className={darkMode ? 'border-[1.58px] mt-[5px] border-white justify-center w-[100%]' : 'border-[1.58px] mt-[5px] border-black justify-center w-[100%]'} /></p>
                        <p className="text-[#a5a5a5] font-bold text-center w-[130px] cursor-not-allowed" disabled> Payment <hr className='border-[1.58px] mt-[5px] border-[#a5a5a5] justify-center w-[100%]' /></p>
                        <p className="text-[#a5a5a5] font-bold text-center w-[140px] cursor-not-allowed"><Link to="/OrderSummaryPage"> Summary </Link> <hr className='border-[1.58px] mt-[5px] border-[#a5a5a5] justify-center w-[100%]' /></p>
                    </div>

                    {/* Addresses and order details */}
                    <div className='flex mt-5 max-md:flex-wrap lg:space-x-5'>

                        {/* addresses */}
                        <div className="w-[70%] mt-5">

                            {/* addresses title */}
                            <div className={darkMode ? 'text-[#ededed] text-lg p-5 bg-[#252525]'
                                : 'text-black text-lg p-5 bg-[#ededed]'}>
                                1. ADDRESSES
                            </div>

                            {/* addresses form list */}
                            <form className={darkMode ? 'border-[2px] border-[#adadad] p-5 mt-5' : 'border-[2px] p-5 mt-5'}>
                                {/* Shipping Address title*/}
                                <div className=' text-lg'>
                                    Enter a Shipping Address
                                </div>

                                {/* Shipping Address form */}
                                <div>

                                    {/* first and last name */}
                                    <div className="mt-7">
                                        <div className="w-full flex space-x-5">

                                            {/* first name */}
                                            <div className='w-[60%] space-y-3'>
                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                    First Name {" "} <span className="text-red-500">*</span>
                                                </label>
                                                <input type="text" placeholder="First Name"
                                                    className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                            </div>

                                            {/* last name */}
                                            <div className='w-[60%] space-y-3'>
                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                    Last Name {" "} <span className="text-red-500">*</span>
                                                </label>
                                                <input type="text" placeholder="Last Name"
                                                    className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* pin code */}
                                    <div className="mt-7">
                                        <div className='space-y-3'>

                                            <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                Pin Code {" "} <span className="text-red-500">*</span>
                                            </label>
                                            <input type="text" placeholder="Pin Code"
                                                className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                    : 'bg-white w-full border p-3'} />
                                        </div>
                                    </div>

                                    {/* address line 1 */}
                                    <div className="mt-7">
                                        <div className='space-y-3'>
                                            <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                Address Line 1 {" "} <span className="text-red-500">*</span>
                                            </label>
                                            <input type="text" placeholder="Address Line 1"
                                                className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                    : 'bg-white w-full border p-3'} />
                                        </div>
                                    </div>

                                    {/* address line 2 */}
                                    <div className="mt-7">
                                        <div className='space-y-3'>
                                            <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                Address Line 2
                                            </label>
                                            <input type="text" placeholder="Address Line 2"
                                                className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                    : 'bg-white w-full border p-3'} />
                                        </div>
                                    </div>

                                    {/* city */}
                                    <div className="mt-7">
                                        <div className='space-y-3'>
                                            <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                City {" "} <span className="text-red-500">*</span>
                                            </label>
                                            <input type="text" placeholder="City"
                                                className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                    : 'bg-white w-full border p-3'} />
                                        </div>
                                    </div>

                                    {/* state and Country */}
                                    <div className='flex mt-7 space-x-5'>

                                        {/* state */}
                                        <div className='w-[50%] space-y-3'>
                                            <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                State {" "} <span className="text-red-500">*</span>
                                            </label>

                                            <select id="state" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full"
                                                : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full "}>
                                                {
                                                    states.map((state, index) => (
                                                        <option key={index} value={state} className={darkMode ? 'bg-[#292929] text-[#ededed]' : 'text-[#292929] bg-[#ededed]'}>{state}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        {/* country */}
                                        <div className='w-[50%] space-y-3'>
                                            <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                Country {" "} <span className="text-red-500">*</span>
                                            </label>
                                            <select id="countries" className={darkMode ? "text-[#ededed] bg-[#292929] p-3 w-full cursor-not-allowed" : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full cursor-not-allowed"} disabled>
                                                <option selected value="india" className='px-5'>India</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Info section */}
                                <div className='mt-7'>
                                    {/* title */}
                                    <div>
                                        Enter Contact Info
                                    </div>

                                    {/* Contact Info form */}
                                    <div className='flex mt-7 space-x-5'>
                                        {/* email */}
                                        <div className='w-[50%] space-y-3'>
                                            <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                : "block text-sm font-medium text-gray-700"} htmlFor="email">
                                                Email {" "} <span className="text-red-500">*</span>
                                            </label>
                                            {/* input */}
                                            <input type="email" id="email" placeholder="Enter Email" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full"
                                                : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full"} />
                                        </div>

                                        {/* phone number */}
                                        <div className='w-[50%] space-y-3'>
                                            <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                : "block text-sm font-medium text-gray-700"} htmlFor="email">
                                                Phone Number {" "} <span className="text-red-500">*</span>
                                            </label>
                                            {/* input */}
                                            <input type="number" id="email" placeholder="Enter Phone Number" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full"
                                                : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full"} />
                                        </div>
                                    </div>

                                    {/* order updates sms and mail */}
                                    <div className='flex mt-7 space-x-5'>
                                        <div className=''>
                                            {/* Sms */}
                                            <div className='flex space-x-3 cursor-pointer'>
                                                <input id="sms" type="checkbox"
                                                    className={darkMode ? 'accent-[#ededed] duration-300 cursor-pointer'
                                                        : 'accent-[#292929] duration-300 cursor-pointer'}
                                                    checked={isChacked1}
                                                    onChange={() => setIsChacked1(!isChacked1)}
                                                />

                                                <label className="ml-2 text-sm font-medium cursor-pointer" htmlFor="sms">
                                                    Please send me SMS shipping updates about my order
                                                </label>
                                            </div>

                                            {/* mail */}
                                            <div className='flex space-x-3'>
                                                <input id="sms" type="checkbox"
                                                    className={darkMode ? 'accent-[#ededed] duration-300 cursor-pointer'
                                                        : 'accent-[#292929] chacked:bg-black duration-300 cursor-pointer'}
                                                    checked={isChacked2}
                                                    onChange={() => setIsChacked2(!isChacked2)}
                                                />
                                                <label className="ml-2 text-sm font-medium" htmlFor="sms">
                                                    Please add me to the PUMA email list
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Shipping Method */}
                                <div className='mt-7'>
                                    <div className='text-lg'>
                                        Select a Shipping Method
                                    </div>
                                    <div>
                                        <div className='space-x-2 mt-5 font-bold'>
                                            <input type="radio" className={darkMode ? 'accent-[#ededed]' : 'accent-[#292929]'} checked />
                                            <label htmlFor="standard">Standard</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Billing Address */}
                                <div className='mt-7'>

                                    {/* title */}
                                    <div className='text-lg'>
                                        Enter a Billing Address
                                    </div>

                                    {/* chack box */}
                                    <div className='space-x-3 mt-5'>
                                        <input type="checkbox"
                                            className={darkMode ? 'accent-[#ededed]' : ' accent-[#292929]'}
                                            checked={isChacked3}
                                            onChange={() => setIsChacked3(!isChacked3)} />
                                        <label htmlFor="">Billing and Shipping details are the same</label>
                                    </div>

                                    {/* when checked then open the billing address form*/}
                                    {!isChacked3 && (
                                        <div>
                                            {/* address form */}
                                            <div>

                                                {/* first and last name */}
                                                <div className="mt-7">
                                                    <div className="w-full flex space-x-5">
                                                        <div className='w-[60%] space-y-3'>
                                                            <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                                First Name {" "} <span className="text-red-500">*</span>
                                                            </label>
                                                            <input type="text" placeholder="First Name"
                                                                className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                                        </div>
                                                        <div className='w-[60%] space-y-3'>
                                                            <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                                Last Name {" "} <span className="text-red-500">*</span>
                                                            </label>
                                                            <input type="text" placeholder="Last Name"
                                                                className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* pin code */}
                                                <div className="mt-7">
                                                    <div className='space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                            Pin Code {" "} <span className="text-red-500">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Pin Code"
                                                            className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                : 'bg-white w-full border p-3'} />
                                                    </div>
                                                </div>

                                                {/* address line 1 */}
                                                <div className="mt-7">
                                                    <div className='space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                            Address Line 1 {" "} <span className="text-red-500">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Address Line 1"
                                                            className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                : 'bg-white w-full border p-3'} />
                                                    </div>
                                                </div>

                                                {/* address line 2 */}
                                                <div className="mt-7">
                                                    <div className='space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                            Address Line 2
                                                        </label>
                                                        <input type="text" placeholder="Address Line 2"
                                                            className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                : 'bg-white w-full border p-3'} />
                                                    </div>
                                                </div>

                                                {/* city */}
                                                <div className="mt-7">
                                                    <div className='space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                            City {" "} <span className="text-red-500">*</span>
                                                        </label>
                                                        <input type="text" placeholder="City"
                                                            className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                : 'bg-white w-full border p-3'} />
                                                    </div>
                                                </div>

                                                {/* state and Country */}
                                                <div className='flex mt-7 space-x-5'>
                                                    {/* state */}
                                                    <div className='w-[50%] space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                            State {" "} <span className="text-red-500">*</span>
                                                        </label>
                                                        <select id="state" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full" : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full"}>
                                                            {
                                                                states.map((state, index) => (
                                                                    <option key={index} value={state}>{state}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>

                                                    {/* country */}
                                                    <div className='w-[50%] space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                            Country {" "} <span className="text-red-500">*</span>
                                                        </label>
                                                        <select id="countries" className={darkMode ? "text-[#ededed] bg-[#292929] p-3 w-full cursor-not-allowed" : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full cursor-not-allowed"} disabled>
                                                            <option selected value="india" className='px-5'>India</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* submit button */}
                                <div className='mt-7'>
                                    <button type='submit' className={darkMode ? 'bg-[#ededed] text-[#292929] text-lg font-semibold duration-200 px-[40px] py-[12px]'
                                        : 'bg-[#292929] text-[#ededed] text-lg font-semibold duration-200 px-[40px] py-[12px]'}
                                        onClick={handlePayment}>
                                        Continue to payment method
                                    </button>
                                </div>

                                {/*  Terms and Conditions */}
                                <div className='mt-7 w-[40%]'>
                                    <p className='text-[12px]'>
                                        By continuing, I confirm that I have read and accept the {" "}
                                        <span className='cursor-pointer underline'>Terms and Conditionsand </span>
                                        the <span className='cursor-pointer underline'> Privacy Policy </span>.
                                    </p>
                                </div>
                            </form>

                            {/* Pay title */}
                            <div className={darkMode ? 'text-[#ededed] text-lg p-5 bg-[#252525] mt-5' : 'text-black text-lg p-5 bg-[#ededed] mt-5'}>
                                2. Pay
                            </div>

                        </div>

                        {/* product summary and details */}
                        <div className="w-[30%] mt-5">
                            <div className={darkMode ? 'text-[#ededed] text-lg p-5 bg-[#252525]' : 'text-black text-lg p-[20px] bg-[#ededed]'}>
                                OEDER DETAILS <span className='font-normal text-[17px]'> {" ❲ 3 ❳ "} </span>
                            </div>

                            <div className='mt-5'>
                                <div className={darkMode ? 'w-full max-h-[800px] overflow-y-auto pr-3 space-y-5 dark-custom-scrollbar'
                                    : 'w-full max-h-[800px] overflow-y-auto pr-3 space-y-5 custom-scrollbar'}>

                                    {/* first product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* seconnd product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* third product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* forth product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* fifth product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* scroll bar style */}
                                <style jsx>{`
                                                /* light Custom Scrollbar */
                                            .custom-scrollbar::-webkit-scrollbar {
                                                width: 8px;
                                                background-color: #ededed;
                                                border-radius: 10px;
                                                }
                                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                                background-color: #292929;
                                                border-radius: 10px;
                                                }
                                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                                background-color: #292929;
                                                border-radius: 10px;
                                                }
                                    
                                                /* dark Custom Scrollbar */
                                                .dark-custom-scrollbar::-webkit-scrollbar {
                                                width: 8px;
                                                background-color: #292929;
                                                border-radius: 10px;
                                                }
                                                .dark-custom-scrollbar::-webkit-scrollbar-thumb {
                                                background-color: #ededed;
                                                border-radius: 10px;
                                                }
                                                .dark-custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                                background-color: #ededed;
                                                }
                                            `
                                }
                                </style>

                                {/* order summary */}
                                <div className={darkMode ? 'bg-[#292929] text-white font-bold w-full duration-[200ms] mt-10'
                                    : 'bg-[#ededed] text-black font-bold w-full duration-[200ms] mt-10'}>

                                    <div className='rounded-lg p-5'>

                                        <h2 className={darkMode ? 'text-lg font-bold bg-[#292929] text-[#ededed] border-[3px] border-[#ededed] text-center py-3 rounded-lg duration-[200ms]'
                                            : ' text-lg font-bold bg-transparent text-[#292929] border-[3px] border-[#292929] text-center py-3 rounded-lg duration-[200ms]'}>Order Summary</h2>

                                        <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

                                        <div className='flex font-semibold text-base justify-between'>
                                            <p className={darkMode ? 'text-[#d0d0d0] text-sm' : 'text-[#676767] text-sm'}>Extra 10% off</p>
                                            <p className='text-[rgba(0,134,38)] text-sm'> - Price</p>
                                        </div>
                                        <div className='mt-6 font-semibold'>
                                            <div className='flex justify-between'>
                                                <p>Subtotal</p>
                                                <p>Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>Shipping Cost</p>
                                                <p>Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>Order Discount</p>
                                                <p className='text-[rgba(0,134,38)]'> - Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>GST</p>
                                                <p>Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>Total</p>
                                                <p>Price</p>
                                            </div>
                                        </div>

                                        <button className={darkMode ? 'w-full bg-[#ededed] text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75'
                                            : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}
                                            onClick={handlePayment}>
                                            Continue to payment method
                                        </button>

                                        <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

                                        {/* copun code */}
                                        <div>
                                            <button
                                                className={darkMode ? 'w-full bg-[#ededed] text-lg text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 flex justify-between px-6 btnplus'
                                                    : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 text-lg hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75 flex justify-between px-6 btnplus'}
                                                onClick={() => setShowInput(!showInput)}
                                            >
                                                Apply Cupon  <FaPlus className='my-auto text-lg plusrot duration-[50ms]' />
                                            </button>
                                            {showInput && (
                                                <div className="mt-4 flex justify-between space-x-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Cupon"
                                                        className="border p-3 text-lg rounded"
                                                    />
                                                    <button
                                                        className={darkMode ? ' bg-[#ededed] text-base my-auto text-[#292929] p-3 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 mr-2'
                                                            : ' bg-[#292929] text-white p-3 my-auto text-base hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* You may also like and product slider */}
                    <div className='mt-[50px] relative'>
                        <div className={darkMode ? 'bg-[#292929] text-white text-2xl font-bold  duration-[200ms] rounded-lg' : 'bg-[#ededed] text-black text-2xl font-bold duration-[200ms] rounded-lg'}>
                            <h2 className='text-3xl font-bold p-5 underline-offset-[11px] underline'>
                                You may also like
                            </h2>
                            <hr className={darkMode ? 'border-[#ededed] mt-[-12px] text-2xl font-bold' : 'border-[#292929] mt-[-12px] text-2xl font-bold'} />

                            <div className="custom-scrollbar-container my-4 pb-4 space-x-5">
                                {/* Product Slider */}
                                <Slider {...settings} ref={sliderRef} >
                                    {product.map((item, index) => (
                                        <div key={index} className='bgblur max-md:mt-[20px] w-[20%] rounded-[10px]'>
                                            <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] w-[80%] mx-auto border-2  border-[#F3F3F3]' alt="" />
                                            <div className='px-[10px] pt-[10px] pb-[15px] bg-[#ddd] text-black w-[80%] rounded-b-[10px] mx-auto border-2 border-[#ddd] max-md:pt-0'>
                                                <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                                                    <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                                                        {item.title}
                                                    </h1>

                                                    <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                                                        {renderStars(item.rating)}
                                                    </h1>
                                                </div>
                                                <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                                                    <h2 className='text-[#292929] font-semibold text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                                                        {"$"}{item.price}
                                                    </h2>
                                                    <button className="bg-[#292929] text-white max-md:w-[60%] text-base py-[4px] max-lg:mx-auto rounded-[10px] duration-300 font-semibold hover:bg-transparent hover:text-black border-black border-2">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                                {/* scrollbar */}
                                <div className="slider-scrollbar">
                                    <div
                                        className="slider-thumb"
                                        style={{
                                            width: `${(sliderPosition + 1) * (100 / product.length)}%`,
                                        }}
                                    />
                                </div>

                                <style jsx>
                                    {`
        /* Custom Scrollbar Styles */
        .custom-scrollbar-container {
          position: relative;
          // margin-top: 20px;
        }

        .slider-scrollbar {
          position: absolute;
          bottom: 10px;
          left: 0;
          // width: 100%;
          height: 10px;
          background-color: #f1f1f1;
          border-radius: 5px;
        }

        .slider-thumb {
          height: 100%;
          background-color: #07679D;
          border-radius: 5px;
        }

        /* Optional: Smooth scrolling */
        .custom-scrollbar-container {
          scroll-behavior: smooth;
        }

        /* Custom Arrow Styles */
        .slick-prev, .slick-next {
          position: absolute;
          // top: 50%;
          // transform: translateY(-50%);
          z-index: 1;
          background-color: #07679D;
          // color: white;
          border: none;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
        }
                            `}
                                </style>

                            </div>
                        </div>
                    </div>
                </div>


                {/* mobile and tablet screen view */}
                <div className="lg:hidden mx-3">

                    {/* page Title */}
                    <div className='text-3xl uppercase font-semibold mt-5 text-center underline underline-offset-[9px]'>
                        Checkout
                        <hr className={darkMode ? '' : 'border-[#292929] mt-[3px] w-[80%] mx-auto'} />
                    </div>

                    {/* page navigation */}
                    <div className="flex space-x-3 mt-5 uppercase text-[14px]">
                        <p className="font-bold text-center w-[70px]"> <Link to="/AddToCartPage"> Cart </Link> <hr className={darkMode ? 'border-[1.58px] mt-[5px] border-white justify-center w-[95%]' : 'border-[1.58px] mt-[5px] border-black justify-center w-[95%%]'} /></p>
                        <p className="font-bold text-center w-[130px]"> <Link to="/ChackOutPage"> Shopping </Link> <hr className={darkMode ? 'border-[1.58px] mt-[5px] border-white justify-center w-[95%%]' : 'border-[1.58px] mt-[5px] border-black justify-center w-[95%%]'} /></p>
                        <p className="text-[#a5a5a5] font-bold text-center w-[110px] cursor-not-allowed"><Link to="/PaymentMethodPage"> Payment </Link> <hr className='border-[1.58px] mt-[5px] border-[#a5a5a5] justify-center w-[95%%]' /></p>
                        <p className="text-[#a5a5a5] font-bold text-center w-[130px] cursor-not-allowed"><Link to="/OrderSummaryPage"> Summary </Link> <hr className='border-[1.58px] mt-[5px] border-[#a5a5a5] justify-center w-[95%%]' /></p>
                    </div>

                    {/* order summary */}
                    <div>
                        <div className="w-full mt-5">

                            {/* order detail title */}
                            <div className={darkMode ? 'text-[#ededed] text-lg p-5 bg-[#252525]' : 'text-black text-lg p-[20px] bg-[#ededed]'}>
                                OEDER DETAILS <span className='font-normal text-[17px]'> {" ❲ 3 ❳ "} </span>
                            </div>

                            <div className='mt-5'>
                                <div className={darkMode ? 'w-full max-h-[450px] overflow-y-auto pr-3 space-y-5 dark-custom-scrollbar'
                                    : 'w-full max-h-[450px] overflow-y-auto pr-3 space-y-5 custom-scrollbar'}>

                                    {/* first product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* seconnd product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* third product */}
                                    <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
                                        : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
                                        {/* image details, quantity and delete*/}
                                        <div className='flex space-x-5'>
                                            {/* product image */}
                                            <div className='w-[38%] mx-auto my-auto'>
                                                <img src="https://placehold.co/150x150" alt="" />
                                                {/* prodduct name */}
                                            </div>

                                            {/* product details, quantity and delete */}
                                            <div className='w-[62%]'>
                                                <div className="space-y-3">
                                                    {/* product details */}
                                                    <div className='text-[13px]'>
                                                        <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                                                        <p className=''> Colour: Product color</p>
                                                        <p className=''>Product star</p>
                                                        <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                                                    </div>

                                                    {/* Quantity and delete */}
                                                    <div className='flex'>
                                                        {/* Quantity */}
                                                        <div className="flex items-center space-x-2">
                                                            <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                                                onClick={() => { }}>
                                                                <FaMinus />
                                                            </button>
                                                            <p className="text-lg font-semibold"> 1 </p>
                                                            <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
                                                                onClick={() => { }}>
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        {/* delete */}
                                                        <div className="my-auto mx-auto">
                                                            <button className="text-red-600 text-lg"
                                                                onClick={() => { }}>
                                                                <RiDeleteBin6Line />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* scroll bar style */}
                                <style jsx>{`
                                            /* light Custom Scrollbar */
                                          .custom-scrollbar::-webkit-scrollbar {
                                            width: 8px;
                                            background-color: #ededed;
                                            border-radius: 10px;
                                            }
                                            .custom-scrollbar::-webkit-scrollbar-thumb {
                                              background-color: #292929;
                                              border-radius: 10px;
                                            }
                                            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                              background-color: #292929;
                                              border-radius: 10px;
                                            }
                                
                                            /* dark Custom Scrollbar */
                                            .dark-custom-scrollbar::-webkit-scrollbar {
                                            width: 8px;
                                            background-color: #292929;
                                            border-radius: 10px;
                                            }
                                            .dark-custom-scrollbar::-webkit-scrollbar-thumb {
                                              background-color: #ededed;
                                              border-radius: 10px;
                                            }
                                            .dark-custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                              background-color: #ededed;
                                            }
                                           `
                                }
                                </style>

                                {/* order summary */}
                                <div className={darkMode ? 'bg-[#292929] text-white font-bold w-full duration-[200ms] mt-10'
                                    : 'bg-[#ededed] text-black font-bold w-full duration-[200ms] mt-10'}>

                                    <div className='rounded-lg p-5'>

                                        <h2 className={darkMode ? 'text-lg font-bold bg-[#292929] text-[#ededed] border-[3px] border-[#ededed] text-center py-3 rounded-lg duration-[200ms]'
                                            : ' text-lg font-bold bg-transparent text-[#292929] border-[3px] border-[#292929] text-center py-3 rounded-lg duration-[200ms]'}>Order Summary</h2>

                                        <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

                                        <div className='flex font-semibold text-base justify-between'>
                                            <p className={darkMode ? 'text-[#d0d0d0] text-sm' : 'text-[#676767] text-sm'}>Extra 10% off</p>
                                            <p className='text-[rgba(0,134,38)] text-sm'> - Price</p>
                                        </div>
                                        <div className='mt-6 font-semibold'>
                                            <div className='flex justify-between'>
                                                <p>Subtotal</p>
                                                <p>Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>Shipping Cost</p>
                                                <p>Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>Order Discount</p>
                                                <p className='text-[rgba(0,134,38)]'> - Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>GST</p>
                                                <p>Price</p>
                                            </div>
                                            <div className='flex justify-between'>
                                                <p>Total</p>
                                                <p>Price</p>
                                            </div>
                                        </div>

                                        <button className={darkMode ? 'w-full bg-[#ededed] text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75'
                                            : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}
                                            onClick={handlePayment}>
                                            Continue to payment method
                                        </button>

                                        <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

                                        {/* copun code */}
                                        <div>
                                            <button
                                                className={darkMode ? 'w-full bg-[#ededed] text-lg text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 flex justify-between px-6 btnplus'
                                                    : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 text-lg hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75 flex justify-between px-6 btnplus'}
                                                onClick={() => setShowInput(!showInput)}
                                            >
                                                Apply Cupon  <FaPlus className='my-auto text-lg plusrot duration-[50ms]' />
                                            </button>
                                            {showInput && (
                                                <div className="mt-4 flex justify-between space-x-3">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Cupon"
                                                        className="border p-3 w-full text-base rounded font-semibold"
                                                    />
                                                    <button
                                                        className={darkMode ? ' bg-[#ededed] text-sm my-auto text-[#292929] p-3 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 mr-2'
                                                            : ' bg-[#292929] text-white p-3 my-auto text-sm hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* addresses */}
                                <div className="w-full mt-5">

                                    {/* addresses title */}
                                    <div className={darkMode ? 'text-[#ededed] text-lg p-5 bg-[#252525]' : 'text-black text-lg p-5 bg-[#ededed]'}>
                                        1. ADDRESSES
                                    </div>

                                    {/* addresses form list */}
                                    <form className={darkMode ? 'border-[2px] border-[#adadad] p-5 mt-5' : 'border-[2px] p-5 mt-5'}>
                                        {/* Shipping Address title*/}
                                        <div className=' text-lg'>
                                            Enter a Shipping Address
                                        </div>

                                        {/* Shipping Address form */}
                                        <div>

                                            {/* first and last name */}
                                            <div className="mt-7">
                                                <div className="w-full flex space-x-5">

                                                    {/* first name */}
                                                    <div className='w-[60%] space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                            First Name {" "} <span className="text-red-500">*</span>
                                                        </label>
                                                        <input type="text" placeholder="First Name"
                                                            className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                                    </div>

                                                    {/* last name */}
                                                    <div className='w-[60%] space-y-3'>
                                                        <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                            Last Name {" "} <span className="text-red-500">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Last Name"
                                                            className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* pin code */}
                                            <div className="mt-7">
                                                <div className='space-y-3'>

                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                        Pin Code {" "} <span className="text-red-500">*</span>
                                                    </label>
                                                    <input type="text" placeholder="Pin Code"
                                                        className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                            : 'bg-white w-full border p-3'} />
                                                </div>
                                            </div>

                                            {/* address line 1 */}
                                            <div className="mt-7">
                                                <div className='space-y-3'>
                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                        : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                        Address Line 1 {" "} <span className="text-red-500">*</span>
                                                    </label>
                                                    <input type="text" placeholder="Address Line 1"
                                                        className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                            : 'bg-white w-full border p-3'} />
                                                </div>
                                            </div>

                                            {/* address line 2 */}
                                            <div className="mt-7">
                                                <div className='space-y-3'>
                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                        : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                        Address Line 2
                                                    </label>
                                                    <input type="text" placeholder="Address Line 2"
                                                        className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                            : 'bg-white w-full border p-3'} />
                                                </div>
                                            </div>

                                            {/* city */}
                                            <div className="mt-7">
                                                <div className='space-y-3'>
                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                        : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                        City {" "} <span className="text-red-500">*</span>
                                                    </label>
                                                    <input type="text" placeholder="City"
                                                        className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                            : 'bg-white w-full border p-3'} />
                                                </div>
                                            </div>

                                            {/* state and Country */}
                                            <div className='flex mt-7 space-x-5'>

                                                {/* state */}
                                                <div className='w-[50%] space-y-3'>
                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                        : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                        State {" "} <span className="text-red-500">*</span>
                                                    </label>

                                                    <select id="state" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full"
                                                        : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full "}>
                                                        {
                                                            states.map((state, index) => (
                                                                <option key={index} value={state} className={darkMode ? 'bg-[#292929] text-[#ededed]' : 'text-[#292929] bg-[#ededed]'}>{state}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>

                                                {/* country */}
                                                <div className='w-[50%] space-y-3'>
                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                        Country {" "} <span className="text-red-500">*</span>
                                                    </label>
                                                    <select id="countries" className={darkMode ? "text-[#ededed] bg-[#292929] p-3 w-full cursor-not-allowed" : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full cursor-not-allowed"} disabled>
                                                        <option selected value="india" className='px-5'>India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Info section */}
                                        <div className='mt-7'>

                                            {/* title */}
                                            <div>
                                                Enter Contact Info
                                            </div>

                                            {/* Contact Info form */}
                                            <div className='flex mt-7 space-x-5'>
                                                {/* email */}
                                                <div className='w-[50%] space-y-3'>
                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                        : "block text-sm font-medium text-gray-700"} htmlFor="email">
                                                        Email {" "} <span className="text-red-500">*</span>
                                                    </label>
                                                    {/* input */}
                                                    <input type="email" id="email" placeholder="Enter Email" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full"
                                                        : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full"} />
                                                </div>

                                                {/* phone number */}
                                                <div className='w-[50%] space-y-3'>
                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200"
                                                        : "block text-sm font-medium text-gray-700"} htmlFor="email">
                                                        Phone Number {" "} <span className="text-red-500">*</span>
                                                    </label>
                                                    {/* input */}
                                                    <input type="number" id="email" placeholder="Enter Phone Number" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full"
                                                        : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full"} />
                                                </div>
                                            </div>

                                            {/* order updates sms and mail */}
                                            <div className='flex mt-7 space-x-5'>
                                                <div className=''>
                                                    {/* Sms */}
                                                    <div className='flex space-x-3 cursor-pointer'>
                                                        <input id="sms" type="checkbox"
                                                            className={darkMode ? 'accent-[gray] duration-300 cursor-pointer'
                                                                : 'accent-[#292929] duration-300 cursor-pointer'}
                                                            checked={isChacked1}
                                                            onChange={() => setIsChacked1(!isChacked1)}
                                                        />

                                                        <label className="ml-2 text-sm font-medium cursor-pointer" htmlFor="sms">
                                                            Please send me SMS shipping updates about my order
                                                        </label>
                                                    </div>

                                                    {/* mail */}
                                                    <div className='flex space-x-3'>
                                                        <input id="sms" type="checkbox"
                                                            className={darkMode ? 'accent-[gray] duration-300 cursor-pointer'
                                                                : 'accent-[#292929] chacked:bg-black duration-300 cursor-pointer'}
                                                            checked={isChacked2}
                                                            onChange={() => setIsChacked2(!isChacked2)}
                                                        />
                                                        <label className="ml-2 text-sm font-medium" htmlFor="sms">
                                                            Please add me to the PUMA email list
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Shipping Method */}
                                        <div className='mt-7'>
                                            <div className='text-lg'>
                                                Select a Shipping Method
                                            </div>
                                            <div>
                                                <div className='space-x-2 mt-5 font-bold'>
                                                    <input type="radio" className={darkMode ? 'accent-[gray]' : 'accent-[#292929]'} checked />
                                                    <label htmlFor="standard">Standard</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Billing Address */}
                                        <div className='mt-7'>

                                            {/* title */}
                                            <div className='text-lg'>
                                                Enter a Billing Address
                                            </div>

                                            {/* chack box */}
                                            <div className='space-x-3 mt-5'>
                                                <input type="checkbox"
                                                    className={darkMode ? 'accent-[gray]' : ' accent-[#292929]'}
                                                    checked={isChacked3}
                                                    onChange={() => setIsChacked3(!isChacked3)} />
                                                <label htmlFor="">Billing and Shipping details are the same</label>
                                            </div>

                                            {/* when checked then open the billing address form*/}
                                            {!isChacked3 && (
                                                <div>
                                                    {/* address form */}
                                                    <div>

                                                        {/* first and last name */}
                                                        <div className="mt-7">
                                                            <div className="w-full flex space-x-5">
                                                                <div className='w-[60%] space-y-3'>
                                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                                        First Name {" "} <span className="text-red-500">*</span>
                                                                    </label>
                                                                    <input type="text" placeholder="First Name"
                                                                        className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                                                </div>
                                                                <div className='w-[60%] space-y-3'>
                                                                    <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="first-name">
                                                                        Last Name {" "} <span className="text-red-500">*</span>
                                                                    </label>
                                                                    <input type="text" placeholder="Last Name"
                                                                        className={darkMode ? 'bg-[#252525] border w-full p-3' : 'bg-white w-full border p-3'} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* pin code */}
                                                        <div className="mt-7">
                                                            <div className='space-y-3'>
                                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                                    Pin Code {" "} <span className="text-red-500">*</span>
                                                                </label>
                                                                <input type="text" placeholder="Pin Code"
                                                                    className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                        : 'bg-white w-full border p-3'} />
                                                            </div>
                                                        </div>

                                                        {/* address line 1 */}
                                                        <div className="mt-7">
                                                            <div className='space-y-3'>
                                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                                    Address Line 1 {" "} <span className="text-red-500">*</span>
                                                                </label>
                                                                <input type="text" placeholder="Address Line 1"
                                                                    className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                        : 'bg-white w-full border p-3'} />
                                                            </div>
                                                        </div>

                                                        {/* address line 2 */}
                                                        <div className="mt-7">
                                                            <div className='space-y-3'>
                                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                                    Address Line 2
                                                                </label>
                                                                <input type="text" placeholder="Address Line 2"
                                                                    className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                        : 'bg-white w-full border p-3'} />
                                                            </div>
                                                        </div>

                                                        {/* city */}
                                                        <div className="mt-7">
                                                            <div className='space-y-3'>
                                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                                    City {" "} <span className="text-red-500">*</span>
                                                                </label>
                                                                <input type="text" placeholder="City"
                                                                    className={darkMode ? 'bg-[#252525] border w-full p-3'
                                                                        : 'bg-white w-full border p-3'} />
                                                            </div>
                                                        </div>

                                                        {/* state and Country */}
                                                        <div className='flex mt-7 space-x-5'>
                                                            {/* state */}
                                                            <div className='w-[50%] space-y-3'>
                                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                                    State {" "} <span className="text-red-500">*</span>
                                                                </label>
                                                                <select id="state" className={darkMode ? "text-[#ededed] bg-[#252525] p-3 w-full" : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full"}>
                                                                    {
                                                                        states.map((state, index) => (
                                                                            <option key={index} value={state}>{state}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>

                                                            {/* country */}
                                                            <div className='w-[50%] space-y-3'>
                                                                <label className={darkMode ? "block text-sm font-medium text-gray-200" : "block text-sm font-medium text-gray-700"} htmlFor="pin-code">
                                                                    Country {" "} <span className="text-red-500">*</span>
                                                                </label>
                                                                <select id="countries" className={darkMode ? "text-[#ededed] bg-[#292929] p-3 w-full cursor-not-allowed" : "bg-[#ededed] text-sm font-medium text-[#292929] p-3 w-full cursor-not-allowed"} disabled>
                                                                    <option selected value="india" className='px-5'>India</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* submit button */}
                                        <div className='mt-7'>
                                            <button type='submit' className={darkMode ? 'bg-[#ededed] text-[#292929] text-lg font-semibold duration-200 px-[40px] py-[12px]'
                                                : 'bg-[#292929] text-[#ededed] text-lg font-semibold duration-200 px-[40px] py-[12px]'}
                                                onClick={handlePayment}>
                                                Continue to payment method
                                            </button>
                                        </div>

                                        {/*  Terms and Conditions */}
                                        <div className='mt-7 w-full'>
                                            <p className='text-[12px]'>
                                                By continuing, I confirm that I have read and accept the {" "}
                                                <span className='cursor-pointer underline'>Terms and Conditionsand </span>
                                                the <span className='cursor-pointer underline'> Privacy Policy </span>.
                                            </p>
                                        </div>
                                    </form>

                                    {/* Pay title */}
                                    <div className={darkMode ? 'text-[#ededed] text-lg p-5 bg-[#252525] mt-5' : 'text-black text-lg p-5 bg-[#ededed] mt-5'}>
                                        2. Pay
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* You may also like and product slider */}
                    <div className='mt-[50px] relative'>
                        <div className={darkMode ? 'bg-[#292929] text-white text-xl font-bold  duration-[200ms] rounded-lg'
                            : 'bg-[#ededed] text-black text-xl font-bold duration-[200ms] rounded-lg'}>
                            <h2 className='text-2xl text-center font-bold p-5 underline-offset-[10px] underline '>
                                You may also like
                            </h2>
                            <hr className={darkMode ? 'border-[#ededed] mt-[-16px] text-2xl font-bold' : 'border-[#292929] mt-[-16px] text-2xl font-bold'} />

                            <div className="custom-scrollbar-container mx-1 my-4 pb-4">
                                {/* Product Slider */}
                                <Slider {...settings} ref={sliderRef}>
                                    {product.map((item, index) => (
                                        <div key={index} className='bgblur max-md:mt-[20px] rounded-[10px] w-[70%] max-md:mx-0'>
                                            <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] mx-auto border-2 w-[70%] border-[#F3F3F3]' alt="" />
                                            <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black w-[70%] rounded-b-[10px] max-md:w-[70%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                                                <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                                                    <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                                                        {item.title}
                                                    </h1>

                                                    <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                                                        {renderStars(item.rating)}
                                                    </h1>



                                                </div>
                                                <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                                                    <h2 className='text-[#668] text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                                                        {"$"}{item.price}
                                                    </h2>
                                                    <button className="bg-black text-white max-md:w-[60%] text-base max-md:font-bold max-lg:mt-1 py-2 max-lg:mx-auto rounded-[10px] duration-300 font-semibold hover:bg-white hover:text-black border-black border-2">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                                {/* scrollbar */}
                                <div className="slider-scrollbar">
                                    <div
                                        className="slider-thumb"
                                        style={{
                                            width: `${(sliderPosition + 1) * (100 / product.length)}%`,
                                        }}
                                    />
                                </div>

                                <style jsx>
                                    {`
        /* Custom Scrollbar Styles */
        .custom-scrollbar-container {
          position: relative;
          // margin-top: 20px;
        }

        .slider-scrollbar {
          position: absolute;
          bottom: 10px;
          left: 0;
          // width: 100%;
          height: 10px;
          background-color: #f1f1f1;
          border-radius: 5px;
        }

        .slider-thumb {
          height: 100%;
          background-color: #07679D;
          border-radius: 5px;
        }

        /* Optional: Smooth scrolling */
        .custom-scrollbar-container {
          scroll-behavior: smooth;
        }

        /* Custom Arrow Styles */
        .slick-prev, .slick-next {
          position: absolute;
          // top: 50%;
          // transform: translateY(-50%);
          z-index: 1;
          background-color: #07679D;
          // color: white;
          border: none;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
        }
      `}
                                </style>

                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className='mt-7'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ChackOutPage