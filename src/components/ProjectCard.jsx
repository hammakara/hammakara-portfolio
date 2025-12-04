export default function ProjectCard({ project }) {
    return (
        <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                        <span
                            className="px-3 py-1 border border-purple rounded-sm bg-purple/10 hover:bg-purple/50 transition duration-300"
                            key={t}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
            <div className=" flex gap-2 px-6">
                <a className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition divide-blue-300" href='#'>View Demo</a>
                <a className="flex-1 text-center px-4 py-2 border border-purple bg-purple/20 rounded-lg font-medium hover:bg-purple-700 transition divide-blue-300" href='#'>View Demo</a>
            </div>
        </div>
    );
}
