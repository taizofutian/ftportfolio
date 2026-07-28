// ========ヒーローAOS=========
AOS.init({
    duration: 2000,
    delay: 1000,
    once: true,
});
// ===================================================================


// ========ヒーロー文字アニメーション=========
$('.hero p').textillate({
    loop: true,
    in: {
        effect: 'bounceIn',
        delayScale: 1.5,
        delay: 30,
        // shuffle: true,
    },
    out: {
        effect: 'fadeOut',
        delayScale: 1.5,
        delay: 30,
        // shuffle: true,
    }
});
// ===================================================================