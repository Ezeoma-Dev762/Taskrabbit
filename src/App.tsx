import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Auth from './pages/Auth'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-brand-neutral flex">
      <div className="max-w-[1750px] container mx-auto p-8">
        <Auth></Auth>
      </div>
    </div>
  );
}

export default App;
