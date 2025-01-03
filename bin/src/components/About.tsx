import React from 'react';
import { Code, Palette, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <div className="mt-4 text-xl text-gray-600">
            Passionate about leveraging technology to build intelligent, data-driven solutions that solve real-world problems.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">
              Experienced in full-stack software development, with a focus on creating scalable, maintainable, and efficient applications.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
            <p className="text-gray-600">
              Enthusiastic about exploring and implementing deep learning models to extract insights and drive innovation.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-gray-600">
              Skilled in analyzing complex datasets to uncover patterns, trends, and actionable insights.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
              Strong analytical mindset with a knack for tackling complex challenges through elegant and innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
