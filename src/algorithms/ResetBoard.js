export const ResetBoard = (homeRemove, destRemove) => {

    let vistedNodeArray = document.getElementsByClassName("visitedStartNodeBlue")
    let pathArray = document.getElementsByClassName("visitedYellowPath")
    let arr = [...vistedNodeArray, ...pathArray]
    
    arr.forEach(element => {
        element.classList.remove("visitedStartNodeBlue", "visitedYellowPath")
    });

    document.getElementById(homeRemove).classList.remove("homes")
    document.getElementById(destRemove).classList.remove("dests")
}

