import { FiMapPin, FiBriefcase, FiClock, FiSearch, FiChevronDown } from "react-icons/fi"

const JobItem = () => (
    <article className="flex flex-col bg-whiteBrand rounded-xl border-solid border-gray-200 border p-8">
        <div className="flex items-center">
            <div className="bg-hcRedBrand h-12 w-12 rounded-full"></div>
            <div className="flex flex-col ml-3">
                <div className="text-sm">Reaktor</div>
                <div className="text-xs flex items-center mt-1">
                    <FiMapPin size={16} />
                    <span className="ml-1">Helsinki, FI</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col my-4">
            <div className="text-base">Junior Software Developer</div>
            <p className="text-sm">We are looking for someone to join our digital design office in Helsinki</p>
        </div>
        <div className="flex items-center border-solid border-gray-200 border-t pt-4">
            <div className="text-xs flex items-center">
                <FiBriefcase size={18} />
                <span className="ml-2">Full-time</span>
            </div>
            <div className="text-xs ml-4 flex items-center">
                <FiClock size={18} />
                <span className="ml-2">3 days ago</span>
            </div>
        </div>
    </article>
)

const Jobs = () => (
    <section className="flex flex-col">
        <div className="flex flex-col bg-hcRedBrand h-56 justify-center items-center">
            <h1 className="text-8xl">Creative Jobs</h1>
            <p>Discover your next career move, freelance gig, or internship</p>
        </div>
        <div className="w-full mb-16">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="w-full h-14 shadow-md bg-whiteBrand -my-8 rounded-xl flex items-center justify-between">
                    <div className="flex items-center h-full flex-grow">
                        <FiSearch size={24} className="ml-4" />
                        <input className="w-full h-full rounded-xl px-4 outline-none" type="text" placeholder="Search jobs by keyword..." />
                    </div>
                    <div className="flex items-center">
                        <div className="text-base px-8 flex items-center cursor-pointer border-gray-200 border-solid border-l border-r">
                            <span className="mr-2">All Jobs</span>
                            <FiChevronDown size={20} />
                        </div>
                        <div className="text-base px-8 flex items-center cursor-pointer">
                            <span className="mr-2">Location</span>
                            <FiChevronDown size={20} />
                        </div>
                    </div>
                </div>
                <section className="mt-24 grid grid-cols-4 gap-8">
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                </section>
            </div>
        </div>
    </section>
)

export default Jobs