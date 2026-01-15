import { NavItem, SocialLink, AcademicProfile, TechStack, Project, Achievement, Publication, Certification } from '../types';
import myphoto from '../images/myphoto.webp';
import deeplearning from '../images/deep-learning.webp';
import ml from '../images/ml.webp';
import nlp from '../images/nlp.webp';
import ds from '../images/ds.webp';
import python from '../images/python.webp';
import llm from '../images/llm.webp';
import sentiment from '../images/Sentiment.webp';
import footprint from '../images/footprint.webp';
import indianprices from '../images/indian prices.webp';
import DocuSage from "../images/DocuSage.png";

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Tech Stack', href: '#tech-stack' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Publications', href: '#publications' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Templar121', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/subhayan-mukherjee-0906b0274/', icon: 'Linkedin' },
  { platform: 'Twitter', url: '#', icon: 'Twitter' },
  { platform: 'Email', url: 'mailto:subhayanmukherjee78@gmail.com', icon: 'Mail' },
];

export const academicProfiles: AcademicProfile[] = [
  { 
    platform: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=X3Jz-igAAAAJ&hl=en',
    icon: 'GraduationCap',
    id: 'YOUR_SCHOLAR_ID'
  },
  { 
    platform: 'ORCID',
    url: 'https://orcid.org/my-orcid?orcid=0009-0001-2873-4335',
    icon: 'IdCard',
    id: 'https://orcid.org/0009-0001-2873-4335'
  },
];

export const personalInfo = {
  name: 'Subhayan Mukherjee',
  title: 'Machine Learning Engineer',
  tagline: 'Innovating at the intersection of machine learning, research, and application.',
  about: 'Passionate Machine Learning Engineer with a strong foundation in deep learning, computer vision, and natural language processing. Focused on building practical and scalable AI solutions that address real-world challenges across diverse domains. Continuously exploring innovative approaches to enhance model performance and interpretability.',
  location: 'Asansol, India',
  email: 'subhayanmukherjee78@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1FEHPp1mg9GIYXK4yu9NfcLp7xfYw75Ww/view?usp=sharing',
  image: myphoto,
};

