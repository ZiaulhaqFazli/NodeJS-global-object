//Global object
console.log(global)

// Set the timeout for 3 seconds and console the text = Timeout Called! after 3 seconds
global.setTimeout(() => {
    console.log("Timeout Called!")
    clearInterval(int)
}, 3000)


// Set the time interval of 1 second and console the text = Interval Called!
const int = setInterval(() => {
    console.log("Interval Called!")
}, 1000)

// Get the current directory
console.log(__dirname);
// Get the file name
console.log(__filename);