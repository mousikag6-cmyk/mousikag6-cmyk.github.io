# Personal Portfolio Website – Mousika G

A modern, responsive, and elegant personal portfolio website built with React, Vite, and Tailwind CSS for **Mousika G**, an aspiring Software Developer and B.Tech Information Technology student at Sri Shakthi Institute of Engineering and Technology.

---

## 🎨 Brand Colour Palette
The website strictly uses the specified three-colour brand palette throughout all components:
- **Mocha Brown (`#5B4632`)**: Main headings, navigation brand text, footer background, primary emphasis, and dark contrast sections.
- **Champagne Gold (`#F4D9A0`)**: Card highlights, decorative borders, ambient glow elements, accents, and badge styling.
- **Burnt Amber (`#C8792C`)**: Primary action buttons, hover effects, active navigation states, interactive icons, and key highlights.
- **Warm Ivory / Off-White (`#FAF7F2` / `#FFFDF9`)**: Background surface maintaining optimal readability and contrast.

---

## 🚀 Sections Included
1. **Sticky Navigation Bar**:
   - Mousika G branding logo.
   - Smooth navigation links to all sections.
   - Active section highlighting via scroll position detection.
   - Responsive mobile navigation drawer with hamburger toggle.
2. **Hero Section**:
   - Greeting: "Hello, I'm Mousika G".
   - Professional Title: "Aspiring Software Developer".
   - Status pill: "Open to Learning and Opportunities".
   - Introduction narrative.
   - Action buttons: "View My Projects" & "Contact Me".
   - Replaceable profile image placeholder with Champagne Gold & Burnt Amber accents.
3. **About Me**:
   - Detailed academic & career focus paragraphs.
   - 3 information cards: Education, Graduation Year (2028), and Career Goal.
4. **Technical Skills**:
   - Categorized into Programming Languages, Frontend Development, Backend Development, Database, Tools & Platforms, and Additional Interests.
   - Clean skill badges with icons and hover effects.
5. **My Projects**:
   - **AI Smart Flashcards and Quiz Generator**: Prominently featured full-stack AI project built with React, Node.js, Express, MongoDB, and Gemini AI.
   - **BUYWISE**: E-Commerce website built with HTML and CSS.
   - **LEGALEASE**: Contract Simplifier web application built with HTML and CSS.
   - Direct GitHub link buttons pointing to project repositories on GitHub.
6. **Certifications**:
   - FreeAcademy.ai – How LLMs Work (Credential ID: FA-2026-MHLW-FBNDFH, Issued: Nov 11, 2026).
   - Udemy – MERN Stack.
   - NPTEL – Cloud Computing.
7. **Education**:
   - Vertical timeline showcasing B.Tech IT (CGPA: 7.99), HSC (85%), and SSLC (87%).
8. **Areas of Interest**:
   - Full Stack Development, Software Development, Web Design, UI/UX Design, Artificial Intelligence, and Generative AI.
9. **My Strengths**:
   - Problem Solving, Communication, Teamwork, Time Management, Adaptability, and Continuous Learning.
10. **Let's Connect (Contact)**:
    - Personal email, college email, phone number, location, LinkedIn, and GitHub links.
    - Quick-copy clipboard action buttons with visual confirmation.
    - Contact form with client-side validation and direct email delivery through FormSubmit.
11. **Footer**:
    - Mocha Brown background, Champagne Gold accents, quick links, dynamic year calculation.
12. **Back-to-Top**:
    - Floating action button with smooth scroll.

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Poppins (Google Fonts)

---

## Contact Form Email Setup

The contact form submits directly to FormSubmit, which forwards messages to `mousikag6@gmail.com` and sends the sender an automatic receipt. No API keys or environment variables are required.

On the first submission, FormSubmit sends an activation email to `mousikag6@gmail.com`. Click that one-time link to activate the form; submissions will not be forwarded until activation is complete. FormSubmit then displays its confirmation page after successful submission.

## 💻 How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### 1. Clone or Open the Project Folder
Open your terminal inside the project directory:
```bash
cd "c:\Users\MOUSIKA\OneDrive\Desktop\antigrav"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`).

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```
