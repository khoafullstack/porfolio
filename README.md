# .NET Developer Portfolio

Welcome to this personal Portfolio project built with **Angular** and **Tailwind CSS v4**, featuring a **Brutalism** and **Minimalism** design aesthetic.

## 👨‍💼 About Me

I am a **.NET Developer** with 5 years of extensive experience in building large-scale, high-performance, and scalable backend systems.

- **Work Philosophy:** Focus on practical value, performance optimization, and ensuring absolute system stability.
- **Strengths:** ASP.NET Core, Microservices Architecture, Database Optimization, and Cloud Infrastructure.
- **Goal:** Building technological solutions that not only perform exceptionally but also deliver measurable business impact.

---

## 🏗️ Website Structure

The website is designed with **Scroll-based Storytelling**, featuring a fixed Sidenav layout and smooth content transitions.

### 1. Main Layout
- **Sidenav (Left):** A fixed navigation bar with integrated **Scroll Spy** to automatically track the user's current section.
- **Content Area (Right):** The primary display area with **Slide-in** effects (sliding from right to left) as the user scrolls.

### 2. Components
- **Hero:** A striking greeting with a continuous **TypeWriter** effect and Call-to-Action buttons (Download CV, Contact).
- **About:** A summary of core competencies and primary areas of professional focus.
- **Skills:** A grid showcasing the Tech Stack, categorized by Backend, Database, DevOps, and Testing.
- **Featured Projects:** Presentation of key projects including problem statements, roles, and real-world impact metrics.
- **Experience & Contact:** Detailed professional history and a dedicated contact section.

### 3. Tech Stack
- **Angular 19+**: Leverages Standalone Components and Signals for efficient state management.
- **Tailwind CSS v4**: Implements a Brutalism UI with high contrast, thick borders, and hard shadows.
- **Intersection Observer API**: Powers the smooth sliding animations and Scroll Spy functionality.

---

## 🚀 Getting Started

To run the project locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm start
   ```
   Access `http://localhost:4200/` to view the application.

---

## 🛠️ Content Customization

All data displayed on the website is centrally managed in:
[portfolio.service.ts](file:///c%3A/Users/ken/Desktop/personal-project/porfolio/src/app/services/portfolio.service.ts)

Simply update the `signals` within this file to change your personal information, skills, or projects.
