const Sort = () => (
    <section className="grid grid-cols-3 w-full max-w-screen-xl gap-8 mb-8">
        <div></div>
        <div className="flex justify-center items-center">
            <div className="px-4 py-2 border border-solid border-gray-300 rounded-l-full cursor-pointer text-center">Articles</div>
            <div className="px-4 py-2 border-t border-b border-solid border-gray-300 cursor-pointer text-center">Channels</div>
            <div className="px-4 py-2 border border-solid border-gray-300  rounded-r-full cursor-pointer text-center">Authors</div>
        </div>
        <div className="flex justify-end items-center">Sort by: <span className="ml-4 px-6 py-2 border border-solid border-gray-300 rounded-full cursor-pointer text-center">Date</span></div>
    </section>
)

export default Sort