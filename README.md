# ServicioCognitivo_TranslateEdu

**TranslatorText** es un servicio cognitivo que permite traducir texto y almacenar traducciones en una base de datos. Está implementado con Spring Boot y utiliza R2DBC para la conexión con PostgreSQL. Este documento proporciona una visión general del proyecto, incluyendo la configuración inicial, la estructura del proyecto y cómo utilizar las APIs proporcionadas.

## Índice

- [Introducción](#introducción)
- [Requisitos](#requisitos)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso de la API](#uso-de-la-api)
  - [Traducir Texto](#traducir-texto)
  - [Obtener Todas las Traducciones](#obtener-todas-las-traducciones)
  - [Editar Traducción](#editar-traducción)
  - [Eliminar Traducción](#eliminar-traducción)
  - [Obtener Traducciones Activas](#obtener-traducciones-activas)
  - [Obtener Traducciones Inactivas](#obtener-traducciones-inactivas)
  - [Obtener Traducción por ID](#obtener-traducción-por-id)
  - [Activar Traducción](#activar-traducción)
  - [Probar Conexión a la Base de Datos](#probar-conexión-a-la-base-de-datos)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Introducción

**TranslatorText** es una aplicación que traduce texto de un idioma a otro y almacena las traducciones en una base de datos PostgreSQL. Utiliza Spring Boot para el backend y R2DBC para la comunicación reactiva con la base de datos.

## Requisitos

- Java 17
- PostgreSQL
- Spring Boot
- R2DBC
- Postman (para probar las APIs)

## Configuración del Proyecto

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/translator-text.git
   cd translator-text
2. **Configura el archivo application.properties:**

Configura el archivo application.properties:

Asegúrate de que tu archivo src/main/resources/application.properties esté configurado correctamente:

spring.application.name=TranslatorText
spring.r2dbc.url=r2dbc:pool:postgresql://aws-0-us-west-1.pooler.supabase.com:6543/postgres
spring.r2dbc.username=postgres.saneziadygzklbkikvrl
spring.r2dbc.password=Desierto2024v
Compila y ejecuta la aplicación:


./mvnw clean package
./mvnw spring-boot:run

## Accede a la aplicación:

## La aplicación estará disponible en http://localhost:8080.

## Estructura del Proyecto
- src/main/java/pe/edu/vallegrande/TranslatorText/: Contiene el código fuente del proyecto.
- rest/TranslatorTextRest.java: Controlador REST que maneja las solicitudes HTTP.
- model/TranslateRequestBody.java: Clase de modelo para el cuerpo de la solicitud de traducción.
- model/Translation.java: Entidad JPA que representa una traducción.
- repository/TranslationTextRepository.java: Repositorio para operaciones CRUD en la base de datos.
- service/TranslatorTextService.java: Servicio que maneja la lógica de negocio de traducción.
- src/main/resources/application.properties: Configuración de la aplicación, incluyendo detalles de la base de datos.

## Uso de La API

**A continuación se detallan los endpoints disponibles en la API:**
**Traducir Texto**
Método: POST
URL: http://localhost:8080/translate
**Cuerpo de la Solicitud:**
```bash
{
  "text": "Texto a traducir",
  "from": "idioma_origen",
  "to": "idioma_destino"
}

**Obtener Todas las Traducciones**
Método: GET
URL: http://localhost:8080/translate/all
Editar Traducción
Método: PUT
URL: http://localhost:8080/translate/edit/{id}


**Cuerpo de la Solicitud:**

```bash
  {
    "request_text": "Texto actualizado",
    "from_lang": "nuevo_idioma_origen",
    "to_lang": "nuevo_idioma_destino"
  }
  Nota: Reemplaza {id} con el ID de la traducción a editar.

**Eliminar Traducción**
Método: DELETE
URL: http://localhost:8080/translate/delete/{id}
Nota: Reemplaza {id} con el ID de la traducción a eliminar.



**Obtener Traducciones Activas**
Método: GET
URL: http://localhost:8080/translate/actives


**Obtener Traducciones Inactivas**
Método: GET
URL: http://localhost:8080/translate/inactives


**Obtener Traducción por ID**
Método: GET
URL: http://localhost:8080/translate/{id}
Nota: Reemplaza {id} con el ID de la traducción a obtener.


**Activar Traducción**
Método: PUT
URL: http://localhost:8080/translate/activate/{id}
Nota: Reemplaza {id} con el ID de la traducción a activar.


**Probar Conexión a la Base de Datos**
Método: GET
URL: http://localhost:8080/translate/ping


**Contribuciones**
**Si deseas contribuir a este proyecto, por favor sigue estos pasos:**



**Fork el repositorio.**



**Crea una rama nueva:**
```bash	
  git checkout -b feature/nueva-funcionalidad
  Realiza tus cambios y haz commit:



```bash	
  git commit -am 'Añadir nueva funcionalidad'
  Push a la rama:



```bash	
  git push origin feature/nueva-funcionalidad
  Crea una nueva Pull Request en GitHub.
