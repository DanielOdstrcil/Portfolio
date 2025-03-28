class ThemeSingleton {
    constructor() {
        if (!ThemeSingleton.instance) {
            // Načítání přednastaveného tématu nebo 'dark' jako výchozí
            this.theme = localStorage.getItem('theme') || 'dark';
            ThemeSingleton.instance = this;
        }
        return ThemeSingleton.instance;
    }

    setTheme(newTheme) {
        this.theme = newTheme;

        // Aplikace barev podle zvoleného tématu
        if (newTheme === 'dark') {
            document.body.style.backgroundColor = '#0d0d0d';  // tmavé pozadí
            document.body.style.color = '#000000';  // světle zelený text
            document.getElementById('theme-toggle').style.color = '#ff00ff';  // změna barvy textu v tlačítku
            document.getElementById('theme-toggle').style.backgroundColor = '#000';  // tmavé pozadí tlačítka
        } else {
            document.body.style.backgroundColor = '#ffffff';  // světlé pozadí
            document.body.style.color = '#000000';  // černý text
            document.getElementById('theme-toggle').style.color = '#000';  // změna barvy textu v tlačítku
            document.getElementById('theme-toggle').style.backgroundColor = '#ff00ff';  // světle růžové pozadí tlačítka
        }

        // Uložení aktuálního tématu do localStorage
        localStorage.setItem('theme', newTheme);
    }

    getTheme() {
        return this.theme;
    }
}

// Vytvoření instance pro správu témat
const themeManager = new ThemeSingleton();
themeManager.setTheme(themeManager.getTheme());  // Aplikace aktuálního tématu

// Event listener pro přepnutí mezi tmavým a světlým režimem
document.getElementById('theme-toggle').addEventListener('click', () => {
    const newTheme = themeManager.getTheme() === 'dark' ? 'light' : 'dark';
    themeManager.setTheme(newTheme);
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;  // Získáme aktuální pozici scrollu
    const image = document.querySelector('.rotate-img');  // Získáme obrázek pro rotaci
    const rotationDegree = scrollPosition * 0.1;  // Určujeme míru rotace podle pozice scrollu
    image.style.transform = `rotate(${rotationDegree}deg)`;  // Aplikujeme rotaci
});

const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function() {
    const currentBackground = document.body.style.backgroundImage;

    if (currentBackground.includes('pozadi.jpg')) {
        document.body.style.backgroundImage = "url('pozadi2.jpg')";
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        document.getElementById('theme-toggle').style.color = "#ffffff";  // Černý text na tlačítku
        document.getElementById('theme-toggle').style.backgroundColor = "#000";  // Černé pozadí tlačítka
    } else {
        document.body.style.backgroundImage = "url('pozadi.jpg')";
        document.body.style.backgroundColor = "#0d0d0d";
        document.body.style.color = "#31ff00";
        document.getElementById('theme-toggle').style.color = "#ffffff";  // Bílý text na tlačítku
        document.getElementById('theme-toggle').style.backgroundColor = "#31ff00";  // Zelené pozadí tlačítka
    }
});
