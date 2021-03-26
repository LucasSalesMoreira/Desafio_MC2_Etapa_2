// simple -> [{"codigo_disciplina":"1","nome_disciplina":"POO","nome_professor":"Lucas Sales","numero_estudantes":"3"}]

var simpleVisualization = [];
var idTrSimple;

function setSimpleVisualization() {
    const tbody = document.getElementById("my_tbody");

    for (var i = 0; i < simpleVisualization.length; i++) {
        const tr = document.createElement("tr");

        console.log(i);
        tr.id = "" + parseInt(i + 1);

        tr.addEventListener("click", () => {
            if (parseInt(tr.id) === idTrSimple) {
                tr.style.backgroundColor = "#ffffff";
                idTrSimple = undefined;
            } else {
                var allTrs = document.querySelectorAll("tr");

                for (var position = 0; position < allTrs.length; position++)
                    allTrs[position].style.backgroundColor = "#ffffff";

                tr.style.backgroundColor = "#7fb9b8";
                idTrSimple = parseInt(tr.id);
                console.log(idTrSimple);
            }
        });

        tbody.appendChild(tr);

        const tdCodeDisc = document.createElement("td");
        tr.appendChild(tdCodeDisc);
        tdCodeDisc.innerHTML = simpleVisualization[i].codigo_disciplina;

        const tdNameDisc = document.createElement("td");
        tr.appendChild(tdNameDisc);
        tdNameDisc.innerHTML = simpleVisualization[i].nome_disciplina;

        const tdNameProf = document.createElement("td");
        tr.appendChild(tdNameProf);
        tdNameProf.innerHTML = simpleVisualization[i].nome_professor;

        const tdNumEst = document.createElement("td");
        tr.appendChild(tdNumEst);
        tdNumEst.innerHTML = simpleVisualization[i].numero_estudantes;
    }
}

$.ajax({
    type: "POST",
    url: "../index.php",
    data: {
        request_type: "home_load_simple",
        codeDisc: 1 // codigo 1 para testes.
    },
    success: (response) => {

        const responseJSON = JSON.parse(response);

        if (responseJSON.ok === true) {
            console.log(`ok: ${responseJSON.ok}`);
            console.log(`data_array: ${responseJSON.data_array}`);
            simpleVisualization = JSON.parse(responseJSON.data_array);
            setSimpleVisualization();
        } else {
            //alert("Sem dados para exibir!");
        }
    }
});


// detailed -> [{"codigo_disciplina":"1","nome_disciplina":"POO","nome_professor":"Lucas Sales","codigo_estudante":"1","nome_estudante":"Luiz Nelson"}]

var detailedVisualization = [];
var idTrDetailed;

function setDetailedVisualization() {
    const tbody = document.getElementById("my_tbody_detailed");

    for (var i = 0; i < detailedVisualization.length; i++) {
        const tr = document.createElement("tr");

        console.log(i);
        tr.id = "" + parseInt(i + 1);

        tr.addEventListener("click", () => {
            if (parseInt(tr.id) === idTrDetailed) {
                tr.style.backgroundColor = "#ffffff";
                idTrDetailed = undefined;
            } else {
                var allTrs = document.querySelectorAll("tr");

                for (var position = 0; position < allTrs.length; position++)
                    allTrs[position].style.backgroundColor = "#ffffff";

                tr.style.backgroundColor = "#7fb9b8";
                idTrDetailed = parseInt(tr.id);
                console.log(idTrDetailed);
            }
        });

        tbody.appendChild(tr);

        const tdCodeDisc = document.createElement("td");
        tr.appendChild(tdCodeDisc);
        tdCodeDisc.innerHTML = detailedVisualization[i].codigo_disciplina;

        const tdNameDisc = document.createElement("td");
        tr.appendChild(tdNameDisc);
        tdNameDisc.innerHTML = detailedVisualization[i].nome_disciplina;

        const tdNameProf = document.createElement("td");
        tr.appendChild(tdNameProf);
        tdNameProf.innerHTML = detailedVisualization[i].nome_professor;

        const tdCodeEst = document.createElement("td");
        tr.appendChild(tdCodeEst);
        tdCodeEst.innerHTML = detailedVisualization[i].codigo_estudante;

        const tdNameEst = document.createElement("td");
        tr.appendChild(tdNameEst);
        tdNameEst.innerHTML = detailedVisualization[i].nome_estudante;
    }
}

