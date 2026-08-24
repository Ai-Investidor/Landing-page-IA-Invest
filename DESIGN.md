---
name: AI Invest — Carteira
description: Landing page de assinatura de carteira de investimentos mensal, no registro de uma casa de research financeira editorial.
colors:
  paper: "#f9f8f6"
  paper-2: "#f0ede6"
  navy: "#0f1b2d"
  navy-soft: "#3a4552"
  navy-faint: "#616c78"
  emerald: "#0d5c3f"
  emerald-light: "#6fbf9a"
  gold: "#b8873a"
  gold-ink: "#8a6329"
  line: "rgba(15,27,45,0.12)"
  line-strong: "rgba(15,27,45,0.22)"
typography:
  display:
    fontFamily: "'Libre Caslon Display', Georgia, serif"
    fontSize: "clamp(2.5rem, 4.6vw, 3.9rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.005em"
  headline-section:
    fontFamily: "'Libre Caslon Display', Georgia, serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.005em"
  headline-split:
    fontFamily: "'Libre Caslon Display', Georgia, serif"
    fontSize: "clamp(1.8rem, 3vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.12
  headline-final:
    fontFamily: "'Libre Caslon Display', Georgia, serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1.12
  body:
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: ".8rem"
    fontWeight: 500
  # Dezenas de tamanhos ajustados por componente, não uma escala de 3-5 passos — mesma realidade
  # documentada nos mundos anteriores deste projeto. `scale` é o inventário completo de font-size
  # literal em uso (fora dos headlines fluidos, já cobertos pelos papéis acima), do menor pro maior.
  scale:
    s01: ".6rem"
    s02: ".72rem"
    s03: ".74rem"
    s04: ".76rem"
    s05: ".78rem"
    s06: ".8rem"
    s07: ".82rem"
    s08: ".84rem"
    s09: ".86rem"
    s10: ".88rem"
    s11: ".9rem"
    s12: ".92rem"
    s13: ".94rem"
    s14: ".95rem"
    s15: ".98rem"
    s16: "1rem"
    s17: "1.02rem"
    s18: "1.04rem"
    s19: "1.05rem"
    s20: "1.06rem"
    s21: "1.1rem"
    s22: "1.14rem"
    s23: "1.22rem"
    s24: "1.3rem"
    s25: "1.4rem"
    s26: "1.8rem"
    s27: "2.2rem"
    s28: "2.6rem"
    s29: "2.8rem"
    s30: "3rem"
    s31: "3.8rem"
rounded:
  hairline: "1px"
  field: "2px"
  card: "3px"
spacing:
  section: "112px"
  section-sm: "72px"
components:
  button-primary:
    backgroundColor: "{colors.emerald}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "15px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "15px 28px"
  price-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    rounded: "{rounded.card}"
  offer-n:
    textColor: "{colors.gold-ink}"
    typography: "{typography.mono}"
---

# Design System: AI Invest — Carteira

## Overview

**Creative North Star: "A Casa de Research Honesta"**

A página não vende uma promessa — publica um caso de estudo. É o registro de uma casa de research financeira editorial: a prova de comportamento primeiro (o mês em que a queda simulada foi menor que a do índice), o método explícito depois, o nome de quem assina por último. É o mesmo gênero visual de Suno Research, Empiricus e Nord Research — executado sem metáfora inventada, porque a honestidade da empresa é a posição, não um efeito de estilo.

Este é o terceiro mundo visual do projeto. O primeiro ("Terminal Noturno": fundo quase preto, painéis de vidro, acento lima) e o segundo ("O Laudo de Exame": papel clínico, carimbo circular, verde de flag) foram tratados como evidência e anti-referência num redesign completo — nenhum dos dois foi preservado ou misturado com este.

A voz visual é editorial e sóbria: papel frio, tinta navy, um único verde institucional como acento de ação, e um dourado fosco reservado a dado tabular real. Nada aqui grita — a certidão de comportamento do hero, a prova completa do backtest e o preço fazem o trabalho. O rosto do especialista não abre a página: mora na seção dele, onde a credencial pode respirar por inteiro.

