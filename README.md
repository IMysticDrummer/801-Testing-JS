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

npx jest --init --> genera el archivo de configuración
instalar control sintáctico de jest en visual studio
npm i -D @types/jest

jest --watchAll --> vigilancia en vivo, mientras grabamos

## Testing como Pro

### Tunning test

Jest muchas posibilidades de comparación (**matchers**), pero a veces sería necesario expandir las capacidades. Esto se consigue tocando la configuración.
Ejemplos:

- axios-mock-adapter
- jest-extended

#### Hooks

Podemos customizar acciones que se realicen a cada test, antes o después y por cada test suite también. Son:

- beforeAll
- beforeEach
- afterAll
- afterEach  
  Ejemplo de uso sería eliminar todas las inserciones de una base de datos _después_ de haber echo un test de inserción

#### Manejo de excepciones

Jest nos permite evaluar los tests cuyas funciones o métodos que estamos evaluando lanzan excepciones.  
La particularidad es qeu no lo que le vamos a pasar a expect() será un callback y no un valor calculado.

#### Testear promesas

Deberemos comprobar que nuestro código funciona (pasa los tests) correctamente usando esos recurso de terceros.  
**No debemos testear los recursos en sí**  
Soluciones de Jest:

- Ivocar aquellas funciones que contengan promesas y, una vez se resuelve, testear su correcta manipulación, transformación, etc.
- Utilizar los métodos `.resolves` y `.rejects` para evaluar cuando la promise resuelve o rechaza, respectivamente.

#### Mocks

- Son objetos que imitan el comportamiento de objetos reales de una forma controlada.
- Se usan para probar otros objetos en test unitarios que esperan ciertas respuestas de alguna libería, base de datos o de una clase y esas respuestas no son necesarioas para la ejecución de nuestra prueba.
- Ejemplos:

  - Devolver regitros de una DB
  - Insertar elementos en una DB
  - Llamadas a apis de terceros que consumen por llamada
  - Imitar registros de actividad en un log

- Cada framework de test implementa sus mocks de una forma. En jest podemos crear mocks de cualquier cosa.
- Podemos crear un mock de una clase, una dependencia externa que se encuentre en el node_modules, etc...
- ...
- Gracias a los mocks podemos tener métricas de :

  - Las veces que se llama una fucnión
  - Los párametros con los que se ha llamado a dicha función
  - El output que haya generado la llamada al mock  
    Tambièn podemos modificar el comportamiento.

- En jest usaremos:
  - .mock: para cargar nuestros propios mocks.
  - .fn: para generar funciones mock desde 0
  - .spyOn: para generar también funciones mock de una función ya existente

#### Coverage

- Análisis cuantitativa de la calidad de nuestras pruebas unitarias
- Gracias a esto se pueden sacar varias conclusiones:
  - Podemos necesitar más tests
  - Hay código en la app que, actualmente, no se usa y por lo tanto se puede eliminar ...
- Está integrado con el flag _--coverage_, que nos devuelve una tabla en terminal dónde se especifica el porcentaje de código testeado.
- En Mocha, tenemos una librería externa llamada Istanbul
