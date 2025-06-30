🎬 Movie Database App
A modern, responsive React application for browsing movies, built with the TMDB API. Features include movie search, favorites management, and detailed movie information pages.
✨ Features
🏠 Home Page

Browse popular movies with poster, title, and release year
Real-time movie search functionality
Responsive grid layout for optimal viewing on all devices

❤️ Favorites System

Add/remove movies from your personal favorites list
Persistent storage using localStorage
Dedicated favorites page to view all saved movies

🎭 Movie Details Page

Comprehensive movie information including:

High-quality poster and movie metadata
Full plot synopsis and movie overview
Cast information with actor photos
Movie trailers embedded from YouTube
User ratings and release information
Genre tags and runtime details



🔍 Search & Navigation

Instant movie search with TMDB database
Smooth navigation between pages
Clean, intuitive user interface

🛠️ Technologies Used

Frontend Framework: React 18
Build Tool: Vite
Routing: React Router DOM
Styling: CSS3 with modern features
API: The Movie Database (TMDB) API
State Management: React Context API
Local Storage: For favorites persistence
Responsive Design: Mobile-first approach

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 14.0 or higher)
npm or yarn
A TMDB API key (free registration required)

⚡ Quick Start
1. Clone the Repository
bashgit clone https://github.com/SATHV1-K/movie-database-app.git
cd movie-database-app
2. Install Dependencies
bashnpm install
# or
yarn install
3. Environment Setup
Create a .env file in the root directory and add your TMDB API key:
envVITE_API_KEY=your_tmdb_api_key_here
Getting a TMDB API Key:

Visit TMDB website
Create a free account
Go to Settings → API
Request an API key
Copy your API key to the .env file

4. Start Development Server
bashnpm run dev
# or
yarn dev
Visit http://localhost:5173 to view the application.
5. Build for Production
bashnpm run build
# or
yarn build
📁 Project Structure
movie-database-app/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── contexts/
│   │   └── MovieContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Favorites.jsx
│   │   └── MovieDetails.jsx
│   ├── services/
│   │   └── api.js
│   ├── css/
│   │   ├── App.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── MovieDetails.css
│   │   ├── Navbar.css
│   │   ├── Favorites.css
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
🎯 Key Features Implementation
Context API for State Management
The app uses React Context to manage favorites across components:

Global state for favorites list
Persistent storage with localStorage
Optimized re-renders with proper context structure

Dynamic Routing

Home page: /
Favorites page: /favorites
Movie details: /movie/:id

API Integration

TMDB API for movie data
Error handling and loading states
Optimized API calls with proper data fetching

🎨 Design Features

Modern UI: Clean, professional design with smooth animations
Responsive Layout: Optimized for desktop, tablet, and mobile devices
Interactive Elements: Hover effects, smooth transitions, and visual feedback
Accessibility: Semantic HTML and keyboard navigation support

🔄 Future Enhancements
Potential features to add:

 User authentication and profiles
 Movie reviews and ratings system
 Advanced filtering (genre, year, rating)
 Watchlist functionality
 Social sharing features
 Dark/light theme toggle
 Movie recommendations based on favorites

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📜 License
This project is open source and available under the MIT License.
👨‍💻 Author
Your Name

GitHub: @SATHV1-K
LinkedIn: https://www.linkedin.com/in/sathvikjasti/

🙏 Acknowledgments

The Movie Database (TMDB) for providing the comprehensive movie API
Tech With Tim for the original project inspiration
React and Vite communities for excellent documentation and tools

📞 Support
If you have any questions or need help with setup, please open an issue or contact me directly.

⭐ If you found this project helpful, please give it a star on GitHub!
Happy coding! 🚀