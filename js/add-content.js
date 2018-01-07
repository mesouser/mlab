var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'You have rocked it all day. Now play!';
} else if (hourNow > 12) {
    greeting = 'Slay on, Mama. Slay on!';
} else if (hourNow > 0) {
    greeting = 'Mornings never stood a chance!';
} else {
    greeting = 'Welcome!';
}

document.write('<h2>' + greeting + '</h2>');
