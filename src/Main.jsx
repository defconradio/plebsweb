import React, { useEffect, useState } from 'react'

const RELEASE = 'https://github.com/defconradio/localpleb/releases/download/v1.0.0-alpha1/app-release.apk'
const README  = 'https://github.com/defconradio/localplebs'

function getInitialTheme() {
  // default to dark unless user previously selected light
  try {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
  } catch (e) {}
  return 'dark'
}

export default function Main() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') root.classList.add('light')
    else root.classList.remove('light')
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  return (
    <main style={{padding: 24, maxWidth: 900}}>
      <button className="theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>

      <h1>
        <span className="logo" role="img" aria-label="chili pepper">🌶️</span>
        LocalPleb
      </h1>
      <p>Alpha — proof of concept app for Nostr-powered local connections.</p>

      <section>
        <h2>find plebs around the world!</h2>
        <div className="cards">
          <img alt="demo gif" src="/imgs/1.gif" style={{width: 260, height: 520, objectFit: 'cover'}}/>
          <img alt="screenshot 1" src="/imgs/2.jpg" style={{width: 260, height: 520, objectFit: 'cover'}}/>
          <img alt="screenshot 2" src="/imgs/3.jpg" style={{width: 260, height: 520, objectFit: 'cover'}}/>
        </div>
      </section>

      <section style={{marginTop: 18}}>
        <h2>Links</h2>
        <ul>
          <li><a href={RELEASE} target="_blank" rel="noopener noreferrer">Download</a></li>
          <li><a href={README} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </section>

      <section style={{marginTop: 18}}>
        <h2>Disclaimer</h2>
        <p>This is an alpha release and should only be used for testing and proof of concept purposes. Features and security are experimental and may change.</p>
      </section>
      <footer className="footer">
        <p>Made with <span role="img" aria-label="heart">❤️</span> for the Nostr community.</p>
      </footer>
    </main>
  )
}
