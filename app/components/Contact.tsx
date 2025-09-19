"use client";

import { useState } from "react";
import Image from "next/image";

const contactLinks = [
  {
    name: "Email",
    url: "mailto:Nick.Goulart30@gmail.com",
    icon: "/iconmonstr-email-2.svg",
    alt: "Email Icon",
    description: "Get in touch via email",
  },
  {
    name: "GitHub",
    url: "https://github.com/nickprivate",
    icon: "/iconmonstr-github-3.svg",
    alt: "GitHub Icon",
    description: "View my code repositories",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/nickgoulart",
    icon: "/iconmonstr-linkedin-3.svg",
    alt: "LinkedIn Icon",
    description: "Connect on LinkedIn",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'mindaro-solutions-website'
        }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's connect and explore how we can innovate together! I'm always
            interested in new opportunities, collaborations, and meaningful
            conversations about technology.
          </p>
        </div>

        {/* Contact Cards */}
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
              <h3 className="text-xl font-semibold text-white mb-2">
                {link.name}
              </h3>
              <p className="text-gray-400 text-sm">{link.description}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind, want to discuss technology, or
              just want to say hello, I'd love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
