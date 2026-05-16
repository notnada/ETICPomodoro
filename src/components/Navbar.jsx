import logo from '../assets/logoetic.svg'

function Navbar() {
  return (
    <nav className="m-4 flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:items-center md:gap-0">
      
      {/* Logo */}
      <div className="flex items-center gap-2 md:justify-self-start md:ml-[100px]">
        <img src={logo} alt="ETIC logo" className="h-8 w-auto" />
        <span className="font-display text-maintext font-bold text-2xl">
          ETIC
        </span>
        <span className="font-display text-maintext font-normal text-2xl">
          Focus
        </span>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-6 list-none md:justify-self-center md:gap-12">
        <li><a href="#timer" className="text-2xl font-normal text-maintext transition-colors">Timer</a></li>
        <li><a href="#about" className="text-2xl font-normal text-maintext transition-colors">About</a></li>
        <li><a href="#contact" className="text-2xl font-normal text-maintext transition-colors">Contact</a></li>
      </ul>

      <div className="hidden md:block" />

    </nav>
  )
}

export default Navbar
