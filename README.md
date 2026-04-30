# 📚 BookLoop — Online Book Borrowing Platform

A seamless and modern web application that digitizes the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally — all secured with **BetterAuth** and powered by **Next.js** + **MongoDB**.

---

## 🔗 Live Links

- 🌐 **Live Site:** [book-loop-tawny.vercel.app](https://book-loop-tawny.vercel.app/)
- 💻 **GitHub Repo:** [github.com/IM-Tamim/BookLoop](https://github.com/IM-Tamim/BookLoop)
- 🗄️ **JSON Server:** [json-server-x5jc.onrender.com/books](https://json-server-x5jc.onrender.com/books)
- 📦 **JSON Server Repo:** [github.com/IM-Tamim/JSON-Server](https://github.com/IM-Tamim/JSON-Server)

---

## ✨ Features

- 🔐 **Secure Authentication** — Email/Password login and Google OAuth via BetterAuth
- 🛡️ **Protected Routes** — Middleware guards private pages and redirects unauthenticated users
- 📚 **Browse Books** — Explore a rich catalog with search functionality
- 🗂️ **Category Filtering** — Filter books by Story, Tech, and Science
- 📖 **Book Details Page** — Dynamic pages for each book with full information
- ➕ **Borrow Books** — Digitally borrow a book with a single click
- 👤 **Profile Management** — View and update your name and avatar
- 🎨 **Modern UI** — Built with Tailwind CSS and DaisyUI
- 📱 **Fully Responsive** — Works beautifully on mobile, tablet, and desktop
- ⚡ **Fast & SEO-friendly** — Server-side rendering with Next.js
- 🎞️ **Animations** — Smooth step-by-step animations using Animate.css

---

## 🛠️ Tech Stack

| Category       | Technology           |
| -------------- | -------------------- |
| Framework      | Next.js              |
| Styling        | Tailwind CSS         |
| UI Library     | DaisyUI              |
| Authentication | BetterAuth           |
| Database       | MongoDB              |
| Language       | JavaScript           |

---

## 📦 NPM Packages Used

| Package          | Purpose                              |
| ---------------- | ------------------------------------ |
| `better-auth`    | Authentication and session handling  |
| `mongoose`       | MongoDB object modeling              |
| `animate.css`    | CSS animations for UI elements       |
| `react-toastify` | Toast notifications                  |
| `react-icons`    | Icon library                         |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/               # Signin and Signup pages
│   ├── (main)/               # Main app routes
│   │   ├── all-books/        # Browse all books + [id] detail page
│   │   ├── category/[id]/    # Category filtered view
│   │   ├── home/             # Homepage
│   │   └── profile/          # Profile and update pages
│   └── api/auth/             # BetterAuth API handler
├── components/
│   ├── homepage/             # Banner, Featured, MarqueeBar, HowItWorks, WhyChooseUs
│   ├── shared/               # Navbar, Footer, NavLink, SessionGuard
│   └── ui/                   # BookCard, BookDetail, BooksSection, LeftSideBar, SearchBook
└── lib/                      # auth.js, auth-client.js, books.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/IM-Tamim/BookLoop.git
cd BookLoop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root and add:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build for production
npm run start    # Start the production server
npm run lint     # Run ESLint
```

---

## 🔒 Authentication Flow

- Sign up / Sign in via **BetterAuth** using Email/Password or Google OAuth
- Sessions are managed securely with HTTP-only cookies
- `middleware.js` protects `/profile` and `/all-books/[id]` routes
- `SessionGuard` component watches the session client-side — if a logged-in user signs out while on a protected page, they are immediately redirected to `/signin`
- After being redirected to login, users are sent back to their originally requested page via `callbackUrl`

---

## 📸 Pages Overview

| Route               | Description                                    |
| ------------------- | ---------------------------------------------- |
| `/home`             | Homepage with Banner, Featured Books, and more |
| `/all-books`        | Browse the full book catalog with search       |
| `/all-books/[id]`   | View details of a single book                  |
| `/profile`          | Your profile information                       |
| `/profile/update`   | Update your name and avatar                    |
| `/signin`           | User login                                     |
| `/signup`           | User registration                              |

---

## 🙋‍♂️ Author

**Tamim** — [github.com/IM-Tamim](https://github.com/IM-Tamim)