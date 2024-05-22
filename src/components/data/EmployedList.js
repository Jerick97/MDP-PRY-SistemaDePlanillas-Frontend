export const EmployeList = [
  {
    codigo: "001",
    empleado: "John Doe",
    documento: "12345678",
    sueldo: "$2000",
    planilla: true,
    estado: "Activo",
    birthday: getRandomBirthday(),
  },
  {
    codigo: "002",
    empleado: "Jane Smith",
    documento: "98765432",
    sueldo: "$2500",
    planilla: false,
    estado: "Inactivo",
    birthday: getRandomBirthday(),
  },
  // Generación de registros aleatorios
  ...Array.from({ length: 10 }, (_, index) => ({
    codigo: (index + 3).toString().padStart(3, "0"),
    empleado: getRandomName(),
    documento: getRandomDocumentNumber(),
    sueldo: getRandomSalary(),
    planilla: getRandomBoolean(),
    estado: getRandomStatus(),
    birthday: getRandomBirthday(),
  })),
];

// Funciones auxiliares para generar datos aleatorios
function getRandomName() {
  const names = ["John", "Jane", "Michael", "Emily", "David", "Olivia"];
  const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Taylor", "Lee"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomName} ${randomLastName}`;
}

function getRandomDocumentNumber() {
  return Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(8, "0");
}

function getRandomSalary() {
  const minSalary = 2000;
  const maxSalary = 5000;
  return `$${(Math.random() * (maxSalary - minSalary) + minSalary).toFixed(2)}`;
}

function getRandomBoolean() {
  return Math.random() < 0.5;
}

function getRandomStatus() {
  return Math.random() < 0.7 ? "Activo" : "Inactivo";
}

function getRandomBirthday() {
  const start = new Date(1970, 0, 1); // Fecha de inicio
  const end = new Date(2002, 0, 1); // Fecha de fin (para que sean mayores de 18 años)
  const birthday = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  // Formatear la fecha a DD-MM-YYYY
  const day = String(birthday.getDate()).padStart(2, "0");
  const month = String(birthday.getMonth() + 1).padStart(2, "0"); // Los meses son 0-indexados
  const year = birthday.getFullYear();

  return `${day}-${month}-${year}`;
}
