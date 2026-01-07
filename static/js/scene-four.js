import { DOM } from './elements.js'

/* main timeline */
export function createSceneFour() {
  return gsap.timeline({ defaults: { duration: 0.5 }, paused: true })
    .pause()
    .add(tl(), .1)
}

/* child timelines */
function tl() {
  return gsap.timeline({})
    .to(DOM.scene4Trigger, 0.15, { opacity: 0, yPercent: 100 })
    .set([DOM.alienEmoji, DOM.rings], { position: 'fixed', left: '50vw', top: '50vh', x: 0, y: 0, xPercent: -50, yPercent: -50, transformOrigin: 'center', zIndex: 100, pointerEvents: 'none', width: 'auto', display: 'inline-block', textAlign: 'center', margin: 0, right: 'auto' })
    .set(DOM.rings, { opacity: 0, scale: 0 })
    .to(DOM.alienEmoji, 0.5, { scale: 1.8, rotation: 360, opacity: 1, ease: 'back.out(1.7)' })
    .to(DOM.rings, 0.4, { opacity: 1, scale: 0.6, ease: 'power2.out' }, '<.1')
    .to(DOM.rings, 1.5, { rotation: 360, repeat: 1, ease: 'linear' }, '<')
}
