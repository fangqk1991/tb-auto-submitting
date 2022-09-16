const sleep = (ms) =>{
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const btn = document.querySelector('.go-btn')

const targetTime = new Date()
targetTime.setUTCHours(2)
targetTime.setMinutes(0)
targetTime.setSeconds(0)
const targetTs = targetTime.getTime()

const waitToReload = async () => {
  while (Date.now() < targetTs) {
    console.info(`sleep.`)
    await sleep(100)
  }
  window.location.reload()
}

if (btn) {
  btn.click()
} else {
  waitToReload()
}
