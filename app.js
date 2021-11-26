const getEl = selector => document.querySelector(selector)

const uiElDays = getEl('#days')
const uiElHours = getEl('#hours')
const uiElMinutes = getEl('#minutes')
const uiElSeconds = getEl('#seconds')
const spinerLoading = getEl('#loading')
const uiElNextYear = getEl('#year')

const nextYear = new Date().getFullYear() + 1
const newYearDateTime = new Date(`January 01 ${nextYear} 00:00:00`)

const handleCountdownDisplay = () => {
    spinerLoading.remove()
    getEl('.countdown').style.display = 'flex'
}

uiElNextYear.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValuesOnInterface = ({ days, hours, minutes, seconds }) => {
    uiElDays.textContent = getTimeUnit(days)
    uiElHours.textContent = getTimeUnit(hours)
    uiElMinutes.textContent = getTimeUnit(minutes)
    uiElSeconds.textContent = getTimeUnit(seconds)
}

const updateCountdown = () => {
    const currentTimestamp = new Date()
    const differenceFinalDateCurrentDate = newYearDateTime - currentTimestamp

    const days = Math.floor(differenceFinalDateCurrentDate / 1000 / 60 / 60 / 24)
    const hours = Math.floor(differenceFinalDateCurrentDate / 1000 / 60 / 60) % 24
    const minutes = Math.floor(differenceFinalDateCurrentDate / 1000 / 60) % 60
    const seconds = Math.floor(differenceFinalDateCurrentDate / 1000) % 60

    insertCountdownValuesOnInterface({ days, hours, minutes, seconds })
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000)