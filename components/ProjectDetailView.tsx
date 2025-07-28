
import React, { useState } from 'react';
import { Project, SocialMedia, ContentMarketing, Designing, Paid } from '../types';
import { BarChartIcon, CheckCircleIcon, UsersIcon, ExternalLinkIcon, TrendUpIcon } from './Icons';

type ContentKey = 'socialMedia' | 'contentMarketing' | 'designing' | 'paid';

interface MetricCardProps {
    label: string;
    value: string;
    icon: React.ReactNode;
}
const MetricCard: React.FC<MetricCardProps> = ({ label, value, icon }) => (
    <div className="bg-light-bg dark:bg-dark-bg p-4 rounded-lg flex items-center space-x-4">
        <div className="text-primary bg-primary/10 p-3 rounded-full">{icon}</div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
    </div>
);

const SectionWrapper: React.FC<{ title: string, info: string, children: React.ReactNode }> = ({ title, info, children }) => (
    <div className="space-y-6">
        <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{info}</p>
        </div>
        {children}
    </div>
);

const SocialMediaContent: React.FC<{ data: SocialMedia }> = ({ data }) => (
    <SectionWrapper title="Social Media Strategy" info={data.info}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard label="Engagement" value={data.metrics.engagement} icon={<CheckCircleIcon />} />
            <MetricCard label="Total Reach" value={data.metrics.reach} icon={<UsersIcon />} />
            <MetricCard label="Impressions" value={data.metrics.impressions} icon={<BarChartIcon />} />
            <MetricCard label="Growth" value={data.metrics.growth} icon={<TrendUpIcon />} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <h5 className="font-semibold mb-2">Platform Handles</h5>
                <div className="space-y-3">
                    {data.handles.map(h => (
                         <div key={h.name} className="flex items-center justify-between bg-light-bg dark:bg-dark-bg p-3 rounded-lg">
                            <span className="font-medium">{h.name}</span>
                            <div className="text-right">
                                <p className="text-sm"> <span className="font-semibold">{h.engagement}</span> engagement</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{h.reach} reach</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                 <h5 className="font-semibold mb-2">Relevant Links</h5>
                {data.links.map((link, i) => (
                    <a href={link} key={i} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline">
                        <span>{link.split('/').slice(-1)}</span>
                        <ExternalLinkIcon />
                    </a>
                ))}
            </div>
        </div>
    </SectionWrapper>
);

const ContentMarketingContent: React.FC<{ data: ContentMarketing }> = ({ data }) => (
    <SectionWrapper title="Content Marketing" info={data.info}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard label="Traffic" value={data.metrics.traffic} icon={<TrendUpIcon />} />
            <MetricCard label="Avg. Time on Page" value={data.metrics.time} icon={<BarChartIcon />} />
            <MetricCard label="Bounce Rate" value={data.metrics.bounce} icon={<CheckCircleIcon />} />
            <MetricCard label="Leads Generated" value={data.metrics.leads} icon={<UsersIcon />} />
        </div>
    </SectionWrapper>
);

const DesigningContent: React.FC<{ data: Designing }> = ({ data }) => (
    <SectionWrapper title="Design & Creative" info={data.info}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard label="Performance" value={data.metrics.performance} icon={<TrendUpIcon />} />
            <MetricCard label="Awareness" value={data.metrics.awareness} icon={<UsersIcon />} />
            <MetricCard label="Engagement" value={data.metrics.engagement} icon={<CheckCircleIcon />} />
        </div>
        <div>
            <h5 className="font-semibold mb-2">Tools Used</h5>
            <div className="flex flex-wrap gap-2">
                {data.tools.map(t => (
                    <span key={t.name} className="bg-gray-200 dark:bg-gray-700 text-sm font-medium px-3 py-1 rounded-full">{t.name}: {t.proficiency}</span>
                ))}
            </div>
        </div>
    </SectionWrapper>
);

const PaidContent: React.FC<{ data: Paid }> = ({ data }) => (
    <SectionWrapper title="Paid Advertising" info={data.info}>
        <div className="bg-light-bg dark:bg-dark-bg p-4 rounded-lg">
            <h5 className="font-bold text-lg mb-2">Ad Copy</h5>
            <blockquote className="border-l-4 border-primary pl-4 italic">
                <p className="font-semibold">"{data.adCopies.headline}"</p>
                <p className="text-sm mt-1">{data.adCopies.description}</p>
                <p className="text-sm font-bold text-primary mt-2">{data.adCopies.cta}</p>
            </blockquote>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             <MetricCard label="CTR" value={data.metrics.ctr} icon={<TrendUpIcon />} />
             <MetricCard label="Impressions" value={data.metrics.impressions} icon={<BarChartIcon />} />
             <MetricCard label="Conversion" value={data.metrics.conversion} icon={<CheckCircleIcon />} />
             <MetricCard label="ROAS" value={data.metrics.roas} icon={<TrendUpIcon />} />
             <MetricCard label="CPA" value={data.metrics.cpa} icon={<UsersIcon />} />
             <MetricCard label="CPC" value={data.metrics.cpc} icon={<UsersIcon />} />
        </div>
        <div>
            <h5 className="font-semibold mb-2">Campaign Goals</h5>
            <div className="flex flex-wrap gap-2">
                {data.goals.map(g => (
                    <span key={g} className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-medium px-3 py-1 rounded-full">
                        <CheckCircleIcon className="w-4 h-4" />
                        <span>{g}</span>
                    </span>
                ))}
            </div>
        </div>
    </SectionWrapper>
);

const contentComponents: Record<ContentKey, React.FC<any>> = {
    socialMedia: SocialMediaContent,
    contentMarketing: ContentMarketingContent,
    designing: DesigningContent,
    paid: PaidContent,
};


export const ProjectDetailView: React.FC<{ project: Project }> = ({ project }) => {
    const [activeTab, setActiveTab] = useState<ContentKey>('socialMedia');

    const tabs: { key: ContentKey, label: string }[] = [
        { key: 'socialMedia', label: 'Social Media' },
        { key: 'contentMarketing', label: 'Content' },
        { key: 'designing', label: 'Design' },
        { key: 'paid', label: 'Paid Ads' },
    ];
    
    const ActiveComponent = contentComponents[activeTab];

    return (
        <div className="bg-light-card dark:bg-dark-card p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.duration}</span>
                <span>&bull;</span>
                <span className="capitalize px-2 py-0.5 bg-primary/10 text-primary rounded-full">{project.type}</span>
            </div>
            
            <div className="border-b border-light-border dark:border-dark-border mt-6 mb-6">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    {tabs.map(tab => (
                        project[tab.key] && (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`${
                                    activeTab === tab.key
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                            >
                                {tab.label}
                            </button>
                        )
                    ))}
                </nav>
            </div>
            
            <div>
                 {project[activeTab] && <ActiveComponent data={project[activeTab]} />}
            </div>
        </div>
    );
};
