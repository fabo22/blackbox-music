const songs = [
    {
        title: 'Song 1',
        image: 'https://via.placeholder.com/300x300?text=Song+1'
    },
    {
        title: 'Song 2',
        image: 'https://via.placeholder.com/300x300?text=Song+2'
    },
    {
        title: 'Song 3',
        image: 'https://via.placeholder.com/300x300?text=Song+3'
    }
    // Add more songs here
];

const songList = document.getElementById('song-list');

songs.forEach(song => {
    const songElement = document.createElement('li');
    songElement.classList.add('song');

    const songImage = document.createElement('img');
    songImage.src = song.image;

    const songTitle = document.createElement('h3');
    songTitle.textContent = song.title;

    songElement.appendChild(songImage);
    songElement.appendChild(songTitle);
    songList.appendChild(songElement);
});