function nextquestion(button_number) {
    var randomizer = Math.round(Math.random()*7) + 1
    console.log(randomizer)
    if (randomizer == 1) {
        document.getElementsByClassName("button1").src="c.png"
        }
    else if (randomizer == 2) {
        document.getElementsByClassName("button2").src="d.png"
        }
    else if (randomizer == 3) {
        document.getElementsByClassName("button3").src="e.png"
        }        
    else if (randomizer == 4) {
        document.getElementsByClassName("button4").src="f.png"
        }        
    else if (randomizer == 5) {
        document.getElementsByClassName("button5").src="g.png"
        }
    else if (randomizer == 6) {
        document.getElementsByClassName("button6").src="a.png"
        }
    else if (randomizer == 7) {
        document.getElementsByClassName("button7").src="b.png"
        } }