const allBtnBanner = () => {

    const btns = document.querySelectorAll('.btn-banner')
    const banner = document.querySelector('.background-banner')
    
    btns.forEach(btn => {

        btn.addEventListener('click', (e) => { 

            banner.classList = ''
            banner.classList.toggle(`${e.target.innerText.toLowerCase()}`)

        })
    })
}

const allBtnsPurchase = () => {

    const btns = document.querySelectorAll('.btn-purchase')
    const btnsInfo = document.querySelectorAll('.btn-info')

    btns.forEach(btn => {

        btn.addEventListener('click', (e) => {

            window.location.href = `/src/pages/purchase-${e.target.dataset.id}.html`

        })

    })
    btnsInfo.forEach(btn => {
       
        btn.addEventListener('click', (e) => {
            
            window.location.href = `/src/pages/purchase-${e.target.dataset.id}.html`
            
        })
    })

}

allBtnBanner()
allBtnsPurchase()