### Clean Up
- index serves as the home page
- I made a faq.js page (links work with Link tag, read up on the nextjs documentation for this)
- Currently, we have the indexnavbar as our main navigation bar, I commented out the dropdown part in this js file but it can be used if needed
- Styling can be done with tailwind css
- In the components, we currently don't use anything in cards, headers and dropdown but we can use those components if needed (example can be seen from the template link)
- I imported some figma images/visualization inside img/index, ignore the other images for now, we can delete them as our pages fill up with images that we only need from the template

### Get Started

- Install NodeJS **LTS** version from <a href="https://nodejs.org/en/?ref=creativetim">NodeJs Official Page</a>
- Download the product on this page
- Unzip the downloaded file to a folder in your computer
- Open Terminal
- Go to your file project (where you’ve unzipped the product)
- (If you are on a linux based terminal) Simply run `npm run install:clean`
- (If not) Run in terminal `npm install`
- (If not) Run in terminal `npm run build:tailwind` (each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to run this command)
- (If not) Run in terminal `npm run dev`
- Navigate to https://localhost:3000
- Check more about [Tailwind CSS](https://tailwindcss.com/?ref=creativetim)

### Pages

If you want to get inspiration or just show something directly to your clients,
you can jump start your development with our pre-built example pages. You will be able
to quickly set up the basic structure for your web project.

Here are all the page from the project:
- [Presentation](https://demos.creative-tim.com/notus-nextjs/?ref=nnjs-github-readme)
- Admin Samples
  - [Dashboard](https://demos.creative-tim.com/notus-nextjs/admin/dashboard?ref=nnjs-github-readme)
  - [Settings](https://demos.creative-tim.com/notus-nextjs/admin/settings?ref=nnjs-github-readme)
  - [Tables](https://demos.creative-tim.com/notus-nextjs/admin/tables?ref=nnjs-github-readme)
  - [Maps](https://demos.creative-tim.com/notus-nextjs/admin/maps?ref=nnjs-github-readme)
- Authentication Samples
  - [Login](https://demos.creative-tim.com/notus-nextjs/auth/login?ref=nnjs-github-readme)
  - [Register](https://demos.creative-tim.com/notus-nextjs/auth/register?ref=nnjs-github-readme)
- Presentation Samples
  - [Landing](https://demos.creative-tim.com/notus-nextjs/landing?ref=nnjs-github-readme)
  - [Profile](https://demos.creative-tim.com/notus-nextjs/profile?ref=nnjs-github-readme)


### Fully Coded Components

Notus NextJS is built with over frontend 120 components, giving you the freedom of choosing and combining. All components can take variations in colors, that you can easily modify using Tailwind CSS classes (NOTE: each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to compile again tailwind).

You will save a lot of time going from prototyping to full-functional code, because all elements are implemented.
This Free Tailwind CSS Template is coming with prebuilt examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.


### CSS Components

Notus NextJS comes with 120 Fully Coded CSS elements, such as [Alerts](https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-github-readme), [Buttons](https://www.creative-tim.com/learning-lab/tailwind/nextjs/buttons/notus?ref=nnjs-github-readme), [Inputs](https://www.creative-tim.com/learning-lab/tailwind/nextjs/inputs/notus?ref=nnjs-github-readme) and many more.

Please [check all of them here](https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-github-readme).

### NextJS Components

We also feature the following 18 dynamic components:
- [Alerts](https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-github-readme)
- [Popper for Menus](https://www.creative-tim.com/learning-lab/tailwind/nextjs/dropdowns/notus?ref=nnjs-github-readme)
- [Menus](https://www.creative-tim.com/learning-lab/tailwind/nextjs/menus/notus?ref=nnjs-github-readme)
- [Modals](https://www.creative-tim.com/learning-lab/tailwind/nextjs/modals/notus?ref=nnjs-github-readme)
- [Navbars](https://www.creative-tim.com/learning-lab/tailwind/nextjs/navbar/notus?ref=nnjs-github-readme)
- [Popper for popover content](https://www.creative-tim.com/learning-lab/tailwind/nextjs/popovers/notus?ref=nnjs-github-readme)
- [Tabs](https://www.creative-tim.com/learning-lab/tailwind/nextjs/tabs/notus?ref=nnjs-github-readme)
- [Popper for tooltips content](https://www.creative-tim.com/learning-lab/tailwind/nextjs/tooltips/notus?ref=nnjs-github-readme)


## Table of Contents

* [Versions](#versions)
* [Documentation](#documentation)
* [Quick Start](#quick-start)
* [Files and folders](#files-and-folders)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)
* [Resources](#resources)


## Documentation
The documentation for the Notus NextJS is hosted at our <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-readme" target="_blank">website</a>.


## Files and Folder

This is the project structure that you will get upon the download:
```
notus-nextjs
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── assets
│   ├── img
│   │   ├── brand
│   │   │   └── favicon.ico
│   │   ├── github.svg
│   │   └── google.svg
│   └── styles
│       ├── index.css
│       └── tailwind.css
├── components
│   ├── Cards
│   │   ├── CardBarChart.js
│   │   ├── CardLineChart.js
│   │   ├── CardPageVisits.js
│   │   ├── CardProfile.js
│   │   ├── CardSettings.js
│   │   ├── CardSocialTraffic.js
│   │   ├── CardStats.js
│   │   └── CardTable.js
│   ├── Dropdowns
│   │   ├── IndexDropdown.js
│   │   ├── NotificationDropdown.js
│   │   ├── PagesDropdown.js
│   │   ├── TableDropdown.js
│   │   └── UserDropdown.js
│   ├── Footers
│   │   ├── Footer.js
│   │   ├── FooterAdmin.js
│   │   └── FooterSmall.js
│   ├── Headers
│   │   └── HeaderStats.js
│   ├── Maps
│   │   └── MapExample.js
│   ├── Navbars
│   │   ├── AdminNavbar.js
│   │   ├── AuthNavbar.js
│   │   └── IndexNavbar.js
│   ├── PageChange
│   │   └── PageChange.js
│   └── Sidebar
│       └── Sidebar.js
├── layouts
│   ├── Admin.js
│   └── Auth.js
├── next.config.js
├── package.json
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── admin
│   │   ├── dashboard.js
│   │   ├── maps.js
│   │   ├── settings.js
│   │   └── tables.js
│   ├── auth
│   │   ├── login.js
│   │   └── register.js
│   ├── index.js
│   ├── landing.js
│   └── profile.js
└── tailwind.config.js
```


## Resources
- Demo: <a href="https://demos.creative-tim.com/notus-nextjs/?ref=nnjs-readme" target="_blank">https://demos.creative-tim.com/notus-nextjs/?ref=nnjs-readme</a>
- Download Page: <a href="https://www.creative-tim.com/product/notus-nextjs?ref=nnjs-github-readme" target="_blank">https://www.creative-tim.com/product/notus-nextjs</a>
- Documentation: <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-readme" target="_blank">https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-readme</a>
- License Agreement: <a href="https://www.creative-tim.com/license?ref=nnjs-readme" target="_blank">https://www.creative-tim.com/license?ref=nnjs-readme</a>
- Support: <a href="https://www.creative-tim.com/contact-us?ref=nnjs-readme" target="_blank">https://www.creative-tim.com/contact-us?ref=nnjs-readme</a>
- Issues: <a href="https://github.com/creativetimofficial/notus-nextjs/issues" target="_blank">Github Issues Page</a>
