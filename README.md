# TDD --> Test Driven Developping

## Testing con Javascript

### Qué es el testing

Buena práctica de los desarroladores para dotar de robustez y solidz al código.
Es un cuestión cultural.

#### Objetivos

- Encontrar **bugs**.
- Permite tener **más confianza en el código**.
- Nos permite **decidier si es adecuado subir ciertas funcionalidades a producción**. Nos da capacidad decisoria de cuando _no_ subir el código.
- **Evitar la aparición de defectos en la aplicación**. Te acostumbras a escribir código de una manera más limpia, ordenada y con una mayor calidad.

#### Relación con PM (project management)

- El **testing** es una pieza relevante en cualquier tipología de gestión de proyecto. En una cadena de proudcción, sea cual sea, siempre puede/debe introducir la fase de testing.
- Ejemplos de la relación entre el testing y tipos básicos de gestión de proyectos:
  - Waterfall (cascada)
  - Agile
  - DevOps

##### Agile

- Es un framework con métodos iteratios, permite introducir el testing como herramienta fundamental en los ciclos de producción.
- Conseguimos desarrollar de forma más eficiente. Al mejorar (proceso incremental), si se rompe algo, lo vemos al momento.
- Tiene una estrecha relación con el TDD.

##### DevOps

- Es un elemento imprescindible en el loop infinito de producción.
- Como el valor añadido de DevOps pasa por la automatizació de procesos, es obligatorio contar con elementos de testing.

### Tipos de testing

#### The practical test pyramid

https://martinfowler.com/articles/practical-test-pyramid.html

#### Test externos

- Son test realizados por herramientas externas.
- Estas herramientas no pueden acceder al código de nuestra aplicación, por lo que son test que comprueban la experiencia de usuario y el correcto funcionamiento de nuestra web desde una parte visual. Se dividen en :
  - Manuales: Se siguen una serie de pasos y se comprueba la funcionalidad.
  - Automáticas: Grabamos una unteracción con nuestra app y podemos especificar cada cuanto tiempo queremos que se vuelva a realizar esta comprobación.
- Ejemplo: https://pingdom.com/

#### Test funcionales

- A diferencia de los test externos, estos se basan en la parte funcional de nuestra aplicación, por lo tanto, testeamos nuestro código.
- Tipos:
  - Unitarios
    - Son los más usados (jest, mocha, jasmine...)
    - Consiste en comprobar cada pequeña porción de código de nuestra app por separado para asegurarnos de su correcto funcionamiento.
    - **Cometido único**: Estos testno deben comprobar varias cosas a la vez. cada test debe centrarse en algo muy específico y debemos escribir un test por cada funcionalidad que queramos testear.
    - **Múltiles casos**: Puede que sea pequeña parte de código que estemos testeando, funcione diferente dependientdo de los parámetros que reciba, por ello debemos comprobar de manera individual cada uno de esos posibles casos para certifcar el correcto funcionamiento de esa parte del código.
  - Integración
    - Son pruebas en las que se comprueba el funcionamiento entero de nuestra aplicación.
    - Con unit testing testeamos cada una de las piezas. Ahora nos centramos en unir **dos o más** de esas piezas y comprobar que funcionan todas en conjunto.
    - Es muy frecuente que aunque algo no funcione individualmente de la forma esperada, a la hora de integrarlo con el resto de nuestra aplicación, esa función deje de funcionar por una razón externa a sí misma.  
      En el caso de back-end, consistiría en realizar peticiones http a nuestra api y comprobar que responde de manera correcta con todos los parámetros que debería devolver.
  - Aceptación
    - Sirven para verificar que un sistema cumple con los requerimientos de negocio definidos (ejemplo: un listado tarda demasiado en cargar)
    - Suelen realizarse luego de las pruebas uitarias o de integración, para evitar que se avance mucho con el proceso de prueba, y determinar a tiempo si se necesitan cambios significativos.
    - Los test de aceptación suelen ser definidos y ejecutados por usuarios externos.
  - Regresión
    - Los test de regresión se realizan cuando hemos introducidos cambios en nuestra app y, consisten en comprobar que partes de nuestra app, que no han sido tocadas en esos cambios que hemos introducido, siguen funcionando correctamente después de haber introducido esas modificaciones.  
      Sirven para verficar que el código sigue funcionando para versiones antiguas de software.
  - test e2e (end to end... punto origen a punto final)
    - Son test que replican comportamientos de usuario.
    - Se conocen también como pruebas de alto nivel.
    - Tienen por objetivo verificar que el sistema responde de forma correcta a los comportamientos del usuario (ej: login de un usuario, añadir items al carito de la compra, pasarelas de pago, etc...)
    - Son costosas de producir y de mantener. Se recomienda tener pocas en general.

#### Test no funcionales

- Son test que no tienen...

- Test de seguridad:
  - El objetivo es encontrar la posibles vulnerabilidades qeu puedan tener nuestr app:
    - Paquetes y dependencias
    - Sistemas de encriptado
- Test de rendimiento:
  - Comprueban la performance de nuestro código:
    - TTF (time to first byte)
    - Cálculo de costes de operación
- Test de usabilidad
- Test de accesibilidad:
  - Se testea si se renderizan bien todos los elementos de una forma visual, además de comprobar si la aplicación tiene alternativas en sus funcionalidades para que puedan ser usadas por personas con algún tipo de discapacidad.

### Herramientas para escribir y ejecutar test

Podemos distinguir dos tipos: imprescindibles y frameworks de testing (o herramientas técnicas)

- Imprescindibles
  - Conocer el lenguaje de programación que se va a testear.
  - Conocer el código que se va a testear.
- Software
  - Test unitario
  - Test funcionales
  - Test e2e

Unit testing:

- Jasmine
- **Jest**
- Mocha
- Chai  
  Integración:
- **Supertest**  
  e2e:
- Selenium
- **Puppeteer**
- Protractor (usado por defecto en Angular)

#### JASMINE

Es un framework que se basa en el comportamiento del código JavaScript dentro de un app.

- No depende de ningún otro marco de JavaScript
- No requeire un DOM
- Sintaxis clara y obvia

#### JEST

- Desarrollado por facebook.
- Nació como framework de testing para el entorno React
- Convertido en un framework de testing genealista
- Establecido como estándar para el testing en la comunidad javascript
- Primera versión 14/05/2014  
  Destaca por :
- Sintaxis clara
- Contextos únicos
- Tests descriptivos
- Ejecución de los tests asíncrona

#### MOCHA

- Framwork para NodeJs como para navegador
- Dura competencia de Jest
- Primera versión 22/11/2011
- Ejecuta los tests en serie. Hasta que no finaliza uno, no pasa al siguiente. Facilita la detección de fallos.
- Punto fuerte: posibilidad de ejecutar acciones asíncronas en los test y poder comprobar su resultado.
- Permite usar cualquier dependencia para la comprobación de los test, por ejemplo assert.

#### CHAI

- Framwork de testing tanto para NodeJS como para navegador
- Muy parecido a mocha
- Expande su librería de testing.

instalar control sintáctico de jest
npm i -D @types/jest