document.getElementById("btAddInscr").addEventListener("click", () => {
    // ajax para Add uma nova disciplina...
    var codeDisc = document.getElementById("cod_inscr_disc").value;
    var codeEst = document.getElementById("cod_inscr_est").value;
    if (codeDisc !== "" && codeEst !== "") {
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                request_type: "home_new_inscr",
                codeDisc: codeDisc,
                codeEst: codeEst
            },
            success: (response) => {
                console.log(response);
                const responseJSON = JSON.parse(response);
                if (responseJSON.ok)
                    window.location.reload();
                else
                    alert("Ops! Você deve ter inoformado um código inválido!")
            }
        });
    } else {
        alert("Os dados não podem ser nulos!");
    }
});

$.ajax({
    type: "POST",
    url: "../index.php",
    data: {
        request_type: "home_load_detailed",
        codeDisc: 1 // codigo 1 para testes.
    },
    success: (response) => {

        const responseJSON = JSON.parse(response);

        if (responseJSON.ok === true) {
            console.log(`ok: ${responseJSON.ok}`);
            console.log(`data_array: ${responseJSON.data_array}`);
            detailedVisualization = JSON.parse(responseJSON.data_array);
            setDetailedVisualization();
        } else {
            //alert("Sem dados para exibir!");
        }
    }
});


var discVisualization = [];
var idTrDisc;

function setDiscVisualization() {
    const tbody = document.getElementById("my_tbody_disc");

    for (var i = 0; i < discVisualization.length; i++) {
        const tr = document.createElement("tr");

        console.log(i);
        tr.id = "" + parseInt(i + 1);

        tr.addEventListener("click", () => {
            if (parseInt(tr.id) === idTrDisc) {
                tr.style.backgroundColor = "#ffffff";
                idTrDisc = undefined;
            } else {
                var allTrs = document.querySelectorAll("tr");

                for (var position = 0; position < allTrs.length; position++)
                    allTrs[position].style.backgroundColor = "#ffffff";

                tr.style.backgroundColor = "#7fb9b8";
                idTrDisc = parseInt(tr.id);
                console.log(idTrDisc);
            }
        });

        tbody.appendChild(tr);

        const tdCodeDisc = document.createElement("td");
        tr.appendChild(tdCodeDisc);
        tdCodeDisc.innerHTML = discVisualization[i].codigo;

        const tdNameDisc = document.createElement("td");
        tr.appendChild(tdNameDisc);
        tdNameDisc.innerHTML = discVisualization[i].nome;

        const tdCodeProf = document.createElement("td");
        tr.appendChild(tdCodeProf);
        tdCodeProf.innerHTML = discVisualization[i].cod_professor;
    }
}

document.getElementById("btUpdateDisc").addEventListener("click", () => {
    if (idTrDisc === undefined)
        alert("Selecione uma disciplina para editar seu nome!");
    else {
        // ajax para modifcar o nome da disciplina...
        var newName = document.getElementById("name_disc").value;
        var codeProfDisc = document.getElementById("code_prof_disc").value;
        if (newName !== "" && codeProfDisc !== "") {
            $.ajax({
                type: "POST",
                url: "../index.php",
                data: {
                    request_type: "home_update_disc",
                    codeDisc: discVisualization[idTrDisc - 1].codigo,
                    newName: newName,
                    codeProfDisc: codeProfDisc
                },
                success: (response) => {
                    console.log(response);
                    if (JSON.parse(response).ok) {
                        window.location.reload();
                    } else {
                        alert("Ops! algo deu  errado...")
                    }
                }
            });
        } else {
            alert("Os dados não podem ser nulos!");
        }
    }
});

document.getElementById("btAddDisc").addEventListener("click", () => {
    // ajax para Add uma nova disciplina...
    var newName = document.getElementById("name_disc").value;
    var codeProfDisc = document.getElementById("code_prof_disc").value;
    if (newName !== "" && codeProfDisc !== "") {
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                request_type: "home_new_disc",
                name: newName,
                codeProfDisc: codeProfDisc
            },
            success: (response) => {
                console.log(response);
                const responseJSON = JSON.parse(response);
                if (responseJSON.ok)
                    window.location.reload();
                else
                    alert("Ops! Você deve ter inoformado um código inválido!")
            }
        });
    } else {
        alert("É preciso informa um nome e código de professor válido!");
    }
});

document.getElementById("btDeleteDisc").addEventListener("click", () => {
    if (idTrDisc === undefined)
        alert("Selecione uma disciplina para DELETAR!");
    else {
        // ajax para deletar a disciplina...
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                request_type: "home_delete_disc",
                codeDisc: discVisualization[idTrDisc - 1].codigo
            },
            success: (response) => {
                console.log(response);
                if (JSON.parse(response).ok) {
                    window.location.reload();
                } else {
                    alert("Ops! algo deu  errado...")
                }
            }
        });
    }
});

