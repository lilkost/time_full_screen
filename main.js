function showTime() {
    let date = new Date();
    let h = document.querySelector('.hours');
    let m = document.querySelector('.minutes');
    let s = document.querySelector('.seconds');
    let y = document.querySelector('.year')
    let mount = document.querySelector('.mount')
    let d = document.querySelector('.day')

    let hJS= date.getHours()
    let mJs= date.getMinutes();
    let sJs= date.getSeconds();
    
    if(hJS < 10) {
        hJS = '0' + hJS
    }
    if(mJs < 10) {
        mJs = '0' + mJs
    } 
    if(sJs < 10) {
        sJs = '0' + sJs
    }

    h.textContent = hJS;
    m.textContent = mJs;
    s.textContent = sJs;
    y.textContent = date.getFullYear();
    mount.textContent = date.getMonth();
    d.textContent =date.getDate()
}


window.setInterval(showTime, 1000);
