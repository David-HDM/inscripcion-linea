
function DetallesPago () {
    return (
        <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto border border-gray-300">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4text-2xl font-semibold leading-tight tracking-normal text-purple-600 mb-4">Detalles del pago</h2>
            
            {/* Línea separadora verde minimalista (aprox. 2px, semi-transparente) */}
            <div className="mb-4 border-b border-green-500/60" aria-hidden="true" />

            <form className="space-y-4" noValidate>

                <div>
                    <label htmlFor="monto" className="block text-sm font-bold text-gray-700">Monto a pagar:</label>
                    <input type="number" id="monto" name="monto" readOnly placeholder="$0.00"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200" />
                </div>

                <div>
                    <label htmlFor="titular" className="block text-sm font-bold text-gray-700">Nombre del titular:</label>
                    <input type="text" id="titular" name="titular" required autoComplete="cc-name" 
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200"/>
                </div>

                <div>
                    <label htmlFor="numTarjeta" className="block text-sm font-bold text-gray-700">Número de tarjeta:</label>
                    <input type="text" id="numTarjeta" name="numTarjeta" required pattern="\d{13,19}" placeholder="Sin espacios" autoComplete="cc-number" 
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <label htmlFor="vencimiento" className="block text-sm font-bold text-gray-700">Fecha de vencimiento:</label>
                        <input type="month" id="vencimiento" name="vencimiento" required autoComplete="cc-exp" 
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200"/>
                    </div>
                    <div>
                        <label htmlFor="cvv" className="block text-sm font-bold text-gray-700">CVV:</label>
                        <input type="text" id="cvv" name="cvv" required pattern="\d{3,4}" autoComplete="cc-csc" maxLength="3" 
                        className="mt-1 block w-14 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-200"/>
                    </div>
                </div>

                <button type="button" id="toggleDiscount" aria-expanded="false" aria-controls="discountOptions"
                className="w-50 bg-purple-600 text-white font-semibold text-sm px-4 py-2 rounded-md flex justify-between items-center">
                Solicitud de descuento
                <span class="text-white text-xs ml-2">▲</span>
                </button>

                <div id="discountOptions" role="region" aria-live="polite"
                class="mt-2 bg-gray-50 rounded-md shadow-sm p-4 space-y-6 border border-gray-300">
                    <label class="flex items-center space-x-2 text-green-700 text-sm font-medium">
                        <input type="radio" name="descuento" value="discapacidad" class="text-green-600 focus:ring-green-300" />
                        <span>Discapacidad</span>
                    </label>
                    <label class="flex items-center space-x-2 text-green-700 text-sm font-medium">
                        <input type="radio" name="descuento" value="personal_gobierno" class="text-green-600 focus:ring-green-300" />
                        <span>Personal de gobierno (municipal, estatal, federal)</span>
                    </label>
                    <label class="flex items-center space-x-2 text-green-700 text-sm font-medium">
                        <input type="radio" name="descuento" value="ninguno" checked class="text-green-600 focus:ring-green-300" />
                        <span>Ninguno</span>
                    </label>
                </div>
            </form>
        </section>
    );
}

export default DetallesPago;