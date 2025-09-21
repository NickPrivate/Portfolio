import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  links: {
    label: string;
    url: string;
  }[];
  tags: string[];
}

const tagColors: { [key: string]: string } = {
  'TypeScript': 'bg-blue-100 text-blue-800',
  'Next.js': 'bg-gray-100 text-gray-800',
  'React': 'bg-cyan-100 text-cyan-800',
  'Python': 'bg-yellow-100 text-yellow-800',
  'JavaScript': 'bg-yellow-100 text-yellow-800',
  'Node.js': 'bg-green-100 text-green-800',
  'Supabase': 'bg-emerald-100 text-emerald-800',
  'PostgreSQL': 'bg-blue-100 text-blue-800',
  'Machine Learning': 'bg-purple-100 text-purple-800',
  'AI': 'bg-pink-100 text-pink-800',
  'Security': 'bg-red-100 text-red-800',
  'Database': 'bg-indigo-100 text-indigo-800',
  'Web Development': 'bg-orange-100 text-orange-800',
  'Full Stack': 'bg-teal-100 text-teal-800',
  'API': 'bg-violet-100 text-violet-800',
  'CSS': 'bg-rose-100 text-rose-800',
  'HTML': 'bg-amber-100 text-amber-800',
  'Git': 'bg-slate-100 text-slate-800',
  'Vercel': 'bg-gray-100 text-gray-800',
  'Tailwind': 'bg-cyan-100 text-cyan-800',
  'Django': 'bg-green-100 text-green-800',
  'Flask': 'bg-red-100 text-red-800',
  'Express': 'bg-yellow-100 text-yellow-800',
  'MongoDB': 'bg-green-100 text-green-800',
  'Firebase': 'bg-orange-100 text-orange-800',
  'FFmpeg': 'bg-zinc-300 text-zinc-800',
  'TensorFlow': 'bg-orange-100 text-orange-800',
  'Keras': 'bg-red-100 text-red-800',
  'Scikit-learn': 'bg-indigo-100 text-indigo-800',
  'Matlab': 'bg-red-100 text-red-800',
  'NumPy': 'bg-blue-100 text-blue-800',
  'Svelte': 'bg-orange-100 text-orange-800',
  'SQLite': 'bg-slate-100 text-slate-800',
  'MySQL': 'bg-blue-100 text-blue-800',
  'Backend': 'bg-purple-100 text-purple-800',
  'Terminal UI': 'bg-gray-100 text-gray-800',
  'Sockets': 'bg-green-100 text-green-800',
  'Ollama': 'bg-green-100 text-green-800',
  'PyQT': 'bg-red-100 text-red-800',
  'C++': 'bg-blue-100 text-blue-800',
  'C#': 'bg-purple-100 text-purple-800',
  'Open-Source': 'bg-teal-100 text-teal-800',
  'Network Programming': 'bg-indigo-100 text-indigo-800',
  'Cryptography': 'bg-yellow-100 text-yellow-800',
  'AWS': 'bg-orange-100 text-orange-800',
  'N8N': 'bg-amber-100 text-amber-800',
  'Linux': 'bg-blue-100 text-blue-800',
  'Apache': 'bg-purple-100 text-purple-800',
  'PHP': 'bg-pink-100 text-pink-800',
};

export default function ProjectCard({ title, description, image, links, tags }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                tagColors[tag] || 'bg-gray-100 text-gray-800'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-700 hover:scale-105"
            >
              {link.label}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
