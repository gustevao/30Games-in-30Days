const player_h = 100, player_w = 20;

let player1 = { 
        x:10,
        y:(canvas_h/2) - (player_h/2),
        pts:0,
        key:0
    },

    player2 = {
        x:canvas_w - player_w - 10,
        y:(canvas_h/2) - (player_h/2),
        pts:0
    };

document.addEventListener("keydown", e => {
    if(e.key == "ArrowUp" || e.key == "ArrowDown")
        player1.key = e.key
})

const movePlayer = () => {
    if(player1.key == "ArrowUp" && player1.y > 0)
        player1.y -= 6
        else if(player1.key == "ArrowDown" && player1.y + player_h < canvas_h)
            player1.y += 6
}

const moveAIPlayer = () => {
    if(player2.y > ball.y)
        player2.y -= Math.floor(Math.random()*10);
        else if(player2.y < ball.y - player_h)
            player2.y += Math.floor(Math.random()*10);
}