$.ajax({
    type: "POST",
    url: "../index.php",
    data: {
        request_type: "home_load_disc",
    },
    success: (response) => {

        const responseJSON = JSON.parse(response);

        if (responseJSON.ok === true) {
            console.log(`ok: ${responseJSON.ok}`);
            console.log(`data_array: ${responseJSON.data_array}`);
            discVisualization = JSON.parse(responseJSON.data_array);
            setDiscVisualization();
        } else {
            //alert("Sem dados para exibir!");
        }
    }
});

var profVisualization = [];
var idTrProf;

function setProfVisualization() {
    const tbody = document.getElementById("my_tbody_prof");

    for (var i = 0; i < profVisualization.length; i++) {
        const tr = document.createElement("tr");

        console.log(i);
        tr.id = "" + parseInt(i + 1);

        tr.addEventListener("click", () => {
            if (parseInt(tr.id) === idTrProf) {
                tr.style.backgroundColor = "#ffffff";
                idTrProf = undefined;
            } else {
                var allTrs = document.querySelectorAll("tr");

                for (var position = 0; position < allTrs.length; position++)
                    allTrs[position].style.backgroundColor = "#ffffff";

                tr.style.backgroundColor = "#7fb9b8";
                idTrProf = parseInt(tr.id);
                console.log(idTrProf);
            }
        });

        tbody.appendChild(tr);

        const tdCodeProf = document.createElement("td");
        tr.appendChild(tdCodeProf);
        tdCodeProf.innerHTML = profVisualization[i].codigo;

        const tdNameProf = document.createElement("td");
        tr.appendChild(tdNameProf);
        tdNameProf.innerHTML = profVisualization[i].nome;

        const tdCpfProf = document.createElement("td");
        tr.appendChild(tdCpfProf);
        tdCpfProf.innerHTML = profVisualization[i].CPF;

        const tdDateProf = document.createElement("td");
        tr.appendChild(tdDateProf);
        tdDateProf.innerHTML = profVisualization[i].data_nascimento;
    }
}


document.getElementById("btUpdateProf").addEventListener("click", () => {
    if (idTrProf === undefined)
        alert("Selecione um professor para editar!");
    else {
        // ajax para modifcar o professor...
        var newName = document.getElementById("name_prof").value;
        var newCPF = document.getElementById("cpf_prof").value;
        var date = document.getElementById("date_prof").value;

        if (newName !== "" && newCPF !== "" && date !== "") {
            $.ajax({
                type: "POST",
                url: "../index.php",
                data: {
                    request_type: "home_update_prof",
                    codeProf: profVisualization[idTrProf - 1].codigo,
                    newName: newName,
                    newCPF: newCPF,
                    date: date
                },
                success: (response) => {
                    console.log(response);
                    if (JSON.parse(response).ok) {
                        window.location.reload();
                    } else {
                        alert("Ops! algo deu  errado...")
                    }
                }
            });
        } else {
            alert("Os dados não podem ser nulos!");
        }
    }
});

document.getElementById("btAddProf").addEventListener("click", () => {
    // ajax para Add um professor...
    var newName = document.getElementById("name_prof").value;
    var newCPF = document.getElementById("cpf_prof").value;
    var date = document.getElementById("date_prof").value;
    if (newName !== "" && newCPF !== "" && date !== "") {
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                request_type: "home_add_prof",
                newName: newName,
                newCPF: newCPF,
                date: date
            },
            success: (response) => {
                console.log(response);
                const responseJSON = JSON.parse(response);
                if (responseJSON.ok)
                    window.location.reload();
                else
                    alert("Ops! Você deve ter inoformado um CPF inválido!")
            }
        });
    } else {
        alert("Os dados não podem ser nulos!");
    }
});

document.getElementById("btDeleteProf").addEventListener("click", () => {
    if (idTrProf === undefined)
        alert("Selecione uma disciplina para DELETAR!");
    else {
        // ajax para deletar um professor...
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                request_type: "home_delete_prof",
                codeProf: profVisualization[idTrProf - 1].codigo
            },
            success: (response) => {
                console.log(response);
                const responseJSON = JSON.parse(response);
                if (responseJSON.ok)
                    window.location.reload();
                else
                    alert("Ops! Você deve ter inoformado um CPF inválido!")
            }
        });
    }
});

$.ajax({
    type: "POST",
    url: "../index.php",
    data: {
        request_type: "home_load_prof",
    },
    success: (response) => {

        const responseJSON = JSON.parse(response);

        if (responseJSON.ok === true) {
            console.log(`ok: ${responseJSON.ok}`);
            console.log(`data_array: ${responseJSON.data_array}`);
            profVisualization = JSON.parse(responseJSON.data_array);
            setProfVisualization();
        } else {
            //alert("Sem dados para exibir!");
        }
    }
});

