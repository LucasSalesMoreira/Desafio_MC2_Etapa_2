$("#btSubmitLogin").click(() => {

    const email = document.getElementById("floatingInput").value;
    const pass = document.getElementById("floatingPassword").value;

    if (email !== "" && pass !== "") {
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                email: email,
                pass: pass,
                request_type: "login"
            },
            success: (response) => {
                console.log(`Response: ${response}`);

                const responseJSON = JSON.parse(response);

                if (responseJSON.ok === true) {
                    window.location.href = "../index.php";
                } else {
                    alert("Dados de acesso inválidos!");
                }
            }
        });
    } else {
        alert("Informe os dados de acesso!");
    }
});