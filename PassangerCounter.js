//document.getElementById("count-el").innerText = 5
        // let firstBatch = 5
        // let seconBat
        
        // let count = firstBatch
        // console.log(count)
        
        // let myAge = 21;
        // let humanDogRation = 7;

        // let myDogAge = myAge * humanDogRation
        // console.log(myDogAge)

        // let count = 5

        // count += 1
        // console.log(count)

        // let bonusPoints = 50
        // bonusPoints += 50
        // bonusPoints -= 75
        // bonusPoints += 45

        // console.log(bonusPoints)

    


        // function increment(){
        //         console.log("The button was clicked")
        // }

        // let lap1 = 34
        // let lap2 = 33
        // let lap3 = 36

        // function sumLaps(){
        //         let sum = lap1 + lap2 + lap3
        //         console.log(sum)
        // }
        // sumLaps()



        //1 Initialize the count as 0
        //2 Listen for clicks on the increment button
        //3 Increment the count variable when the button is clicked
        //4 change the count-el in the HTML to reflect the new count 
        
        let addEl = document.getElementById("add");
        let countPassagers = document.getElementById("countEls");
        let resutlEl = document.getElementById("results");
        let clearEl = document.getElementById("clear");
        let counter = 0; 
        let saves = 0;

        function addPassager(){
                counter += 1
                countPassagers.textContent = counter;
        }
        function saveCurrentCount(){
                resutlEl.textContent += counter + " - " ;
        }
        function clearElement(){
                resutlEl.innerHTML = "Current Results: ";
        }
   