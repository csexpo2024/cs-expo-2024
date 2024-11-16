import { projects } from "@/constants/projects";

const HallOfFame = () => {

  

  return (
    <div className="bg-[#110101] min-h-screen">
      <section className="flex flex-col justify-center items-center py-8">
          <h1 className="text-4xl md:text-6xl text-left text-yellow-500 font-heading-italic p-10">
            Hall of Fame
          </h1>
      </section>

      <section className="flex flex-col"> 
        
        <div className="flex flex-col bg-black"> 
          <div className="">
            <h1 className="text-3xl font-bold font-heading ml-[130px] pt-10"> 
              BEST THESIS OVERALL 
            </h1>
          </div>

          <div className="flex flex-row justify-center gap-10 p-10"> 
            <div className="group flex flex-col bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl items-center 
            hover:border-red-600 transition-colors duration-300"> 
              <div className="bg-slate-800 h-[75%] w-[90%] rounded-xl mt-5 group-hover:h-[65%] transition-all duration-200"> </div>
              <div className="items-center"> <h1 className="text-red-600 font-bold font-heading mt-5"> GROUP NAME </h1> </div>
              <div className="items-center hidden group-hover:block transition-all duration-300"> 
                <h5 className="text-white mt-5 ml-3 mb-3 align-center"> 
                  {projects["agila"]["research_title"]};
                </h5> 
              </div>
            </div>
            <div className="group flex flex-col bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl items-center 
            hover:border-red-600 transition-colors duration-300"> 
              <div className="bg-slate-800 h-[75%] w-[90%] rounded-xl mt-5 group-hover:h-[65%] transition-all duration-200"> </div>
              <div className="items-center"> <h1 className="text-red-600 font-bold font-heading mt-5"> GROUP NAME </h1> </div>
              <div className="items-center hidden group-hover:block transition-all duration-300"> 
                <h5 className="text-white mt-5 ml-3 mb-3 align-center"> 
                {projects["agila"]["research_title"]};
                </h5> 
              </div>
            </div>
            <div className="group flex flex-col bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl items-center 
            hover:border-red-600 transition-colors duration-300"> 
              <div className="bg-slate-800 h-[75%] w-[90%] rounded-xl mt-5 group-hover:h-[65%] transition-all duration-200"> </div>
              <div className="items-center"> <h1 className="text-red-600 font-bold font-heading mt-5"> GROUP NAME </h1> </div>
              <div className="items-center hidden group-hover:block transition-all duration-300"> 
                <h5 className="text-white mt-5 ml-3 mb-3 align-center"> 
                {projects["agila"]["research_title"]}; 
                </h5> 
              </div>
            </div>
          </div>

          <div className="flex flex-row content-start p-3 gap-[85px]"> 
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 1st </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 2nd </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 3rd </h1> 
          </div>
        </div> 

        <div className="flex flex-col bg-black">
          <div className="">
            <h1 className="text-3xl font-bold font-heading ml-[130px] pt-10"> MOST INNOVATIVE </h1>
          </div>

          <div className="flex flex-row justify-center gap-10 p-10"> 
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
          </div>

          <div className="flex flex-row content-start p-3 gap-[85px]"> 
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 1st </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 2nd </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 3rd </h1> 
          </div>
          
        </div>

        <div className="flex flex-col  bg-black"> 
          <div className="">
            <h1 className="text-3xl font-bold font-heading ml-[130px] pt-10"> BEST PRESENTER </h1>
          </div>

          <div className="flex flex-row justify-center gap-10 p-10"> 
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
          </div>

          <div className="flex flex-row content-start p-3 gap-[85px]"> 
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 1st </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 2nd </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 3rd </h1> 
          </div>

        </div> 

        <div className="flex flex-col bg-black">
          <div className="">
            <h1 className="text-3xl font-bold font-heading ml-[130px] pt-10"> BEST THESIS IN EACH CATEGORY</h1>
          </div>

          <div className="flex flex-row justify-center gap-10 p-10"> 
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
          </div>
          
          <div className="flex flex-row content-start p-3 gap-[85px]"> 
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 1st </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 2nd </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 3rd </h1> 
          </div>

        </div> 

        <div className="flex flex-col  bg-black"> 
          <div className="">
            <h1 className="text-3xl font-bold font-heading ml-[130px] pt-10"> BEST AVP </h1>
          </div>

          <div className="flex flex-row justify-center gap-10 p-10"> 
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
          </div>

          <div className="flex flex-row content-start p-3 gap-[85px]"> 
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 1st </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 2nd </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 3rd </h1> 
          </div>

        </div>

        <div className="flex flex-col bg-black">
          <div className="">
            <h1 className="text-3xl font-bold font-heading ml-[130px] pt-10"> BEST POSTER</h1>
          </div>

          <div className="flex flex-row justify-center gap-10 p-10"> 
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
          </div>

          <div className="flex flex-row content-start p-3 gap-[85px]"> 
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 1st </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 2nd </h1>
            <h1 className="text-3xl font-bold font-heading ml-[275px]"> 3rd </h1> 
          </div>
          
        </div>

        <div className="flex flex-col  bg-black"> 
          <div className="">
            <h1 className="text-3xl font-bold text-center font-heading pt-10"> BEST MENTOR </h1>
          </div>

          <div className="flex flex-row justify-center gap-10 p-10"> 
            <div className="bg-[#110101] border-red-950 border-2 h-[450px] w-[400px] rounded-xl
            hover:border-red-600 transition-colors duration-300"> </div>
        
          </div>

        </div>  
        
      </section>
    </div>
  );
};

export default HallOfFame;
