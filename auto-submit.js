const sleep = (ms) =>{
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const main = async () => {
  const targetTime = new Date()
  targetTime.setUTCHours(2)
  targetTime.setMinutes(0)
  targetTime.setSeconds(0)
  const targetTs = targetTime.getTime()

  const btn = document.querySelector('.go-btn')
  if (btn) {
    await sleep(200)
    btn.click()
  } else {
    while (Date.now() < targetTs) {
      console.info(`sleep.`)
      await sleep(100)
    }
    window.location.reload()
  }
}

main()
