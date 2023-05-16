# NLW SPACETIME - BACK-END

## Comandos

### Aula 01

- `npm init -y` para criar um projeto JavaScript.
- `npm i typescript -D` para instalar o Typescript como uma dependência de desenvolvimento.
- `npm i @types/node -D` dá habilidade ao Typescript de entender que o mesmo está dentro de um projeto Node.
- `npx tsc --init` cria o arquivo de configurção tsconfig.json (vamos utilzar a versão es2020).
- `npm i tsx -D` converte .ts para .js automaticamente.
  - Para isso, temos em `package.json`:
    ```JS
    "scripts": {
        "dev": "tsx watch src/server.ts"
    }
    ```
  - Agora basta apenas digitar `npm run dev` (mais simples).
- `npm i fastify` para instalar esse framework.
- `npm i eslint -D` instala essa ferramenta de padronização de código (É necessário ter a extensão instalada no VSC).
- `npm i prisma -D` para instalar o prisma como dependência de desenvolvimento.
- `npx prisma init --datasource-provider SQLite` fala que vamos utilizar SQLite.
- `npx prisma migrate dev` para controle de versionamento do BD.
- `npx prisma studio` para abrir uma interface do BD no nabegador.