import { useState } from 'react'
import resourceData from '../data/resource-data'
import { ResourcePreview } from '../components/Preview'

import { FaIcons, FaTrophy, FaFont, FaDatabase } from 'react-icons/fa'
import { IoSparklesSharp, IoSchool, IoVideocam, IoCode } from 'react-icons/io5'
import { MdPodcasts, MdDesignServices, MdWork } from 'react-icons/md'

const ICONS = {
    'FEATURED': <IoSparklesSharp color="#00d25b" size={20}/>,
    'EDUCATION': <IoSchool color="#8f5fe8" size={20}/>,
    'CHALLENGE': <FaTrophy color="#ffab00" size={20}/>,
    'PHOTO/VIDEO/AUDIO': <IoVideocam color="#fc424a" size={20}/>,
    'ICONS': <FaIcons color="#0090e7" size={20}/>,
    'FONTS': <FaFont color="#00d25b" size={20}/>,
    'DATABASE': <FaDatabase color="#8f5fe8" size={20}/>,
    'PODCASTS': <MdPodcasts color="#ffab00" size={20}/>,
    'CODING': <IoCode color="#fc424a" size={20}/>,
    'UI DESIGN': <MdDesignServices color="#0090e7" size={20}/>,
    'JOBS': <MdWork color="#00d25b" size={20}/>
}

const Resources = () => {
    const [activeCategory, setActiveCategory] = useState('FEATURED')

    return (
        <main className="my-10 md:my-28 flex flex-col items-center mx-8">
            <section className="flex flex-col w-full max-w-screen-xl justify-between items-center">
                <section className="w-full flex flex-wrap">
                    {Object.keys(resourceData).map((key, i) => (
                        <div className={`flex py-4 px-8 m-2 cursor-pointer rounded-xl select-none shadow-md items-center ${activeCategory === key ? 'bg-hcBlueBrand text-white' : 'bg-whiteBrand'}`} key={key} onClick={() => setActiveCategory(key)}>
                            <div className="mr-2 p-1">{ICONS[key]}</div>
                            {key}
                        </div>
                    ))}
                </section>
                <section className="my-10 mx-2">
                    <section className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {resourceData[activeCategory].map((resource, i) => (
                            <article key={i}>
                                <ResourcePreview key={i} title={resource.title} description={resource.description} coverImage={resource.image} link={resource.url} category={resource.category} />
                            </article>
                        ))}
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Resources