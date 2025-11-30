# RE:MOV3 - Plan de Desarrollo

## Archivos a crear/modificar:

1. **src/pages/Index.tsx** - Página principal con:
   - Hero fullscreen con vídeo de fondo
   - Overlay semitransparente
   - Logo RE:MOV3 centrado
   - Frase descriptiva
   - Botones "Reservar" y "Contactar"
   - Secciones: Servicios, Quién soy, Contacto
   - Footer

2. **src/styles/remov3.css** - Estilos personalizados:
   - Hero fullscreen con vídeo
   - Overlay
   - Contenido centrado
   - Secciones
   - Estética minimalista tipo lululemon
   - Colores: blanco, negro, gris piedra

3. **src/main.tsx** - Punto de entrada (importar remov3.css)

4. **index.html** - Actualizar título y meta tags

5. **public/media/** - Crear directorio para medios
   - hero-poster.jpg ya generado en public/assets/
   - Mover a public/media/
   - hero.mp4 será subido por el usuario

## Características técnicas:
- Vídeo con autoPlay, muted, playsInline, loop, preload="metadata"
- Fallback poster
- Sin localStorage
- Sin routing adicional
- Single page application
- Diseño responsive
- Estética premium minimalista