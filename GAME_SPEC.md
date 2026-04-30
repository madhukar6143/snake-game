# Game Mechanics

## Controls
- Arrow keys for movement (Up/Down/Left/Right)
- No 180° reverse allowed (can't go directly opposite direction)
- Space bar to pause/resume game
- Enter key to restart after game over

## Gameplay
- Snake starts with length 3 in center of grid
- Snake grows by 1 segment on each food pickup
- Score: +10 × current level per food eaten
- Level up every 50 points
- Speed increases each level (starts 150ms, floor at 60ms)
- Game over on: wall collision OR self collision

## Grid
- 20x20 grid
- Cell size: 20px
- Canvas: 400x400px

## UI Elements
- Current score (top left)
- Current level (top center)
- Global high score from JSONBin (top right)
- "PAUSED" overlay when paused
- Game over screen showing:
  - "GAME OVER" text
  - Final score
  - High score
  - "NEW RECORD!" if beaten
  - "Press ENTER to restart"

## Scoring
- Base points: 10 per food
- Multiplied by current level
- Level 1: 10pts, Level 2: 20pts, Level 3: 30pts etc
