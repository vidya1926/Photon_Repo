//to find a even number
let num = 21
if (num % 2 == 0) {
    console.log("Even")
} else {
    console.log("Odd")
}

let browser = "Edge"
switch (browser) {
    case "FireFox":
        console.log("Launching")
        break;
    default:
        console.log("Invalid info")

}

function cgpa(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("Secured high")
            break

        case (score >= 80 && score <= 90):
            console.log("Secured less than 90")
            break

        case (score >= 70 && score <= 80):
            console.log("Secured less than 80")
            break
    }


}

cgpa(79)