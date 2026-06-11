import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg:              #0a0a0a;
    --bg-surface:      #111111;
    --bg-elevated:     #161616;
    --border:          rgba(255, 255, 255, 0.07);
    --border-hover:    rgba(255, 255, 255, 0.13);
    --accent:          #00d9ff;
    --accent-dim:      rgba(0, 217, 255, 0.08);
    --accent-glow:     rgba(0, 217, 255, 0.18);
    --text-primary:    #f0f0f0;
    --text-secondary:  #6b7280;
    --text-muted:      #374151;
    --mono:            'JetBrains Mono', 'Courier New', Courier, monospace;
    --sans:            'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --radius:          8px;
    --radius-lg:       12px;
    --transition:      0.2s ease;
    --header-height:   64px;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: var(--sans);
    background-color: var(--bg);
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: var(--sans);
  }

  section {
    scroll-margin-top: var(--header-height);
  }

  ::selection {
    background: rgba(0, 217, 255, 0.18);
    color: var(--accent);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 217, 255, 0.22);
    border-radius: 3px;
  }

  /* Shared section label used across all components */
  .section-label {
    display: block;
    font-family: var(--mono);
    font-size: 0.78rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-bottom: 0.6rem;
  }
`;
