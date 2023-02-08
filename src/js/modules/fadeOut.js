export default function(clickTarget, changingElement, duration = 400, timeout) {
  if (timeout) {
    setTimeout(() => {
      if (clickTarget) {
        clickTarget.addEventListener('click', () => {
          changingElement.style.animation = `fade ${duration}ms 1 reverse`
          setTimeout(() => {
            changingElement.style.display = 'none'
            changingElement.style.animation = ''
          }, duration);
        })
      } else {
        changingElement.style.animation = `fade ${duration}ms 1 reverse`
        setTimeout(() => {
          changingElement.style.display = 'none'
          changingElement.style.animation = ''
        }, duration);
      }
    }, timeout);
  } else {
    if (clickTarget) {
      clickTarget.addEventListener('click', () => {
        changingElement.style.animation = `fade ${duration}ms 1 reverse`
        setTimeout(() => {
          changingElement.style.display = 'none'
          changingElement.style.animation = ''
        }, duration);
      })
    } else {
      changingElement.style.animation = `fade ${duration}ms 1 reverse`
      setTimeout(() => {
        changingElement.style.display = 'none'
        changingElement.style.animation = ''
      }, duration);
    }
  }
}