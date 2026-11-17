
/* ===================================
   MAHI TIWARI BIRTHDAY SURPRISE
   JAVASCRIPT
=================================== */

/* 1. BIRTHDAY COUNTDOWN */

const birthdayDate = new Date(2026, 10, 20, 0, 0, 0);

function updateCountdown() {

    const now = new Date();
    const difference = birthdayDate.getTime() - now.getTime();

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("countdown-message").textContent =
            "🎂 Happy Birthday Mahi Didi! Today is YOUR special day! ❤️";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* 2. FLOATING HEARTS AND FLOWERS */

const particlesContainer = document.getElementById("particles");

const symbols = ["❤️", "💗", "💕", "🌸", "✨", "🦋"];

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.fontSize =
        (15 + Math.random() * 20) + "px";

    const duration = 5 + Math.random() * 6;

    particle.style.animationDuration = duration + "s";

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Create romantic particles continuously
setInterval(createParticle, 650);

/* 3. OPEN BIRTHDAY LETTER */

function openLetter() {

    const letter = document.getElementById("letterContent");

    letter.classList.add("show");

    document.getElementById("envelope").style.display = "none";

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    celebrateSmall();
}

/* 4. CLOSE BIRTHDAY LETTER */

function closeLetter() {

    document.getElementById("letterContent")
        .classList.remove("show");

    document.getElementById("envelope").style.display = "block";
}

/* 5. MUSIC PLAYER */

const birthdayAudio = document.getElementById("birthdayAudio");

const playButton = document.getElementById("playButton");

const musicDisc = document.getElementById("musicDisc");

async function toggleMusic() {

    if (birthdayAudio.paused) {

        try {

            await birthdayAudio.play();

            playButton.textContent = "❚❚ Pause Music";

            musicDisc.classList.add("playing");

        } catch (error) {

            alert(
                "Music could not play. Please check that birthday.mp3 is inside the assets folder."
            );

        }

    } else {

        birthdayAudio.pause();

        playButton.textContent = "▶ Play Music";

        musicDisc.classList.remove("playing");
    }
}

// Update controls if audio is paused or ended
birthdayAudio.addEventListener("pause", () => {
    playButton.textContent = "▶ Play Music";
    musicDisc.classList.remove("playing");
});

birthdayAudio.addEventListener("play", () => {
    playButton.textContent = "❚❚ Pause Music";
    musicDisc.classList.add("playing");
});

/* 6. BLOW OUT THE CANDLES */

let wishMade = false;

function makeWish() {

    if (wishMade) return;

    wishMade = true;

    document.getElementById("flame1").classList.add("off");
    document.getElementById("flame2").classList.add("off");
    document.getElementById("flame3").classList.add("off");

    document.getElementById("wishMessage").innerHTML =
        "🌟 Your wish is on its way! 🌟<br>" +
        "May all your dreams come true, Mahi Didi! ❤️";

    document.getElementById("wishButton").textContent =
        "Wish Made! 💖";

    document.getElementById("wishButton").disabled = true;

    celebrateBig();
}

/* 7. SMALL CELEBRATION */

function celebrateSmall() {

    for (let i = 0; i < 15; i++) {

        setTimeout(createParticle, i * 100);

    }
}

/* 8. BIG CELEBRATION */

function celebrateBig() {

    for (let i = 0; i < 70; i++) {

        setTimeout(createParticle, i * 40);

    }
}

/* 9. FINAL BIRTHDAY SURPRISE */

function finalSurprise() {

    const message = document.getElementById("finalMessage");

    message.innerHTML =
        "🎉 HAPPY BIRTHDAY MAYA TIWARI! 🎉<br><br>" +
        "💗 You are the BEST sister in the world! 💗<br><br>" +
        "👑 Forever our Queen, Mahi Didi! 👑<br><br>" +
        "Lots of love from your little brother! 🥰";

    celebrateBig();

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

/* 10. WELCOME CONSOLE MESSAGE */

console.log(
    "❤️ A special birthday website created for Maya Tiwari (Mahi)! ❤️"
);