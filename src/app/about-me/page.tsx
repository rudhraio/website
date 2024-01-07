function AboutMe() {
    return (
        <>
            <section className="bg-white solid-shadow" id="about-me">
                <div className="flex lg:flex-row flex-col justify-between gap-12 mt-12">
                    <div className="basis-1/3 flex justify-start">
                        <div className="flex flex-col justify-start">
                            <div className="flex flex-col">
                                <h4 className="text-6xl uppercase text-center">
                                    Who Am I?
                                </h4>
                                <p className="mt-6 font-medium text-gray-400">
                                    #GrowthHacker <br /> #ProductEngineer <br />  #Fullstack <br /> #Devops
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="basis-2/3">
                        <p className="font-light text-justify text-lg bg-gray-200 rounded-sm p-6">
                            I am a software developer with extensive knowledge of modern frameworks, enabling me to build robust and highly scalable industry-ready applications. My expertise lies in developing software solutions that meet the highest standards of quality and performance. With a keen eye for detail and a deep understanding of cutting-edge technologies, I consistently deliver innovative and efficient solutions that exceed client expectations. My proficiency in various programming languages and frameworks allows me to tackle complex challenges and ensure the seamless integration of software components.
                        </p>
                    </div>
                </div>
                <div className="flex py-6 gap-x-6">
                    <div className="basis-3/4">
                        <p className="text-lg p-6 rounded-sm border-l-2 border-l-white bg-black text-white">
                            With over a decade #expirence in building software and hardware applications
                        </p>
                    </div>
                    <div className="basis-1/4">
                        <button className="text-lg p-6 rounded-sm border-2 w-full">
                            To know more
                        </button>
                    </div>
                </div>
                <div>
                    <p className="font-light text-justify text-lg mt-6">
                        My expertise extends beyond software development and product engineering to encompass software deployment and automation. I have an in-depth understanding of the intricacies involved in deploying software and have honed my skills in automating these processes. By leveraging various tools and techniques, I streamline workflows, improve efficiency, and minimize errors in the deployment process. Additionally, I have a robust knowledge of creating cloud infrastructure, allowing me to design scalable and resilient systems that harness the power of cloud computing. With my strong grasp of both development and operations, I ensure seamless software delivery and enhance the overall performance and reliability of applications.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutMe