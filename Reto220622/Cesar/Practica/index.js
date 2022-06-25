const usuarios = require("./user");

const buscar = async (user, nameSearch) => {
  let promesa = new Promise((resolve, reject) => {
    const findUser = user.find((user) => user.name === nameSearch);
    if (findUser !== undefined) {
      if (findUser.phone === undefined) {
        reject(`el usuario ${findUser.name} no tiene telefono `);
      } else {
        resolve(
          `Se encontro el usuario ${findUser.name} con telefono ${findUser.phone}`
        );
      }
        } else {
      reject(`El usuario ${nameSearch} no se encontro`);
    }
  });

  try {
    let response = await promesa;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
buscar(usuarios, "Marcus");
