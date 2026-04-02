function start() {
  document.querySelector(".opening").style.display = "none";
  document.getElementById("mainContent").style.display = "block";

  let music = document.getElementById("music");
  music.play();

  startTyping();
  const images = document.querySelectorAll(".gallery img");

window.addEventListener("scroll", () => {
  let triggerBottom = window.innerHeight * 0.9;

  images.forEach(img => {
    let imgTop = img.getBoundingClientRect().top;

    if (imgTop < triggerBottom) {
      img.style.opacity = "1";
      img.style.transform = "translateY(0)";
    }
  });
});
}
const videos = document.querySelectorAll(".vid");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  videos.forEach(video => {
    const top = video.getBoundingClientRect().top;

    if (top < trigger && top > 0) {
      video.style.opacity = "1";
      video.style.transform = "translateY(0)";
      video.play();
    } else {
      video.pause();
    }
  });
});
const text = `Happy Anniversary 1 Tahun ya, sayangku 💖

Dan kalau boleh jujur…
aku gak nyari yang sempurna,
aku cuma butuh kamu.

Karena di kamu,
aku nemuin hal-hal kecil yang gak bisa aku jelasin,
tapi selalu bikin aku tenang.

Kadang kita emang sering berantem ya…
bahkan hal kecil bisa jadi besar kalau di chat 😅
tapi lucunya, setiap ketemu,
semuanya langsung kayak hilang gitu aja.

Dan dari situ aku sadar…
sejauh apapun kita beda,
seberisik apapun kita ribut,
aku tetep pengen balik ke kamu.

Aku mungkin bukan pasangan yang paling baik,
aku masih sering egois,
masih sering bikin kamu kesel,
masih sering bikin kamu nunggu…

tapi satu hal yang pasti,
aku selalu usahain buat tetep milih kamu,
setiap hari.

Terima kasih ya…
udah bertahan sejauh ini,
udah nerima aku dengan segala kurangku,
udah jadi tempat pulang yang paling nyaman.

Semoga kita bisa terus bareng,
gak cuma 1 tahun,
tapi 2, 3, 4…
bahkan sampai kita lupa cara berpisah.

Aku gak janji hubungan kita bakal selalu mulus,
tapi aku janji…
aku gak akan pergi cuma karena keadaan lagi susah.

Tetap di sini ya…
sama aku.

I love you, lebih dari yang bisa aku tulis di sini 💖`;

let i = 0;

function startTyping() {
  let speed = 40;
  function type() {
    if (i < text.length) {
      document.getElementById("typingText").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
const ending = document.querySelector(".ending");

window.addEventListener("scroll", () => {
  let triggerBottom = window.innerHeight * 0.9;

  if (ending.getBoundingClientRect().top < triggerBottom) {
    ending.style.opacity = "1";
    ending.style.transform = "translateY(0)";
  }

function createSparkle() {
  const s = document.createElement("div");
  s.classList.add("sparkle");
  s.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(s);

  setTimeout(() => {
    s.remove();
  }, 3000);
}

setInterval(createSparkle, 200);
function createStars() {
  const container = document.querySelector(".stars");

  for (let i = 0; i < 50; i++) {
    let star = document.createElement("div");
    star.classList.add("star");

    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    container.appendChild(star);
  }
}

createStars();

});