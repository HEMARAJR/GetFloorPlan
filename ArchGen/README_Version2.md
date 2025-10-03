# ArchGen

**ArchGen** is an AI-powered web platform for creating, editing, and visualizing floorplans and interior designs in 2D, 3D, and 360°.  
This is a starter template using React and Vite.

## Features

- 2D Floorplan Editor (SVG-based starter)
- 3D and 360° Visualization (placeholders, extend with three.js)
- AI Interior Designer (simple color picker, ready for ML integration)
- Modular, ready to expand

## Quick Start

1. **Install dependencies**
    ```sh
    npm install
    ```
2. **Run development server**
    ```sh
    npm run dev
    ```
    Visit [http://localhost:5173](http://localhost:5173)
3. **Build for production**
    ```sh
    npm run build
    ```
    Output goes to the `dist/` folder.

## Machine Learning

See `archgen_ai_training.ipynb` for a Jupyter notebook starter to train an AI model for room type classification or style suggestion.  
After training, export your model and integrate it with the frontend or a backend API.

## Next Steps

- Connect ML backend for AI furniture/style generation
- Integrate 3D/360° with @react-three/fiber and three.js
- Add real-time collaboration and authentication
- Payments, engineer directory, cost estimation, BOQ, etc.

## Zipping Your Project

To create a zip:
```sh
zip -r archgen.zip .
```
Upload or share `archgen.zip` as needed.

---
**Made with love & AI!**