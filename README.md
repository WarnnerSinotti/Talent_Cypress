# TALENT - QA

## Liguagem de Programação

- Typescript

## Testes

- Cypress 

## Pré-requisitos

- Instalar nvm (node version manager)

- Instalar node v16.x.x

- Instalar yarn

## Instalando Dependencias Cypress

### Usando yarn

- Rode `yarn` para instalar todas as dependencias

### Usando npm

- Rode `npm install` para instalar todas as dependencias

## Instalando Allure na Máquina

[Windows](allureInstallWindows.md)
[Linux](allureInstallLinux.md)
[Mac OS X](allureInstallMac.md)

### Abrindo Cypress

- Rode `yarn cypress` para inicializar o servidor de testes Cypress

### Rodando testes com Cypress Com Report Allure

- Rode `npx cypress run --env allure=true` para inicializar o servidor de testes Cypress.
- Após Testes `allure generate --clean && allure open` para gerar relatório e abrir relatório em Tela.

### Política de privacidade