export const techStacks: TechStack[] = [
  {
    category: 'Machine Learning & AI',
    skills: [
      { name: 'TensorFlow', proficiency: 4 },
      { name: 'PyTorch', proficiency: 4 },
      { name: 'Scikit-learn', proficiency: 4 },
      { name: 'Deep Learning', proficiency: 4 },
      { name: 'Computer Vision', proficiency: 4 },
      { name: 'NLP', proficiency: 4 },
      { name: 'XAI', proficiency: 4},
    ],
  },
  {
    category: 'Programming',
    skills: [
      { name: 'Python', proficiency: 4 },
      { name: 'R', proficiency: 3 },
      { name: 'SQL', proficiency: 3 },
      { name: 'Java', proficiency: 3 },
    ],
  },
  {
    category: 'Data Engineering',
    skills: [
      { name: 'Pandas', proficiency: 4 },
      { name: 'NumPy', proficiency: 4 },
      { name: 'MongoDB', proficiency: 3 },
      { name: 'Feature Engineering', proficiency: 4 },
      { name: 'Data Cleaning & Preprocessing', proficiency: 4 },
    ],
  },
  {
    category: 'MLOps & Tools',
    skills: [
      { name: 'Docker', proficiency: 3 },
      { name: 'Kubernetes', proficiency: 2 },
      { name: 'MLflow', proficiency: 3 },
      { name: 'Git', proficiency: 3 },
      { name: 'AWS', proficiency: 2 },
      { name: 'Azure', proficiency: 2 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Carbon Footprint Emission',
    description: 'Developed a machine learning system that predicts carbon footprint emissions created by individuals. It has the potential to drive meaningful behavior and reduce global carbon emissions',
    image: footprint,
    tags: ['Machine Learning', 'AI for Good', 'Prediction Systems'],
    demoLink: 'https://carbonfootprint.subhayanmukherjee.tech/',
    codeLink: 'https://github.com/Templar121/Carbon-Footprint-estimation',
  },
  {
    id: '2',
    title: 'Indian Housing Rent Prediction',
    description: 'Developed a machine learning model using CatBoost and Scikit-Learn to predict rental prices in Indian cities based on features like location, size, and amenities. Achieved R2 Score of 0.95 on a dataset of 15,000+ records.',
    image: indianprices,
    tags: ['CatBoost', 'Scikit Learn', 'Real Estate', 'Regression'],
    demoLink: 'https://indiarental.subhayanmukherjee.tech/',
    codeLink: 'https://github.com/Templar121/Indian-Housing-Prices-Backend/tree/main',
  },
  {
    id: '3',
    title: 'SenSense.AI',
    description: 'Developed and deployed an end-to-end NLP microservice for real-time sentiment analysis using a CNN-based model with over 85 % accuracy, integrated with explainable AI (XAI) techniques to generate interpretable predictions',
    image: sentiment,
    tags: ['NLP', 'XAI', 'CNN', 'TensorFlow'],
    demoLink: 'https://sensenseai.subhayanmukherjee.tech/',
    codeLink: 'https://github.com/Templar121/Sentiment-API',
  },
  {
  id: '4',
  title: 'DocuSage: Conversational RAG System for PDFs',
  description: 'Built a responsive frontend and intelligent backend for document-based conversations using Retrieval-Augmented Generation (RAG). Users can upload PDFs and interact with them using natural language queries, powered by vector search and LLMs.',
  image: DocuSage,
  tags: ['RAG', 'LLM', 'PDF Chat'],
  demoLink: 'https://docusage.subhayanmukherjee.tech/',
  codeLink: 'https://github.com/Templar121/RAG-API',
}
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'NPTEL Star',
    issuer: 'NPTEL IIT Madras',
    date: 'June 2025',
    description: 'Recognized as an NPTEL Discipline Star and Believer Star for completing 68 Weeks of learning',
  },
  {
    id: '2',
    title: 'Delegate at Harvard Project for Asian and International Relations 2024',
    issuer: 'Harvard University',
    date: 'August 2024',
    description: 'Selected as one of the few Indian delegates for the HPAIR Asia Conference held at Chulalongkorn University, Thailand',
  },
  {
    id: '3',
    title: 'Smart India Hackathon 2023 Finalist',
    issuer: 'Government of India',
    date: 'December 2023',
    description: 'Developed a blockchain-based E-vault for digital legal records under the Ministry of Law & Justice (Problem ID: 1284); ranked in the top 5 among 500+ teams nationwide.',
  },
  // {
  //   id: '3',
  //   title: 'Rising Star in AI',
  //   issuer: 'AI Conference 2022',
  //   date: 'September 2022',
  //   description: 'Recognized as a rising star in the field of artificial intelligence for contributions to explainable AI.',
  // },
  // {
  //   id: '4',
  //   title: 'Best Paper Award',
  //   issuer: 'International Conference on Machine Learning',
  //   date: 'July 2022',
  //   description: 'Received the best paper award for research on novel deep learning architectures for multimodal data analysis.',
  // },
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Artificial Intelligence powered chatbots for the speech disabled and hearing impaired using Feedforward Neural Network',
    authors: ['S Mukherjee, A Chatterjee, K Chandrakar, S Saxena .'],
    journal: '1st International Conference on Advances in Computing, Communication and Networking (ICAC2N)',
    year: '2025',
    doi: 'https://doi.org/10.1109/icac2n63387.2024.10894803',
    link: 'https://ieeexplore.ieee.org/abstract/document/10894803',
  },
  {
    id: '2',
    title: 'A Mixture of Experts approach for Morgan - Keenan Spectral classification of Gaia DR2 Stars',
    authors: ['S Mukherjee, B Tewari, P Mukherjee'],
    journal: '17th International Conference on Contemporary Computing (IC3-2025)',
    year: '2025',
    doi: 'https://doi.org/10.1109/IC366947.2025.11290684',
    link: 'https://ieeexplore.ieee.org/document/11290684',
  },
  // {
  //   id: '3',
  //   title: 'Efficient Model Compression Techniques for Edge AI Applications',
  //   authors: ['Williams, B.', 'Mukherjee, S.', 'Rodriguez, A.'],
  //   journal: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
  //   year: '2022',
  //   link: 'https://cvpr2022.thecvf.com/papers',
  // },
  // {
  //   id: '4',
  //   title: 'Self-Supervised Learning for Medical Image Analysis with Limited Labeled Data',
  //   authors: ['Mukherjee, S.', 'Patel, R.', 'Chang, S.'],
  //   journal: 'Nature Machine Intelligence',
  //   year: '2021',
  //   doi: '10.1038/s42256-021-00123-7',
  //   link: 'https://www.nature.com/natmachintell/',
  // },
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Deep Learning',
    issuer: 'NPTEL IIT Madras',
    date: 'November 2024',
    score: '74% (Topper 5%)',
    credentialId: 'NPTEL24CS114S869800069',
    credentialLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS114S86980006904337487',
    image: deeplearning,
  },
  {
    id: '2',
    title: 'Natural Language Processing',
    issuer: 'NPTEL IIT Kharagpur',
    date: 'May 2025',
    score: '57%',
    credentialId: 'NPTEL25CS51S34140002604382236',
    credentialLink: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS51S34140002604382236',
    image: nlp,
  },
  {
    id: '3',
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL IIT Kharagpur',
    date: 'September 2024',
    score: '81%',
    credentialId: 'NPTEL24CS81S33130000602761845',
    credentialLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS81S33130000602761845',
    image: ml,
  },
  {
    id: '4',
    title: 'Data Science for Engineers',
    issuer: 'NPTEL IIT Madras',
    date: 'April 2025',
    score: '75%',
    credentialId: 'NPTEL25CS20S44940001801393704',
    credentialLink: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS20S44940001801393704',
    image: ds,
  },
  {
    id: '5',
    title: 'Introduction to Large Language Models',
    issuer: 'NPTEL IIT Delhi & IIT Bombay',
    date: 'May 2025',
    score: '57%',
    credentialId: 'NPTEL25CS45S64140006104382236',
    credentialLink: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS45S64140006104382236',
    image: llm,
  },
  {
    id: '6',
    title: 'Python for Data Science',
    issuer: 'NPTEL IIT Madras',
    date: 'April 2025',
    score: '68%',
    credentialId: 'NPTEL25CS60S34940000901393704',
    credentialLink: 'https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS60S34940000901393704',
    image: python,
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Machine Learning Engineer',
    company: 'Tech Innovations Ltd.',
    location: 'Bangalore, India',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [
      'Developed and deployed machine learning models for predictive analytics, improving business decision-making by 35%',
      'Built end-to-end ML pipelines using PyTorch and TensorFlow, processing over 1M data points daily',
      'Implemented computer vision solutions for automated quality control, reducing manual inspection time by 60%',
      'Led a team of 3 junior engineers in developing explainable AI systems for regulatory compliance'
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Python', 'Docker', 'Kubernetes', 'AWS', 'MLflow'],
    type: 'full-time'
  },
  {
    id: '2',
    title: 'AI Research Intern',
    company: 'Advanced AI Research Lab',
    location: 'Mumbai, India',
    startDate: 'Jun 2022',
    endDate: 'Dec 2022',
    description: [
      'Conducted research on novel deep learning architectures for multimodal data analysis',
      'Published 2 research papers in top-tier conferences with 50+ citations',
      'Developed prototype systems for real-time image classification with 94% accuracy',
      'Collaborated with international research teams on federated learning projects'
    ],
    technologies: ['PyTorch', 'OpenCV', 'Scikit-learn', 'Jupyter', 'Git', 'Linux'],
    type: 'internship'
  },
  {
    id: '3',
    title: 'Data Science Consultant',
    company: 'Freelance',
    location: 'Remote',
    startDate: 'Jan 2022',
    endDate: 'May 2022',
    description: [
      'Provided ML consulting services to 5+ startups and SMEs',
      'Built custom recommendation systems and predictive models',
      'Delivered data-driven insights that increased client revenue by an average of 25%',
      'Mentored junior data scientists and conducted ML workshops'
    ],
    technologies: ['Python', 'R', 'SQL', 'Tableau', 'Apache Spark', 'MongoDB'],
    type: 'freelance'
  }
];