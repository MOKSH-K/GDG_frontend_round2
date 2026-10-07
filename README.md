DevBoard 🚀

A responsive frontend web application for students to discover, search, filter, save, and explore upcoming tech events, workshops, and hackathons.

📌 Overview

DevBoard is a student-focused event discovery platform built as part of a Frontend Development Round 2 challenge.

The goal is to provide students with a simple and intuitive interface where they can:

Discover upcoming technology events

Search events by name or keyword

Filter events by category

Sort events by date or category

View detailed event information

Save and remove favourite events

Track upcoming events using countdowns

Discover popular/trending events

Use the application comfortably on desktop and mobile devices

✨ Features

🔎 Search & Filtering

Case-insensitive event search

Search across event names, descriptions, and categories

Category filtering

Search and category filtering work together

No-results state

📅 Event Discovery

Each event displays:

Event name

Date

Category

Description

Location

Event format

❤️ Saved Events

Save and remove events

Prevent duplicate saved events

Immediate saved-event count updates

Persistence using localStorage

🔥 Trending Events

A dedicated Trending section highlights popular events based on their save/popularity count.

⏳ Event Countdown

Events display countdown information for upcoming events, including:

Upcoming events

Events happening today

Completed events

🌓 Dark Mode

Users can switch between light and dark themes, with the preference persisted using localStorage.

📖 Event Details

A polished modal provides detailed information about an event without leaving the main page.

📱 Responsive Design

The interface adapts to desktop, tablet, and mobile screen sizes.

⚡ UI States

The application includes:

Loading state

No-results state

Empty Saved state

Completed-event state

🎨 UI & UX

Subtle animations and transitions

Interactive event cards

Responsive navigation

Clear visual hierarchy

Accessibility-friendly labels and controls

Escape-key support for closing the details modal

🛠️ Tech Stack

Technology

Purpose

HTML5

Page structure and semantic markup

CSS3

Styling, responsive layout, animations, and dark mode

JavaScript

Rendering, filtering, sorting, saving, countdowns, and interactions

LocalStorage

Saved events and theme persistence

The current version is frontend-only and uses a local JavaScript event dataset.

📂 Project Structure

DevBoard/
├── index.html
├── style.css
├── script.js
└── README.md

index.html

Contains the main application structure:

Navigation

Hero section

Trending events

Discover events

Search/filter controls

Saved events

Event details modal

Loading and empty states

Footer

style.css

Handles:

UI styling

Event cards

Responsive layouts

Dark mode

Animations and transitions

Modal

Mobile navigation

Loading and empty states

script.js

Handles:

Event rendering

Search and filtering

Sorting

Saved events

Trending events

Countdown calculations

Event details modal

LocalStorage

Theme switching

Mobile menu

⚙️ How It Works

Event Data

Events are represented as JavaScript objects inside the events array.

{
  id: 1,
  name: "Google Developer Student Club Hackathon",
  category: "Hackathon",
  date: "2026-10-18",
  location: "Bangalore",
  format: "Offline",
  description: "Build innovative solutions with your team...",
  saves: 128
}

Rendering

JavaScript dynamically generates reusable event cards from the event dataset instead of manually duplicating HTML.

Search + Filtering

Search and category filtering are combined using:

Search match AND Category match

Search text is normalized with lowercase conversion, making the search case-insensitive.

Saved Events

Saved event IDs are maintained in an array. Before adding an event, its ID is checked to prevent duplicates. The saved data is persisted using localStorage.

Sorting

Users can sort events by:

Date

Category

Countdown

The application calculates the difference between the current date and the event date and displays the appropriate countdown state.

Trending

Events are sorted by popularity/save count and the top events are shown in the Trending section.

✅ Requirement Coverage

The implementation addresses the important behaviour specified in the challenge brief:

Requirement

Implementation

Search and filtering work together

Combined logic in getCurrentFilteredEvents()

Case-insensitive search

Text is normalized with .toLowerCase()

No duplicate favourites

Saved IDs are checked before adding

No matching events

noResults state is displayed

Appropriate UI feedback

Loading, empty Saved, no-results, and completed states

Responsive interface

CSS media queries for different screen sizes

Immediate UI updates

Interactions re-render relevant UI sections immediately

The provided brief explicitly requires these behaviours.

⭐ Bonus Features Implemented

✅ Sorting by date

✅ Sorting by category

✅ Dedicated Saved Events section

✅ Polished event details view

✅ Dark mode/theme switching

✅ Subtle animations and transitions

✅ Accessibility improvements

✅ Trending Events

✅ Event Countdown

The first six bonus areas are included in the provided challenge brief.

🚀 Run Locally

No backend setup is required.

Option 1 — Open directly

Clone/download the repository.

Open the project folder.

Open index.html in a browser.

Option 2 — VS Code Live Server

Open the folder in VS Code.

Install the Live Server extension.

Right-click index.html.

Select Open with Live Server.

🌐 Deployment

The project can be deployed as a static frontend application using platforms such as:

Vercel

Netlify

GitHub Pages

Live Demo: YOUR_DEPLOYED_LINK

GitHub Repository: YOUR_GITHUB_REPOSITORY_LINK

Deployment is mandatory according to the challenge brief.

🎥 Video Walkthrough

The project walkthrough should cover:

Project approach

Component/code structure

Main features and user flow

Important technical decisions

Challenges and solutions

Bonus features

🧠 Key Technical Decisions

Vanilla JavaScript

HTML, CSS, and JavaScript keep the implementation lightweight and easy to understand while allowing the event rendering and interaction logic to remain separate from the page structure.

LocalStorage

localStorage provides browser-side persistence for saved events and theme preferences without requiring a backend database.

Local Event Dataset

The current frontend-round version uses local JavaScript data to demonstrate the complete UI and interaction flow. The same rendering and filtering architecture can later consume data from an API.

🔮 Future Improvements

Real event API integration

User authentication

Cloud-based saved events

Dedicated event pages/routes

Event registration links

Calendar integration

Location-based discovery

Pagination/infinite scrolling

Admin dashboard

Backend database

Real-time popularity

More advanced accessibility support

📌 Current Limitations

The project is intentionally frontend-focused:

Events are stored locally in JavaScript.

Saved events use browser localStorage.

There is no authentication system.

Event registration is not connected to an external service.

🤖 AI Usage

AI tools may be used during development, but the submitted implementation should be understood by the developer. The challenge specifically expects the developer to be able to explain the implementation, component/code structure, and technical decisions during evaluation.

👨‍💻 Project Information

Project: DevBoard
Type: Responsive Frontend Web Application
Purpose: Student Tech Event Discovery
Built with: HTML, CSS, JavaScript

📄 Challenge Reference

This project was developed according to the provided Frontend Development Round 2 brief, including its requirements, important behaviour, bonus opportunities, deployment expectations, and video walkthrough requirements.

📜 License

Created for educational and frontend evaluation purposes.
