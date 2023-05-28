// Switch statement

const day = 'thursday';

switch (day) {
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break; // without break, the code will continue executing
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples"); // this statement apply to wed and thur
        break;
    case 'friday':
        console.log("Recode videos");
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log("Recode videos");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}