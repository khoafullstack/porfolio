import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  portfolio = inject(PortfolioService);
  displayedName = signal('');
  
  private timeoutId: any;
  private isDeleting = false;

  ngOnInit() {
    this.typeWriterLoop();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeWriterLoop() {
    const fullName = this.portfolio.profile().name;
    const currentText = this.displayedName();
    let typeSpeed = 150;

    if (this.isDeleting) {
      this.displayedName.set(fullName.substring(0, currentText.length - 1));
      typeSpeed = 50; // Deleting speed is faster
    } else {
      this.displayedName.set(fullName.substring(0, currentText.length + 1));
      typeSpeed = 150; // Typing speed
    }

    if (!this.isDeleting && this.displayedName() === fullName) {
      typeSpeed = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedName() === '') {
      this.isDeleting = false;
      typeSpeed = 500; // Pause before restarting
    }

    this.timeoutId = setTimeout(() => {
      this.typeWriterLoop();
    }, typeSpeed);
  }
}
