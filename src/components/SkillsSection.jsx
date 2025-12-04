import { motion } from 'framer-motion';
import { skills } from '../assets/assets';
export default function SkillsSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id="skills"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-0 px-6">
                <h2 className="text-3xl font-bold text-center mb-4">
                    My <span className="text-purple">Skills</span>
                </h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    Technologies I work with to bring ideas to life{' '}
                </p>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {
                        skills.map((data,index)=>(
                           <div key={index} className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer'>
                                <div className='flex items-center mb-4'>
                                    <data.icon className='w-12 h-1/2 text-purple mr-6'/>
                                    <h3 className='text-xl font-semibold'>{data.title}</h3>
                                </div>
                                <p className='text-gray-400 mb-4'>{data.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        data.tags.map((tag)=>(
                                            <span key={tag} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{tag}</span>
                                        ))
                                    }
                                </div>
                           </div> 
                        ))
                    }
                </div>
            </div>
        </motion.div>
    );
}
