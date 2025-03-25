import "./header.css";

export default function Header() {
    return (
        <header>
            <nav className="
                w-full
                h-36
                flex
                navbar
                bg-linear-to-b
                from-rose-900
                to-background
                "
            >

                <span className="text-3xl flex items-center m-10">A7x.STATS</span>
                <ul className="
                    w-full
                    flex
                    justify-end
                    items-center
                    m-7
                    gap-5
                    text-3xl
                ">
                    <li><a href="/" className="text-rose-600 hover:text-rose-900 transition">HOME</a></li>
                    <li><a href="/contato" className="text-rose-600 hover:text-rose-900 transition">CONTATO</a></li>
                    <li><a href="/sobre" className="text-rose-600 hover:text-rose-900 transition">SOBRE</a></li>
                </ul>
            </nav>
        </header>
    )
}