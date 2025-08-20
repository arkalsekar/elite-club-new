"use client";

import { FaRegLightbulb, FaCode, FaRocket, FaUsers } from "react-icons/fa";

const roadmapData = [
    {
        icon: <FaRegLightbulb className="text-teal-600 w-6 h-6" />,
        title: "Idea Generation",
        description: "Brainstorm and conceptualize innovative tech solutions.",
    },
    {
        icon: <FaCode className="text-teal-600 w-6 h-6" />,
        title: "Development",
        description: "Build and develop the proposed solutions with cutting-edge technologies.",
    },
    {
        icon: <FaRocket className="text-teal-600 w-6 h-6" />,
        title: "Deployment",
        description: "Deploy the solutions to production environments for real-world use.",
    },
    {
        icon: <FaUsers className="text-teal-600 w-6 h-6" />,
        title: "Community Building",
        description: "Engage with the community to gather feedback and foster growth.",
    },
];

const Roadmap = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Our Roadmap</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A clear path to achieving our goals and delivering value.
                    </p>
                </div>
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>
                    <div className="space-y-12">
                        {roadmapData.map((item, index) => (
                            <div key={index} className="relative flex items-start">
                                {/* Connector Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-0 h-full border-l-2 border-gray-200"></div>
                                {/* Icon Container */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white">
                                    <div className="p-3 rounded-full shadow-lg">
                                        {item.icon}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className={`ml-0 ${index % 2 === 0 ? "md:pl-8 md:pr-0" : "md:pr-8 md:pl-0"} w-full md:w-1/2`}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                        <p className="mt-2 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
