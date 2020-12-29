/*
By: Mark Carvalho
Date: 2020 December 29
*/

window.addEventListener('load', function(){ 
  
  // Generate first 2 numbers 
  generate()
  generate()

 //---------------------------------------------------------------------------------- 
 function generate()
  {
      var rand = Math.floor(Math.random() * 15) + 1;
      var id = rand.toString();
      if (document.getElementById(id).innerHTML == '')
      {
        //insures probability of 2 being 90% of the time and 4 being 10% of the time
        var probability = Math.floor(Math.random() * 10) + 1;
        if( probability < 10)
        {
          document.getElementById(id).innerHTML = 2
        }
        else
        {
          document.getElementById(id).innerHTML = 4
        }
      }
      else
      {
        generate()
      }
  }

 /*Lose Function if all cards are not blank*/ 
  function lose()
  {
    var countCards = 0
    for (let i = 0 ; i <= 15;i++)
    {
       if(document.getElementById(i.toString()).innerHTML == '')
       {
          countCards++
       }
    }

    if (countCards == 0)
    {
      alert("Game Over");
    }
  }

 /*Win Function if a value of 2048 is reached in a tile*/
function win()
{
    var countCards = 0
    for (let i = 0 ; i <= 15;i++)
    {
       if(document.getElementById(i.toString()).innerHTML == '2048')
       {
          alert("You Win");
       }
    }
}

/*Checks if value is not blank and is a number*/
function isNot0 (value)
{
  return value > 0
}

/*Moves values down*/
function movingDown()
{
  for(let i = 0; i<4; i++)
  {
            var t1 = i
            var t2 = i+4
            var t3 = i+(4*2)
            var t4 = i+(4*3)

            let total1 = parseInt(document.getElementById(t1.toString()).innerHTML)
            let total2 = parseInt(document.getElementById(t2.toString()).innerHTML)
            let total3 = parseInt(document.getElementById(t3.toString()).innerHTML)
            let total4 = parseInt(document.getElementById(t4.toString()).innerHTML)

            let combine = [total1, total2, total3, total4]
            let filter = combine.filter(isNot0)
            let blank = 4 - filter.length
            let noValueArray = Array(blank).fill('')
            let newRow = noValueArray.concat(filter)

            document.getElementById(t1.toString()).innerHTML = newRow[0]
            document.getElementById(t2.toString()).innerHTML= newRow[1]
            document.getElementById(t3.toString()).innerHTML= newRow[2]
            document.getElementById(t4.toString()).innerHTML= newRow[3]
  }

}

/*Moves values up*/
function movingUp()
{
  for(let i = 0; i<4; i++)
  {
            var t1 = i
            var t2 = i+4
            var t3 = i+(4*2)
            var t4 = i+(4*3)

            let total1 = parseInt(document.getElementById(t1.toString()).innerHTML)
            let total2 = parseInt(document.getElementById(t2.toString()).innerHTML)
            let total3 = parseInt(document.getElementById(t3.toString()).innerHTML)
            let total4 = parseInt(document.getElementById(t4.toString()).innerHTML)

            let combine = [total1, total2, total3, total4]
            let filter = combine.filter(isNot0)
            let blank = 4 - filter.length
            let noValueArray = Array(blank).fill('')
            let newRow = filter.concat(noValueArray)


            document.getElementById(t1.toString()).innerHTML = newRow[0]
            document.getElementById(t2.toString()).innerHTML= newRow[1]
            document.getElementById(t3.toString()).innerHTML= newRow[2]
            document.getElementById(t4.toString()).innerHTML= newRow[3]
   }

 }

/*Moves values right*/
  function moveingRight()
  {
      for(let i = 0; i< 16 ; i++)
      {
        
          if(i % 4 === 0)
          { 
            var t1 = i
            var t2 = i+1
            var t3 = i+2
            var t4 = i+3

            let total1 = parseInt(document.getElementById(t1.toString()).innerHTML)
            let total2 = parseInt(document.getElementById(t2.toString()).innerHTML)
            let total3 = parseInt(document.getElementById(t3.toString()).innerHTML)
            let total4 = parseInt(document.getElementById(t4.toString()).innerHTML)

             let combine = [total1, total2, total3, total4]
             let filter = combine.filter(isNot0)
             let blank = 4 - filter.length
             let noValueArray = Array(blank).fill('')
             let newRow = noValueArray.concat(filter)
     

            document.getElementById(t1.toString()).innerHTML = newRow[0]
            document.getElementById(t2.toString()).innerHTML= newRow[1]
            document.getElementById(t3.toString()).innerHTML= newRow[2]
            document.getElementById(t4.toString()).innerHTML= newRow[3]
             
          }
     }
  }

/*Moves values left*/
 function moveingLeft()
  {
      for(let i = 0; i< 16 ; i++)
      {
        
          if(i % 4 === 0)
          { 
            var t1 = i
            var t2 = i+1
            var t3 = i+2
            var t4 = i+3

            let total1 = parseInt(document.getElementById(t1.toString()).innerHTML)
            let total2 = parseInt(document.getElementById(t2.toString()).innerHTML)
            let total3 = parseInt(document.getElementById(t3.toString()).innerHTML)
            let total4 = parseInt(document.getElementById(t4.toString()).innerHTML)

             let combine = [total1, total2, total3, total4]
             let filter = combine.filter(isNot0)
             let blank = 4 - filter.length
             let noValueArray = Array(blank).fill('')
             let newRow = filter.concat(noValueArray)


            document.getElementById(t1.toString()).innerHTML = newRow[0]
            document.getElementById(t2.toString()).innerHTML= newRow[1]
            document.getElementById(t3.toString()).innerHTML= newRow[2]
            document.getElementById(t4.toString()).innerHTML= newRow[3]
             
          }
     }
  }

//totals up matching values when right or left move is made
function combineLeftRight()
{
   for (let i =0 ; i < 15;i++)
   {
     let plus1 = i + 1 
     if(document.getElementById(i.toString()).innerHTML === document.getElementById(plus1.toString()).innerHTML){
        let combined = parseInt(document.getElementById(i.toString()).innerHTML) + parseInt(document.getElementById(plus1.toString()).innerHTML)
        document.getElementById(i.toString()).innerHTML = combined;
        document.getElementById(plus1.toString()).innerHTML = ''
     }
   }
}

//totals up matching values when down or up move is made
function combineDownUp()
{
   for (let i =0 ; i < 12;i++)
   {
     let plus1 = i + 4 
     if(document.getElementById(i.toString()).innerHTML === document.getElementById(plus1.toString()).innerHTML){
        let combined = parseInt(document.getElementById(i.toString()).innerHTML) + parseInt(document.getElementById(plus1.toString()).innerHTML)
        document.getElementById(i.toString()).innerHTML = combined;
        document.getElementById(plus1.toString()).innerHTML = ''
     }
   }
}

function down()
{
  movingDown()
  combineDownUp()
  movingDown()
  generate()
  win()
  lose()
  
}

function up()
{
  movingUp()
  combineDownUp()
  movingUp()
  generate()
  win()
  lose()
  
  
}

function right()
{
  moveingRight()
  combineLeftRight()
  moveingRight()
  generate()
  win()
  lose()
  
  
}

function left()
{
  moveingLeft()
  combineLeftRight()
  moveingLeft()
  generate()
  win()
  lose()
 
}

document.getElementById("down").addEventListener("click", down)
document.getElementById("up").addEventListener("click", up)
document.getElementById("right").addEventListener("click", right)
document.getElementById("left").addEventListener("click", left)
  
},false)