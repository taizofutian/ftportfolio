
// 初期化
const lenis = new Lenis({
  autoRaf: true, // requestAnimationFrameでスクロール処理を継続的に更新するかどうか
});

// ========ローディング=========
const loading = document.querySelector(".loading");
window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("loaded");
  }, 300);
});
// ===================================================================

// ========ハンバーガー=========
const humbtn = document.querySelector(".btn");
const nav = document.querySelector(".header_nav");
const list = document.querySelector(".header_list");
// ハンバーガーアイコンを押すたびに is_open というクラス名を付与
humbtn.addEventListener("click", () => {
  nav.classList.toggle("is_open");
});
// ===================================================================

// ========セクション浮かび上がり=========
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          translate: ["0 3rem", 0],
        },
        {
          duration: 900,
          fill: "forwards",
        }
      );
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElements = document.querySelectorAll(".fadein");
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});
// ===================================================================

// ========worksの浮かび上がり=========
// workが範囲内に現れたら実行する動作
const worksFade = (entries, obs) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // console.log(entry.target);
      entry.target.animate(
        {
          opacity: [0, 1],
          // filter: ['blur(.1rem)', 'blur(0)'],
          translate: ["0 5rem", 0],
        },
        {
          duration: 1300,
          fill: "forwards",
          delay: 300 * index,
        }
      );
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const worksObserver = new IntersectionObserver(worksFade);

// .works_itemを監視するよう指示
const worksItems = document.querySelectorAll(".works_item");
worksItems.forEach((worksItem) => {
  worksObserver.observe(worksItem);
});
// ===================================================================

// ========スライダー(SLICK)=========
$(".works_slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  centerMode: true,
  centerPadding: "42%",
  cssEase: "linear",
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      // 519px以下の設定
      breakpoint: 800,
      settings: {
        centerPadding: "38%",
      },
    },
  ],
});
// ===================================================================

$(".works_slider2").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  centerMode: true,
  centerPadding: "42%",
  cssEase: "linear",
  pauseOnFocus: false,
  pauseOnHover: false,
  rtl: true, // スライダーを左から右に流す（逆向き）

  responsive: [
    {
      // 519px以下の設定
      breakpoint: 800,
      settings: {
        centerPadding: "38%",
      },
    },
  ],
});
// ===================================================================

// const loading = document.querySelector(".loading");

// window.addEventListener("load", () => {
//   loading.animate(
//     {
//       opacity: [1, 0],
//       visibility: "hidden",
//     },
//     {
//       duration: 2000,
//       delay: 1200,
//       easing: "ease",
//       fill: "forwards",
//     }
//   );
// });
