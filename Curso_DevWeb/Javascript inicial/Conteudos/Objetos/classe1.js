class payablePosting{
    constructor(name = "Generic", value = 0){
        this.name = name,
        this.value = value
    }
}

class financialCycle{
    constructor(month, year){
        this.month = month,
        this.year = year,
        this.payablePosting = []
    }

    addPayable(...payablePosting){
        payablePosting.forEach(p => this.payablePosting.push(p))
    }

    summary(){
        let valueAdd = 0
        this.payablePosting.forEach(p => {
            valueAdd += p.value
        })
        return valueAdd
    }
}

const salary = new payablePosting("Salary", 3500)
const energyBill = new payablePosting("Energy", -200)
const accounts = new financialCycle(12, 2021)

accounts.addPayable(salary, energyBill)
console.log(accounts.summary())