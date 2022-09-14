const a = () => {
    let d = () => {
        console.log('hello 1')
    }
    const b = () => {
        d = () => {
            console.log('hello 2')
        }
        d()
    }

    const c = (e) => {
        d()
        // b()
        d()
        e()
    }
    c(d)
}
a()