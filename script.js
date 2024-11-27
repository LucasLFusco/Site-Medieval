// Classe Prato
class Prato {
    constructor(nome, tipo, descricao) {
        this.nome = nome;
        this.tipo = tipo;
        this.descricao = descricao; // Adiciona a descrição da receita
        this.ingredientes = [];
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    removerIngrediente(ingrediente) {
        this.ingredientes = this.ingredientes.filter(ing => ing.nome !== ingrediente.nome);
    }
}

// Classe Ingrediente
class Ingrediente {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    getNome() {
        return this.nome;
    }

    getQuantidade() {
        return this.quantidade;
    }
}

// Classe Filtro
class Filtro {
    filtrarPorTipo(listaPratos, tipo) {
        return listaPratos.filter(prato => prato.tipo === tipo);
    }

    filtrarPorIngrediente(listaPratos, ingrediente) {
        return listaPratos.filter(prato => prato.ingredientes.some(ing => ing.nome.toLowerCase().includes(ingrediente.toLowerCase())));
    }
}

// Criação da lista de pratos
let pratos = [
    new Prato("Doce Mesopotâmia", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>Farinha de rosca</li>
            <li>Leite talhado</li>
            <li>Tâmaras</li>
            <li>Mel</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Cozinhe a farinha de rosca com mel até formar uma massa.</li>
            <li>Sove a massa, abra-a e corte em rodelas.</li>
            <li>Leve as rodelas ao forno para assar.</li>
            <li>Ferva 1 litro de leite.</li>
            <li>Quando o leite ferver, desligue e adicione o suco de 1 limão para talhar.</li>
            <li>Passe o leite talhado por uma peneira e misture mel a gosto.</li>
            <li>Corte as tâmaras ao meio, recheie-as com o leite talhado e sirva sobre a massa assada.</li>
        </ol>
    `),
    

    new Prato("Carne com Legumes na Cerveja", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>Algum corte de carne para cozinhar</li>
            <li>Cerveja preta estilo stout</li>
            <li>Alho-poró</li>
            <li>Cenoura</li>
            <li>Cebola roxa</li>
            <li>Manteiga</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Em uma panela bem quente, refogue a manteiga e a carne (sem sal) até selar e começar a grudar na panela.</li>
            <li>Adicione a cebola, o alho-poró e a cenoura cortados grosseiramente.</li>
            <li>Despeje a cerveja preta na panela, tempere com sal a gosto e adicione água, se necessário, até cobrir a carne.</li>
            <li>Cozinhe por pelo menos 2 horas, deixando o caldo reduzir quase completamente.</li>
        </ol>
    `),

    new Prato("Galinha Mourisca", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>Coxa e sobrecoxa de frango</li>
            <li>Bacon</li>
            <li>Manteiga</li>
            <li>1 maço de salsinha</li>
            <li>1 maço de hortelã</li>
            <li>Canela em pó</li>
            <li>Suco de 1 limão</li>
            <li>3 gemas</li>
            <li>Vinho branco (ou hidromel, como substituição)</li>
            <li>Pão de centeio para servir</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Frite o bacon em uma panela, adicione a manteiga e, em seguida, o frango. Frite bem o frango.</li>
            <li>Adicione a cebola, colorau (opcional), canela em pó, 150 ml de hidromel, salsinha e hortelã picados.</li>
            <li>Complete a panela com água e cozinhe o frango até ficar bem macio.</li>
            <li>No final do cozimento, adicione o suco de meio limão.</li>
            <li>Em um recipiente separado, misture as 3 gemas com um pouco do caldo quente para temperá-las. Depois, incorpore a mistura ao caldo para engrossar.</li>
            <li>Sirva o prato no pão de centeio.</li>
        </ol>
    `),

    new Prato("Coelho ao Vinho de Moscatel", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>1 coelho partido aos pedaços</li>
            <li>1 cálice de vinho de moscatel</li>
            <li>3 colheres de sopa de vinagre de vinho tinto (ou vinagre de Xerez)</li>
            <li>1/2 colher de café rasa de canela em pó</li>
            <li>2 cravinhos ou 1/2 colher de café de cravinho em pó</li>
            <li>1 mão cheia de passas de uva, sultanas ou corintos</li>
            <li>Um pedaço de gengibre descascado e cortado fino (+/- 2 cm)</li>
            <li>Sal a gosto</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Cozinhe o coelho em caldo de carne até que fique macio.</li>
            <li>Em uma panela com um fio de azeite, doure os pedaços de coelho.</li>
            <li>Adicione o vinho de moscatel, o vinagre, a canela, os cravinhos (ou cravinho em pó), as passas, o gengibre e o sal a gosto.</li>
            <li>Cozinhe em fogo muito baixo, com a panela tampada, por cerca de 40 minutos, virando os pedaços de coelho ocasionalmente para que absorvam bem o sabor.</li>
            <li>Se o molho evaporar rapidamente e o coelho ainda não estiver cozido, adicione pequenos borrifos de água e continue o cozimento.</li>
            <li>Acompanhe com arroz branco e legumes cozidos. Como alternativa, sirva com purê de batatas ou batatas fritas, mesmo que não sejam típicos medievais.</li>
        </ol>
    `),

    new Prato("Gehalbirte Ayer - Ovos Recheados", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>Ovos cozidos</li>
            <li>Salsa fresca picada</li>
            <li>Sal e pimenta a gosto</li>
            <li>Uma mistura de gengibre, canela, noz-moscada e açúcar a gosto</li>
            <li>Ovo cru batido (para umedecer a mistura)</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Corte os ovos cozidos ao meio no sentido do comprimento e retire as gemas, reservando as claras.</li>
            <li>Esmague as gemas em uma tigela, misture com a salsa, os condimentos e um pouco de ovo cru batido para dar liga.</li>
            <li>Recheie as cavidades das claras com essa mistura.</li>
            <li>Aqueça um pouco de azeite ou margarina em uma frigideira e frite os ovos recheados com a parte do recheio voltada para cima. Quando a parte de baixo dourar, vire os ovos cuidadosamente para dourar o recheio.</li>
            <li>Opcional: Para uma textura diferente, faça um polme misturando farinha, ovo e leite, e passe os ovos por ele antes de fritar.</li>
            <li>Em alternativa à mistura de especiarias, use apenas salsa e outros cheiros verdes para temperar as gemas, garantindo que a salsa esteja sempre presente.</li>
        </ol>
    `),

    new Prato("Tarte de Bry", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>1 base de massa quebrada para tartes</li>
            <li>3 ovos</li>
            <li>1 requeijão</li>
            <li>1/4 de chávena de açúcar</li>
            <li>1/4 de colher de chá de açafrão em pó</li>
            <li>Raspas de gengibre fresco ou 1/4 de colher de chá de gengibre em pó</li>
            <li>1 pitada de sal (opcional)</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Esmague o requeijão com um garfo.</li>
            <li>Em uma tigela, bata os ovos levemente com o açúcar e misture com o requeijão.</li>
            <li>Adicione o açafrão, o gengibre e o sal (se desejar).</li>
            <li>Forre uma forma de tarte com a massa quebrada e despeje o recheio por cima.</li>
            <li>Leve ao forno pré-aquecido a 180°C por 15 a 20 minutos, ou até que o recheio esteja dourado e com boa consistência.</li>
        </ol>
        <h4>Nota:</h4>
        <p>Para melhores resultados, use uma base de massa mais fina e uma tarteira de menor diâmetro para que o recheio fique mais alto. É uma receita rápida, saborosa e prática de preparar.</p>
    `),    

    new Prato("Torta de Amêndoas", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>1 base de massa quebrada para tortas</li>
            <li>200g de amêndoas moídas</li>
            <li>100g de açúcar</li>
            <li>3 ovos</li>
            <li>1 colher de chá de canela em pó</li>
            <li>1 colher de sopa de água de rosas (opcional)</li>
            <li>Raspas de limão</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Pré-aqueça o forno a 180°C.</li>
            <li>Em uma tigela, misture as amêndoas moídas com o açúcar, a canela e as raspas de limão.</li>
            <li>Adicione os ovos e a água de rosas (se estiver usando), misturando bem até obter uma mistura homogênea.</li>
            <li>Forre uma forma de torta com a massa quebrada e despeje o recheio por cima.</li>
            <li>Leve ao forno por 25 a 30 minutos, ou até que a torta esteja dourada e firme ao toque.</li>
            <li>Deixe esfriar antes de servir.</li>
        </ol>
        <h4>Nota:</h4>
        <p>Para um sabor mais autêntico, use amêndoas frescas e moa-as você mesmo. A água de rosas pode ser substituída por água de flor de laranjeira para um aroma diferente.</p>
    `),
    
    new Prato("Biscoitos de Especiarias", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>200g de farinha de trigo</li>
            <li>100g de mel</li>
            <li>50g de manteiga</li>
            <li>1 ovo</li>
            <li>1 colher de chá de canela em pó</li>
            <li>1 colher de chá de gengibre em pó</li>
            <li>1 pitada de cravo em pó</li>
            <li>1/2 colher de chá de fermento em pó</li>
            <li>1 pitada de sal</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Pré-aqueça o forno a 180°C.</li>
            <li>Em uma tigela, misture a farinha, a canela, o gengibre, o cravo, o fermento e o sal.</li>
            <li>Em uma panela, aqueça o mel e a manteiga até derreterem. Deixe esfriar um pouco.</li>
            <li>Adicione o mel e a manteiga derretidos à mistura de farinha e mexa bem.</li>
            <li>Acrescente o ovo e misture até formar uma massa homogênea.</li>
            <li>Abra a massa em uma superfície enfarinhada até a espessura de 0,5 cm.</li>
            <li>Corte os biscoitos com cortadores de sua escolha e coloque em uma assadeira forrada com papel manteiga.</li>
            <li>Asse por 10-12 minutos, ou até que os biscoitos estejam dourados nas bordas.</li>
        </ol>
        <h4>Nota:</h4>
        <p>Esses biscoitos são perfeitos para acompanhar uma xícara de chá ou café. Você pode decorar com glacê ou açúcar de confeiteiro se desejar.</p>
    `),
    
    new Prato("Empadas de Carne", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>500g de carne bovina moída</li>
            <li>1 cebola picada</li>
            <li>2 dentes de alho picados</li>
            <li>1 colher de chá de canela em pó</li>
            <li>1 colher de chá de cominho em pó</li>
            <li>1 colher de chá de pimenta preta moída</li>
            <li>Sal a gosto</li>
            <li>1 colher de sopa de azeite</li>
            <li>1 base de massa quebrada para empadas</li>
            <li>1 ovo batido (para pincelar)</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Pré-aqueça o forno a 180°C.</li>
            <li>Em uma frigideira, aqueça o azeite e refogue a cebola e o alho até ficarem dourados.</li>
            <li>Adicione a carne moída e cozinhe até dourar.</li>
            <li>Tempere com canela, cominho, pimenta preta e sal.</li>
            <li>Deixe a mistura esfriar um pouco.</li>
            <li>Abra a massa e corte círculos para forrar as formas de empada. Reserve algumas partes da massa para cobrir as empadas.</li>
            <li>Recheie com a carne temperada e cubra com outro círculo de massa, apertando bem as bordas.</li>
            <li>Pincele as empadas com o ovo batido.</li>
            <li>Asse por 25-30 minutos, ou até ficarem douradas.</li>
        </ol>
        <h4>Nota:</h4>
        <p>Essas empadas são perfeitas para servir como entrada ou lanche. Experimente adicionar uvas-passas ou amêndoas picadas para um toque especial.</p>
    `)

];

// Adicionando ingredientes aos pratos
pratos[0].adicionarIngrediente(new Ingrediente("Limão", "2 unidades"));
pratos[0].adicionarIngrediente(new Ingrediente("Farinha", "200g"));
pratos[1].adicionarIngrediente(new Ingrediente("Frango", "1kg"));
pratos[1].adicionarIngrediente(new Ingrediente("Mel", "1 colher de sopa"));
pratos[2].adicionarIngrediente(new Ingrediente("Peixe", "2 postas"));
pratos[2].adicionarIngrediente(new Ingrediente("Alcaparras", "3 colheres de sopa"));

// Função para aplicar o filtro
function aplicarFiltro() {
    const tipo = document.getElementById("tipoPrato").value;
    const ingrediente = document.getElementById("ingrediente").value;

    const filtro = new Filtro();
    let pratosFiltrados = filtro.filtrarPorTipo(pratos, tipo);

    if (ingrediente) {
        pratosFiltrados = filtro.filtrarPorIngrediente(pratosFiltrados, ingrediente);
    }

    exibirPratosFiltrados(pratosFiltrados);
}

// Função para exibir os resultados filtrados
function exibirPratosFiltrados(listaPratos) {
    const resultadoDiv = document.getElementById("resultadoFiltro");
    resultadoDiv.innerHTML = '';  // Limpa os resultados anteriores

    if (listaPratos.length === 0) {
        resultadoDiv.innerHTML = '<p>Nenhum prato encontrado.</p>';
    } else {
        listaPratos.forEach(prato => {
            const pratoDiv = document.createElement('div');
            pratoDiv.innerHTML = `
                <h3>${prato.nome}</h3>
                <p>Tipo: ${prato.tipo}</p>
                <div>${prato.descricao}</div>
            `;
            resultadoDiv.appendChild(pratoDiv);
        });
    }
}
