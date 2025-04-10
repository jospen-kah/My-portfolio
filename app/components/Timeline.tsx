"use client"
import React from 'react';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaLaptopCode } from "react-icons/fa";

const timelineData = [
  {
    title: "Employment at Optum",
    date: "02/2022 - 05/2023",
    icon: <FaBriefcase />,
  },
  {
    title: "Bootcamp at Teksystems/Perscholas",
    date: "09/2021 - 02/2022",
    icon: <FaLaptopCode />,
  },
  {
    title: "Internship at Stairs Academy",
    date: "00/0000 - 00/0000",
    icon: <FaBriefcase />,
  },
  {
    title: "Computer Science Degree from Brooklyn College",
    date: "09/2021 - 02/2022",
    icon: <FaGraduationCap />,
  },
  {
    title: "Moving to the United States from Georgia",
    date: "2016",
    icon: <FaMapMarkerAlt />,
  },
];

function Timeline() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen p-2">
      <div className="relative w-full max-w-2xl">
        {/* Vertical Line */}

        {/* Timeline Items */}
        <div className="flex flex-col gap-8">
          {timelineData.map((item, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} items-center`}>
              {/* Content Box */}
              <div className="bg-[#053B50] text-white p-2 rounded-lg shadow-md w-64">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm">{item.date}</p>
              </div>

              {/* Connector Line */}
              <div className="w-10 flex justify-center">
                <div className="w-8 h-8 bg-[#97BCC7] text-white flex justify-center items-center rounded-full shadow-md">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Timeline
