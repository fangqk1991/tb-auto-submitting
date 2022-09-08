const btn = document.querySelector('.go-btn')
if (btn) {
  console.info(`click go-btn`)
  btn.click()
} else {
  console.info(`reload page`)
  window.location.reload()
}
