/**
*@Description:
*@author Lucas
*@date 2021/5/19
*/

window.CONST = {
    DEFAULT_IMG: './img/1.jpg'
}

window.addEventListener('DOMContentLoaded', ()=>{
    // console.log("ok")
    localStorage.clear()
    setDropImg2Start()
    // console.log("begin")
    setStartWithDefault()
    regain()
})

function setDropImg2Start(){
    const $panel = document.getElementsByClassName('panel')[0]
    // console.log($panel)
    $panel.addEventListener('dragover', function(e){
        e.preventDefault()   
    })

    $panel.addEventListener('drop', async function(e) {
        e.preventDefault()
        this.className = 'panel'
        const files = e.dataTransfer.files
        if(files.length === 0) {
            console.log("No file");
            return
        }
        const curFile = files[0]
        if(curFile.type.indexOf('image')===-1) return
        const reader = new FileReader()
        reader.readAsDataURL(curFile)
        console.log("fine");
        reader.onload = function (e) {
            const url = e.target.result
            init(url)
        }
    })
}

function setStartWithDefault() {
    const $startDefaultElement = document.getElementsByClassName('start-with-default')[0]
    $startDefaultElement.addEventListener('click', ()=>{
        init()
    })
}

/**
 * 伪随机洗牌，打乱待拼碎片数组
 * @param arr 等待洗牌的碎片数组
 */
function shuffle(arr) {
    for(let i=0, len=arr.length; i<len; i++){
        const randomI = Math.floor(Math.random()*len)
        ;[arr[i], arr[randomI]] = [arr[randomI], arr[i]]
    }
    return arr
}

/**
 *
 * @param imgSrc
 * @param slice
 * @returns {Promise<void>}
 */
async function init(
    imgSrc = CONST.DEFAULT_IMG,
    slice = [4, 8]
) {
    clear()
    localStorage.setItem('imgUrl', imgSrc)
    const image = new Image()
    image.src = imgSrc
    image.onload = ()=>{
        const pieceWidth = 150
        const pieceHeight = (image.height / slice[0]) / (image.width/slice[1]) * pieceWidth
        const panelWidth = pieceWidth * slice[1]
        const panelHeight = pieceHeight * slice[0]

        const pieces = []
        const panelPieces = []

        const $main = document.getElementsByTagName('main')[0]
        const {width: mainWidth, height: mainHeight} = $main.getBoundingClientRect()
        const scaleRatio = Math.min((mainWidth-100)/panelWidth, (mainHeight-100)/panelHeight)


        for(let i=0; i<slice[0]; i++){
            for(let j=0; j<slice[1]; j++) {
                const pos = `${j}-${i}`
                const $piece = document.createElement('div')
                $piece.className = 'piece'
                $piece.dataset.pos = pos
                $piece.style.width  = pieceWidth+'px'
                $piece.style.height  = pieceHeight+'px'
                $piece.style.backgroundImage = `url(${imgSrc})`
                $piece.style.backgroundSize = `${pieceWidth * slice[1]}px ${pieceHeight*slice[0]}px`
                $piece.style.backgroundPosition = `${panelWidth - pieceWidth*j}px ${panelHeight - pieceHeight*i}px`
                pieces.push($piece)

                const $panelPiece = $piece.cloneNode()
                const matchPieces = JSON.parse(localStorage.getItem('matchPieces')) || []
                if(matchPieces.includes(pos))
                    $panelPiece.className = 'piece matched'
                panelPieces.push($panelPiece)
                $piece.draggable = true
            }
        }

        const $panelElement = document.getElementsByClassName('pieces')[0]
        


        const $panel = document.getElementsByClassName('panel')[0]
        $panel.style.width = `${panelWidth}px`
        $panel.style.height = `${panelHeight}px`
        $panel.className = 'panel'

        
        $panel.style.transform = `scale(${scaleRatio})`

        shuffle(pieces).forEach(piece => {
            piece.style.transform = `scale(${scaleRatio})`
            $panelElement.append(piece)
        })

        panelPieces.forEach(piece=>{
            $panel.append(piece)
        })

        bindPieceEvents()
    }
}

function clear() {
    const $pieces = document.getElementsByClassName('piece')
    Array.from($pieces).forEach($piece => $piece.remove())
    console.log("clear done");
}

function saveMatchedPiece(pos) {
    const matchPieces = JSON.parse(localStorage.getItem('matchedPieces')) || []
    matchPieces.push(pos)
    localStorage.setItem('matchedPieces', JSON.stringify(matchPieces))
}

function bindPieceEvents() {
    const $pieces = Array.from(document.querySelectorAll('aside .piece'))
    $pieces.forEach(piece => {
        piece.addEventListener('dragstart', onDragstart)
        piece.addEventListener('dragend', onDragend)
    })

    const $panelPieces = Array.from(document.querySelectorAll('.panel .piece'))
    $panelPieces.forEach(piece => {
        piece.addEventListener('dragenter', onDragenter)
        piece.addEventListener('dragleave', onDragleave)
        piece.addEventListener('dragover', onDragover)
        piece.addEventListener('drop', onDrop)
    })
}

function onDragstart(e) {
    this.className = 'draging'
    e.dataTransfer.setData('text/plain', this.dataset.pos)
    e.dataTransfer.setData('drag/piece', '')
}

function onDragend() {
    this.className = 'piece'
}

function onDragenter(e) {
    e.preventDefault()
    if(this.className.includes('matched') || !e.dataTransfer.types.includes('drag/piece')) return
    this.className = 'dragenter'
}

function onDragleave(e) {
    if(this.className.includes('matched') || !e.dataTransfer.types.includes('drag/piece')) return
    this.className = 'piece'
}

function onDragover(e) {
    e.preventDefault()
}

function onDrop(e) {
    e.preventDefault()
    if(this.className.includes('matched') || !e.dataTransfer.types.includes('drag/piece')) return

    const pos = e.dataTransfer.getData('text/plain')
    const selfPos = this.dataset.pos
    if(pos===selfPos){
        this.className = 'piece matched'
        const targetPiece = document.querySelectorAll(`aside .piece[data-pos="${pos}"]`)[0]
        targetPiece.parentNode.removeChild(targetPiece)
        saveMatchedPiece(pos)
        
        const restPieces = document.querySelectorAll('aside .piece')
        if(restPieces.length===0){
            document.getElementsByTagName('body')[0].className = 'completed'
            localStorage.clear()
        }
    }else{
        this.className = 'piece'
    }
}

function regain() {
    const url = localStorage.getItem('imgUrl')
    if(url){
        init(url)
    }else{
        localStorage.clear()
    }
}