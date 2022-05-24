let ball = {
        x: canvas_w/2 - 10,
        y: canvas_h/2 - 10,
        x_direction:0,
        y_direction:0
    };

const initBall = () => {
    ball.y_direction = Math.pow(2, Math.floor( Math.random()*2) + 1) - 3;
    ball.x_direction = Math.pow(2, Math.floor( Math.random()*2) + 1) - 3;
    ball.x = canvas_w / 2 -10
    ball.y = canvas_h / 2 -10
}

const bounceBall = () => {

    if(ball.y > canvas_h - 10 || ball.y < 10)
        ball.y_direction *= -1;

    if(ball.x >= player1.x && ball.x <= player1.x + 10 && ball.y >= player1.y && ball.y <= player1.y + player_h){
        ball.x_direction = 1;
    }

    if(ball.x >= player2.x && ball.x <= player2.x + 10 && ball.y >= player2.y && ball.y <= player2.y + player_h){
        ball.x_direction = -1;
    }

    ball.x +=  5 * ball.x_direction;
    ball.y +=  5 * ball.y_direction;
}