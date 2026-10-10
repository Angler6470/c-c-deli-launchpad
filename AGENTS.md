<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep editable restaurant content in clearly named constants at the top of the home route so daily updates stay simple.
- Keep menu browsing in a dedicated presentation component receiving the home route's typed menu constants; this separates daily content changes from category and search controls.
- Prefer third-party embeds that need no key or referrer allowlist, so the site renders on every host it is deployed to instead of only the preview domain.
