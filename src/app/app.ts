import { Component, ElementRef, OnInit, ViewChildren, QueryList, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    AboutComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    ExperienceComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  
  activeSection = signal<string>('hero');
  menuOpen = signal<boolean>(false);

  navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
          
          // Add slide-in animation class when visible
          entry.target.classList.add('slide-in-active');
          entry.target.classList.remove('opacity-0', 'translate-x-20');
        }
      });
    }, { threshold: 0.2 });

    this.sections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen.set(false); // Close mobile menu on click
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
