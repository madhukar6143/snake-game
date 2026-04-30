# High Score Storage

## Method
localStorage only — no external API needed for now.

## Implementation

### On page load
```javascript
highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
```

### On game over
```javascript
if (score > highScore) {
  highScore = score;
  localStorage.setItem('snakeHighScore', score);
  // show "NEW RECORD!" animation
}
```

## Notes
- Score persists in this browser only
- No API key needed
- Works completely offline
- Future upgrade: swap localStorage for Render proxy