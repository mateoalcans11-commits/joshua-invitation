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

Los nombres se guardan en **localStorage** del navegador (cada dispositivo tiene su propia lista).

Para RSVP compartido entre invitados, implementa `RsvpStorage` en `src/lib/rsvp-storage.ts` con Supabase o Firebase.

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
