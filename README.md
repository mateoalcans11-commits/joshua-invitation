# Joshua — Invitación de cumpleaños 🐮

Invitación móvil con temática de vaca para el primer cumpleaños de Joshua.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Foto del bebé

Coloca la foto subida en:

```
public/joshua-baby.jpg
```

(Recomendado: JPG o PNG, retrato vertical, mínimo 800×1000 px.)

La página intenta cargar `joshua-baby.jpg` primero; si no existe, muestra un placeholder temporal.

## Editar detalles del evento

En `src/components/EventDetails.tsx`, reemplaza los placeholders:

- `[Agregar fecha]`
- `[Agregar hora]`
- `[Agregar dirección]`

## RSVP

Los nombres se guardan en **`data/rsvp-guests.json`** (en el proyecto) y todos los invitados ven la misma lista vía `/api/rsvp`.

- En desarrollo (`npm run dev`), cada confirmación actualiza ese archivo.
- En **Vercel**: **Storage → Create → Blob → Connect to project**. No hace falta pegar código: la app ya usa `put` / `get` de `@vercel/blob` con `BLOB_READ_WRITE_TOKEN` automático. Redeploy después de conectar.
- Puedes editar la lista a mano en `data/rsvp-guests.json` si hace falta.

## Despliegue

```bash
npm run build
```

Ideal para Vercel: comparte el enlace por WhatsApp.

## Componentes

| Componente       | Descripción                          |
|------------------|--------------------------------------|
| `HeroInvitation` | Hero con foto, título y decoración   |
| `EventDetails`   | Fecha, hora y lugar                  |
| `RSVPForm`       | Formulario de confirmación           |
| `GuestList`      | Lista de invitados confirmados       |
| `CowDecorations` | Manchas, orejas y animaciones        |
