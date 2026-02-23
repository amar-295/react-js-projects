import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden group">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000"
          alt="Product"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white shadow-sm">
          New Arrival
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
              Minimalist Desk Essentials
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The perfect balance of form and function.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-xs font-medium text-gray-400">
            4.9 (1.2k reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
            $149.00
          </span>
          <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-bold rounded-xl text-sm px-6 py-3 transition-colors duration-200 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-lg shadow-indigo-500/20">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
