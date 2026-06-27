# Balloon Garlands & Event Decor — Orlando, FL

Landing page bilíngue (EN/PT) para orçamentos de decoração com balões e eventos.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) (EN) ou [http://localhost:3000/pt](http://localhost:3000/pt).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e configure:

| Variável | Descrição |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site (produção) |
| `RESEND_API_KEY` | Chave API Resend (opcional) |
| `QUOTE_EMAIL_TO` | E-mail que recebe leads |
| `QUOTE_EMAIL_FROM` | Remetente verificado no Resend |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |

Sem credenciais de e-mail, o formulário continua funcionando e redireciona para `/thank-you`.

## Substituir imagens

Coloque fotos reais nas pastas:

- `public/images/hero/` — imagem principal
- `public/images/services/` — cards de serviços (6)
- `public/images/emotional/` — seção emocional
- `public/gallery/` — galeria (8+)

Atualize caminhos em `src/content/site.ts` se necessário.

## Conteúdo e traduções

Todo texto está em `src/content/site.ts` (`content.en` e `content.pt`).

Contatos, redes sociais e avaliações: edite `siteConfig` no mesmo arquivo.

## Deploy (Vercel)

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

```bash
npx vercel
```

## Estrutura principal

- `src/components/LandingPage.tsx` — página completa
- `src/components/sections/` — seções da landing
- `src/app/api/quote/route.ts` — API do formulário
- `src/components/seo/JsonLd.tsx` — schema SEO local
