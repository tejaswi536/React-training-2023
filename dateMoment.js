// Format current date and time
const formattedDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(formattedDateTime); // Example output: January 23rd 2024, 6:25:04 pm

// Format current day of the week
const dayOfWeek = moment().format('dddd');
console.log(dayOfWeek); // Example output: Tuesday

// Format current date in a custom way
const customFormat = moment().format("MMM Do YY");
console.log(customFormat); // Example output: Jan 23rd 24

// Format current date and time in default ISO format
const defaultFormat = moment().format();
console.log(defaultFormat); // Example output: 2024-01-23T18:25:04-05:00

// Calculate relative time
const yearsAgo = moment("20120620", "YYYYMMDD").fromNow(); // 12 years ago
console.log("Years Ago:", yearsAgo);

const hoursAgoStartOfDay = moment().startOf('day').fromNow(); // 18 hours ago
console.log("Hours Ago (Start of Day):", hoursAgoStartOfDay);

const hoursAheadEndOfDay = moment().endOf('day').fromNow(); // in 6 hours
console.log("Hours Ahead (End of Day):", hoursAheadEndOfDay);

const minutesAgoStartOfHour = moment().startOf('hour').fromNow(); // 25 minutes ago
console.log("Minutes Ago (Start of Hour):", minutesAgoStartOfHour);


// Calendar time
const tenDaysAgo = moment().subtract(10, 'days').calendar(); // 01/13/2024
console.log("Ten Days Ago:", tenDaysAgo);

const today = moment().calendar(); // Today at 6:25 PM
console.log("Today:", today);

const tomorrow = moment().add(1, 'days').calendar(); // Tomorrow at 6:25 PM
console.log("Tomorrow:", tomorrow);

// Get the current locale and format time
const currentLocale = moment.locale(); // Get current locale (e.g., 'en')
console.log("Current Locale:", currentLocale);

const localTime = moment().format('LT'); // 6:25 PM
console.log("Local Time:", localTime);

const localTimeWithSeconds = moment().format('LTS'); // 6:25:04 PM
console.log("Local Time with Seconds:", localTimeWithSeconds);

const localDate = moment().format('L'); // 01/23/2024
console.log("Local Date:", localDate);