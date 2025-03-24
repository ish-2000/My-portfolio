# Portfolio Website with Dark/Light Theme

This portfolio website features a fully implemented theme system that allows users to switch between dark and light modes.

## Theme System Features

- Automatic theme detection based on system preferences
- Manual toggle between dark and light themes
- Theme preference saved in localStorage
- Smooth transitions between themes
- Fully responsive design

## Technologies Used

- React.js
- Tailwind CSS for styling
- Framer Motion for animations
- React Scroll for smooth navigation
- EmailJS for contact form

## How the Theme System Works

The theme system uses Tailwind's dark mode with the 'class' strategy. When a user toggles the theme:

1. The context adds/removes the 'dark' class from the HTML element
2. Theme preference is saved to localStorage
3. All components use Tailwind's dark: variant for styling
4. Transitions are applied for a smooth visual experience

## Development

To work on this project:

1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Customization

To customize the theme colors, modify the tailwind.config.js file. The current setup includes:

- Light mode colors under 'light'
- Dark mode colors under 'dark'
- Primary colors for accent elements
