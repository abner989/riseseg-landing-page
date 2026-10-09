# Páginas de soluções — Riseseg

Revisão local de 8 de outubro de 2026. Não publicada no GitHub nesta etapa.

## O que mudou

- 21 páginas próprias, uma para cada solução existente.
- Os botões do carrossel agora abrem a apresentação do produto. Os botões das páginas continuam a conversa no WhatsApp com o produto identificado.
- Abertura com fotografia temática, título humano e introdução específica. Abaixo, descrição, público e itens originais de `app/products.ts` preservados.
- Isabela atende saúde; Guilherme atende seguros e serviços financeiros. Nome, função e retrato mantidos no atendimento direto, sem expor número ou e-mail nessa área.
- Lista de todas as soluções na página inicial e links entre produtos do mesmo ramo.
- Animação suave de entrada ao rolar, com respeito à preferência por movimento reduzido.
- Rotas exportadas em HTML, compatíveis com a publicação estática já usada pelo projeto. Imagens, favicon e navegação com caminhos relativos para funcionar também em subdiretórios.

## Direção de design e texto

As skills frontend-design e copywriting orientaram a abertura editorial, as cenas cotidianas e a linguagem próxima: começar pelo contexto de quem visita, explicar a escolha e apresentar uma pessoa real para conversar. A skill cro orientou a presença de contato logo na abertura e junto aos detalhes, evitando que a nova página vire uma etapa sem próximo passo claro.

Não foram acrescentados percentuais de economia, garantias, depoimentos ou condições de cobertura não confirmadas. O texto de crédito esclarece análise, custos e riscos; o de consórcio não promete data de contemplação. As fotografias geradas são ilustrativas, não representam clientes nem colaboradores reais. Os retratos de Isabela e Guilherme permanecem os fornecidos pelo usuário.

## Imagens novas

Modo: ferramenta integrada de geração de imagens (skill imagegen). Uma geração por fotografia. Saídas de 1536 × 1024 px, convertidas sem alteração criativa para WebP de 1400 × 933 px. Imagens existentes foram reutilizadas em temas compatíveis, com ponto de foco ajustado para evitar cortar os rostos.

Arquivos finais em `public/rise-seg/produtos/`:

- `agro.webp`
- `automovel.webp`
- `eventos.webp`
- `transportes.webp`
- `maquinas.webp`
- `viagem.webp`
- `bike.webp`
- `condominio.webp`

### Prompts finais

#### agro

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Uma produtora rural brasileira, cerca de 45 anos, conversando com outro produtor ao lado de um trator estacionado, lavoura verde e dourada ao fundo. Relação próxima com o campo, roupa prática, sem pose corporativa. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

#### automovel

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Uma mulher brasileira adulta e seu companheiro preparando um passeio de carro, ao lado de um automóvel compacto contemporâneo estacionado numa rua residencial arborizada. Sorrisos discretos e naturais, sensação de autonomia e cuidado. Sem marcas e sem placas legíveis. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

#### eventos

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Uma organizadora brasileira de eventos com prancheta conversando com um colega, em primeiro plano de uma celebração ao ar livre com convidados desfocados, mesas elegantes e luzes quentes. Momento de preparação tranquilo, não festa noturna escura. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

#### transportes

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Um profissional brasileiro de logística com colete de segurança conversando com uma motorista ao lado de um caminhão estacionado num centro de distribuição organizado. Caixas e docas ao fundo, pessoas como protagonistas, sem marcas. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

#### maquinas

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Uma profissional brasileira com óculos de proteção acompanhando um técnico em uma oficina industrial organizada com equipamento de produção moderno parado. Segurança, atenção e trabalho em equipe, pessoas naturais, sem marcas. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

#### viagem

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Uma família brasileira com uma criança de oito anos, malas pequenas, olhando com curiosidade a paisagem através da janela de um aeroporto iluminado. Viagem, descoberta e conexão humana, sem textos ou marcas. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

#### bike

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Uma ciclista brasileira adulta usando capacete corretamente, segurando sua bicicleta num parque urbano arborizado durante uma pausa, uma amiga ao lado. Conversa espontânea, bicicleta inteira reconhecível, sem marcas. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

#### condominio

Crie uma única fotografia editorial fotorrealista horizontal 3:2 para uma página de seguros da Riseseg. Uma síndica brasileira e um morador conversando cordialmente no jardim de um condomínio residencial contemporâneo de porte médio. Edifícios e área comum bem cuidada ao fundo, protagonistas humanos, acolhedor e cotidiano. Composição com as pessoas no centro e margem de segurança ampla em todos os lados para recorte responsivo; enquadramento médio-aberto. Luz natural suave, cores realistas com pequenos detalhes azul-petróleo, pele com textura real, ambiente brasileiro plausível. Estilo humano, acolhedor, não publicidade corporativa posada. Nada de texto, letras, logotipos, marcas d'água ou gráficos.

## Verificação

- `npm run check`: tipos da aplicação.
- `npm run build`: exportação estática de 21 soluções, início e contato (mais página 404).
- `node --experimental-strip-types scripts/check-product-pages.mjs`: verifica informação original, arquivos, favicon, links e destinatário/mensagem de WhatsApp em todas as soluções.
- Navegação dos 21 botões conferida no navegador.
- 21 páginas conferidas em 1440 × 960 e 390 × 844: sem transbordamento horizontal, fotos e logos disponíveis.
- Revisão visual da abertura e dos detalhes; ajustes de foco nas fotografias verticais reutilizadas.

Prévia: http://localhost:3000/ — exemplo: http://localhost:3000/solucoes/agronegocios.html
