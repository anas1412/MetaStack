# MetaStack 🚀

<p align="center">
    <img src="/public/images/logo.png" alt="MetaStack Screenshot" height="200px" width="200px">
</p>

**MetaStack** is a modern, production-ready starter template for building web applications. It combines popular technologies like **MongoDB**, **ExpressJS**, **TailwindCSS**, and **AlpineJS** to provide a seamless development experience. Whether you're building a simple website or a complex web app, this boilerplate has you covered.

## Features ✨

- **Responsive Design**: Built with mobile-first principles for a seamless experience across devices.
- **Modern Tooling**: Pre-configured with TailwindCSS and AlpineJS via CDN for quick setup.
- **Mobile Friendly**: Optimized for mobile devices to ensure a great user experience on any screen size.
- **API Ready**: Easily integrate with external APIs to extend the functionality of your application.
- **No CORS Issues**: No need for CORS configuration.
- **Simple HTML**: Clean HTML structure with AlpineJS for reactivity and TailwindCSS for styling.
- **Easy Backend**: Simplified backend setup with ExpressJS for quick development.

## Getting Started 🛠️

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. Download it from the official website.
- **MongoDB Atlas Account**: Create a free account on MongoDB Atlas.

### Installation

1.  Use this command to initiate a new project using the template.

```bash
npx degit anas1412/MetaStack my-new-project
```

2.  Navigate to the project directory.

```bash
cd my-new-project
```

3.  Install the required dependencies using npm.

```bash
npm install
```

4.  Copy .env.example and name it .env file in the root directory and add your MongoDB connection string.

```bash
cp .env.example .env
echo "MONGODB_URI=your-mongodb-connection-string" >> .env
```

5.  Start the development server using the provided npm script.

```bash
npm run dev
```

6.  Open your browser and visit the localhost URL to view the project.

```bash
http://localhost:5000
```

## Technologies Used 🛠️

- **Frontend**: TailwindCSS, AlpineJS
- **Backend**: ExpressJS, MongoDB
- **Other Tools**: Node.js, NPM

## Customization 🎨

### TailwindCSS Configuration

You can customize TailwindCSS by editing `public/js/tailwind-config.js`, you can also add vanilla css in `public/css/styles.css`.

Refer to the official TailwindCSS documentation for more details.

### Adding Routes

To add new routes, create a new file in the routes directory and import it into the main application file.

### Adding Animations

The project includes custom animations using TailwindCSS and AlpineJS. You can modify or add new animations in the custom CSS file.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes with a descriptive message.
4.  Push your changes to the branch.
5.  Open a pull request with a detailed description of your changes.

## License 📄

This project is licensed under the **MIT License**. See the LICENSE file for details.

## Acknowledgments 🙏

- **TailwindCSS**: For the amazing utility-first CSS framework.
- **AlpineJS**: For the lightweight and powerful JavaScript framework.
- **MongoDB Atlas**: For providing a free cloud-based database solution.
- **ExpressJS**: For the minimalist web framework.

## Support 💬

If you have any questions or need help, feel free to open an issue or contact me directly.

Enjoy building with **MetaStack**! 🚀
