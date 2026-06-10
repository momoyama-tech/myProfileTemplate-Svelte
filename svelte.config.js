import adapter from '@sveltejs/adapter-static';

// GitHub Actions sets BASE_PATH to "/<リポジトリ名>"。
// ローカル開発時は未設定なので空文字（ルート）になる。
// これにより、フォーク後に svelte.config.js を手で書き換える必要はない。
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-static で静的サイトとして書き出し、GitHub Pages に公開する。
		// See https://svelte.dev/docs/kit/adapter-static
		adapter: adapter({
			fallback: 'index.html' // すべてのリクエストを index.html にフォールバック（SPA 的に動かす）
		}),
		paths: {
			base
		}
	}
};

export default config;
