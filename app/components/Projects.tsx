import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Automated Signal Classification using Machine Learning',
    description: 'Built a multi-process system that automates signal classification using advanced ML techniques. Architected scalable pipelines to process large datasets efficiently and improve classification accuracy.',
    image: '/CapstoneProj.png',
    tags: ['Python', 'Machine Learning', 'Keras', 'NumPy','PyQT', 'TensorFlow', 'Scikit-learn'],
    links: [
      { label: 'View Demo', url: 'https://www.youtube.com/watch?v=9-c0zTYUFcQ' }
    ]
  },
  {
    title: 'Short form Video Generation Platform with AI',
    description: 'Developed an open-source platform that generates engaging short-form videos with AI. Integrated machine learning models for automated script creation, video editing, and content optimization.',
    image: '/AIContentGen.png',
    tags: ['Python', 'AI', 'Open-Source', 'Ollama', 'Machine Learning', 'FFmpeg'],
    links: [
      { label: 'View Demo', url: 'https://www.youtube.com/watch?v=S5rRD_GUeGE' },
      { label: 'View Code', url: 'https://github.com/NickPrivate/Content-Generation-V1' }
    ]
  },
  {
    title: 'Mindaro Solutions - AI Solutions for Modern Businesses',
    description: 'Created a full-stack business portfolio platform showcasing AI and software solutions. Designed with modern web technologies and deployed on Vercel for scalable, cost-efficient hosting.',
    image: '/MindaroWebsite.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel', 'AWS', 'Supabase', 'N8N'],
    links: [
      { label: 'View Website', url: 'https://mindarosolutions.com' },
      { label: 'View Code', url: 'https://github.com/NickPrivate/Portfolio' }
    ]
  },
  {
    title: 'NYN Fitness - Dynamic Workout Recommendation App',
    description: 'Built a dynamic fitness app that generates personalized workout recommendations. Designed for multi-platform support, enabling users to achieve their fitness goals through adaptive exercise planning.',
    image: '/NYNFitness.png',
    tags: ['Svelte', 'JavaScript', 'Web Development', 'Full Stack', 'C++', 'Flask', 'Multi-Platform'],
    links: [
      { label: 'View Website', url: 'https://nyn.amyip.net' },
      { label: 'View Code', url: 'https://github.com/amyipdev/nyn-fitness' }
    ]
  },
  {
    title: 'Encrypted File Transfer Platform with Digital Signatures',
    description: 'Engineered a hybrid peer-to-peer secure file transfer system featuring RSA/DSA-based digital signatures and AES encryption. Ensures confidential, authenticated file sharing over networked environments.',
    image: '/SecureFileSharing.png',
    tags: ['Python', 'SQLite', 'Cryptography', 'Network Programming', 'Sockets',],
    links: [
      { label: 'View Demo', url: 'https://youtu.be/_aTffDwL2p8?t=240' },
      { label: 'View Code', url: 'https://github.com/NickPrivate/Secure-File-Sharing' }
    ]
  },
  {
    title: 'University Data Management System with SQL Optimization',
    description: 'Developed a robust university database system with optimized SQL queries to streamline data retrieval. Improved query performance, schema design, and overall database scalability.',
    image: '/UniversityDatabase.png',
    tags: ['PHP', 'Apache', 'MySQL', 'Linux', 'CSS', 'HTML', 'Database Design', 'Python'],
    links: [
      { label: 'View Code', url: 'https://github.com/NickPrivate/University-Database-Project' }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Projects</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Check out some of the projects I have worked on. Each project showcases different aspects of my skills and interests in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
