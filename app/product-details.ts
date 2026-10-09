import { products, type Product } from "./products";

type Presentation = {
  slug: string;
  headline: string;
  intro: string;
  context: string;
  image: string;
  alt: string;
  conversation: string;
};

// The original audience, description and coverage information remain in products.ts.
const presentations: Record<string, Presentation> = {
  "Individual": {
    slug: "plano-de-saude-individual",
    headline: "Sua saúde merece um cuidado que combine com você.",
    intro: "O médico que você prefere, a região onde vive, o que cabe no seu orçamento. Vamos partir da sua rotina para encontrar um plano que faça sentido.",
    context: "Ter um plano não é só ter uma carteirinha. É entender onde você pode ser atendido e quais condições vai encontrar quando precisar. A gente explica rede, carências e coparticipação antes da sua escolha.",
    image: "humana.webp", alt: "Uma conversa próxima sobre necessidades de saúde",
    conversation: "Conte sua cidade, sua idade e quais hospitais ou médicos são importantes para você.",
  },
  "Familiar Empresarial": {
    slug: "plano-de-saude-familiar-empresarial",
    headline: "Seu CNPJ pode abrir um caminho para cuidar da família.",
    intro: "Você tem uma empresa ou é MEI? Vamos entender se um plano empresarial pode atender você e seus dependentes, conforme as regras da operadora.",
    context: "Cada família tem prioridades diferentes. Antes de comparar planos, olhamos quem precisa de atendimento, a região e as regras de elegibilidade. Assim, você conhece as possibilidades sem confundir preço com cuidado.",
    image: "familia-riseseg.webp", alt: "Pais e filha compartilhando um momento de carinho em casa",
    conversation: "Conte quem deseja incluir no plano e qual é a situação do seu CNPJ ou MEI.",
  },
  "Coletivo Empresarial": {
    slug: "plano-de-saude-coletivo-empresarial",
    headline: "Cuidar da equipe também faz parte do seu negócio.",
    intro: "Um benefício de saúde começa nas pessoas que vão usá-lo. A Riseseg ajuda a comparar opções para seu time, com atenção à rede, ao orçamento e à gestão do plano.",
    context: "Da escolha à implantação, sua empresa precisa de clareza. Conversamos sobre o perfil dos colaboradores, explicamos as condições e acompanhamos os primeiros passos. Depois, o cuidado continua nas movimentações e nas tratativas com a operadora.",
    image: "empresas.webp", alt: "Uma consultora e empresários conversando sobre o cuidado com a equipe",
    conversation: "Conte quantas pessoas fazem parte do grupo e em quais cidades elas precisam de atendimento.",
  },
  "Seguro Odonto": {
    slug: "seguro-odonto",
    headline: "Mais espaço para cuidar do sorriso no dia a dia.",
    intro: "Para você, sua família ou seus colaboradores: vamos encontrar opções de cuidado odontológico e explicar o que cada plano oferece.",
    context: "Prevenção também merece planejamento. A gente ajuda você a conferir a rede de dentistas, os procedimentos previstos e as condições de utilização, para escolher sabendo o que poderá usar.",
    image: "familia-riseseg.webp", alt: "Família sorrindo em um momento descontraído em casa",
    conversation: "Conte quem vai usar o plano e em qual região deseja encontrar dentistas.",
  },
  "Empresarial": {
    slug: "seguro-empresarial",
    headline: "Você construiu seu negócio. Vamos ajudar a cuidar dele.",
    intro: "Atrás de cada empresa há trabalho, pessoas e planos. Escolha uma proteção alinhada ao seu espaço, aos seus equipamentos e à forma como você opera.",
    context: "Uma loja, um escritório e uma indústria não precisam das mesmas coberturas. Primeiro, entendemos sua atividade e os riscos do dia a dia. Depois, explicamos as opções para proteger o patrimônio e apoiar a continuidade do negócio.",
    image: "empresas.webp", alt: "Empresários conversando com uma consultora sobre seu negócio",
    conversation: "Conte sua atividade, onde a empresa funciona e o que é essencial para ela continuar operando.",
  },
  "Agronegócios": {
    slug: "agronegocios",
    headline: "Quem cuida da produção também merece cuidado.",
    intro: "No campo, cada decisão carrega uma história de trabalho. Vamos entender sua produção, seus bens e sua operação para avaliar uma proteção que faça sentido para o seu agro.",
    context: "O que funciona para uma propriedade pode não servir para outra. Cultura, região, estruturas e equipamentos ajudam a definir a análise. A Riseseg conversa com você sobre as modalidades disponíveis e os limites de cada contratação.",
    image: "produtos/agro.webp", alt: "Produtores rurais conversando ao lado de um trator em uma lavoura",
    conversation: "Conte onde fica a propriedade, o que você produz e quais bens ou riscos deseja avaliar.",
  },
  "Máquinas e Equipamentos": {
    slug: "maquinas-e-equipamentos",
    headline: "Seu trabalho depende deles. A proteção merece atenção.",
    intro: "Uma máquina parada pode mudar a rotina de toda a operação. Vamos avaliar os equipamentos que você utiliza e as coberturas disponíveis para os riscos do seu trabalho.",
    context: "Tipo de equipamento, uso, local de operação e deslocamentos fazem diferença na escolha. A gente ajuda você a organizar essas informações e entender o que está previsto na apólice, sem deixar os detalhes para depois.",
    image: "produtos/maquinas.webp", alt: "Profissionais acompanhando equipamentos em uma oficina industrial organizada",
    conversation: "Conte quais equipamentos deseja proteger, como são utilizados e se precisam ser transportados.",
  },
  "Responsabilidade Civil": {
    slug: "responsabilidade-civil",
    headline: "Cuidar do seu trabalho também é pensar em quem está ao redor.",
    intro: "Mesmo com atenção, uma atividade pode causar danos involuntários a outras pessoas. Entenda as opções de responsabilidade civil para sua empresa ou profissão.",
    context: "Cada atividade tem uma exposição diferente. Vamos conversar sobre sua atuação e explicar modalidades, limites e exclusões. O objetivo é você entender como a proteção pode ajudar diante de danos a terceiros previstos no contrato.",
    image: "consultiva.webp", alt: "Profissionais analisando informações juntos em uma conversa atenciosa",
    conversation: "Conte sua profissão ou atividade e em quais situações há contato com clientes ou terceiros.",
  },
  "Condomínio e Imobiliária": {
    slug: "condominio-e-imobiliaria",
    headline: "Por trás de cada imóvel, existem pessoas para cuidar.",
    intro: "Áreas comuns, patrimônio, administração ou locação. A Riseseg ajuda a entender as soluções para condomínios e imóveis, com atenção à realidade de cada espaço.",
    context: "Quem administra um imóvel lida com necessidades de muita gente. Conversamos sobre a estrutura, o uso e as responsabilidades envolvidas para comparar opções e esclarecer quais riscos podem ser contemplados.",
    image: "produtos/condominio.webp", alt: "Síndica e morador conversando no jardim de um condomínio residencial",
    conversation: "Conte se procura uma solução para condomínio, imóvel ou locação e como o espaço é utilizado.",
  },
  "Eventos": {
    slug: "seguro-eventos",
    headline: "Você cuida dos detalhes. Vamos conversar sobre os imprevistos.",
    intro: "Uma celebração, uma feira, um encontro importante. Seu evento tem um propósito — e a proteção precisa acompanhar o formato, a estrutura e as pessoas envolvidas.",
    context: "Cada evento tem seu próprio cenário. Data, local, público e equipamentos ajudam a avaliar os riscos. A gente explica as coberturas disponíveis para você planejar com mais clareza, antes de abrir as portas.",
    image: "produtos/eventos.webp", alt: "Organizadores preparando um evento acolhedor ao ar livre",
    conversation: "Conte a data, o local, o tipo de evento e a estimativa de público.",
  },
  "Transportes": {
    slug: "seguro-transportes",
    headline: "Cada entrega leva mais do que uma mercadoria.",
    intro: "Ela leva o trabalho de quem produz e a expectativa de quem recebe. Vamos avaliar a proteção para sua carga de acordo com as rotas, o modal e a operação.",
    context: "Embarcador e transportador podem precisar de soluções diferentes. Entendemos seu papel, o tipo de mercadoria e os deslocamentos para explicar as modalidades disponíveis, as responsabilidades e as condições da apólice.",
    image: "produtos/transportes.webp", alt: "Profissionais de logística conversando junto a um caminhão em um centro de distribuição",
    conversation: "Conte o que é transportado, as rotas e se você atua como embarcador ou transportador.",
  },
  "Seguro de Vida Empresarial": {
    slug: "seguro-de-vida-empresarial",
    headline: "Seu time faz a empresa acontecer. Cuide de quem está com você.",
    intro: "O seguro de vida empresarial pode fazer parte do cuidado com seus colaboradores e suas famílias. Vamos entender o grupo e explicar as opções de proteção financeira.",
    context: "Um benefício precisa ser compreendido por quem contrata e por quem recebe. A Riseseg explica coberturas, elegibilidade e condições, ajudando sua empresa a avaliar uma solução alinhada às necessidades da equipe.",
    image: "empresas.webp", alt: "Pessoas reunidas em uma conversa próxima no ambiente de trabalho",
    conversation: "Conte o tamanho da equipe e se já existe uma apólice para o grupo.",
  },
  "Automóvel": {
    slug: "seguro-automovel",
    headline: "Seu carro faz parte da sua vida. O seguro precisa acompanhar.",
    intro: "Do caminho para o trabalho ao passeio do fim de semana, cada uso pede atenção. Compare coberturas para seu carro com alguém que explica os detalhes para você.",
    context: "Nem sempre a proposta de menor preço é a que atende sua rotina. Vamos olhar juntos franquia, assistência, proteção a terceiros e opcionais, para você decidir sabendo o que está contratando.",
    image: "produtos/automovel.webp", alt: "Casal preparando um passeio ao lado de seu carro em uma rua arborizada",
    conversation: "Conte o modelo do carro, sua cidade e como costuma usar o veículo.",
  },
  "Vida": {
    slug: "seguro-de-vida",
    headline: "Cuidar de quem você ama também é pensar no amanhã.",
    intro: "Seus planos, sua família, as pessoas que contam com você. O seguro de vida ajuda a planejar proteção financeira para situações previstas na apólice, do seu jeito e para o seu momento.",
    context: "Falar sobre proteção é falar sobre o que importa. A gente escuta suas prioridades e explica coberturas, valores e condições com calma. Você não precisa chegar sabendo qual seguro escolher.",
    image: "familia-riseseg.webp", alt: "Uma família reunida em um momento de afeto e conexão",
    conversation: "Conte quem você deseja proteger e quais são suas prioridades hoje.",
  },
  "Residência": {
    slug: "seguro-residencial",
    headline: "Sua casa guarda muito mais do que objetos.",
    intro: "Ela guarda a sua rotina, suas conquistas e as pessoas que você ama. Conheça opções para proteger o imóvel e o que faz dele o seu lar.",
    context: "Casa ou apartamento, próprio ou alugado: o cuidado começa entendendo o espaço. Vamos conversar sobre estrutura, conteúdo e assistências disponíveis, sempre conferindo o que a proposta realmente prevê.",
    image: "familia-riseseg.webp", alt: "Família aproveitando um momento de carinho no conforto de casa",
    conversation: "Conte o tipo de imóvel, sua cidade e se ele é próprio ou alugado.",
  },
  "Viagem": {
    slug: "seguro-viagem",
    headline: "Leve seus planos na mala. Conte com apoio para os imprevistos.",
    intro: "Uma viagem a trabalho, férias em família ou aquele destino esperado. Vamos avaliar opções de seguro para seu roteiro e explicar como acionar o atendimento se precisar.",
    context: "Destino, duração e atividades fazem diferença na escolha. A Riseseg ajuda você a conferir os limites de cobertura, as condições e as assistências disponíveis, para viajar sabendo com quem contar.",
    image: "produtos/viagem.webp", alt: "Família com malas observando a paisagem pela janela de um aeroporto",
    conversation: "Conte o destino, as datas, quem vai viajar e quais atividades estão no roteiro.",
  },
  "Bike e Eletrônicos": {
    slug: "bike-e-eletronicos",
    headline: "Proteja o que acompanha seus dias.",
    intro: "Sua bike nos passeios, seus eletrônicos na rotina. Vamos entender o que você quer proteger e quais opções estão disponíveis para cada bem.",
    context: "Modelo, valor e forma de uso ajudam a definir a análise. Explicamos os riscos previstos e as condições de cada modalidade, inclusive as diferenças entre roubo, furto e danos acidentais na contratação.",
    image: "produtos/bike.webp", alt: "Ciclista usando capacete durante uma pausa com uma amiga em um parque",
    conversation: "Conte qual bem deseja proteger, seu modelo e como ele faz parte da sua rotina.",
  },
  "Equipamentos Portáteis": {
    slug: "equipamentos-portateis",
    headline: "Suas ferramentas vão com você. O cuidado também pode ir.",
    intro: "Notebook, câmera ou outros dispositivos: quando um equipamento faz parte do trabalho, protegê-lo merece planejamento. Vamos avaliar as opções para seu uso.",
    context: "Trabalhar em lugares diferentes muda a exposição dos seus equipamentos. Conversamos sobre os bens, os deslocamentos e a atividade para conferir o que pode ser contratado e quais condições precisam ser observadas.",
    image: "contemporanea.webp", alt: "Profissional em deslocamento com celular e equipamento portátil",
    conversation: "Conte quais dispositivos utiliza, seus valores e se costuma levá-los para fora do local de trabalho.",
  },
  "Consórcio": {
    slug: "consorcio",
    headline: "Seu próximo sonho pode começar com um plano.",
    intro: "Um imóvel, um veículo ou outra conquista. Se você pode se planejar, vamos conversar sobre o consórcio e entender se ele combina com seu prazo e orçamento.",
    context: "A decisão precisa considerar parcelas, taxas, reajustes e regras de contemplação. A gente explica sorteios e lances sem prometer uma data de acesso ao crédito. Assim, você avalia o compromisso antes de entrar no grupo.",
    image: "consultiva.webp", alt: "Casal conversando sobre planejamento e possibilidades financeiras",
    conversation: "Conte o que deseja conquistar, o valor aproximado e em quanto tempo pretende realizar esse plano.",
  },
  "Empréstimo com Garantia": {
    slug: "emprestimo-com-garantia",
    headline: "Uma decisão de crédito merece uma conversa clara.",
    intro: "Usar um bem como garantia é uma escolha importante. Vamos avaliar as condições disponíveis e explicar os custos, os prazos e os riscos antes de você decidir.",
    context: "Crédito só faz sentido quando cabe na sua realidade. A análise considera a proposta, a elegibilidade do bem e sua capacidade de pagamento. Você entende o custo total e o risco de perda do bem em caso de inadimplência, sem promessa de aprovação.",
    image: "consultiva.webp", alt: "Pessoas analisando informações financeiras em uma conversa orientada",
    conversation: "Conte seu objetivo, o valor pretendido e qual bem deseja apresentar como garantia. Não envie documentos sensíveis no primeiro contato.",
  },
  "Financiamento de Veículo": {
    slug: "financiamento-de-veiculo",
    headline: "Antes de pegar a chave, entenda o próximo passo.",
    intro: "Encontrou o carro que procura? Vamos comparar as condições de financiamento e olhar além do valor da parcela para você escolher com mais clareza.",
    context: "Entrada, prazo, taxas e custo total precisam fazer parte da conversa. A Riseseg ajuda você a entender as propostas e a contratação, sempre considerando a análise de crédito e o que cabe no seu orçamento.",
    image: "produtos/automovel.webp", alt: "Casal ao lado de um carro em um bairro residencial arborizado",
    conversation: "Conte qual veículo pretende comprar, o valor aproximado e a entrada que deseja considerar.",
  },
};

const photoPositions: Record<string, string> = {
  "humana.webp": "50% 25%",
  "consultiva.webp": "50% 30%",
  "contemporanea.webp": "50% 40%",
};

export const productPages = products.map(product => ({
  ...product,
  ...presentations[product.name],
  photoPosition: photoPositions[presentations[product.name].image] ?? "50% 50%",
}));

export function productPageHref(product: Product, prefix = "solucoes/") {
  return `${prefix}${presentations[product.name].slug}.html`;
}
