const terrain = document.getElementById('terrain');
var ball = document.getElementById('ball');
var downbar = document.getElementById('dawnbar');
var upbar = document.getElementById('upbar');
var score_P1a = document.getElementById('score_P1');
var score_P2a = document.getElementById('score_P2');

var a = 0;
var positionY = 100;
var positionX = 100
var rebondown = false;
var rebonleft = false;
var positionupbar = 0;
var positiondownbar = 0;
var score_P1n = 0;
var score_P2n = 0;

        
        score_P1a.innerHTML = score_P1n.toString()
        let movedown = setInterval(function movdown() {

            if(positionY < 500 && rebondown == false){
                positionY++;
                positionY = positionY.toString();
                result = positionY + 'px';
                ball.style.top = result;
                console.log(positionY)
                if(positionX <= 280 && rebonleft == false){
                    positionX++;
                    positionX = positionX.toString();
                    result = positionX + 'px';
                    ball.style.left = result;         
                } else if(positionX == 281){
                    rebonleft = true;
                    console.log(rebonleft);
                }
                if(positionX >= 1 && rebonleft == true){
                    positionX--
                    positionX = positionX.toString();
                    result = positionX + 'px'
                    ball.style.left = result;
                    
                }else if (positionX == 0){
                    rebonleft = false
                    
            }} else if(positionY == 500 && 0 < positionX && positionX < 100 && positionupbar == 1){
                rebondown = true;
                
            } else if(positionY == 500 && 100 < positionX && positionX < 200 && positionupbar == 0){
                rebondown = true;
            } else if(positionY == 500 && 200 < positionX && positionX < 300 && positionupbar == -1){
                rebondown = true;}
                else if(positionY == 500){
                    positionY = 250
                    positionX = 150
                    score_P1++
                }

                }, 1);
                

            
            let moveup = setInterval(function movup() {
                if(positionY > 35 && rebondown == true){
                    positionY--
                    positionY = positionY.toString();
                    result = positionY + 'px'
                    ball.style.top = result;
                    if(positionX <= 280 && rebonleft == false){
                        positionX++;
                        positionX = positionX.toString();
                        result = positionX + 'px';
                        ball.style.left = result;
                        
                    } else if(positionX == 281){
                        rebonleft = true;
                    }
                    if(positionX >= 1 && rebonleft == true){
                        positionX--
                        positionX = positionX.toString();
                        result = positionX + 'px'
                        ball.style.left = result;
                        

                    }else if (positionX == 0){
                        rebonleft = false
                }
                    }else if(positionY == 35 && 0 < positionX && positionX < 100 && positiondownbar == -1){
                        rebondown = false;
                    } else if(positionY == 35 && 100 < positionX && positionX < 200 && positiondownbar == 0){
                        rebondown = false;
                    } else if(positionY == 35 && 200 < positionX && positionX < 300 && positiondownbar == 1){
                        rebondown = false;}
                        else if(positionY == 35){
                            positionY = 250
                            positionX = 150
                            score_P2++
                        }
                    
                }, 1);





                window.addEventListener('keyup', (nonevent) => {
                    console.log(nonevent)
                        var {type, code} = nonevent;
                        if(type == "keyup" && code == "KeyD" || code == "KeyA"){
                            downbar.style.left = '33%';
                            positiondownbar = 0;
                        }
                        else if(type == "keyup" && code == "KeyJ" || code == "KeyL"){
                            upbar.style.left = '33%';
                            positionupbar = 0;
                        }})


                window.addEventListener('keydown', (event) => {
                    var {code, isTrusted} = event;
                        while(isTrusted == true){
                                if(code == 'KeyD'){
                                    downbar.style.left = '66%';
                                    positiondownbar = 1;
                                }
                                else if(code == 'KeyA'){
                                    downbar.style.left= '0%';
                                    positiondownbar = -1;
                                }
                                else if(code == 'KeyJ'){
                                    upbar.style.left = '0%';
                                    positionupbar = 1;
                                }
                                else if(code == 'KeyL'){
                                    upbar.style.left= '66%';
                                    positionupbar = -1;
                                }
                                break};
                        });
                        
                    /*back in middel*/
                        
                