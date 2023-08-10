async function weatherReport() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Degree")
        }, 5000)
    })
    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Degree")
        }, 15000)
    })
    let wait = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    let waitW=await wait
    underline()
    console.log("Fetching Delhi Weather Please wait .....")
    underline()
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather......")
    underline()
    console.log(`Delhi Weather Report: ${delhiW}`)
    underline()
    console.log("Fetching Banglore Weather Please wait .....")
    let bangloreW = await bangloreWeather
    underline()
    console.log("Fetched Banglore Weather......")
    underline()
    console.log(`Banglore Weather Report: ${bangloreW}`)
}
const underline = () => {
    console.log("--------------------------------------------")
}
const cherry = async () => {
    underline()
    console.log("Heyy i am cheery and i am also waiting")
    underline()
}
const main1 = async () => {
    await weatherReport()
    await cherry()
}
const gaurav = () => {
    underline()
    console.log("heyy i am gaurav and i am not waiting")

    
}
main1()
gaurav()