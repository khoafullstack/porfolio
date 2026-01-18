import { Injectable, signal } from '@angular/core';

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Project {
  name: string;
  problem: string;
  role: string;
  techStack: string[];
  impact: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly profile = signal({
    name: 'Your Name',
    title: '.NET Developer (5 years)',
    valueProposition: 'Building scalable, high-performance backend systems that drive business growth.',
    email: 'contact@example.com',
    location: 'Ho Chi Minh City, Vietnam',
    availability: 'Open to opportunities',
    socials: [
      { name: 'GitHub', url: 'https://github.com/' },
      { name: 'LinkedIn', url: 'https://linkedin.com/' },
      { name: 'Email', url: 'mailto:contact@example.com' }
    ] as SocialLink[]
  });

  readonly about = signal({
    summary: [
      'Deep expertise in ASP.NET Core & Distributed Systems.',
      'Proven track record in optimizing database performance.',
      'Passionate about Clean Architecture & Domain-Driven Design.'
    ],
    focusAreas: ['Backend Development', 'System Integration', 'Performance Tuning', 'Cloud Architecture']
  });

  readonly skills = signal({
    backend: ['ASP.NET Core', 'Web API', 'EF Core', 'Dapper', 'C#', 'Microservices'],
    database: ['SQL Server', 'PostgreSQL', 'Redis', 'Elasticsearch'],
    devops: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions/Azure DevOps)', 'Azure/AWS'],
    testing: ['xUnit', 'NUnit', 'Moq', 'Swagger/OpenAPI', 'K6']
  });

  readonly projects = signal<Project[]>([
    {
      name: 'E-Commerce Microservices Platform',
      problem: 'Legacy monolith was unable to scale during peak traffic events.',
      role: 'Backend Lead',
      techStack: ['.NET 8', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Docker'],
      impact: [
        'Reduced API latency by 40% via caching strategies.',
        'Handled 10k+ concurrent users during Black Friday sales.',
        'Decoupled order processing system, improving reliability to 99.9%.'
      ],
      link: 'https://github.com/example/project1'
    },
    {
      name: 'Real-time Logistics Tracker',
      problem: 'Lack of visibility into fleet location caused delivery delays.',
      role: 'Full Stack Developer (.NET + Angular)',
      techStack: ['ASP.NET Core SignalR', 'Angular', 'SQL Server', 'Azure Maps'],
      impact: [
        'Enabled real-time tracking for 500+ vehicles.',
        'Reduced customer support calls by 25% by providing self-service tracking.',
        'Optimized route calculation algorithm, saving 15% fuel costs.'
      ]
    },
    {
      name: 'Financial Reporting System',
      problem: 'Slow generation of end-of-month reports (took 4+ hours).',
      role: 'Backend Developer',
      techStack: ['.NET Core', 'Dapper', 'SQL Stored Procedures', 'Background Jobs'],
      impact: [
        'Optimized SQL queries to reduce report generation time to < 10 minutes.',
        'Implemented automated background processing for heavy calculations.',
        'Ensured 100% data accuracy across millions of transaction records.'
      ]
    }
  ]);

  readonly experience = signal<Experience[]>([
    {
      role: 'Senior .NET Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: [
        'Leading a team of 5 developers in migrating legacy .NET Framework apps to .NET 8.',
        'Designing cloud-native architectures on Azure.',
        'Mentoring junior developers and establishing code quality standards.'
      ],
      techStack: ['.NET 8', 'Azure', 'CosmosDB', 'Angular']
    },
    {
      role: 'Backend Developer',
      company: 'Global Software Corp',
      period: '2020 - 2023',
      description: [
        'Developed high-performance RESTful APIs for fintech applications.',
        'Integrated third-party payment gateways (Stripe, PayPal).',
        'Implemented comprehensive unit and integration testing strategies.'
      ],
      techStack: ['.NET Core 3.1/6', 'SQL Server', 'RabbitMQ', 'Docker']
    }
  ]);
}
