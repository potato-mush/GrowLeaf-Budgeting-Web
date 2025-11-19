# GrowLeaf - Financial Management App

A modern, user-friendly financial management application that helps users track expenses, manage loans, and achieve savings goals.

## 🌟 Features

- **Expense Tracking**: Monitor your daily expenses with ease
- **Loan Management**: Keep track of loans and payments
- **Savings Goals**: Set and achieve your financial targets
- **User Feedback**: Share your thoughts and suggestions
- **Admin Dashboard**: Manage user feedback and suggestions
- **Privacy-Focused**: Your financial data is secure

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6 (Hash Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Custom component library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🏗️ Project Structure

```
web/
├── src/
│   ├── assets/          # Static assets (images, gifs)
│   ├── components/      # React components
│   │   ├── admin/       # Admin-related components
│   │   ├── home/        # Home page components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── shared/      # Shared/reusable components
│   │   └── ui/          # UI component library
│   ├── contexts/        # React contexts
│   ├── pages/           # Page components
│   │   └── admin/       # Admin pages
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Public assets
└── README.md           # Project documentation
```

## 🎨 Key Components

### Home Section
- Hero section with animated icons
- Feature showcase
- Animated wave background
- Responsive design for all devices

### Admin Panel
- Secure login system
- Feedback management
- Suggestion box management
- User feedback overview

### Pages
- **Home**: Landing page with features
- **Help**: User assistance and FAQs
- **Privacy Policy**: Data protection information
- **Terms**: Terms of service
- **Suggestion Box**: Submit feature requests
- **User Feedback**: Share experiences

## 🔒 Admin Access

The admin panel is protected and requires authentication. Default admin routes:
- Login: `/#/admin/login`
- Dashboard: `/#/admin/dashboard`

## 🎯 Environment Setup

The project uses Vite for fast development and optimized production builds.

### Development
```bash
npm run dev
```
Access at: `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 🌊 Custom Features

### Animated Waves
The homepage features custom CSS animations for wave effects:
- 4 layers of waves with different speeds
- Smooth continuous animation
- Responsive design

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Adaptive font sizes and layouts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 👥 Team

GrowLeaf Development Team

## 📞 Support

For support and inquiries, please use the Suggestion Box or Feedback features within the application.

---

**Built with ❤️ using React and TypeScript**
