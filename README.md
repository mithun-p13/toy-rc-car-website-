# 🧸 Toys Catalog App

A modern and interactive toys catalog web application built using **Streamlit** and **Python**. This app allows users to explore, search, and filter a wide variety of toys through a clean and user-friendly interface. The goal of this project is to make toy discovery simple, fast, and enjoyable without the need for any complex frontend technology. Everything is powered by Python, making it easy to maintain, extend, and deploy.

The **Toys Catalog App** was created to solve a real-world problem — managing and showcasing a large collection of toys in an organized and visually appealing way. Instead of scrolling through spreadsheets or plain lists, users get a fully interactive web experience where they can filter toys by category, search by name or brand, view detailed product information, and even see data visualizations that give insights into the catalog. The app is perfect for small toy businesses, independent sellers, collectors, or anyone who wants a simple yet powerful way to manage and display a toy inventory.

What makes this app special is how quickly it can be set up and deployed. Thanks to Streamlit, there is no need to write HTML, CSS, or JavaScript. Everything is written in pure Python, which means developers can focus entirely on the logic and data rather than worrying about frontend design. The app can be deployed to **Streamlit Cloud** in just a few clicks and shared with anyone via a public link, making it accessible from any device and any browser.

The application supports multiple pages including a main catalog page, an individual product detail view, and a password-protected admin panel where authorized users can add new toys, update existing entries, or remove toys from the catalog. Data can be managed through a CSV or Excel file, making it extremely easy to update the catalog without touching the code. The app also includes interactive charts and graphs powered by Plotly, giving users visual insights such as toy distribution by category, price range analysis, and brand popularity.

---

## ✨ Features

- 🔍 **Search & Filter** — Search toys by name, brand, category, and age group using interactive Streamlit widgets
- 🛒 **Product Detail View** — View full toy details including description, price, age recommendation, and stock availability
- 🗂️ **Category Sidebar** — Navigate toy categories easily from the Streamlit sidebar
- 📊 **Data Visualizations** — Charts showing toy distribution by category, price range, and brand using Plotly
- 🖼️ **Image Display** — Toy images rendered beautifully using `st.image()`
- 📁 **CSV / Excel Upload** — Upload and update toy data directly through `st.file_uploader()`
- 🔐 **Admin Panel** — Password-protected section to manage toy listings securely
- 🌙 **Light & Dark Theme** — Supports Streamlit's built-in theme switching
- 📱 **Responsive Layout** — Works seamlessly across all screen sizes and devices
- 🚀 **One-Click Deployment** — Deploy instantly to Streamlit Cloud and share with anyone

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Streamlit |
| Language | Python 3.10+ |
| Data Handling | Pandas |
| Visualization | Plotly / Matplotlib |
| Database | CSV / Excel / SQLite |
| Authentication | Streamlit Authenticator |
| Deployment | Streamlit Cloud |

---

## 🏁 Getting Started

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/mithun-p13/rc-garage-shop.jsx.git
cd rc-garage-shop.jsx
```

2. **Create a virtual environment**

```bash
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Run the app**

```bash
streamlit run app.py
```

The app will open in your browser at `http://localhost:8501`

---

## 🚀 Deploy on Streamlit Cloud

1. Push your project to GitHub
2. Go to [streamlit.io/cloud](https://streamlit.io/cloud)
3. Click **New App** and select your repository
4. Set the main file as `app.py` and click **Deploy**

Your app will be live and shareable within minutes.

---

## 📬 Contact

**Mithun** — [@mithun-p13](https://github.com/mithun-p13)

Project Link: [https://github.com/mithun-p13/rc-garage-shop.jsx](https://github.com/mithun-p13/rc-garage-shop.jsx)
