const drawRect = (x,y,w,h,color) => {
    ctx.fillStyle = color
    ctx.fillRect(x,y,w,h)
    ctx.fillStyle = "#000"
}

const checkScore = () => {
    if(ball.x < 0){
        score[1] += 1;
        initBall()
    }
        else if(ball.x +10 > canvas_w){
            score[0] += 1;
            initBall()
        }
}

const writePoints = () => {
    ctx.font = "70px monospace";
    ctx.fillStyle = "#6EFF33";
    ctx.fillText(score[0] + "-" + score[1], canvas_w/2.31, 100);

}
const draw = () => {
    drawRect(0,0,canvas_w,canvas_h,"#000")

    drawRect(player1.x, player1.y, player_w, player_h, "#6EFF33")
    drawRect(player2.x, player2.y, player_w, player_h, "#6EFF33")

    //drawRect(canvas_w/2 - 5, 0, 5, canvas_h, "#FFF")

    drawRect(ball.x, ball.y, 10, 10,"#FFF")

    writePoints()
}

const loop = () => {
    draw()

    movePlayer()
    moveAIPlayer()
    
    bounceBall()

    checkScore()
}

const initialize = () => {
    const canvas = document.getElementById("game-box")
    ctx = canvas.getContext("2d")

    player1.y = player2.y = (canvas_h/2) - (player_h/2);

    //player1.pts = 0
    //player2.pts = 0

    setInterval(loop,1000/60)

    initBall()
}

initialize()