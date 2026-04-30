# Visual Design

## Theme
Retro phosphor-green terminal / CRT monitor aesthetic

## Colors
- Page background: #000000
- Canvas background: #050f05
- Snake head: #39ff14 (bright neon green)
- Snake body: gradient from #39ff14 (near head) to #1a7a0a (tail)
- Snake head glow: box shadow / canvas shadow #39ff14
- Food: #ff0044 (red) with pulsing glow effect
- UI text: #39ff14
- Canvas border: 2px solid #39ff14 with glow shadow
- Game over overlay: rgba(0,0,0,0.85)
- "NEW RECORD!" text: #ffd700 (gold) with glow

## Typography
- Font: 'Press Start 2P' from Google Fonts (import in HTML)
- Score/UI: 10px
- Game Over title: 20px
- Subtext: 10px

## Effects
- Snake head: glowing shadow effect (shadowBlur 15, color #39ff14)
- Snake body: brightness gradient — segments near head are brighter
- Food: pulsing red glow animation (CSS keyframe or JS sine wave)
- Background: subtle dot grid pattern (#0d1f0d dots)
- Canvas: outer neon green glow (box-shadow)
- Scanline effect: subtle repeating linear gradient overlay on canvas

## Animations
- Food pulse: scale or opacity oscillation using requestAnimationFrame
- "NEW RECORD!" flash animation on game over
- Snake head slightly larger than body segments

## Layout
- Centered on page
- Title "🐍 SNAKE" above canvas
- HUD bar above canvas with score/level/highscore
- Canvas centered
- Controls hint below canvas: "ARROWS move • SPACE pause • ENTER restart"
