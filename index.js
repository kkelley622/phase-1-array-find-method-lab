// code your solution here

function superbowlWin(record) {
    // return year Broncos won super bowl
    const winningSeason = record.find(record => record.result === "W")

    // returns undefined if no win object exists
    return winningSeason ? winningSeason.year : undefined;
}
