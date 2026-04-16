# Duoc UC: Taller de Git y React - Panel de Control Estelar 🌌

¡Bienvenidos cadetes! Este repositorio es la plantilla inicial (scaffolding) para el taller de trabajo colaborativo en Git, usando React y TailwindCSS. Su misión es construir y reparar el sistema de control de la Nave Estelar Duoc UC.

## 🚀 Instrucciones para Estudiantes

1. **Clonar el Repositorio:**
   El líder del equipo debe clonar este repositorio y subirlo a un repositorio propio en GitHub (o hacer un fork).
   
2. **Asignación de Componentes:**
   En el archivo `src/App.jsx` y dentro de la carpeta `src/components/`, encontrarán 10 componentes incompletos (con comentarios `//TODO`).
   El equipo debe organizarse para asignar a cada miembro el desarrollo de diferentes componentes.
   
3. **Flujo de Trabajo con Git:**
   - Cada miembro debe crear una **rama independiente** para trabajar en su componente asignado: `git checkout -b feature/nombre-del-componente`.
   - Modifiquen el componente para mostrar la información del panel requerida. Recuerden agregar estilos.
   - Una vez listo, hagan un `commit` y suban la rama: `git push origin feature/nombre-del-componente`.
   - Abran un **Pull Request (PR)** hacia la rama principal (`main` o `master`).
   - Resuelvan colaborativamente cualquier conflicto de fusión (merge conflict) que se pueda generar, prestando especial atención a `App.jsx`.

4. **Despliegue y Entrega:**
   Una vez integrados todos los módulos al sistema principal, utilicen alguna plataforma como Render, Vercel o Netlify para realizar el despliegue de su panel estelar funcionando.

## 🎨 Documentación y Sistema de Diseño (CSS)

El proyecto ha sido configurado con Tailwind CSS y reglas especiales en `src/index.css` para crear una inmersión completa espacial.

**Variables de Color Disponibles:**
Puedes utilizarlas en las clases arbitrarias de Tailwind (ej. `text-[var(--retro-green)]`) o en tu propio CSS:
- `--retro-green` (`#39ff14`): Úsalo para bordes, brillos, textos holográficos y un toque gamer clásico.
- `--system-green` (`#00ff66`): Indica que un sistema está en línea u óptimo.
- `--emergency-red` (`#ff3333`): Para luces de advertencia y blips de radar.

**Componentes y Utilidades Visuales:**

1. **Efecto de Cristal Espacial (`.glass-card`):**
   Envuelve el contenedor raíz de tu componente con esta clase para que adquiera automáticamente un fondo semi-transparente oscuro, con bordes que brillan al pasar el mouse.
   ```jsx
   <div className="glass-card flex flex-col justify-center items-center h-full"> ... </div>
   ```

2. **Fondo Estelar:**
   El fondo del `<body>` ya trae una animación infinita de estrellas ('twinkling') generada con CSS. ¡Aprovechen las transparencias para que el espacio de fondo resalte!

3. **Animaciones de Radar:**
   Se incluyen clases como `.sonar-pulse` que están siendo aplicadas en el `CorePowerGrid` para crear el efecto de los anillos del radar. Tailwind también tiene clases como `animate-pulse` que le vendrán bien a las luces indicadoras.

¡Buena suerte, cadetes estelares!
