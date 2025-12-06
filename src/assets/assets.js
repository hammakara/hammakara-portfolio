import {
    FaLightbulb,
    FaPaintBrush,
    FaCode,
    FaReact,
    FaServer,
    FaMobileAlt,
    FaTools,
    FaNodeJs,
    FaStripe,
    FaVuejs,
    FaFire,
    FaDatabase,
    FaCloud,
    FaRobot,
} from 'react-icons/fa';

import profileImg from '../assets/myProfile.jpg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';

export const assets = {
    profileImg,
};

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description:
            'I love creating unique solutions to complex problems with cutting-edge technologies.',
        color: 'text-purple',
    },
    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description:
            'Beautiful design and user experience are at the heart of everything I create.',
        color: 'text-pink',
    },
    {
        icon: FaCode,
        title: 'Clean Code',
        description:
            'I write maintainable, efficient code following best practices and modern patterns.',
        color: 'text-blue',
    },
];

export const skills = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        description:
            'Building responsive and interactive user interfaces with modern frameworks.',
        tags: ['Html', 'css', 'Javascript', 'React', 'Tailwind'],
    },
    {
        title: 'Backend Development',
        icon: FaServer,
        description:
            'Creating robust server-side applications and RESTful APIs.',
        tags: ['Node.js', 'Express', 'Laravel'],
    },
    {
        title: 'Database Management',
        icon: FaDatabase,
        description:
            'Designing and optimizing databases for performance and scalability.',
        tags: ['MongoDB', 'PostgreSQL', 'MySQL'],
    },

    {
        title: 'Tools & Technologies',
        icon: FaTools,
        description:
            'Essential tools and technologies I use in my development workflow.',
        tags: ['Git & GitHub', 'Figma'],
    },
];

export const projects = [
    {
        title: 'E-Commerce Platform',
        description:
            'A full-featured online store with shopping cart, user authentication, and payment processing.',
        image: projectImg1,
        tech: ['React', 'Node.js', 'MongoDB'],
        icons: [FaReact, FaNodeJs, FaDatabase],
        demo: '#',
        code: '#',
    },

    {
        title: 'Portfolio Website',
        description:
            'A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.',
        image: projectImg4,
        tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Markdown'],
        icons: [FaReact, FaCloud],
        demo: '#',
        code: '#',
    },
    {
        title: 'Chat App',
        description:
            'A real-time chat application with group messaging, emojis, and file sharing.',
        image: projectImg5,
        tech: ['Socket.IO', 'React', 'Node.js', 'MongoDB'],
        icons: [FaReact, FaNodeJs, FaDatabase],
        demo: '#',
        code: '#',
    },
];

export const workData = [
    {
        role: 'Teacher Computer',
        company: 'Aloha Learning Center',
        duration: 'Jul,2024-Nov,2025',
        description:
            'Teaching and Training student Microsoft office (Word,Excel,Powerpoint,Accress) Canva Slider with Internet and Email.',
        color: 'pink',
    },
    {
        role: 'Internship Frontend',
        company: 'E-Khmer Company',
        duration: 'jan,2023-nov,2023',
        description:
            'Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.',
        color: 'blue',
    },
];
