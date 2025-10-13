import React from 'react'

const SheduleCTA:React.FC=()=> {
  return (
    <> {/* Centered Help CTA */}
 <div className="bg-[#0d0d0d] rounded-lg mt-6 mb-4 p-4 sm:px-8 w-full max-w-6xl mx-auto">
          
 <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
   
   {/* Left Content */}
   <div className="text-white font-medium text-lg text-center sm:text-left">
     
     <span className="hidden sm:inline">
       
       Excited? Us too. Let's get moving.
     </span>
     <span className="sm:hidden text-base font-semibold">
       
       Schedule a call
     </span>
   </div>
   {/* Button */}
   <button className="bg-[white] text-black px-4 sm:px-6 py-2 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 text-sm">
     
     <span className="hidden sm:inline">Schedule a call</span>
     <span className="sm:hidden text-base font-bold">Book</span>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="20"
       height="20"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className="lucide lucide-video h-4 w-4"
     >
       
       <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
       <rect x="2" y="6" width="14" height="12" rx="2"></rect>
     </svg>
   </button>
 </div>
</div>  
</>
)
}

export default SheduleCTA