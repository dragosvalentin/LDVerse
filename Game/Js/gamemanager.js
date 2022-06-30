let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
        
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Shaman":
                player = new Player(classType, 100, 200, 50, 50, 100);
                break;
            case "Monk":
                player = new Player(classType, 100, 100, 100, 100, 50);
                break;
        }
     let getInterface = document.querySelector(".interface");
     getInterface.innerHTML = '<img src="../Game/images/Avatar Player/' + classType() + '.jpg" class="img-avatar"><div><h3>' + classType +'</h3><p class="health-player"> Health: ' + player.health + '</p><p> Mana: ' + player.mana + '</p><p> Strength: ' + player.strength + '</p><p> Agility: ' + player.agility + '</p><p> Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy! </p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibilty = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //Create Enemy!
        let enemy00 = new Enemy("Tiger", 200, 0, 200, 50, 50);
        let enemy01 = new Enemy('Wizzard', 100, 200, 50, 50, 100);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
        case 0:
            enemy = enemy00;
            break;
        case 1:
            enemy = enemy01;
            break;
       }
       getHeader.innerHTML = '<p>Task: Choose your move!</p>';
       getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
       getEnemy.innerHTML = '<img src="../Game/images/Avatar Enemy/' + enemy.enemyType.toLowerCase() + '.jpg" + enemy.enemyType + class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
   },
    
}
