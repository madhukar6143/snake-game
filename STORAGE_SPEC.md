# High Score Storage

## Method
Use JSONBin.io REST API for global persistent high score across all players.

## Setup (already done — use these placeholders)
- Base URL: https://api.jsonbin.io/v3/b/
- Bin ID: JSONBIN_BIN_ID
- API Key: JSONBIN_API_KEY

## Implementation

### On page load
Fetch current global high score:
```
GET https://api.jsonbin.io/v3/b/JSONBIN_BIN_ID/latest
Headers: X-Master-Key: JSONBIN_API_KEY
Parse: response.record.highScore
```

### On game over
If current score > global high score:
1. Update JSONBin:
```
PUT https://api.jsonbin.io/v3/b/JSONBIN_BIN_ID
Headers: X-Master-Key: JSONBIN_API_KEY, Content-Type: application/json
Body: {"highScore": newScore}
```
2. Show "NEW RECORD!" animation
3. Update displayed high score

### Fallback
If JSONBin API fails (network error, invalid key):
- Use localStorage key "snakeHighScore" as fallback
- Show "(local)" next to high score to indicate offline mode
- Game continues normally

## User Experience
- Show "Loading..." for high score while fetching on page load
- Show "Saving..." briefly when updating score
- Never block gameplay for API calls (use async/await with try/catch)
- All API calls non-blocking
