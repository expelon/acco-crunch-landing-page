import {
  TrendingUp,
  Zap,
  Target,
  Users,
  BarChart3,
  Shield,
} from 'lucide-react';

export const services = [
  {
    icon: Target,
    title: 'Business Registration & Advisory',
    features: [
      'Company Registration (Pvt Ltd, LLP, OPC, Partnership)',
      'Business Structuring & Strategy',
      'GST / MSME / Startup India Registration',
      'Trademark Advisory',
    ],
  },
  {
    icon: Shield,
    title: 'Accounting & Compliance',
    features: [
      'Monthly Bookkeeping',
      'TDS, GST, Income Tax Filing',
      'Corporate Annual Filing (ROC filings)',
      'CFO Services for SMEs',
    ],
  },
  {
    icon: BarChart3,
    title: 'Tax Planning & Consulting',
    features: [
      'Capital Structuring & Tax Strategy',
      'Investment Advisory for Business Decision Making',
      'International Tax & Expansion Support',
    ],
  },
];

export const whyChooseUs = [
  {
    title: 'Proven Track Record',
    description:
      'Over 15 years of delivering exceptional results across diverse industries',
    stat: '500+',
    label: 'Projects',
  },
  {
    title: 'Expert Team',
    description:
      'Seasoned consultants with deep industry expertise and practical experience',
    stat: '50+',
    label: 'Experts',
  },
  {
    title: 'Client Success',
    description:
      'Dedicated to your success with personalized strategies and ongoing support',
    stat: '95%',
    label: 'Satisfaction',
  },
  {
    title: 'Global Reach',
    description:
      'International presence with local market knowledge and cultural understanding',
    stat: '25+',
    label: 'Countries',
  },
];

export const caseStudies = [
  {
    title: 'Healthcare Transformation',
    category: 'Healthcare',
    description:
      'Implemented digital solutions that reduced operational costs by 40% while improving patient outcomes.',
    results: '+40% Efficiency',
    image: '🏥',
  },
  {
    title: 'Retail Expansion Strategy',
    category: 'Retail',
    description:
      'Guided successful market entry into 5 new markets, generating $50M in first-year revenue.',
    results: '$50M Revenue',
    image: '🛍️',
  },
  {
    title: 'Tech Company Scale-Up',
    category: 'Technology',
    description:
      'Streamlined operations and optimized processes to support 300% growth over 2 years.',
    results: '+300% Growth',
    image: '💻',
  },
  {
    title: 'Manufacturing Excellence',
    category: 'Manufacturing',
    description:
      'Reduced production costs by 35% through lean manufacturing and process optimization.',
    results: '-35% Costs',
    image: '🏭',
  },
];

export const pricing = [
  {
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses starting their growth journey',
    features: [
      'Initial business assessment',
      'Strategic roadmap development',
      '3 consulting sessions per month',
      'Email support',
      'Basic market analysis',
      'Quarterly progress reports',
    ],
  },
  {
    name: 'Professional',
    price: '$5,000',
    description: 'Ideal for growing companies seeking comprehensive support',
    features: [
      'Everything in Starter',
      'Unlimited consulting sessions',
      'Dedicated account manager',
      '24/7 priority support',
      'Advanced analytics dashboard',
      'Monthly strategy reviews',
      'Custom research reports',
      'Team training workshops',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'C-suite strategic advisory',
      'Multi-department integration',
      'On-site consulting visits',
      'Proprietary tools & frameworks',
      'Change management support',
      'Merger & acquisition advisory',
      'Global expansion strategy',
    ],
  },
];

export const testimonials = [
  {
    name: 'Titus Gomez',
    role: 'Client',
    company: 'Company Registration',
    content:
      'They guided me through every step. I now run a fully compliant private limited company with confidence.',
    rating: 5,
  },
  {
    name: 'Sivakumar',
    role: 'Client',
    company: 'Firm Registration',
    content: 'Accuracy & professionalism at its best.',
    rating: 5,
  },
  {
    name: 'Unni Babu',
    role: 'Client',
    company: 'GST Registration',
    content: 'Their clarity and support made GST compliance simple.',
    rating: 5,
  },
  {
    name: 'Arun Bose',
    role: 'Client',
    company: 'Project Report',
    content: 'Financial projection helped secure bank loan approval.',
    rating: 5,
  },
  {
    name: 'Riyas',
    role: 'Client',
    company: 'GST Filing',
    content: 'Fast, error-free GST filing every month.',
    rating: 5,
  },
];
