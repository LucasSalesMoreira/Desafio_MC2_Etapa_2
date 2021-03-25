
// simple -> [{"codigo_disciplina":"1","nome_disciplina":"POO","nome_professor":"Lucas Sales","numero_estudantes":"3"}]

var simpleVisualization = [];
var idTrSimple;

function setSimpleVisualization() {
    const tbody = document.getElementById("my_tbody");

    for (var i = 0; i < simpleVisualization.length; i++) {
        const tr = document.createElement("tr");

        console.log(i);
        tr.id = ""+parseInt(i + 1);

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
    type: "GET",
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
            alert("Sem dados para exibir!");
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
        tr.id = ""+parseInt(i + 1);

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

$.ajax({
    type: "GET",
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
            alert("Sem dados para exibir!");
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
        tr.id = ""+parseInt(i + 1);

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

    document.getElementById("btUpdateDisc").addEventListener("click", () => {
        if (idTrDisc === undefined)
            alert("Selecione uma disciplina para editar seu nome!");
        else {
            // ajax para modifcar o nome da disciplina...
        }
    });

    document.getElementById("btAddDisc").addEventListener("click", () => {
        // ajax para Add uma nova disciplina...
    });

    document.getElementById("btDeleteDisc").addEventListener("click", () => {
        if (idTrDisc === undefined)
            alert("Selecione uma disciplina para DELETAR!");
        else {
            // ajax para deletar a disciplina...
        }
    });
}

$.ajax({
    type: "GET",
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
            alert("Sem dados para exibir!");
        }
    }
});







document.getElementById("btExit").addEventListener("click", () => {
    // Sair da conta...

    $.ajax({
        type: "GET",
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