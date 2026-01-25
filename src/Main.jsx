import React, { useEffect, useState } from 'react'

const GITHUB = 'https://github.com/defconradio/localplebs'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=localplebs'

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
        LocalPlebs
      </h1>
      <p>Alpha — proof of concept app for Nostr-powered local connections.</p>

      <section>
        <h2>Screenshots / GIF</h2>
        <p>Repository README has no hosted images; showing placeholders you can replace.</p>
        <div className="cards">
          <img alt="screenshot 1" src="/imgs/2.jpg" style={{width: 260, height: 520, objectFit: 'cover'}}/>
          <img alt="screenshot 2" src="/imgs/3.jpg" style={{width: 260, height: 520, objectFit: 'cover'}}/>
          <img alt="demo gif" src="/imgs/1.gif" style={{width: 260, height: 520, objectFit: 'cover'}}/>
        </div>
      </section>

      <section style={{marginTop: 18}}>
        <h2>Links</h2>
        <ul>
          <li><a href={GITHUB} target="_blank" rel="noopener noreferrer">Source on GitHub</a></li>
          <li><a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">Google Play Store (placeholder)</a></li>
        </ul>
      </section>

      <section style={{marginTop: 18}}>
        <h2>Notes</h2>
        <p>If you give me the real screenshots/GIF URLs or files, I'll replace the placeholders and add thumbnails.</p>
      </section>
    </main>
  )
}
