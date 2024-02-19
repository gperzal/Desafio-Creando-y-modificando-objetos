// ------ Requerimiento 1: Crear una función constructora para cada objeto ------ 
function Paciente(nombre, rut, edad, diagnostico) {
    this.nombre = nombre;
    this.rut = rut;
    this.edad = edad;
    this.diagnostico = diagnostico;
}

// ------ Requerimiento 2: Implementar métodos getters y setters
// Getter y Setter para Nombre
Paciente.prototype.getNombre = function () {
    return this.nombre;
};

Paciente.prototype.setNombre = function (nombre) {
    this.nombre = nombre;

};

// Getter y Setter para Rut
Paciente.prototype.getRut = function () {
    return this.rut;
};

Paciente.prototype.setRut = function (rut) {
    this.rut = rut;
};

// Getter y Setter para Edad
Paciente.prototype.getEdad = function () {
    return this.edad;
};

Paciente.prototype.setEdad = function (edad) {
    this.edad = edad;
};

// Getter y Setter para Diagnostico
Paciente.prototype.getDiagnostico = function () {
    return this.diagnostico;
};

Paciente.prototype.setDiagnostico = function (diagnostico) {
    this.diagnostico = diagnostico;
};



// ------ Requerimiento 3: Crear métodos mediante la propiedad prototype
Paciente.prototype.buscarPorNombre = function (nombre) {
    // Asumiendo que hay una colección de pacientes
    return pacientes.filter(paciente => paciente.nombre === nombre);
};

Paciente.prototype.mostrarTodos = function () {
    // Asumiendo que hay una colección de pacientes
    pacientes.forEach(paciente => {
        console.log(`Nombre: ${paciente.nombre}, Rut: ${paciente.rut}, Edad: ${paciente.edad}, Diagnostico: ${paciente.diagnostico}`);
    });
};

// ------ Requerimiento 4: Instanciar cada objeto
let paciente1 = new Paciente("Juan", "11111111-1", 30, "Gripe");
let paciente2 = new Paciente("Ana", "22222222-2", 25, "Alergia");
let paciente3 = new Paciente("Luis", "33333333-3", 40, "Asma");

// Añadir a una arreglo
let pacientes = new Paciente("Luis", "Martínez", 40, "Asma");
pacientes = [paciente1, paciente2, paciente3];

//Otra forma

var lista_pacientes = [
    new Paciente("Juan", "Pérez", 30, "Gripe"),
    new Paciente("Ana", "Gómez", 25, "Alergia"),
    new Paciente("Juan", "Martínez", 40, "Asma")
];

// Prueba de getters y setters
console.log("Getter para panciente1 : ", paciente1.getNombre()); // Debería mostrar "Juan"
paciente1.setNombre("Carlos");
console.log("")

console.log("Setter para panciente1 con nombre Carlos : ", paciente1.getNombre()); // Debería mostrar "Carlos"
console.log("")
// Prueba del método buscarPorNombre
var resultadoBusqueda = paciente1.buscarPorNombre("Ana");
console.log("Buscar Pasciente Ana en el arreglo : ", resultadoBusqueda); // Debería mostrar los detalles de "Ana"
console.log("")
// Prueba del método mostrarTodos
console.log("Mostrar todos los Pascientes")
paciente1.mostrarTodos(); // Debería mostrar los detalles de todos los pacientes
console.log("")
