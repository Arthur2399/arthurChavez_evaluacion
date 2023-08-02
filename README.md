# Actuaria SA Prueba técnica de desarrollo Front-End
## Pasos de instalación y levantamiento del proyecto
1. Instalar todas la depencias del proyecto
```
npm install
```

2. Levantar el servicio con node
```
npm run dev
```

3. Vizualizar el proyecto en: http://localhost:3000/

## Especificaciones

1. Desarrollar una aplicación web desarrollada en React para visualizar y buscar los usuarios de
un sistema.
2. Hacer uso de la api Base URI: https://random-data-api.com/api/v2/users
3. Se requiere que se cree el diseño con las funcionalidades
respectivas.

## Implementación de funcionalidad

1. Se requiere que se traigan 30 usuarios consumidos desde la API (baseurl) en el
diseño propuesto, mostrando de cada usuario la siguiente información de
acuerdo al diseño:
-  Nombre del usuario
-  Imagen de cada usuario
-  Correo electrónico
-  Género
-  Número de teléfono
-  Fecha de nacimiento en formato (Ej: 01 de julio de 1996)
-  Información de empleo: Cargo
-  Dirección de domicilio: Ciudad, Calle (Ej: Quito, Av. Orellana)
-  Subscripción: plan

## Adicionalmente

1. Se requiere que se pueda buscar por nombre usuario su información. (Al ingresar en el
buscador un nombre de usuario, solo debe mostrar el usuario correspondiente).
2. Se requiere que se implemente paginación para visualizar máximo 6 usuarios por página


### Nota:

Se debe tener en cuenta que la aplicación cumpla con buenas prácticas (Clean Code)
Se puede hacer uso únicamente de material UI como framework de componentes prefabricados,
o no trabajar con ningún framework. Se puede hacer uso de librerías únicamente para el manejo
de fechas.

