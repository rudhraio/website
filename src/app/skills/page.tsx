'use client'

import { useState } from "react";

function Skills() {

  const [activeSkill, setActiveSkill] = useState(0);

  const SKILLS = [
    {
      title: "Languages",
      slug: "language",
      data: [{
        default: [
          "pro.py",
          "pro.js",
          "pro.ts",
          "pro.java",
          "pro.php",
          "pro.c",
          "mid.cs",
          "mid.cpp",
          "basic.lua",
          "basic.go",
          "basic.rs"
        ]
      }]
    },
    {
      title: "Web Dev",
      slug: "web-dev",
      data: [{
        front_end: [
          "pro.Angualr",
          "pro.React",
          "pro.NextJs",
          "pro.VanillaJs",
          "pro.Codeigniter",
          "mid.Laravel",
          "mid.Vue",
          "basic.Flutter"
        ]
      }, {
        back_end: [
          "pro.NodeJs",
          "pro.Django",
          "pro.Flask",
          "pro.FastAPI",
          "mid.SpringBoot"
        ]
      }]
    },
    {
      title: "DevOps",
      slug: "dev-ops",
      data: [
        {
          default: [
            "Linux",
            "DNS",
            "Scaling & Load Balancing",
            "Containerization",
            "Orchestration",
            "Automation Setup",
            "CI/CD"
          ]
        }
      ]
    },
    {
      title: "Other",
      slug: "other",
      data: [
        {
          default: [
            "UI/UX",
            "Graphic Designing",
            "Digital Marketing",
            "SEO",
            "Content Writing",
            "Business Analysis",
            "Photography",
            "Iot",
          ]
        }
      ]

    }
  ]

  const itemsList = (items: any) => {
    return items.map((item: any, i: number) => {
      return <p key={i} className="bg-slate-100 rounded-full cursor-pointer text-lg text-center px-4 py-1.5 shadow-sm">{item}</p>
    })
  }

  return (
    <>
      <section className="bg-white solid-shadow mt-12" id="about-me">
        <div className="flex flex-col">
          <h4 className="text-6xl uppercase">
            Skills
          </h4>
          <p className="text-lg mt-3">
            I don’t have a specialized skill, but as said “Jack of all trades is a master of none but oftentimes better than a master of one”
          </p>
        </div>
        <div className="flex  mt-12 gap-x-12 justify-between">
          <div className="flex flex-col gap-y-6 basis-2/5">
            {
              SKILLS.map((skill, i) => {
                return (
                  <div key={skill.slug}>
                    <h4 className={`text-2xl p-6 rounded-sm min-w-full border cursor-pointer
                      ${i === activeSkill ? "bg-black text-white" : "bg-gray-200 "}`}
                      onClick={() => {
                        setActiveSkill(i)
                      }}
                    >
                      {skill.title}
                    </h4>
                  </div>
                )
              })
            }
          </div>
          <div className="text-center basis-3/5 px-12">
            {
              SKILLS[activeSkill]?.data?.map((items, i) => {
                const list = Object.entries(items)[0];
                return <div key={i} className="pb-6">
                  <div className="uppercase text-slate-400 text-left pb-2">
                    {list[0] !== "default" && list[0].replace("_", "")}
                  </div>
                  <div className="mt-2 flex flex-wrap flex-row gap-6">
                    {itemsList(list[1])}
                  </div>
                </div>
              })
            }
          </div>

        </div>
      </section >
    </>)
}

export default Skills;