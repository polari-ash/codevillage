const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]



function scorenig(scores) {

    scores.forEach((result) => {
        if (result === 100) {
            console.log("秀")
        } else if (result >= 60) {
            console.log("良")
        } else {
            console.log("不可")
        }
    })


}

scorenig(scores)

