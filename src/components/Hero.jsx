export default function Hero() {
    return (
        <div
            className="h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: "url(./Feature1.png)",
            }}
        >
            <div className="absolute bg-black/20"></div>
            
            <div className="relative z-10 bg-[#1E1E1E]/60 min-h-screen flex items-center">
                <div className="max-w-md lg:max-w-2xl p-8 lg:p-12 text-white">
                    <h1 className="mb-6 text-4xl lg:text-5xl font-bold">Data Captured!</h1>
                    <p className="mb-8 text-lg leading-relaxed">
                        Only smart choices can Ernesto Balagbag restore cyber safety to QCU.
                    </p>
                    <a href="https://yortski.github.io/qculand-prototype/">
                        <button className="btn btn-primary btn-lg rounded-none">Click here to help him!</button>
                    </a>
                </div>
            </div>
        </div>
    )
}