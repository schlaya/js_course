// Speed Limit = 70
// 5 -> 1 point
// Math.floor()
// 12 points -> suspended
checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint)
        console.log('Ok')
    else {
        // 130 - 70 = 60 -> 60 / 5 = 12
        let points = Math.floor((speed - speedLimit) / kmPerPoint)
        if (points >= 12)
            console.log('License suspended')
        else 
            console.log('Points', points)
    }
}