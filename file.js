const fs = require('fs')

const myObj = {
    name  : 'Jobayer Hossain',
    email : 'web.jobayer@gmail.com',
    id    : '021',
    address: {
        parmanentAddress : "Satkhira",
        presentAddr : "Dhaka",
    },
    contact : {
        home : '019',
        office : '015',
    }
}

// convert JSON Formate
const jdata = JSON.stringify(myObj)

// writeFile
fs.writeFile('myJsonData.json', jdata, (err)=>{
    if(err)
        console.log(err)
    else
        console.log('success')
})

// readFile
fs.readFile('./myJsonData.json', (err, data) => {
    if (err) throw err

    console.log(JSON.parse(data).address.parmanentAddress)
})