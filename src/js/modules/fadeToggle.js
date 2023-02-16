export default function(clickTarget, changingElement, duration = 400, displayProperty = 'initial', callback) {
    if (clickTarget) {
        clickTarget.addEventListener('click', () => {
            if (changingElement.clientWidth === 0 && changingElement.clientHeight === 0) {
                changingElement.style.display = displayProperty
                changingElement.style.animation = `fade ${duration}ms 1`
                setTimeout(() => {
                    changingElement.style.animation = ``
                }, duration);
                if (callback) {
                    callback()
                }
            } else {
                changingElement.style.animation = `fade ${duration}ms 1 reverse`
                setTimeout(() => {
                    changingElement.style.display = 'none'
                    changingElement.style.animation = ``
                }, duration);
                if (callback) {
                    callback()
                }
            }
        })
    } else {
        if (changingElement.clientWidth === 0 && changingElement.clientHeight === 0) {
            changingElement.style.display = displayProperty
            changingElement.style.animation = `fade ${duration}ms 1`
            setTimeout(() => {
                changingElement.style.animation = ``
            }, duration);
            if (callback) {
                callback()
            }
        } else {
            changingElement.style.animation = `fade ${duration}ms 1 reverse`
            setTimeout(() => {
                changingElement.style.display = 'none'
                changingElement.style.animation = ``
            }, duration);
            if (callback) {
                callback()
            }
        }
    }
}