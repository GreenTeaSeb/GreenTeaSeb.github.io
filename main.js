const next = (e) =>{
    const img = e.parentElement.parentElement.parentElement.querySelector('img')
    var new_ = (parseInt(img.dataset.current) + 1) % img.dataset.max;
    img.dataset.current =  new_ == 0 ? 1 : new_

    img.src = img.dataset.group + '/Slika-' + img.dataset.current + '.jpeg'
}

const prev = (e) =>{
    const img = e.parentElement.parentElement.parentElement.querySelector('img')
    var new_ = (parseInt(img.dataset.current) - 1)
    img.dataset.current =  new_ == 0 ?  img.dataset.max : new_
    img.src = img.dataset.group + '/Slika-' + img.dataset.current + '.jpeg'
}