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

## Design system

- All visual styling comes from the "quality report" tokens in `src/styles.css` (deep ink surface, one signal-green `--pass` accent, `--rim` teal, Space Grotesk display / IBM Plex Sans body / JetBrains Mono metadata). Never hardcode color or font utilities in components — the site is dark-by-default and ad hoc styles break that single visual register.

