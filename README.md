# 🎹 JS Piano – *Play Music with Your Keyboard!*

Welcome to **JS Piano**, a fun and interactive virtual piano built with  
**JavaScript, HTML, and CSS**. 🎼  

🎶 Play real-time notes using your keyboard and enjoy an engaging musical experience right in your browser!

---
![WhatsApp Image 2025-06-29 at 18 34 34_7936f54c](https://github.com/user-attachments/assets/285b2691-98f1-40cb-a4c8-4c1683083085)

## 🚀 Features

- ⌨️ **Keyboard-Controlled** — Play notes using your computer keyboard  
- 🔊 **Realistic Sounds** — High-quality audio clips for a true piano feel  
- 🎨 **Animated Keys** — Visual feedback and animations when keys are pressed  
- 💡 **Note Hints** — Shows which note corresponds to each key  
- 💻 **Responsive Design** — Works seamlessly on desktop and tablets  

---

## 🛠️ Tech Stack

| 🔧 Technology  | 🔍 Purpose                      |
|----------------|-------------------------------|
| **HTML5**      | Semantic structure            |
| **CSS3**       | Custom styles and animations  |
| **JavaScript** | Event handling and sound logic|

---

## 🎛️ How It Works

### 🎹 What is `data-key`?

- `data-key` is the **keyboard keyCode** for a specific key on your keyboard.
- Example mappings:
  - `A` → `keyCode: 65`
  - `W` → `keyCode: 87`
  - `S` → `keyCode: 83`

💡 This tells the browser:

> “When this key is pressed, play the corresponding sound.”

---

### 🎵 What is `data-note`?

- `data-note` represents the **musical note** assigned to that key.
- Example:
  - `data-note="C"` = C note  
  - `data-note="C#"` = C sharp  
  - `data-note="D"` = D note

🎯 This note name is also displayed in the `.nowplaying` UI section when a key is triggered.

---

### 🧾 Full Key and Note Mapping Table

Here’s a list of all the keys used in the piano:

| ⌨️ Keyboard Key | 🔢 keyCode | 🎶 data-note | 🎨 Key Type        |
|----------------|-----------:|--------------|--------------------|
| A              | 65         | C            | ⚪ White            |
| W              | 87         | C#           | ⚫ Black (sharp)    |
| S              | 83         | D            | ⚪ White            |
| E              | 69         | D#           | ⚫ Black (sharp)    |
| D              | 68         | E            | ⚪ White            |
| F              | 70         | F            | ⚪ White            |
| T              | 84         | F#           | ⚫ Black (sharp)    |
| G              | 71         | G            | ⚪ White            |
| Y              | 89         | G#           | ⚫ Black (sharp)    |
| H              | 72         | A            | ⚪ White            |
| U              | 85         | A#           | ⚫ Black (sharp)    |
| J              | 74         | B            | ⚪ White            |
| K              | 75         | C            | ⚪ White            |
| O              | 79         | C#           | ⚫ Black (sharp)    |
| L              | 76         | D            | ⚪ White            |
| P              | 80         | D#           | ⚫ Black (sharp)    |
| ; (semicolon)  | 186        | E            | ⚪ White            |

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Credits

- 🎧 Piano note audio files provided by [freesound.org](https://freesound.org)
- 💡 Inspired by the **Web Audio API** and classic browser-based music experiments.

---

