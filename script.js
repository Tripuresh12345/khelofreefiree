// Toggle visibility of the songs container
const toggleSongs = document.getElementById('toggle-songs');
const songsContainer = document.getElementById('songs-container');

toggleSongs.addEventListener('click', () => {
    if (songsContainer.style.display === 'none') {
        songsContainer.style.display = 'block';
        toggleSongs.textContent = 'Hide';
    } else {
        songsContainer.style.display = 'none';
        toggleSongs.textContent = 'Show More Songs';
    }
});