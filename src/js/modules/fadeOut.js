export default function(clickTarget, changingElement, duration = 400) {
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