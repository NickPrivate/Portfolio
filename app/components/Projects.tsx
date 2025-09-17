import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Signal Automation using ML',
    description: 'Designed and implemented a multi-process automated signal classification system w/ machine learning for RTX.',
    image: '/CapstoneProj.png',
    tags: ['Python', 'Machine Learning', 'AI', 'Signal Processing'],
    links: [
      { label: 'View Demo', url: 'https://www.youtube.com/watch?v=9-c0zTYUFcQ' }
    ]
  },
  {
    title: 'AI Content Generation',
    description: 'An open-source system for generating engaging short-form videos, leveraging cutting-edge machine learning models.',
    image: '/AIContentGen.png',
    tags: ['Python', 'AI', 'Machine Learning', 'Video Processing'],
    links: [
      { label: 'View Demo', url: 'https://www.youtube.com/watch?v=S5rRD_GUeGE' },
      { label: 'View Code', url: 'https://github.com/NickPrivate/Content-Generation-V1' }
    ]
  },
  {
    title: 'NYN Fitness',
    description: 'Dynamic workout app designed to provide users relevant workout recommendations for their individual preferences and goals.',
    image: '/NYNFitness.png',
    tags: ['React', 'JavaScript', 'Web Development', 'Full Stack'],
    links: [
      { label: 'View Website', url: 'https://nyn.amyip.net' },
      { label: 'View Code', url: 'https://github.com/amyipdev/nyn-fitness' }
    ]
  },
  {
    title: 'Secure File Sharing',
    description: 'Securely transfer files by utilizing custom cryptographic protocols. RSA/DSA for digital signature and AES for file transmission.',
    image: '/SecureFileSharing.png',
    tags: ['Security', 'Cryptography', 'Python', 'Network Programming'],
    links: [
      { label: 'View Demo', url: 'https://youtu.be/_aTffDwL2p8?t=240' },
      { label: 'View Code', url: 'https://github.com/NickPrivate/Secure-File-Sharing' }
    ]
  },
  {
    title: 'University Database',
    description: 'Designed and implemented a database system for a university with optimized SQL queries, increasing data retrieval speeds.',
    image: '/UniversityDatabase.png',
    tags: ['PostgreSQL', 'Database', 'SQL', 'Database Design'],
    links: [
      { label: 'View Project', url: 'https://github.com/NickPrivate/University-Database-Project/blob/main/README.md' },
      { label: 'View Code', url: 'https://github.com/NickPrivate/University-Database-Project' }
    ]
  },
  {
    title: 'My Portfolio Website',
    description: 'Check out my Portfolio on GitHub. This webpage is being hosted for free with Vercel. Created with vanilla HTML, CSS, and JS.',
    image: '/PortfolioWebsite.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    links: [
      { label: 'View Code', url: 'https://github.com/NickPrivate/Portfolio' }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
