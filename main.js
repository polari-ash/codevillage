const a = 2
const b = 3
console.log(a === b)
const c = 10
const d = 2 * 5
console.log(c <= d)


function cointoss() {
    const num = Math.random() // numは0.0〜1.0のランダムな数値
    if (num <= 0.5) {
        console.log("表")
    } else {
        console.log("裏")
    }
    // ①ここを埋める
}

for (let i = 0; i < 10; i++) {
    cointoss()
}

const score = Math.random() * 100

function scoring(score) {
    if (score >= 100) {
        console.log("秀")
    } else if (score >= 60) {
        console.log("良")
    } else {
        console.log("負荷")
    }
    // ここを埋める
}

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(60)) //=> 良
console.log(scoring(13)) //=> 不可