let input = document.querySelector("#codeP");


input.addEventListener('input', function () {


    if (this.value.length == 5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&type=commune-actuelle&fields=nom,code,codesPostaux&format=json&geometry=centre`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let list = "<ul>";
                for (let ville of data) {
                    list += `<li>${ville.nom}</li>`
                }
                list += '</ul>';
                document.querySelector(".ville").innerHTML = list
            });
    }
});

