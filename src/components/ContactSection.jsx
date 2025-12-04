import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaTwitter,
} from 'react-icons/fa';
export default function ContactSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="contact"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-0 px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                    About <span className="text-purple">Touch</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Get to know more about my background and passion{' '}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label
                                    className=" block text-gray-300 mb-2"
                                    htmlFor="Name"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    className=" block text-gray-300 mb-2"
                                    htmlFor="Email"
                                >
                                    {' '}
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    className=" block text-gray-300 mb-2"
                                    htmlFor="Name"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full  py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className=" text-purple text-2xl  mr-4">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-semibold basis-2">
                                    Location
                                </h3>
                                <p className="text-gray-400">
                                    Phnom Penh, Cambodia
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className=" text-purple text-2xl  mr-4">
                                <FaEnvelope />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-semibold basis-2">
                                    Email
                                </h3>
                                <p className="text-gray-400">
                                    hammakara51@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className=" text-purple text-2xl  mr-4">
                                <FaPhone />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-semibold basis-2">
                                    Phone
                                </h3>
                                <p className="text-gray-400">
                                    +855 88 309 1690
                                </p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-lg font-medium mb-4">
                                Follow Me{' '}
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href=""
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href=""
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href=""
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href=""
                                    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300"
                                >
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
