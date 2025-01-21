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
      liveUrl: 'https://rc.figliolo.it'
    },
    {
      title: 'Portfolio',
      description: 'My personal portfolio website',
      image: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_503426092_342208.jpg',
      technologies: ['React', 'Tailwind CSS', 'Python', 'FastAPI'],
      githubUrl: 'https://github.com/Neetre/neetres_website',
      liveUrl: 'https://ne.figliolo.it'
    },
    {
      title: 'KoLama',
      description: 'A finetuned language model for English to Korean translation',
      image: 'https://cdn-lfs.hf.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/9cf16f4f32604eaf76dabbdf47701eea5a768ebcc7296acc1d1758181f71db73?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.png%3B+filename%3D"hf-logo.png"%3B&response-content-type=image%2Fpng&Expires=1737481986&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczNzQ4MTk4Nn19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5oZi5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzljZjE2ZjRmMzI2MDRlYWY3NmRhYmJkZjQ3NzAxZWVhNWE3NjhlYmNjNzI5NmFjYzFkMTc1ODE4MWY3MWRiNzM~cmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=t46~Lxqn2GVHgtXeExSSsEQCQAKX8NYxJh8bomKija64ZlUNccjlF0jgsND6bVcbJisWiZ0YZedmYg~-xyZNhzKdome-vOmemaRBx~GhfZNqtENlL5Tb4i6up4-BgQ-DalgxZMKnRDVLJLqKfmu-A5atccsAkzJ9mi5bJBrcDjkgs6EArmysCM3jYjdb1qBX9Gmy2kDkXfKYPyg7YnIRp9qzW4Y2cBucPfHRnt50xiG-hAQie2T7YhiPPtBDXw9SitkJ-3IbhsnJ3qewdS-fj3p-8A5IVTl1-PR5VHnKQMDnOC2JETRnfbuawA9-PS2Mj-a7KoWdADDSjZDIgPZF-g__&Key-Pair-Id=K3RPWS32NSSJCE',
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
