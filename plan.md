# ScreenSnack --- 3-Hour Website Build Plan

## Mission

Build and deploy a polished, responsive movie-discovery website called
**ScreenSnack** in about 2--3 hours, even if you have no coding
experience.

The site will let visitors: - Browse a curated collection of movies. -
Search movies by title. - Filter by genre. - Sort or filter by a simple
attribute if time allows. - Click a button to get a random movie
suggestion. - Save and remove favorites, persisted in the browser with
`localStorage`. - Use the site on desktop and mobile.

**Important scope rule:** This is a curated demo catalogue, not a live
movie database. Do not use external APIs, API keys, accounts, paid
services, a backend, a database, a build tool, or a framework. Do not
add features that risk missing the deadline.

## Free tools

-   **VS Code** --- edit files.
-   **Claude or ChatGPT** --- generate complete code and help debug.
-   **GitHub** --- store the project and commit/push changes.
-   **GitHub Pages** --- free static hosting.
-   A modern browser --- test the site.

The user will create a GitHub repository and clone it into VS Code
before Phase 1.

## Fixed technical choices

Use only: - `index.html` - `styles.css` - `script.js` - Optional
`assets/` folder only if truly needed.

Use plain HTML, CSS, and vanilla JavaScript. Use emoji or CSS treatments
for visual accents if needed. If using poster images, use stable public
image URLs only when they are easy to source; the website must remain
usable if images fail. Prefer poster-style CSS placeholders or a small
set of reliable image URLs over spending time collecting images. Never
hotlink copyrighted movie artwork from random sources if avoidable.

The site must work by opening `index.html` locally and must deploy to
GitHub Pages as a static site.

## Time budget

  ------------------------------------------------------------------------
  Phase                                  Target time Outcome
  --------------------- ---------------------------- ---------------------
  0\. Start safely                        10 minutes Repository cloned and
                                                     ready

  1\. Build the first                     35 minutes Page, styling, movie
  complete version                                   data, core
                                                     interactions

  2\. Make it feel                        25 minutes Responsive layout and
  polished                                           interaction
                                                     refinements

  3\. Test and fix                        20 minutes Core features work;
                                                     no obvious errors

  4\. Commit and push                     10 minutes Code is on GitHub
  from VS Code                                       

  5\. Deploy with                         15 minutes Public website URL
  GitHub Pages                                       

  6\. Final checks and                15--35 minutes Verify deployment and
  buffer                                             fix small issues

  **Total**                     **130--150 minutes** **Leave a buffer
                                                     within the 3-hour
                                                     limit**
  ------------------------------------------------------------------------

If time runs short, skip optional polish rather than skipping
deployment.

------------------------------------------------------------------------

# Phase 0 --- Start safely (10 minutes)

## Do this yourself

1.  Create a new repository on GitHub named `screensnack`.
2.  For the simplest start, make it **Public** and leave it empty (do
    not add a README, license, or `.gitignore` yet).
3.  Open VS Code.
4.  Open the Command Palette with `Ctrl+Shift+P` (Windows) and run
    **Git: Clone**.
5.  Paste your repository's HTTPS URL.
6.  Choose a folder on your computer and open the cloned repository in
    VS Code.
7.  If VS Code asks whether you trust the folder, trust it only because
    you created/cloned it yourself.
8.  Open the VS Code terminal: **Terminal → New Terminal**.
9.  Confirm the terminal is inside the `screensnack` repository folder.

Do not install Node.js, React, packages, extensions, or anything else
unless there is a real blocker. VS Code's built-in Git support is enough
for this project.

## Prompt to give your AI

> Read `plan.md` if it exists in this repository. We are building
> ScreenSnack, a beginner-friendly static movie discovery website. I
> have no coding experience and have 3 hours total. We must use only
> HTML, CSS, and vanilla JavaScript, with no backend, no API keys, no
> paid tools, no frameworks, and no build step. First, help me verify
> that VS Code is open in the cloned GitHub repository. Do not start
> coding yet. Give me only the next action I need to take, in
> beginner-friendly language. Never assume I completed a step unless I
> confirm it.

