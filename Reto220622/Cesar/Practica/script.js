console.log("Graficas");
let url = "http://localhost:3000/data";

const creatAlumno = () => {
  const nombre = document.getElementById("formGroupExampleInput").value;
  const calificacion = document.getElementById("formGroupExampleInput2").value;

  if (nombre === "") {
    alert("El campo nombre esta vacio");
    return false;
  }
  if (calificacion === "") {
    alert("El campo calificacion esta vacio");
    return false;
  }
  if (nombre < 3) {
    alert("El campo nombre debe tener minimo 3 caracteres");
    return false;
  }
  if (calificacion >= 10) {
    alert("El campo calificacion debe ser ");
    return false;
  }
  const newAlumno = {
    nombre: nombre,
    calificacion: calificacion,
  };

  creatAlumno(newAlumno);
};

const createAlumno = async (data) => {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data), //convierte json en cadena
  });
  const alumonos = await resp.json();
  console.log(alumonos);
};

const readAlumnos = () => {
  const persona = async () => {
    const resp = await fetch(url, {
      method: "GET", //este metodo se utiliza para que cuando refresque se quede
    });
    const pers = await resp.json();
    showdb(pers)
    showChart(pers)
  };
  persona();
};

const showdb = (students) => {
  students.forEach((element, index) => {
    let texth1 = document.createElement("tr");
    texth1.innerHTML = `
    <td>${index + 1}</td>
      <td>${element.name}</td>
      <td>${element.grades}</td>`;

     document.getElementsByTagName("tbody")[0].appendChild(texth1); 
  });
};
const showChart = (data) => {
  //hijo 2
  const ctx = document.getElementById("myChart").getContext("2d");
  let labels = [];
  let dataValue = [];
  console.log(data);
  let prom = 0;
  data.forEach((data) => {
    labels.push(data.name);
    dataValue.push(data.grades);
    prom = prom + parseInt(data.grades);
  });
  const dataChart = {
    labels: labels,
    datasets: [
      {
        label: `El promedio de la clase es ${prom / dataValue.length} `,
        backgroundColor: "rgb(76, 255, 51)",
        borderColor: "rgb(76, 255, 51)",
        data: dataValue,
      },
    ],
  };
  const config = {
    type: "line",
    data: dataChart,
    options: {},
  };

  const myChart = new Chart(ctx, config);
};
readAlumnos();



// const ctx = document.getElementById("myChart").getContext("2d");


// const labels = [
//   // `${}`,
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
// ];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
//   options: {},
// };

// const myChart = new Chart(ctx, config);
