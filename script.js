const surahList = [
    { number: 1, englishName: 'Al-Fatiha', arabicName: 'الفاتحة', ayahCount: 7, audio: 'https://server8.mp3quran.net/afs/001.mp3' },
    { number: 2, englishName: 'Al-Baqarah', arabicName: 'البقرة', ayahCount: 286, audio: 'https://server8.mp3quran.net/afs/002.mp3' },
    { number: 3, englishName: 'Al-Imran', arabicName: 'آل عمران', ayahCount: 200, audio: 'https://server8.mp3quran.net/afs/003.mp3' },
    { number: 4, englishName: 'An-Nisa', arabicName: 'النساء', ayahCount: 176, audio: 'https://server8.mp3quran.net/afs/004.mp3' },
    { number: 5, englishName: 'Al-Maida', arabicName: 'المائدة', ayahCount: 120, audio: 'https://server8.mp3quran.net/afs/005.mp3' },
    { number: 6, englishName: 'Al-Anam', arabicName: 'الأنعام', ayahCount: 165, audio: 'https://server8.mp3quran.net/afs/006.mp3' },
    { number: 7, englishName: 'Al-Araf', arabicName: 'الأعراف', ayahCount: 206, audio: 'https://server8.mp3quran.net/afs/007.mp3' },
    { number: 8, englishName: 'Al-Anfal', arabicName: 'الأنفال', ayahCount: 75, audio: 'https://server8.mp3quran.net/afs/008.mp3' },
    { number: 9, englishName: 'At-Tawbah', arabicName: 'التوبة', ayahCount: 129, audio: 'https://server8.mp3quran.net/afs/009.mp3' },
    { number: 10, englishName: 'Yunus', arabicName: 'يونس', ayahCount: 109, audio: 'https://server8.mp3quran.net/afs/010.mp3' },
    { number: 11, englishName: 'Hud', arabicName: 'هود', ayahCount: 123, audio: 'https://server8.mp3quran.net/afs/011.mp3' },
    { number: 12, englishName: 'Yusuf', arabicName: 'يوسف', ayahCount: 111, audio: 'https://server8.mp3quran.net/afs/012.mp3' },
    { number: 13, englishName: 'Ar-Ra’d', arabicName: 'الرعد', ayahCount: 43, audio: 'https://server8.mp3quran.net/afs/013.mp3' },
    { number: 14, englishName: 'Ibrahim', arabicName: 'إبراهيم', ayahCount: 52, audio: 'https://server8.mp3quran.net/afs/014.mp3' },
    { number: 15, englishName: 'Al-Hijr', arabicName: 'الحجر', ayahCount: 99, audio: 'https://server8.mp3quran.net/afs/015.mp3' },
    { number: 16, englishName: 'An-Nahl', arabicName: 'النحل', ayahCount: 128, audio: 'https://server8.mp3quran.net/afs/016.mp3' },
    { number: 17, englishName: 'Al-Isra', arabicName: 'الإسراء', ayahCount: 111, audio: 'https://server8.mp3quran.net/afs/017.mp3' },
    { number: 18, englishName: 'Al-Kahf', arabicName: 'الكهف', ayahCount: 110, audio: 'https://server8.mp3quran.net/afs/018.mp3' },
    { number: 19, englishName: 'Maryam', arabicName: 'مريم', ayahCount: 98, audio: 'https://server8.mp3quran.net/afs/019.mp3' },
    { number: 20, englishName: 'Taha', arabicName: 'طه', ayahCount: 135, audio: 'https://server8.mp3quran.net/afs/020.mp3' },
    { number: 21, englishName: 'Al-Anbiya', arabicName: 'الأنبياء', ayahCount: 112, audio: 'https://server8.mp3quran.net/afs/021.mp3' },
    { number: 22, englishName: 'Al-Hajj', arabicName: 'الحج', ayahCount: 78, audio: 'https://server8.mp3quran.net/afs/022.mp3' },
    { number: 23, englishName: 'Al-Mu’minun', arabicName: 'المؤمنون', ayahCount: 118, audio: 'https://server8.mp3quran.net/afs/023.mp3' },
    { number: 24, englishName: 'An-Nur', arabicName: 'النور', ayahCount: 64, audio: 'https://server8.mp3quran.net/afs/024.mp3' },
    { number: 25, englishName: 'Al-Furqan', arabicName: 'الفرقان', ayahCount: 77, audio: 'https://server8.mp3quran.net/afs/025.mp3' },
    { number: 26, englishName: 'Ash-Shuara', arabicName: 'الشعراء', ayahCount: 227, audio: 'https://server8.mp3quran.net/afs/026.mp3' },
    { number: 27, englishName: 'An-Naml', arabicName: 'النمل', ayahCount: 93, audio: 'https://server8.mp3quran.net/afs/027.mp3' },
    { number: 28, englishName: 'Al-Qasas', arabicName: 'القصص', ayahCount: 88, audio: 'https://server8.mp3quran.net/afs/028.mp3' },
    { number: 29, englishName: 'Al-Ankabut', arabicName: 'العنكبوت', ayahCount: 69, audio: 'https://server8.mp3quran.net/afs/029.mp3' },
    { number: 30, englishName: 'Ar-Rum', arabicName: 'الروم', ayahCount: 60, audio: 'https://server8.mp3quran.net/afs/030.mp3' },
    { number: 31, englishName: 'Luqman', arabicName: 'لقمان', ayahCount: 34, audio: 'https://server8.mp3quran.net/afs/031.mp3' },
    { number: 32, englishName: 'As-Sajda', arabicName: 'السجدة', ayahCount: 30, audio: 'https://server8.mp3quran.net/afs/032.mp3' },
    { number: 33, englishName: 'Al-Ahzab', arabicName: 'الأحزاب', ayahCount: 73, audio: 'https://server8.mp3quran.net/afs/033.mp3' },
    { number: 34, englishName: 'Saba', arabicName: 'سبأ', ayahCount: 54, audio: 'https://server8.mp3quran.net/afs/034.mp3' },
    { number: 35, englishName: 'Fatir', arabicName: 'فاطر', ayahCount: 45, audio: 'https://server8.mp3quran.net/afs/035.mp3' },
    { number: 36, englishName: 'Ya-Sin', arabicName: 'يس', ayahCount: 83, audio: 'https://server8.mp3quran.net/afs/036.mp3' },
    { number: 37, englishName: 'As-Saffat', arabicName: 'الصافات', ayahCount: 182, audio: 'https://server8.mp3quran.net/afs/037.mp3' },
    { number: 38, englishName: 'Sad', arabicName: 'ص', ayahCount: 88, audio: 'https://server8.mp3quran.net/afs/038.mp3' },
    { number: 39, englishName: 'Az-Zumar', arabicName: 'الزمر', ayahCount: 75, audio: 'https://server8.mp3quran.net/afs/039.mp3' },
    { number: 40, englishName: 'Ghafir', arabicName: 'غافر', ayahCount: 85, audio: 'https://server8.mp3quran.net/afs/040.mp3' },
    { number: 41, englishName: 'Fussilat', arabicName: 'فصلت', ayahCount: 54, audio: 'https://server8.mp3quran.net/afs/041.mp3' },
    { number: 42, englishName: 'Ash-Shura', arabicName: 'الشورى', ayahCount: 53, audio: 'https://server8.mp3quran.net/afs/042.mp3' },
    { number: 43, englishName: 'Az-Zukhruf', arabicName: 'الزخرف', ayahCount: 89, audio: 'https://server8.mp3quran.net/afs/043.mp3' },
    { number: 44, englishName: 'Ad-Dukhan', arabicName: 'الدخان', ayahCount: 59, audio: 'https://server8.mp3quran.net/afs/044.mp3' },
    { number: 45, englishName: 'Al-Jathiya', arabicName: 'الجاثية', ayahCount: 37, audio: 'https://server8.mp3quran.net/afs/045.mp3' },
    { number: 46, englishName: 'Al-Ahqaf', arabicName: 'الأحقاف', ayahCount: 35, audio: 'https://server8.mp3quran.net/afs/046.mp3' },
    { number: 47, englishName: 'Muhammad', arabicName: 'محمد', ayahCount: 38, audio: 'https://server8.mp3quran.net/afs/047.mp3' },
    { number: 48, englishName: 'Al-Fath', arabicName: 'الفتح', ayahCount: 29, audio: 'https://server8.mp3quran.net/afs/048.mp3' },
    { number: 49, englishName: 'Al-Hujurat', arabicName: 'الحجرات', ayahCount: 18, audio: 'https://server8.mp3quran.net/afs/049.mp3' },
    { number: 50, englishName: 'Qaf', arabicName: 'ق', ayahCount: 45, audio: 'https://server8.mp3quran.net/afs/050.mp3' },
    { number: 51, englishName: 'Adh-Dhariyat', arabicName: 'الذاريات', ayahCount: 60, audio: 'https://server8.mp3quran.net/afs/051.mp3' },
    { number: 52, englishName: 'At-Tur', arabicName: 'الطور', ayahCount: 49, audio: 'https://server8.mp3quran.net/afs/052.mp3' },
    { number: 53, englishName: 'An-Najm', arabicName: 'النجم', ayahCount: 62, audio: 'https://server8.mp3quran.net/afs/053.mp3' },
    { number: 54, englishName: 'Al-Qamar', arabicName: 'القمر', ayahCount: 55, audio: 'https://server8.mp3quran.net/afs/054.mp3' },
    { number: 55, englishName: 'Ar-Rahman', arabicName: 'الرحمن', ayahCount: 78, audio: 'https://server8.mp3quran.net/afs/055.mp3' },
    { number: 56, englishName: 'Al-Waqia', arabicName: 'الواقعة', ayahCount: 96, audio: 'https://server8.mp3quran.net/afs/056.mp3' },
    { number: 57, englishName: 'Al-Hadid', arabicName: 'الحديد', ayahCount: 29, audio: 'https://server8.mp3quran.net/afs/057.mp3' },
    { number: 58, englishName: 'Al-Mujadila', arabicName: 'المجادلة', ayahCount: 22, audio: 'https://server8.mp3quran.net/afs/058.mp3' },
    { number: 59, englishName: 'Al-Hashr', arabicName: 'الحشر', ayahCount: 24, audio: 'https://server8.mp3quran.net/afs/059.mp3' },
    { number: 60, englishName: 'Al-Mumtahana', arabicName: 'الممتحنة', ayahCount: 13, audio: 'https://server8.mp3quran.net/afs/060.mp3' },
    { number: 61, englishName: 'As-Saff', arabicName: 'الصف', ayahCount: 14, audio: 'https://server8.mp3quran.net/afs/061.mp3' },
    { number: 62, englishName: 'Al-Jumu’a', arabicName: 'الجمعة', ayahCount: 11, audio: 'https://server8.mp3quran.net/afs/062.mp3' },
    { number: 63, englishName: 'Al-Munafiqun', arabicName: 'المنافقون', ayahCount: 11, audio: 'https://server8.mp3quran.net/afs/063.mp3' },
    { number: 64, englishName: 'At-Taghabun', arabicName: 'التغابن', ayahCount: 18, audio: 'https://server8.mp3quran.net/afs/064.mp3' },
    { number: 65, englishName: 'At-Talaq', arabicName: 'الطلاق', ayahCount: 12, audio: 'https://server8.mp3quran.net/afs/065.mp3' },
    { number: 66, englishName: 'At-Tahrim', arabicName: 'التحريم', ayahCount: 12, audio: 'https://server8.mp3quran.net/afs/066.mp3' },
    { number: 67, englishName: 'Al-Mulk', arabicName: 'الملك', ayahCount: 30, audio: 'https://server8.mp3quran.net/afs/067.mp3' },
    { number: 68, englishName: 'Al-Qalam', arabicName: 'القلم', ayahCount: 52, audio: 'https://server8.mp3quran.net/afs/068.mp3' },
    { number: 69, englishName: 'Al-Haaqqa', arabicName: 'الحاقة', ayahCount: 52, audio: 'https://server8.mp3quran.net/afs/069.mp3' },
    { number: 70, englishName: 'Al-Ma’arij', arabicName: 'المعارج', ayahCount: 44, audio: 'https://server8.mp3quran.net/afs/070.mp3' },
    { number: 71, englishName: 'Nuh', arabicName: 'نوح', ayahCount: 28, audio: 'https://server8.mp3quran.net/afs/071.mp3' },
    { number: 72, englishName: 'Al-Jinn', arabicName: 'الجن', ayahCount: 28, audio: 'https://server8.mp3quran.net/afs/072.mp3' },
    { number: 73, englishName: 'Al-Muzzammil', arabicName: 'المزمل', ayahCount: 20, audio: 'https://server8.mp3quran.net/afs/073.mp3' },
    { number: 74, englishName: 'Al-Muddathir', arabicName: 'المدثر', ayahCount: 56, audio: 'https://server8.mp3quran.net/afs/074.mp3' },
    { number: 75, englishName: 'Al-Qiyama', arabicName: 'القيامة', ayahCount: 40, audio: 'https://server8.mp3quran.net/afs/075.mp3' },
    { number: 76, englishName: 'Al-Insan', arabicName: 'الإنسان', ayahCount: 31, audio: 'https://server8.mp3quran.net/afs/076.mp3' },
    { number: 77, englishName: 'Al-Mursalat', arabicName: 'المرسلات', ayahCount: 50, audio: 'https://server8.mp3quran.net/afs/077.mp3' },
    { number: 78, englishName: 'An-Naba', arabicName: 'النبأ', ayahCount: 40, audio: 'https://server8.mp3quran.net/afs/078.mp3' },
    { number: 79, englishName: 'An-Nazi’at', arabicName: 'النازعات', ayahCount: 46, audio: 'https://server8.mp3quran.net/afs/079.mp3' },
    { number: 80, englishName: 'Abasa', arabicName: 'عبس', ayahCount: 42, audio: 'https://server8.mp3quran.net/afs/080.mp3' },
    { number: 81, englishName: 'At-Takwir', arabicName: 'التكوير', ayahCount: 29, audio: 'https://server8.mp3quran.net/afs/081.mp3' },
    { number: 82, englishName: 'Al-Infitar', arabicName: 'الانفطار', ayahCount: 19, audio: 'https://server8.mp3quran.net/afs/082.mp3' },
    { number: 83, englishName: 'Al-Mutaffifin', arabicName: 'المطففين', ayahCount: 36, audio: 'https://server8.mp3quran.net/afs/083.mp3' },
    { number: 84, englishName: 'Al-Inshiqaq', arabicName: 'الانشطار', ayahCount: 25, audio: 'https://server8.mp3quran.net/afs/084.mp3' },
    { number: 85, englishName: 'Al-Burooj', arabicName: 'البروج', ayahCount: 22, audio: 'https://server8.mp3quran.net/afs/085.mp3' },
    { number: 86, englishName: 'At-Tariq', arabicName: 'الطارق', ayahCount: 17, audio: 'https://server8.mp3quran.net/afs/086.mp3' },
    { number: 87, englishName: 'Al-A’la', arabicName: 'الأعلى', ayahCount: 19, audio: 'https://server8.mp3quran.net/afs/087.mp3' },
    { number: 88, englishName: 'Al-Ghashiya', arabicName: 'الغاشية', ayahCount: 26, audio: 'https://server8.mp3quran.net/afs/088.mp3' },
    { number: 89, englishName: 'Al-Fajr', arabicName: 'الفجر', ayahCount: 30, audio: 'https://server8.mp3quran.net/afs/089.mp3' },
    { number: 90, englishName: 'Al-Balad', arabicName: 'البلد', ayahCount: 20, audio: 'https://server8.mp3quran.net/afs/090.mp3' },
    { number: 91, englishName: 'Ash-Shams', arabicName: 'الشمس', ayahCount: 15, audio: 'https://server8.mp3quran.net/afs/091.mp3' },
    { number: 92, englishName: 'Al-Lail', arabicName: 'الليل', ayahCount: 21, audio: 'https://server8.mp3quran.net/afs/092.mp3' },
    { number: 93, englishName: 'Ad-Duha', arabicName: 'الضحى', ayahCount: 11, audio: 'https://server8.mp3quran.net/afs/093.mp3' },
    { number: 94, englishName: 'Al-Inshirah', arabicName: 'الشرح', ayahCount: 8, audio: 'https://server8.mp3quran.net/afs/094.mp3' },
    { number: 95, englishName: 'At-Tin', arabicName: 'التين', ayahCount: 8, audio: 'https://server8.mp3quran.net/afs/095.mp3' },
    { number: 96, englishName: 'Al-Alaq', arabicName: 'العلق', ayahCount: 19, audio: 'https://server8.mp3quran.net/afs/096.mp3' },
    { number: 97, englishName: 'Al-Qadr', arabicName: 'القدر', ayahCount: 5, audio: 'https://server8.mp3quran.net/afs/097.mp3' },
    { number: 98, englishName: 'Al-Bayyina', arabicName: 'البينة', ayahCount: 8, audio: 'https://server8.mp3quran.net/afs/098.mp3' },
    { number: 99, englishName: 'Az-Zalzala', arabicName: 'الزلزلة', ayahCount: 8, audio: 'https://server8.mp3quran.net/afs/099.mp3' },
    { number: 100, englishName: 'Al-Adiyat', arabicName: 'العاديات', ayahCount: 11, audio: 'https://server8.mp3quran.net/afs/100.mp3' },
    { number: 101, englishName: 'Al-Qaria', arabicName: 'القارعة', ayahCount: 11, audio: 'https://server8.mp3quran.net/afs/101.mp3' },
    { number: 102, englishName: 'At-Takathur', arabicName: 'التكاثر', ayahCount: 8, audio: 'https://server8.mp3quran.net/afs/102.mp3' },
    { number: 103, englishName: 'Al-Asr', arabicName: 'العصر', ayahCount: 3, audio: 'https://server8.mp3quran.net/afs/103.mp3' },
    { number: 104, englishName: 'Al-Humazah', arabicName: 'الهمزة', ayahCount: 9, audio: 'https://server8.mp3quran.net/afs/104.mp3' },
    { number: 105, englishName: 'Al-Fil', arabicName: 'الفيل', ayahCount: 5, audio: 'https://server8.mp3quran.net/afs/105.mp3' },
    { number: 106, englishName: 'Quraish', arabicName: 'قريش', ayahCount: 4, audio: 'https://server8.mp3quran.net/afs/106.mp3' },
    { number: 107, englishName: 'Al-Ma’un', arabicName: 'الماعون', ayahCount: 7, audio: 'https://server8.mp3quran.net/afs/107.mp3' },
    { number: 108, englishName: 'Al-Kawthar', arabicName: 'الكوثر', ayahCount: 3, audio: 'https://server8.mp3quran.net/afs/108.mp3' },
    { number: 109, englishName: 'Al-Kafirun', arabicName: 'الكافرون', ayahCount: 6, audio: 'https://server8.mp3quran.net/afs/109.mp3' },
    { number: 110, englishName: 'An-Nasr', arabicName: 'النصر', ayahCount: 3, audio: 'https://server8.mp3quran.net/afs/110.mp3' },
    { number: 111, englishName: 'Al-Masad', arabicName: 'المسد', ayahCount: 5, audio: 'https://server8.mp3quran.net/afs/111.mp3' },
    { number: 112, englishName: 'Al-Ikhlas', arabicName: 'الإخلاص', ayahCount: 4, audio: 'https://server8.mp3quran.net/afs/112.mp3' },
    { number: 113, englishName: 'Al-Falaq', arabicName: 'الفلق', ayahCount: 5, audio: 'https://server8.mp3quran.net/afs/113.mp3' },
    { number: 114, englishName: 'An-Nas', arabicName: 'الناس', ayahCount: 6, audio: 'https://server8.mp3quran.net/afs/114.mp3' }
];


