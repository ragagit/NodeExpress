
console.log("Begin");

process.nextTick(function () {
    console.log("Next Tick Called");
});

console.log("Processed");