If `plan.md` is not yet in the repository, that is fine: keep this
downloaded plan open separately, or copy it into the repository as
`plan.md` before continuing.

------------------------------------------------------------------------

# Phase 1 --- Build the first complete version (35 minutes)

## Goal

Generate a working first version with all core features, not just a
pretty static mockup.

## Required page structure

-   Header with ScreenSnack logo/name and navigation links.
-   Hero section with a clear headline and a short explanation.
-   Search input.
-   Genre filter.
-   Movie grid with at least 12 curated movie entries.
-   Each movie card shows title, year, genre, a short description, and a
    favorite button.
-   "Pick for me" random movie button.
-   Favorites view or toggle.
-   Empty state when a search/filter returns no matches.
-   Footer with a small note that this is a curated demo catalogue.

Use fictional sample entries if needed, or factual movie metadata
without reproducing long copyrighted descriptions. Keep descriptions
short and written in your own words.

## Prompt to give your AI

> Follow **Phase 1** of `plan.md` only. Generate a complete, functional
> first version of ScreenSnack using plain HTML, CSS, and vanilla
> JavaScript. I am a beginner, so I need copy-paste-ready code.
>
> Requirements: - Generate the **entire contents** of every required
> file, not snippets, patches, ellipses, or instructions to fill in
> missing code. - Use exactly these files at the repository root:
> `index.html`, `styles.css`, and `script.js`. - `index.html` must
> correctly link `styles.css` and `script.js`. - Include at least 12
> movie records in the JavaScript data array. - Implement title search,
> genre filtering, random movie selection, favorites, and persistent
> favorites using `localStorage`. - Avoid APIs, secrets, accounts,
> backend services, dependencies, frameworks, and build tools. - Use
> semantic HTML and accessible labels/buttons. Make the layout
> reasonably responsive. - Include sensible empty states and handle
> missing poster images gracefully. - Do not add unrequested features.
>
> Output in this order: 1. A brief list of files that will be created.
> 2. For each file, state the exact path, such as `index.html` at the
> repository root. 3. Provide the **full file contents** in separate
> code blocks labelled with the exact filename. 4. Give me precise
> instructions to create each file in VS Code and paste the code. 5.
> Give me a short checklist to test Phase 1.
>
> Do not claim the site works until I have tested it. Stop after Phase 1
> and wait for me to confirm.

## What you do

1.  In VS Code Explorer, create `index.html`, `styles.css`, and
    `script.js` at the repository root.
2.  Copy each AI-generated code block into the matching file.
3.  Save all files with `Ctrl+S`.
4.  Open `index.html` in your browser. If you do not have a local
    preview extension, you can open the file directly from File
    Explorer.
5.  Test search, genre filtering, random pick, and favorites.

**Do not continue until the site loads.** If it fails, paste the exact
browser error or describe what happened to your AI. Ask for complete
replacement contents for the affected file, with the exact path.

------------------------------------------------------------------------

# Phase 2 --- Make it polished and responsive (25 minutes)

## Goal

Improve visual quality without breaking the features.

## Design direction

-   Dark, cinematic background.
-   One bright accent color, such as coral or violet.
-   Clear typography and strong spacing.
-   Consistent movie cards with subtle hover states.
-   Search and filter controls that are easy to use.
-   Good layout on phone, tablet, and desktop.
-   Visible keyboard focus and readable contrast.
-   No excessive animations or complex UI libraries.

## Prompt to give your AI

> Follow **Phase 2** of `plan.md` only. Review the current ScreenSnack
> files that I paste below. Improve the visual design and responsive
> behavior while preserving all working features.
>
> Important: - Do not redesign the app into a different product. - Do
> not add frameworks, packages, APIs, build tools, or paid services. -
> Do not remove or rename IDs/classes/functions relied on by the
> JavaScript unless you update all related code consistently. - Keep the
> same three root files: `index.html`, `styles.css`, and `script.js`. -
> Return **complete replacement contents for every file you change**. No
> partial snippets or "insert this somewhere" instructions. - For each
> file, tell me the exact path and whether I should replace its entire
> contents. - Keep the page responsive, accessible, and fast. - If a
> feature is already working, preserve it.
>
> I will paste my current files after this prompt. First tell me which
> files you need to inspect. Then wait for me to paste them. Do not
> claim you tested the website yourself.

