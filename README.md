# ThisNThatMixUpShop

Welcome to the ThisNThatMixUpShop project! This is a React.js application styled with Tailwind CSS, designed to showcase a variety of products including apparel, accessories, and figures.

## Project Structure

The project is organized as follows:

```
thisnthat
├── public
│   ├── index.html         # Main HTML file for the application
│   └── favicon.ico        # Favicon for the website
├── src
│   ├── components         # Contains reusable components
│   │   ├── Header.jsx     # Header component
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Navbar.jsx     # Navigation bar component
│   │   ├── HeaderNavbar.jsx # Combined Header and Navbar component with side menu
│   │   ├── CartIcon.jsx   # Cart icon component
│   │   ├── ScrollToTop.jsx # Scroll-to-top functionality
│   │   ├── SearchBar.jsx  # Search bar component
│   │   └── SectionLinks.jsx # Section links for navigation
│   ├── pages              # Contains page components
│   │   ├── Home.jsx       # Home page
│   │   ├── Apparel.jsx    # Apparel page
│   │   ├── Accessories.jsx # Accessories page
│   │   ├── Figures.jsx    # Figures page
│   │   ├── AboutUs.jsx    # About Us page
│   │   ├── Cart.jsx       # Cart page
│   │   ├── Checkout.jsx   # Checkout page
│   │   └── Collections.jsx # Collections page
│   ├── App.jsx            # Main application component
│   ├── index.jsx          # Entry point of the React application
│   └── styles
│       └── tailwind.css   # Tailwind CSS styles
├── package.json           # npm configuration file
├── postcss.config.js      # PostCSS configuration file
├── tailwind.config.js     # Tailwind CSS configuration file
├── LICENSE                # License file for the project
└── README.md              # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```
   cd thisnthat
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Features

- **Responsive Design**: Built using Tailwind CSS for a fully responsive layout.
- **Side Hamburger Menu**:
  - Includes a close button and a centered logo.
  - Displays navigation links with larger, clickable text for better usability.
  - Disables scrolling on the main page when the menu is open.
  - Adds a darkened background overlay to highlight the menu.
- **Reusable Components**:
  - `CartIcon`: Displays the cart icon with item count.
  - `ScrollToTop`: Automatically scrolls to the top of the page when navigating.
  - `SearchBar`: Provides a search functionality for the site.
  - `SectionLinks`: Simplifies navigation between sections.
- **Multiple Pages**: Includes pages for different product categories such as Apparel, Accessories, and Figures.
- **Event Calendar**:
  - Displays upcoming events with details like date and location.
  - Allows users to click on events to view more information in a modal.
- **Facebook Live Integration**:
  - Embeds a Facebook Live video and chat for live product showcases.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.