function filterByDepartment(department) {
    loginVerification()
    const div = document.querySelector("#user_list");

    axios.get(`${domain}/users/departments/${department}`, header)
        .then(function(response) {

            if (response.data.length < 1) {
                alert("Nenhum usuário encontrado com nesse departamento")
            }
            let users = "";
            response.data.forEach(info => {
                users += `<tr>
                <td>${info.name}</td>
                <td>${info.role}</td>
                <td>${info.department}</td>
                <td>
                    <i class="material-icons red-text waves-effect waves-red" onclick = "userRemove(${info.id})">delete</i>
                    <a href = "#modal_update" class = "modal-trigger" onclick = "userUpdateModal(${info.id})">
                        <i class="material-icons blue-text waves-effect waves-yellow">update</i>
                    </a>
                </td>
            </tr>`
            });
            div.innerHTML = users;
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });

}