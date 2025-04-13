"use client"
import React from 'react';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaLaptopCode } from "react-icons/fa";

const timelineData = [
  {
    title: "Internship at TIC Foundation",
    date: "08/2024 - 02/2025",
    icon: <FaBriefcase />,
  },
  {
    title: "Aspire Academy",
    date: "03/2-25 - Ongoing",
    icon: <FaLaptopCode />,
  },
  {
    title: "Volunteer at TIC Foundation",
    date: "08/2022 - 02/2023",
    icon: <FaBriefcase />,
  },
  {
    title: "Computer Engineering Degree from University of Buea",
    date: "09/2021 - 02/2022",
    icon: <FaGraduationCap />,
  },
  {
    title: "YALI RLC",
    date: "2024-2025",
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
