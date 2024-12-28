# SurveyHub Mobile Application

![Ionic](https://img.shields.io/badge/Ionic-7.2.0-blueviolet?style=for-the-badge&logo=ionic)
![Angular](https://img.shields.io/badge/Angular-18.0.0-red?style=for-the-badge&logo=angular)
![Capacitor.js](https://img.shields.io/badge/Capacitor.js-6.1.2-brightgreen?style=for-the-badge&logo=capacitor)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.0-blue?style=for-the-badge&logo=typescript)
![JWT](https://img.shields.io/badge/JWT-Security-critical?style=for-the-badge&logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Build Status](https://img.shields.io/github/actions/workflow/status/manuelalejandrojimeneztorres/surveyhub-mobile/mobile-ci.yml?style=for-the-badge)
![Platform Support](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-orange?style=for-the-badge)
![Dependencies](https://img.shields.io/badge/Dependencies-Up%20to%20date-brightgreen?style=for-the-badge)

## Description

The **SurveyHub Mobile Application** is a state-of-the-art cross-platform hybrid app engineered to facilitate the efficient creation, management, and analysis of online surveys. Built with cutting-edge technologies like **Ionic**, **Angular**, and **Capacitor**, this application ensures a seamless, responsive, and secure user experience across Android, iOS, and web platforms. It integrates with the **SurveyHub Backend** via a robust RESTful API, offering powerful capabilities for user authentication, role-based access control, and dynamic survey interactions.

---

## Table of Contents

1. [Key Features](#key-features)
2. [Architecture Overview](#architecture-overview)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
   - [Project Setup](#project-setup)
   - [Building and Running the App](#building-and-running-the-app)
5. [Technologies and Tools Used](#technologies-and-tools-used)
6. [Dependencies](#dependencies)
7. [Troubleshooting](#troubleshooting)
8. [Contributing Guidelines](#contributing-guidelines)
9. [Support](#support)
10. [License](#license)
11. [Acknowledgments](#acknowledgments)

---

## Key Features

- **Cross-Platform Compatibility**: Unified experience across Android, iOS, and web platforms using **Ionic** and **Capacitor**.
- **Secure Authentication**:
  - JWT-based login and session management.
  - Role-based access control with predefined roles (System Administrator, Survey Manager, and Respondent).
- **Survey Management**:
  - Create, update, and analyze surveys in real-time.
  - Validate input dynamically with clear feedback for data integrity.
- **User Personalization**:
  - Update profile information, including secure password changes with BCrypt hashing.
  - Add profile pictures using **Capacitor Camera** or device file selection.
- **Enhanced User Experience**:
  - Dark mode support for improved accessibility.
  - Search and filter functionality for efficient data retrieval.
  - Fully responsive design optimized for various screen sizes.

[🔼 Back to Top](#table-of-contents)

---

## Architecture Overview

The application adopts a **service-oriented architecture**, seamlessly integrating the following components:

- **Frontend**:
  - Built with **Ionic Framework** and **Angular**, leveraging reusable components and modular architecture.
  - Uses **RxJS** for state management and reactive programming.
- **Backend Integration**:
  - Communicates with the **SurveyHub Backend** via RESTful API endpoints.
  - Ensures secure data transmission using JWT for authentication and role-based access control.
- **Capacitor Plugins**:
  - Utilized for native device functionalities, including camera access and file management.

[🔼 Back to Top](#table-of-contents)

---

## Prerequisites

Ensure the following tools and software are installed on your system:

- [Git](https://git-scm.com/downloads) - For version control
- [Node.js (20.17.0)](https://nodejs.org/) - JavaScript runtime
- [npm (10.9.0)](https://www.npmjs.com/) - Package manager
- [Ionic CLI](https://ionicframework.com/docs/cli) - For managing and serving the app
- **Optional**:
  - [Android Studio](https://developer.android.com/studio) - For Android builds
  - [Xcode](https://developer.apple.com/xcode/) - For iOS builds (macOS only)

[🔼 Back to Top](#table-of-contents)

---

## Installation

### Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/manuelalejandrojimeneztorres/surveyhub-mobile.git
   ```

2. Navigate to the project directory:

   ```bash
   cd surveyhub-mobile
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

<!--
### Environment Configuration

1. Create a `.env` file in the root directory and define the following variables:

   ```env
   API_BASE_URL=http://localhost:8080
   JWT_SECRET=YourStrongJWTSecret
   ```

   Ensure that `API_BASE_URL` corresponds to the backend server address.
 -->

[🔼 Back to Top](#table-of-contents)

### Building and Running the App

#### Run in a Browser

1. Start the development server:

   ```bash
   ionic serve
   ```

2. Access the app via your browser at `http://localhost:8100`.

#### Run on Android

1. Add the Android platform:

   ```bash
   ionic capacitor add android
   ```

2. Open the project in Android Studio:

   ```bash
   ionic capacitor open android
   ```

3. Build and run the app on an emulator or connected device.

#### Run on iOS

1. Add the iOS platform:

   ```bash
   ionic capacitor add ios
   ```

2. Open the project in Xcode:

   ```bash
   ionic capacitor open ios
   ```

3. Build and run the app on an iOS simulator or device.

[🔼 Back to Top](#table-of-contents)

---

## Technologies and Tools Used

- **Frameworks and Libraries**:
  - Ionic (7.2.0): Hybrid app framework
  - Angular (18.0.0): Frontend framework
  - Capacitor.js (6.1.2): Cross-platform runtime
  - TypeScript (5.4.0): Programming language

- **Development Tools**:
  - Visual Studio Code: Code editor
  - Android Studio: For Android builds
  - Xcode: For iOS builds
  - Google Chrome: Browser for testing

[🔼 Back to Top](#table-of-contents)

---

## Dependencies

Key dependencies include:

- `@angular/core`: Angular framework
- `@capacitor/camera`: Access to device cameras
- `@capacitor/filesystem`: File management
- `@ionic/angular`: Ionic framework components
- `rxjs`: Reactive programming library

> [!NOTE]
> Refer to the `package.json` file for a complete list of dependencies.

[🔼 Back to Top](#table-of-contents)

---

## Troubleshooting

### Common Issues

- **API Connection Errors**:
  - Verify that the backend server is running<!-- and the `API_BASE_URL` is correctly configured in the `.env` file -->.

- **Build Errors**:
  - Ensure all dependencies are installed by running `npm install`.
  - Check for compatibility issues with the installed versions of Node.js and npm.

- **Native Platform Issues**:
  - For Android, ensure Android Studio is correctly set up and updated.
  - For iOS, verify that Xcode is properly installed and configured.

[🔼 Back to Top](#table-of-contents)

---

## Contributing Guidelines

We welcome contributions to enhance the SurveyHub Mobile Application. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes with detailed messages:

   ```bash
   git commit -m "Add: Description of your feature"
   ```

4. Push your branch and open a pull request.

> [!NOTE]
> For detailed guidelines, refer to [CONTRIBUTING.md](CONTRIBUTING.md).

[🔼 Back to Top](#table-of-contents)

---

## Support

For support, contact:

- **Email**: support@surveyhub.com
- **Documentation**: [SurveyHub Mobile Wiki](https://github.com/manuelalejandrojimeneztorres/surveyhub-mobile/wiki)

[🔼 Back to Top](#table-of-contents)

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

[🔼 Back to Top](#table-of-contents)

---

## Acknowledgments

Special thanks to:

- The [Ionic Team](https://ionicframework.com/) for their exceptional hybrid app framework.
- The [Angular Team](https://angular.io/) for their robust frontend framework.
- The open-source community for providing invaluable tools and libraries.

[🔼 Back to Top](#table-of-contents)

---

For more information, visit [SurveyHub Backend](https://github.com/manuelalejandrojimeneztorres/surveyhub-server) or [SurveyHub Desktop](https://github.com/manuelalejandrojimeneztorres/surveyhub-desktop).

Enjoy building with the **SurveyHub Mobile Application** and feel free to contribute to its development! 🚀

[🔼 Back to Top](#table-of-contents)