let completedSurahs = JSON.parse(localStorage.getItem('completedSurahs')) || [];
let currentAudio = null;
let isPaused = false;

// Function to populate Surah columns
function populateSurahColumns(filteredSurahs = surahList) { // Accept an optional filtered list
    const column1 = document.getElementById('column-1');
    const column2 = document.getElementById('column-2');
    const column3 = document.getElementById('column-3');

    column1.innerHTML = ''; 
    column2.innerHTML = ''; 
    column3.innerHTML = ''; 

    filteredSurahs.forEach((surah, index) => {
        const surahBox = document.createElement('div');
        surahBox.classList.add('surah-box');
        surahBox.innerHTML = `
            <h3>${surah.number}. ${surah.englishName}</h3>
            <p>${surah.ayahCount} Ayahs</p>
            <button class="done-button" onclick="toggleMark(${surah.number})">
                ${completedSurahs.includes(surah.number) ? 'Unmark as Done' : 'Mark as Done'}
            </button>
            <button class="play-button" onclick="playSurahAudio(${surah.number}, '${surah.audio}')">Play</button>
        `;

        if (index % 3 === 0) {
            column1.appendChild(surahBox);
        } else if (index % 3 === 1) {
            column2.appendChild(surahBox);
        } else {
            column3.appendChild(surahBox);
        }
    });
}

