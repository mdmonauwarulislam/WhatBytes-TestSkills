
---

# Internship Assignment - Skill Test

This repository contains the completed assignment for the internship, where I was tasked with building a **data dashboard** using **Next.js** and **Tailwind CSS**. The dashboard features interactive visualizations such as **pie charts** and **bar graphs** to display dynamic data. Additionally, the page layout is responsive, ensuring that sections like **"Skill-wise"** and **"Question Analysis"** move to the bottom on smaller screens.

## Project Overview

The dashboard simulates a data tracking system, designed for analyzing test results and skill progress. The dashboard includes multiple sections and visualizations that dynamically adjust based on the data being analyzed. 

The key sections include:
- **Skill-wise Analysis**
- **Question Analysis**
  
These sections adjust their layout responsively, with the "Skill-wise" and "Question Analysis" sections moving to the bottom on smaller screens for a better user experience.

## Project Requirements

1. **Responsive Design**: The page must be mobile-friendly, with the "Skill-wise" and "Question Analysis" sections repositioning to the bottom of the page on smaller devices.
   
2. **Interactive Data Visualizations**: Use libraries like **Chart.js** or **Recharts** to create pie charts and bar graphs that visualize data dynamically.
   
3. **Tailwind CSS**: Utilize Tailwind for styling, leveraging its utility-first approach to quickly build a responsive design.
   
4. **Next.js**: Build the application using Next.js to take advantage of server-side rendering (SSR) and routing for optimal performance and SEO.

## Technologies Used

- **Next.js**: A React-based framework for building SSR applications, providing automatic routing and server-side rendering for better performance and SEO.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs with minimal CSS code.
- **Chart.js / Recharts**: Libraries used to render interactive charts and graphs for data visualization.
- **React Hooks**: For managing state, lifecycle methods, and side effects in functional components.
- **CSS Flexbox and Grid**: Used to create flexible, responsive layouts, especially for the dashboard's main content and graphs.

## Installation

Follow these steps to set up and run the application locally:

### Prerequisites

Ensure that **Node.js** (version 14 or higher) is installed on your machine.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mdmonauwarulislam/WhatBytes-TestSkills.git
   ```

2. **Install dependencies**:

   Navigate to the project directory and install the required dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Project

Once the dependencies are installed, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Modifying the Application

You can start editing the page by modifying `app/page.js`. The page will automatically update in the browser as you make changes.

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Contribute or explore the Next.js codebase.

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details on deploying your app with Next.js, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---
