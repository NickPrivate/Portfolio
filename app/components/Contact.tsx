import Image from 'next/image';

const contactLinks = [
  {
    name: 'Email',
    url: 'mailto:Nick.Goulart30@gmail.com',
    icon: '/iconmonstr-email-2.svg',
    alt: 'Email Icon',
    description: 'Get in touch via email'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nickprivate',
    icon: '/iconmonstr-github-3.svg',
    alt: 'GitHub Icon',
    description: 'View my code repositories'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nickgoulart',
    icon: '/iconmonstr-linkedin-3.svg',
    alt: 'LinkedIn Icon',
    description: 'Connect on LinkedIn'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's connect and explore how we can innovate together! I'm always interested in new opportunities, 
            collaborations, and meaningful conversations about technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-gray-600"
            >
              <div className="bg-white rounded-xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{link.name}</h3>
              <p className="text-gray-400 text-sm">{link.description}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to work together?</h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind, want to discuss technology, or just want to say hello, 
              I'd love to hear from you!
            </p>
            <a
              href="mailto:Nick.Goulart30@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Send me an email
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
