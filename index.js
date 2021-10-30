window.onload = () => {
    let p = document.querySelector("#excuse")
    //Excuses lists:
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let quien = Math.floor(Math.random() * who.length)
    
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let accion = Math.floor(Math.random() * action.length)
    
    let what = ['my homework', 'the keys', 'the car'];
    let que = Math.floor(Math.random() * what.length)
    
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
    let cuando = Math.floor(Math.random() * when.length)

    p.innerHTML = `${who[quien]} ` + `${action[accion]} ` + `${what[que]} ` + `${when[cuando]} `
}