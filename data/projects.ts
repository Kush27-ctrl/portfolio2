
import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project1',
    title: 'Metro Print B2B Strategy',
    company: 'Meji Digital',
    category: 'Content Marketing',
    duration: '8 months',
    type: 'organic',
    socialMedia: {
      info: 'LinkedIn-focused B2B content strategy targeting print industry professionals with thought leadership content and industry insights.',
      handles: [
        { name: 'LinkedIn', engagement: '8.2%', reach: '125K' },
        { name: 'Twitter', engagement: '5.8%', reach: '45K' }
      ],
      metrics: {
        engagement: '8.2%',
        reach: '125K',
        impressions: '450K',
        growth: '35%'
      },
      links: ['https://linkedin.com/company/metro-print'],
      media: []
    },
    contentMarketing: {
      info: 'SEO-optimized blog content and whitepapers for thought leadership, targeting print industry decision-makers.',
      platforms: [
        { name: 'WordPress', desc: 'Company blog management' },
        { name: 'Medium', desc: 'Guest publications' }
      ],
      metrics: {
        traffic: '+40%',
        time: '3:45',
        bounce: '32%',
        leads: '+35%'
      },
      links: ['https://metroprint.com/blog'],
      media: []
    },
    designing: {
      info: 'Professional infographics and presentation templates following brand guidelines for B2B print industry.',
      tools: [
        { name: 'Canva', proficiency: 'Advanced' },
        { name: 'Adobe Illustrator', proficiency: 'Intermediate' }
      ],
      metrics: {
        performance: '87%',
        awareness: '+25%',
        engagement: '92%'
      },
      links: ['https://behance.net/kushal-designs'],
      media: []
    },
    paid: {
      info: 'LinkedIn Sponsored Content campaign targeting B2B decision-makers in the print industry for lead generation.',
      adCopies: {
        headline: 'Transform Your Print Business with Digital Marketing',
        description: 'Discover proven strategies that helped print businesses increase leads by 35%. Download our free guide.',
        cta: 'Download Free Guide'
      },
      campaignDetails: {
        platform: 'LinkedIn Ads',
        duration: '6 months',
        budget: '$50,000',
        audience: 'Print Industry Decision Makers'
      },
      goals: ['Lead Generation', 'Brand Awareness', 'Market Penetration'],
      metrics: {
        ctr: '2.8%',
        cpa: '$45',
        cpc: '$1.25',
        roas: '280%',
        conversion: '12%',
        impressions: '2.1M'
      },
      links: ['https://analytics.linkedin.com/campaigns'],
      media: []
    }
  },
  {
    id: 'project2',
    title: 'Kindersports Social Growth',
    company: 'Kindersports LLP',
    category: 'Social Media',
    duration: '12 months',
    type: 'organic',
    socialMedia: {
      info: 'Multi-platform organic growth strategy targeting youth sports enthusiasts with engaging content and community building.',
      handles: [
        { name: 'Instagram', engagement: '12.5%', reach: '350K' },
        { name: 'Facebook', engagement: '8.9%', reach: '200K' },
        { name: 'YouTube', engagement: '15.2%', reach: '180K' }
      ],
      metrics: {
        engagement: '12.5%',
        reach: '350K',
        impressions: '1.2M',
        growth: '200%'
      },
      links: ['https://instagram.com/kindersports', 'https://facebook.com/kindersports'],
      media: []
    },
    contentMarketing: {
      info: 'Educational content about youth sports, fitness tips, and parenting guidance for active families.',
      platforms: [
        { name: 'Blog', desc: 'Educational sports content' },
        { name: 'YouTube', desc: 'Video tutorials' }
      ],
      metrics: {
        traffic: '+150%',
        time: '4:20',
        bounce: '28%',
        leads: '+80%'
      },
      links: ['https://kindersports.com/blog'],
      media: []
    },
    designing: {
      info: 'Sports-themed graphics, video thumbnails, and promotional materials with vibrant, youth-oriented design.',
      tools: [
        { name: 'Canva', proficiency: 'Expert' },
        { name: 'Adobe Premiere Pro', proficiency: 'Advanced' }
      ],
      metrics: {
        performance: '94%',
        awareness: '+180%',
        engagement: '95%'
      },
      links: ['https://youtube.com/kindersports'],
      media: []
    },
    paid: {
        info: 'Facebook and Instagram ad campaigns for event promotion and membership drives targeting local families.',
        adCopies: {
            headline: 'Join the Fun at Kindersports!',
            description: 'Give your kids the active lifestyle they deserve. Join our sports programs and watch them thrive!',
            cta: 'Register Now'
        },
        campaignDetails: {
            platform: 'Meta Ads',
            duration: '12 months',
            budget: '$25,000',
            audience: 'Parents with children 5-15'
        },
        goals: ['Event Registration', 'Membership Growth', 'Brand Awareness'],
        metrics: {
            ctr: '3.2%',
            cpa: '$18',
            cpc: '$0.85',
            roas: '320%',
            conversion: '15%',
            impressions: '875K'
        },
        links: ['https://facebook.com/ads/manager'],
        media: []
    }
  },
   {
    id: 'project3',
    title: 'Lead Generation Campaign',
    company: 'Kindersports LLP',
    category: 'Paid Advertising',
    duration: '6 months',
    type: 'paid',
    socialMedia: {
      info: 'Targeted social media campaigns supporting lead generation efforts with strategic content and engagement.',
      handles: [
        { name: 'Facebook', engagement: '9.5%', reach: '180K' },
        { name: 'Instagram', engagement: '11.2%', reach: '120K' }
      ],
      metrics: {
        engagement: '10.3%',
        reach: '300K',
        impressions: '950K',
        growth: '85%'
      },
      links: ['https://facebook.com/kindersports'],
      media: []
    },
    contentMarketing: {
      info: 'Lead-focused content strategy with downloadable resources, guides, and registration-driving content.',
      platforms: [
        { name: 'Landing Pages', desc: 'Custom conversion pages' },
        { name: 'Email Marketing', desc: 'Nurture sequences' }
      ],
      metrics: {
        traffic: '+220%',
        time: '5:10',
        bounce: '22%',
        leads: '+185%'
      },
      links: ['https://kindersports.com/register'],
      media: []
    },
    designing: {
      info: 'Conversion-focused designs including landing pages, ad creatives, and lead magnets.',
      tools: [
        { name: 'Figma', proficiency: 'Advanced' },
        { name: 'Canva', proficiency: 'Expert' }
      ],
      metrics: {
        performance: '91%',
        awareness: '+95%',
        engagement: '88%'
      },
      links: ['https://kindersports.com/designs'],
      media: []
    },
    paid: {
      info: 'Multi-platform paid advertising campaign focusing on lead generation and membership conversion.',
      adCopies: {
        headline: 'Free Sports Trial for Your Child!',
        description: 'Book a free trial session and see why parents choose Kindersports for their kids active development.',
        cta: 'Book Free Trial'
      },
      campaignDetails: {
        platform: 'Google & Meta Ads',
        duration: '6 months',
        budget: '$35,000',
        audience: 'Local parents interested in youth sports'
      },
      goals: ['Lead Generation', 'Trial Bookings', 'Membership Conversions'],
      metrics: {
        ctr: '4.1%',
        cpa: '$22',
        cpc: '$0.95',
        roas: '385%',
        conversion: '18%',
        impressions: '1.2M'
      },
      links: ['https://kindersports.com/analytics'],
      media: []
    }
  },
  {
    id: 'project4',
    title: 'Print Arabia Digital Transform',
    company: 'Meji Digital',
    category: 'Multi-channel',
    duration: '10 months',
    type: 'multi-channel',
    socialMedia: {
      info: 'Comprehensive social media transformation for print industry brand with focus on B2B networking.',
      handles: [
        { name: 'LinkedIn', engagement: '7.8%', reach: '95K' },
        { name: 'Twitter', engagement: '5.2%', reach: '45K' },
        { name: 'Instagram', engagement: '6.8%', reach: '35K' }
      ],
      metrics: {
        engagement: '6.6%',
        reach: '175K',
        impressions: '680K',
        growth: '145%'
      },
      links: ['https://linkedin.com/company/print-arabia'],
      media: []
    },
    contentMarketing: {
      info: 'Digital transformation content strategy including case studies, industry insights, and thought leadership.',
      platforms: [
        { name: 'WordPress', desc: 'Corporate blog' },
        { name: 'Medium', desc: 'Industry publications' },
        { name: 'LinkedIn Publishing', desc: 'Professional articles' }
      ],
      metrics: {
        traffic: '+125%',
        time: '4:15',
        bounce: '29%',
        leads: '+95%'
      },
      links: ['https://printarabia.com/blog'],
      media: []
    },
    designing: {
      info: 'Complete visual identity overhaul with modern design elements for digital-first brand presence.',
      tools: [
        { name: 'Adobe Creative Suite', proficiency: 'Advanced' },
        { name: 'Figma', proficiency: 'Expert' }
      ],
      metrics: {
        performance: '89%',
        awareness: '+165%',
        engagement: '93%'
      },
      links: ['https://printarabia.com/portfolio'],
      media: []
    },
    paid: {
      info: 'Integrated paid strategy across Google Ads, LinkedIn, and industry publications for maximum reach.',
      adCopies: {
        headline: 'Revolutionize Your Print Business',
        description: 'Join the digital transformation. Discover how Print Arabia is leading the industry evolution.',
        cta: 'Learn More'
      },
      campaignDetails: {
        platform: 'Multi-platform (Google, LinkedIn, Trade Publications)',
        duration: '10 months',
        budget: '$75,000',
        audience: 'Print industry professionals and decision makers'
      },
      goals: ['Brand Transformation', 'Market Leadership', 'Lead Generation'],
      metrics: {
        ctr: '3.5%',
        cpa: '$38',
        cpc: '$1.10',
        roas: '295%',
        conversion: '14%',
        impressions: '1.8M'
      },
      links: ['https://printarabia.com/campaigns'],
      media: []
    }
  },
  {
    id: 'project5',
    title: 'SEO Content Optimization',
    company: 'Meji Digital',
    category: 'Content Marketing',
    duration: '8 months',
    type: 'organic',
    socialMedia: {
      info: 'Social media content optimized for SEO with strategic hashtag usage and cross-platform content distribution.',
      handles: [
        { name: 'LinkedIn', engagement: '6.8%', reach: '85K' },
        { name: 'Twitter', engagement: '4.9%', reach: '55K' }
      ],
      metrics: {
        engagement: '5.9%',
        reach: '140K',
        impressions: '520K',
        growth: '78%'
      },
      links: ['https://linkedin.com/company/meji-digital'],
      media: []
    },
    contentMarketing: {
      info: 'Comprehensive SEO content strategy with keyword optimization, content gaps analysis, and ranking improvements.',
      platforms: [
        { name: 'WordPress', desc: 'SEO-optimized blog posts' },
        { name: 'Google Search Console', desc: 'Performance monitoring' },
        { name: 'SEMRush', desc: 'Keyword research' }
      ],
      metrics: {
        traffic: '+185%',
        time: '5:45',
        bounce: '25%',
        leads: '+120%'
      },
      links: ['https://mejidigital.com/seo-results'],
      media: []
    },
    designing: {
      info: 'SEO-friendly visual content including optimized images, infographics, and featured image designs.',
      tools: [
        { name: 'Canva Pro', proficiency: 'Expert' },
        { name: 'Adobe Photoshop', proficiency: 'Advanced' }
      ],
      metrics: {
        performance: '85%',
        awareness: '+115%',
        engagement: '87%'
      },
      links: ['https://mejidigital.com/visual-content'],
      media: []
    },
    paid: {
      info: 'Paid search campaigns supporting organic SEO efforts with strategic keyword bidding and landing page optimization.',
      adCopies: {
        headline: 'Boost Your Search Rankings',
        description: 'Professional SEO services that deliver real results. Increase your visibility and drive more qualified traffic.',
        cta: 'Get SEO Audit'
      },
      campaignDetails: {
        platform: 'Google Ads',
        duration: '8 months',
        budget: '$40,000',
        audience: 'Businesses needing SEO services'
      },
      goals: ['Lead Generation', 'Brand Authority', 'Market Education'],
      metrics: {
        ctr: '2.9%',
        cpa: '$52',
        cpc: '$1.45',
        roas: '265%',
        conversion: '11%',
        impressions: '1.5M'
      },
      links: ['https://ads.google.com/campaigns'],
      media: []
    }
  },
  {
    id: 'project6',
    title: 'Influencer Marketing',
    company: 'Kindersports LLP',
    category: 'Social Media',
    duration: '4 months',
    type: 'organic',
    socialMedia: {
      info: 'Strategic influencer partnership campaign collaborating with sports personalities and fitness enthusiasts.',
      handles: [
        { name: 'Instagram', engagement: '18.5%', reach: '450K' },
        { name: 'YouTube', engagement: '22.1%', reach: '280K' },
        { name: 'TikTok', engagement: '25.8%', reach: '320K' }
      ],
      metrics: {
        engagement: '22.1%',
        reach: '1.05M',
        impressions: '3.2M',
        growth: '285%'
      },
      links: ['https://instagram.com/kindersports', 'https://youtube.com/kindersports'],
      media: []
    },
    contentMarketing: {
      info: 'User-generated content strategy leveraging influencer partnerships for authentic brand storytelling.',
      platforms: [
        { name: 'Instagram Stories', desc: 'Daily authentic content' },
        { name: 'YouTube Collaborations', desc: 'Long-form content' },
        { name: 'Blog Features', desc: 'Influencer stories' }
      ],
      metrics: {
        traffic: '+320%',
        time: '6:20',
        bounce: '18%',
        leads: '+250%'
      },
      links: ['https://kindersports.com/influencer-features'],
      media: []
    },
    designing: {
      info: 'Influencer campaign assets including branded templates, story highlights, and collaboration graphics.',
      tools: [
        { name: 'Canva Pro', proficiency: 'Expert' },
        { name: 'Adobe Creative Suite', proficiency: 'Advanced' },
        { name: 'Figma', proficiency: 'Advanced' }
      ],
      metrics: {
        performance: '96%',
        awareness: '+285%',
        engagement: '98%'
      },
      links: ['https://kindersports.com/campaign-assets'],
      media: []
    },
    paid: {
      info: 'Amplification strategy for influencer content through paid promotion and sponsored collaborations.',
      adCopies: {
        headline: 'See What Parents Are Saying!',
        description: 'Real families share their Kindersports experience. Join the community that is transforming young athletes.',
        cta: 'Join Our Community'
      },
      campaignDetails: {
        platform: 'Instagram & YouTube Ads',
        duration: '4 months',
        budget: '$20,000',
        audience: 'Parents following sports influencers'
      },
      goals: ['Community Growth', 'User-Generated Content', 'Brand Advocacy'],
      metrics: {
        ctr: '5.2%',
        cpa: '$15',
        cpc: '$0.65',
        roas: '420%',
        conversion: '22%',
        impressions: '985K'
      },
      links: ['https://kindersports.com/influencer-campaigns'],
      media: []
    }
  }
];
