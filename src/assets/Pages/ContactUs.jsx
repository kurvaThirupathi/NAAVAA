import React from "react";
import carousel4 from "../../assets/images/carouse_4.jpg";
import { useFormik,Formik,Form,Field } from "formik";
import { signupSchema } from "../../Schemas";
const initialValues ={
    name:"",
    email:"",
    message:""

}
function ContactUS(){
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
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 grid-cols-1">
                            <div className="lg:mb-0 mb-10">
                                <div className="group w-full h-full">
                                    <div className="relative h-full mb-2">
                                        {/* <img src="https://pagedone.io/asset/uploads/1696488602.png" alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"/> */}
                                        {/* map starts here */}
                                            <div className="mapouter"><div className="gmap_canvas">
                                                <iframe className="gmap_iframe" width="600" height="450" src="https://www.google.com/maps?q=Nagarjuna+sagar+hill+colony&amp;z=14&amp;t=m&amp;hl=en&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                                <a href="https://www.weather-info.com/">weather-info.com</a>
                                                </div>
                                                
                                            </div>
                                        {/* map ends here */}
                                    
                                        <div className="absolute bottom-0 w-full p-5 hidden">
                                            <div className="bg-white rounded-lg p-6 block">
                                                <a href="javascript:;" className="flex items-center mb-3">
                                                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#012951" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                    <h5 className="text-black text-sm font-normal leading-6 ml-5">+91 95050 60683</h5>
                                                </a>
                                                <a href="mailto:contact@naavaa.org"  className="flex items-center mb-3">
                                                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#012951" stroke-width="2" stroke-linecap="round"/>
                                                    </svg>
                                                    <h5 className="text-black text-sm font-normal leading-6 ml-5">contact@naavaa.org</h5>
                                                </a>
                                                <a href="javascript:;" className="flex items-center">
                                                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#012951" stroke-width="2"/>
                                                        <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#012951" stroke-width="2"/>
                                                    </svg>
                                                    <h5 className="text-black text-sm font-normal leading-6 ml-5">Near Indian Bank, Gachibowli Hdyerabad - 500032</h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 lg:p-5 lg:rounded-r-2xl rounded-2xl">
                                <h2 className="text-gray-600 text-2xl md:text-3xl font-semibold leading-10 mb-6">Send Us A Message</h2>
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
                    </div>
                </div>
                                            
            </div>
            </section>
        </>
    )
}
export default ContactUS