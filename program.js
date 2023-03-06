import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
//instialize kaboom context
kaboom();
loadSprite("tlo", "kartkaswiateczna.png")
loadSprite("gwiazdka", "gwiazdka.png")
loadSound("muzyka", "Dzisiaj_w_Betlejem.mp3")

//add a piece of text at position (120, 80)
// add([
//     text("hello"),
//     pos(120, 80),
// ]);

const tlo = add([
    sprite("tlo"),
    pos(0,0)
])

const obrazek = add([
    sprite("gwiazdka"),
    pos(200,50)
])

let wprawo=true

onUpdate(()=>{
    if(wprawo&& obrazek.pos.x<450)
        
    obrazek.pos.x=obrazek.pos.x+1

   else if(obrazek.pos.x==450)

    {
        wprawo=false
        obrazek.pos.x=449
    }
    

    else if(!wprawo && obrazek.pos.x>0)

   obrazek.pos.x=obrazek.pos.x-1

   else if (obrazek.pos.x==0)

   {
    wprawo=true
    obrazek.pos.x=1
}
   
   
})



onKeyPress("space", ()=>play("muzyka"))