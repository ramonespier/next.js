import './teste.css';
export default function Teste() {
    const produtos = [
        {
            id: 1,
            nome: 'Arroz',
            preco: 25.00,
        },
        {
            id: 2,
            nome: 'Pão',
            preco: 16.99,
        },
        {
            id: 3,
            nome: 'Chagas',
            preco: 50.00
        }
    ]

    const funcionarios = [
        {
            id: 1,
            nome: 'Ramon',
            cargo: 'Desenvolvedor Full-Stack',
            foto: '/a7x.jpg'
        },
        {
            id: 2,
            nome: 'Davi',
            cargo: 'Desenvolvedor Estagiário',
            foto: '/a7x.jpg'
        },
        {
            id: 3,
            nome: 'Pedrão',
            cargo: 'Técnico em Redes',
            foto: '/a7x.jpg'
        }
    ]
    return (
        <>
            <h1>Lista de produtos</h1>
            {produtos.map((produto) => (
                <div key={produto.id}>
                    <h2>Produto: {produto.nome}</h2>
                    <p>Valor: {produto.preco ? produto.preco.toFixed(2) : '0.00'}</p>
                </div>
            ))}

            <h1>Lista Funcionários</h1>
            <div className="flex justify-around">
                {funcionarios.map((funcionario) => (
                    <div key={funcionario.id} className="listaFuncionario
                flex">
                        <div className="cardFuncionario
                    w-[350px] border border-white
                    p-4">
                            <img className='w-full' src={funcionario.foto} alt="Imagem do funcionário" />
                            <h2>Nome: {funcionario.nome}</h2>
                            <h3>Cargo: {funcionario.cargo}</h3>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};