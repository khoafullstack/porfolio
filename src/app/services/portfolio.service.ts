import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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

export interface Profile {
  name: string;
  title: string;
  valueProposition: string;
  email: string;
  location: string;
  availability: string;
  socials: SocialLink[];
}

export interface About {
  summary: string[];
  focusAreas: string[];
}

export interface Skills {
  backend: string[];
  database: string[];
  devops: string[];
  testing: string[];
}

export interface PortfolioData {
  profile: Profile;
  about: About;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private http = inject(HttpClient);

  readonly profile = signal<Profile>({
    name: '',
    title: '',
    valueProposition: '',
    email: '',
    location: '',
    availability: '',
    socials: []
  });

  readonly about = signal<About>({
    summary: [],
    focusAreas: []
  });

  readonly skills = signal<Skills>({
    backend: [],
    database: [],
    devops: [],
    testing: []
  });

  readonly projects = signal<Project[]>([]);
  readonly experience = signal<Experience[]>([]);

  constructor() {
    this.loadData();
  }

  private loadData() {
    this.http.get<PortfolioData>('assets/data/portfolio-data.json')
      .pipe(
        tap(data => {
          this.profile.set(data.profile);
          this.about.set(data.about);
          this.skills.set(data.skills);
          this.projects.set(data.projects);
          this.experience.set(data.experience);
        })
      )
      .subscribe({
        error: (err) => console.error('Failed to load portfolio data', err)
      });
  }
}
