import logoCEART from '../../../assets/logos/logo_CEART.png';
import logoGobierno from '../../../assets/logos/logo_gobierno_estado.png';
import logoPNE from '../../../assets/logos/logo_PNEIAA.png';
import logoPotosi from '../../../assets/logos/logo_potosí_secult.png';

function Header() {
  return (
  <header className="text-white p-4 bg-[linear-gradient(90deg,#5a3e99,#3a2a6a)]">
  {/* Móvil: fila centrada con todos los logos para evitar que se solapen con el título */}
      <div className="flex justify-center gap-3 mb-2 md:hidden">
  <img src={logoCEART} alt="Logo CEART" className="h-28 w-28 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
  <img src={logoGobierno} alt="Logo Gobierno" className="h-28 w-28 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
  <img src={logoPNE} alt="Logo PNEIAA" className="h-28 w-28 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
  <img src={logoPotosi} alt="Logo Potosí Secult" className="h-28 w-28 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
      </div>

  {/* Desktop/tablet: grid con logos a la izquierda/título centrado/logos a la derecha */}
      <div className="hidden md:grid md:grid-cols-3 items-center">
        <div className="flex items-center gap-3">
          <img src={logoCEART} alt="Logo CEART" className="h-40 w-40 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
          <img src={logoGobierno} alt="Logo Gobierno" className="h-40 w-40 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
        </div>

        <div className="justify-self-center min-w-[10rem] px-4">
          {/* Título con tipografía más profesional: tamaños responsivos, peso semibold, tracking y ligera sombra */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide leading-tight text-center drop-shadow-sm">
            Inscripción
          </h1>
        </div>

        <div className="flex items-center gap-3 justify-end">
          <img src={logoPNE} alt="Logo PNEIAA" className="h-40 w-40 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
          <img src={logoPotosi} alt="Logo Potosí Secult" className="h-40 w-40 object-contain flex-shrink-0 filter brightness-0 invert" loading="lazy" decoding="async" />
        </div>
      </div>

  {/* Móvil: título (visible sólo en pantallas pequeñas) */}
      <div className="md:hidden">
        <h1 className="text-2xl font-semibold tracking-wide leading-tight text-center drop-shadow-sm">Inscripción</h1>
      </div>
    </header>
  );
}

export default Header;