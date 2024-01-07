import Link from "next/link";

function Header() {
    return (<>
        <nav className="border-b py-6">
            <div className="flex justify-between items-center">
                <div className="flex gap-x-12 items-center">
                    <div>
                        <h3 className="font-bold text-3xl">
                            <Link href={"/"}>

                                Rudhra.
                            </Link>
                        </h3>
                    </div>
                    <div className="flex gap-x-6 pt-4">
                        <div className="pb-3">
                            <Link href="/">
                                portfolio
                            </Link>
                        </div>
                        <div className="pb-3">
                            <Link href="/about-me">
                                about me
                            </Link>
                        </div>
                        <div className="pb-3">
                            <Link href="/skills">
                                skills
                            </Link>
                        </div>
                        <div className="pb-3">
                            <Link href="/projects">
                                projects
                            </Link>
                        </div>
                        <div className="pb-3">
                            <Link href="/blogs">
                                blogs
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Link href="/contact-me">

                        <button className="bg-black px-6 py-3 rounded-lg text-white">
                            Contact Me
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    </>)
}

export default Header;