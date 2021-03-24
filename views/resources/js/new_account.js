$("#btSubmitLogin").click(() => {

    const email = document.getElementById("floatingInput").value;
    const pass = document.getElementById("floatingPassword").value;
    const confirmPass = document.getElementById("confirmFloatingPassword").value;

    if (email !== "" && pass !== "" && confirmPass !== "") {
        if (confirmPass === pass) {
            $.ajax({
                type: "POST",
                url: "../index.php",
                data: {
                    email: email,
                    pass: pass,
                    request_type: "new_account"
                },
                success: (response) => {
                    console.log(`Response: ${response}`);

                    const responseJSON = JSON.parse(response);

                    if (responseJSON.ok === true) {
                        window.location.href = "../views/sign_in.html";
                    } else {
                        alert("Email já cadastrado!");
                    }
                }
            });
        } else {
            alert("As senhas não são iguais!");
        }
    } else {
        alert("Informe os dados de acesso!");
    }
});