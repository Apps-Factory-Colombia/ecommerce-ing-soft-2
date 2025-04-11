"use client";
import { useEffect, useState } from "react";
import { StoreManager } from "../lib/storeManager";

export default function HomePage() {
  const [productos, setProductos] = useState([]);
  const [selectedStrategy, setSelectedStrategy] = useState("blackfriday");

  useEffect(() => {
    const cargarProductos = async () => {
      const store = StoreManager.getInstance();
      store.setDiscountStrategy(selectedStrategy);

      try {
        const productosCargados = await store.fetchAndCacheProducts();
        setProductos(productosCargados);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    cargarProductos();
  }, [selectedStrategy]);

  const store = StoreManager.getInstance();

  const handleStrategyChange = (e) => {
    setSelectedStrategy(e.target.value);
  };

  return (
    <main className="bg-white font-sans text-gray-800">
      {/* Sección Principal */}
      <section className="text-center px-6 py-16 bg-white">
        <h1 className="text-6xl font-extrabold text-blue-900 uppercase">Store</h1>
        <p className="text-lg mt-4 text-gray-500">¡No seas básico! Crea tu estilo.</p>

        {/* Dropdown de selección de descuento */}
        <div className="mt-6">
          <label htmlFor="discount-select" className="text-sm font-semibold mr-2">
            Selecciona un tipo de descuento:
          </label>
          <select
            id="discount-select"
            value={selectedStrategy}
            onChange={handleStrategyChange}
            className="border border-gray-300 px-3 py-2 rounded-lg text-sm"
          >
            <option value="blackfriday">Black Friday</option>
            <option value="none">Sin Descuento</option>
            <option value="membership">Membresía</option>
            <option value="fixed">Monto Fijo</option>
            <option value="percentage">Porcentaje</option>
          </select>
        </div>
      </section>

      {/* Descubrir Productos */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Descubre nuestros productos</h2>
        <div className="flex flex-wrap justify-center gap-10 px-6">
          {productos.map((producto) => {
            const precioConDescuento = store.getDiscountedPrice(producto.price);
            return (
              <div key={producto.id} className="w-60 text-center">
                <img
                  src={producto.images[0]}
                  alt={producto.title}
                  className="rounded-xl shadow-md mb-4 h-60 w-full object-cover"
                />
                <h3 className="text-lg font-semibold">{producto.title}</h3>
                <p className="text-sm text-gray-500 line-through">${producto.price}</p>
                <p className="text-sm text-green-600 font-bold">
                  ${precioConDescuento.toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="relative w-full bg-purple-300 py-12 text-center">
        <h3 className="text-blue-900 font-extrabold text-4xl uppercase tracking-widest">
          Viernes de descuentos para todos * ¡Aprovecha!
        </h3>
      </section>

      {/* Información de la Marca */}
      <section className="flex flex-col items-center py-20 px-4 bg-white">
        <h4 className="text-2xl font-bold text-blue-900 mb-6">Recompensa de la Marca</h4>
        <p className="text-center max-w-2xl text-gray-600">
          Originado en América, nuestro producto ha sido nominado como Marca del Año. Con tu apoyo,
          ganamos esta nominación. Costy comenzó con una idea: hacer moda que los jóvenes quieran
          usar explorando colores audaces que reflejen la verdadera individualidad.
        </p>
      </section>

      {/* Llamado a la Acción */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-5xl font-extrabold text-gray-200 uppercase mb-6">
          Los colores son estilo
        </h2>
        <div className="inline-block bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-blue-900 uppercase">¡Encuentra el tuyo!</h3>
        </div>
      </section>

      {/* Boletín de Noticias */}
      <section className="flex flex-col items-center bg-white py-16">
        <h2 className="text-3xl font-bold mb-4">
          ¡Únete a la tendencia, encuentra más estilo!
        </h2>
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="px-4 py-2 border border-gray-300 rounded-lg mb-4 w-80"
        />
        <button className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Suscribirse
        </button>
      </section>

      {/* Pie de Página */}
      <footer className="bg-blue-900 text-white text-center py-10">
        <h3 className="text-2xl font-bold mb-2">Store</h3>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-youtube" /></a>
        </div>
        <p className="mt-6 text-sm">© 2025 Store. Todos los derechos reservados. Store.com.co</p>
      </footer>
    </main>
  );
}