var estVisualization = [];
var idTrEst;

function setEstVisualization() {
    const tbody = document.getElementById("my_tbody_est");

    for (var i = 0; i < estVisualization.length; i++) {
        const tr = document.createElement("tr");

        console.log(i);
        tr.id = "" + parseInt(i + 1);

        tr.addEventListener("click", () => {
            if (parseInt(tr.id) === idTrEst) {
                tr.style.backgroundColor = "#ffffff";
                idTrEst = undefined;
            } else {
                var allTrs = document.querySelectorAll("tr");

                for (var position = 0; position < allTrs.length; position++)
                    allTrs[position].style.backgroundColor = "#ffffff";

                tr.style.backgroundColor = "#7fb9b8";
                idTrEst = parseInt(tr.id);
                console.log(idTrEst);
            }
        });

        tbody.appendChild(tr);

        const tdCodeEst = document.createElement("td");
        tr.appendChild(tdCodeEst);
        tdCodeEst.innerHTML = estVisualization[i].codigo;

        const tdNameEst = document.createElement("td");
        tr.appendChild(tdNameEst);
        tdNameEst.innerHTML = estVisualization[i].nome;

        const tdCpfEst = document.createElement("td");
        tr.appendChild(tdCpfEst);
        tdCpfEst.innerHTML = estVisualization[i].CPF;

        const tdDateEst = document.createElement("td");
        tr.appendChild(tdDateEst);
        tdDateEst.innerHTML = estVisualization[i].data_nascimento;
    }
}
document.getElementById("btUpdateEst").addEventListener("click", () => {
    if (idTrEst === undefined)
        alert("Selecione um Estudante para editar!");
    else {
        // ajax para modifcar o professor...
        var newName = document.getElementById("name_est").value;
        var newCPF = document.getElementById("cpf_est").value;
        var date = document.getElementById("date_est").value;

        if (newName !== "" && newCPF !== "" && date !== "") {
            $.ajax({
                type: "POST",
                url: "../index.php",
                data: {
                    request_type: "home_update_est",
                    codeEst: estVisualization[idTrEst - 1].codigo,
                    newName: newName,
                    newCPF: newCPF,
                    date: date
                },
                success: (response) => {
                    console.log(response);
                    if (JSON.parse(response).ok) {
                        window.location.reload();
                    } else {
                        alert("Ops! algo deu  errado...")
                    }
                }
            });
        } else {
            alert("Os dados não podem ser nulos!");
        }
    }
});

document.getElementById("btAddEst").addEventListener("click", () => {
    // ajax para Add um professor...
    var newName = document.getElementById("name_est").value;
    var newCPF = document.getElementById("cpf_est").value;
    var date = document.getElementById("date_est").value;

    if (newName !== "" && newCPF !== "" && date !== "") {
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                request_type: "home_add_est",
                newName: newName,
                newCPF: newCPF,
                date: date
            },
            success: (response) => {
                console.log(response);
                if (JSON.parse(response).ok) {
                    window.location.reload();
                } else {
                    alert("Ops! algo deu  errado...")
                }
            }
        });
    } else {
        alert("Os dados não podem ser nulos!");
    }
});

document.getElementById("btDeleteEst").addEventListener("click", () => {
    if (idTrEst === undefined)
        alert("Selecione um estudante para DELETAR!");
    else {
        // ajax para deletar um estudante...
        $.ajax({
            type: "POST",
            url: "../index.php",
            data: {
                request_type: "home_delete_est",
                codeEst: estVisualization[idTrEst - 1].codigo
            },
            success: (response) => {
                console.log(response);
                if (JSON.parse(response).ok) {
                    window.location.reload();
                } else {
                    alert("Ops! algo deu  errado...")
                }
            }
        });
    }
});

$.ajax({
    type: "POST",
    url: "../index.php",
    data: {
        request_type: "home_load_est",
    },
    success: (response) => {

        const responseJSON = JSON.parse(response);

        if (responseJSON.ok === true) {
            console.log(`ok: ${responseJSON.ok}`);
            console.log(`data_array: ${responseJSON.data_array}`);
            estVisualization = JSON.parse(responseJSON.data_array);
            setEstVisualization();
        } else {
            //alert("Sem dados para exibir!");
        }
    }
});

document.getElementById("btExit").addEventListener("click", () => {
    // Sair da conta...

    $.ajax({
        type: "POST",
        url: "../index.php",
        data: {
            request_type: "log_off",
        },
        success: (response) => {
            const responseJSON = JSON.parse(response);
            if (responseJSON.ok === true) {
                window.location.href = "../index.php";
            }
        }
    });
});