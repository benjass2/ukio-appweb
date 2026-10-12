# Ukio Web Application

## Overview

Ukio Web Application is a frontend application developed with Vue 3 and JavaScript. The platform allows users to explore cities, view available apartments, and submit apartment rental requests.

The application follows Domain-Driven Design (DDD), Layered Architecture, and Component-Based Architecture to ensure maintainability, scalability, and separation of concerns.

## Authorship

- **Author:** Benjamin Solorzano
- **Course:** Web Applications
- **Private GitHub Repository:** https://github.com/YOUR-USERNAME/YOUR-PRIVATE-REPOSITORY

## Features

- **City Exploration:** Displays cities with their population, description, and total number of apartments.
- **Apartment Listing:** Displays apartment information, including bedrooms, garage spaces, price, and description.
- **Apartment Renting:** Allows users to select rental dates and submit rental requests.
- **Rental Validation:** Validates required fields and prevents renting unavailable apartments.
- **Internationalization:** Supports English and Spanish, with English as the default language.
- **Navigation:** Provides routing between Home, Apartment Renting, and Page Not Found views.
- **Responsive Design:** Adapts the interface to different screen sizes.
- **API Integration:** Retrieves and updates information through a REST API.

## Tech Stack

- **Frontend Framework:** Vue 3
- **Programming Language:** JavaScript
- **Build Tool:** Vite
- **UI Components:** PrimeVue
- **CSS Utilities:** PrimeFlex
- **Icons:** PrimeIcons
- **State Management:** Pinia
- **Routing:** Vue Router
- **Internationalization:** Vue I18n
- **HTTP Client:** Axios
- **Mock Backend:** JSON Server 0.17.4
- **Architecture:** Domain-Driven Design (DDD), Layered Architecture, Component-Based Architecture
- **Design Patterns:** Entity, Resource, Assembler, API, Endpoint, Store

## Configuration

### Prerequisites

- Node.js and npm
- JetBrains WebStorm or another compatible IDE
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-PRIVATE-REPOSITORY.git
```

Navigate to the project directory:

```bash
cd YOUR-PRIVATE-REPOSITORY
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root directory:

```env
VITE_UKIO_API_URL=http://localhost:3000
VITE_CITIES_ENDPOINT_PATH=/cities
VITE_APARTMENTS_ENDPOINT_PATH=/aparments
```

### Run the Mock API

Start JSON Server:

```bash
npx json-server --watch server/db.json --port 3000
```

Available endpoints:

- `GET /cities`
- `GET /aparments`
- `PATCH /aparments/:id`

### Run the Application

Open another terminal and execute:

```bash
npm run dev
```

Open the local URL displayed by Vite in your browser.

### Production Build

```bash
npm run build
```

## Project Structure

The project is organized into the following bounded contexts:

- **public:** Home view and general public-facing features.
- **properties:** Cities, apartments, and rental management.
- **shared:** Reusable infrastructure, layout components, and common functionality.

Each bounded context follows the corresponding domain, application, infrastructure, and presentation responsibilities where applicable.