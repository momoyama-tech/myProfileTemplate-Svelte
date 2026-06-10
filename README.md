# myProfileTemplate-Svelte

SvelteKit で自己紹介サイトを作り、GitHub Pages に公開するためのテンプレートです。
フォークして GitHub Pages を有効にするだけで、

```
https://{GitHubアカウント名}.github.io/{リポジトリ名}/
```

で自己紹介サイトが公開されます。`main` ブランチに push するたびに、GitHub Actions が自動でビルド・デプロイします。

## 技術スタック

- [SvelteKit](https://svelte.dev/docs/kit)（`adapter-static` で静的サイト出力）
- [Svelte 5](https://svelte.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vite](https://vite.dev/) / [Vitest](https://vitest.dev/) / [Playwright](https://playwright.dev/)
- GitHub Actions による GitHub Pages への自動デプロイ

## 公開までの手順（初回のみ）

1. このリポジトリを **Fork** する。
2. Fork したリポジトリの **Settings → Pages** を開く。
3. **Build and deployment** の **Source** を **GitHub Actions** に変更する。
4. **Actions** タブを開き、ワークフローの実行を有効にする。
5. `main` ブランチに push する（または Actions から手動実行する）。

> [!NOTE]
> ベースパス（`/リポジトリ名`）は GitHub Actions が自動で設定します。
> 以前のように `svelte.config.js` を手で書き換える必要はありません。

## ローカルでの開発

Node.js 20 以上を推奨します。

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動（http://localhost:5173）
npm run dev

# 本番ビルドのプレビュー
npm run build
npm run preview
```

サイトの中身は `src/routes/+page.svelte` を編集してカスタマイズします。
共通レイアウトは `src/routes/+layout.svelte`、グローバル CSS は `src/app.css` です。

## よく使うコマンド

| コマンド            | 内容                                  |
| ------------------- | ------------------------------------- |
| `npm run dev`       | 開発サーバーを起動                    |
| `npm run build`     | 本番用に静的ビルド（`build/` に出力） |
| `npm run preview`   | ビルド結果をローカルで確認            |
| `npm run check`     | svelte-check による型チェック         |
| `npm run lint`      | Prettier + ESLint によるチェック      |
| `npm run format`    | Prettier で自動整形                   |
| `npm run test:unit` | Vitest によるユニットテスト           |
| `npm run test:e2e`  | Playwright による E2E テスト          |

## デプロイの流れ

`main` に変更を push すると、`.github/workflows/pages.yml` が次を自動で行います。

```bash
git add .
git commit -m "コミットメッセージ"
git push origin main
```

1. 依存関係をインストール（`npm ci`）
2. `BASE_PATH=/リポジトリ名` を設定して `npm run build`
3. `build/` を GitHub Pages にデプロイ
