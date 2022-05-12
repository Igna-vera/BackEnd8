import { knex } from "../../db.js";

const productos = [
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    title: "Producto 1",
    price: 100,
    description: "asd",
    code: "XY-1",
    image: "asd",
    stock: 150,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    title: "Producto 2",
    price: 200,
    description: "asd",
    code: "XY-2",
    image: "asd",
    stock: 250,
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
    title: "Producto 3",
    price: 300,
    description: "asd",
    code: "XY-3",
    image: "asd",
    stock: 350,
  },
];

const carritos = [
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
  },
  {
    timestamp: new Date().toISOString().slice(0, 19).replace("T", " "),
  },
];

const productoCarritoRelations = [
  {
    carritoId: 2,
    productoId: 1,
  },
  {
    carritoId: 2,
    productoId: 2,
  },
  {
    carritoId: 2,
    productoId: 3,
  },
];

export async function populateProducts() {
  try {
    await knex.insert(productos).from("producto");
    console.log("Se agregaron Productos a la tabla");
  } catch (error) {
    console.log(error);
  }
}

export async function populateCarts() {
  try {
    await knex.insert(carritos).from("carrito");
    console.log("Se agregaron Carritos a la tabla");
  } catch (error) {
    console.log(error);
  }
}

export async function populateProductoCarrito() {
  try {
    await knex.insert(productoCarritoRelations).from("productoCarrito");
    console.log("Se agregaron relaciones a la tabla");
    return;
  } catch (error) {
    console.log(error);
  }
}
