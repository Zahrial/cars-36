class Player{
    constructor(){
    this.name = null
    this.distance = 0
    this.index = null 
    }

    getCount(){
        var playercountref = database.ref('playerCount')
        playercountref.on('value',(data)=>{
        playerCount = data.val()    
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = 'players/player'+this.index
        database.ref(playerIndex).set({
            name:this.name,distance:this.distance
        })
    }
    
    static getplayerinfull(){
       var playerinforef = database.ref('players')
       playerinforef.on('value',(data)=>{
           allPlayers = data.val()
       })
    }
}