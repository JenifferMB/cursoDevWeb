//function factory - cache

module.exports = () => {
    return {
        value: 2222,
        inc(){
        this.value++
        }
    }
}