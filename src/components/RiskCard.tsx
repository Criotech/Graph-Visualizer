// import React from "react";

// const ContextualRisk = () => {
//   const risks = [
//     { label: "Critical", count: 2, color: "bg-red-600" },
//     { label: "High", count: 0, color: "bg-red-400" },
//     { label: "Medium", count: 0, color: "bg-yellow-400" },
//     { label: "Low", count: 0, color: "bg-green-500" },
//   ];

//   return (
//     <div className="rounded-[15px] bg-white px-8 pt-4 pb-5 shadow-md">
//       <h2 className="mb-4 text-lg font-semibold text-gray-800">Contextual Risk</h2>
//       <div className="flex items-center justify-between">
//         <ul>
//           {risks.map((risk, index) => (
//             <li
//               key={index}
//               className="flex items-center justify-between gap-2 mt-5 text-sm"
//             >
//               <span className="flex items-center">
//                 <span className={`mr-2 h-3 w-3 rounded-full ${risk.color}`} />
//                 {risk.label}
//               </span>
//               <span className="font-bold text-gray-800">{risk.count}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center justify-center">
//           <div className="relative">
//             <div className="flex items-center justify-center rounded-full border-8 border-red-600 w-[150px] h-[150px]">
//               <span className="text-2xl font-bold text-gray-800">2</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContextualRisk;

import React from "react";

const ContextualRisk = () => {
  const risks = [
    { label: "Critical", count: 2, color: "bg-red-600" },
    { label: "High", count: 0, color: "bg-red-400" },
    { label: "Medium", count: 0, color: "bg-yellow-400" },
    { label: "Low", count: 0, color: "bg-green-500" },
  ];

  return (
    <div className="rounded-[15px] bg-white px-4 sm:px-8 pt-4 pb-5 shadow-md">
      <h2 className="mb-4 text-base sm:text-lg font-semibold text-gray-800">Contextual Risk</h2>
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <ul className="w-full sm:w-auto">
          {risks.map((risk, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-2 mt-3 sm:mt-5 text-xs sm:text-sm"
            >
              <span className="flex items-center">
                <span className={`mr-2 h-2 w-2 sm:h-3 sm:w-3 rounded-full ${risk.color}`} />
                {risk.label}
              </span>
              <span className="font-bold text-gray-800">{risk.count}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0">
          <div className="relative">
            <div className="flex items-center justify-center rounded-full border-4 sm:border-8 border-red-600 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
              <span className="text-xl sm:text-2xl font-bold text-gray-800">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualRisk;
