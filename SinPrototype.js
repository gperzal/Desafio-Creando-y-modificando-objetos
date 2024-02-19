function Paciente(nombre, rut, edad, diagnostico) {
    // Propiedades privadas
    var _nombre = nombre;
    var _rut = rut;
    var _edad = edad;
    var _diagnostico = diagnostico;

    // Getter y Setter para _nombre
    this.getNombre = function () {
        return _nombre;
    };

    this.setNombre = function (nuevoNombre) {
        _nombre = nuevoNombre;
    };

    // Getter y Setter para _rut
    this.getRut = function () {
        return _rut;
    };

    this.setRut = function (nuevoRut) {
        _rut = nuevoRut;
    };

    // Getter y Setter para _edad
    this.getEdad = function () {
        return _edad;
    };

    this.setEdad = function (nuevaEdad) {
        _edad = nuevaEdad;
    };

    // Getter y Setter para _diagnostico
    this.getDiagnostico = function () {
        return _diagnostico;
    };

    this.setDiagnostico = function (nuevoDiagnostico) {
        _diagnostico = nuevoDiagnostico;
    };
}

function buscarPorNombre(pacientes, nombreBuscado) {
    // Filtrar la colección de pacientes para encontrar coincidencias de nombre
    return pacientes.filter(function (paciente) {
        return paciente.getNombre() === nombreBuscado;
    });
}



function mostrarTodos(pacientes) {
    // Iterar sobre la colección de pacientes y mostrar sus datos
    pacientes.forEach(paciente => {
        console.log(`Nombre: ${paciente.getNombre()}, Rut: ${paciente.getRut()}, Edad: ${paciente.getEdad()}, Enfermedad: ${paciente.getDiagnostico()}`);
    });
}

// Creación de una instancia de Paciente y uso de getters y setters
let paciente1 = new Paciente("Juan", "11111111-1", 30, "Gripe");
console.log("Getter del Paciente1: ", paciente1.getNombre()); // "Juan"

paciente1.setNombre("Carlos");
console.log("Setter del Paciente1 como <Carlos>: ", paciente1.getNombre()); // "Carlos"


console.log("Arreglo");
// Creamos el arreglo de pacientes
let pacientes = [
    new Paciente("Juan", "111-1", 30, "Gripe"),
    new Paciente("Ana", "222-2", 25, "Alergia"),
    new Paciente("Carlos", "333-3", 40, "Asma")
];

// Realizamos la búsqueda del paciente llamado "Juan"
let resultadoBusqueda = buscarPorNombre(pacientes, "Juan");
console.log(resultadoBusqueda.getNombre())
// Verificamos si encontramos resultados y mostramos los detalles
if (resultadoBusqueda.length > 0) {
    resultadoBusqueda.forEach(function (pacienteEncontrado) {
        console.log(`Nombre: ${pacienteEncontrado.getNombre()}, Rut: ${pacienteEncontrado.getRut()}, Edad: ${pacienteEncontrado.getEdad()}, Diagnóstico: ${pacienteEncontrado.getDiagnostico()}`);
    });
} else {
    console.log("No se encontraron pacientes con el nombre proporcionado.");
}



console.log("")
console.log("Muestra todos los pacientes")
mostrarTodos(pacientes); // Muestra todos los pacientes

