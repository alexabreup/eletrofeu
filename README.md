# Eletrofeu Troféu Player

Uma aplicação de player de mídia com interface moderna usando Quasar Framework.

## Características

- Layout responsivo com drawer lateral
- Gerenciamento de estado centralizado com Pinia
- Tema personalizado
- Suporte a playlist de vídeos
- Compatibilidade com Electron para desktop

## Instalação

```bash
npm install
```

### Iniciar em modo de desenvolvimento
```bash
npm run dev
```

### Compilar para produção
```bash
npm run build
```

### Compilar para desktop (Linux)
```bash
npm run build:electron:linux
```

## Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── css/              # Estilos globais e variáveis
├── layouts/          # Layouts da aplicação
├── pages/            # Páginas da aplicação
├── router/           # Configuração de rotas
├── stores/           # Gerenciamento de estado (Pinia)
└── boot/             # Arquivos de inicialização
```

## Tema Personalizado

O tema utiliza as seguintes cores principais:
- Primary: #ff4f00
- Secondary: #ff9100
- Accent: #9C27B0

Para modificar o tema, edite o arquivo `src/css/quasar.variables.sass`.

## Features

- Modern UI built with Quasar Framework and Vue 3
- Video playback using video.js
- Multiple player versions:
  - Standard player with controls in the main layout
  - Player with drawer that opens when clicking on the right edge (5% of the screen)
- State management with Pinia
- Responsive design for all screen sizes
- Desktop application packaging for Ubuntu Linux

## Installation

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
npm run dev
```

### Start Electron app in development mode

```bash
npm run dev:electron
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
npm run build
```

### Build desktop application for Ubuntu Linux

The application can be packaged as a desktop application for Ubuntu Linux using Electron. The following commands are available:

```bash
# Build for Linux (creates both AppImage and DEB packages)
npm run build:electron:linux

# Build only AppImage package
npm run build:electron:linux:appimage

# Build only DEB package
npm run build:electron:linux:deb
```

The packaged applications will be available in the `dist/electron` directory.

## Desktop Application Features

The desktop application includes the following features:

- Maximized window on startup for Linux
- Minimum window size of 800x600
- Custom icon and branding
- Native desktop integration

## Project Structure

```
.
├── public/                  # Static assets
├── src/
│   ├── assets/              # Dynamic assets
│   ├── boot/                # Boot files (initialization)
│   ├── components/          # Vue components
│   ├── css/                 # CSS/SCSS styles
│   ├── layouts/             # Layout components
│   ├── pages/               # Page components
│   ├── router/              # Vue Router
│   ├── stores/              # Pinia stores
│   └── App.vue              # Root component
├── src-electron/            # Electron specific code
│   ├── electron-main.js     # Electron main process
│   └── electron-preload.js  # Electron preload script
├── index.html               # Entry HTML file
├── quasar.config.js         # Quasar configuration
└── package.json             # Project dependencies and scripts
```

## Customization

### CSS Variables

You can customize the look and feel of the application by modifying the SASS variables in `src/css/quasar.variables.sass`.

### Player Versions

The application includes two different player versions:

1. **Standard Player**: Available at the root URL (`/`)
2. **Player with Drawer**: Available at `/drawer-player` - This version includes an invisible trigger area (5% of the right side of the screen) that opens a drawer with controls (20% of the screen width).

## License

Copyright 2025 Eletrofeu Team
