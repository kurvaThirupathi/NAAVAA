import React, { useEffect,useState } from "react";
import carousel4 from "../../assets/images/carouse_4.jpg";
import noticeBoard from "../Data/noticeBoard.json"
function NoticeBoard() {
    //  const {notice,setNotice} = useState({});
    //  useEffect(()=>{
    //         setNotice(noticeBoard);
    //  },[])
    //  console.log(notice);
    return (
        <>
            <section className=" bg-white">
                <div className="relative h-[150px] md:h-[200px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage:
                `url(${carousel4})`,
                }}>
                    <div className="absolute inset-0 bg-[#062c4b]/80" />

                    <div className=" relative z-10 px-7 py-4 text-center" >

                        <h1 className="text-white text-2xl md:text-3xl font-semibold lg:mt-5">Notice Board</h1>


                    {/* <div
                    className="
                        mt-1
                        text-[10px]
                        text-white
                    "
                    >

                    <span className="text-emerald-400">
                        Home
                    </span>

                    <span className="mx-1">
                        /
                    </span>

                    Gallery

                    </div> */}

                    </div>

                </div>
            </section>
            <div className="bg-[#f5f5f5] py-10 relative bg-repeat bg-center bg-[url('https://themesflat.co/html/wizym/image/footer.jpg')]">
                <div className="max-w-screen-lg mx-auto">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                            {
                               noticeBoard.map((noticeBoardView)=>{
                                    return (
                                        <>
                                        <div key={noticeBoardView.id} className="flex flex-col gap-5 bg-white md:py-10 md:px-12 py-5 px-5 rounded-lg shadow-sm">
                                <div className="text-gray-800 text-xl font-medium leading-6 mb-2">{noticeBoardView.title}</div>
                                <p className="text-gray-600 text-base font-normal leading-6">
                                    {noticeBoardView.desc}
                                </p>
                                <div className="text-xs font-normal text-gray-600">
                                    - {noticeBoardView.date}
                                </div>

                            </div>
                        </>
                                    )
                               }) 
                            }
                            
                            

                        </div>
                </div>
            </div>
        </>
    )

}
export default NoticeBoard