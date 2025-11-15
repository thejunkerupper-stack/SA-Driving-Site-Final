import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force dark theme and ensure it's applied
document.documentElement.classList.remove('light');
document.documentElement.style.backgroundColor = 'hsl(215, 30%, 6%)';
document.documentElement.style.color = 'hsl(0, 0%, 98%)';
document.body.style.backgroundColor = 'hsl(215, 30%, 6%)';
document.body.style.color = 'hsl(0, 0%, 98%)';

createRoot(document.getElementById("root")!).render(<App />);