## What you do

1.  Paste your current files into the AI when requested.
2.  Replace the complete contents of each file it returns.
3.  Save and refresh the browser.
4.  Check the site at a narrow browser width by resizing the window.

If the original site is not working, fix that before applying visual
polish.

------------------------------------------------------------------------

# Phase 3 --- Test and fix (20 minutes)

## Manual testing checklist

-   [ ] Page opens without a blank screen.
-   [ ] All movie cards render.
-   [ ] Searching for a title filters the cards.
-   [ ] Clearing search restores the results.
-   [ ] Selecting a genre filters the cards correctly.
-   [ ] Changing or clearing the genre works.
-   [ ] "Pick for me" produces a valid movie suggestion.
-   [ ] A favorite can be added.
-   [ ] A favorite can be removed.
-   [ ] Refreshing the page preserves favorites.
-   [ ] Favorites view/toggle behaves correctly, if included.
-   [ ] Empty results show a helpful message.
-   [ ] Layout works on a narrow/mobile-width window.
-   [ ] Buttons and inputs are labelled and usable with a keyboard.
-   [ ] No obvious broken images or overflowing content.

## Prompt to give your AI

> Follow **Phase 3** of `plan.md`. Help me test ScreenSnack
> systematically. Ask me to run one test at a time and report what I
> see. Do not assume tests pass.
>
> If a bug appears: 1. Ask for the relevant file contents or exact
> browser console error. 2. Identify the likely cause in plain language.
> 3. Return complete replacement contents for every file that must
> change, with exact paths. 4. Tell me how to save and retest.
>
> Avoid adding features during testing. Prioritize broken core features,
> JavaScript errors, mobile layout problems, and broken file links. Keep
> the project deployable as a plain static website.

## How to check browser errors

In Chrome or Edge: 1. Open the website. 2. Press `F12`. 3. Select
**Console**. 4. Look for red error messages. 5. Copy the error text into
your AI chat if something fails.

Do not paste private tokens or passwords into an AI prompt. This project
should not need any.

------------------------------------------------------------------------

# Phase 4 --- Commit and push using VS Code (10 minutes)

## Preferred method: VS Code Source Control

1.  Save all files.

2.  Click the **Source Control** icon in the left sidebar.

3.  Review the changed files.

4.  If VS Code shows a `+` beside a file, it is untracked. That is
    normal for newly created files.

5.  Stage the files using the `+` beside each file, or stage all
    intended project files.

6.  Enter this commit message:

    `Build ScreenSnack movie discovery website`

7.  Click **Commit**.

8.  If asked whether to stage all changes, confirm only if you intend to
    include all listed project files.

9.  Click **Sync Changes** or **Push** when prompted.

10. If VS Code asks you to sign in to GitHub, follow the official
    sign-in flow in the browser.

11. Open your GitHub repository page and refresh it. Confirm that
    `index.html`, `styles.css`, and `script.js` are visible.

Do not commit credentials, `.env` files, passwords, or unrelated private
files. This project should not require secrets.

## Prompt to give your AI

> Follow **Phase 4** of `plan.md`. Guide me through committing and
> pushing my ScreenSnack files to the GitHub repository using VS Code's
> Source Control interface, not by assuming I know Git commands. Give me
> one action at a time and wait for confirmation. Explain what the
> buttons mean. If GitHub sign-in or a push error appears, ask me for
> the exact message and help me resolve it safely. Do not ask me to
> share passwords, access tokens, or private credentials.

------------------------------------------------------------------------

# Phase 5 --- Deploy with GitHub Pages (15 minutes)

## Steps

1.  Open your repository on GitHub in your browser.
2.  Go to **Settings**.
3.  In the left menu, select **Pages**.
4.  Under the build/deployment section, choose **Deploy from a branch**
    if that option is shown.
5.  Select branch `main` and folder `/(root)`.
6.  Click **Save**.
7.  Wait a few minutes for GitHub Pages to publish the site.
8.  Return to the Pages settings screen and open the published URL shown
    there.

