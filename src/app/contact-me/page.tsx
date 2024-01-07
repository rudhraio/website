function ContactMe() {
  return (<>
    <section className="bg-white solid-shadow mt-12" id="about-me">
      <div className="flex flex-col ">
        <h4 className="text-6xl uppercase">
          Contact Me
        </h4>
      </div>
      <div className="p-6 flex lg:flex-row flex-col mt-6 gap-12 lg:gap-6 justify-around items-center bg-black bg-opacity-90">
        <div className="flex flex-col gap-y-6 basis-2/5">
          <div>
            <h5 className="text-3xl font-bold text-white">
              Love to here <br />
              from you ❤️
            </h5>
          </div>
          <div className="mt-3 p-12 solid-shadow-white bg-white border">
            <p className="text-lg mb-6">
              Reach out to me at
            </p>
            <h3 className="font-semibold text-3xl">
              hi@rudhra.io
            </h3>

          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="" className=" text-white mb-2">Name</label>
              <input type="text" className="text-lg p-3 py-4 border min-w-[32rem]" placeholder="Your Name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className=" text-white mb-2">Email</label>
              <input type="text" className="text-lg p-3 py-4 border min-w-[32rem]" placeholder="Your Email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className=" text-white mb-2">Message</label>
              <textarea className="text-lg p-3 py-4 border min-w-[32rem]" rows={5} placeholder="Your Message"></textarea>
            </div>
            <div className="float-left ms-auto">
              <button className="bg-white py-3 px-6 font-bold text-base">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section >
  </>)
}

export default ContactMe;