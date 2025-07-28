
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const skillsData = [
  { subject: 'Social Media', A: 95, fullMark: 100 },
  { subject: 'Content Marketing', A: 90, fullMark: 100 },
  { subject: 'SEO & Writing', A: 85, fullMark: 100 },
  { subject: 'Paid Advertising', A: 82, fullMark: 100 },
  { subject: 'Design & Creative', A: 88, fullMark: 100 },
  { subject: '360° Strategy', A: 92, fullMark: 100 },
];

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-16 sm:py-24 bg-light-card dark:bg-dark-card rounded-2xl my-16 sm:my-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">About Me</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            I am a results-oriented Digital Marketing Specialist with a passion for building brands and driving growth. With a strong foundation in both creative strategy and analytical reporting, I bridge the gap between marketing efforts and business objectives.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            My expertise spans across social media management, content creation, SEO, paid advertising, and data analysis. I thrive on developing comprehensive 360° marketing strategies that create cohesive and impactful brand experiences. I believe in continuous learning and staying ahead of industry trends to deliver innovative solutions.
                        </p>
                    </div>
                    <div className="w-full h-80 sm:h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                                <PolarGrid stroke="rgba(113, 113, 122, 0.3)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--color-text-secondary)', fontSize: 14 }} className="text-gray-600 dark:text-gray-400" />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar name="Skill Level" dataKey="A" stroke="#0D9488" fill="#0D9488" fillOpacity={0.6} />
                                <Tooltip
                                  contentStyle={{
                                    backgroundColor: 'rgba(31, 41, 55, 0.8)',
                                    borderColor: '#374151',
                                    borderRadius: '0.5rem',
                                    color: '#F9FAFB'
                                  }}
                                  cursor={{ stroke: '#0D9488', strokeWidth: 1, strokeDasharray: '3 3' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};
