// code your solution here
function saturdayFun (stuff = 'roller-skate') {
    return `This Saturday, I want to ${stuff}!`
}

function mondayWork (work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective (flair = "*") {
    return function (thing = 'special') {
        return `You are ${flair}${thing}${flair}!`
    }
}