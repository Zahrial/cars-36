class Game{
   constructor() {

   }
getState(){
   var gamestateref = database.ref('gameState') 
   gamestateref.on('value',function(data){
       gameState = data.val()
 })
}
update(count){
   database.ref('/').update({
      gameState:count
   })

}
async start(){
   if(gameState===0){
      player = new Player()
      var playercountref = await database.ref('playerCount').once('value')
      if(playercountref.exists()){
         playerCount = playercountref.val()
         player.getCount()
      }
   form = new Form()
   form.display()
   }
}

play(){
   form.hide()
   Player.getplayerinfull()
   if(allPlayers!==undefined){
      var displayPostion = 130
      for(var plr in allPlayers)
      {
         if(plr ==='player'+player.index)
         fill('red')
         else fill('black')
         displayPosition = displayPosition + 20
         textSize(15)
         text(allPlayers[plr].name+':'+allPlayers[plr].distance,120,displayPosition)
      }
   }
   if(keyIsDown(UP_ARROW)&& player.index!==null){
      player.distance = player.distance + 50
      player.update()
   }

}

}

