import React, { useEffect, useState } from 'react';
import { landing, own } from './image';

const App: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  const name = 'Sushant Rana';
  const tagline = 'Frontend Developer | UI/UX Enthusiast';
  const email = 'sushantrana1121@gmail.com';
  const skills: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'];

  const projects: { title: string; desc: string; tech: string; link: string }[] = [
    {
      title: 'Product Landing Page',
      desc: 'Responsive landing page focused on UI clarity, CTAs, and accessible layout. Built with React + Tailwind.',
      tech: 'React, Tailwind, HTML, CSS',
      link: '#',
    },
    {
      title: 'UI Component Library',
      desc: 'Collection of reusable components (cards, buttons, modals) with a consistent design language.',
      tech: 'React, Tailwind',
      link: '#',
    },
    {
      title: 'Interactive Portfolio',
      desc: 'A modern portfolio with theme toggle and smooth section navigation.',
      tech: 'React, Tailwind',
      link: '#',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">

    <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">{tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${email}`} className="hidden sm:inline-block px-4 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
          <button
  onClick={() => setDark(!dark)}
  className="p-2 rounded-full bg-white dark:bg-gray-700 transform transition duration-500 hover:rotate-12"
>
  {dark ? '🌙' : '☀️'}
</button>

        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <section className="grid gap-6 md:grid-cols-2 items-center my-8">
          <div>
            <h2 className="text-4xl font-bold leading-tight">Hi, I’m {name}.</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{tagline} focused on building clean, responsive interfaces and delightful user experiences. I enjoy crafting pixel-perfect UI and turning designs into accessible, maintainable code.</p>

            <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transform transition duration-300 shadow-lg">See Projects</a>
<a href={`mailto:${email}`} className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transform transition duration-300 shadow-lg">Contact Me</a>

            </div>

            <div className="mt-6 text-sm text-gray-500">Available for internships — ready to contribute and learn.</div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-56 h-56 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              <img src={own} alt="SR" />
            </div>
          </div>
        </section>

        {/* About + Skills */}
        <section className="grid md:grid-cols-3 gap-6 my-8">
          <div className="md:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">I build user-friendly interfaces with attention to detail and accessible design. I enjoy collaborating with designers and backend developers to deliver polished products. Currently learning more advanced React patterns and UX research methods.</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transform transition duration-300 shadow-lg">Open to work</a>
              <a href="#" className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transform transition duration-300 shadow-lg">Remote</a>
            </div>
          </div>

          <aside className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <h4 className="font-semibold">Skills</h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">{s}</li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Projects */}
        <section id="projects" className="my-8">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:translate-y-[-4px] transition-transform">
                <div className="h-36 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 mb-4 flex items-center justify-center text-sm">
                  <img src={landing} alt="preview" />
                </div>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                <div className="mt-3 text-xs text-gray-500">{p.tech}</div>
                <div className="mt-4">
                  <a href={p.link} className="text-sm px-3 py-1 border rounded-md">View</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="my-12 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Email me at <a href={`mailto:${email}`} className="underline">{email}</a> or use the quick links below.</p>

          <div className="mt-4 flex gap-3">
            <a href={`mailto:${email}`} className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transform transition duration-300 shadow-lg">Email</a>
            <a href="#" className="px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:scale-105 transform transition duration-300 shadow-lg">LinkedIn</a>
          </div>
        </section>

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 p-6">Our Location</h3>
            <div className="h-64">
              {/* Google Map iframe placeholder */}
              <iframe
                title="ShopEase Location"
                src="https://maps.google.com/maps?q=Dhangadhi,Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

        <footer className="py-6 text-center text-sm text-gray-500">Made with ❤️ by {name} — Frontend Developer | UI/UX Enthusiast</footer>
      </main>
    </div>
  );
};

export default App;
