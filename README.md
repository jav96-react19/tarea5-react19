# Tarea 5 React 19

- Creación de componente funcional llamado <b>Greetings / Button / Mounted</b>.
- Componente estilado utilizando el framework de <b>Tailwind CSS</b>.

- Componente **MultiFrameworkButtons**:
  - Renderiza botones que cambian el estado del logo según el framework seleccionado 
  
- Directorio de **custom hooks**:
  - **buttonClick** --> Define la referencia y el estado del botón.
  - **handleLogo** --> Define el estado que modificará el logo enviandole un string como parametro
  
- Directorio **models**:
  - **Logos.jsx** --> contiene el modelo de datos en formato JSON para cada logo.

- Directorio **utils**:

  - **ButtonDetails** --> contiene las funciones del botón de **¡Clicame!**:
     - **handleButtonClick**  --> Modifica el estado del botón de true a false y hace el recuento de veces que se ha clicado.
     - **handleButtonText** --> Modifica el texto del botón a partir de la referencia con **useRef** cuando el usuario se pone encima y sale
     del botón.

  
<br/>

![alt text](/src/assets/img/task5_preview2.gif)


