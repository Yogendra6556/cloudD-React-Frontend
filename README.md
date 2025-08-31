# myCloudIDE Frontend

This is the frontend for the myCloudIDE project, built with Next.js.

## Features

- Project creation and management
- Protected routes for authentication
- Integrated file tree and terminal UI
- Custom UI components (MagicUI, Shadcn)
- Modern theming and mode toggle

## Folder Structure

- `app/` - Main application pages and protected routes
- `components/` - Reusable UI and logic components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `public/` - Static assets
- `utils/api/` - API utilities

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- UI components are in `components/` and `components/magicui/`.
- Protected routes are under `app/(protected)/`.
- API endpoints and axios config are in `utils/api/`.

## Tech Stack

- Next.js
- React
- Shadcn UI
- MagicUI
- Tailwind CSS

## License

MIT
