# 🧸 Toys Catalog App

A modern, full-featured web application for browsing, managing, and discovering toys. Designed to make the toy shopping experience fun, simple, and enjoyable for both kids and parents. Whether you are looking for the latest action figures, classic board games, or educational puzzles, the Toys Catalog App brings everything together in one place.

---

## 📖 About the Project

The **Toys Catalog App** was built with the goal of creating a seamless and visually appealing platform where users can explore a wide variety of toys. The app organizes toys into well-defined categories, making it easy to find exactly what you are looking for. Each toy has its own dedicated page with detailed information including description, price, age recommendation, brand, and stock availability.

From the admin side, store managers can easily add new toys, update existing listings, manage categories, and monitor inventory — all through a clean and intuitive dashboard. The app is designed to scale, meaning new categories, brands, and features can be added with minimal effort.

This project was developed with a focus on clean code, good user experience, and maintainability. It follows modern web development best practices and is structured in a way that makes it easy for developers to contribute or extend the functionality.

---

## ✨ Features

- 🔍 **Search & Filter** — Quickly search toys by name, brand, category, and age group to find exactly what you need
- 🛒 **Product Detail Pages** — Each toy has a dedicated page with full descriptions, multiple images, pricing, and real-time availability status
- 🗂️ **Category Management** — Toys are neatly organized into categories such as Action Figures, Puzzles, Board Games, Educational Toys, Outdoor Toys, and more
- 📦 **Inventory Tracking** — Admins can monitor stock levels and update availability in real time to avoid overselling
- 🖼️ **Image Gallery** — Each toy supports multiple images so users can view the product from different angles
- 🔐 **Admin Dashboard** — A secure and easy-to-use dashboard for adding, editing, and deleting toy listings
- 📱 **Responsive Design** — The app is fully optimized for mobile phones, tablets, and desktop screens
- 🌙 **Dark Mode** — Users can switch between light and dark themes based on their preference
- ⭐ **Ratings & Reviews** — Users can leave ratings and reviews to help others make informed decisions
- 🔔 **Stock Alerts** — Users can subscribe to be notified when an out-of-stock toy becomes available again

---

## 🛠 Tech Stack

The application is built using a modern and reliable set of technologies carefully chosen to ensure performance, scalability, and a great developer experience.

| Layer | Technology |
|-------|-----------|
| Frontend | React / Vue / Next.js *(update as needed)* |
| Backend | Node.js / Express / Django *(update as needed)* |
| Database | MongoDB / PostgreSQL / Firebase *(update as needed)* |
| Styling | Tailwind CSS / Bootstrap / SCSS *(update as needed)* |
| Authentication | JWT / Firebase Auth *(update as needed)* |
| Image Storage | Cloudinary / AWS S3 *(update as needed)* |
| Hosting | Vercel / Netlify / Heroku *(update as needed)* |

---

## 🏁 Getting Started

Follow the steps below to get the project running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mithun-p13/toys-catalog-app.git
cd toys-catalog-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables** — Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_URL=your_cloudinary_url
```

4. **Run the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/toys` | Get all toys |
| GET | `/api/toys/:id` | Get a single toy by ID |
| POST | `/api/toys` | Add a new toy *(Admin only)* |
| PUT | `/api/toys/:id` | Update toy details *(Admin only)* |
| DELETE | `/api/toys/:id` | Delete a toy *(Admin only)* |
| GET | `/api/categories` | Get all categories |
| GET | `/api/toys?category=:name` | Filter toys by category |
| GET | `/api/toys?search=:query` | Search toys by name |

---

## 🤝 Contributing

Contributions are always welcome! If you have an idea for a new feature, a bug fix, or an improvement, feel free to open an issue or submit a pull request. Please make sure your code is clean, well-commented, and follows the existing code style of the project.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

**Mithun** — [@mithun-p13](https://github.com/mithun-p13)

Project Link: [https://github.com/mithun-p13/toys-catalog-app](https://github.com/mithun-p13/toys-catalog-app)
