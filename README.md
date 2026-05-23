<p align="center">
  <strong>InAmigos Foundation</strong><br/>
  <em>Awareness Webpage — Spreading Hope, One Initiative at a Time</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Status-Internship%20Project-2d9f6f?style=for-the-badge" alt="Status" />
</p>

---

## A Note from the Developer

During my **internship at InAmigos Foundation**, I had the opportunity to work closely with a team that believes every act of kindness—no matter how small—can change a life. This website is my contribution to that belief.

It is not just a collection of pages. It is a digital window into the work being done every day: meals shared with families in need, children learning with hope in their eyes, women finding strength and independence, animals receiving care they deserve, and saplings taking root for a greener tomorrow.

I built this project to help more people **see**, **understand**, and **join** a mission that already touches thousands of lives across India.

---

## About This Project

| | |
|---|---|
| **Organization** | InAmigos Foundation |
| **Purpose** | NGO awareness & outreach webpage |
| **My Role** | Frontend development (Internship) |
| **Stack** | React · Vite · Tailwind CSS |
| **Type** | Frontend-only (no backend) |

This responsive website introduces the foundation, showcases its six core projects, highlights real social impact, and invites visitors to volunteer, donate, or explore CSR partnerships.

---

## About InAmigos Foundation

> *“At InAmigos Foundation, we believe in the power of collective action.”*

Founded on **23 September 2020** by **Mr. Govind Shukla** (Founder & CEO), InAmigos is a **Section 8** registered non-profit headquartered in **Bilaspur, Chhattisgarh**, serving communities across India.

### Trust & Credentials

- Section 8 — Licensed by the Central Government  
- 80G & 12A — Transparency and tax benefits for donors  
- CSR-1 — Corporate social responsibility partnerships  
- NITI Aayog — Aligned with national development goals  
- IAF ISO 9001:2015 — Quality standards in operations  

### Six Pillars of Change

| Initiative | What It Means for People |
|------------|--------------------------|
| **Project Seva** | Food and clothing for those who need dignity most |
| **Project Bachpanshala** | Education, digital literacy, and brighter futures for children |
| **Project Jeev** | Compassion, rescue, and daily care for stray animals |
| **Project Udaan** | Skills, confidence, and independence for women in rural India |
| **Project Prakriti** | Tree plantation and sustainable living for our planet |
| **Project Vikas** | Internships and employability for young professionals |

---

## What You Will Find on This Website

### Heart of the Experience

- **Hero slideshow** — Rotating photos from real projects and field work  
- **Impact in numbers** — Meals served, saplings planted, interns trained, lives touched  
- **Stories that matter** — Campaigns, events, and content highlights from the team  

### Built for Everyone

- **Light & dark mode** — Comfortable viewing, day or night  
- **Mobile-first design** — Accessible on any device  
- **Smooth, thoughtful animations** — A calm, professional feel—not distracting noise  

### Ways to Take Action

- Volunteer with the foundation  
- Support through donation (80G & 12A certified)  
- Explore CSR partnerships  
- Get in touch via contact form and map  

---

## Features at a Glance

---

## Tech Stack

| Layer | Tools |
|-------|--------|
| **UI** | React 19 |
| **Build** | Vite 6 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) |
| **Motion** | Framer Motion |
| **Icons** | Lucide React |

Clean, modern, and maintainable—chosen so future interns and developers can easily update content without heavy complexity.

---

## Getting Started

### Prerequisites

- Node.js 18+  
- npm  

### Install & Run

```bash
# Clone the repository
git clone <your-repo-url>
cd "InAmigos Awareness Page"

# Install dependencies
npm install

# Start development server
npm run dev

Visit http://localhost:5173 in your browser.

Build for Production
npm run build
npm run preview

Project Structure

InAmigos Awareness Page/
│
├── public/                    # Static files (favicon, local images)
│
├── src/
│   ├── components/            # Page sections & UI
│   │   ├── Hero.jsx           # Landing & mission
│   │   ├── HeroSlideshow.jsx  # Project photo carousel
│   │   ├── About.jsx          # Foundation story
│   │   ├── Projects.jsx       # Six initiatives
│   │   ├── Impact.jsx         # Social impact
│   │   ├── Campaigns.jsx      # Events & drives
│   │   ├── Highlights.jsx     # Stories & updates
│   │   ├── JoinCTA.jsx        # Volunteer / Donate / CSR
│   │   ├── Contact.jsx        # Reach us
│   │   └── ...
│   │
│   ├── data/
│   │   └── content.js         # ⭐ Edit text & images here
│   │
│   ├── context/
│   │   └── ThemeContext.jsx   # Light / dark mode
│   │
│   ├── App.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
└── package.json

Customizing Content
Most website content lives in one place:

src/data/content.js

Section in file	What it controls
projects
Project names, images, impact text
heroSlides
Hero slideshow photos & captions
campaigns
Event cards
highlights
Story / blog cards
stats
Impact numbers
contact
Address, email, phone
hashtags
Social media tags
Adding Your Own Images
Save images in public/images/
Use paths like: '/images/project-seva.jpg'
Or link images directly from your NGO website.

Deployment
After npm run build, upload the dist/ folder to your hosting provider.

Recommended hosts: Vercel · Netlify · GitHub Pages

Ensure SPA routing is enabled so all routes serve index.html.
