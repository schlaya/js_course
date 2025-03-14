// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon')
} 
else {
    console.log('Good evening')
}