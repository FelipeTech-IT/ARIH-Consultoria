# ARIH Consultoria — Landing Page

Nova versão responsiva da landing page, reconstruída a partir do ZIP original e do logotipo fornecido.

## Estrutura do projeto

```text
arih-consultoria-site/
├── index.html                       # Conteúdo e estrutura semântica
├── assets/
│   ├── css/
│   │   └── style.css                # Estilos, cores, desktop e celular
│   ├── js/
│   │   └── main.js                  # Menu móvel e ano automático
│   └── images/
│       ├── arih-consultoria-logo.png # Logotipo original preservado
│       └── favicon.svg             # Ícone do navegador
└── README.md
```

## Como visualizar

Abra `index.html` no navegador ou, no VS Code, utilize a extensão **Live Server**. Não é necessário instalar pacotes, usar frameworks ou executar `npm install`.

## O que foi implementado

- Site adaptado para desktop, tablet e celular (inclusive menu móvel).
- Identidade visual inspirada nas cores azul-marinho e prata do logotipo, com detalhes em dourado.
- Nova apresentação da consultoria, diferenciais, pacotes, bônus, passos, FAQ e contato.
- Planos: LinkedIn Estratégico (R$ 50,00), Combo Carreira (R$ 120,00), Combo Recolocação Completa (R$ 150,00).
- Serviço individual de currículo (R$ 30,00) trazido da primeira versão.
- Botões de WhatsApp com mensagens personalizadas por serviço.
- Links para Instagram e perfil do Google fornecidos.
- Boas práticas de acessibilidade, HTML semântico, SEO básico e animações reduzidas quando solicitado pelo dispositivo.
- Dependências externas: **nenhuma**.

## Atenção: conferir antes de publicar

1. **WhatsApp:** o ZIP original trazia **(41) 98783-8738** e esse número foi mantido nos botões. Há também referência pública ao mesmo número em divulgação de vagas da ARIH.
2. **Telefone do Google:** a imagem anexada apresenta **(41) 99852-3353**; está exibido como telefone alternativo, não como WhatsApp.
3. **Avaliações:** a captura de tela indica **5,0 / 23 avaliações**. Como os números mudam com o tempo, confira os dados atuais antes de publicar.
4. **Currículo individual:** o valor de **R$ 30,00** veio da primeira versão e precisa de confirmação se continua válido.
5. **Preço/descrição dos combos e bônus:** foram usados os textos mais recentes fornecidos. O bônus não constitui garantia de vaga ou entrevista.
6. **Horário de atendimento:** a primeira versão falava em atendimento 24h e entrega no mesmo dia, mas essas promessas não foram repetidas como garantias para evitar informação desatualizada.
7. **Google e Instagram:** os links utilizados são os fornecidos. Confirme os destinos abrindo-os no navegador.

## Edição rápida

- **Textos e preços:** `index.html`.
- **Paleta de cores:** início de `assets/css/style.css`, bloco `:root`.
- **Layout e responsividade:** `assets/css/style.css`.
- **Interações:** `assets/js/main.js`.
- **Trocar número do WhatsApp:** busque por `5541987838738` no `index.html` (aparece nos links personalizados).
- **Trocar telefone do Google:** busque por `998523353` e pelo texto formatado `99852-3353`.

## Publicação

É um site estático. Hospede a pasta inteira em serviços como GitHub Pages, Netlify, Vercel ou em hospedagem convencional, mantendo a estrutura dos diretórios. Os arquivos já estão preparados para funcionar sem etapa de build.
