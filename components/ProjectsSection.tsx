
import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import { Project } from '../types';
import { ProjectDetailView } from './ProjectDetailView';
import { BarChartIcon, CheckCircleIcon, UsersIcon, ExternalLinkIcon } from './Icons';

type ContentKey = 'socialMedia' | 'contentMarketing' | 'designing' | 'paid';

export const ProjectsSection: React.FC = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string>(projectsData[0].id);

    const selectedProject = useMemo(() => {
        return projectsData.find(p => p.id === selectedProjectId) as Project;
    }, [selectedProjectId]);

    const ProjectTab: React.FC<{ project: Project }> = ({ project }) => (
        <button
            onClick={() => setSelectedProjectId(project.id)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 border-l-4 ${
                selectedProjectId === project.id 
                ? 'bg-primary/10 border-primary text-primary-700 dark:text-primary-300' 
                : 'border-transparent hover:bg-gray-100 dark:hover:bg-dark-card/50'
            }`}
        >
            <h3 className="font-bold text-lg">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.company}</p>
            <p className="text-xs mt-2 inline-block bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">{project.category}</p>
        </button>
    );

    return (
        <section id="projects" className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Case Studies</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    A selection of projects that showcase my skills and impact.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 xl:col-span-3">
                    <div className="sticky top-24 space-y-2 bg-light-card/50 dark:bg-dark-card/50 p-2 rounded-xl">
                        {projectsData.map(project => (
                            <ProjectTab key={project.id} project={project} />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-8 xl:col-span-9">
                    {selectedProject && <ProjectDetailView project={selectedProject} />}
                </div>
            </div>
        </section>
    );
};
