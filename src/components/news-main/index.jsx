import NewsComponents from "../news-components/index.jsx";

function News(){
    return(
        <>
            <div>
                <header className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-white-900">FinCo News</h1>
                    <p className="max-w-xl mx-auto text-white-400 mt-2">
                        Utilize this space to incorporate a captivating subheading crafted by ChatGPT, adding depth and intrigue to your everyday financial news.
                    </p>
                </header>

                <main className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center">
                    <NewsComponents />
                    <NewsComponents />
                    <NewsComponents />
                    <NewsComponents />
                    <NewsComponents />
                    <NewsComponents />
                </main>
            </div>
        </>
        )
}

export default News