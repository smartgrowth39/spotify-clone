

// Initialize the Variables
        let songIndex = 0;
        let audioElement = new Audio('songs/1.mp3');
        let masterPlay = document.getElementById('masterPlay');
        let myProgressBar = document.getElementById('myProgressBar');
        let gif = document.getElementById('gif');
        let masterSongName = document.getElementById('masterSongName');
        let songItems = Array.from(document.getElementsByClassName('songItem'));

        let songs = [
            { songName: "Jeene Laga Hoon (Lofi Mix) .", filePath: "songs/1.mp3", coverPath: "covers/1.jfif" },
            { songName: "Mujhe Peene Do Darshan Raval", filePath: "songs/2.mp3", coverPath: "covers/2.jfif" },
            { songName: "Main Dhoondne Ko Zamaane ...", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
            { songName: "Tere Liye - song and lyrics ...", filePath: "songs/4.mp3", coverPath: "covers/4.jfif" },
            { songName: "Aik Baat Batao Too Yaddon .......", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
            { songName: "SATRANGA(Song) Animal Movie", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
            { songName: "Ishq - song and lyrics ....", filePath: "songs/7.mp3", coverPath: "covers/7.jfif" },
            { songName: "Meray Rang Main Rangnay Wali.....", filePath: "songs/8.mp3", coverPath: "covers/8.jfif" },
            { songName: "Toota Jo Kabhi Tara (Lofi Flip)", filePath: "songs/9.mp3", coverPath: "covers/9.jfif" },
            { songName: "Humnava Mere Song", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
            { songName: "Ishqa Ve (official video)  Zeeshan Ali", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
            { songName: "Janam Janam (official song)", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
            { songName: "MERI ZINDAGI HAI TU - OST  ASIM AZHAR", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
            { songName: "Pal - Pal - song and lyrics ", filePath: "songs/14.mp3", coverPath: "covers/14.jfif" },
            { songName: "Kahani Suno 2.0 - song", filePath: "songs/15.mp3", coverPath: "covers/15.jfif" },
        ]

        songItems.forEach((element, i) => {
            element.getElementsByTagName("img")[0].src = songs[i].coverPath;
            element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        })


        // Handle play/pause click
        masterPlay.addEventListener('click', () => {
            if (audioElement.paused || audioElement.currentTime <= 0) {
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
            }
            else {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                gif.style.opacity = 0;
            }
        })
        // Listen to Events
        audioElement.addEventListener('timeupdate', () => {
            // Update Seekbar
            progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
            myProgressBar.value = progress;
        })

        myProgressBar.addEventListener('change', () => {
            audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
        })

        const makeAllPlays = () => {
            Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
            })
        }

        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.addEventListener('click', (e) => {
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioElement.src = `songs/${songIndex + 1}.mp3`;
                masterSongName.innerText = songs[songIndex].songName;
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
            })
        })

        document.getElementById('next').addEventListener('click', () => {
            if (songIndex >= songs.length - 1) {
                songIndex = 0
            }
            else {
                songIndex += 1;
            }
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');

        })

        document.getElementById('previous').addEventListener('click', () => {
            if (songIndex <= 0) {
                songIndex = 0
            }
            else {
                songIndex -= 1;
            }
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })