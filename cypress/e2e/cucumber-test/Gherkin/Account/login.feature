Feature: Login

    Background: Ir a la pagina de Contract
        Given usuario visita la pagina de Contract

    Scenario Outline: TC1 Verificar Login con usuario registrado
        When Se ingresa username como '<username>' y password como '<password>' y se hacer click en Iniciar sesion
        Then Se visualizara la pagina de proyectos
        Examples:
            | username                   | password  |
            | antoniogasalla@yopmail.com | Ag123456@ |

    Scenario Outline: TC2 Verificar no poder iniciar sesion con usuario invalido
        When Ingresar username como '<username>' y password como '<password>' y se hacer click en Iniciar sesion
        Then Se visualizá el mensaje de error : '<errorMsj>'
        Examples:
            | username          | password    | errorMsj                       |
            | mail@invalido.com | 12344       | Email y/o contraseña inválidos |
            | mail@outlook.com  |             | Ingrese contraseña             |
            | @gmail.           | p@ss1234    | Formato email inválido         |
            |                   | cont34324/& | Por favor, ingrese su email    |



