# Smart-Student-Search
# 🎓 Student Explorer

A modern and interactive student directory web app that allows users to search and filter students in real-time.

## 🚀 Features

* 🔍 Live search (real-time filtering as you type)
* 👥 Display full student list
* 🧠 Case-insensitive search
* 🎯 Supports duplicate names (e.g., multiple "Radu")
* 💎 Modern UI inspired by Darwin UI (glassmorphism design)

## 🖼️ Preview

The app displays all students and allows filtering by typing a name or full name.

## 🛠️ Technologies Used

* HTML5
* CSS3 (Glassmorphism / Modern UI)
* Vanilla JavaScript (no frameworks)

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
└── app.js
```

## ⚙️ How It Works

1. All students are stored in a JavaScript array
2. The full list is rendered on page load
3. When the user types:

   * The input is converted to lowercase
   * The app filters students based on name + surname
   * Matching results are displayed dynamically

## 🧪 Example Search

Typing:

```
radu
```

Will return all students with:

* Radu Ioana
* Radu Mihai
* Radu Elena

## ❗ Edge Cases Handled

* Empty input → clears filtered list
* No matches → shows message: *"În listă nu este așa elev"*

## 🎨 UI Design

* Glassmorphism cards
* Soft shadows & blur effects
* Responsive layout
* Smooth hover animations

## 📱 Responsive

Works on:

* Desktop 💻
* Tablet 📱
* Mobile 📲

## 📌 Future Improvements

* Sort by average grade
* Filter by class
* Add/edit/delete students
* Dark/light mode toggle
* Backend integration

---

⭐ If you like this project, give it a star on GitHub!
