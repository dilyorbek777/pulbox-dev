import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      
      {/* 404 text */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-gray-800">
        404
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o‘chirib yuborilgan.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md"
        >
          Home ga qaytish
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
        >
          Orqaga qaytish
        </button>
      </div>

    </div>
  );
};

export default NotFound;