# ✅Login| Acount Login SwagLabs for example

[US-2](https://dev.azure.com/WiSoft-Contract-Management/WiSoft-Contract-Management/_queries/edit/2/?triage=true) 

**As a** Super administrador

**I want** gestionar una empresa dando de alta, baja y modificación

**So that** que la empresa pueda empezar a utilizar el app

📃DESCRIPTION
Al dar de alta una empresa se debe crear un usuario administrador para la misma
Notificar via mail para que active la cuenta y pueda cambiar el password.

✅ACCEPTANCE CRITERIA
Endpoints: empresa-controller 
- Pantalla: Listar empresas
    - Listar empresas con sus datos: razón social, cuit, email, proyectos activos.
    - Buscador por palabra + leyenda al no encontrar
    - Botón 'crear empresa'
    - Botones: info, 'editar empresa', deshabilitar
    - Paginador
- Pantalla: Crear empresa
    - Razón social, nombre de contacto, cuit, domicilio, teléfono, tipo de suscripción(por proyectos, sin limites),e-mail, caja de observaciones. 
    - Botón 'Agregar empresa' 
    - Botón 'volver'
-Pantalla: Editar
    - Se pueden editar todos los campos de crear empresa excepto: mail
    - Botón 'volver'
    - Botón 'Guardar cambios'
-Pantalla: info
    - Figurar: fecha de alta, razón social, cuit, teléfono, mail, domicilio, nombre de contacto, tipo de suscripción, proyectos activos, observaciones.
-Botón: Deshabilitar
    - Endpoint: put /api/v1/empresas/{idEmpresa}/toggleHabilitar toggleHabilitarEmpresa
    - El campo habilitada pasa a false o true.
    - Si esta habilitada el botón a mostrar es deshabilitar
    - Si esta deshabilitada el botón a mostrar es habilitar
    - Console.log para QA: deshabilitar (objeto put linea:103) habilitar: (objeto habilitar/deshabilitar linea 136)