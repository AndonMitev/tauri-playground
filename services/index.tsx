const apiKey = `a7425506abda4fcb9262401dbd52d1ea`;

export async function getGames() {
  const res = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch games');
  }

  return res.json();
}

export async function getGameDetails(id: string) {
  const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to game details');
  }

  return res.json();
}
