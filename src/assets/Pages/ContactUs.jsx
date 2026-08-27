import React, {useEffect, useState} from "react";
import carousel4 from "../../assets/images/carouse_4.jpg";
import { useFormik,Formik,Form,Field } from "formik";
import { signupSchema } from "../../Schemas";
import governingData from "../Data/governing.json"


const initialValues ={
    name:"",
    email:"",
    message:""

}
function ContactUS(){
    const [govern,setGovern]=useState([]);
    useEffect(()=>{
        setGovern(governingData);
    },[])
    const [showTooltip,setShowTooltip]= useState(false);
    // const {values,handleBlur,handleChange,handleSubmit,errors,touched}=useFormik({
    //     initialValues,
    //     validationSchema:signupSchema,
    //     onSubmit:(values,actions)=>{
    //         console.log(values);
    //         actions.resetForm();

    //     }
        
    // })
    const onSubmit=(values,actions)=>{
            console.log(values);
            actions.resetForm();
        }
    //console.log(errors)
    return(
        <>
            <section className="">
            <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage:
            `url(${carousel4})`,
            }}>
                <div className="absolute inset-0 bg-[#062c4b]/80" />

                <div className=" relative z-10 px-7 py-4 text-center" >

                    <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Contact Us</h1>

                </div>

            </div>
            <div className="bg-[#f5f5f5] pt-8 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
                <div className="py-1">
                    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                        <div className="flex md:flex-row flex-col mb-5 gap-5">
                            <div className="lg:mb-0 mb-10 w-3/5">
                                <h2 className="text-gray-600 text-xl md:text-2xl font-semibold leading-10 mb-6">The New Governing Body for April 2026 to Mar 2028 </h2>
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                    {/*  */}
                                    {
                                        govern.map((governView)=>{
                                            return (
                                                <div key={governView.id} className="relative flex flex-col items-start gap-5 overflow-hidden bg-gradient-to-r from-[rgb(66,78,124)] to-[rgb(173,166,197)] p-5 before:absolute before:right-[-25%] before:top-[-25%] before:z-[1] before:h-[150px] before:w-[150px] before:rounded-full before:bg-gradient-to-r before:from-[rgb(124,114,157)] before:to-[rgb(208,195,255)] before:content-[''] rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                    
                                        <p className="z-[2] text-[20px] font-semibold text-[rgb(241,241,241)]">
                                        {governView.name} ({governView.year})
                                        </p>
                                        <p className="z-[2] text-[14px] font-medium text-[rgb(241,241,241)]">{governView.designation}</p>

                                    </div>
                                            )
                                        })
                                    }
                                    
                                    {/*  */}

                                </div>
                            </div>

                            <div className="px-5 lg:px-5 lg:rounded-r-2xl rounded-2xl w-2/5">
                                
                                <div className="text-gray-600 text-xl md:text-2xl font-semibold leading-10 mb-6 flex gap-2 items-center  md:flex-row flex-col">
                                    <h2>Send Us A Message</h2>
                                    <div>
                                        
                                        <button type="button" onMouseEnter={()=>setShowTooltip(true)} onMouseLeave={()=>setShowTooltip(false)} className="">
                                            <svg fill="#a5a1a1" width="13" height="13" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 416.979 416.979" xml:space="preserve" stroke="#a5a1a1" >
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                                <g id="SVGRepo_iconCarrier"> 
                                                <g> 
                                                    <path d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85 c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786 c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576 c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765 c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"/> 
                                                    </g> 
                                                    </g>

                                            </svg>
                                        </button>
                                        {showTooltip && (
                                            <div  role="tooltip" className="ml-2 absolute z-10  inline-block px-3 py-2 text-sm font-medium text-gray-800 transition-opacity duration-300 bg-gray-300 rounded-md shadow-xs opacity-100 tooltip">
                                            This feature is not available 
                                            <div className="tooltip-arrow" data-popper-arrow></div>
                                        </div>

                                        )}
                                        
                                    </div> 
                                </div>
                                <Formik initialValues={initialValues} validationSchema={signupSchema} onSumbit={onSubmit}>
                                    {
                                        ({errors,touched}) =>(

                                        
                                    <Form className="signUp_form">
                                        <div className="mb-3">
                                            {/* <input name="name" type="text" className="w-full h-12 text-gray-600 placeholder-gray-500  shadow-sm bg-transparent text-base font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4  bg-white" placeholder="Name" value={values.name} onBlur={handleBlur} onChange={handleChange} /> */}
                                            <Field name="name" type="text" placeholder="Name" className="w-full h-12 text-gray-600 placeholder-gray-500  shadow-sm  text-[14px] font-normal leading-7 rounded-md border border-gray-200 focus:outline-none px-3 py-2 bg-white" />
                                            <div>
                                                {errors.name && touched.name &&  <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            {/* <input name="email" type="text" className="w-full h-12 text-gray-600 placeholder-gray-500 shadow-sm bg-transparent text-base font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 bg-white" placeholder="Email" value={values.email} onBlur={handleBlur} onChange={handleChange}/> */}
                                            <Field  name="email" type="email" className="w-full h-12 text-gray-600 placeholder-gray-500 shadow-sm  text-[14px] font-normal leading-7 rounded-md border border-gray-200 focus:outline-none px-3 py-2 bg-white" placeholder="Email"/>
                                            <div>
                                                {errors.email && touched.email &&  <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                                            </div>
                                        </div>
                                        <div>
                                            {/* <textarea name="message" rows="3" className="w-full  text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 bg-white" placeholder="Message" value={values.message} onBlur={handleBlur} onChange={handleChange}/> */}
                                            <Field type="text" as="textarea" name="message" rows="3" className="w-full  text-gray-600 placeholder-gray-400  text-[14px] shadow-sm font-normal leading-7 rounded-md border border-gray-200 focus:outline-none px-3 py-2 bg-white" placeholder="Message"/>
                                            <div>
                                                {errors.message && touched.message &&  <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                                            </div>
                                        </div>
                                    
                                    <button type="submit" className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-[#012951] bg-[#012951] shadow-sm mt-4">Send</button>
                                    </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-full">
                                    <div className="relative h-full w-full mb-2">
                                       
                                            <div className="mapouter"><div className="gmap_canvas">
                                                <iframe className="gmap_iframe" width="100%" height="450" src="https://www.google.com/maps?q=Nagarjuna+sagar+hill+colony&amp;z=14&amp;t=m&amp;hl=en&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                                <a href="https://www.weather-info.com/">weather-info.com</a>
                                                </div>
                                                
                                            </div>
                                        {/* map ends here */}
                                    
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                                            
            </div>
            </section>
        </>
    )
}
export default ContactUS