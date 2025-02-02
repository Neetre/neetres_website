import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'RMS',
      description: 'A receipt management system',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'Python', 'Groq'],
      githubUrl: 'https://github.com/Neetre/receipts',
      liveUrl: 'http://rc.figliolo.it'
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio website',
      image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_503426092_342208.jpg',
      technologies: ['React', 'Tailwind CSS', 'Python', 'FastAPI'],
      githubUrl: 'https://github.com/Neetre/neetres_website',
      liveUrl: 'http://nee.figliolo.it'
    },
    {
      title: 'KoLama',
      description: 'A finetuned language model for English to Korean translation',
      image: 'https://www.searchenginejournal.com/wp-content/uploads/2023/04/hugging-face-huggingchat-644a286dee829-sej.png',
      technologies: ['Python', 'Hugging Face', 'Unsloth', 'Llama', 'Transformers'],
      githubUrl: 'https://github.com/Neetre/translator',
      liveUrl: 'https://huggingface.co/Neetree/KoLama'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">My Projects</h2>
          <div className="mt-4 text-xl text-gray-600">
            Here are some of my recent works
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
