import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex w-full">
        <div className="flex flex-col gap-12 md:flex-row md:justify-around justify-center items-center w-full lg:py-12 py-6">
          <div>
            <div className="flex flex-col">
              <h3 className="lg:text-4xl text-2xl">
                Hey There 👋
              </h3>
              <h1 className="lg:text-7xl text-5xl mt-6">
                I'm Rudhra
              </h1>
              <p className="mt-6 lg:text-xl text-md max-w-xl text-gray-400">
                A passionate and skilled individual in the field of technology, I possess a deep love for all things tech-related and a strong desire to stay at the forefront of technological advancements
              </p>

            </div>
            <div className="flex mt-24">
              <div className="border-r-2 border-r-black pe-12">
                <h4 className="text-xl font-bold">
                  Email
                </h4>
                <p className="text-lg">
                  hi@rudhra.io
                </p>
              </div>
              <div className="px-12 border-r-2 border-r-black">
                <h4 className="text-xl font-bold">
                  Location
                </h4>
                <p className="text-lg">
                  Hyderabad, India
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact-me">
                <p className="underline">

                  Let's Get Connected
                </p>
              </Link>

            </div>
          </div>

          <div className="">
            <img src="assets/images/me.png" alt="hero-section" className="max-h-[48rem]" />
          </div>
        </div>
      </section>
    </>
  )
}