The URL will usually resemble
`https://YOUR-USERNAME.github.io/screensnack/`, but use the exact URL
GitHub displays. Do not guess the username or URL.

If the repository is empty or the `index.html` file is not on the
selected branch, deployment will not work. Confirm the commit and push
succeeded first.

## Prompt to give your AI

> Follow **Phase 5** of `plan.md`. Help me deploy this static website
> using GitHub Pages for free. I have already created a GitHub
> repository and will push the code from VS Code. Guide me through the
> GitHub Settings → Pages steps one at a time. Tell me what branch and
> folder to choose and how to find the real published URL. Do not invent
> a URL or claim deployment succeeded until I open the published site
> successfully. If GitHub's interface differs from the instructions, ask
> what options I see and adapt.

------------------------------------------------------------------------

# Phase 6 --- Verify the live website (15--35 minutes)

## Final checks

-   [ ] Open the exact GitHub Pages URL in a new browser tab.
-   [ ] Refresh the page and confirm it still loads.
-   [ ] Test search and genre filtering on the deployed version.
-   [ ] Test random movie selection.
-   [ ] Add a favorite, refresh, and check persistence.
-   [ ] Check the page on mobile-width layout.
-   [ ] Check that all assets load.
-   [ ] Confirm the GitHub repository contains the latest files.
-   [ ] Keep the live URL and repository URL somewhere easy to find.

If you change code after deploying: 1. Save your files. 2. Commit and
push from VS Code. 3. Wait for GitHub Pages to rebuild. 4. Refresh the
live page.

## Prompt to give your AI

> Follow **Phase 6** of `plan.md`. Help me verify the deployed
> ScreenSnack site using the real GitHub Pages URL that I provide. Test
> the live site with me, one check at a time. If something is broken,
> determine whether it is a code issue, a wrong file path, a missing
> commit/push, or deployment still processing. Return complete
> replacement file contents when code changes are necessary, and tell me
> exactly how to commit and push them again. Do not claim success until
> I confirm the live site works.

------------------------------------------------------------------------

# Master prompt for every new phase

Copy this prompt whenever you begin a phase. Replace `PHASE NUMBER` with
the current phase.

> You are my patient senior developer and coding mentor. I am a
> first-year BTech student with no coding experience. We are building
> ScreenSnack according to `plan.md` in this repository.
>
> We have a strict total time limit of 3 hours. Follow **Phase PHASE
> NUMBER** only.
>
> Rules: 1. Treat `plan.md` as the project specification. Do not expand
> scope. 2. Use only free tools and plain HTML, CSS, and vanilla
> JavaScript. 3. Explain unfamiliar terms in simple language. 4. Give me
> one practical action at a time when I need to interact with VS Code or
> GitHub. 5. Whenever you generate or modify a file, provide the
> **complete file contents**, clearly label the exact file path, and say
> whether to create the file or replace its entire contents. 6. Never
> provide ellipses, omitted sections, placeholder comments standing in
> for implementation, or partial patches when I need copy-paste-ready
> code. 7. Do not assume you can see my local files, terminal, browser,
> or GitHub. Ask me to paste relevant code or errors when needed. 8.
> Never claim code was run, tested, committed, pushed, or deployed
> unless I confirm the result. 9. Do not ask me to share passwords,
> tokens, or secrets. 10. If the phase succeeds, summarize what I should
> have, tell me how to verify it, and stop. Wait for my confirmation
> before starting the next phase.
>
> Start by telling me the first action for this phase.

------------------------------------------------------------------------

# Emergency rules if time is running out

If you have less than 45 minutes remaining: 1. Stop adding features. 2.
Keep the three-file structure. 3. Fix only issues that prevent the page
from loading or core features from working. 4. Commit and push. 5.
Enable GitHub Pages. 6. Verify the live URL.

## Definition of done

ScreenSnack is complete when: - The website loads locally and from its
GitHub Pages URL. - Search and genre filtering work. - Random movie
selection works. - Favorites work and persist after refresh. - The
layout is usable on mobile and desktop. - The latest code is committed
and pushed to GitHub. - You have the real live URL.

A small working website that is deployed is a better first portfolio
project than a large unfinished one.
