# Subir a GitHub (cuenta `mateoalcans11-commits`)

El código ya está commiteado en la rama `main`. Sigue estos pasos **una vez** con tu cuenta de proyecto.

## 1. Iniciar sesión en GitHub CLI con la cuenta del proyecto

En la terminal, dentro de esta carpeta:

```bash
gh auth login
```

Elige:

- **GitHub.com**
- **HTTPS**
- **Login with a web browser** (recomendado)

Cuando pida la cuenta, inicia sesión como **`mateoalcans11-commits`** (no como `martinalcans11`).

## 2. Crear el repositorio y subir

```bash
cd "/Users/martin/joshua invitation"

gh repo create mateoalcans11-commits/joshua-invitation \
  --public \
  --source=. \
  --remote=origin \
  --push
```

Si el repo ya existe en GitHub, solo haz push:

```bash
git push -u origin main
```

## 3. Verificar

Abre: https://github.com/mateoalcans11-commits/joshua-invitation

---

**Nota:** Las fotos de Joshua están en `public/` y se suben al repo. Si prefieres un repo privado, cambia `--public` por `--private`.
