import "./header.css";
export default function Header() {
    return (
        <header>
            <nav className="h-[124px] 
            bg-slate-950 
            w-full
            flex"
            >
            <img src="/a7x.jpg" alt="Avenged Sevenfold" className="w-32 border-2" />
                <ul className="
                w-full
                flex
                justify-end
                items-center
                m-7
                gap-5
                text-2xl
                ">
                    <li><a href="/" className="text-blue-200 hover:text-blue-500 underline transition">HOME</a></li>
                    <li><a href="/contato" className="text-blue-200 hover:text-blue-500 underline transition">CONTATO</a></li>
                    <li><a href="/sobre" className="text-blue-200 hover:text-blue-500 underline transition">SOBRE</a></li>
                </ul>
            </nav>
        </header>
    )
}