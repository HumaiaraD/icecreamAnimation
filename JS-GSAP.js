document.addEventListener('DOMContentLoaded', function(){

        gsap.set('#scoop1', {
            yPercent: -500
        })
        gsap.set('#scoop2', {
            yPercent: -500
        })
        gsap.set('#scoop3', {
            yPercent: -500
        })
        gsap.set('.text', {
            opacity: 0,
            yPercent: 100
        })

        gsap.timeline({delay: 2 })
        .to("#scoop1", {duration: 1, y: 150, ease: 'bounce.out'})
        .to("#scoop2", {duration: 1, y: 99, ease: 'bounce.out'}, '+=0.5')
        .to("#scoop3", {duration: 1, y: 92, ease: 'bounce.out'}, '+=0.5')
        .to('.text', {
            duration: 1,
            opacity: 1,
            yPercent: 0,
            ease: 'power1.out'
          }, '+=0.3')
        
    })
