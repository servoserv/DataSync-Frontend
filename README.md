# DataSync Frontend

This repository contains the React frontend for the DataSync application, providing a modern, responsive UI for interacting with the Google Sheets integration and custom data management features.

## Technology Stack

- **React**: UI Library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Component library built on Radix UI
- **Framer Motion**: Animations
- **React Query**: Server state management
- **React Hook Form**: Form handling

## Getting Started

### Prerequisites

- Node.js (v16+)
- DataSync Backend API (running)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/servoserv/DataSync-Frontend.git
   cd DataSync-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```
   VITE_API_URL=http://localhost:8080
   VITE_GOOGLE_SHEETS_API_KEY=your-google-sheets-api-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Features

- Connect to Google Sheets and view data
- Add custom columns to the UI (without modifying the original sheets)
- Real-time updates with WebSockets
- Authentication system
- Dynamic theming with customizable color palettes
- Responsive design for all device sizes

## Project Structure

- `/src/components`: UI components
- `/src/hooks`: Custom React hooks
- `/src/lib`: Utility functions and shared code
- `/src/pages`: Application pages/routes
- `/src/components/ui`: Shadcn UI components

## Deployment

For deployment instructions, see the [Deployment Guide](./DEPLOYMENT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.