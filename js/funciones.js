function valida_correo(correo) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)){

		return (true)
	} else {

		return (false);
	}
}

function limpiar_logueo()
{
	document.loginAdmin.reset();
	document.loginAdmin.userid.focus();
}
function validar_logueo()
{
	var form=document.loginAdmin;
	if (form.userid.value==0)
	{
		alert("Ingrese su Login");
		form.userid.value="";
		form.userid.focus();
		return false;
	}
	if (form.password.value==0)
	{
		alert("Ingrese su Password");
		form.password.value="";
		form.password.focus();
		return false;
	}
	
	form.password.value=calcMD5(form.password.value);
	form.submit();
	
}

function validateLoginOwner()
{
	var form = document.loginFormOwner;
	var email = form.loginOwner.value; 
	var password = form.passwordOwner.value;

	if (email == 0)
	{
		alert("Ingrese su Login");
		email = "";
		form.loginOwner.focus();
		return false;
	}
	if (password == 0)
	{
		alert("Ingrese su Password");
		password = "";
		form.passwordOwner.focus();
		return false;
	}
	
	form.passwordOwner.value = calcMD5(form.passwordOwner.value);
	form.submit();
	
}

function validarComentarios()
{
	var form = document.formComments;

	if (form.nom.value==0)
	{
		alert("Ingrese su nombre");
		form.nom.value="";
		form.nom.focus();
		return false;
	}
	if (form.email.value==0)
	{
		alert("Ingrese su e-mail");
		form.email.value="";
		form.email.focus();
		return false;
	}
	if (form.message.value==0)
	{
		alert("Ingrese su mensaje");
		form.message.value="";
		form.message.focus();
		return false;
	}
	form.redirecc.value=location.href;
	form.submit();
}