// Function to toggle between marking and unmarking Surah as done
function toggleMark(surahNumber) {
    if (completedSurahs.includes(surahNumber)) {
        completedSurahs = completedSurahs.filter(num => num !== surahNumber);
    } else {
        completedSurahs.push(surahNumber);
    }

    localStorage.setItem('completedSurahs', JSON.stringify(completedSurahs));
    updateProgress();
    populateSurahColumns();
}

// Play and pause Surah audio, update progress when recitation ends
function playSurahAudio(surahNumber, audioUrl) {
    const playButton = document.querySelector(`button[onclick="playSurahAudio(${surahNumber}, '${audioUrl}')"]`);
    
    if (currentAudio && currentAudio.src !== audioUrl) {
        currentAudio.pause();
    }

    if (!currentAudio || currentAudio.paused) {
        currentAudio = new Audio(audioUrl);
        currentAudio.play();
        isPaused = false;
        playButton.textContent = 'Pause';

        // Change button text to "Play" when the recitation ends and mark as done
        currentAudio.addEventListener('ended', () => {
            playButton.textContent = 'Play';
            markAsCompleteAfterRecitation(surahNumber); // Mark the Surah as done and update progress
        });

        fetchAndDisplayVerses(surahNumber); // Display the verses
    } else {
        currentAudio.pause();
        isPaused = true;
        playButton.textContent = 'Play';
    }
}

