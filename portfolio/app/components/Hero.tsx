export default function Hero() {
    return (
        <section className="py-24 flex flex-col gap-4 items-start">
            <h1 className="text-4xl font-semibold">
                oke raymond jesutofunmi
            </h1>
            <h2 className="text-xl text-blue-700">
                software engineer
            </h2>
            <p className="max-w-xl text-sm">
                i build web applications and web automation tool and extensions using reactjs, nodejs
            </p>

            <div className="flex gap-4 mt-4 text-sm">
                <a href="https://x.com/raymonddev_" target="_blank">twitter</a>
                <a href="https://www.linkedin.com/in/oke-raymond-6b742a2a4/" target="_blank">linkedin</a>
                <a href="https://tiktok.com/@imredmond" target="_blank">tiktok</a>
            </div>

            {/* Image placeholder */}
            <div className="mt-6 w-32 h-32 bg-gray-200 rounded-md" />
        </section>
    );
}
