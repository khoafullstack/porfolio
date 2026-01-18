import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, signal } from '@angular/core';
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
  @ViewChildren('section') sections!: QueryList<ElementRef<HTMLElement>>;
  
  activeSection = signal<string>('hero');
  menuOpen = signal<boolean>(false);
  private readonly animatedSectionIds = new Set<string>();

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
          const sectionEl = entry.target as HTMLElement;
          this.activeSection.set(sectionEl.id);
          this.activateSectionAnimation(sectionEl);
        }
      });
    }, { threshold: 0.3 });

    this.sections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      this.activateSectionAnimation(element);
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.menuOpen.set(false); // Close mobile menu on click
    }
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  private activateSectionAnimation(sectionEl: HTMLElement) {
    if (this.animatedSectionIds.has(sectionEl.id)) {
      return;
    }

    const animatedEl = sectionEl.querySelector<HTMLElement>('[data-animate]');
    if (!animatedEl) {
      return;
    }

    this.animatedSectionIds.add(sectionEl.id);
    animatedEl.classList.remove('opacity-0', 'translate-x-20');
  }
}
