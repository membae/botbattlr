# Bot Army Management App

## Overview

The **Bot Army Management App** is a React-based web application that allows users to browse a collection of bots, view detailed information about each bot, and manage a personal army by adding or removing bots. The app ensures that each bot can only be added to the user's army once and offers the ability to persist the army data even after refreshing the page.

## Features

- **Browse Bots:** View a collection of bots with detailed information such as health, damage, armor, and more.
- **Manage Army:** Add bots to your personal army. Each bot can only be added once.
- **Persist Data:** The app saves your army to the browser's `localStorage`, so your data is retained even after a page refresh.
- **Remove Bots:** Permanently delete bots from the collection or simply drop them from your army.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **CSS:** Styling for the app components.
- **JavaScript:** Logic and interactivity.
- **JSON-Server:** Mock backend to serve bot data.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of React and JavaScript.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bot-army-management.git
   cd bot-army-management
