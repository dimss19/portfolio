# Task 1: Project Cleanup

## Files:
- Delete: `app/page.tsx.bak`
- Modify: `package.json`

## Interfaces:
- Produces: clean project state for subsequent tasks

## Steps:

### Step 1: Delete backup file

```bash
rm app/page.tsx.bak
```

### Step 2: Remove framer-motion from package.json

Open `package.json` and remove the `"framer-motion"` line from `dependencies`:

```json
"dependencies": {
  "next": "16.2.12",
  "react": "19.2.4",
  "react-dom": "19.2.4"
}
```

### Step 3: Install dependencies to update lockfile

```bash
npm install
```

### Step 4: Verify dev server starts

```bash
npm run dev
```
Expected: Server starts on localhost:3000 (page will be broken, that's fine)

### Step 5: Commit

```bash
git add -A
git commit -m "chore: remove framer-motion and backup file"
```
