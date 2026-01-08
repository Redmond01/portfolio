export default function Projects() {
    return (
        <section className="py-16">
            <h3 className="text-xl font-medium mb-6 text-blue-700">projects</h3>

            <div className="flex flex-col gap-8">
                {/* Project 1 */}
                <div className="border rounded-md p-4">
                    <h4 className="font-medium">powerhaven church</h4>
                    <p className="text-sm mt-1">
                        a fullstack web application for church with contains payment system, and event tracking for email integration
                    </p>
                    <p className="text-xs text-gray-500 mt-2">stack: nextjs</p>
                    <a className="text-xs text-blue-700 mt-2 block" href="" target="_blank">
                        link (add later)
                    </a>
                </div>

                {/* Project 2 */}
                <div className="border rounded-md p-4">
                    <h4 className="font-medium">inplay alert</h4>
                    <p className="text-sm mt-1">
                        a web automation tool that tracks live football inplay matches and alert football events that are winable for preset options
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                        stack: nodejs + puppeteer + websocket
                    </p>
                    <a className="text-xs text-blue-700 mt-2 block" href="" target="_blank">
                        link (add later)
                    </a>
                </div>
            </div>
        </section>
    );
}
