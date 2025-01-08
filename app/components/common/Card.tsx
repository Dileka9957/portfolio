"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

const projects = [
  {
    title: "Foodies App",
    description: "A vibrant social media platform where food enthusiasts share reviews, culinary experiences.",
    image: '/images/projects/Gourmet Trio of Tacos on Blue Plate.jpeg',
    technologies: "React , Spring Boot , MySQL , JWT , MUI",
    githubLink: "https://github.com/Dileka9957/Foodies"
  },
  {
    title: "SmartMarks",
    description: "A web application for managing exams, grades tracking academic performance and reporting.",
    image: '/images/projects/Business Analytics and Reporting.jpeg',
    technologies: "React , EmailJS , Express.JS , MongoDB",
    githubLink: "https://github.com/Dileka9957/SmartMarks"
  },
  {
    title: "Task Management App",
    description: "Stay organized with our intuitive task management and collaboration platform.",
    image:'/images/projects/Colorful Sticky Notes Brainstorming.jpeg',
    technologies: "Typescript , NextJS , NestJs , Redux",
    githubLink: "#"
  },
  {
    title: "Moviemeter",
    description: "Platform for rating and reviewing movies and TV series.",
    image:'/images/projects/Man Watching Screens.jpeg',
    technologies: "Angular , Bootstrap , Firebase",
    githubLink: "https://github.com/Dileka9957/MovieMeter"
  },
  {
    title: "Facial Tracker",
    description: "Advanced application that monitors emotional well-being and facial movement patterns.",
    image: '/images/projects/Human-Digital Fusion.jpeg',
    technologies: "React Native , Google ML kit , Node.js",
    githubLink: "https://github.com/Dileka9957/Research"
  }
];

export default function CardsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-full h-auto rounded-xl p-3 sm:p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height={1000}
                width={1000}
                className="h-60 w-full max-w-[385px] object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4 sm:mt-10">
              <CardItem
                translateZ={20}
                as="text"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {project.technologies} 
                {/* → */}
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                <Link href={project.githubLink}> GitHub</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}