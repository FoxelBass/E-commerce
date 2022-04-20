function login(){

    if (document.form.password.value=='contraseña' && document.form.login.value=='usuario'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 