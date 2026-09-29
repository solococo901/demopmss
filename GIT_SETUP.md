# Push lên Git

```bash
git init
git add .
git commit -m "Initial PMS demo"
git branch -M main
git remote add origin <YOUR_GIT_REPO_URL>
git push -u origin main
```

Không commit `node_modules`, `.next`, hoặc `.env`.

Sau khi clone:

```bash
npm install
npm run dev
```
