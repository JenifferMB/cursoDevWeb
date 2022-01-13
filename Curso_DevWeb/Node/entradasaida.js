const anom = process.argv.indexOf('-a') !== -1

if(anom){
    process.stdout.write('msg\n')
    process.exit()
}
else{
    process.stdout.write("What is your name? ")
    process.stdin.on('data', data =>{
        const name = data.toString().replace('\n', '')

        process.stdout.write(`ah, ok! ${name}\n`)
        process.exit()
    })
}