**Key Characteristics:**
- Fundo "papel" frio (`#f9f8f6`) — nunca o branco quente/creme padrão de landing de infoproduto, nunca o preto do mundo anterior.
- Tinta navy (`#0f1b2d`) pro corpo e títulos; um único verde institucional (`#0d5c3f`) como acento de ação — deliberadamente mais escuro e menos saturado que o verde de flag do mundo anterior (`#1f7a4d`).
- Dourado fosco (`#b8873a` sobre navy, `#8a6329` sobre papel) reservado a número/dado tabular — nunca decorativo.
- Nenhum card de ícone+título+texto do mesmo tamanho como estrutura de página — listas editoriais com hairline, não grades.
- Nenhum vidro, nenhum blur — sombra de papel direcional e neutra, a mesma disciplina dos dois mundos anteriores, agora aplicada a um card de pesquisa, não a um painel de trading nem a um laudo.
- A prova (o par −4,1%/−7,2%) já aparece dentro do próprio hero, em tipografia pura sobre navy — e se repete, completa, no `BacktestSection` logo em seguida, em bloco navy de página inteira. Nunca enterrada no rodapé.
- Tipografia Libre Caslon Display (editorial) + Public Sans (corpo) + JetBrains Mono (só dado tabular real).
- Motion assina a página: a palavra de ênfase de cada heading recebe um traço que se desenha por baixo ao entrar em vista — a página se anota, como um editor sublinhando a frase que importa — em vez de um fade genérico repetido seção após seção.

## Colors

Paleta editorial-financeira: papel frio e navy fazem o trabalho de leitura; verde é o único acento de ação; dourado só aparece em número.

### Primary
- **Verde Institucional** (`#0d5c3f`): CTA primário, links ativos, ênfase de palavra-chave em headline, ícone de crachá verificado. Contraste 7.55:1 sobre o papel — passa AA com folga.
- **Verde Institucional — variante clara** (`#6fbf9a`): a mesma cor de ação, aclarada só pra uso em texto sobre fundo navy (ênfase de headline no CTA final, número positivo no bloco de resultado) — o verde base não tem contraste suficiente sobre si mesmo/navy escuro; nunca usada sobre o papel.

### Secondary
- **Dourado — variante Navy** (`#b8873a`): rótulo de dado sobre fundo navy (ex.: "Simulação retroativa" no bloco de resultado). Contraste 5.40:1 sobre navy.
- **Dourado-Tinta — variante Papel** (`#8a6329`): mesma família, escurecida pra uso em texto sobre papel (ex.: numeral de referência da lista "o que você recebe"). Contraste 5.08:1 sobre o papel — a versão clara (`#b8873a`) dava só 3.01:1 sobre papel e foi corrigida nesta build antes de shipar (ver Do's and Don'ts).

### Neutral
- **Papel** (`#f9f8f6`): fundo base da página.
- **Papel-2** (`#f0ede6`): fundo de seções "banda" (ex.: declaração de princípio).
- **Navy** (`#0f1b2d`): títulos, texto de alta ênfase, fundo do bloco de resultado e do CTA final. Contraste 16.9:1 sobre o papel.
- **Navy Suave** (`#3a4552`): corpo de texto padrão.
- **Navy Fraca** (`#616c78`): texto terciário — legendas, metadados. Contraste 5.04:1 sobre o papel — o tom inicial (`#6b7480`) dava só 4.46:1, abaixo do mínimo AA de 4.5:1; corrigido nesta build.
- **Linha** (`rgba(15,27,45,.12)`) / **Linha Forte** (`rgba(15,27,45,.22)`): hairlines entre itens de lista, bordas de card.

### Named Rules
**The Number, Not Decoration Rule.** Dourado nunca preenche um fundo nem decora um elemento — ele só aparece em cima de um dado tabular real (percentual, protocolo, contagem). Um elemento que "precisa de cor" sem carregar um número usa navy neutro, não dourado.

## Typography

**Display Font:** Libre Caslon Display (400) — serifa de alto contraste, o mesmo caráter de gravura de certificado/cédula que uma casa de research editorial usa pra headline, nunca a pilha Fraunces/Playfair/Cormorant que virou piloto automático do gênero.
**Body Font:** Public Sans (400/500/600/700) — face desenhada pro US Web Design System, herdada do mundo anterior porque é uma escolha de legibilidade real, não decorativa.
**Mono:** JetBrains Mono (500/600) — só em dado tabular de verdade: percentual do backtest, numeral de referência da lista. O preço (`.price-val`) é a exceção documentada: fica em Libre Caslon Display porque é o número que carrega a página, não um dado de leitura corrida — `tabular-nums` mantém os algarismos alinhados mesmo fora do mono.

