# Revisão Riseseg — outubro de 2026

## O que mudou

- Visual mais acolhedor: fundos claros, azul da marca, tipografia suave e imagem de família na abertura.
- Fotos reais de Isabela Ribeiro e Guilherme Alves em destaque, com enquadramentos responsivos.
- Quatro caminhos de entrada e 21 produtos, com seleção, navegação anterior/próximo, público, possibilidades de cobertura e contato contextualizado.
- Jornada do plano de saúde em cinco etapas, com o agente de relacionamento dedicado explicitamente apresentado.
- Gestão de sinistro, acompanhamento de conta PJ saúde, reversão de reajuste e suporte jurídico.
- Parceiros em três grupos, somente com logotipos. Yelum utilizada conforme confirmação do usuário. NotreLife representado pela marca de sua operadora, NotreDame Intermédica.
- Endereço atualizado para Sala 911 e atendimento@riseseg.com na página de contato e no rodapé.
- Revelação suave ao rolar, respeito à preferência de movimento reduzido, navegação por teclado e menu para celular.

## Orientação utilizada

As skills **frontend-design**, **copywriting** e **cro** orientaram respectivamente a composição visual, o tom próximo e a clareza do caminho até o contato. A skill **imagegen** foi utilizada para criar a imagem da abertura com a ferramenta integrada, sem Lovable.

Referências de estrutura, sem copiar textos, avaliações ou resultados:

- https://equipeseguros.com.br/solucoes/
- https://infinitycorretora.com.br/

## Nova imagem

Arquivo final: `public/rise-seg/familia-riseseg.webp`.

Direção do prompt: fotografia editorial natural de uma família brasileira — mãe, pai e filha — compartilhando um momento de carinho no sofá de casa. Luz suave de janela, ambiente acolhedor, roupas em azul-marinho e azul-claro, composição horizontal para uma landing page. Sem textos, logotipos ou marcas d'água. A imagem é ilustrativa, não um depoimento de cliente.

Os logotipos de parceiros foram obtidos de seus sites oficiais ou da referência fornecida; as fontes são registradas nos scripts de preparação. As licenças OFL acompanham as fontes locais.

## Verificação

- `npm run check`: concluído sem erros no código da aplicação.
- `npm run build`: concluído com exportação das páginas inicial e de contato.
- Conferência no navegador das 21 soluções, destino dos contatos, navegação circular, menu para celular e dúvidas frequentes.
- Conferência dos três grupos de parceiros: 12, 7 e 11 marcas, sem arquivos quebrados.
- Layout verificado em larguras de 320, 390, 768 e 1440 pixels, sem rolagem lateral.

Prévia disponível em http://localhost:3000/. Esta revisão não foi publicada no GitHub Pages.
