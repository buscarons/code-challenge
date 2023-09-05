const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(formulario);

    const value = Object.fromEntries(data.entries());

    console.log(value);

    const valueJSON = JSON.stringify(value);

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: valueJSON,
        })

        console.log(res);

        const resData = await res.json();
        
        console.log(resData);

    } catch (err) {
        console.log(err.message);
    }
});