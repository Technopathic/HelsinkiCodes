import { FiInstagram, FiTwitter, FiGithub, FiExternalLink } from 'react-icons/fi'
import { FaTwitch } from 'react-icons/fa'
import { SiYoutube, SiLinkedin } from "react-icons/si"

const Home = () => (
    <main className="flex flex-col w-full max-w-5xl m-auto my-16 px-4">
        <section className="flex flex-col w-full max-w-3xl m-auto">
            <div className="rounded-full overflow-hidden h-48 w-48 mb-8">
                <img src="/me2.png" alt="me" />
            </div>
            <div className="flex">
                <h1 className="mb-8 text-6xl text-pink-500">Hi, I'm Ren</h1>
                <div className="text-5xl ml-2">👋</div>
            </div>
            <h2 className="m-0 text-5xl text-gray-500 dark:text-gray-200">Game Developer at <a className="no-underline text-5xl" target="_blank" rel="noopener noreferrer" href="https://www.quicksave.fi">Quicksave Interactive</a></h2>
            <h3 className="m-0 text-4xl text-gray-400 dark:text-gray-200">Board Member at <a className="no-underline text-4xl opacity-70" target="_blank" rel="noopener noreferrer" href="https://www.helsinki.fi">Finnish Game Jam</a></h3>
            <h3 className="m-0 text-3xl text-gray-400 dark:text-gray-200">Lead at <a className="no-underline text-3xl opacity-70" target="_blank" rel="noopener noreferrer" href="https://github.com/rage">IGDA Finland</a></h3>
            <div className="flex flex-row my-4">
                <section className="flex items-center">
                    <a target="_blank" rel="noopener noreferrer" href={process.env.GITHUB}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><FiGithub size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.LINKEDIN}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><SiLinkedin size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.TWITCH}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><FaTwitch size={26} /></div></a>
                    <a target="_blank" rel="noopener noreferrer" href={process.env.INSTAGRAM}><div className="py-1 mr-4 text-gray-600 hover:opacity-70 transition-all dark:text-gray-200"><FiInstagram size={26} /></div></a>
                </section>
            </div>
            <br />
            <p>I'm a Game Developer and Live-Coder living in Helsinki, Finland.</p>
            <p>I am highly active in the Finnish game development community, being a Lead in IGDA Finland and Board Member of Finnish Game Jam.</p>
            <p>My career experience has mainly involved working with proprietary engines and server-side programming, I am currently exploring and building upon Unreal Engine.</p>
            <br />
            <p>While you're here, checkout my <a className="no-underline" target="_blank" rel="noopener noreferrer" href="/CV">CV</a> for more information about my professional career.</p>
        </section>

        <section className="mt-8">
            <div className="flex flex-col w-full max-w-3xl m-auto">
                <h2 className="text-gray-700 dark:text-gray-50">Games Shipped</h2>
                <p>Games I've worked on during my career so far and built with amazingly dedicated people.</p>
            </div>

            <article className="flex flex-col md:flex-row relative w-full md:h-80 justify-end mt-8">
                <a href="https://app.axieinfinity.com/games/raylights/" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:left-0 rounded shadow-xl overflow-hidden moveUp"><img src="/cv-images/ray-lights.jpeg" /></a>
                <div className="flex flex-col text-right z-10 w-full md:w-6/12">
                    <h2 className="text-gray-700 dark:text-gray-200">Axie Infinity: Raylights</h2>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">Programmer</p>
                    <div className="bg-white py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>Focused on in-app purchases to bring monetization to the game and value to the company.</p>
                    </div>
                    <div className="flex flex-row justify-end mt-8">
                        <span className="ml-3">Multiplayer</span>
                        <span className="ml-3">Casual</span>
                        <span className="ml-3">IAPs</span>
                        <span className="ml-3">Simulation</span>
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                        <a href="https://www.youtube.com/watch?v=_4-z6YES51Y" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><SiYoutube size={24} /></a>
                        <a href="https://app.axieinfinity.com/games/raylights/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
            </article>

            <article className="flex flex-col-reverse md:flex-row relative w-full md:h-80 mt-16">
                <div className="flex flex-col z-10 w-full md:w-6/12">
                    <h2 className="text-gray-700 dark:text-gray-200">Tezotopia Battles</h2>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">Lead Programmer</p>
                    <div className="bg-white py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>My first career game from start-to-finish. I worked on both client UI and server combat mechanics.</p>
                    </div>
                    <div className="flex flex-row mt-8">
                        <span className="ml-3">Multiplayer</span>
                        <span className="ml-3">Strategy</span>
                        <span className="ml-3">PVP Combat</span>
                        <span className="ml-3">Data Driven</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <a href="https://tezotopia.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                        <a href="https://www.youtube.com/watch?v=flJ0aRTahg0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><SiYoutube size={24} /></a>

                    </div>
                </div>
                <a href="https://tezotopia.com/" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:right-0 rounded shadow-xl overflow-hidden moveUp"><img src="/cv-images/tezo-battles-2.jpeg" /></a>
            </article>
        </section>

        <section className="flex flex-col w-full m-auto mt-16">
            <h2 className="text-gray-700 dark:text-gray-50">Skills</h2>
            <p>I love learning new and exciting skills which can impact my every day workflow and life.</p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/typescript.png" /></span>
                    <span>TypeScript</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/react.png" /></span>
                    <span>React</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/nextjs.png" /></span>
                    <span>NextJS</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/nodejs.png" /></span>
                    <span>NodeJS</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/cplusplus.png" /></span>
                    <span>C++</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/unreal.png" /></span>
                    <span>Unreal</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/pixijs.png" /></span>
                    <span>PixiJS</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/git-logo.png" /></span>
                    <span>Git</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/obs.png" /></span>
                    <span>OBS</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/graphql.png" /></span>
                    <span>GraphQL</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/supabase.png" /></span>
                    <span>Supabase</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/blender.png" /></span>
                    <span>Blender</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/notion.png" /></span>
                    <span>Notion</span>
                </div>
                <div className="bg-white rounded shadow-lg rounded justify-center items-center flex flex-col h-32 dark:text-gray-700 moveUp">
                    <span className="w-16"><img src="/readme-images/laravel.png" /></span>
                    <span>Laravel</span>
                </div>
            </div>
        </section>
        
        <section className="mt-16">
            <div className="flex flex-col w-full max-w-3xl m-auto">
                <h2 className="text-gray-700 dark:text-gray-50">Projects</h2>
                <p>Here are some of my most outstanding projects I enjoyed creating, both with a team and alone.</p>
            </div>

            <article className="flex flex-col md:flex-row relative w-full md:h-80 justify-end mt-8">
                <a href="https://buildingai.elementsofai.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:left-0 rounded shadow-xl overflow-hidden moveUp"><img src="/about-images/bai.png" /></a>
                <div className="flex flex-col text-right z-10 w-full md:w-6/12">
                    <h2 className="text-gray-700 dark:text-gray-200">Building AI</h2>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">Advanced A.I. & Python course</p>
                    <div className="bg-white py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>MOOC for learning advanced A.I. and Python coding with University of Helsinki and Reaktor Education.</p>
                    </div>
                    <div className="flex flex-row justify-end mt-8">
                        <span className="ml-3">NextJS</span>
                        <span className="ml-3">TypeScript</span>
                        <span className="ml-3">GraphQL</span>
                        <span className="ml-3">Python</span>
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                        <a href="https://buildingai.elementsofai.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
            </article>

            <article className="flex flex-col-reverse md:flex-row relative w-full md:h-80 mt-16">
                <div className="flex flex-col z-10 w-full md:w-6/12">
                    <h2 className="text-gray-700 dark:text-gray-200">Equals</h2>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">A multi-platform numbers game</p>
                    <div className="bg-white py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>A game built using web technologies which supports many platforms and languages.</p>
                    </div>
                    <div className="flex flex-row mt-8">
                        <span className="ml-3">NextJS</span>
                        <span className="ml-3">PWA</span>
                        <span className="ml-3">Redux</span>
                        <span className="ml-3">Electron</span>
                        <span className="ml-3">Capacitor</span>
                    </div>
                    <div className="flex flex-row mt-4">
                        <a href="https://equals.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
                <a href="https://equals.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:right-0 rounded shadow-xl overflow-hidden moveUp"><img src="/about-images/equals.png" /></a>
            </article>

            <article className="flex flex-col md:flex-row relative w-full md:h-80 justify-end mt-16">
                <a href="https://technopathic.github.io/Rubi/" target="_blank" rel="noopener noreferrer" className="w-full md:w-7/12 bg-grayBrand relative md:absolute md:left-0 rounded shadow-xl overflow-hidden moveUp"><img src="/about-images/rubi.png" /></a>
                <div className="flex flex-col text-right z-10 w-full md:w-6/12">
                    <h2 className="text-gray-700 dark:text-gray-200">Rubi</h2>
                    <p className="font-semibold text-gray-500 dark:text-gray-300">Furigana annotations in English</p>
                    <div className="bg-white py-3 px-4 rounded shadow-xl dark:text-gray-700">
                        <p>A ReactJS library for introducing semantically correct furigana annotations to English writing systems.</p>
                    </div>
                    <div className="flex flex-row justify-end mt-8">
                        <span className="ml-3">TypeScript</span>
                        <span className="ml-3">ReactJS</span>
                        <span className="ml-3">JSX</span>
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                        <a href="https://github.com/Technopathic/rubi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiGithub size={24} /></a>
                        <a href="https://technopathic.github.io/Rubi/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-all ml-3 dark:text-gray-300"><FiExternalLink size={24} /></a>
                    </div>
                </div>
            </article>

        </section>

        <section className="mt-16">
            <div className="flex flex-col w-full max-w-3xl m-auto">
                <h2 className="text-gray-700 dark:text-gray-50">Volunteering</h2>
                <p>Contributing to the growth of the game development community is a major part of my life and career.</p>
            </div>

            <div className="flex flex-col w-full max-w-5xl m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <article className="flex flex-col bg-white w-full rounded-xl shadow-xl">
                        <div className="flex px-6 py-4">
                            <div className="h-12 w-12 rounded-full mr-4 overflow-hidden">
                                <img src="/cv-images/volunteer-igda.jfif" alt="igda logo" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-bold text-xl my-0">Hub Lead</p>
                                <p className="text-gray-600 my-0 text-sm">IGDA Finland</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-full flex items-center flex-grow rounded-b-xl overflow-hidden h-72">
                            <img src="/cv-images/igda-hub-head.jpg" alt="hub lead" className="h-full w-full object-cover"/>
                        </div>
                    </article>

                    <article className="flex flex-col bg-white w-full rounded-xl shadow-xl">
                        <div className="flex px-6 py-4">
                            <div className="h-12 w-12 rounded-full mr-4 overflow-hidden">
                                <img src="/cv-images/volunteer-fgj.jfif" alt="fgj logo" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-bold text-xl my-0">Live-Stream Producer & Board</p>
                                <p className="text-gray-600 my-0 text-sm">Finnish Game Jam</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-full flex-grow rounded-b-xl overflow-hidden h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/GTABNBGJZa0?si=z3EuXX7cCIuJGVX5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </article>

                    <article className="flex flex-col bg-white w-full rounded-xl shadow-xl">
                        <div className="flex px-6 py-4">
                            <div className="h-12 w-12 rounded-full mr-4 overflow-hidden">
                                <img src="/cv-images/volunteer-igda.jfif" alt="igda logo" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-bold text-xl my-0">Volunteer of the Year 2022</p>
                                <p className="text-gray-600 my-0 text-sm">IGDA Finland</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-full flex items-center flex-grow rounded-b-xl overflow-hidden h-72">
                            <img src="/cv-images/volunteer-of-the-year.jpg" alt="volunteer of the year" className="h-full w-full object-cover"/>
                        </div>
                    </article>

                    <article className="flex flex-col bg-white w-full rounded-xl shadow-xl">
                        <div className="flex px-6 py-4">
                            <div className="h-12 w-12 rounded-full mr-4 overflow-hidden">
                                <img src="/cv-images/volunteer-igda.jfif" alt="igda logo" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-bold text-xl my-0">Leadership Day Organizer</p>
                                <p className="text-gray-600 my-0 text-sm">IGDA Finland</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-full flex-grow rounded-b-xl overflow-hidden h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/ZXF_TJlzepM?si=TfKq6jThIPJStv1f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </article>

                    <article className="flex flex-col bg-white w-full rounded-xl shadow-xl">
                        <div className="flex px-6 py-4">
                            <div className="h-12 w-12 rounded-full mr-4 overflow-hidden">
                                <img src="/cv-images/wlg.jpeg" alt="wlg logo" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-bold text-xl my-0">Live-Stream Producer</p>
                                <p className="text-gray-600 my-0 text-sm">W ❤️ Games</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-full flex-grow rounded-b-xl overflow-hidden h-72">
                            <img src="/cv-images/wlg-volunteering.jpeg" alt="wlg volunteering" className="h-full w-full object-cover" />
                        </div>
                    </article>

                    <article className="flex flex-col bg-white w-full rounded-xl shadow-xl">
                        <div className="flex px-6 py-4">
                        <div className="h-12 w-12 rounded-full mr-4 overflow-hidden">
                                <img src="/cv-images/gdof.png" alt="gdof logo" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="font-bold text-xl my-0">Live-Stream Producer</p>
                                <p className="text-gray-600 my-0 text-sm">Game Designers of Finland</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 w-full flex items-center flex-grow rounded-b-xl overflow-hidden h-72">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/UgDapoOQz3A" title="Game Designers of Finland Meetup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </article>
                </div>
            </div>

        </section>

        <section className="flex flex-col w-full max-w-3xl m-auto mt-16">
            <h2 className="text-gray-700 dark:text-gray-50">Wanna reach out?</h2>
            <p>Feel free to drop me a message if you have some interesting offer or any questions.</p>
            <p>Please use <a href={process.env.LINKEDIN} target="_blank" rel="noopener noreferrer" className="no-underline">LinkedIn</a> to contact me.</p>
        </section>


    </main>
)

export default Home