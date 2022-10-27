const Finland = () => (
    <main className="flex flex-col items-center w-full px-4 my-32">
        <section className="w-full max-w-screen-xl">
            <h1>Helsinki</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
                <article className="bg-white h-72 shadow-olg rounded-xl overflow-hidden relative">
                    <img src="https://via.placeholder.com/350" />
                    <div className="absolute bg-darkGrayBrand h-12 bottom-5 z-10 flex flex-col justify-center p-2">
                        <h2 className="text-white text-xl m-0 p-0 leading-5">Quicksave Interactive</h2>
                    </div>
                </article>
                <article className="bg-white h-72 shadow-olg rounded-xl"></article>
                <article className="bg-white h-72 shadow-olg rounded-xl"></article>
                <article className="bg-white h-72 shadow-olg rounded-xl"></article>
                <article className="bg-white h-72 shadow-olg rounded-xl"></article>
            </section>
        </section>
    </main>
)

export default Finland