// Function to mark surah as complete after recitation ends
function markAsCompleteAfterRecitation(surahNumber) {
    if (!completedSurahs.includes(surahNumber)) {
        completedSurahs.push(surahNumber);
        localStorage.setItem('completedSurahs', JSON.stringify(completedSurahs));
        updateProgress();
        populateSurahColumns(); // Update buttons and progress
    }
}

// Fetch and display Arabic and translation only
async function fetchAndDisplayVerses(surahNumber) {
    const ayahList = document.getElementById('ayah-list');
    ayahList.innerHTML = 'Loading verses...';

    try {
        const translationResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`); // Fetch English translation
        const translationData = await translationResponse.json();
        const verses = translationData.data.ayahs;

        ayahList.innerHTML = ''; // Clear previous verses

        verses.forEach(ayah => {
            const ayahElement = document.createElement('div');
            ayahElement.classList.add('ayah-item');
            ayahElement.innerHTML = `
                <p><strong>Ayah ${ayah.numberInSurah}</strong>:</p>
                <p>Translation: ${ayah.text}</p>
            `;
            ayahList.appendChild(ayahElement);
        });

        // Scroll to the start of the displayed verses
        scrollToTranslationSection();
    } catch (error) {
        console.error('Error fetching verses:', error);
        ayahList.innerHTML = 'Error loading verses.';
    }
}

// Automatically scroll to the start of the translation section
function scrollToTranslationSection() {
    const ayahList = document.getElementById('ayah-list');
    const translationTop = ayahList.offsetTop + 300; // Scroll just beyond the section
    window.scrollTo({
        top: translationTop,
        behavior: 'smooth' // Smooth scrolling
    });
}

// Update progress bar
function updateProgress() {
    const totalSurahs = 114;
    const completed = completedSurahs.length;
    const progressPercent = (completed / totalSurahs) * 100;

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    progressBar.value = progressPercent;
    progressText.textContent = `Complete ${Math.round(progressPercent)}% - ${completed}/${totalSurahs}`;
}

// Reset progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        completedSurahs = [];
        localStorage.setItem('completedSurahs', JSON.stringify(completedSurahs));
        updateProgress();
        populateSurahColumns();
    }
}

// Function to filter Surahs based on search input
function filterSurahs() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredSurahs = surahList.filter(surah => 
        surah.englishName.toLowerCase().includes(searchInput) || 
        surah.number.toString().includes(searchInput)
    );

    // Repopulate the Surah grid with filtered results
    populateSurahColumns(filteredSurahs);
}

// Initialize Surah grid and progress
populateSurahColumns();
updateProgress();
// Function to filter Surahs based on search input (by name, number, or ayah count with 'a-')




function filterSurahs() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    let filteredSurahs;

    // Check if the search is for Ayahs count (starts with 'a-')
    if (searchInput.startsWith('a-')) {
        const ayahCount = parseInt(searchInput.replace('a-', '')); // Extract the number after 'a-'
        filteredSurahs = surahList.filter(surah => surah.ayahCount >= ayahCount); // Filter based on Ayah count
    } else {
        filteredSurahs = surahList.filter(surah => 
            surah.englishName.toLowerCase().includes(searchInput) || 
            surah.number.toString().includes(searchInput)
        );
    }

    // Repopulate the Surah grid with filtered results
    populateSurahColumns(filteredSurahs);
}