**Character:** Libre Caslon em peso 400 lê como o corpo de uma publicação financeira séria — autoridade sem peso de cartaz. Public Sans no corpo mantém o registro neutro e institucional. A família só tem o corte 400 — sem itálico real —, então a ênfase de palavra-chave dentro de headline nunca usa `font-style:italic` (seria oblíquo sintético do navegador, não um corte desenhado); carrega em cor (verde institucional) mais um leve tracking (`+.01em`), nunca inclinação.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 4.6vw, 3.9rem)`, line-height 1.12): H1 do hero.
- **Headline** (400, `clamp(1.8rem, 3vw, 2.4rem)` a `clamp(2.1rem, 4.6vw, 3.2rem)`, line-height 1.18 nos H2 de seção pra acomodar títulos longos em duas ou mais linhas): H2 de cada seção.
- **Title** (400, ~1.2–1.7rem): H3 de cards e subtítulos. Nunca itálico — mesma razão do Display.
- **Body** (400, ~.86–1.14rem, line-height 1.6–1.8): parágrafos.
- **Mono/Label** (500–600, .72–.86rem, letter-spacing 0–.06em): credencial do hero, rótulo de dado, numeral de referência.

### Named Rules
**The No-Kicker Rule.** Nenhum rótulo pequeno e maiúsculo aparece acima de um heading só pra introduzir a seção — o próprio heading carrega o peso. Herdada dos dois mundos anteriores, onde já tinha sido banida por violar a craft-floor do sistema.

**The No Faux-Italic Rule.** Libre Caslon Display não tem corte itálico real — nenhum elemento da família usa `font-style:italic`. Corrigido nesta build: a versão original aplicava itálico sintético (oblíquo forçado pelo navegador) em seis lugares, incluindo a citação inteira do especialista; a emphasis agora carrega só em cor e tracking.

## Layout

Contêiner central de `1180px` com `24px` de padding lateral. Ritmo vertical: `112px` de padding por seção no desktop, `72px` abaixo de `680px`. Listas (oferta, preço) usam hairline única entre itens, nunca `gap` preenchido de card — a "grade de ícone" foi deliberadamente evitada em toda a página: nenhuma seção usa cards do mesmo tamanho como estrutura.

**Breakpoints:** `920px` e `680px`.

**Mobile hardening (adapt pass):** a nav fixa e o drawer respeitam `env(safe-area-inset-*)` (notch/home indicator); todo alvo de toque interativo (`.menu-btn`) tem no mínimo `44×44px`; o CTA duplicado da nav some em `≤680px` porque o drawer já carrega o mesmo botão; o piso de leitura do corpo sobe pra `1rem` no mobile onde a distância de leitura é menor.

## Elevation & Depth

Sombra de papel levantado, direcional e neutra — `0 1px 2px rgba(15,27,45,.04), 0 12px 28px -16px rgba(15,27,45,.14)` — usada com moderação, só no card de preço, no expert card e nas fotos do relatório. Nenhum glassmorphism, nenhum backdrop-filter, herdado dos dois mundos anteriores como invariante, não como escolha nova.

### Named Rules
**The Paper-Not-Glass Rule.** Nenhuma superfície usa blur ou transparência translúcida.

## Shapes

Cantos quase retos: `1px` (hairline) na trilha e preenchimento das barras de comparação do backtest, `2px` em campos e botões, `3px` em cards. Fotos (hero, especialista) são retangulares com aspect-ratio fixo — nunca crop circular de avatar; o único elemento circular do sistema é o crachá de verificação de 18px ao lado do nome, porque um selo de verificação é, por convenção real, circular. O fallback tipográfico de foto (iniciais "MM") usa `3rem` — o único uso dessa escala, reservado a esse caso.

## Components

### Buttons
- **Shape:** `2px` de raio.
- **Primary:** fundo verde institucional sólido, texto papel, peso 600 em Public Sans.
- **Ghost:** transparente com borda navy; no hover, inverte pra fundo navy/texto papel.

### Comparação de Resultado (`.bt-compare`, componente de assinatura)
- Duas barras horizontais (carteira vs. IBOV) no mês de queda, largura proporcional à magnitude, valor em mono ao lado — no mesmo peso e escala grande (`1.8rem`/600) que o card de preço usa pro número que mais importa da página. É a seção-prova do site; o numeral precisa competir de igual pra igual com o preço, não ficar menor que ele.
- Abaixo, os números acumulados de 24 meses em texto corrido (`2.8rem`/600), não uma segunda grade de tiles.

### Lista de Oferta (`.offer-item`, componente de assinatura)
- Linha com numeral de referência em mono (`gold-ink`), título e prosa — separada por hairline, nunca um card de ícone. Substitui os 13 itens numerados em três seções redundantes do brief original por uma lista só.

### Expert Card
- Foto retangular (aspect-ratio 3/4), crachá de verificação circular de 18px ao lado do nome, citação em Libre Caslon Display normal (não itálico — ver Typography), linha de certificação com miniatura da imagem real.

### Hero (texto)
- **Marcador de frescor** (`.hero-fresh`): linha mono pequena com ponto verde, acima do H1 — "Carteira de {mês atual} · revisão vigente", usando `useCurrentDate()`. Não é um kicker/eyebrow (a heading não perde peso por causa dela — ver The No-Kicker Rule): é um indicador de status/atualidade, gênero diferente.
- **Linha de alinhamento de interesse** (`.hero-align`): "Não somos corretora. Não distribuímos produto. Não recebemos comissão de nenhum ativo recomendado." Peso e cor de corpo (`navy-soft`, sem negrito) — o destaque vem da hairline acima e do isolamento em parágrafo próprio, nunca de tipografia gritando. Negrito nessa frase leria como venda, não como fato frio.

### Certidão de Comportamento no Hero (`HeroProof`, componente de assinatura)
- Traz o par −4,1% / −7,2% (a queda que caiu menos que o índice) pra primeira dobra, no lugar onde antes ficava um elemento de mecanismo. Tipografia carregando sozinha — nenhum gráfico, nenhuma barra, nenhuma curva. Fundo navy (a mesma cor da `BacktestSection`), funcionando como uma prévia visual do que vem a seguir.
- **The No-Value-Curve Rule.** Nenhum elemento visual do sistema mostra uma curva ascendente de patrimônio ou retorno — a `CompoundSection` já recusa isso explicitamente, e nenhuma versão do hero (nem a escada de degraus que este componente substituiu) reintroduziu essa gramática.
- Rótulo "Backtest · Simulação Retroativa" em `1rem`/700 — deliberadamente do tamanho do corpo do texto, nunca menor: o ponto do site é honestidade legível, não escondida em nota de rodapé.
- Numeral próprio em verde claro (`#6fbf9a`, maior), numeral do IBOV em branco 55% (menor, neutro) — a mesma hierarquia de ênfase que a `BacktestSection` já usa entre "nosso resultado" e "o índice".
- Legenda fecha com fato, não instrução de scroll: "Caiu menos da metade do índice no mesmo mês — a prova de método, não de sorte."

