# E-commerce project in Next.js

A collaborative project where an e-commerce platform was created with the help of Typescript and Next.js, and using the DummyJSON API. The platform presents various products fetched from the API, and allows the user to search for items and browse different item categories. There is also an administrative feature that allows users to manage existing items and create new ones. 

---

## Table of Content
- [About the project](#About-the-project) 
- [Functionality](#Functionality)
- [Technologies used](#Technologies-used)
- [Installation](#Installation)
- [Usage](#Usage)
- [Project structure](#Project-structure)
- [Workflow](#Workflow)
- [Sprint plan](#Sprint-plan)
- [Contribute](#Contribute)
- [Lessons learned](#Lessons-learned)
- [License](#License)
- [Contact](#Contact)

--- 

## About the project
This is a collaborative project, with the goal of creating a minimalistic e-commerce platform, and to practice working with Agile methods, TypeScript, Next.js and APIs in a group environment.

---

## Functionality 
- Front page with the best selling and new products presented
- Hero section with Call To Action
- Footer with various links
- Search functionality
- Categories page
- Administration page
- About page
- Contact page and form
- Add to cart functionality
- Add and delete new product

---

## Technologies used
- [Next.js v.15 (App Router)](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [DummyJSON API](https://dummyjson.com/)
- [WAVE](https://wave.webaim.org/)
- [Tailwind](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [React Hot Toast](https://react-hot-toast.com/)

---

## Installation
```bash
# Clone repository
git clone https://github.com/AnkanGranero/fashion-e-commerce.git

# Change directory
cd fashion-e-commerce

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Usage
* Main page -> Search, hero, bestsellers and news
* Collections page -> Categories -> Product list 
* About page -> Static page 
* Contact page -> Contact form
* Administation page -> Manage products -> Add & delete products
* Product page -> Static page

---

## Project structure
```
├── app
│   ├── about
│   │   └── page.tsx
│   ├── admin
│   │   ├── create
│   │   │  └── page.tsx
│   │   └── page.tsx
│   ├──collections/[selectedCollection]
│   │   ├── [selectedCatecory]
│   │   │  └── page.tsx
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── products/[id]
│   │   └── page.tsx
│   ├── sale
│   │   └── page.tsx
│   ├── search
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── footer
│   │   ├── footer-nav-column.tsx
│   │   └── footer.tsx
│   ├── navigation
│   │   ├── navigation-link.tsx
│   │   ├── navigation-links.tsx
│   │   └── navigation.tsx
│   ├── buybutton.tsx
│   ├── deleteButton.tsx
│   ├── pagination.tsx
│   ├── productcard.tsx
│   ├── productlist.tsx
│   ├── search.tsx
│   ├── searchbutton.tsx
│   └── shoppingcomponent.tsx
└── lib
    ├── actions
    │   └── index.ts
    ├── data
    │   ├── productdata.ts
    │   └── variables.tsx
    └── interfaces
        ├── pagination.ts
        └── product.ts
```

---

## Workflow
* Working in group with Agile sprints (SCRUM)
* GitHub projects with a Kanban board for sprint management
* Feature branches
* PR and code reviews
* Many meetings with too little coffee

---

## Sprint plan

### Srint 1 - Basic project structure
* Created the Next.js project
* Created routes
* Created tickets

### Srint 2 - Dynamic routing 
* Created product page
* Created Search functionality
* Created pagination
* Created "Add to cart" functionality

### Sprint 3 - Create and delete products
* Created admin page
* Created delete product functionality
* Created add product functionality

### Sprint 4 - Finishing touches
* Code refactoring
* Optimisation
* Responsivity and accessibility
* README.txt

---

## Contribute

Would you like to contribute?
Feel free to fork the project, create a feature branch, and PR.

---

## Lessons learned

* Agile methods
* Difference between server and client components in Next.js
* Working with API's
* Responsive and accessible design

---

## License

The project is developed for educational purposes and is not meant for real production.

---

## Contact

- [AnkanGranero](https://github.com/AnkanGranero)
- [malpisen](https://github.com/malpisen)
- [Judy-P-Eldh](https://github.com/Judy-P-Eldh)
- [gentlelynx](https://github.com/gentlelynx)

