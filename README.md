# Milestone Blog App

## Expected Outcome

![ScreenRecording2024-02-02at13 25 55-ezgif com-speed](https://github.com/cihanbagriyanik/Milestone-_BlogApp_react-ts-vite-mui-redux-formik-yup/assets/132518854/2f38a748-a0d3-48b2-b8ac-d07fa431c201)

### Blog App Backend (Blog API)

[Backend](#backend)

## Folder/File Structure:

```
Milestone Blog App

SOLUTION
├── public
|    ├── assets
|    |   └── loading.gif
├── src
|    ├── app
|    │   └── store.tsx
|    ├── components
|    │   ├── auth
|    │   │   ├── LoginFom.tsx
|    │   │   └── RegisterForm.tsx
|    │   ├── blog
|    │   │   ├── BlogsCard.tsx
|    │   │   ├── CommentCard.tsx
|    │   │   ├── CommentForm.tsx
|    │   │   ├── DeleteModal.tsx
|    │   │   ├── Icons.tsx
|    │   │   ├── NewBlogForm.tsx
|    │   │   └── UpdateModal.tsx
|    │   ├── Footer.tsx
|    │   └── NavBar.tsx
|    ├── features
|    │   ├── authSlice.tsx
|    │   ├── blogSlice.tsx
|    │   ├── categorySlice.tsx
|    │   └── commentSlice.tsx
|    ├── helper
|    │   └── ToastNotify.tsx
|    ├── hooks
|    │   ├── useAuthCall.tsx
|    │   ├── useAxios.tsx
|    │   ├── useBlogCall.tsx
|    │   ├── useCategoryCall.tsx
|    │   └── useCommentCall.tsx
|    ├── pages
|    │   ├── About.tsx
|    │   ├── BlogDetail.tsx
|    │   ├── Dashboard.tsx
|    │   ├── Login.tsx
|    │   ├── MyBlog.tsx
|    │   ├── NewBlog.tsx
|    │   ├── Profile.tsx
|    │   └── Register.tsx
|    ├── router
|    |    ├── AppRouter.tsx
|    |    └── PrivateRouter.tsx
|    ├── App.css
|    ├── App.tsx
|    ├── index.css
|    ├── main.tsx
|    ├── types.d.ts
|    └── vite-env.d.ts
├── index.html
├── pacgage.json
├── pnpm-lock.yaml
├── readme.md
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts

```

## Installed Packages:

- **@emotion/react**: ^11.11.3
- **@emotion/styled**: ^11.11.0
- **@mui/icons-material**: ^5.15.3
- **@mui/material**: ^5.15.3
- **@reduxjs/toolkit**: ^2.0.1
- **@types/react-redux**: ^7.1.33
- **axios**: ^1.6.4
- **formik**: ^2.4.5
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-redux**: ^9.0.4
- **react-router-dom**: ^6.21.1
- **react-toastify**: ^9.1.3
- **redux-persist**: ^6.0.0
- **yup**: ^1.3.3

## Description

The Blog App is a React-based application designed for creating and managing blog posts. It provides features for users to register, login, create, edit, and delete blog posts efficiently.

## Technologies Used

- **MUI and MUI icons**: Material-UI components and icons for building a sleek and responsive user interface.
- **Axios**: A library for making HTTP requests, used for handling data fetching and sending operations.
- **Redux/Redux Toolkit**: State management libraries for managing application-wide state and data flow.
- **React Router DOM**: Navigation library for handling routing and navigation within the application.
- **Formik and Yup**: Libraries for simplifying form management and validation in React applications.
- **TypeScript**: A superset of JavaScript that adds static type definitions, enhancing code quality and developer productivity.

## Features

- **Authentication**: User authentication system with registration and login functionality.
- **CRUD Operations**: Ability to create, read, update, and delete blog posts.
- **Form Management with Formik and Yup**: Build and manage forms easily with Formik while ensuring data validation with Yup.
- **Responsive UI with Material-UI**: Utilize Material-UI components and icons to create a responsive and visually appealing user interface.
- **Efficient Data Fetching with Axios**: Fetch data from external APIs or backend servers efficiently using Axios.
- **Enhanced Routing with React Router DOM**: Implement dynamic routing and navigation within the application to enhance user experience.

## Installation

To install and run the Blog App locally, follow these steps:

1. Clone the project repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install project dependencies using `pnpm install`.
4. Start the development server with `pnpm run dev`.
5. Access the application at `localhost:5173` in your web browser.

## Usage

Once the application is running, users can register/login and perform CRUD operations on blog posts. Navigate through the various sections to perform relevant operations.

## Contribution

Contributions to the Blog App project are welcome! If you'd like to contribute, please open a pull request with your proposed changes. Feedback and suggestions for improvements are also appreciated.

## Backend

The backend of the Blog App is powered by the BlogAPI project. Below are the details of the backend:

- **GitHub Repository**: [BlogAPI GitHub](https://github.com/cihanbagriyanik/BlogAPI)
- **Documentation**: [BlogAPI Documentation](https://blog-api-9uyr.onrender.com/)

## License

This project is licensed under the MIT License. See the LICENSE file for more information.