### Pricing Card
- Card único (não grade) com preço em Libre Caslon Display grande, âncora textual contra o custo de dinheiro parado, lista de inclusões com checkmark, CTA primário de largura total.
- Borda e cabeçalho tingidos de verde institucional (`rgba(13,92,63,.3)` na borda, `--emerald-soft` no fundo do `.price-top`) — o único card do sistema com essa amarração visual à cor de ação, porque é o único card que É a ação. O valor "ou 12x de R$51,34" usa `gold-ink` em mono — mais um dado tabular sob a Number, Not Decoration Rule, não decoração.

### FAQ Accordion
- Item com hairline entre perguntas, sem borda de card individual; expande via `grid-template-rows`.

### Cycle Diagram (reinvestimento)
- Herdado dos mundos anteriores como mecanismo (não decoração): passos que acendem em verde em sequência ao entrar em vista, selo tracejado "o ciclo se repete" pulsando continuamente — o único loop de animação permanente do sistema.

## Do's and Don'ts

### Do:
- **Do** usar dourado só em cima de dado tabular real — nunca decorativo (The Number, Not Decoration Rule).
- **Do** verificar contraste de qualquer tom de navy-faint ou dourado contra o fundo antes de usar em texto — o padrão AA de 4.5:1 pegou dois erros reais nesta build: `navy-faint` original dava 4.46:1 sobre o papel, e `gold` dava só 3.01:1 sobre o papel no numeral de referência da lista de oferta. Ambos corrigidos antes de ship (`navy-faint` escurecido pra `#616c78`; numeral migrado pra `gold-ink` `#8a6329`).
- **Do** manter fotos retangulares — nunca crop circular de avatar; reservar circular só pro crachá de verificação, que é literalmente um selo.
- **Do** usar lista com hairline pra qualquer conteúdo sequencial novo — nunca grade de cards de ícone do mesmo tamanho.

### Don't:
- **Don't** usar glassmorphism, blur ou transparência translúcida em qualquer superfície.
- **Don't** adicionar um eyebrow/kicker acima de um heading.
- **Don't** usar o hero-metric template (tile grande número + label + ícone) — a prova do backtest é uma comparação de barra real, não um stat tile.
- **Don't** introduzir uma terceira cor de acento além de verde (ação) e dourado (dado) — a paleta é deliberadamente restrita.
- **Don't** desenhar qualquer curva ascendente de patrimônio/retorno (The No-Value-Curve Rule) — nem no hero, nem em nenhuma seção nova. O sistema visualiza processo (cadência, disciplina), nunca valor projetado.
