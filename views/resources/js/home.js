var simpleVisualization = [];
var detailedVisualization = [];
var idTR;

// [{"codigo_disciplina":"1","nome_disciplina":"POO","nome_professor":"Lucas Sales","numero_estudantes":"3"}]

function setSimpleVisualization() {

    const tbody = document.getElementById("my_tbody");

    for (var i = 0; i < simpleVisualization.length; i++) {
        const tr = document.createElement("tr");

        console.log(i);
        tr.id = ""+parseInt(i + 1);

        tr.addEventListener("click", () => {
            if (parseInt(tr.id) === idTR) {
                tr.style.backgroundColor = "#ffffff";
                idTR = undefined;
            } else {
                var allTrs = document.querySelectorAll("tr");

                for (var position = 0; position < allTrs.length; position++)
                    allTrs[position].style.backgroundColor = "#ffffff";

                tr.style.backgroundColor = "#7fb9b8";
                idTR = parseInt(tr.id);
                console.log(idTR);
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

function setDetailedVisualization() {

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
        } else {
            alert("Sem dados para exibir!");
        }
    }
});

document.getElementById("btSave").addEventListener("click", () => {
    if (idTR === undefined)
        alert("Selecione uma disciplina para editar seu nome!");
    else {
        // ajax para modifcar o nome da disciplina...
    }
});

