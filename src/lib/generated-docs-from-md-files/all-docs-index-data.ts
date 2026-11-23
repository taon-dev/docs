// @taonSkipCut
// THIS FILE IS GENERATED - DO NOT MODIFY
export const TaonDev__DocsDocsIndexData = [
  {
    "filePath": "@taon-dev/analytics/README.md",
    "headingId": "analytics",
    "headingTitle": "Analytics",
    "text": "Analytics Small, anonymous visitor/session/page-view collection for Taon applications. Include TaonAnalyticsAbstractContext in your application context. Provide TaonAnalyticsTrackingService on the root Angular component and call start() once after the Taon context has initialized. The example application does this in its root component. The random browser UUID is stored in localStorage; the current session ID is stored in sessionStorage. Reloads reuse the session; 30 minutes without recorded activity starts a new one. Navigation completions record page views. Basic pointer/keyboard activity updates are throttled to once per minute. No fingerprinting or user-agent parsing is performed; device/browser/OS fields are reserved and nullable. Authenticated user IDs are taken from verified Taon session tokens, never from the collection payload. Overview shows all-time visitor, session and page-view counts. Visitors uses the standard Taon datatable. Pages View, Events and Traffic Sources are placeholders; their underlying data can be extended later. Other Angular packages can inject the same tracking service and call: await analytics.recordEvent('banner-click', { category: 'marketing', data: { bannerId: 'summer' }, }); Backend packages can inject TaonAnalyticsEventRepository and use record(). All event names use the same generic table. Session/visitor/user associations are optional for backend events. Timestamps come from the backend. Page durations end at the next navigation or the last observed activity when an expired session is next collected. There is no unload beacon or background session-expiry job; durations are approximate, not a measure of active attention. Tables follow the project's createTable/TypeORM synchronization convention. No event-specific tables or reporting charts are added.",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "cms",
    "headingTitle": "cms",
    "text": "cms",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "assets-ui",
    "headingTitle": "Assets UI",
    "text": "Assets UI The CMS Assets page lists existing files using TaonCmsContentStorageController.list({}), without an assets repository or separate listing endpoint. The shared taon-datatable displays ID (key), File Name (fileName), and Content Type (contentType), with client-side search, sorting, and pagination. Reload assets fetches the current storage list. Expanding a row requests a fresh five-minute signed URL through the existing storage controller's getPrivateUrl. Video and audio MIME types use native players with controls; other types display a download link labeled with the original filename (or the key when no filename is stored). Attachments use download=true so the streaming endpoint returns attachment disposition. Files are never fetched as blobs or buffered by the page. Collapsing a row destroys its preview/player. Listing and private URL issuance require the same authenticated toManagePosts permission as CMS uploads. Failed list, URL, and playback operations display errors with reload/retry controls.",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "categories-and-tags",
    "headingTitle": "Categories and Tags",
    "text": "Categories and Tags CMS navigation includes separate /cms/categories and /cms/tags management pages, each with its own searchable/sortable taon-datatable and create, edit, and delete actions. Both resources have a name, unique slug, and description. Categories additionally have an integer sort order and an optional parent. The category parent selector excludes the current category and its descendants; the backend also validates missing parents, self-parenting, and indirect cycles inside a serializable transaction. Tags are flat and also require unique names. The pages use TaonCmsCategoryController.getAll/saveCategory/deleteCategory and TaonCmsTagController.getAll/saveTag/deleteTag through their existing Angular API services. All operations require the same authenticated toManagePosts access as Posts and Assets. Deleting a category still used by a post or child category, or a tag still assigned to a post, is rejected. Reassign/remove those references first; deletion never silently changes posts. New/Edit Post has one nullable Category selector and searchable Tags with removable selected chips. Save/Publish sends categoryId and tagIds through the existing content API. Tag assignments remain rows in TaonCmsContentTagEntity, not strings on the post. Cancel discards selections; reopening the editor loads current assignments with listTagIds. Existing content revision, duplication, and restore semantics apply to both resources.",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "post-thumbnails",
    "headingTitle": "Post thumbnails",
    "text": "Post thumbnails New/Edit Post includes Thumbnail above Related Posts, with a preview, Upload Thumbnail, and Apply Default Placeholder. Uploaded/generated images use the same TaonCmsContentStorageController upload API and configured storage provider as other media. Posts store only thumbnailKey; image data is never stored in the content entity. Thumbnail keys are saved, duplicated, and revisioned alongside the other content fields. Cancel discards draft changes without deleting assets needed by revisions or other posts. Every successful video upload/replacement triggers browser-native extraction from that selected File. An object URL feeds a native video element; a small 64-pixel-wide canvas checks luminance at 0.25-second intervals over at most the first five seconds. A frame is usable when at least 2% of its pixels have luminance above 18, allowing small subjects in dark scenes. If none qualifies, the most visible scanned frame is used. The selected frame is encoded as WebP (or the browser's supported fallback), at up to 1280×720 while preserving aspect ratio, then uploaded as an ordinary CMS image asset. Video object URLs are always revoked; extraction never uses file.arrayBuffer(), FFmpeg, or backend video processing. Every video re-upload replaces the current thumbnail, including a manual override. Unrelated field edits never trigger extraction. Upload Thumbnail can override the result at any time. Local image previews appear before upload finishes, and their object URLs are released on replacement, cancellation, or editor destruction. A generation failure keeps the uploaded video and reports how to choose a manual/default thumbnail. Defaults are reusable cms-placeholder:<post-type> references, rendered as clean inline SVG illustrations for normal, video, audio, and attachment posts; they do not create duplicate storage objects. Stored image thumbnails use the same permission/publication checks and signed-download policy as other media, including when assets are shared by multiple posts. Run migration CmsContext_1793043000000_postThumbnails for an existing database. It adds the nullable thumbnailKey column; old posts and snapshots remain compatible. New UI and validation messages follow the existing gettext conventions, with English, Polish, and German PO catalogs. Focused regression tests: npx --no-install vitest run src/tests/taon-cms-thumbnail.spec.ts src/tests/taon-cms-taxonomy.spec.ts src/tests/taon-cms-post.spec.ts",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "courses-ui",
    "headingTitle": "Courses UI",
    "text": "Courses UI The Courses tab is a specialized post view at /cms/courses, protected by the same toManagePosts permission as Posts. listCourses selects distinct, non-archived posts with a non-empty thumbnail key and at least one related post, without loading the children. Covers reuse the post editor's default placeholders and permission-aware thumbnail links, preserve aspect ratio, and never exceed 50px in height. Published courses display Public with an unlocked icon and subtle green cells across the row; drafts display Private with a locked icon and subtle red cells. Expanding a row follows the Users table's lazy expansionTemplate pattern and calls listRelatedPosts only for that course. The nested table displays all non-archived first-level children, without pagination or recursive expansion. Both tables reuse the Posts table's Duplicate, Edit/details, and Delete/archive actions, including confirmations, optimistic versions, errors, and navigation to the normal post editor. Deleting a child reloads the course list and its expansions; no separate course entity or management logic is introduced. Reload courses fetches the latest list from the server.",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "posts-ui",
    "headingTitle": "Posts UI",
    "text": "Posts UI",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "json-table-posts",
    "headingTitle": "JSON Table posts",
    "text": "JSON Table posts Posts can use the json-table content type to store structured rows in the existing post body field. The versioned document stores ordered columns, labels, types, and rows, so edits, duplication, and existing revision restore continue to use the normal CMS persistence workflow. The reusable taon-spreadsheet-table component is exported from the package and can be used outside the CMS. The editor supports typed cells, row and column editing/reordering, JSON preview, JSON/CSV imports, and data-only/full-document JSON plus CSV exports. Date cells use ISO YYYY-MM-DD strings, and empty typed cells serialize as null (except explicitly entered empty strings in string columns). JSON Table API methods getJsonTableBySlug and getPublicJsonTableBySlug return rows only. Both apply the existing content read checks; the public method rejects drafts, archived posts, and permission-protected content. CSV parsing supports quoted fields, escaped quotes, multiline cells, UTF-8 BOM, comma/semicolon/tab delimiters, and formula escaping on export. XLSX parsing/export and related-post batch creation are not currently included.",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "content-editing-and-template-variables",
    "headingTitle": "Content editing and template variables",
    "text": "Content editing and template variables The post body has Editor (ngx-editor), Raw HTML, and read-only Preview tabs. All tabs use the same draft body; switching tabs does not rewrite HTML or discard unsaved edits. WYSIWYG edits serialize the editor's supported HTML schema, so use Raw for markup outside that schema. Insert variable has Site and Post submenus and inserts at the current rich-text or Raw selection. Preview and read-only post views use the exported resolveTemplateVariables helper from taon-cms-content/taon-cms-template-variables. It supports only {{frontendUrl}}, {{site.name}}, {{currentYear}}, {{post.title}}, {{post.url}}, {{post.id}}, and {{post.thumbnailUrl}}. Unknown and unavailable values (including IDs before creation) remain unchanged. Values are HTML-escaped, never evaluated or recursively expanded, and the final HTML is rendered through Angular's normal sanitizer. Resolved content is never written back to the draft, API payload, database, or revisions. Frontend origin comes from the existing API context; site name comes from the generated website.title environment setting via the content provider and config service. Post URLs use <frontend origin>/posts/<encoded slug>; the host application must supply that public route. Thumbnail variables reuse the existing thumbnail preview/permission-aware URL loading, including default placeholders. Signed image URLs are resolved only for display, not stored. TaonCmsPostsBackofficeComponent displays posts in taon-datatable. Create navigates to /cms/posts/new, reusing TaonCmsPostComponent in add mode without an ID. Saving opens the created post; cancelling returns to the list. /cms/posts/:id loads an existing post with its current view/edit controls. The list uses getAll with the datatable's client-side filtering, sorting, and pagination; archived posts remain visible so they can be restored. The list's Duplicate icon and the post's Duplicate button (after Delete) call the same duplicateContent backend operation and open the new post. Duplication preserves normal fields, tags, publication state, and all existing media keys and body attachment references without copying or uploading files. It clears related posts and application hooks, regenerates ID/version/timestamps, and records an initial revision. Assigned read permissions and the inheritance flag are preserved; an inherited effective permission set becomes independently assigned because related links are not copied. Titles/slugs receive matching COPY<n> / -copy<n> suffixes, skipping collisions in either field. Copying a copy removes existing copy suffixes and advances the number. Use the post component with a content entity returned by the API: <taon-cms-post [post]=\"post\" mode=\"view\" (changed)=\"post = $event\" /> <taon-cms-post mode=\"add\" (changed)=\"onCreated($event)\" /> <taon-cms-post [post]=\"post\" mode=\"view-clean\" /> Modes are view, edit, add, and view-clean. The public view-clean mode has no management controls. changed emits the entity returned by the backend, deleted reports archiving, duplicated emits the newly created copy for the host to open, and cancelled reports cancellation. mode supports two-way binding. The editor uses contenteditable title/excerpt/body fields instead of a body textarea. The body is HTML, rendered with Angular sanitization; pasted text is inserted without external markup. A URL slug is required by the create API and is editable below the article. Saving or publishing uses the current entity version; publishing while editing saves the draft and publishes in one request. The Material radio selector above the title selects TaonCmsContentType.Normal, Video, Audio, or Attachment. New posts default to Normal. Video, audio, and attachment posts show a primary-media upload section directly below the URL slug. Uploads use TaonCmsContentStorageController (Taon's bucket storage) and store the returned key in videoKey, audioKey, or attachmentKey, never in body. The editor previews video/audio with native controls and shows an attachment filename with a download/open action. Existing media can be replaced or removed. Changing type only changes which media section is visible; all keys and files are retained. Uploads, Replace, and Remove change the draft; Save/Publish persists the keys, and Cancel discards draft changes. Remove clears only the selected key, not the stored file, so revision history remains usable. Files uploaded to discarded drafts are also retained. Upload failures display an error and keep the draft intact. All post uploads (including Replace) display a determinate Material progress bar and the actual transferred percentage, starting at 0%. An XHR transport adapter adds browser upload events to the existing Taon request pipeline and storage upload endpoint; authentication middleware, retries, and response decoding stay in that pipeline. 100% transferred is not treated as server success: the draft key changes only after a valid successful response. Failure clears progress, shows an error, and retains the previous file. Upload state resets after every attempt. Both Assets and Post video/audio players use preload=\"none\" and direct storage URLs: rendering a preview does not initiate media downloading. Manual playback still uses the storage endpoint's existing HTTP Range support. Publish and Unpublish are mutually exclusive. Unpublish sends a version-checked partial update with status: 'draft' only. It does not save unsaved editor changes, restore content, delete files, or remove revisions; publication history and the previous publication timestamp are retained. Public hook reads, media URL issuance, and unsigned storage downloads check the current publication state. TaonCmsContentApiService exposes private and public getVideoLinkBySlug/getPublicVideoLinkBySlug, getAudioLinkBySlug/getPublicAudioLinkBySlug, and getAttachmentLinkBySlug/getPublicAttachmentLinkBySlug methods. Private URL issuance checks the post's assigned permission codes (or super-user access); public URL issuance is limited to published posts without permissions. Private download URLs are signed, key- and storage-controller-bound tokens that expire after five minutes; no temporary-link database or KV records are created. Storage downloads validate these tokens and support streamed HTTP Range requests for video/audio. Node storage persists content type and original filename metadata alongside the object; Cloudflare R2 stores the same metadata with the object. Below the media section, the related-post list shows IDs and titles with remove buttons. Add related post opens TaonRelatedPostChooserComponent (taon-related-post-chooser), with search by ID, title, or slug. The current post and already selected posts are excluded. Links are one-way and changes are staged until Save or Publish; Cancel discards them, including on new posts. Below Allow Read only with Permissions, Apply permissions to related posts enables live permission inheritance along this post's outgoing related links. It defaults to off. Related posts show the effective permissions using the existing chooser, disable permission changes, and identify the source post. Changing the source's permissions immediately affects subsequent backend access checks; no inherited permission IDs are copied to children. Existing independent permissions remain dormant while inheritance is active and become effective again when the source disables inheritance or removes the related link. Inheritance is transitive: a child passing permissions to its own related posts passes its effective source permissions. Related links remain a general many-to-many graph. Only enabled inheritance edges must form a forest: multiple sources for a child and inheritance cycles fail with HTTP 409. Create, update, related-link mutations, and restore validate this graph transactionally at serializable isolation. Attempts to change a child's independent permission IDs while it inherits also fail with HTTP 409. The backend resolves effective permissions for hook content, media URL issuance, and public storage policy. Super-user access retains its existing bypass. listPermissions(id) returns effective permissions; getPermissionConfiguration(id) additionally identifies the live source. Create/update accept applyPermissionsToRelatedPosts, which is also revisioned. Older snapshots preserve the current flag when it was not yet stored. Run CmsContext_1792579000000_postPermissionInheritance (registered in the CMS migration exports) before deployment to add the boolean column with default false. A deployment using schema synchronization can create it from the entity. Revert opens TaonCmsRevisionChooserComponent, which lists revisions through TaonCmsContentRevisionApiService.listRevisions and restores through restoreContent. The service calls the existing content-controller endpoints; no revision snapshots are copied in the UI. Legacy revisions without a complete snapshot are shown but cannot be selected. Failed operations keep the editor or revision dialog open and show an error. Run node --test src/tests/cms-posts.test.cjs for the focused Posts regression suite using the workspace's existing TypeScript, TypeORM, SQL.js, RxJS, and Angular dependencies. It exercises actual SQLite transactions/relations, inheritance and rollback, publication/access policy, upload events and failures, and editor state. Editor tests use real Angular signals with mocked injection, not a rendered TestBed DOM. The test loader transpiles the isomorphic sources without launching a Taon application.",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/README.md",
    "headingId": "content-api",
    "headingTitle": "Content API",
    "text": "Content API TaonCmsContentApiService exposes Observable-based methods: api.createContent({ type: TaonCmsContentType.Normal, title: 'Hello', slug: 'hello', body: 'Post content', categoryId: 1, tagIds: [1, 2], }); api.updateContent(id, { title: 'Updated', expectedVersion: post.version }); api.listRevisions(id); api.restoreContent(id, { revisionNumber: 1, expectedVersion: post.version }); api.deleteContent(id, post.version); api.listRelatedPosts(id); api.addRelatedPost(id, relatedPostId, post.version); api.deleteRelatedPost(id, relatedPostId, post.version); Subscribe to execute each request. Creation starts at version 1 and saves a complete revision. Updates and restores increment the version and save a new revision. Send the current version as expectedVersion; stale edits fail with HTTP 409 instead of overwriting another edit. Existing version-0 posts can be updated and their previous state is recorded before replacement. Updates are partial: omitted fields are preserved; null clears nullable fields, and tagIds: [] removes all tag links. Category and tag IDs must already exist. The content type is optional on creation and defaults to TaonCmsContentType.Normal; explicit types must be enum values. Primary media keys accept strings or null and are included in revision snapshots. Restoring a complete snapshot from before primary-media support preserves the current media keys. Create/update also accept relatedPostIds. Omission preserves links on update; relatedPostIds: [] clears them. IDs must exist, self-links are rejected, and duplicates are deduplicated. Related-post mutations return the updated post with its relatedPosts array and use the same version checks and revision history. listRelatedPosts loads live related entities without recursively loading their own links. Removing a link never archives or deletes either post. Slug conflicts fail with HTTP 409; missing content, categories, tags, or revisions fail with HTTP 404. Invalid input fails with HTTP 400. Deletion archives the post and creates a revision; it does not delete the post, revisions, assets, comments, permissions, shared categories/tags, or stored files. Existing getAll behavior remains unchanged and includes archived posts. Restoring copies all editable post fields (including status and publication date), category, tag links, and related-post links; it preserves the post ID and creation date and leaves assets, comments, and permissions unchanged. All writes are transactional. Complete snapshots created before related-post support restore with no related links. Older revisions containing only title/body have no complete snapshot and cannot be fully restored (HTTP 409). The nullable snapshot column must be added through your deployment's schema synchronization/migration before using this API. Related posts also require the taon_cms_related_posts join table, created by schema synchronization/migration from TaonCmsContentEntity's relation metadata. Primary media also requires nullable varchar columns videoKey, audioKey, and attachmentKey, and the type column's default is now normal. Migrate legacy article types to normal and file types to attachment in existing content and revision snapshots before using enum-validated writes/restores. The content context includes its category, tag, content-tag, and revision dependencies. Assets, comments, and permissions need no new repository operations for archive-based deletion. Media uses the post's existing permissions; it does not add separate video, audio, or attachment permissions. The content storage controller exposes only uploads and token/public-policy-validated downloads; physical file deletion remains unavailable through this controller.",
    "api": false
  },
  {
    "filePath": "@taon-dev/cms/TODO.md",
    "headingId": "todo",
    "headingTitle": "TODO",
    "text": "TODO",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "taon-architecture",
    "headingTitle": "Taon architecture",
    "text": "Taon architecture Taon is a TypeScript framework and CLI for building applications and reusable libraries. A standalone Taon project keeps its source in one src/ tree. The CLI uses that source to build the library or application artifacts configured for the project. Taon workspaces can contain several projects. Each project has a root taon.jsonc that identifies its type and defines its project-specific configuration.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "identify-a-taon-project",
    "headingTitle": "Identify a Taon project",
    "text": "Identify a Taon project Open taon.jsonc in the directory you are inspecting. Its type field tells you how to navigate the project. type Project kind Where to look next isomorphic-lib Standalone project Open src/ for the application and library source. container Container project Look for child directories with their own taon.jsonc. The snippets below show only the field that identifies the project type. An existing taon.jsonc can contain additional settings.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "standalone-projects",
    "headingTitle": "Standalone projects",
    "text": "Standalone projects A standalone project declares isomorphic-lib in its root taon.jsonc. { \"type\": \"isomorphic-lib\" } A standalone project owns its src/ tree. It can expose reusable code through its library entry point and use the same code in its application entry points. For example, a project can export a context and its building blocks for other Taon projects to use, while also providing an application that runs them. A standalone project can live on its own or inside a Taon container. It may have its own Git repository. The type field describes the Taon project structure. Check the Git root separately when working across projects. my-feature/ taon.jsonc src/ lib/ index.ts app.ts",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "container-projects",
    "headingTitle": "Container projects",
    "text": "Container projects A container declares container in its root taon.jsonc. { \"type\": \"container\" } A container groups standalone projects and can also contain nested containers. Each child project has its own root configuration. A workspace can therefore contain reusable libraries, consuming applications, and groups of related projects at different levels. workspace/ taon.jsonc shared-feature/ taon.jsonc src/ applications/ taon.jsonc website/ taon.jsonc src/ In this layout, workspace/ and applications/ are containers. shared-feature/ and website/ are standalone projects. If website/ consumes a feature exported by shared-feature/, follow the import to find the implementation. Reusable behavior belongs in the project that provides it. Website-specific configuration and integration belong in website/.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "navigate-a-workspace",
    "headingTitle": "Navigate a workspace",
    "text": "Navigate a workspace Start with the taon.jsonc in the directory you are inspecting. In a container, look for child directories with their own taon.jsonc. Apply the same check when you encounter a nested container. In a standalone project, open src/ and identify the entry point or module relevant to your task. If the task spans projects, trace imports from the consuming application to the standalone project that exports the feature.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "standalone-project-entry-points",
    "headingTitle": "Standalone project entry points",
    "text": "Standalone project entry points The files below are common entry points. Check the project's taon.jsonc and src/ tree to see which artifacts it supports. Path Purpose src/lib/index.ts Exports the project's reusable library code. src/app.ts Application entry point for the Angular frontend and Node.js backend. src/app.electron.ts Entry point for an Electron application. src/app.vscode.ts Entry point for a VS Code extension. src/cli.ts Entry point when the project produces a CLI tool. src/global.scss Global application styles.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "how-an-application-is-assembled",
    "headingTitle": "How an application is assembled",
    "text": "How an application is assembled A project owns source code and build configuration. A context assembles runtime building blocks such as controllers, entities, repositories, and providers. A reusable project can export a context through its library entry point so a consuming application can compose it with its own contexts. See Contexts and Dependency injection for registration, inheritance, and injection patterns.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "isomorphic-source-and-runtime-targets",
    "headingTitle": "Isomorphic source and runtime targets",
    "text": "Isomorphic source and runtime targets Taon can build browser and backend versions of the same TypeScript source. Code regions determine which parts of a file are included in each output. Check the target before choosing a dependency, accessing a secret, or using a runtime-specific API. Target Where backend logic runs What to account for Node.js In a Node.js process. Keep server credentials and server-only integrations in the backend. WebSQL In the browser, with a browser-local database. Browser code and storage are accessible to the user. Public webhooks require a separately reachable backend. Cloudflare Worker In a Cloudflare Worker. Use Worker-compatible dependencies, bindings, and storage adapters. Check compatibility before using Node.js APIs. Electron In the Electron backend, with an Angular UI that communicates over IPC. Keep backend and renderer code in the appropriate build regions. A project's supported targets depend on its configuration and dependencies. See Isomorphic code regions for how to write code that builds for the intended runtime.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "build-and-run-a-standalone-project",
    "headingTitle": "Build and run a standalone project",
    "text": "Build and run a standalone project The Taon framework README lists Node.js 22 or later as a prerequisite. From the standalone project root, start the library watch build in one terminal. taon build:lib taon build:watch:lib Start the Node.js application in a second terminal (ng server). Taon watch build lib mode is needed when we want to see ng serve changes. taon app:normal For projects that support other runtime targets, the CLI also provides the following development commands. Command Target taon app:websql Browser-local WebSQL backend taon app:cloudflare Cloudflare Worker taon app:electron Electron taon app:normal Normal NodeJS See the CLI command guide.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/architecture.md",
    "headingId": "further-reading",
    "headingTitle": "Further reading",
    "text": "Further reading Controllers Entities Migrations",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/dependency-injection.md",
    "headingId": "dependency-injection-naming-conventions",
    "headingTitle": "Dependency Injection Naming Conventions",
    "text": "Dependency Injection Naming Conventions",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/dependency-injection.md",
    "headingId": "angular-services",
    "headingTitle": "Angular services",
    "text": "Angular services Use the full class-based name for injected application services. class MyExampleComponent { // GOOD - name based on the injected class myApiService = inject(MyApiService); // BAD api = inject(MyApiService); }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/dependency-injection.md",
    "headingId": "short-names-for-common-angular-dependencies",
    "headingTitle": "Short names for common Angular dependencies",
    "text": "Short names for common Angular dependencies Short, conventional names are allowed for well-known Angular framework dependencies when their meaning is obvious. Examples: class MyExampleComponent { cdr = inject(ChangeDetectorRef); route = inject(ActivatedRoute); router = inject(Router); injector = inject(Injector); destroyRef = inject(DestroyRef); location = inject(Location); } Do not unnecessarily expand conventional Angular names: // NOT REQUIRED changeDetectorRef = inject(ChangeDetectorRef); activatedRoute = inject(ActivatedRoute); For application-specific services, always prefer the full class-based name.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/dependency-injection.md",
    "headingId": "taon-angular-services",
    "headingTitle": "Taon Angular services",
    "text": "Taon Angular services Use the full class-based name of controllers injected into API services. class MyExampleApiService extends TaonBaseAngularService { userController = this.inject(UserController); } Use the full class-based name of providers injected into config services. class MyExampleConfigService extends TaonBaseAngularService { myUserProvider = this.inject(MyUserProvider); } Avoid shortened or generic names such as: // BAD controller = this.inject(UserController); userCtrl = this.inject(UserController); provider = this.inject(MyUserProvider); userProv = this.inject(MyUserProvider);",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/dependency-injection.md",
    "headingId": "taon-framework-di",
    "headingTitle": "Taon framework DI",
    "text": "Taon framework DI For Taon repositories, providers, controllers, and other injectable building blocks, use the full class-based name. class MyExampleController { myUserRepository = this.inject(MyUserRepository); myBookProvider = this.inject(MyBookProvider); } Avoid shortened or generic names: // BAD repo = this.inject(MyUserRepository); userRepo = this.inject(MyUserRepository); provider = this.inject(MyBookProvider); bookProv = this.inject(MyBookProvider);",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/dependency-injection.md",
    "headingId": "general-rule",
    "headingTitle": "General rule",
    "text": "General rule The injected property name should normally be the camelCase version of the injected class name: MyApiService -> myApiService UserController -> userController MyUserProvider -> myUserProvider MyUserRepository -> myUserRepository The exception is common Angular framework dependencies with established, unambiguous short names such as cdr, route, and router.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/framework.md",
    "headingId": "taon-framework-building-blocks",
    "headingTitle": "Taon framework building blocks",
    "text": "Taon framework building blocks A Taon application is assembled from building blocks registered in a context. Controllers expose APIs, repositories handle backend data access, and Angular services connect the UI to those APIs and to context configuration. Start with Architecture if you need to locate the right project or understand its runtime targets. Start with Contexts if you are adding a feature to an existing project.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/framework.md",
    "headingId": "find-the-right-building-block",
    "headingTitle": "Find the right building block",
    "text": "Find the right building block If you need to… Read Register building blocks, compose reusable contexts, or initialize an application context Contexts Expose a REST endpoint, add entity CRUD, or return a structured API error Controllers Call a Taon controller from an Angular application API services Map a TypeScript class to a database table Entities Query entities or encapsulate custom backend operations Repositories Store and retrieve typed values by key KV repositories Define context-scoped configuration or resolve environment values Providers Expose context configuration to Angular components Configuration services Intercept requests across a context, a controller, or an individual endpoint Middleware and interceptors React to entity lifecycle events Subscribers Evolve a database schema or understand how database modes affect existing data Migrations",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/framework.md",
    "headingId": "how-the-pieces-fit-together",
    "headingTitle": "How the pieces fit together",
    "text": "How the pieces fit together For a feature such as listing users, an Angular component calls an API service. The service calls a Taon controller endpoint. The controller uses a repository to query the User entity and returns the result. The context registers the backend building blocks that the feature uses. Configuration follows its own path. A provider holds context-scoped configuration, and an Angular configuration service exposes the values the UI needs. Middleware can intercept the API request, while subscribers react to entity events and migrations evolve the database over time.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/framework.md",
    "headingId": "related-guides",
    "headingTitle": "Related guides",
    "text": "Related guides Dependency injection explains how to resolve classes from the appropriate context. Isomorphic code regions explains which code is included in browser and backend builds.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "internationalization-i18n",
    "headingTitle": "Internationalization (i18n)",
    "text": "Internationalization (i18n) All user-visible text that may need localization should use the Taon translation system.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "frontend",
    "headingTitle": "Frontend",
    "text": "Frontend Use the Taon translation system in Angular components, services, directives, and other frontend code.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "component-setup",
    "headingTitle": "Component setup",
    "text": "Component setup Create the translation helper once at file level: import { Taon } from 'taon/src'; import { Translation } from '@taon-dev/i18n/src'; const t = Translation.for( Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, ); @Component({ selector: 'my-component', // ... }) export class MyComponent { //#region injections t = t.for(this); //#endregion signalLabel = this.t.signal.gettext('Label signal'); signalWithParams = this.t.signal.gettext('Params: [[ test ]]', { test: 'test param', }); normalLabel = this.t.gettext('Normal label'); normalLabelWithContext = this.t.gettext( 'Normal label', {}, 'context of translation', ); refresh = new BehaviorSubject({}); valueInsideComponent = 'dynamic!'; observableLabel$ = this.refresh.asObservable().pipe( switchMap(() => this.t.$.gettext('I am [[ dynamicParam ]]', { dynamicParam: this.valueInsideComponent, }), ), ); }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "choosing-the-translation-api",
    "headingTitle": "Choosing the translation API",
    "text": "Choosing the translation API Choose the simplest API appropriate for the value. 1. Signal translation Prefer Signal-based translations for values that should reactively update when the active language changes: signalLabel = this.t.signal.gettext('Label signal'); Parameters are supported: signalWithParams = this.t.signal.gettext('Params: [[ test ]]', { test: 'test param', }); Use [[ paramName ]] placeholders for dynamic translation parameters. 2. Normal synchronous translation Use gettext() when a reactive value is not needed: normalLabel = this.t.gettext('Normal label'); Use the optional context argument when identical source text may require different translations depending on its meaning: normalLabelWithContext = this.t.gettext( 'Normal label', {}, 'context of translation', ); 3. Observable translation Use the Observable API only when the translated value naturally belongs to an existing RxJS flow: observableLabel$ = this.refresh.asObservable().pipe( switchMap(() => this.t.$.gettext('I am [[ dynamicParam ]]', { dynamicParam: this.valueInsideComponent, }), ), ); Do NOT introduce an Observable solely for translation when a normal or Signal-based translation is sufficient.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "template-usage",
    "headingTitle": "Template usage",
    "text": "Template usage Translations may be consumed directly in Angular templates: <span>{{ signalLabel() }}</span> <span>{{ signalWithParams() }}</span> <span>{{ normalLabel }}</span> <span>{{ normalLabelWithContext }}</span> <span>{{ observableLabel$ | async }}</span> <span>{{ t.gettext('This also works!') }}</span> <!-- only when TranslateDirective included in imports --> <span translate>This will also be translated!</span>",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "frontend-rules",
    "headingTitle": "Frontend rules",
    "text": "Frontend rules Translate user-visible text when appropriate. Do NOT hardcode text in TypeScript when that text should be localized. Prefer Signals for reactive translations. Use normal gettext() for simple synchronous translations. Use t.$.gettext() only when working naturally inside an RxJS flow. Do NOT create RxJS streams just to translate a value. Use translation context when the same source text can have different meanings. Use [[ param ]] placeholders instead of manually concatenating dynamic values into translation strings. if you use TranslateDirective => you still needs to assign \"t\" variable to Component body t = t.for(this);",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "backend",
    "headingTitle": "Backend",
    "text": "Backend Backend translation works differently from frontend translation. Taon provides a request-specific translation instance through the third argument of the controller handler. The language is associated with the current request and may be detected from request information such as cookies.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "important-do-not-create-the-frontend-translation-helper",
    "headingTitle": "Important: do NOT create the frontend translation helper",
    "text": "Important: do NOT create the frontend translation helper Do NOT do this in a Taon backend controller: // 🚫 DO NOT USE THIS FOR CONTROLLER REQUEST TRANSLATION const t = Translation.for( Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, ); This pattern is intended for Angular/frontend classes such as components, services, and directives. For controller request translation, always use the t supplied to the request handler: return async (req, res, { t }) => { // use t here };",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "backend-translations-are-synchronous",
    "headingTitle": "Backend translations are synchronous",
    "text": "Backend translations are synchronous Inside the request handler, use the synchronous translation API. Do NOT use: t.signal t.$ translation Signals translation Observables Use: t.gettext(...) or, when translating arbitrary/dynamic text: t.translate(...)",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "translate-using-the-request-language",
    "headingTitle": "Translate using the request language",
    "text": "Translate using the request language @TaonController({ className: 'ExampleController', }) export class ExampleController extends TaonBaseController { @GET() helloWorld( @Query('yourName') yourName: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { return `${t.gettext('Hello')} : ${yourName}`; }; //#endregion } } Here, t uses the language detected for the current request.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "force-a-specific-language",
    "headingTitle": "Force a specific language",
    "text": "Force a specific language When a response must use a specific language regardless of the request language, explicitly change it: @GET() helloWorldInFrench( @Query('yourName') yourName: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { await t.changeFileLang('fr-FR'); return `${t.gettext('Hello')} : ${yourName}`; }; //#endregion } Do not force a language unless the feature specifically requires it.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "translate-arbitrary-text",
    "headingTitle": "Translate arbitrary text",
    "text": "Translate arbitrary text For arbitrary text that is not a predefined gettext() translation entry, use translate(): @POST() translateSomethingUnknown( @Body('bigText') bigText: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { t.changeFileLang('es-ES'); return t.translate(bigText); }; //#endregion }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "backend-rules",
    "headingTitle": "Backend rules",
    "text": "Backend rules Always obtain t from the third controller-handler argument: { t }. Treat t as request-specific. Use t.gettext() for known application strings. Use t.translate() for arbitrary/dynamic text. Use t.changeFileLang(...) only when the endpoint explicitly needs to override the detected request language. Do NOT create a frontend-style Translation.for(...) instance for controller request translation. Do NOT use Signals or Observables for backend translation. Do NOT introduce frontend translation patterns into backend controller handlers.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/i18n.md",
    "headingId": "cli",
    "headingTitle": "CLI",
    "text": "CLI Extracting translation from .ts, html to .po files taon lang:extract",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "isomorphic-code-regions",
    "headingTitle": "Isomorphic code regions",
    "text": "Isomorphic code regions Taon builds shared TypeScript source for different runtimes. The CLI processes the region markers below when it creates browser, WebSQL, CommonJS, or ESM output. Put explanatory prose outside code examples; keep the exact region markers in code because they are part of the build input.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "backend-code",
    "headingTitle": "Backend code",
    "text": "Backend code Use @backend for a block that belongs to a backend build and can be omitted from ordinary browser output. Use @backendFunc when a function body is backend-only and the browser build must retain a function that returns undefined. function getNodeVersion(): string | undefined { //#region @backendFunc return process.version; //#endregion } @websql and @websqlFunc are for code that belongs to Node.js and WebSQL backend builds. WebSQL mode runs backend logic in the browser; it is not the same as an ordinary browser build. function getBackendValue(): string | undefined { //#region @websqlFunc return 'backend-value'; //#endregion } Use a shared fallback after a @backend region when the browser needs a different implementation: function getRuntimeName(): string { //#region @backend return process.release.name; //#endregion return 'browser'; }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "browser-only-and-websql-only-code",
    "headingTitle": "Browser-only and WebSQL-only code",
    "text": "Browser-only and WebSQL-only code Use @browser for code that should be emitted for the browser and omitted from backend output. Imports can also use an inline marker at the end of the import statement: import { TaonAdminService } from 'taon/src'; // @browser Use @websqlOnly for code that is specific to WebSQL browser mode and should not be emitted for Node.js: //#region @websqlOnly const websqlOnlyValue = 'browser backend'; //#endregion",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "commonjs-and-esm-differences",
    "headingTitle": "CommonJS and ESM differences",
    "text": "CommonJS and ESM differences @esmRemove marks code to remove from the ESM backend output, such as a Node.js API that is unavailable in a Cloudflare Worker. @cjsRemove marks code to remove from the CommonJS backend output. function loadValue(): string { if (isCloudflareWorker()) { //#region @esmRemove return readFromNodeFilesystem(); //#endregion return readFromWorkerBinding(); } return readFromNodeFilesystem(); } Cloudflare Workers use an ESM runtime and do not provide the full Node.js runtime. Keep Worker bindings and APIs in the ESM-compatible path and test the actual Worker artifact; a successful Node.js build does not verify Worker compatibility.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/isomorphic-code-regions.md",
    "headingId": "file-suffixes-and-imports",
    "headingTitle": "File suffixes and imports",
    "text": "File suffixes and imports Use .browser.ts for files intended only for browser-side code and .backend.ts for Node.js-only code when the project's build recognizes those suffixes. Angular component files are browser UI. Do not infer runtime support from a generic .service.ts or .routes.ts name; inspect the target project's build rules and examples. Inline import annotations such as // @browser are build markers and must remain at the end of the import statement. Do not place the marker above or below the import. Avoid unmarked Node.js built-ins in shared files; use a region or a runtime-neutral Taon API. For available targets and transport differences, see Architecture and Transport layer.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/realtime.md",
    "headingId": "realtime-communications",
    "headingTitle": "Realtime communications",
    "text": "Realtime communications Depending on where you use you backend/frontend - taon framework uses different mechanism for realtime communication: normal NodeJs backend => TCP(upgrade) socket communication based on socket.io (UDP in future) electron backend => IPC for realtime communication websql browser backend => mock of realtime communication based on RxJS library cloudfalre (realtime not supported) You can listen/subscribe to custom events or entities events in every simple fashion. @TaonSubscriber({ className: 'RealtimeClassSubscriber', }) export class RealtimeClassSubscriber extends TaonBaseSubscriberForEntity { listenTo() { return UserEntity; } afterInsert(entity: any) { console.log(`AFTER INSERT: `, entity); MainContext.realtime.server.triggerEntityTableChanges(UserEntity); } } // listen change on backend async function start() { MainContext.realtime.server .listenChangesCustomEvent(saveNewUserEventKey) .subscribe(async () => { console.log('save new user event'); await realtimeUserController.saveNewUser(); }); } // listen changes on frontend export class RealtimeClassSubscriberComponent { ngOnInit(): void { console.log('realtime client subscribers start listening!'); MainContext.realtime.client .listenChangesEntityTable(UserEntity) .pipe(untilDestroyed(this), debounceTime(1000)) .subscribe(message => { console.log('realtime message from class subscriber ', message); }); } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/special-files/models.md",
    "headingId": "models",
    "headingTitle": "Models",
    "text": "Models create FOLDER_NAME.models.ts for validatros insert in this file backend/frontend models (classes, interfaces, types, enums) use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/special-files/utils.md",
    "headingId": "utils",
    "headingTitle": "Utils",
    "text": "Utils create FOLDER_NAME.utils.ts for any kind of helpers things from utils file should be resued between backend and frontned use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/special-files/validators.md",
    "headingId": "validator",
    "headingTitle": "Validator",
    "text": "Validator create FOLDER_NAME.validators.ts for validatros insert in this file backend/frontend validators use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/api-services.md",
    "headingId": "taon-api-service",
    "headingTitle": "Taon API service",
    "text": "Taon API service An API service injects Taon controllers and provides an application-scoped place to adapt requests and responses or maintain state. Avoid providedIn: 'root' when the service must be scoped to an injected Taon context. @Injectable() export class UserApiService extends TaonBaseAngularService { protected userController = this.inject(UserController); getCrudController() { return this.userController; } getAll() { return this.userController.getAll() .request() .observable .pipe(map(response => response.body.json)); } async getTime() { const response = await this.userController.whatTimeIsIt().request(); return response.body.text; } } request().observable exposes the observable request path; awaiting request() uses the promise path. The response body provides parsed text or JSON and other response representations according to the controller's response type.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "taon-config-service",
    "headingTitle": "Taon Config Service",
    "text": "Taon Config Service A Taon Config Service acts as a bridge between Taon providers and Angular components, exposing context-specific configuration and frontend-friendly properties. Use a Config Service to: Inject Taon providers associated with a specific Taon context. Access frontend-specific configuration exposed by Taon providers. Expose convenient properties and methods for Angular components without requiring them to interact directly with providers. Keep configuration context-scoped, rather than sharing a single service instance across the entire Angular application.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "example",
    "headingTitle": "Example",
    "text": "Example @Injectable({}) export class UserConfigService extends TaonBaseAngularService { userProvider = this.inject(UserProvider); get isLoginAvailable(): boolean { return this.userProvider.login.enabled; } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "important-notes",
    "headingTitle": "Important Notes",
    "text": "Important Notes",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "context-scoped-dependency-injection",
    "headingTitle": "Context-scoped dependency injection",
    "text": "Context-scoped dependency injection Do not use providedIn: 'root' when declaring a Taon Config Service. Unlike regular Angular services registered globally, Taon Config Services must be scoped to their corresponding Taon context. This ensures that different contexts can maintain independent configurations without sharing a single service instance across the entire application.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "provider-injection",
    "headingTitle": "Provider injection",
    "text": "Provider injection Taon Config Services use this.inject() to access Taon providers. Currently, only Taon controllers can be injected into Config Services. Controllers act as the bridge between backend and frontend functionality.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "recommended-usage",
    "headingTitle": "Recommended usage",
    "text": "Recommended usage Prefer exposing simple getters and methods from your Config Service instead of accessing provider configuration directly throughout Angular components. This keeps components clean, centralizes context-specific configuration, and separates Taon framework logic from UI implementation.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "taon-contexts",
    "headingTitle": "Taon contexts",
    "text": "Taon contexts A context is Taon's registration and runtime boundary for framework building blocks such as controllers, entities, repositories, providers, migrations, and subcontexts. Register a class in the context that owns its behavior rather than constructing it directly.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "abstract-and-active-contexts",
    "headingTitle": "Abstract and active contexts",
    "text": "Abstract and active contexts An abstract context is reusable library configuration. An active context combines reusable contexts with application-specific host configuration and runtime settings. The CLI generates host configuration for deployable app contexts; keep application-specific configuration in the application's context. import { Taon, TaonBaseContext } from 'taon/src'; export const MainAbstractContext = Taon.createContext(() => ({ contextName: 'MainAbstractContext', abstract: true, contexts: { TaonBaseContext, }, })); An active app context can include the abstract context and use its registered building blocks: export const AppContext = Taon.createContext(() => ({ ...HOST_CONFIG['AppContext'], contexts: { MainAbstractContext, }, })); Use TaonBaseContext where the application needs Taon's standard base context. Add controllers, entities, repositories, providers, subscribers, migrations, and database settings to the context configuration that owns them. Keep class names and context names unique where Taon uses them for registration or generated API paths.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "initialization",
    "headingTitle": "Initialization",
    "text": "Initialization Initialize each active context before using its APIs or resolving its registered services. Abstract contexts are included by active contexts rather than initialized as application entry points. Database and migration behavior depends on the active context's configuration; see Migrations.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "related-building-blocks",
    "headingTitle": "Related building blocks",
    "text": "Related building blocks Controllers Repositories Providers Entities Configuration services",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/controllers.md",
    "headingId": "taon-controllers",
    "headingTitle": "Taon controllers",
    "text": "Taon controllers Taon controllers define backend endpoints that frontend code can call through an Angular API service. Inject controllers only in *.api.service.ts files. Angular components call the API service. Add a custom endpoint Use @TaonController to define a controller and @GET() to expose a method as a GET endpoint. The example below returns a plain string. Keep the @websqlFunc region markers in the example because Taon uses them as build directives. @TaonController({ className: 'UserController' }) export class UserController extends TaonBaseController { @GET() helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } } Generate CRUD endpoints for an entity Extend TaonBaseCrudController<User> and set entityClassResolveFn to return the User entity class. The base controller provides standard CRUD methods such as getAll() and update(). You can add custom endpoints alongside those methods. @TaonController({ className: 'UserController' }) export class UserController extends TaonBaseCrudController<User> { entityClassResolveFn = () => User; @GET() whatTimeIsIt(): Taon.Response<string> { //#region @websqlFunc return async () => new Date().toString(); //#endregion } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/controllers.md",
    "headingId": "error-handling-in-controllers",
    "headingTitle": "Error handling in controllers",
    "text": "Error handling in controllers Prefer Taon.error() when an endpoint needs to return a structured error. It throws immediately, so execution stops at the call. Supply message and status, and include code when clients need a stable identifier for the error. Approach Behavior Taon.error() Recommended for structured errors with an HTTP status and an optional application error code. throw '…' Throws a plain string message. throw new Error('…') Throws an Error object with a message and stack trace. res.status(...).json(...) Writes an Express response directly. Prefer Taon.error() for Taon endpoints. Return immediately after sending the response to stop the handler. The example selects an error-handling approach using the errorType query parameter. When the parameter is omitted, the endpoint returns a greeting. @TaonController({ className: 'SampleController' }) export class SampleController extends TaonBaseController { @GET() helloWorld( @Query('errorType') errorType?: 'short' | 'stack' | 'customCode' | 'taonError', ): Taon.Response<string> { //#region @websqlFunc return async (_req, res) => { if (errorType === 'taonError') { Taon.error({ message: 'This is a custom Taon error.', code: 'CUSTOM_ERR', status: 499, }); } if (errorType === 'short') { throw 'A short error message.'; } if (errorType === 'stack') { throw new Error('An error with a stack trace.'); } if (errorType === 'customCode') { res.status(444).json({ customErrorMessage: 'A custom error response.', }); return; } return 'Hello, world!'; }; //#endregion } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "taon-entities",
    "headingTitle": "Taon entities",
    "text": "Taon entities A Taon entity is a TypeScript class that maps to a database table. Taon builds on TypeORM entities. You can also use an entity class as a data transfer object (DTO) when its fields match the API contract. Define a separate DTO when an endpoint accepts or exposes only part of the entity.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "define-an-entity",
    "headingTitle": "Define an entity",
    "text": "Define an entity Decorate the class with @TaonEntity and set className to the class name. Use Taon column decorators to define persisted fields. In this example, @StringColumn() maps location to a database column. The @websql region markers are Taon build directives. Keep them around the column decorator as shown. @TaonEntity({ className: 'Project' }) export class Project extends TaonBaseEntity { //#region @websql @StringColumn() //#endregion location?: string; } The ? makes location optional in TypeScript. Configure database nullability and defaults through the column definition.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "use-the-base-entity-with-id-and-version-fields",
    "headingTitle": "Use the base entity with ID and version fields",
    "text": "Use the base entity with ID and version fields Extend TaonBaseAbstractEntity when you want Taon to provide id and version fields. Declare the fields specific to your entity in the subclass. @TaonEntity({ className: 'User' }) export class User extends TaonBaseAbstractEntity { //#region @websql @StringColumn() //#endregion name?: string; }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "inject-an-entity-repository",
    "headingTitle": "Inject an entity repository",
    "text": "Inject an entity repository Use this.injectRepo() in your Taon context to get the repository for an entity. Pass the entity class so Taon can resolve the corresponding repository. private readonly userRepository = this.injectRepo(User);",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "keep-entities-compatible-with-sqlite",
    "headingTitle": "Keep entities compatible with SQLite",
    "text": "Keep entities compatible with SQLite Shared entity definitions must work with SQLite-backed Taon runtimes, including browser WebSQL mode. Follow the column decorators and mappings already used by the project. Prefer Taon column decorators, such as @StringColumn(), for common field types. Avoid declaring raw int column types in shared entities. For whole numbers, use the project's SQLite-compatible integer column mapping. Avoid database-specific column types such as PostgreSQL jsonb, native enums, and array columns in shared entities. Use a representation supported by each target runtime. Keep column defaults, indexes, and constraints portable. Verify that any database expression used by the entity works on each target. When changing the schema of an existing entity, check the corresponding migration against the same runtimes as the entity.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "taon-kv-repositories",
    "headingTitle": "Taon KV Repositories",
    "text": "Taon KV Repositories Taon KV repositories provide typed key-value storage through injectable repositories. The API is inspired by key-value systems such as Redis and Cloudflare Workers KV, with a document-oriented approach to storing structured values similar to MongoDB. These comparisons describe the design inspiration. The examples below use Taon’s repository API. Use a KV repository when you read or replace a value by a known key, such as application settings or a cached snapshot. Call the repository from backend code. Browser UI code should access the data through a Taon API endpoint.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "define-a-repository",
    "headingTitle": "Define a repository",
    "text": "Define a repository Extend TaonBaseKvRepository and declare the keys and value types in its type parameter. Decorate the class with @TaonRepository. In this example, the users key stores a User[]. setUsers() replaces the array stored under that key, and getUsers() reads the array as a single value. @TaonRepository({ className: 'UserKvRepository', }) export class UserKvRepository extends TaonBaseKvRepository<{ users: User[]; }> { async setUsers(users: User[]): Promise<void> { //#region @websqlFunc await this.set('users', users); //#endregion } async getUsers(): Promise<User[]> { //#region @websqlFunc return await this.get('users'); //#endregion } } The @websqlFunc region markers are Taon build directives. Keep them in the repository methods as shown.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "inject-the-repository-into-a-context",
    "headingTitle": "Inject the repository into a context",
    "text": "Inject the repository into a context Add a field to your Taon context and initialize it with injectKvRepository(). private readonly userKvRepository = this.inject( UserKvRepository, );",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "choose-the-right-storage-model",
    "headingTitle": "Choose the right storage model",
    "text": "Choose the right storage model Use a KV repository when callers usually work with the whole value under a known key. For example, UserKvRepository can store a snapshot of a user list. If callers need to look up individual users, filter by fields, or update records independently, use an entity repository for those operations.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/middlewares.md",
    "headingId": "taon-middleware-and-interceptors",
    "headingTitle": "Taon middleware and interceptors",
    "text": "Taon middleware and interceptors Taon middleware lets you intercept backend requests and frontend API calls. Server hooks follow the Express middleware pattern. Client hooks follow the Angular HTTP interceptor pattern and work with Axios responses and RxJS. Middleware classes are injectable singletons within their Taon context and can participate in inheritance. Scope Server hook Client hook Entire context interceptServer() interceptClient() All methods of one controller interceptServerMethod() interceptClientMethod() One controller method interceptServerMethod() interceptClientMethod() Controller-wide and endpoint-specific middleware use the same hooks. Where you register the middleware determines which methods it applies to. Intercept server requests across a context Implement interceptServer() to handle server requests across the context. Call next() to continue processing the request. @TaonMiddleware({ className: 'ContextServerMiddleware' }) export class ContextServerMiddleware extends TaonBaseMiddleware { interceptServer({ req, next, }: TaonServerMiddlewareInterceptOptions): Promise<void> | void { console.log(req?.url); next(); } } Intercept client requests across a context Implement interceptClient() to handle client API calls across the context. Return next.handle(req) to forward the request and pass its response back to the caller. @TaonMiddleware({ className: 'ContextClientMiddleware' }) export class ContextClientMiddleware extends TaonBaseMiddleware { interceptClient({ req, next, }: TaonClientMiddlewareInterceptOptions): Observable<AxiosResponse<any>> { console.log(req?.url); return next.handle(req); } } Intercept a controller method on the server Use interceptServerMethod() for middleware attached to a controller or endpoint. The second argument provides information about the matched endpoint, including its method name, Express path, and HTTP request type. You can use async and await before calling next(). Set interceptServer = undefined to keep this middleware scoped to the controller or endpoint on the server. @TaonMiddleware({ className: 'MethodServerMiddleware' }) export class MethodServerMiddleware extends TaonBaseMiddleware { interceptServer = undefined; interceptServerMethod( { next }: TaonServerMiddlewareInterceptOptions, { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo, ): Promise<void> | void { console.log(methodName, expressPath); next(); } } Intercept a controller method on the client Use interceptClientMethod() to intercept client calls to the controller or endpoint where the middleware is registered. You can use RxJS operators on the response from next.handle(req). This example uses tap() to inspect the response status. Set interceptClient = undefined to keep this middleware scoped to the controller or endpoint on the client. @TaonMiddleware({ className: 'MethodClientMiddleware' }) export class MethodClientMiddleware extends TaonBaseMiddleware { interceptClient = undefined; interceptClientMethod( { req, next }: TaonClientMiddlewareInterceptOptions, { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo, ): Observable<AxiosResponse<any>> { console.log(methodName, expressPath); return next.handle(req).pipe( tap(response => console.log(response.status)), ); } } Apply middleware to every endpoint in a controller Add the middleware to @TaonController({ middlewares: ... }). Spread parentMiddlewares to retain the middleware supplied by the parent. @TaonController({ className: 'SessionController', middlewares: ({ parentMiddlewares }) => ({ ...parentMiddlewares, MethodServerMiddleware, }), }) export class SessionController extends TaonBaseController { @GET() helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } } Apply middleware to one endpoint Add the middleware to the endpoint decorator’s middlewares option. Here, MethodClientMiddleware applies only to helloWorld(). The @websqlFunc region markers in the controller examples are Taon build directives. @TaonController({ className: 'SessionController' }) export class SessionController extends TaonBaseController { @PUT({ middlewares: ({ parentMiddlewares }) => ({ ...parentMiddlewares, MethodClientMiddleware, }), }) helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "taon-migrations",
    "headingTitle": "Taon Migrations",
    "text": "Taon Migrations Taon provides a database migration system built on top of TypeORM, supporting both traditional Node.js backends and WebSQL browser backends . Migration classes are generated automatically, can be shared between Taon projects, and can be versioned in Git alongside application code. Migrations can be executed locally or integrated into CI/CD workflows to keep database schemas synchronized with application changes.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "1-migration-workflow",
    "headingTitle": "1. Migration Workflow",
    "text": "1. Migration Workflow The typical migration workflow is: DATABASE SCHEMA CHANGE │ ▼ CREATE MIGRATION │ ▼ IMPLEMENT up() IMPLEMENT down() │ ▼ REVIEW & ENABLE │ ▼ RUN MIGRATIONS │ ┌───────────┴───────────┐ │ │ ▼ ▼ NODE.JS BACKEND WEBSQL BACKEND │ │ ▼ ▼ SQL DATABASE BROWSER DATABASE Taon manages migration discovery and execution through its context system. Each migration belongs to a specific Taon context, allowing applications with multiple contexts to manage their database changes independently.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "2-interactive-migration-menu",
    "headingTitle": "2. Interactive Migration Menu",
    "text": "2. Interactive Migration Menu The easiest way to manage migrations is through Taon's interactive terminal interface. taon migration Short alias: taon m The terminal menu provides access to migration operations such as creating, running, and reverting migrations. You can also execute these operations directly using CLI commands.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "3-creating-migrations",
    "headingTitle": "3. Creating Migrations",
    "text": "3. Creating Migrations Before generating migrations, start the application at least once so Taon can detect and initialize its active contexts. Then stop the application and execute the command from the Taon project root. taon migration:create my-new-migration Short alias: taon mc my-new-migration Taon generates migration classes for all detected contexts in: src/lib/migrations/",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-generated-structure",
    "headingTitle": "Example Generated Structure",
    "text": "Example Generated Structure src/ └── lib/ └── migrations/ ├── MainContext_1735315075962_firstMigration.ts ├── AdminContext_1735315075962_firstMigration.ts └── ReportingContext_1735315075962_firstMigration.ts Each generated migration is associated with its corresponding active context.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "migration-safety",
    "headingTitle": "Migration Safety",
    "text": "Migration Safety Newly generated migrations are disabled by default. isReadyToRun(): boolean { return false; } After implementing and reviewing the migration, enable it: isReadyToRun(): boolean { return true; } This prevents incomplete migration classes from being executed accidentally.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "4-writing-migrations",
    "headingTitle": "4. Writing Migrations",
    "text": "4. Writing Migrations Taon migrations extend TaonBaseMigration and use TypeORM's QueryRunner API. Each migration implements two methods: up() — applies the database changes. down() — reverses the changes when the migration is reverted. Use TypeORM's QueryRunner methods for schema operations such as creating tables, adding columns, and modifying indexes. Raw SQL can be used when the TypeORM API does not support a required operation.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-migration",
    "headingTitle": "Example Migration",
    "text": "Example Migration @TaonMigration({ className: 'MainContext_1735315075962_firstMigration', }) export class MainContext_1735315075962_firstMigration extends TaonBaseMigration { anyTaonRepository = this.inject(AnyTaonRepository); isReadyToRun(): boolean { return true; } async up(queryRunner: QueryRunner): Promise<void> { await queryRunner.addColumn( 'users', new TableColumn({ name: 'displayName', type: 'varchar', isNullable: true, }), ); } async down(queryRunner: QueryRunner): Promise<void> { await queryRunner.dropColumn('users', 'displayName'); } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "injecting-taon-repositories",
    "headingTitle": "Injecting Taon Repositories",
    "text": "Injecting Taon Repositories Migrations can access Taon repositories using this.inject(). userRepository = this.inject(UserRepository); This can be useful for data transformations requiring application-level logic. For schema changes, prefer working directly with QueryRunner to keep the migration explicit and predictable.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "transactions",
    "headingTitle": "Transactions",
    "text": "Transactions Generated migration templates include transaction handling. Preserve the generated transaction behavior when modifying migration code: BEGIN TRANSACTION │ ▼ EXECUTE up() │ ┌───┴───┐ │ │ SUCCESS ERROR │ │ ▼ ▼ COMMIT ROLLBACK Database engines may differ in their support for transactional schema changes. Always test migrations against the target database.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "5-running-migrations",
    "headingTitle": "5. Running Migrations",
    "text": "5. Running Migrations (Usually you don't need to do that since taon release command includes migration run for every new release/deploy ) Execute pending migrations across all detected contexts: taon migration:run Short alias: taon mr Unlike starting the full application, this command initializes the necessary application contexts, executes migrations, and then exits.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "6-reverting-migrations",
    "headingTitle": "6. Reverting Migrations",
    "text": "6. Reverting Migrations Taon supports reverting migrations using their timestamps. For example, given the migration: MainContext_1735315075962_firstMigration Use the timestamp: taon migration:revert 1735315075962 The terminal menu can also guide you through the revert process. A migration's down() method defines how its changes are reversed. Important: Reverting schema changes may cause data loss, particularly when dropping columns or tables. Always review the migration and back up important data before reverting production databases.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "7-database-recreation-modes",
    "headingTitle": "7. Database Recreation Modes",
    "text": "7. Database Recreation Modes Taon contexts support different database initialization strategies through DBRecreateMode. The selected mode determines whether existing database data is preserved or recreated.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "available-modes",
    "headingTitle": "Available Modes",
    "text": "Available Modes export enum DBRecreateMode { DROP_DB__RUN_MIGRATIONS = 'DROP_DB__RUN_MIGRATIONS', PRESERVE_DATA__RUN_MIGRATIONS = 'PRESERVE_DATA__RUN_MIGRATIONS', } (Websql mode) by default run DROP_DB__RUN_MIGRATIONS and you can change it to PRESERVE_DATA__RUN_MIGRATIONS inside '@taon-dev/sudo' package backoffice. The enum is available from the taon/src package.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "behavior-comparison",
    "headingTitle": "Behavior Comparison",
    "text": "Behavior Comparison Database mode Node.js backend WebSQL browser backend DROP_DB__RUN_MIGRATIONS Drops and recreates the database and entity tables, then saves default entities. Existing data is deleted and migrations are skipped. Recreates the database and entity tables on every page reload, deleting existing data. Migrations are skipped and default entities are saved. PRESERVE_DATA__RUN_MIGRATIONS Preserves existing data, runs pending migrations, and saves default entities. Preserves data across reloads and saves default entities. On the first switch to this mode, existing migrations are marked as completed without execution; subsequent runs execute pending migrations.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "development-mode-recreate-database",
    "headingTitle": "Development Mode — Recreate Database",
    "text": "Development Mode — Recreate Database DROP_DB__RUN_MIGRATIONS is the default development mode. It is useful when: Working on early database schemas. Testing entities without preserving existing data. Frequently changing database structures. Recreating a clean development environment. However, this mode deletes existing database data. Despite the mode's name, migrations are skipped during database recreation.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "persistent-mode-preserve-data",
    "headingTitle": "Persistent Mode — Preserve Data",
    "text": "Persistent Mode — Preserve Data PRESERVE_DATA__RUN_MIGRATIONS keeps existing database data and applies pending migrations. This mode is appropriate when database contents must survive application restarts or page reloads. It is particularly important for production applications and persistent WebSQL environments.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "8-sharing-migrations-between-projects",
    "headingTitle": "8. Sharing Migrations Between Projects",
    "text": "8. Sharing Migrations Between Projects Taon migrations can be shared between standalone projects and container projects, just like other Taon framework classes. This is particularly useful for reusable application libraries that provide their own database entities and repositories. For example: COMPANY CONTAINER │ ┌───────────┴───────────┐ │ │ ▼ ▼ AUTH APP-LIB CUSTOMER APP-LIB │ │ Auth Entities Customer Entities Auth Repositories Customer Repositories Auth Migrations Customer Migrations │ │ └───────────┬───────────┘ │ ▼ MAIN APPLICATION │ ▼ TAON CONTEXTS │ ▼ DATABASES This allows database schema changes to remain close to the functionality that depends on them. Shared migration classes should be managed carefully to avoid duplicate registration or conflicting execution across contexts.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "9-raw-migrations-and-database-snapshots",
    "headingTitle": "9. Raw Migrations and Database Snapshots",
    "text": "9. Raw Migrations and Database Snapshots Schema migrations are not always the best solution for restoring large amounts of development data. Since DROP_DB__RUN_MIGRATIONS recreates the database by default in development mode, developers may need a convenient way to save and restore database contents. Taon provides raw migration and data snapshot functionality through: @taon-dev/sudo The Sudo backoffice can be used to create, export, and restore database snapshots.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "schema-migrations-vs-raw-data-snapshots",
    "headingTitle": "Schema Migrations vs. Raw Data Snapshots",
    "text": "Schema Migrations vs. Raw Data Snapshots Feature Schema migrations Raw migrations / snapshots Main purpose Evolve database structure Save and restore database contents Implementation TypeORM migration classes Sudo backoffice Version control Migration source files Exported snapshot files Typical use Production schema evolution Development data restoration Reversible Through down() when implemented Through restoring a suitable snapshot",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-development-workflow",
    "headingTitle": "Example Development Workflow",
    "text": "Example Development Workflow DEVELOPMENT DATABASE │ ▼ EXPORT DATA SNAPSHOT │ ▼ MODIFY ENTITIES │ ▼ RECREATE DATABASE │ ▼ RESTORE DATA SNAPSHOT │ ▼ CONTINUE DEVELOPMENT This is useful for preserving representative development data while working with frequently changing entity definitions. Snapshots should be compatible with the target schema. Restoring data into a changed database structure may require transformation or additional validation.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "10-cli-command-reference",
    "headingTitle": "10. CLI Command Reference",
    "text": "10. CLI Command Reference Command Alias Description taon migration taon m Open the interactive migration menu taon migration:create taon mc Generate migration classes for detected contexts taon migration:run taon mr Run pending migrations and exit taon migration:revert <timestamp> — Revert migration changes using a timestamp",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "create",
    "headingTitle": "Create",
    "text": "Create taon migration:create my-new-migration taon mc my-new-migration",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "run",
    "headingTitle": "Run",
    "text": "Run taon migration:run taon mr",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "revert",
    "headingTitle": "Revert",
    "text": "Revert taon migration:revert 1794523651172",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "interactive-menu",
    "headingTitle": "Interactive Menu",
    "text": "Interactive Menu taon migration taon m",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "11-recommended-practices",
    "headingTitle": "11. Recommended Practices",
    "text": "11. Recommended Practices Keep migrations in version control. Migration history should evolve alongside application code. Review generated migrations before enabling them. Generated classes start with isReadyToRun() returning false for a reason. Implement both up() and down(). Reversible migrations make development and recovery easier, although some data changes cannot be fully reversed. Prefer TypeORM's QueryRunner API. Use raw SQL when necessary and account for database-specific behavior. Test migrations in both Node.js and WebSQL when targeting both runtimes. Shared migration classes do not guarantee identical database engine behavior. Use persistent database mode when data matters. Avoid destructive database recreation outside disposable development environments. Use Sudo snapshots for development data. Schema migrations and database snapshots solve different problems. Integrate migrations into release workflows. Validate database changes before deploying application code that depends on them.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "summary",
    "headingTitle": "Summary",
    "text": "Summary Taon migrations provide a unified way to manage database evolution across Node.js and browser-based WebSQL applications. The migration system integrates with Taon's context architecture, supports reusable migration classes, and can participate in automated build and deployment workflows. One migration architecture. Multiple execution environments. Consistent database evolution.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/providers.md",
    "headingId": "taon-providers",
    "headingTitle": "Taon providers",
    "text": "Taon providers Injectable (service like) classes singleton (in context) classes. Use this class for storing: -configurations for bother backend and frontend resolved environment variables @TaonProvider({ className: 'TaonConfigProvier', }) export class TaonConfigProvier extends TaonBaseProvider { config = { lang: 'en', country: 'Poland' } SECRET_ENV: string; GOOGLE_ID:string; async _() { //#region @backend this.SECRET_ENV = await ENV_NODE_APP_SECRET_ENV(); //#endregion GOOGLE_ID = '123123123123123123123123' } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/repositories.md",
    "headingId": "taon-repositories",
    "headingTitle": "Taon repositories",
    "text": "Taon repositories Taon repositories are injectable classes that encapsulate backend data access, similar to TypeORM custom repositories. Use repositories in backend code. Browser UI code accesses their functionality through Taon controller endpoints. Base class When to use it TaonBaseRepository<Entity> Use it for a repository backed by a Taon entity, with built-in CRUD operations and optional custom queries. TaonBaseCustomRepository Use it for backend operations that need their own methods, such as calling an external service. Create an entity repository Extend TaonBaseRepository<User> and set entityClassResolveFn to return the User entity class. Use this.repo to run TypeORM queries against that entity. In this example, findByEmail() looks up a user by email. The @websqlFunc region is a Taon build directive that allows the method implementation to run in the WebSQL backend. @TaonRepository({ className: 'UserRepository' }) export class UserRepository extends TaonBaseRepository<User> { entityClassResolveFn = () => User; async findByEmail(email: string) { //#region @websqlFunc return this.repo.findOne({ where: { email } }); //#endregion } } Create a custom repository Extend TaonBaseCustomRepository when your repository provides custom backend operations. This example delegates checkout URL creation to an application-specific Stripe integration. Implement createCheckoutUrl using your project's Stripe client and server-side configuration. The @backendFunc region is a Taon build directive that keeps the method implementation on the server. @TaonRepository({ className: 'TaonStripeApiRepository' }) export abstract class TaonStripeApiRepository extends TaonBaseCustomRepository { async getCheckoutUrl(): Promise<string> { //#region @backendFunc return this.createCheckoutUrl(); //#endregion } protected abstract createCheckoutUrl(): Promise<string>; }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/taon-building-blocks/subscriber.md",
    "headingId": "taon-subscribers",
    "headingTitle": "Taon subscribers",
    "text": "Taon subscribers Injectable classes for subscribing to entity events base on https://typeorm.io/listeners-and-subscribers You should use Subscribers only inside server code. @TaonSubscriber({ className: 'TaonSubscriber', }) export class TaonSubscriber extends TaonBaseSubscriberForEntity { listenTo() { return UserEntity; } afterInsert(entity: any) { console.log(`AFTER INSERT: `, entity); MainContext.realtime.server.triggerEntityTableChanges(UserEntity); } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/transport-layer.md",
    "headingId": "transport-layer",
    "headingTitle": "Transport layer",
    "text": "Transport layer Taon selects transport according to the application target. The transports are not interchangeable: realtime support and access to platform APIs depend on the runtime. Target Backend location Communication and runtime notes Node.js Node.js server HTTP request/response and Socket.IO-based realtime communication are available. Node.js APIs are available only in the backend. Cloudflare Worker Worker runtime Use request/response APIs supported by the Worker target. Taon's Cloudflare realtime strategy is not implemented, so do not rely on Socket.IO or realtime subscriptions there. WebSQL In the browser Backend logic runs in the browser. It is not a remote Node.js server, and cross-tab realtime communication is not implemented. Electron Electron main process Renderer-to-backend communication uses Electron IPC. Keep privileged Node.js APIs in the backend. Use the target-specific build and test path to verify transport behavior. A successful Node.js build does not prove that code is compatible with a Cloudflare Worker, WebSQL, or Electron. For code that must vary by runtime, use the markers described in Isomorphic code regions. For target setup and limitations, see Architecture.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/what-to-avoid.md",
    "headingId": "what-to-avoid",
    "headingTitle": "What to avoid",
    "text": "What to avoid",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/what-to-avoid.md",
    "headingId": "finish-migration-transactions-correctly",
    "headingTitle": "Finish migration transactions correctly",
    "text": "Finish migration transactions correctly let say we have migration started: await queryRunner.startTransaction(); to end transaction: await queryRunner.release(); // IT IS NOT ENOUGH // and this may cause weird errors // proper 'end' of transaction await queryRunner.commitTransaction(); await queryRunner.release();",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/what-to-avoid.md",
    "headingId": "use-current-timestamp-instead-now",
    "headingTitle": "Use CURRENT_TIMESTAMP instead NOW()",
    "text": "Use CURRENT_TIMESTAMP instead NOW() SQlite does not support NOW()",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/docs/what-to-avoid.md",
    "headingId": "use-integer-instead-int",
    "headingTitle": "Use integer instead int",
    "text": "Use integer instead int SQlite does not support int",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/examples/my-entity.worker.README.md",
    "headingId": "taon-worker-microservice",
    "headingTitle": "Taon Worker/Microservice",
    "text": "Taon Worker/Microservice How to start worker/service // your app app/cli function async startWorker() { const worker = new MyEntityWorker( 'unique-for-the-whole-os-id-for-service', 'command for starting this service. ex: my-entity-cli startWorker' ); const ctrl = await worker.cliStartProcedure(); // by default started as child_process // }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "angular-syntax-and-state",
    "headingTitle": "Angular Syntax and State",
    "text": "Angular Syntax and State",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "template-syntax",
    "headingTitle": "Template syntax",
    "text": "Template syntax Prefer modern Angular control-flow syntax: @if @else @for @switch @defer Use legacy structural directives such as *ngIf and *ngFor only when there is a concrete reason to do so. Do not convert modern Angular control flow back to legacy syntax.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "signals-and-observables",
    "headingTitle": "Signals and Observables",
    "text": "Signals and Observables Prefer Angular Signals for component state and reactive values used directly by templates. Prefer: signal() computed() effect() when an actual side effect is required Do not introduce an Observable when a Signal provides a simpler solution. Use RxJS Observables when they naturally fit the problem, especially for: asynchronous streams, REST/API calls, event streams, RxJS operators and stream composition, existing APIs that already expose Observables. Do not convert an Observable to a Signal merely for the sake of using Signals. Avoid unnecessary BehaviorSubject / Subject state when a Signal can represent the same state more clearly.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "services",
    "headingTitle": "Services",
    "text": "Services",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "api-services",
    "headingTitle": "API services",
    "text": "API services Inject the project's api.service.ts into components when communication with the Taon REST API is required. Do not create duplicate HTTP/API logic directly inside components when the existing API service can be used.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "configuration-services",
    "headingTitle": "Configuration services",
    "text": "Configuration services Inject the project's config.service.ts / configs.service.ts when a component needs global frontend/backend configuration. Do not duplicate global configuration as local component state.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "state-services",
    "headingTitle": "State services",
    "text": "State services Create a dedicated .state.service.ts only when the component architecture actually requires shared or sufficiently complex state. Do NOT create a state service automatically for every component. Prefer keeping simple state directly inside the component using Signals. Create a state service when, for example: state is shared between multiple components, state must survive component recreation, state logic becomes large enough that keeping it in the component hurts readability, multiple components need to coordinate through the same state.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "dependency-injection",
    "headingTitle": "Dependency Injection",
    "text": "Dependency Injection Always prefer Angular's inject() API over constructor injection. GOOD: private readonly router = inject(Router); private readonly changeDetectorRef = inject(ChangeDetectorRef); private readonly apiService = inject(MyApiService); BAD: constructor( private router: Router, private changeDetectorRef: ChangeDetectorRef, private apiService: MyApiService, ) {} Use constructor injection only when there is a specific technical reason that prevents using inject().",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "injection-naming",
    "headingTitle": "Injection naming",
    "text": "Injection naming Use descriptive names based on the injected class/service. GOOD: private readonly userService = inject(UserService); private readonly notificationService = inject(NotificationService); private readonly sessionApiService = inject(TaonSessionApiService); Short conventional names are allowed for common Angular/router dependencies where they improve readability: private readonly cdr = inject(ChangeDetectorRef); private readonly router = inject(Router); private readonly route = inject(ActivatedRoute); Do not use arbitrary abbreviated names for application services.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/angular.md",
    "headingId": "component-internationalization-i18n",
    "headingTitle": "Component Internationalization (i18n)",
    "text": "Component Internationalization (i18n) All user-visible component text should use the Taon translation system when appropriate. For all internationalization rules and examples, follow: ../docs/i18n.md Before adding, modifying, or reviewing any user-visible text in Angular code, read and follow ../docs/i18n.md. Treat ../docs/i18n.md as the single source of truth for: translation setup Signal translations synchronous translations Observable translations template translations translation parameters translation context deciding which strings should and should not be translated Do not duplicate or invent alternative i18n patterns in Angular code. If this file and ../docs/i18n.md appear to conflict regarding internationalization, ../docs/i18n.md takes precedence.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/backend.md",
    "headingId": "backend",
    "headingTitle": "Backend",
    "text": "Backend",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/backend.md",
    "headingId": "isomorphic-source",
    "headingTitle": "Isomorphic source",
    "text": "Isomorphic source Do not assume that a .ts file containing backend code is backend-only. Taon transforms shared source for different runtimes. Isolate code that uses runtime-specific APIs with the appropriate markers: @backend and @backendFunc for backend code. @websql and @websqlFunc for code included in Node.js and WebSQL builds. @browser for browser-only code. @websqlOnly for WebSQL-only code. @esmRemove and @cjsRemove for backend module-format differences. See Isomorphic code regions for marker semantics and examples.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/backend.md",
    "headingId": "runtime-differences",
    "headingTitle": "Runtime differences",
    "text": "Runtime differences Taon supports these distinct backend targets: Node.js has access to Node.js APIs according to the app's environment and permissions. Cloudflare Workers use an ESM runtime with Worker APIs and do not provide the full Node.js runtime. WebSQL runs backend logic in the browser. Electron uses a main-process backend with privileged Node.js APIs. Review Transport layer before relying on networking, realtime communication, or platform APIs across targets.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/backend.md",
    "headingId": "runtime-specific-functions",
    "headingTitle": "Runtime-specific functions",
    "text": "Runtime-specific functions Wrap a function body in @backendFunc when it requires Node.js-only APIs. The browser build keeps the function and returns undefined. export namespace Utils { export const createBackendFile = () => { //#region @backendFunc /* ... */ //#endregion }; } Use @websqlFunc instead when the implementation should be included in both Node.js and WebSQL builds. export namespace Utils { export const createBackendFile = () => { //#region @websqlFunc /* ... */ //#endregion }; }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "where-environment-variables-are-stored",
    "headingTitle": "Where environment variables are stored",
    "text": "Where environment variables are stored Each Taon Project stores its environment variables — both secret and public — in: /env.ts # Main root file with environment variables /environments/**/env.*.ts # Environment files for specific build artifacts/environments",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "example-content-of-an-env-ts-file",
    "headingTitle": "Example content of an env.*.ts file",
    "text": "Example content of an env.*.ts file import type { EnvOptions } from 'tnp/src'; const env: Partial<EnvOptions> = { website: { domain: 'example.domain.com', title: 'My Example Website', useDomain: true, }, config: { /* * A string wrapped with TAON_ENCRYPTED_START and TAON_ENCRYPTED_END * means that the value is encrypted. * * You can decode it by running `taon env:decode` and providing * the correct master password. */ secretApiKey: () => `$$$TAON_ENCRYPTED_START$$asdasdasdasdasdasdBQ==$$$TAON_ENCRYPTED_END$$$`, publicKey: 'ANY_PUBLIC_KEY', }, }; export default env;",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "starting-an-environment-configuration-from-scratch",
    "headingTitle": "Starting an environment configuration from scratch",
    "text": "Starting an environment configuration from scratch You can initially define your environment file with a plain-text secret: import type { EnvOptions } from 'tnp/src'; const env: Partial<EnvOptions> = { website: { domain: 'example.domain.com', title: 'My Example Website', useDomain: true, }, config: { /* * Use `taon env:encode` with a master password of your choice * to encrypt this value. * * After encryption, the value will be wrapped with * TAON_ENCRYPTED_START and TAON_ENCRYPTED_END markers. */ secretApiKey: () => `my secret api key that should NOT be committed to the repository in decoded form!`, publicKey: 'ANY_PUBLIC_KEY', }, }; export default env; Important: Do not commit the file while secret values are still stored in plain text. Run taon env:encode first.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "how-to-access-environment-variables",
    "headingTitle": "How to access environment variables",
    "text": "How to access environment variables Use the generated environment variables from: /src/lib/env/**",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "secret-variables",
    "headingTitle": "Secret variables",
    "text": "Secret variables Secret variables are generated as functions returning promises and must be awaited: // DO NOT USE THESE VARIABLES ON THE FRONTEND! export const ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY = (): Promise<string> => decodeEnv('MY_SECRET_API_KEY'); // DO NOT USE THESE VARIABLES ON THE FRONTEND!",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "public-variables",
    "headingTitle": "Public variables",
    "text": "Public variables Public variables are usually regular strings, numbers, or booleans: // SAFE TO USE ON BOTH FRONTEND AND BACKEND export const ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY = 'ANY_PUBLIC_KEY';",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "preferred-way-of-using-environment-variables",
    "headingTitle": "Preferred way of using environment variables",
    "text": "Preferred way of using environment variables",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "1-create-a-provider",
    "headingTitle": "1. Create a provider",
    "text": "1. Create a provider Use a provider as the central place where generated environment variables are resolved and assigned. @TaonProvider({ className: 'MyEntityProvider', }) export class MyEntityProvider extends TaonBaseProvider { declare SECRET_API_KEY: string; declare PUBLIC_KEY: string; async _() { // Assign environment variables in one place. this.PUBLIC_KEY = ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY; //#region @backend this.SECRET_API_KEY = await ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY(); //#endregion /* * This method is executed during context initialization, * so it is the preferred place to resolve and assign * environment variables. */ } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "2-inject-the-provider-into-controllers-repositories-etc",
    "headingTitle": "2. Inject the provider into controllers, repositories, etc.",
    "text": "2. Inject the provider into controllers, repositories, etc. This is the preferred way to access environment variables on the backend: inject the provider. @TaonProvider({ className: 'MyEntityRepository', }) export class MyEntityRepository extends TaonBaseRepostory { protected myEntityProvider = this.inject(MyEntityProvider); @GET() getSecret(): Taon.Response<string> { //#region @websqlFunc return async (req, res) => { return requestToExternalApi({ secret: this.myEntityProvider.SECRET_API_KEY, }); }; //#endregion } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "3-create-config-service-ts-to-access-public-variables-on-the-frontend",
    "headingTitle": "3. Create config.service.ts to access public variables on the frontend",
    "text": "3. Create config.service.ts to access public variables on the frontend This is the preferred way to access public environment variables on the frontend: inject a config service. import { inject, Injectable } from '@angular/core'; import { TaonBaseAngularService } from 'taon/src'; @Injectable() export class MyEntityConfigService extends TaonBaseAngularService { protected myEntityProvider = this.inject(MyEntityProvider); requestWithPublicKey() { fetchSomething({ publicKey: this.myEntityProvider.PUBLIC_KEY, }); } } @Component({ selector: 'my-example-component', // ... }) export class MyExampleComponent { myEntityConfigService = inject(MyEntityConfigService); ngOnInit() { this.myEntityConfigService.requestWithPublicKey(); } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "what-not-to-do",
    "headingTitle": "What NOT to do",
    "text": "What NOT to do Do not run taon env:decode before starting a Taon build, such as: taon build:watch:lib taon app You will be asked for the master password when necessary. During the build, Taon automatically creates a decoded copy of: /env.ts /environments/** inside the tmp-env folder. Do not worry if an encrypted value looks different after running taon env:decode or another environment operation. For example: $$$TAON_ENCRYPTED_START$$...$$$TAON_ENCRYPTED_END$$$ The encrypted representation may change. This is normal. The encryption mechanism can rotate the encrypted representation while the master password remains the same. Never commit unencrypted secret variables. Do NOT commit: // UNSAFE — DO NOT COMMIT mySecretApiKey: () => `my-secret-api`, Always use: taon env:encode before committing files containing secrets. Secret values inside /env.ts and /environments/** should be encrypted: // SAFE TO COMMIT mySecretApiKey: () => `$$$TAON_ENCRYPTED_START$$euhauidhaisre$$$TAON_ENCRYPTED_END$$$`,",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "additional-rules-for-ai-agents",
    "headingTitle": "Additional rules for AI agents",
    "text": "Additional rules for AI agents When working with Taon environment variables, an AI agent must: Use only generated environment variables from: /src/lib/env/** Never attempt to encrypt or decrypt environment variables. Never run: taon env:decode Never run: taon env:encode Never access or expose the master password. Never replace generated environment variables with hardcoded secret values.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "how-to-generate-a-master-password",
    "headingTitle": "How to generate a master password",
    "text": "How to generate a master password Use: taon env:gen:pass Alternatively, use the interactive environment menu: taon env",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "how-the-master-password-is-preserved-locally",
    "headingTitle": "How the master password is preserved locally",
    "text": "How the master password is preserved locally The master password is securely preserved by the Taon worker for 1 day. The Taon CLI preserves the password only after verifying that it is correct. You can remove the preserved master password from the worker at any time.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/environment-variables.md",
    "headingId": "how-to-remove-the-master-password-from-the-worker",
    "headingTitle": "How to remove the master password from the worker",
    "text": "How to remove the master password from the worker Use: taon env:rm:pass Alternatively, use the interactive environment menu: taon env",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/file-naming-conventions.md",
    "headingId": "file-naming-and-layout-conventions",
    "headingTitle": "File Naming and Layout Conventions",
    "text": "File Naming and Layout Conventions",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/file-naming-conventions.md",
    "headingId": "typescript-filenames",
    "headingTitle": "TypeScript filenames",
    "text": "TypeScript filenames Use a lowercase kebab-case base name followed by dot-separated suffixes that identify the file’s role. The base name should usually match the feature or subfeature folder that owns the file. Class name Filename MyFeatureEntity my-feature.entity.ts MyFeatureController my-feature.controller.ts MyFeatureRepository my-feature.repository.ts MyFeatureApiService my-feature.api.service.ts MyFeatureConfigService my-feature.config.service.ts MyFeatureStateService my-feature.state.service.ts MyFeatureComponent my-feature.component.ts MyFeatureAbstractContext my-feature.abstract.context.ts MyFeatureActiveContext my-feature.active.context.ts",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/file-naming-conventions.md",
    "headingId": "angular-component-files",
    "headingTitle": "Angular component files",
    "text": "Angular component files Keep each Angular component’s TypeScript, HTML template, and SCSS styles in separate files in the same folder. Use the same .component filename stem for all three. Reference the external files through templateUrl and styleUrl (or styleUrls). my-feature-backoffice/ my-feature-backoffice.component.ts my-feature-backoffice.component.html my-feature-backoffice.component.scss my-feature-backoffice.state.service.ts",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/file-naming-conventions.md",
    "headingId": "feature-folder-layout",
    "headingTitle": "Feature folder layout",
    "text": "Feature folder layout Keep feature-level entities, controllers, and repositories in the feature folder. When a feature contains both a controller and Angular components, put each component in its own subfolder and use the subfolder name as the component’s filename base. my-feature/ my-feature.entity.ts my-feature.controller.ts my-feature.repository.ts my-feature-table/ my-feature-table.component.ts my-feature-table.component.html my-feature-table.component.scss my-feature-row/ my-feature-row.component.ts my-feature-row.component.html my-feature-row.component.scss",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "general-rules",
    "headingTitle": "General Rules",
    "text": "General Rules",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "taon-project-structure",
    "headingTitle": "Taon Project Structure",
    "text": "Taon Project Structure You are operating inside a Taon workspace. Taon projects do not necessarily follow a standard npm repository structure. Before making any changes, identify the relevant Taon project(s) and inspect their root taon.jsonc.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "project-types",
    "headingTitle": "Project Types",
    "text": "Project Types Taon has two project types. Standalone project A standalone project has: { \"type\": \"isomorphic-lib\" } in its root /taon.jsonc. Characteristics: Application/library source code is located in /src. It may be an independent Git repository. It may also exist inside a Taon container project. This is normally where production source-code changes should be made. Container project A container project has: { \"type\": \"container\" } in its root /taon.jsonc. Characteristics: It contains multiple standalone projects and/or other container projects. Treat child projects as separate Taon projects. A task may require inspecting or modifying multiple child projects. Never create Git branches in a container project. When working from a high-level workspace containing multiple Taon projects, do not assume that the workspace root itself is the project being modified. Locate the appropriate standalone project first.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "allowed-modification-scope",
    "headingTitle": "Allowed Modification Scope",
    "text": "Allowed Modification Scope",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "source-files-only",
    "headingTitle": "Source files only",
    "text": "Source files only Unless the user explicitly instructs otherwise in the current prompt, you may only create, modify, move, or delete files inside the /src directory of the relevant standalone project(s). For example, if a task affects: /taon-dev/cms /taon-projects/cms the allowed modification scope is: /taon-dev/cms/src/** /taon-projects/cms/src/** You may inspect files outside /src when necessary to understand the project, dependencies, architecture, configuration, or existing conventions. However, inspection does not grant permission to modify those files.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "allowed",
    "headingTitle": "Allowed",
    "text": "Allowed You may: read files anywhere in the relevant workspace when needed for context create files inside the relevant project's /src modify files inside the relevant project's /src move files inside the relevant project's /src delete files inside the relevant project's /src when required by the task inspect sibling projects to understand existing Taon patterns and implementations",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "forbidden",
    "headingTitle": "Forbidden",
    "text": "Forbidden Do not create, modify, move, or delete files outside the relevant project's /src. This includes, but is not limited to: /package.json /taon.jsonc /tsconfig.json /angular.json /.github/** /.ai/** /node_modules/** /dist/** If completing part of the requested task would require changing a file outside /src, do not make that change. Implement everything that can correctly be implemented within the allowed scope and leave the out-of-scope part unchanged. Do not silently work around this restriction by modifying another configuration or generated file.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "multi-project-tasks",
    "headingTitle": "Multi-Project Tasks",
    "text": "Multi-Project Tasks A single task may involve multiple Taon projects. For example: /taon-dev/cms /taon-projects/cms When this happens: Identify every project involved in the task. Determine whether each project is a standalone project or a container. Inspect the relevant projects before implementing the change. Keep reusable/framework functionality in the appropriate reusable Taon project. Keep application-specific functionality in the consuming application. Modify only /src/** within each affected standalone project. Do not duplicate reusable functionality in consuming projects when it belongs in a shared Taon project. Do not assume that a task must be contained within a single Git repository merely because the agent was started from a common parent directory.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "project-and-artifact-management",
    "headingTitle": "Project and Artifact Management",
    "text": "Project and Artifact Management Project and artifact management is the user's responsibility. Do not: initialize Taon projects create Git branches in container projects build Taon projects or artifacts publish packages release packages or applications deploy applications install dependencies update dependencies run project setup commands run project initialization commands modify generated artifacts Your responsibility normally ends after making the requested production source-code changes inside the appropriate /src directories.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "taon-cli-commands",
    "headingTitle": "Taon CLI Commands",
    "text": "Taon CLI Commands Do not run taon commands. The only exception is migration creation: taon mc my-new-migration and language extractor taon lang:extract Do not run any other taon command unless the user explicitly requests it in the current prompt.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "absolute-rule-never-create-or-modify-tests",
    "headingTitle": "ABSOLUTE RULE: Never Create or Modify Tests",
    "text": "ABSOLUTE RULE: Never Create or Modify Tests Testing is not part of your responsibility unless explicitly requested by the user in the current prompt. You MUST NOT create, generate, modify, move, or delete test files or test directories. This includes, but is not limited to: *.spec.ts *.test.ts *.spec.js *.test.js /test/** /tests/** /__tests__/** It also includes: test fixtures test helpers temporary test files test configuration generated tests modifications to existing tests Do NOT add or modify tests merely because: the implementation would normally require tests existing code has tests repository conventions suggest tests tests would help verify the implementation adding tests is considered best practice acceptance criteria describe expected behavior Do not create temporary tests and delete them afterward. If a requested task would normally include test changes, skip the test portion and implement only the production source code.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "explicit-user-override",
    "headingTitle": "Explicit User Override",
    "text": "Explicit User Override Tests may be created or modified only when the user explicitly requests test work in the current prompt. Do not infer permission from: previous prompts previous tasks existing tests repository conventions the nature of the feature acceptance criteria best practices",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "configuration-and-dependencies",
    "headingTitle": "Configuration and Dependencies",
    "text": "Configuration and Dependencies Unless explicitly requested otherwise, never modify project, package, build, or workspace configuration. In particular, never modify: /package.json /taon.jsonc Do not: modify node_modules install packages remove packages update package versions modify dependency declarations If a requested implementation appears to require a new dependency, do not install or add it automatically. Prefer functionality already available in the workspace when appropriate, or leave the dependency/configuration portion unchanged.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "task-boundaries",
    "headingTitle": "Task Boundaries",
    "text": "Task Boundaries Implement the requested task and avoid unrelated cleanup. Do not perform additional: refactoring unrelated to the task project maintenance dependency maintenance configuration changes test work builds publishing releasing deployment repository restructuring Existing code in sibling Taon projects may be inspected and reused as a reference when useful.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/general.md",
    "headingId": "highest-priority-working-rule",
    "headingTitle": "Highest-Priority Working Rule",
    "text": "Highest-Priority Working Rule Unless the user explicitly overrides these rules in the current prompt: All modifications must be limited to /src/** of the standalone Taon project or projects involved in the task. You may inspect the wider Taon workspace, including containers and sibling projects, to understand architecture and existing implementations. Read broadly when necessary. Modify narrowly.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/npm-yarn-packages.md",
    "headingId": "npm-yarn-install-packages",
    "headingTitle": "npm yarn install/packages",
    "text": "npm yarn install/packages do NOT install ANYTHING from package.json do NOT install new npm/yarn packages do not use npm install or yarn add don't change package.json or any files except from /src folder don't change node_modules",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/.ai/rules/typescript.md",
    "headingId": "typescript-rules",
    "headingTitle": "TypeScript rules",
    "text": "TypeScript rules Never use any unless absolutely necessary. Prefer const. Prefer assigned tp const arrow function over standard function() with function keyword . Prefer early returns. Do not create interfaces that are used only once. Do not add comments explaining obvious code. Preserve existing //#region structure.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/AGENTS.md",
    "headingId": "taon-project-instructions",
    "headingTitle": "Taon project instructions",
    "text": "Taon project instructions This project uses Taon. Read the applicable reference before changing code, and verify framework behavior against the implementation when a guide does not cover it.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/AGENTS.md",
    "headingId": "core-rules",
    "headingTitle": "Core rules",
    "text": "Core rules Do not install dependencies with npm install or yarn install; use the Taon project workflow. Make application changes in /src, preserve Taon patterns and generated files, and do not reformat unrelated code. Reuse existing classes and helpers. Do not replace Taon conventions with conventional Angular, Express, or TypeORM patterns without checking the project guidance first. Keep code changes surgical. Do not modify sibling projects.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/AGENTS.md",
    "headingId": "references",
    "headingTitle": "References",
    "text": "References Architecture and runtime targets Taon contexts Isomorphic code regions Building-block references Coding rules Canonical examples",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/AGENTS.md",
    "headingId": "existing-code-and-verification",
    "headingTitle": "Existing code and verification",
    "text": "Existing code and verification Before creating an abstraction, search /src for an equivalent implementation. For Taon CLI workflows, see the CLI command guide. The project's tests and the Taon Testbench are useful for runtime-specific examples; do not assume that Node.js, WebSQL, and Cloudflare Worker support are interchangeable. After code changes, run the smallest relevant test or build available in the project. Do not claim a command or runtime behavior is verified unless it was checked against source or a working example.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/README.md",
    "headingId": "docs",
    "headingTitle": "docs",
    "text": "docs Hello from Standalone Project",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "taon-cli-developer-guide",
    "headingTitle": "Taon CLI — Developer Guide",
    "text": "Taon CLI — Developer Guide Taon CLI provides a unified development workflow for creating, building, running, and releasing full-stack applications and libraries. A Taon project can be both an application and a library, with shared TypeScript code across frontend and backend environments.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "1-creating-projects",
    "headingTitle": "1. Creating Projects",
    "text": "1. Creating Projects Use taon new to create standalone projects, containers, and organization-level project structures.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "standalone-project",
    "headingTitle": "Standalone Project",
    "text": "Standalone Project Create a standalone project with a basic CRUD application: taon new my-standalone-project",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "standalone-project-with-admin-backoffice",
    "headingTitle": "Standalone Project with Admin Backoffice",
    "text": "Standalone Project with Admin Backoffice Create a standalone project using the Taon baseline, which includes the full Taon Admin backoffice: taon new my-standalone-project --baseline",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "documentation-project",
    "headingTitle": "Documentation Project",
    "text": "Documentation Project Create a documentation application that collects Markdown files distributed across projects: taon new my-standalone-project --docs",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "container-with-a-child-project",
    "headingTitle": "Container with a Child Project",
    "text": "Container with a Child Project Create a container and a standalone child project inside it: taon new my-projects-container/my-project Resulting structure: my-projects-container/ └── my-project/",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "organization-container",
    "headingTitle": "Organization Container",
    "text": "Organization Container Create a container named my-container-org, mark it as an organization, and create a child project: taon new @my-container-org/my-project Resulting structure: my-container-org/ └── my-project/ Organization containers allow related Taon projects to be managed together.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "2-supported-build-artifacts",
    "headingTitle": "2. Supported Build Artifacts",
    "text": "2. Supported Build Artifacts Taon can produce multiple artifact types from a shared project architecture. Artifact Entry point NPM library ./src/lib/index.ts CLI tool ./src/cli.ts Angular / Node.js application ./src/app.ts Electron desktop application ./src/app.electron.ts VS Code extension ./src/app.vscode.ts Mobile application (planned) ./src/app.mobile.ts Documentation (MkDocs, Storybook, Compodoc) Markdown and Storybook files Documentation sources include files matching **/*.md and **/*.story.ts. A single Taon project may contain multiple entry points, allowing it to serve as both a reusable library and an application.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "3-building-projects",
    "headingTitle": "3. Building Projects",
    "text": "3. Building Projects Taon provides a consistent set of commands for development, production, and watch builds.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "development-build",
    "headingTitle": "Development Build",
    "text": "Development Build taon build Alias: taon b Builds the NPM library and application source code, including Angular-compatible code. The build process updates the corresponding bundled output used by dependent projects.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "clean-development-build",
    "headingTitle": "Clean Development Build",
    "text": "Clean Development Build taon clear:build Alias: taon cb Removes temporary and distribution build output before rebuilding the project. Useful when generated files or cached build artifacts become inconsistent.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "production-build",
    "headingTitle": "Production Build",
    "text": "Production Build taon build:prod Alias: taon bp Performs a clean production-oriented build (same as in release). This may take longer than a development build because production optimizations and additional processing are applied.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "watch-build",
    "headingTitle": "Watch Build",
    "text": "Watch Build taon build:watch Alias: taon bw Watches project source files and rebuilds the library when changes are detected. This is useful when developing an application and its reusable library functionality simultaneously.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "docs-extract",
    "headingTitle": "Docs extract",
    "text": "Docs extract Extract docs of projects from genTsDocsInclude:[ ] property inside taon.jsonc. Taon will automatically find project if it is linked inside package (source is a symlink to real project location after taon build) node_modules/my-porject/source To Generate documentation Angular components (inside src/lib/generated-docs-from-md-files) taon docs Alias: taon d Watches and rebuilds library code without running the complete application build workflow. This is particularly useful for Electron and VS Code extension development.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "4-running-applications",
    "headingTitle": "4. Running Applications",
    "text": "4. Running Applications Taon provides commands for running applications in different development environments. The interactive application menu is available through: taon app",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "application-commands",
    "headingTitle": "Application Commands",
    "text": "Application Commands Command Alias Purpose taon app:normal taon an Run Angular development server with Node.js backend taon app:cloudflare taon ac Run application with local Cloudflare backend development taon app:websql taon aw Run application in browser-based WebSQL mode taon app:electron taon ae Run Electron desktop application",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "normal-web-application",
    "headingTitle": "Normal Web Application",
    "text": "Normal Web Application taon an Starts the application development environment using Angular and the Node.js backend.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "cloudflare-development",
    "headingTitle": "Cloudflare Development",
    "text": "Cloudflare Development taon ac Starts the Angular development environment configured for local Cloudflare backend development.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "websql-development",
    "headingTitle": "WebSQL Development",
    "text": "WebSQL Development taon aw Starts the Angular application in WebSQL mode. In this mode, compatible backend and database functionality runs directly in the browser without requiring a separately running Node.js backend.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "electron-development",
    "headingTitle": "Electron Development",
    "text": "Electron Development taon ae Starts the Electron application development workflow.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "5-recommended-development-workflows",
    "headingTitle": "5. Recommended Development Workflows",
    "text": "5. Recommended Development Workflows For workflows involving both an application and a reusable library, build the library before starting the application.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "scenario-1-web-application-and-npm-library",
    "headingTitle": "Scenario 1: Web Application and NPM Library",
    "text": "Scenario 1: Web Application and NPM Library Use two terminals. Terminal 1 — Start the library watch build taon bw Wait for the initial library build to complete. Terminal 2 — Start the web application taon an This allows you to develop library functionality and the web application together.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "scenario-2-electron-application-and-npm-library",
    "headingTitle": "Scenario 2: Electron Application and NPM Library",
    "text": "Scenario 2: Electron Application and NPM Library Use two terminals. Terminal 1 — Start the library-only watch build taon bwl Wait for the initial library build to complete. Terminal 2 — Start Electron taon ae This workflow allows library changes to be rebuilt while developing the Electron application.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "scenario-3-vs-code-extension-and-npm-library",
    "headingTitle": "Scenario 3: VS Code Extension and NPM Library",
    "text": "Scenario 3: VS Code Extension and NPM Library Terminal 1 — Start the library-only watch build taon bwl Wait for the initial library build to complete. Then start the VS Code debugger using the project's launch configuration. Each debugger start recreates the extension's menu options.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "6-releasing-projects",
    "headingTitle": "6. Releasing Projects",
    "text": "6. Releasing Projects Taon provides both interactive and automated release workflows.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "interactive-release-menu",
    "headingTitle": "Interactive Release Menu",
    "text": "Interactive Release Menu taon release Alias: taon r Opens the terminal interface for selecting a release operation.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "automated-releases",
    "headingTitle": "Automated Releases",
    "text": "Automated Releases taon auto:release Runs the configured automatic release workflow. Release tasks are defined in taon.jsonc using autoReleaseConfigAllowedItems. To execute a specific task: taon ar task-name-from-taon-jsonc",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "npm-release",
    "headingTitle": "NPM Release",
    "text": "NPM Release The default automated release configuration includes an NPM release task. taon ar npm This works with standalone projects and container organizations.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "cloudflare-production-release",
    "headingTitle": "Cloudflare Production Release",
    "text": "Cloudflare Production Release For projects configured for Cloudflare deployment: taon ar cloudflare:prod Taon executes the corresponding configured release task.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "7-linking-projects-and-cli-tools",
    "headingTitle": "7. Linking Projects and CLI Tools",
    "text": "7. Linking Projects and CLI Tools Taon provides linking commands similar to npm link, allowing locally developed CLI tools and libraries to be used without publishing them first.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "interactive-linking",
    "headingTitle": "Interactive Linking",
    "text": "Interactive Linking taon link Opens the linking workflow.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "local-linking",
    "headingTitle": "Local Linking",
    "text": "Local Linking taon link:local Links the CLI created in the current repository.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "global-development-linking",
    "headingTitle": "Global Development Linking",
    "text": "Global Development Linking taon link:global Creates a global NPM link for the current project in development mode. Useful when testing changes to a CLI tool directly from its source repository.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "release-branch-linking",
    "headingTitle": "Release Branch Linking",
    "text": "Release Branch Linking taon link:release Links the CLI built from a separate release branch. This can be useful when testing a released version without replacing the active development version.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "8-branding-and-pwa-assets",
    "headingTitle": "8. Branding and PWA Assets",
    "text": "8. Branding and PWA Assets Taon can generate branding assets from a project's logo.png. taon branding This recreates assets such as favicons and Progressive Web App icons. It helps keep branding consistent across supported application targets.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "9-automated-code-refactoring",
    "headingTitle": "9. Automated Code Refactoring",
    "text": "9. Automated Code Refactoring Taon provides a project-wide refactoring command. taon refactor The command processes project files to: Apply Prettier formatting. Apply ESLint fixes. Organize imports into regions. This helps maintain consistent code formatting across projects and reduces repetitive maintenance work.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "10-cloudflare-subprojects",
    "headingTitle": "10. Cloudflare Subprojects",
    "text": "10. Cloudflare Subprojects Taon supports managing Cloudflare Worker subprojects. These can be used to extend a Taon application with additional Cloudflare-specific functionality.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "add-a-subproject",
    "headingTitle": "Add a Subproject",
    "text": "Add a Subproject taon sub add Creates a subproject inside the project's sub-projects directory.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "example-structure",
    "headingTitle": "Example Structure",
    "text": "Example Structure my-taon-project/ │ ├── src/ │ ├── sub-projects/ │ └── custom-workers/ │ └── my-worker/ │ └── taon.jsonc",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "remove-a-subproject",
    "headingTitle": "Remove a Subproject",
    "text": "Remove a Subproject To remove a subproject, delete its directory. For example: rimraf ./sub-projects/custom-workers/my-worker",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "deploy-subprojects-manually",
    "headingTitle": "Deploy Subprojects Manually",
    "text": "Deploy Subprojects Manually taon sub deploy Deploys the configured Cloudflare subproject. Manual deployment is usually unnecessary because the main Taon release workflow can handle deployment.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "local-cloudflare-worker-development",
    "headingTitle": "Local Cloudflare Worker Development",
    "text": "Local Cloudflare Worker Development taon sub dev Starts the local development environment for Cloudflare subprojects. When developing an Angular application connected to a local Cloudflare Worker, start the Worker development environment first. Then start the Angular application in a separate terminal: taon ac This allows the Angular application to communicate with the locally running Cloudflare backend.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "11-quick-command-reference",
    "headingTitle": "11. Quick Command Reference",
    "text": "11. Quick Command Reference Category Command Alias New project taon new — Development build taon build taon b Clean build taon clear:build taon cb Production build taon build:prod taon bp Watch build taon build:watch taon bw Library watch taon build:watch:lib taon bwl Application menu taon app — Web application taon app:normal taon an Cloudflare application taon app:cloudflare taon ac WebSQL application taon app:websql taon aw Electron application taon app:electron taon ae Release menu taon release taon r Automated release taon auto:release taon ar Project linking taon link — Global development link taon link:global — Branding taon branding — Code refactoring taon refactor — Add Cloudflare subproject taon sub add — Deploy Cloudflare subproject taon sub deploy — Local Cloudflare Worker taon sub dev —",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "summary",
    "headingTitle": "Summary",
    "text": "Summary Taon CLI provides a consistent workflow for managing the entire development lifecycle: Create → Build → Develop → Test → Release Its app-library architecture allows projects to combine reusable libraries, backend functionality, frontend applications, and multiple deployment targets. Developers can work with a single project or coordinate entire containers of interconnected applications without manually maintaining separate build and release systems for each project.",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "os",
    "headingTitle": "Os",
    "text": "Os taon check:port 80 443 8080 => check if port(s) are taken taon copy from-path to-path => copy file or folder taon ln from-path to-path => link file or folder taon refresh => refresh linked projects configuration (after deleting or adding new repo) taon settings:vscode => set random nice colors for you vscode window",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "java-tomcat",
    "headingTitle": "java & tomcat",
    "text": "java & tomcat taon select:java => select java for $JAVA_HOME taon select:tomcat => select tomcat for $TOMCAT_HOME",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "etc-host",
    "headingTitle": "/etc/host",
    "text": "/etc/host taon simulateDomain my-test-domain.com => modify /etc/host in a nice way taon hosts => open /etc/hosts files in VSCode",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "git",
    "headingTitle": "Git",
    "text": "Git",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "handy-shortcuts",
    "headingTitle": "Handy shortcuts",
    "text": "Handy shortcuts taon soft => git reset --soft HEAD~1 taon count:commits => show origin of project taon remove:submodules => remove all submodules from repo taon remove:submodule my-not-wanted-git-submodules => remove submodule by folder name taon remove:tag git-tag-name-optionally => remove git tag (if not provided name - select menu appears) taon last:tag => display info aboutlast tag taon clone git-repo-address-to-clone => display info aboutlast tag",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "remotes",
    "headingTitle": "Remotes",
    "text": "Remotes taon origin => show origin of project taon remote => taon origin taon origins => show all origins of project taon remotes => taon origins taon rename:origin http://my-new-origin => replaces default origin new provided taon set:origin http://my-new-origin => alias to rename:origin taon set:remote:ssh => changes http remote to ssh remote taon set:remote:http => changes ssh remote to https remote",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "rebase",
    "headingTitle": "Rebase",
    "text": "Rebase taon rebase => rebase current branch with default branch taon rebase branch-to-rebase => rebase current branch with changes from branch-to-rebase",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "stash",
    "headingTitle": "Stash",
    "text": "Stash taon stash => stash only staged files taon stashall => stash all files",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "reset-change-branch",
    "headingTitle": "Reset + change branch",
    "text": "Reset + change branch taon branch => git fetch / display menu with branches to select / select branch taon reset => git fetch + remove tmp files for project + taon branch (include children) taon reset my-branch => same as taon reset but specific branch taon reset => reset hard and pull (recrusively)",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "pull-pull",
    "headingTitle": "Pull & Pull",
    "text": "Pull & Pull taon pull => pull current branch or current workspace projects one after another taon pull:all => pull current repo branch and first level of children projects taon pull:deep => pull current repo branch and all projects deep taon pul => taon pushall taon pall => taon pushall taon push => push current project repo with temp message taon push => push current project (+ first level children) repo with temp message taon push:deep => push current project (+ deep children repos) repo with temp message taon pushallorigins => push code to all remotes(origins) defined in .git/config",
    "api": false
  },
  {
    "filePath": "@taon-dev/docs/docs/CLI.md",
    "headingId": "smart-conventional-commits-branching",
    "headingTitle": "Smart Conventional Commits Branching",
    "text": "Smart Conventional Commits Branching Checkout branch + add changes + commit message + push branch Create special branches (with metadata inside name) that can be use later with command taon push to \"re-push\" changes and use matadata from branch name as commit message. fix Quick commit and push bugfix taon pfix JIRA-379089 JIRA-380320 proper counter message [my-lib] <=> git checkout -b bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message + git add + git commit -m \"fix(my-lib): proper counter message JIRA-379089 JIRA-380320\" + git push origin bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message taon pfix <=> taon pushfix <=> taon push:fix feature Quick commit and push feature taon pf JIRA-379089 JIRA-380320 admin notification [my-lib] <>=> git checkout -b feature/JIRA-379089-JIRA-380320--my-lib--admin-notification + git add + git commit -m \"feat(my-lib): admin notification JIRA-379089 JIRA-380320\" + git push origin feature/JIRA-379089-JIRA-380320--my-lib--admin-notification taon pf <=> taon pushfeature <=> taon push:feature chore Quick commit and push chore taon pc JIRA-379089 update deps <=> git checkout -b chore/JIRA-379089-update-deps + git add + git commit -m \"chore: update deps JIRA-379089\" + git push origin chore/JIRA-379089-update-deps taon pc <=> taon chore <=> taon pchore docs Quick commit and push docs update taon pd explained installation <=> git checkout -b docs/explained-installation + git add + git commit -m \"docs:explained installation\" + git push origin docs/explained-installation taon pd <=> taon pdocs test Quick commit and push tests update taon ptest admin permission new use case <=> git checkout -b test/admin-permission-new-use-case + git add + git commit -m \"test: admin permission new use case\" + git push origin test/admin-permission-new-use-case taon push:test <=> taon ptest <=> taon ptests styl Quick commit and push style update (formatting, linting etc.) taon pstyle proper project methods <=> git checkout -b style/proper-project-methods + git add + git commit -m \"style: proper project methods\" + git push origin style/proper-project-methods taon pstyl <=> taon pstyle refactor Quick commit and push code refactor taon pref new permission module <=> git checkout -b refactor/new-permission-module + git add + git commit -m \"refactor: new permission module\" + git push origin refactor/new-permission-module taon pref <=> taon prefactor release Quick commit and push release commit taon prelease <=> git checkout -b release/version-v1-2-3 + git add + git commit -m \"release: version v1.2.3\" + git push origin release/version-1-2-3 taon prel <=> taon prelase",
    "api": false
  },
  {
    "filePath": "@taon-dev/e-commerce/README.md",
    "headingId": "taon-dev-e-commerce",
    "headingTitle": "@taon-dev/e-commerce",
    "text": "@taon-dev/e-commerce taon-cart-button opens the authenticated cart and checkout flow. Available products are loaded from the backend, which filters inactive products and applies product-group suggestions for the current user. Configure Stripe's secret key and webhook signing secret in the server-side Taon environment (STRIPE_SECRET_KEY and STRIPE_WEBHOOK_KEY). Never expose these values to browser code. The Products page's Sync with Stripe dialog checks the server connection, synchronizes local products, and displays the dedicated webhook URL to register in Stripe. Stripe webhooks are signature-verified against the raw request body. Orders and product entitlements are finalized from verified Stripe events, not from the browser success redirect. Day-based subscription intervals use Stripe recurring prices; seconds, minutes, and hours are represented as Taon-side entitlement expirations.",
    "api": false
  },
  {
    "filePath": "@taon-dev/e-commerce/README.md",
    "headingId": "checkout-and-stripe-lifecycle",
    "headingTitle": "Checkout and Stripe lifecycle",
    "text": "Checkout and Stripe lifecycle Register these events on the same webhook endpoint: checkout.session.completed, checkout.session.expired checkout.session.async_payment_succeeded, checkout.session.async_payment_failed (for delayed payment methods) customer.subscription.created, customer.subscription.updated, customer.subscription.deleted invoice.paid, invoice.payment_failed charge.refunded, charge.dispute.closed invoice.payment_succeeded is also accepted for existing Stripe configurations. Handlers retrieve current Stripe resources rather than trusting an older event's snapshot. Local webhook writes use serializable transactions, so failed processing rolls back and Stripe can retry. Checkout, subscription and invoice IDs identify existing records; replaying a checkout neither consumes a new cart nor extends a fixed-duration entitlement. Expired checkouts cancel pending orders and release stock/purchase reservations. Cart items remain available for another checkout. Leaving Stripe through cancel_url only displays a message; it does not cancel the order. Canceling subscription renewal retains access through the paid period end; that deadline is enforced even if the final cancellation webhook is delayed. Actual cancellation, unpaid, paused and expired states remove access. past_due retains access during Stripe's retry/dunning window; configure Stripe's final failed-payment action to cancel or mark the subscription unpaid when that window ends. Invoices update payment history and reconcile the current subscription period and status, including when delivered before checkout completion. Full refunds and full-amount lost disputes for normal/lifetime Checkout payments mark the order/payment refunded and revoke that order's entitlements. Partial refunds and partial lost disputes leave access intact. Other purchases and directly assigned permissions are not revoked. A refunded lifetime purchase can be purchased again.",
    "api": false
  },
  {
    "filePath": "@taon-dev/e-commerce/README.md",
    "headingId": "product-presentation-and-eligibility",
    "headingTitle": "Product presentation and eligibility",
    "text": "Product presentation and eligibility Use the product editor's Link to post field to associate a CMS post. Published post titles, excerpts, public content and thumbnails enrich the product details dialog. Protected post bodies and video/audio/file attachments are not exposed by the sales preview. Product thumbnails reuse CMS storage/download tokens, including for posts whose full content requires purchase. Product information opens a normal details dialog from Buy, Cart and Checkout; purchase, quantity and remove controls are separate. List thumbnails are bounded to 100px height, checkout thumbnails to 50px, preserving aspect ratio. Neither list downloads full post media attachments. The backend exposes purchaseEligibility: { canAdd, reason } on suggested products. Its shared eligibility check is also used by cart mutations and checkout, enforcing singleton lifetime/subscription purchases, ownership/current subscriptions, pending reservations, stock, per-user limits, currency and recurring-checkout compatibility. Unavailable suggestions remain visible with a reason; cart changes refresh their eligibility. Lifetime and subscription cart quantities are always one.",
    "api": false
  },
  {
    "filePath": "@taon-dev/e-commerce/README.md",
    "headingId": "regression-tests",
    "headingTitle": "Regression tests",
    "text": "Regression tests With the project's existing TypeScript dependency available: node --test src/tests/e-commerce-lifecycle.test.cjs These tests load the actual isomorphic business methods with in-memory repositories and Stripe API doubles. They cover eligibility, webhook replays, out-of-order invoices/refunds, cancellation timing, retrying payments, refund access revocation and transactional rollback. They do not replace live Stripe or database integration testing.",
    "api": false
  },
  {
    "filePath": "@taon-dev/e-commerce/README.md",
    "headingId": "courses-from-cms-posts",
    "headingTitle": "Courses from CMS posts",
    "text": "Courses from CMS posts Import TaonCourseComponent and TaonCourseTabsComponent into the consuming Angular component. Both are standalone components exported by this package: <taon-course-tabs> <taon-course publicCoursePostSlug=\"bachatap1public\" privateCoursePostSlug=\"bachatap1private\" [context]=\"context\" /> <taon-course publicCoursePostSlug=\"bachatap2public\" privateCoursePostSlug=\"bachatap2private\" [context]=\"context\" /> </taon-course-tabs> Use the same taon-course without the tabs wrapper for a large parent hero. Inside tabs the parent is the first clickable row. Tab labels follow the authorized parent, using its thumbnail when present and title otherwise. Material handles tab-header pagination on narrow screens. Each root is an ordinary CMS post. Add lessons through its existing related-post editor; the components keep the order returned by CMS. Enable Apply permissions to related posts on the protected root so lessons inherit its permissions. Link the existing product to the protected root and configure its effective permissions as usual. No course table, special content types, or additional purchase rules are involved. A private slug is optional. Bind context to the latest authorization context emitted by the session button or session state service. Every replacement reloads access from the server, including login, logout and refreshContext() after authorization changes. The browser context is a refresh trigger, never an authorization credential. The server uses the session and entitlement-aware auth repository; it never trusts permissions supplied by a caller. Applications must use this package's TaonAuthContextRepository override in their concrete Taon context, as for protected purchased CMS media. After a purchase is finalized, refresh the session context through the existing session API/state flow. TaonCourseController is registered by TaonECommerceAbstractContext. It bridges the CMS's manager-only post/related-post endpoints to read-only course presentation using CMS effective permission inheritance and the CMS media read policy (published and unprotected, superuser, or a matching permission). Each lesson is checked separately, and unchecked nested relations are not returned. Missing/inaccessible previews produce a retryable error; a missing private root falls back to the preview with a notice. Inaccessible lessons are omitted with a notice. Rows fetch only thumbnails initially. Video/audio rows instantiate the existing clean CMS renderer on demand (preload=\"none\"); attachments use CMS download links; text posts open the clean CMS renderer in a Material dialog. Context changes discard stale loads, close course dialogs, and remove old players.",
    "api": false
  },
  {
    "filePath": "@taon-dev/i18n/README.md",
    "headingId": "i18n",
    "headingTitle": "i18n",
    "text": "i18n Taon i18n solution",
    "api": false
  },
  {
    "filePath": "@taon-dev/marketing/README.md",
    "headingId": "marketing",
    "headingTitle": "Marketing",
    "text": "Marketing A small Taon module for configurable website popups. Marketing backoffice has Popups, Promotions, Newsletter, and AB navigation. Only Popups is functional; the other pages are placeholders. Coupon/discount business logic belongs to ecommerce, and newsletter sending and experimentation are not included.",
    "api": false
  },
  {
    "filePath": "@taon-dev/marketing/README.md",
    "headingId": "popup-management",
    "headingTitle": "Popup management",
    "text": "Popup management Include TaonMarketingAbstractContext in the application context and mount TaonMarketingBackofficeRoutes through the standard Taon admin navigation (as in the example app). Popups can be created, edited, deleted, enabled, and disabled. New popups are disabled by default. TaonMarketingPopupEntity uses the existing Taon TypeORM entity registration (createTable: true), with inherited ID/version and automatic creation/update timestamps. The registered MarketingContext_1791659700000_popup_configuration migration creates a missing popup table or adds the configuration columns to the old scaffold table, preserving legacy descriptions as names where available. It also supports contexts where schema synchronization has already run. Hosts with a different concrete context should register this migration in that context. Reverting removes popup configuration fields and retains names in the legacy description column; back up the database before reverting. The popup controller restricts exposed methods to reads, pagination, validated writes, and active-popup loading. Configure access to administrative controller methods using the host application's authorization policy; getActivePopups is the website read endpoint.",
    "api": false
  },
  {
    "filePath": "@taon-dev/marketing/README.md",
    "headingId": "website-rendering",
    "headingTitle": "Website rendering",
    "text": "Website rendering Import TaonMarketingPopupsComponent from @taon-dev/marketing/src into a standalone Angular component and place one host in the public website layout: <taon-marketing-popups [resolveImage]=\"resolveMarketingImage\" (popupEvent)=\"onPopupEvent($event)\" (popupError)=\"onPopupError($event)\"> </taon-marketing-popups> The image resolver and event/error handlers are optional. Image keys default to HTTP(S) URLs or root-relative asset paths. For object-storage keys, provide a synchronous resolver returning the public image URL. CTA URLs must also be HTTP(S) or root-relative. Content is plain text, not executable HTML. The renderer loads enabled, date-active popups initially and after Angular router navigation. Date boundaries are inclusive. Empty display paths means every path; exclusions take precedence. Path rules match the pathname (ignoring query/fragment) exactly, or by prefix when ending in *, e.g. /shop/*. Each delay starts when the page's popup response arrives. Eligible popups display one at a time, in delay/ID order. Navigation cancels pending displays and closes visible popups; eligibility is checked again before display. End dates also close visible popups. Dialog popups support an optional image; bottom banners do not. Popups scheduled to start later become eligible on a subsequent page load/navigation. Visitor display counts use localStorage; once-per-session uses sessionStorage (a browser-tab session). Counts are incremented on display, not on fetch. These are browser-local limits, not authenticated-user or cross-device limits; clearing storage resets them. If storage is unavailable or corrupt, rendering fails closed and reports an error rather than ignoring restrictions.",
    "api": false
  },
  {
    "filePath": "@taon-dev/marketing/README.md",
    "headingId": "analytics-extension-point",
    "headingTitle": "Analytics extension point",
    "text": "Analytics extension point The popupEvent output emits popup-impression, popup-click, and popup-close with category marketing, path, creation date, and data containing popup ID/type. Connect this output to the host's generic AnalyticsEvent ingestion when available. No statistics columns or analytics dependency are added. The analytics package's event API is currently scaffold-only, so this module does not force integration.",
    "api": false
  },
  {
    "filePath": "@taon-dev/seo/README.md",
    "headingId": "seo",
    "headingTitle": "SEO",
    "text": "SEO Basic website SEO configuration for Taon applications. This module does not analyze keywords, score pages, generate content, or duplicate CMS metadata.",
    "api": false
  },
  {
    "filePath": "@taon-dev/seo/README.md",
    "headingId": "backoffice",
    "headingTitle": "Backoffice",
    "text": "Backoffice Navigation: SEO > General (Settings) and SEO > Pages. General edits one global settings record (ID 1). Pages uses the Taon datatable to add, edit, and delete overrides for static application paths such as /, /pricing, or /courses. Blank optional values inherit global defaults. Social images are uploaded through Taon storage. PNG, JPEG, GIF and WebP are supported; keys are persisted instead of temporary browser blob URLs. Configuration writes, page listings, and image uploads require the session's administrator group (or super-user access). Global settings, path lookups, and social-image downloads are public.",
    "api": false
  },
  {
    "filePath": "@taon-dev/seo/README.md",
    "headingId": "application-integration",
    "headingTitle": "Application integration",
    "text": "Application integration Include TaonSeoAbstractContext in the application's backend context and TaonSeoBackofficeRoutes in its backoffice navigation. Add the frontend providers: import { provideTaonSeo } from '@taon-dev/seo'; export const appConfig = { providers: [ ...provideTaonSeo(), // Existing router, TAON_CONTEXT and Taon initialization providers. ], }; The service starts after Angular bootstrap, when the application's existing Taon initialization has completed. It loads settings and the matching override on initial navigation and each primary path change. Query strings, fragments, matrix parameters and auxiliary/backoffice outlets do not identify SEO pages. Trailing slashes are normalized (/pricing/ matches /pricing). Metadata includes document title, description, keywords, canonical URL, robots, og:title, og:description, og:image, og:site_name, and og:url. Open Graph text falls back to the resolved page title and description; its image falls back to the global image. Global indexing/follow restrictions remain in force; page flags can further restrict them. Canonical URLs must be absolute HTTP(S) URLs without query strings or fragments. When no page canonical URL exists, the canonical base URL (including an optional deployment subpath) is combined with the current application path. Without either value, the canonical tag is removed. Metadata is replaced rather than accumulated between routes. Superseded route requests cannot overwrite newer metadata. Failures are logged and exposed via TaonSeoService.error; failed image resolution leaves text metadata intact. The backend host must be externally reachable so social crawlers can fetch public image URLs. Client-side navigation does not replace server-rendered SEO for crawlers that do not execute JavaScript. resolveSeoMetadata is the shared resolution function for future CMS adapters. CMS content is not automatically registered as an application/static page.",
    "api": false
  },
  {
    "filePath": "@taon-dev/seo/README.md",
    "headingId": "migration",
    "headingTitle": "Migration",
    "text": "Migration The SEO configuration migration creates both tables in data-preserving mode and seeds the singleton settings record without overwriting existing settings. It also works when Taon has already synchronized the entity schema. Empty old demo tables are replaced; populated legacy demo tables cause an explicit error so their data can be mapped deliberately rather than discarded or assigned invented application routes. Reverting this migration drops the two SEO tables. Builds, tests and migration execution have not been run. Further initialization was skipped as requested.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "taon-dev-session",
    "headingTitle": "@taon-dev/session",
    "text": "@taon-dev/session @taon-dev/session adds authentication and role-based access control (RBAC) to Taon applications. It provides an Angular sign-in interface, server-side session checks, and backoffice pages for managing users and access. Authentication covers sign-in, registration, and session handling with JWTs, cookies, and HTTP headers. Authorization uses groups, roles, and permissions to control what signed-in users can do. The package is designed for applications built with Taon.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "add-sign-in-to-your-angular-application",
    "headingTitle": "Add sign-in to your Angular application",
    "text": "Add sign-in to your Angular application Use TaonSessionButtonComponent to open the sign-in dialog from an existing page. Use TaonSessionComponent when sign-in needs a dedicated page. In both cases, import the component that matches the selector in your template.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "sign-in-button-and-dialog",
    "headingTitle": "Sign-in button and dialog",
    "text": "Sign-in button and dialog import { Component } from '@angular/core'; import { TaonSessionButtonComponent, type TaonSessionConfig, } from '@taon-dev/session/src'; @Component({ selector: 'app-sign-in', imports: [TaonSessionButtonComponent], template: `<taon-session-button [config]=\"config\" />`, }) export class SignInComponent { readonly config: TaonSessionConfig = { login: { linkToDashboard: '/my-dashboard', }, }; }",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "dedicated-sign-in-page",
    "headingTitle": "Dedicated sign-in page",
    "text": "Dedicated sign-in page import { Component } from '@angular/core'; import { TaonSessionComponent, type TaonSessionConfig, } from '@taon-dev/session/src'; @Component({ selector: 'app-sign-in-page', imports: [TaonSessionComponent], template: `<taon-session [config]=\"config\" />`, }) export class SignInPageComponent { readonly config: TaonSessionConfig = { login: { linkToDashboard: '/my-dashboard', }, }; } Set login.linkToDashboard to the route users should reach after signing in. In isomorphic source files, scope the Angular imports to the browser build using your project's Taon build markers.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "protect-an-endpoint-with-session-middleware",
    "headingTitle": "Protect an endpoint with session middleware",
    "text": "Protect an endpoint with session middleware Add TaonSessionMiddleware to an endpoint that requires a signed-in user. Put it before inherited middleware so subsequent middleware can use the user and session IDs attached to the request. import { TaonSessionMiddleware } from '@taon-dev/session/src'; import { GET, Taon, TaonBaseController, TaonController } from 'taon/src'; @TaonController({ className: 'AccountController', }) export class AccountController extends TaonBaseController { @GET({ middlewares: ({ parentMiddlewares }) => ({ TaonSessionMiddleware, ...parentMiddlewares, }), }) me(): Taon.Response<string> { //#region @websqlFunc return async req => { return `User ID: ${req.userId}`; }; //#endregion } }",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "protect-controller-methods-with-beforeeachrequest",
    "headingTitle": "Protect controller methods with beforeEachRequest",
    "text": "Protect controller methods with beforeEachRequest Use the beforeEachRequest hook to apply access rules to selected methods, including inherited methods such as paginationQuery. First authenticate the request, then check the signed-in user's access. In this example, the hook requires permission to manage posts before running paginationQuery. To apply the same rule to every endpoint on a controller, remove the method-name check. import { TaonSessionRepository } from '@taon-dev/session/src'; import { getStatusCode, HttpStatusEnum, Models, Taon, TaonBaseCrudController, TaonController, } from 'taon/src'; import { AppAuthContextRepository } from './app-auth'; @TaonController({ className: 'PostsController', }) export class PostsController extends TaonBaseCrudController { private readonly session = this.inject(TaonSessionRepository); private readonly auth = this.inject(AppAuthContextRepository); override async beforeEachRequest({ req, res, methodConfig, }: Models.TaonCtrlBeforeEachRequestParams<PostsController>): Promise<void> { if (methodConfig.methodName !== 'paginationQuery') { return; } await this.session.throwIfNotAuthenticated({ req, res }); const context = await this.auth.getContext(req.userId, req.sessionId); if (!context?.hasAccess?.toManagePosts) { Taon.error({ status: getStatusCode(HttpStatusEnum.FORBIDDEN), message: 'You do not have permission to manage posts.', }); } } } Use your app's translation helper for the error message if your API returns localized errors.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "extend-authorization-for-your-application",
    "headingTitle": "Extend authorization for your application",
    "text": "Extend authorization for your application Extend the default groups, roles, and permissions with application-specific entries. Define a named access rule such as toManagePosts so controllers and Angular components can use the same rule. RBAC concept Example Purpose Group editorial Organizes users by team or responsibility. Role posts-manager Represents a set of responsibilities that can be assigned together. Permission manage-posts Represents access to a specific action.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "define-groups-roles-and-permissions",
    "headingTitle": "Define groups, roles, and permissions",
    "text": "Define groups, roles, and permissions Add these definitions to your application's authorization module, shown here as app-auth.ts. import { TaonSessionCoreGroupsBase, TaonSessionCoreRolesBase, TaonSessionCorePermissionsBase, type TaonSessionCoreAuthorizationBase, } from '@taon-dev/session/src'; export const AppAuthGroups = { ...TaonSessionCoreGroupsBase, Editorial: 'editorial', }; export const AppAuthRoles = { ...TaonSessionCoreRolesBase, PostsManager: 'posts-manager', }; export const AppAuthPermissions = { ...TaonSessionCorePermissionsBase, ManagePosts: 'manage-posts', }; export interface AppAuthorization extends TaonSessionCoreAuthorizationBase { groups: typeof AppAuthGroups; roles: typeof AppAuthRoles; permissions: typeof AppAuthPermissions; }",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "add-an-access-rule",
    "headingTitle": "Add an access rule",
    "text": "Add an access rule Continue in the same module with a custom authorization context and repository. This example grants toManagePosts to superusers, members of the built-in Administrator group, and users with the posts-manager role. The editorial group and manage-posts permission illustrate additional RBAC entries you can use in other rules. The backend evaluates the rule against the current authorization context. The browser reads the result from the context snapshot and can use it to show or hide UI actions. Enforce access on the backend for every protected operation. import { TaonAuthContextEntityBase, TaonAuthContextHasAccessBase, TaonAuthContextRepositoryBase, } from '@taon-dev/session/src'; import { TaonEntity, TaonRepository } from 'taon/src'; //#region authorization decorators export const TaonSessionCoreGroups = { ...TaonSessionCoreGroupsBase, Manager: 'manager', }; export const TaonSessionCoreRoles = { ...TaonSessionCoreRolesBase, /** * Can manage roles and permissions assigned directly to users. * Does NOT allow changing user groups. */ PostsManager: 'posts-manager', AccessP1User: 'access-p1-user', AccessP2User: 'access-p2-user', AccessP3User: 'access-p3-user', }; export const TaonSessionCorePermissions = { ...TaonSessionCorePermissionsBase, PermissionToAccessP1: 'permission-to-access-p1', PermissionToAccessP2: 'permission-to-access-p2', PermissionToAccessP3: 'permission-to-access-p3', }; export interface TaonSessionCoreAuthorization extends TaonSessionCoreAuthorizationBase { groups: typeof TaonSessionCoreGroups; roles: typeof TaonSessionCoreRoles; permissions: typeof TaonSessionCorePermissions; } @TaonEntity<TaonAuthContextEntityDecorator>({ className: 'TaonAuthContextEntity', createTable: false, }) export class TaonAuthContextEntityDecorator extends TaonAuthContextEntityBase { declare snapshoot: Partial<TaonAuthContextHasAccess>; // @ts-ignore get hasAccess(): TaonAuthContextHasAccess { return this.injectClass< TaonAuthContextHasAccess, [TaonAuthContextEntityDecorator] >(TaonAuthContextHasAccess as any, this) as any; } } export class TaonAuthContextHasAccess extends TaonAuthContextHasAccessBase { // @ts-ignore declare protected context: TaonAuthContextEntityDecorator; get toManagePosts(): boolean { //#region @browserFunc return !!this.context.snapshoot.toManagePosts; //#endregion //#region @websqlFunc return ( this.context.isSuperUser || this.context.isInGroup(TaonSessionCoreGroups.Administrator) || this.context.hasRole(TaonSessionCoreRoles.PostsManager) ); //#endregion } } @TaonRepository({ className: 'TaonAuthContextRepository', }) export class TaonAuthContextRepositoryDecorator extends TaonAuthContextRepositoryBase< TaonSessionCoreAuthorization, // @ts-ignore TaonAuthContextEntityDecorator > { // @ts-ignore entityClassResolveFn = () => TaonAuthContextEntityDecorator; } @TaonMigration({ className: 'SessionContext_1791132517217_initial_decorator', }) export class SessionContext_1791132517217_initial_decorator extends SessionContext_1791132517216_initial { protected async persistTree(): Promise<void> { //#region @websqlFunc console.info(`Migrating CUSTOM authorization`); await this.taonAuthContextRepository.persistTree({ authorization: { groups: TaonSessionCoreGroups, roles: TaonSessionCoreRoles, permissions: TaonSessionCorePermissions, }, tree: { groupAndRoles: { // Administrators receive all core administrative roles. [TaonSessionCoreGroups.Administrator]: '*', // Normal customers receive no administrative roles by default. [TaonSessionCoreGroups.Customers]: [], [TaonSessionCoreGroups.Manager]: [TaonSessionCoreRoles.PostsManager], }, rolesAndPermissions: { [TaonSessionCoreRoles.AuthorizationManager]: [ TaonSessionCorePermissions.ViewUsers, TaonSessionCorePermissions.ViewUserAuthorization, TaonSessionCorePermissions.ManageUserRoles, TaonSessionCorePermissions.ManageUserPermissions, ], [TaonSessionCoreRoles.PostsManager]: [], [TaonSessionCoreRoles.AccessP1User]: [ TaonSessionCorePermissions.PermissionToAccessP1, ], [TaonSessionCoreRoles.AccessP2User]: [ TaonSessionCorePermissions.PermissionToAccessP2, ], [TaonSessionCoreRoles.AccessP3User]: [ TaonSessionCorePermissions.PermissionToAccessP2, ], [TaonSessionCoreRoles.UserManager]: [ TaonSessionCorePermissions.ViewUsers, TaonSessionCorePermissions.ManageUsers, TaonSessionCorePermissions.ViewSessions, TaonSessionCorePermissions.RevokeSessions, ], }, }, }); //#endregion } } //#endregion Keep the framework's snapshoot spelling and the @browserFunc and @websqlFunc regions. They connect the browser and backend implementations of the access rule.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "backoffice",
    "headingTitle": "Backoffice",
    "text": "Backoffice Taon Session includes Taon Admin pages for inspecting sessions, managing user accounts, and configuring access.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "sessions",
    "headingTitle": "Sessions",
    "text": "Sessions See who is signed in and inspect the origin of each session.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "users",
    "headingTitle": "Users",
    "text": "Users Browse user accounts and inspect the groups, roles, and permissions associated with each user.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/README.md",
    "headingId": "authorization",
    "headingTitle": "Authorization",
    "text": "Authorization Manage groups, roles, and permissions from their respective pages. Groups Organize users by team or responsibility so you can manage access for users with common needs. Roles Define roles around responsibilities such as managing posts. Use roles to assign a common set of capabilities to multiple users. Permissions Define individual capabilities and use them to control access to specific actions.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/TODO.md",
    "headingId": "todo",
    "headingTitle": "TODO",
    "text": "TODO ✅ google login (localhost & on server) ✅ email login (localhost) ✅ email registration (localhost) ✅ session button ✅ session page ✅ session context 🔲 authorization 🔲 change username 🔲 password change 🔲 remember me 🔲 profile picture change authorization + authenticaiton Future: 🔲 forget password 🔲 email registration confirm 🔲 email confirm 🔲 sms confirm 🔲 authenticator confirm 🔲 connect apple 🔲 connect microsoft 🔲 connect github 🔲 connect facebook",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/src/lib/taon-session/taon-session.md",
    "headingId": "session-account-linking-and-backoffice",
    "headingTitle": "Session account linking and backoffice",
    "text": "Session account linking and backoffice",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/src/lib/taon-session/taon-session.md",
    "headingId": "verified-email-linking",
    "headingTitle": "Verified-email linking",
    "text": "Verified-email linking Set TaonSessionProvider.linkSocialAccountEmail = true in the application's provider configuration to enable automatic linking. The default is false. Emails are normalized using the existing identity repository. An existing provider identity remains the primary sign-in key. For a new social identity, a strictly verified provider email can resolve the User through its password identity or another verified identity. The provider still gets its own UserIdentity. Ambiguous emails belonging to multiple existing Users are rejected rather than silently merging accounts. For a social-first account, sign in using the existing provider and select Email in the profile's Connect tab to set a password for its verified email. Subsequent email/password logins use that same User. Unauthenticated signup cannot set a password on an existing social account merely by knowing its email.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/src/lib/taon-session/taon-session.md",
    "headingId": "profile-username",
    "headingTitle": "Profile username",
    "text": "Profile username The Change Username tab follows Change Password. Saving first checks availability, and the server repeats the check and relies on the existing unique username index to prevent concurrent duplicate updates. Usernames are trimmed and must contain 1 to 255 characters.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/src/lib/taon-session/taon-session.md",
    "headingId": "session-metadata-and-lifecycle",
    "headingTitle": "Session metadata and lifecycle",
    "text": "Session metadata and lifecycle New sessions capture the initiating request's user agent, resolved client IP, a browser/OS device label where recognizable, login time, last activity, expiry, identity ID, and authentication provider. Client IP resolution uses req.ip from Taon's runtime adapter, falling back to the connection's remote address. Session code does not independently trust forwarding headers. Configure the deployment's trusted proxy boundary correctly; Express and the Cloudflare adapter remain responsible for that boundary. Device labels and user agents are descriptive, not authentication evidence. Access tokens and refresh-token records reference the Session. Authenticated requests update activity, refresh extends expiry, and logout revokes the Session. Refresh cookies use / so logout receives them. Older tokens without a session reference remain supported until expiry.",
    "api": false
  },
  {
    "filePath": "@taon-dev/session/src/lib/taon-session/taon-session.md",
    "headingId": "backoffice",
    "headingTitle": "Backoffice",
    "text": "Backoffice The Sessions section lists unrevoked, unexpired sessions. Expanded rows and the routed Session page use the same details component and preserve the Admin outlet. Session APIs require a super user and return explicit safe fields; token hashes and password hashes are not exposed. The entity changes include nullable Session identity/provider columns, a larger user-agent column, and a unique provider/provider-user-ID identity index. Apply these through the application's normal Taon schema management before deployment. Existing duplicate provider identities must be resolved before applying the unique index. Older sessions are not backfilled with request metadata that is no longer available.",
    "api": false
  },
  {
    "filePath": "@taon-dev/sudo/README.md",
    "headingId": "sudo",
    "headingTitle": "Sudo",
    "text": "Sudo Sudo gives you access to Taon Admin’s tools for managing application data, restoring snapshots, and troubleshooting HTTP errors. To use these tools, Sudo must be enabled for your account’s email address.",
    "api": false
  },
  {
    "filePath": "@taon-dev/sudo/README.md",
    "headingId": "data",
    "headingTitle": "Data",
    "text": "Data The Data tab works like phpMyAdmin. You can browse SQL tables and edit or delete records directly from Taon Admin.",
    "api": false
  },
  {
    "filePath": "@taon-dev/sudo/README.md",
    "headingId": "raw-migrations",
    "headingTitle": "Raw Migrations",
    "text": "Raw Migrations Use the Raw Migrations tab to create, export, import, and restore snapshots of your application data. You can use snapshots to back up data or move it between environments. Every restore opens the Raw Migration Restore Editor. It analyzes the snapshot against the current SQL schema, lets you map renamed tables and columns, and requires you to choose the SQL tables and bucket controllers that may be modified. The preview validates required columns, primary keys, types, and schema fingerprints before execution. Mapping presets can be imported or downloaded as JSON for reuse. Tables and buckets excluded from the plan are not cleared or restored.",
    "api": false
  },
  {
    "filePath": "@taon-dev/sudo/README.md",
    "headingId": "app-state",
    "headingTitle": "App State",
    "text": "App State Work in progress The App State tab is designed to control when users can interact with your application and when it accepts API requests. Planned features include: Schedule a maintenance window that blocks new database transactions for a set duration, such as 20 minutes. Block incoming user requests and redirect users to a maintenance page. Automatically lock the application after a manual deployment rollback so you can reverse the affected transactions before unlocking it.",
    "api": false
  },
  {
    "filePath": "@taon-dev/sudo/README.md",
    "headingId": "http-errors",
    "headingTitle": "HTTP Errors",
    "text": "HTTP Errors Use the HTTP Errors tab to mute HTTP errors, which can be useful when testing your application locally.",
    "api": false
  },
  {
    "filePath": "@taon-dev/sudo/README.md",
    "headingId": "sql-scripts",
    "headingTitle": "SQL Scripts",
    "text": "SQL Scripts Work in progress The SQL Scripts tab will let you save reusable SQL snippets and run them against your application database.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/README.md",
    "headingId": "ui",
    "headingTitle": "ui",
    "text": "ui Hello from Standalone Project",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/README.md",
    "headingId": "context-aware-admin-navigation",
    "headingTitle": "Context-aware admin navigation",
    "text": "Context-aware admin navigation menuItem accepts a plain string, a function returning a string, or an Angular Signal<string>: menuItem: 'Users', menuItem: () => `Users (${userCount()})`, menuItem: usersLabel, // e.g. signal('Users') or computed(() => 'Users') These are alternative values for the same option. Functions and signals are read when rendering sidebar items and nested tabs, so signal updates refresh labels without reloading routes. Existing string labels remain supported. Omitting menuItem keeps the label derived from the route path. adminLazyRoute<TContext>() accepts any application-defined context type. Existing routes without context callbacks continue to work. interface MyAuthContext { isAuthenticated: boolean; isAdmin: boolean; } adminLazyRoute<MyAuthContext>({ path: 'sudo', menuItem: 'Sudo', color: 'red', icon: 'supervisor_account', expandable: false, isDisabled: ({ context }) => !context.isAuthenticated, isDisabledTooltip: ({ context }) => context.isAuthenticated ? '' : 'You must be authenticated to use Sudo', isVisible: ({ context }) => context.isAdmin, loader: () => import('@taon-dev/sudo/src').then(m => m.TaonSudoBackofficeRoutes), }); Supply the matching context to the panel enclosing the admin router outlet: <taon-draggable-button-panel [context]=\"authContext\" outlet=\"admin\" basePath=\"main\"> <router-outlet name=\"admin\" /> </taon-draggable-button-panel> The panel shares its current context with the routed admin layout and nested navigation tabs. Updating the context input (for example, assigning a new authContext object when authentication changes) updates the menu without reloading route metadata. Provide a context value whenever callbacks require it. isVisible returning false removes the menu item from rendering. isDisabled returning true keeps the item visible with reduced opacity, but prevents menu navigation and expansion. isDisabledTooltip is evaluated only for disabled items. These options control navigation UI, not access to URLs; use Angular route guards for authorization.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/README.md",
    "headingId": "admin-page-search",
    "headingTitle": "Admin page search",
    "text": "Admin page search Routes are excluded from search unless explicitly opted in: adminLazyRoute({ path: 'users', menuItem: 'Users', search: { label: 'Manage users', keywords: ['accounts', 'people'] }, loader: () => import('./users.routes').then(m => m.UsersRoutes), }); Use search: true to use the resolved menuItem (or path-derived label). Custom labels also accept functions or signals. Search traverses nested children and loadAdminChildren metadata without loading page components. Hidden or disabled routes and their descendants, redirects, wildcards, and routes with unresolved path parameters are excluded. Search is navigation UI, not an authorization mechanism. icon uses Angular Material's MatIcon['fontIcon'] type (string), supporting Material icon ligatures without maintaining a partial list of icon names.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "taon-detachable-dialog-content",
    "headingTitle": "Taon Detachable Dialog Content",
    "text": "Taon Detachable Dialog Content taon-detachable-dialog-content allows a routed Taon Admin component to create a persistent detached copy of itself. Detached windows are independent Angular component instances and survive normal Angular Router navigation. This allows Taon Admin to behave like a small desktop workspace: TAON ADMIN ┌──── Users ──────────────┐ │ │ │ │ └─────────────────────────┘ ┌──── Posts ──────────────┐ │ │ │ │ └─────────────────────────┘ ┌──── Post #123 ─────────┐ │ │ │ │ └────────────────────────┘ You can detach /users, navigate to /posts, detach that page, open /cms/posts/123, detach that page, and then navigate anywhere else. All three detached components remain alive and can continue communicating with the backend.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "1-add-the-global-detached-windows-host",
    "headingTitle": "1. Add the global detached windows host",
    "text": "1. Add the global detached windows host The host MUST live outside the routed component tree. For example, inside the main Taon Admin component: @Component({ imports: [ RouterOutlet, TaonDetachedWindowsHostComponent, ], template: ` <router-outlet /> `, }) export class TaonAdminComponent {} Do NOT put taon-detached-windows-host inside a component that gets destroyed during navigation. There should normally be only one host.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "2-make-a-page-detachable",
    "headingTitle": "2. Make a page detachable",
    "text": "2. Make a page detachable Example users component: @Component({ selector: 'app-users', standalone: true, imports: [ TaonDetachableDialogContentComponent, ], template: ` <taon-detachable-dialog-content title=\"Users\" [component]=\"UsersComponent\"> <h1>Users</h1> <app-users-table /> </taon-detachable-dialog-content> `, }) export class UsersComponent { readonly UsersComponent = UsersComponent; } The normal page displays: ┌──────────────────────────────────── ↗ ┐ │ Users │ │ │ │ ... │ └───────────────────────────────────────┘ Clicking ↗ creates another UsersComponent. It does NOT move the existing DOM/component.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "3-navigate-somewhere-else",
    "headingTitle": "3. Navigate somewhere else",
    "text": "3. Navigate somewhere else After detaching Users: /users ↓ detach ↓ [ Users detached window ] You can navigate to: /posts The original routed UsersComponent is destroyed normally. The detached UsersComponent is NOT destroyed because it belongs to: TaonAdminComponent │ ├── RouterOutlet │ └── PostsComponent │ └── TaonDetachedWindowsHostComponent └── UsersComponent",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "4-detach-another-page",
    "headingTitle": "4. Detach another page",
    "text": "4. Detach another page Posts: @Component({ selector: 'app-posts', standalone: true, imports: [ TaonDetachableDialogContentComponent, ], template: ` <taon-detachable-dialog-content title=\"Posts\" [component]=\"PostsComponent\"> <app-posts-table /> </taon-detachable-dialog-content> `, }) export class PostsComponent { readonly PostsComponent = PostsComponent; } You can now have: ┌──── Users ──────────────┐ ┌──── Posts ──────────────┐ at the same time.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "5-route-parameters-are-copied",
    "headingTitle": "5. Route parameters are copied",
    "text": "5. Route parameters are copied Consider: /cms/posts/123 with: const id = inject(ActivatedRoute) .snapshot .params['id']; When the page is detached, Taon captures the route state. The detached component receives its own ActivatedRoute containing: params = { id: '123', }; Therefore the new component can load Post #123 normally. Navigating afterward to: /cms/posts/456 does NOT change the detached window. You can therefore have: ┌──── Post #123 ────────┐ ┌──── Post #456 ────────┐ simultaneously.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "6-query-parameters",
    "headingTitle": "6. Query parameters",
    "text": "6. Query parameters Query parameters are also captured. For example: /users?page=5&search=john creates a detached component with: route.snapshot.queryParams equivalent to: { page: '5', search: 'john', } The detached route is intentionally independent from subsequent browser navigation.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "7-database-operations",
    "headingTitle": "7. Database operations",
    "text": "7. Database operations A detached component is a REAL Angular component. It can continue using normal Taon services/controllers: await this.usersController .update(user); or: this.postsController .getAll(); There is nothing special about backend communication from a detached window. For example: Browser route: /admin/settings Desktop: ┌──── Users ───────────────────┐ │ John │ │ Kate │ │ Mark │ │ [delete] │ └──────────────────────────────┘ ┌──── Posts ───────────────────┐ │ Hello World │ │ Taon documentation │ │ [edit] │ └─────────────────────────────┘ Both windows can still modify database data.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "8-component-state",
    "headingTitle": "8. Component state",
    "text": "8. Component state Detaching creates a NEW component instance. It does not transfer arbitrary local component state. For example, if the routed component contains: form.patchValue({ title: 'unsaved title', }); the detached component will initialize normally and usually reload its data from the backend. The unsaved form value is NOT automatically copied. This is intentional. Route state is copied. Component state is not. State transfer can be implemented separately later if needed.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "9-multiple-instances",
    "headingTitle": "9. Multiple instances",
    "text": "9. Multiple instances TaonDetachedWindowsService intentionally stores an array: readonly windows = signal<TaonDetachedWindow[]>([]); There is no single-dialog restriction. The following is valid: Users Users filtered by admin Posts Post #123 Post #456 Permissions Database all open simultaneously.",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "architecture",
    "headingTitle": "Architecture",
    "text": "Architecture The important ownership model is: TaonAdminComponent │ ├── RouterOutlet │ │ └── current routed page │ │ └── TaonDetachedWindowsHostComponent │ ├── UsersComponent │ ├── PostsComponent │ ├── PostComponent (id=123) │ └── PostComponent (id=456) Angular Router controls only the first branch. Detached windows belong to the second branch. Therefore: router navigation ↓ destroys routed component ↓ does NOT destroy detached windows",
    "api": false
  },
  {
    "filePath": "@taon-dev/ui/src/lib/taon-detachable-dialog-content/taon-detachable-dialog-content.md",
    "headingId": "future-improvements",
    "headingTitle": "Future improvements",
    "text": "Future improvements The detached-window infrastructure can later support: minimize maximize fullscreen z-index / bring-to-front remembered window position remembered window size taskbar window titles based on entity data restoring workspace after refresh duplicate prevention multiple instances of the same route synchronization/reload events between windows integration with Taon's existing draggable admin panel A useful next abstraction would be: TaonWorkspaceWindow where detachable routed content is only one way of creating a workspace window.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "taon-architecture",
    "headingTitle": "Taon architecture",
    "text": "Taon architecture Taon is a TypeScript framework and CLI for building applications and reusable libraries. A standalone Taon project keeps its source in one src/ tree. The CLI uses that source to build the library or application artifacts configured for the project. Taon workspaces can contain several projects. Each project has a root taon.jsonc that identifies its type and defines its project-specific configuration.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "identify-a-taon-project",
    "headingTitle": "Identify a Taon project",
    "text": "Identify a Taon project Open taon.jsonc in the directory you are inspecting. Its type field tells you how to navigate the project. type Project kind Where to look next isomorphic-lib Standalone project Open src/ for the application and library source. container Container project Look for child directories with their own taon.jsonc. The snippets below show only the field that identifies the project type. An existing taon.jsonc can contain additional settings.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "standalone-projects",
    "headingTitle": "Standalone projects",
    "text": "Standalone projects A standalone project declares isomorphic-lib in its root taon.jsonc. { \"type\": \"isomorphic-lib\" } A standalone project owns its src/ tree. It can expose reusable code through its library entry point and use the same code in its application entry points. For example, a project can export a context and its building blocks for other Taon projects to use, while also providing an application that runs them. A standalone project can live on its own or inside a Taon container. It may have its own Git repository. The type field describes the Taon project structure. Check the Git root separately when working across projects. my-feature/ taon.jsonc src/ lib/ index.ts app.ts",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "container-projects",
    "headingTitle": "Container projects",
    "text": "Container projects A container declares container in its root taon.jsonc. { \"type\": \"container\" } A container groups standalone projects and can also contain nested containers. Each child project has its own root configuration. A workspace can therefore contain reusable libraries, consuming applications, and groups of related projects at different levels. workspace/ taon.jsonc shared-feature/ taon.jsonc src/ applications/ taon.jsonc website/ taon.jsonc src/ In this layout, workspace/ and applications/ are containers. shared-feature/ and website/ are standalone projects. If website/ consumes a feature exported by shared-feature/, follow the import to find the implementation. Reusable behavior belongs in the project that provides it. Website-specific configuration and integration belong in website/.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "navigate-a-workspace",
    "headingTitle": "Navigate a workspace",
    "text": "Navigate a workspace Start with the taon.jsonc in the directory you are inspecting. In a container, look for child directories with their own taon.jsonc. Apply the same check when you encounter a nested container. In a standalone project, open src/ and identify the entry point or module relevant to your task. If the task spans projects, trace imports from the consuming application to the standalone project that exports the feature.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "standalone-project-entry-points",
    "headingTitle": "Standalone project entry points",
    "text": "Standalone project entry points The files below are common entry points. Check the project's taon.jsonc and src/ tree to see which artifacts it supports. Path Purpose src/lib/index.ts Exports the project's reusable library code. src/app.ts Application entry point for the Angular frontend and Node.js backend. src/app.electron.ts Entry point for an Electron application. src/app.vscode.ts Entry point for a VS Code extension. src/cli.ts Entry point when the project produces a CLI tool. src/global.scss Global application styles.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "how-an-application-is-assembled",
    "headingTitle": "How an application is assembled",
    "text": "How an application is assembled A project owns source code and build configuration. A context assembles runtime building blocks such as controllers, entities, repositories, and providers. A reusable project can export a context through its library entry point so a consuming application can compose it with its own contexts. See Contexts and Dependency injection for registration, inheritance, and injection patterns.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "isomorphic-source-and-runtime-targets",
    "headingTitle": "Isomorphic source and runtime targets",
    "text": "Isomorphic source and runtime targets Taon can build browser and backend versions of the same TypeScript source. Code regions determine which parts of a file are included in each output. Check the target before choosing a dependency, accessing a secret, or using a runtime-specific API. Target Where backend logic runs What to account for Node.js In a Node.js process. Keep server credentials and server-only integrations in the backend. WebSQL In the browser, with a browser-local database. Browser code and storage are accessible to the user. Public webhooks require a separately reachable backend. Cloudflare Worker In a Cloudflare Worker. Use Worker-compatible dependencies, bindings, and storage adapters. Check compatibility before using Node.js APIs. Electron In the Electron backend, with an Angular UI that communicates over IPC. Keep backend and renderer code in the appropriate build regions. A project's supported targets depend on its configuration and dependencies. See Isomorphic code regions for how to write code that builds for the intended runtime.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "build-and-run-a-standalone-project",
    "headingTitle": "Build and run a standalone project",
    "text": "Build and run a standalone project The Taon framework README lists Node.js 22 or later as a prerequisite. From the standalone project root, start the library watch build in one terminal. taon build:lib taon build:watch:lib Start the Node.js application in a second terminal (ng server). Taon watch build lib mode is needed when we want to see ng serve changes. taon app:normal For projects that support other runtime targets, the CLI also provides the following development commands. Command Target taon app:websql Browser-local WebSQL backend taon app:cloudflare Cloudflare Worker taon app:electron Electron taon app:normal Normal NodeJS See the CLI command guide.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/architecture.md",
    "headingId": "further-reading",
    "headingTitle": "Further reading",
    "text": "Further reading Controllers Entities Migrations",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/dependency-injection.md",
    "headingId": "dependency-injection-naming-conventions",
    "headingTitle": "Dependency Injection Naming Conventions",
    "text": "Dependency Injection Naming Conventions",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/dependency-injection.md",
    "headingId": "angular-services",
    "headingTitle": "Angular services",
    "text": "Angular services Use the full class-based name for injected application services. class MyExampleComponent { // GOOD - name based on the injected class myApiService = inject(MyApiService); // BAD api = inject(MyApiService); }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/dependency-injection.md",
    "headingId": "short-names-for-common-angular-dependencies",
    "headingTitle": "Short names for common Angular dependencies",
    "text": "Short names for common Angular dependencies Short, conventional names are allowed for well-known Angular framework dependencies when their meaning is obvious. Examples: class MyExampleComponent { cdr = inject(ChangeDetectorRef); route = inject(ActivatedRoute); router = inject(Router); injector = inject(Injector); destroyRef = inject(DestroyRef); location = inject(Location); } Do not unnecessarily expand conventional Angular names: // NOT REQUIRED changeDetectorRef = inject(ChangeDetectorRef); activatedRoute = inject(ActivatedRoute); For application-specific services, always prefer the full class-based name.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/dependency-injection.md",
    "headingId": "taon-angular-services",
    "headingTitle": "Taon Angular services",
    "text": "Taon Angular services Use the full class-based name of controllers injected into API services. class MyExampleApiService extends TaonBaseAngularService { userController = this.inject(UserController); } Use the full class-based name of providers injected into config services. class MyExampleConfigService extends TaonBaseAngularService { myUserProvider = this.inject(MyUserProvider); } Avoid shortened or generic names such as: // BAD controller = this.inject(UserController); userCtrl = this.inject(UserController); provider = this.inject(MyUserProvider); userProv = this.inject(MyUserProvider);",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/dependency-injection.md",
    "headingId": "taon-framework-di",
    "headingTitle": "Taon framework DI",
    "text": "Taon framework DI For Taon repositories, providers, controllers, and other injectable building blocks, use the full class-based name. class MyExampleController { myUserRepository = this.inject(MyUserRepository); myBookProvider = this.inject(MyBookProvider); } Avoid shortened or generic names: // BAD repo = this.inject(MyUserRepository); userRepo = this.inject(MyUserRepository); provider = this.inject(MyBookProvider); bookProv = this.inject(MyBookProvider);",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/dependency-injection.md",
    "headingId": "general-rule",
    "headingTitle": "General rule",
    "text": "General rule The injected property name should normally be the camelCase version of the injected class name: MyApiService -> myApiService UserController -> userController MyUserProvider -> myUserProvider MyUserRepository -> myUserRepository The exception is common Angular framework dependencies with established, unambiguous short names such as cdr, route, and router.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/framework.md",
    "headingId": "taon-framework-building-blocks",
    "headingTitle": "Taon framework building blocks",
    "text": "Taon framework building blocks A Taon application is assembled from building blocks registered in a context. Controllers expose APIs, repositories handle backend data access, and Angular services connect the UI to those APIs and to context configuration. Start with Architecture if you need to locate the right project or understand its runtime targets. Start with Contexts if you are adding a feature to an existing project.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/framework.md",
    "headingId": "find-the-right-building-block",
    "headingTitle": "Find the right building block",
    "text": "Find the right building block If you need to… Read Register building blocks, compose reusable contexts, or initialize an application context Contexts Expose a REST endpoint, add entity CRUD, or return a structured API error Controllers Call a Taon controller from an Angular application API services Map a TypeScript class to a database table Entities Query entities or encapsulate custom backend operations Repositories Store and retrieve typed values by key KV repositories Define context-scoped configuration or resolve environment values Providers Expose context configuration to Angular components Configuration services Intercept requests across a context, a controller, or an individual endpoint Middleware and interceptors React to entity lifecycle events Subscribers Evolve a database schema or understand how database modes affect existing data Migrations",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/framework.md",
    "headingId": "how-the-pieces-fit-together",
    "headingTitle": "How the pieces fit together",
    "text": "How the pieces fit together For a feature such as listing users, an Angular component calls an API service. The service calls a Taon controller endpoint. The controller uses a repository to query the User entity and returns the result. The context registers the backend building blocks that the feature uses. Configuration follows its own path. A provider holds context-scoped configuration, and an Angular configuration service exposes the values the UI needs. Middleware can intercept the API request, while subscribers react to entity events and migrations evolve the database over time.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/framework.md",
    "headingId": "related-guides",
    "headingTitle": "Related guides",
    "text": "Related guides Dependency injection explains how to resolve classes from the appropriate context. Isomorphic code regions explains which code is included in browser and backend builds.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "internationalization-i18n",
    "headingTitle": "Internationalization (i18n)",
    "text": "Internationalization (i18n) All user-visible text that may need localization should use the Taon translation system.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "frontend",
    "headingTitle": "Frontend",
    "text": "Frontend Use the Taon translation system in Angular components, services, directives, and other frontend code.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "component-setup",
    "headingTitle": "Component setup",
    "text": "Component setup Create the translation helper once at file level: import { Taon } from 'taon/src'; import { Translation } from '@taon-dev/i18n/src'; const t = Translation.for( Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, ); @Component({ selector: 'my-component', // ... }) export class MyComponent { //#region injections t = t.for(this); //#endregion signalLabel = this.t.signal.gettext('Label signal'); signalWithParams = this.t.signal.gettext('Params: [[ test ]]', { test: 'test param', }); normalLabel = this.t.gettext('Normal label'); normalLabelWithContext = this.t.gettext( 'Normal label', {}, 'context of translation', ); refresh = new BehaviorSubject({}); valueInsideComponent = 'dynamic!'; observableLabel$ = this.refresh.asObservable().pipe( switchMap(() => this.t.$.gettext('I am [[ dynamicParam ]]', { dynamicParam: this.valueInsideComponent, }), ), ); }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "choosing-the-translation-api",
    "headingTitle": "Choosing the translation API",
    "text": "Choosing the translation API Choose the simplest API appropriate for the value. 1. Signal translation Prefer Signal-based translations for values that should reactively update when the active language changes: signalLabel = this.t.signal.gettext('Label signal'); Parameters are supported: signalWithParams = this.t.signal.gettext('Params: [[ test ]]', { test: 'test param', }); Use [[ paramName ]] placeholders for dynamic translation parameters. 2. Normal synchronous translation Use gettext() when a reactive value is not needed: normalLabel = this.t.gettext('Normal label'); Use the optional context argument when identical source text may require different translations depending on its meaning: normalLabelWithContext = this.t.gettext( 'Normal label', {}, 'context of translation', ); 3. Observable translation Use the Observable API only when the translated value naturally belongs to an existing RxJS flow: observableLabel$ = this.refresh.asObservable().pipe( switchMap(() => this.t.$.gettext('I am [[ dynamicParam ]]', { dynamicParam: this.valueInsideComponent, }), ), ); Do NOT introduce an Observable solely for translation when a normal or Signal-based translation is sufficient.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "template-usage",
    "headingTitle": "Template usage",
    "text": "Template usage Translations may be consumed directly in Angular templates: <span>{{ signalLabel() }}</span> <span>{{ signalWithParams() }}</span> <span>{{ normalLabel }}</span> <span>{{ normalLabelWithContext }}</span> <span>{{ observableLabel$ | async }}</span> <span>{{ t.gettext('This also works!') }}</span> <!-- only when TranslateDirective included in imports --> <span translate>This will also be translated!</span>",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "frontend-rules",
    "headingTitle": "Frontend rules",
    "text": "Frontend rules Translate user-visible text when appropriate. Do NOT hardcode text in TypeScript when that text should be localized. Prefer Signals for reactive translations. Use normal gettext() for simple synchronous translations. Use t.$.gettext() only when working naturally inside an RxJS flow. Do NOT create RxJS streams just to translate a value. Use translation context when the same source text can have different meanings. Use [[ param ]] placeholders instead of manually concatenating dynamic values into translation strings. if you use TranslateDirective => you still needs to assign \"t\" variable to Component body t = t.for(this);",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "backend",
    "headingTitle": "Backend",
    "text": "Backend Backend translation works differently from frontend translation. Taon provides a request-specific translation instance through the third argument of the controller handler. The language is associated with the current request and may be detected from request information such as cookies.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "important-do-not-create-the-frontend-translation-helper",
    "headingTitle": "Important: do NOT create the frontend translation helper",
    "text": "Important: do NOT create the frontend translation helper Do NOT do this in a Taon backend controller: // 🚫 DO NOT USE THIS FOR CONTROLLER REQUEST TRANSLATION const t = Translation.for( Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, ); This pattern is intended for Angular/frontend classes such as components, services, and directives. For controller request translation, always use the t supplied to the request handler: return async (req, res, { t }) => { // use t here };",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "backend-translations-are-synchronous",
    "headingTitle": "Backend translations are synchronous",
    "text": "Backend translations are synchronous Inside the request handler, use the synchronous translation API. Do NOT use: t.signal t.$ translation Signals translation Observables Use: t.gettext(...) or, when translating arbitrary/dynamic text: t.translate(...)",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "translate-using-the-request-language",
    "headingTitle": "Translate using the request language",
    "text": "Translate using the request language @TaonController({ className: 'ExampleController', }) export class ExampleController extends TaonBaseController { @GET() helloWorld( @Query('yourName') yourName: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { return `${t.gettext('Hello')} : ${yourName}`; }; //#endregion } } Here, t uses the language detected for the current request.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "force-a-specific-language",
    "headingTitle": "Force a specific language",
    "text": "Force a specific language When a response must use a specific language regardless of the request language, explicitly change it: @GET() helloWorldInFrench( @Query('yourName') yourName: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { await t.changeFileLang('fr-FR'); return `${t.gettext('Hello')} : ${yourName}`; }; //#endregion } Do not force a language unless the feature specifically requires it.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "translate-arbitrary-text",
    "headingTitle": "Translate arbitrary text",
    "text": "Translate arbitrary text For arbitrary text that is not a predefined gettext() translation entry, use translate(): @POST() translateSomethingUnknown( @Body('bigText') bigText: string, ): Taon.Response<string> { //#region @websqlFunc return async (req, res, { t }) => { t.changeFileLang('es-ES'); return t.translate(bigText); }; //#endregion }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "backend-rules",
    "headingTitle": "Backend rules",
    "text": "Backend rules Always obtain t from the third controller-handler argument: { t }. Treat t as request-specific. Use t.gettext() for known application strings. Use t.translate() for arbitrary/dynamic text. Use t.changeFileLang(...) only when the endpoint explicitly needs to override the detected request language. Do NOT create a frontend-style Translation.for(...) instance for controller request translation. Do NOT use Signals or Observables for backend translation. Do NOT introduce frontend translation patterns into backend controller handlers.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/i18n.md",
    "headingId": "cli",
    "headingTitle": "CLI",
    "text": "CLI Extracting translation from .ts, html to .po files taon lang:extract",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/isomorphic-code-regions.md",
    "headingId": "isomorphic-code-regions",
    "headingTitle": "Isomorphic code regions",
    "text": "Isomorphic code regions Taon builds shared TypeScript source for different runtimes. The CLI processes the region markers below when it creates browser, WebSQL, CommonJS, or ESM output. Put explanatory prose outside code examples; keep the exact region markers in code because they are part of the build input.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/isomorphic-code-regions.md",
    "headingId": "backend-code",
    "headingTitle": "Backend code",
    "text": "Backend code Use @backend for a block that belongs to a backend build and can be omitted from ordinary browser output. Use @backendFunc when a function body is backend-only and the browser build must retain a function that returns undefined. function getNodeVersion(): string | undefined { //#region @backendFunc return process.version; //#endregion } @websql and @websqlFunc are for code that belongs to Node.js and WebSQL backend builds. WebSQL mode runs backend logic in the browser; it is not the same as an ordinary browser build. function getBackendValue(): string | undefined { //#region @websqlFunc return 'backend-value'; //#endregion } Use a shared fallback after a @backend region when the browser needs a different implementation: function getRuntimeName(): string { //#region @backend return process.release.name; //#endregion return 'browser'; }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/isomorphic-code-regions.md",
    "headingId": "browser-only-and-websql-only-code",
    "headingTitle": "Browser-only and WebSQL-only code",
    "text": "Browser-only and WebSQL-only code Use @browser for code that should be emitted for the browser and omitted from backend output. Imports can also use an inline marker at the end of the import statement: import { TaonAdminService } from 'taon/src'; // @browser Use @websqlOnly for code that is specific to WebSQL browser mode and should not be emitted for Node.js: //#region @websqlOnly const websqlOnlyValue = 'browser backend'; //#endregion",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/isomorphic-code-regions.md",
    "headingId": "commonjs-and-esm-differences",
    "headingTitle": "CommonJS and ESM differences",
    "text": "CommonJS and ESM differences @esmRemove marks code to remove from the ESM backend output, such as a Node.js API that is unavailable in a Cloudflare Worker. @cjsRemove marks code to remove from the CommonJS backend output. function loadValue(): string { if (isCloudflareWorker()) { //#region @esmRemove return readFromNodeFilesystem(); //#endregion return readFromWorkerBinding(); } return readFromNodeFilesystem(); } Cloudflare Workers use an ESM runtime and do not provide the full Node.js runtime. Keep Worker bindings and APIs in the ESM-compatible path and test the actual Worker artifact; a successful Node.js build does not verify Worker compatibility.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/isomorphic-code-regions.md",
    "headingId": "file-suffixes-and-imports",
    "headingTitle": "File suffixes and imports",
    "text": "File suffixes and imports Use .browser.ts for files intended only for browser-side code and .backend.ts for Node.js-only code when the project's build recognizes those suffixes. Angular component files are browser UI. Do not infer runtime support from a generic .service.ts or .routes.ts name; inspect the target project's build rules and examples. Inline import annotations such as // @browser are build markers and must remain at the end of the import statement. Do not place the marker above or below the import. Avoid unmarked Node.js built-ins in shared files; use a region or a runtime-neutral Taon API. For available targets and transport differences, see Architecture and Transport layer.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/realtime.md",
    "headingId": "realtime-communications",
    "headingTitle": "Realtime communications",
    "text": "Realtime communications Depending on where you use you backend/frontend - taon framework uses different mechanism for realtime communication: normal NodeJs backend => TCP(upgrade) socket communication based on socket.io (UDP in future) electron backend => IPC for realtime communication websql browser backend => mock of realtime communication based on RxJS library cloudfalre (realtime not supported) You can listen/subscribe to custom events or entities events in every simple fashion. @TaonSubscriber({ className: 'RealtimeClassSubscriber', }) export class RealtimeClassSubscriber extends TaonBaseSubscriberForEntity { listenTo() { return UserEntity; } afterInsert(entity: any) { console.log(`AFTER INSERT: `, entity); MainContext.realtime.server.triggerEntityTableChanges(UserEntity); } } // listen change on backend async function start() { MainContext.realtime.server .listenChangesCustomEvent(saveNewUserEventKey) .subscribe(async () => { console.log('save new user event'); await realtimeUserController.saveNewUser(); }); } // listen changes on frontend export class RealtimeClassSubscriberComponent { ngOnInit(): void { console.log('realtime client subscribers start listening!'); MainContext.realtime.client .listenChangesEntityTable(UserEntity) .pipe(untilDestroyed(this), debounceTime(1000)) .subscribe(message => { console.log('realtime message from class subscriber ', message); }); } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/special-files/models.md",
    "headingId": "models",
    "headingTitle": "Models",
    "text": "Models create FOLDER_NAME.models.ts for validatros insert in this file backend/frontend models (classes, interfaces, types, enums) use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/special-files/utils.md",
    "headingId": "utils",
    "headingTitle": "Utils",
    "text": "Utils create FOLDER_NAME.utils.ts for any kind of helpers things from utils file should be resued between backend and frontned use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/special-files/validators.md",
    "headingId": "validator",
    "headingTitle": "Validator",
    "text": "Validator create FOLDER_NAME.validators.ts for validatros insert in this file backend/frontend validators use namespace (taon in production flatten namespaces for tree shaking)",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/api-services.md",
    "headingId": "taon-api-service",
    "headingTitle": "Taon API service",
    "text": "Taon API service An API service injects Taon controllers and provides an application-scoped place to adapt requests and responses or maintain state. Avoid providedIn: 'root' when the service must be scoped to an injected Taon context. @Injectable() export class UserApiService extends TaonBaseAngularService { protected userController = this.inject(UserController); getCrudController() { return this.userController; } getAll() { return this.userController.getAll() .request() .observable .pipe(map(response => response.body.json)); } async getTime() { const response = await this.userController.whatTimeIsIt().request(); return response.body.text; } } request().observable exposes the observable request path; awaiting request() uses the promise path. The response body provides parsed text or JSON and other response representations according to the controller's response type.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "taon-config-service",
    "headingTitle": "Taon Config Service",
    "text": "Taon Config Service A Taon Config Service acts as a bridge between Taon providers and Angular components, exposing context-specific configuration and frontend-friendly properties. Use a Config Service to: Inject Taon providers associated with a specific Taon context. Access frontend-specific configuration exposed by Taon providers. Expose convenient properties and methods for Angular components without requiring them to interact directly with providers. Keep configuration context-scoped, rather than sharing a single service instance across the entire Angular application.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "example",
    "headingTitle": "Example",
    "text": "Example @Injectable({}) export class UserConfigService extends TaonBaseAngularService { userProvider = this.inject(UserProvider); get isLoginAvailable(): boolean { return this.userProvider.login.enabled; } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "important-notes",
    "headingTitle": "Important Notes",
    "text": "Important Notes",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "context-scoped-dependency-injection",
    "headingTitle": "Context-scoped dependency injection",
    "text": "Context-scoped dependency injection Do not use providedIn: 'root' when declaring a Taon Config Service. Unlike regular Angular services registered globally, Taon Config Services must be scoped to their corresponding Taon context. This ensures that different contexts can maintain independent configurations without sharing a single service instance across the entire application.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "provider-injection",
    "headingTitle": "Provider injection",
    "text": "Provider injection Taon Config Services use this.inject() to access Taon providers. Currently, only Taon controllers can be injected into Config Services. Controllers act as the bridge between backend and frontend functionality.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/config-services.md",
    "headingId": "recommended-usage",
    "headingTitle": "Recommended usage",
    "text": "Recommended usage Prefer exposing simple getters and methods from your Config Service instead of accessing provider configuration directly throughout Angular components. This keeps components clean, centralizes context-specific configuration, and separates Taon framework logic from UI implementation.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "taon-contexts",
    "headingTitle": "Taon contexts",
    "text": "Taon contexts A context is Taon's registration and runtime boundary for framework building blocks such as controllers, entities, repositories, providers, migrations, and subcontexts. Register a class in the context that owns its behavior rather than constructing it directly.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "abstract-and-active-contexts",
    "headingTitle": "Abstract and active contexts",
    "text": "Abstract and active contexts An abstract context is reusable library configuration. An active context combines reusable contexts with application-specific host configuration and runtime settings. The CLI generates host configuration for deployable app contexts; keep application-specific configuration in the application's context. import { Taon, TaonBaseContext } from 'taon/src'; export const MainAbstractContext = Taon.createContext(() => ({ contextName: 'MainAbstractContext', abstract: true, contexts: { TaonBaseContext, }, })); An active app context can include the abstract context and use its registered building blocks: export const AppContext = Taon.createContext(() => ({ ...HOST_CONFIG['AppContext'], contexts: { MainAbstractContext, }, })); Use TaonBaseContext where the application needs Taon's standard base context. Add controllers, entities, repositories, providers, subscribers, migrations, and database settings to the context configuration that owns them. Keep class names and context names unique where Taon uses them for registration or generated API paths.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "initialization",
    "headingTitle": "Initialization",
    "text": "Initialization Initialize each active context before using its APIs or resolving its registered services. Abstract contexts are included by active contexts rather than initialized as application entry points. Database and migration behavior depends on the active context's configuration; see Migrations.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/contexts.md",
    "headingId": "related-building-blocks",
    "headingTitle": "Related building blocks",
    "text": "Related building blocks Controllers Repositories Providers Entities Configuration services",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/controllers.md",
    "headingId": "taon-controllers",
    "headingTitle": "Taon controllers",
    "text": "Taon controllers Taon controllers define backend endpoints that frontend code can call through an Angular API service. Inject controllers only in *.api.service.ts files. Angular components call the API service. Add a custom endpoint Use @TaonController to define a controller and @GET() to expose a method as a GET endpoint. The example below returns a plain string. Keep the @websqlFunc region markers in the example because Taon uses them as build directives. @TaonController({ className: 'UserController' }) export class UserController extends TaonBaseController { @GET() helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } } Generate CRUD endpoints for an entity Extend TaonBaseCrudController<User> and set entityClassResolveFn to return the User entity class. The base controller provides standard CRUD methods such as getAll() and update(). You can add custom endpoints alongside those methods. @TaonController({ className: 'UserController' }) export class UserController extends TaonBaseCrudController<User> { entityClassResolveFn = () => User; @GET() whatTimeIsIt(): Taon.Response<string> { //#region @websqlFunc return async () => new Date().toString(); //#endregion } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/controllers.md",
    "headingId": "error-handling-in-controllers",
    "headingTitle": "Error handling in controllers",
    "text": "Error handling in controllers Prefer Taon.error() when an endpoint needs to return a structured error. It throws immediately, so execution stops at the call. Supply message and status, and include code when clients need a stable identifier for the error. Approach Behavior Taon.error() Recommended for structured errors with an HTTP status and an optional application error code. throw '…' Throws a plain string message. throw new Error('…') Throws an Error object with a message and stack trace. res.status(...).json(...) Writes an Express response directly. Prefer Taon.error() for Taon endpoints. Return immediately after sending the response to stop the handler. The example selects an error-handling approach using the errorType query parameter. When the parameter is omitted, the endpoint returns a greeting. @TaonController({ className: 'SampleController' }) export class SampleController extends TaonBaseController { @GET() helloWorld( @Query('errorType') errorType?: 'short' | 'stack' | 'customCode' | 'taonError', ): Taon.Response<string> { //#region @websqlFunc return async (_req, res) => { if (errorType === 'taonError') { Taon.error({ message: 'This is a custom Taon error.', code: 'CUSTOM_ERR', status: 499, }); } if (errorType === 'short') { throw 'A short error message.'; } if (errorType === 'stack') { throw new Error('An error with a stack trace.'); } if (errorType === 'customCode') { res.status(444).json({ customErrorMessage: 'A custom error response.', }); return; } return 'Hello, world!'; }; //#endregion } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "taon-entities",
    "headingTitle": "Taon entities",
    "text": "Taon entities A Taon entity is a TypeScript class that maps to a database table. Taon builds on TypeORM entities. You can also use an entity class as a data transfer object (DTO) when its fields match the API contract. Define a separate DTO when an endpoint accepts or exposes only part of the entity.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "define-an-entity",
    "headingTitle": "Define an entity",
    "text": "Define an entity Decorate the class with @TaonEntity and set className to the class name. Use Taon column decorators to define persisted fields. In this example, @StringColumn() maps location to a database column. The @websql region markers are Taon build directives. Keep them around the column decorator as shown. @TaonEntity({ className: 'Project' }) export class Project extends TaonBaseEntity { //#region @websql @StringColumn() //#endregion location?: string; } The ? makes location optional in TypeScript. Configure database nullability and defaults through the column definition.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "use-the-base-entity-with-id-and-version-fields",
    "headingTitle": "Use the base entity with ID and version fields",
    "text": "Use the base entity with ID and version fields Extend TaonBaseAbstractEntity when you want Taon to provide id and version fields. Declare the fields specific to your entity in the subclass. @TaonEntity({ className: 'User' }) export class User extends TaonBaseAbstractEntity { //#region @websql @StringColumn() //#endregion name?: string; }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "inject-an-entity-repository",
    "headingTitle": "Inject an entity repository",
    "text": "Inject an entity repository Use this.injectRepo() in your Taon context to get the repository for an entity. Pass the entity class so Taon can resolve the corresponding repository. private readonly userRepository = this.injectRepo(User);",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/entities.md",
    "headingId": "keep-entities-compatible-with-sqlite",
    "headingTitle": "Keep entities compatible with SQLite",
    "text": "Keep entities compatible with SQLite Shared entity definitions must work with SQLite-backed Taon runtimes, including browser WebSQL mode. Follow the column decorators and mappings already used by the project. Prefer Taon column decorators, such as @StringColumn(), for common field types. Avoid declaring raw int column types in shared entities. For whole numbers, use the project's SQLite-compatible integer column mapping. Avoid database-specific column types such as PostgreSQL jsonb, native enums, and array columns in shared entities. Use a representation supported by each target runtime. Keep column defaults, indexes, and constraints portable. Verify that any database expression used by the entity works on each target. When changing the schema of an existing entity, check the corresponding migration against the same runtimes as the entity.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "taon-kv-repositories",
    "headingTitle": "Taon KV Repositories",
    "text": "Taon KV Repositories Taon KV repositories provide typed key-value storage through injectable repositories. The API is inspired by key-value systems such as Redis and Cloudflare Workers KV, with a document-oriented approach to storing structured values similar to MongoDB. These comparisons describe the design inspiration. The examples below use Taon’s repository API. Use a KV repository when you read or replace a value by a known key, such as application settings or a cached snapshot. Call the repository from backend code. Browser UI code should access the data through a Taon API endpoint.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "define-a-repository",
    "headingTitle": "Define a repository",
    "text": "Define a repository Extend TaonBaseKvRepository and declare the keys and value types in its type parameter. Decorate the class with @TaonRepository. In this example, the users key stores a User[]. setUsers() replaces the array stored under that key, and getUsers() reads the array as a single value. @TaonRepository({ className: 'UserKvRepository', }) export class UserKvRepository extends TaonBaseKvRepository<{ users: User[]; }> { async setUsers(users: User[]): Promise<void> { //#region @websqlFunc await this.set('users', users); //#endregion } async getUsers(): Promise<User[]> { //#region @websqlFunc return await this.get('users'); //#endregion } } The @websqlFunc region markers are Taon build directives. Keep them in the repository methods as shown.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "inject-the-repository-into-a-context",
    "headingTitle": "Inject the repository into a context",
    "text": "Inject the repository into a context Add a field to your Taon context and initialize it with injectKvRepository(). private readonly userKvRepository = this.inject( UserKvRepository, );",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/kv-repositories.md",
    "headingId": "choose-the-right-storage-model",
    "headingTitle": "Choose the right storage model",
    "text": "Choose the right storage model Use a KV repository when callers usually work with the whole value under a known key. For example, UserKvRepository can store a snapshot of a user list. If callers need to look up individual users, filter by fields, or update records independently, use an entity repository for those operations.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/middlewares.md",
    "headingId": "taon-middleware-and-interceptors",
    "headingTitle": "Taon middleware and interceptors",
    "text": "Taon middleware and interceptors Taon middleware lets you intercept backend requests and frontend API calls. Server hooks follow the Express middleware pattern. Client hooks follow the Angular HTTP interceptor pattern and work with Axios responses and RxJS. Middleware classes are injectable singletons within their Taon context and can participate in inheritance. Scope Server hook Client hook Entire context interceptServer() interceptClient() All methods of one controller interceptServerMethod() interceptClientMethod() One controller method interceptServerMethod() interceptClientMethod() Controller-wide and endpoint-specific middleware use the same hooks. Where you register the middleware determines which methods it applies to. Intercept server requests across a context Implement interceptServer() to handle server requests across the context. Call next() to continue processing the request. @TaonMiddleware({ className: 'ContextServerMiddleware' }) export class ContextServerMiddleware extends TaonBaseMiddleware { interceptServer({ req, next, }: TaonServerMiddlewareInterceptOptions): Promise<void> | void { console.log(req?.url); next(); } } Intercept client requests across a context Implement interceptClient() to handle client API calls across the context. Return next.handle(req) to forward the request and pass its response back to the caller. @TaonMiddleware({ className: 'ContextClientMiddleware' }) export class ContextClientMiddleware extends TaonBaseMiddleware { interceptClient({ req, next, }: TaonClientMiddlewareInterceptOptions): Observable<AxiosResponse<any>> { console.log(req?.url); return next.handle(req); } } Intercept a controller method on the server Use interceptServerMethod() for middleware attached to a controller or endpoint. The second argument provides information about the matched endpoint, including its method name, Express path, and HTTP request type. You can use async and await before calling next(). Set interceptServer = undefined to keep this middleware scoped to the controller or endpoint on the server. @TaonMiddleware({ className: 'MethodServerMiddleware' }) export class MethodServerMiddleware extends TaonBaseMiddleware { interceptServer = undefined; interceptServerMethod( { next }: TaonServerMiddlewareInterceptOptions, { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo, ): Promise<void> | void { console.log(methodName, expressPath); next(); } } Intercept a controller method on the client Use interceptClientMethod() to intercept client calls to the controller or endpoint where the middleware is registered. You can use RxJS operators on the response from next.handle(req). This example uses tap() to inspect the response status. Set interceptClient = undefined to keep this middleware scoped to the controller or endpoint on the client. @TaonMiddleware({ className: 'MethodClientMiddleware' }) export class MethodClientMiddleware extends TaonBaseMiddleware { interceptClient = undefined; interceptClientMethod( { req, next }: TaonClientMiddlewareInterceptOptions, { methodName, expressPath }: TaonAdditionalMiddlewareMethodInfo, ): Observable<AxiosResponse<any>> { console.log(methodName, expressPath); return next.handle(req).pipe( tap(response => console.log(response.status)), ); } } Apply middleware to every endpoint in a controller Add the middleware to @TaonController({ middlewares: ... }). Spread parentMiddlewares to retain the middleware supplied by the parent. @TaonController({ className: 'SessionController', middlewares: ({ parentMiddlewares }) => ({ ...parentMiddlewares, MethodServerMiddleware, }), }) export class SessionController extends TaonBaseController { @GET() helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } } Apply middleware to one endpoint Add the middleware to the endpoint decorator’s middlewares option. Here, MethodClientMiddleware applies only to helloWorld(). The @websqlFunc region markers in the controller examples are Taon build directives. @TaonController({ className: 'SessionController' }) export class SessionController extends TaonBaseController { @PUT({ middlewares: ({ parentMiddlewares }) => ({ ...parentMiddlewares, MethodClientMiddleware, }), }) helloWorld(): Taon.Response<string> { //#region @websqlFunc return async () => 'Hello, world!'; //#endregion } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "taon-migrations",
    "headingTitle": "Taon Migrations",
    "text": "Taon Migrations Taon provides a database migration system built on top of TypeORM, supporting both traditional Node.js backends and WebSQL browser backends . Migration classes are generated automatically, can be shared between Taon projects, and can be versioned in Git alongside application code. Migrations can be executed locally or integrated into CI/CD workflows to keep database schemas synchronized with application changes.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "1-migration-workflow",
    "headingTitle": "1. Migration Workflow",
    "text": "1. Migration Workflow The typical migration workflow is: DATABASE SCHEMA CHANGE │ ▼ CREATE MIGRATION │ ▼ IMPLEMENT up() IMPLEMENT down() │ ▼ REVIEW & ENABLE │ ▼ RUN MIGRATIONS │ ┌───────────┴───────────┐ │ │ ▼ ▼ NODE.JS BACKEND WEBSQL BACKEND │ │ ▼ ▼ SQL DATABASE BROWSER DATABASE Taon manages migration discovery and execution through its context system. Each migration belongs to a specific Taon context, allowing applications with multiple contexts to manage their database changes independently.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "2-interactive-migration-menu",
    "headingTitle": "2. Interactive Migration Menu",
    "text": "2. Interactive Migration Menu The easiest way to manage migrations is through Taon's interactive terminal interface. taon migration Short alias: taon m The terminal menu provides access to migration operations such as creating, running, and reverting migrations. You can also execute these operations directly using CLI commands.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "3-creating-migrations",
    "headingTitle": "3. Creating Migrations",
    "text": "3. Creating Migrations Before generating migrations, start the application at least once so Taon can detect and initialize its active contexts. Then stop the application and execute the command from the Taon project root. taon migration:create my-new-migration Short alias: taon mc my-new-migration Taon generates migration classes for all detected contexts in: src/lib/migrations/",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-generated-structure",
    "headingTitle": "Example Generated Structure",
    "text": "Example Generated Structure src/ └── lib/ └── migrations/ ├── MainContext_1735315075962_firstMigration.ts ├── AdminContext_1735315075962_firstMigration.ts └── ReportingContext_1735315075962_firstMigration.ts Each generated migration is associated with its corresponding active context.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "migration-safety",
    "headingTitle": "Migration Safety",
    "text": "Migration Safety Newly generated migrations are disabled by default. isReadyToRun(): boolean { return false; } After implementing and reviewing the migration, enable it: isReadyToRun(): boolean { return true; } This prevents incomplete migration classes from being executed accidentally.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "4-writing-migrations",
    "headingTitle": "4. Writing Migrations",
    "text": "4. Writing Migrations Taon migrations extend TaonBaseMigration and use TypeORM's QueryRunner API. Each migration implements two methods: up() — applies the database changes. down() — reverses the changes when the migration is reverted. Use TypeORM's QueryRunner methods for schema operations such as creating tables, adding columns, and modifying indexes. Raw SQL can be used when the TypeORM API does not support a required operation.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-migration",
    "headingTitle": "Example Migration",
    "text": "Example Migration @TaonMigration({ className: 'MainContext_1735315075962_firstMigration', }) export class MainContext_1735315075962_firstMigration extends TaonBaseMigration { anyTaonRepository = this.inject(AnyTaonRepository); isReadyToRun(): boolean { return true; } async up(queryRunner: QueryRunner): Promise<void> { await queryRunner.addColumn( 'users', new TableColumn({ name: 'displayName', type: 'varchar', isNullable: true, }), ); } async down(queryRunner: QueryRunner): Promise<void> { await queryRunner.dropColumn('users', 'displayName'); } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "injecting-taon-repositories",
    "headingTitle": "Injecting Taon Repositories",
    "text": "Injecting Taon Repositories Migrations can access Taon repositories using this.inject(). userRepository = this.inject(UserRepository); This can be useful for data transformations requiring application-level logic. For schema changes, prefer working directly with QueryRunner to keep the migration explicit and predictable.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "transactions",
    "headingTitle": "Transactions",
    "text": "Transactions Generated migration templates include transaction handling. Preserve the generated transaction behavior when modifying migration code: BEGIN TRANSACTION │ ▼ EXECUTE up() │ ┌───┴───┐ │ │ SUCCESS ERROR │ │ ▼ ▼ COMMIT ROLLBACK Database engines may differ in their support for transactional schema changes. Always test migrations against the target database.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "5-running-migrations",
    "headingTitle": "5. Running Migrations",
    "text": "5. Running Migrations (Usually you don't need to do that since taon release command includes migration run for every new release/deploy ) Execute pending migrations across all detected contexts: taon migration:run Short alias: taon mr Unlike starting the full application, this command initializes the necessary application contexts, executes migrations, and then exits.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "6-reverting-migrations",
    "headingTitle": "6. Reverting Migrations",
    "text": "6. Reverting Migrations Taon supports reverting migrations using their timestamps. For example, given the migration: MainContext_1735315075962_firstMigration Use the timestamp: taon migration:revert 1735315075962 The terminal menu can also guide you through the revert process. A migration's down() method defines how its changes are reversed. Important: Reverting schema changes may cause data loss, particularly when dropping columns or tables. Always review the migration and back up important data before reverting production databases.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "7-database-recreation-modes",
    "headingTitle": "7. Database Recreation Modes",
    "text": "7. Database Recreation Modes Taon contexts support different database initialization strategies through DBRecreateMode. The selected mode determines whether existing database data is preserved or recreated.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "available-modes",
    "headingTitle": "Available Modes",
    "text": "Available Modes export enum DBRecreateMode { DROP_DB__RUN_MIGRATIONS = 'DROP_DB__RUN_MIGRATIONS', PRESERVE_DATA__RUN_MIGRATIONS = 'PRESERVE_DATA__RUN_MIGRATIONS', } (Websql mode) by default run DROP_DB__RUN_MIGRATIONS and you can change it to PRESERVE_DATA__RUN_MIGRATIONS inside '@taon-dev/sudo' package backoffice. The enum is available from the taon/src package.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "behavior-comparison",
    "headingTitle": "Behavior Comparison",
    "text": "Behavior Comparison Database mode Node.js backend WebSQL browser backend DROP_DB__RUN_MIGRATIONS Drops and recreates the database and entity tables, then saves default entities. Existing data is deleted and migrations are skipped. Recreates the database and entity tables on every page reload, deleting existing data. Migrations are skipped and default entities are saved. PRESERVE_DATA__RUN_MIGRATIONS Preserves existing data, runs pending migrations, and saves default entities. Preserves data across reloads and saves default entities. On the first switch to this mode, existing migrations are marked as completed without execution; subsequent runs execute pending migrations.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "development-mode-recreate-database",
    "headingTitle": "Development Mode — Recreate Database",
    "text": "Development Mode — Recreate Database DROP_DB__RUN_MIGRATIONS is the default development mode. It is useful when: Working on early database schemas. Testing entities without preserving existing data. Frequently changing database structures. Recreating a clean development environment. However, this mode deletes existing database data. Despite the mode's name, migrations are skipped during database recreation.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "persistent-mode-preserve-data",
    "headingTitle": "Persistent Mode — Preserve Data",
    "text": "Persistent Mode — Preserve Data PRESERVE_DATA__RUN_MIGRATIONS keeps existing database data and applies pending migrations. This mode is appropriate when database contents must survive application restarts or page reloads. It is particularly important for production applications and persistent WebSQL environments.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "8-sharing-migrations-between-projects",
    "headingTitle": "8. Sharing Migrations Between Projects",
    "text": "8. Sharing Migrations Between Projects Taon migrations can be shared between standalone projects and container projects, just like other Taon framework classes. This is particularly useful for reusable application libraries that provide their own database entities and repositories. For example: COMPANY CONTAINER │ ┌───────────┴───────────┐ │ │ ▼ ▼ AUTH APP-LIB CUSTOMER APP-LIB │ │ Auth Entities Customer Entities Auth Repositories Customer Repositories Auth Migrations Customer Migrations │ │ └───────────┬───────────┘ │ ▼ MAIN APPLICATION │ ▼ TAON CONTEXTS │ ▼ DATABASES This allows database schema changes to remain close to the functionality that depends on them. Shared migration classes should be managed carefully to avoid duplicate registration or conflicting execution across contexts.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "9-raw-migrations-and-database-snapshots",
    "headingTitle": "9. Raw Migrations and Database Snapshots",
    "text": "9. Raw Migrations and Database Snapshots Schema migrations are not always the best solution for restoring large amounts of development data. Since DROP_DB__RUN_MIGRATIONS recreates the database by default in development mode, developers may need a convenient way to save and restore database contents. Taon provides raw migration and data snapshot functionality through: @taon-dev/sudo The Sudo backoffice can be used to create, export, and restore database snapshots.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "schema-migrations-vs-raw-data-snapshots",
    "headingTitle": "Schema Migrations vs. Raw Data Snapshots",
    "text": "Schema Migrations vs. Raw Data Snapshots Feature Schema migrations Raw migrations / snapshots Main purpose Evolve database structure Save and restore database contents Implementation TypeORM migration classes Sudo backoffice Version control Migration source files Exported snapshot files Typical use Production schema evolution Development data restoration Reversible Through down() when implemented Through restoring a suitable snapshot",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "example-development-workflow",
    "headingTitle": "Example Development Workflow",
    "text": "Example Development Workflow DEVELOPMENT DATABASE │ ▼ EXPORT DATA SNAPSHOT │ ▼ MODIFY ENTITIES │ ▼ RECREATE DATABASE │ ▼ RESTORE DATA SNAPSHOT │ ▼ CONTINUE DEVELOPMENT This is useful for preserving representative development data while working with frequently changing entity definitions. Snapshots should be compatible with the target schema. Restoring data into a changed database structure may require transformation or additional validation.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "10-cli-command-reference",
    "headingTitle": "10. CLI Command Reference",
    "text": "10. CLI Command Reference Command Alias Description taon migration taon m Open the interactive migration menu taon migration:create taon mc Generate migration classes for detected contexts taon migration:run taon mr Run pending migrations and exit taon migration:revert <timestamp> — Revert migration changes using a timestamp",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "create",
    "headingTitle": "Create",
    "text": "Create taon migration:create my-new-migration taon mc my-new-migration",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "run",
    "headingTitle": "Run",
    "text": "Run taon migration:run taon mr",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "revert",
    "headingTitle": "Revert",
    "text": "Revert taon migration:revert 1794523651172",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "interactive-menu",
    "headingTitle": "Interactive Menu",
    "text": "Interactive Menu taon migration taon m",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "11-recommended-practices",
    "headingTitle": "11. Recommended Practices",
    "text": "11. Recommended Practices Keep migrations in version control. Migration history should evolve alongside application code. Review generated migrations before enabling them. Generated classes start with isReadyToRun() returning false for a reason. Implement both up() and down(). Reversible migrations make development and recovery easier, although some data changes cannot be fully reversed. Prefer TypeORM's QueryRunner API. Use raw SQL when necessary and account for database-specific behavior. Test migrations in both Node.js and WebSQL when targeting both runtimes. Shared migration classes do not guarantee identical database engine behavior. Use persistent database mode when data matters. Avoid destructive database recreation outside disposable development environments. Use Sudo snapshots for development data. Schema migrations and database snapshots solve different problems. Integrate migrations into release workflows. Validate database changes before deploying application code that depends on them.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/migrations.md",
    "headingId": "summary",
    "headingTitle": "Summary",
    "text": "Summary Taon migrations provide a unified way to manage database evolution across Node.js and browser-based WebSQL applications. The migration system integrates with Taon's context architecture, supports reusable migration classes, and can participate in automated build and deployment workflows. One migration architecture. Multiple execution environments. Consistent database evolution.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/providers.md",
    "headingId": "taon-providers",
    "headingTitle": "Taon providers",
    "text": "Taon providers Injectable (service like) classes singleton (in context) classes. Use this class for storing: -configurations for bother backend and frontend resolved environment variables @TaonProvider({ className: 'TaonConfigProvier', }) export class TaonConfigProvier extends TaonBaseProvider { config = { lang: 'en', country: 'Poland' } SECRET_ENV: string; GOOGLE_ID:string; async _() { //#region @backend this.SECRET_ENV = await ENV_NODE_APP_SECRET_ENV(); //#endregion GOOGLE_ID = '123123123123123123123123' } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/repositories.md",
    "headingId": "taon-repositories",
    "headingTitle": "Taon repositories",
    "text": "Taon repositories Taon repositories are injectable classes that encapsulate backend data access, similar to TypeORM custom repositories. Use repositories in backend code. Browser UI code accesses their functionality through Taon controller endpoints. Base class When to use it TaonBaseRepository<Entity> Use it for a repository backed by a Taon entity, with built-in CRUD operations and optional custom queries. TaonBaseCustomRepository Use it for backend operations that need their own methods, such as calling an external service. Create an entity repository Extend TaonBaseRepository<User> and set entityClassResolveFn to return the User entity class. Use this.repo to run TypeORM queries against that entity. In this example, findByEmail() looks up a user by email. The @websqlFunc region is a Taon build directive that allows the method implementation to run in the WebSQL backend. @TaonRepository({ className: 'UserRepository' }) export class UserRepository extends TaonBaseRepository<User> { entityClassResolveFn = () => User; async findByEmail(email: string) { //#region @websqlFunc return this.repo.findOne({ where: { email } }); //#endregion } } Create a custom repository Extend TaonBaseCustomRepository when your repository provides custom backend operations. This example delegates checkout URL creation to an application-specific Stripe integration. Implement createCheckoutUrl using your project's Stripe client and server-side configuration. The @backendFunc region is a Taon build directive that keeps the method implementation on the server. @TaonRepository({ className: 'TaonStripeApiRepository' }) export abstract class TaonStripeApiRepository extends TaonBaseCustomRepository { async getCheckoutUrl(): Promise<string> { //#region @backendFunc return this.createCheckoutUrl(); //#endregion } protected abstract createCheckoutUrl(): Promise<string>; }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/taon-building-blocks/subscriber.md",
    "headingId": "taon-subscribers",
    "headingTitle": "Taon subscribers",
    "text": "Taon subscribers Injectable classes for subscribing to entity events base on https://typeorm.io/listeners-and-subscribers You should use Subscribers only inside server code. @TaonSubscriber({ className: 'TaonSubscriber', }) export class TaonSubscriber extends TaonBaseSubscriberForEntity { listenTo() { return UserEntity; } afterInsert(entity: any) { console.log(`AFTER INSERT: `, entity); MainContext.realtime.server.triggerEntityTableChanges(UserEntity); } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/transport-layer.md",
    "headingId": "transport-layer",
    "headingTitle": "Transport layer",
    "text": "Transport layer Taon selects transport according to the application target. The transports are not interchangeable: realtime support and access to platform APIs depend on the runtime. Target Backend location Communication and runtime notes Node.js Node.js server HTTP request/response and Socket.IO-based realtime communication are available. Node.js APIs are available only in the backend. Cloudflare Worker Worker runtime Use request/response APIs supported by the Worker target. Taon's Cloudflare realtime strategy is not implemented, so do not rely on Socket.IO or realtime subscriptions there. WebSQL In the browser Backend logic runs in the browser. It is not a remote Node.js server, and cross-tab realtime communication is not implemented. Electron Electron main process Renderer-to-backend communication uses Electron IPC. Keep privileged Node.js APIs in the backend. Use the target-specific build and test path to verify transport behavior. A successful Node.js build does not prove that code is compatible with a Cloudflare Worker, WebSQL, or Electron. For code that must vary by runtime, use the markers described in Isomorphic code regions. For target setup and limitations, see Architecture.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/what-to-avoid.md",
    "headingId": "what-to-avoid",
    "headingTitle": "What to avoid",
    "text": "What to avoid",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/what-to-avoid.md",
    "headingId": "finish-migration-transactions-correctly",
    "headingTitle": "Finish migration transactions correctly",
    "text": "Finish migration transactions correctly let say we have migration started: await queryRunner.startTransaction(); to end transaction: await queryRunner.release(); // IT IS NOT ENOUGH // and this may cause weird errors // proper 'end' of transaction await queryRunner.commitTransaction(); await queryRunner.release();",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/what-to-avoid.md",
    "headingId": "use-current-timestamp-instead-now",
    "headingTitle": "Use CURRENT_TIMESTAMP instead NOW()",
    "text": "Use CURRENT_TIMESTAMP instead NOW() SQlite does not support NOW()",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/docs/what-to-avoid.md",
    "headingId": "use-integer-instead-int",
    "headingTitle": "Use integer instead int",
    "text": "Use integer instead int SQlite does not support int",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/examples/my-entity.worker.README.md",
    "headingId": "taon-worker-microservice",
    "headingTitle": "Taon Worker/Microservice",
    "text": "Taon Worker/Microservice How to start worker/service // your app app/cli function async startWorker() { const worker = new MyEntityWorker( 'unique-for-the-whole-os-id-for-service', 'command for starting this service. ex: my-entity-cli startWorker' ); const ctrl = await worker.cliStartProcedure(); // by default started as child_process // }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "angular-syntax-and-state",
    "headingTitle": "Angular Syntax and State",
    "text": "Angular Syntax and State",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "template-syntax",
    "headingTitle": "Template syntax",
    "text": "Template syntax Prefer modern Angular control-flow syntax: @if @else @for @switch @defer Use legacy structural directives such as *ngIf and *ngFor only when there is a concrete reason to do so. Do not convert modern Angular control flow back to legacy syntax.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "signals-and-observables",
    "headingTitle": "Signals and Observables",
    "text": "Signals and Observables Prefer Angular Signals for component state and reactive values used directly by templates. Prefer: signal() computed() effect() when an actual side effect is required Do not introduce an Observable when a Signal provides a simpler solution. Use RxJS Observables when they naturally fit the problem, especially for: asynchronous streams, REST/API calls, event streams, RxJS operators and stream composition, existing APIs that already expose Observables. Do not convert an Observable to a Signal merely for the sake of using Signals. Avoid unnecessary BehaviorSubject / Subject state when a Signal can represent the same state more clearly.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "services",
    "headingTitle": "Services",
    "text": "Services",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "api-services",
    "headingTitle": "API services",
    "text": "API services Inject the project's api.service.ts into components when communication with the Taon REST API is required. Do not create duplicate HTTP/API logic directly inside components when the existing API service can be used.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "configuration-services",
    "headingTitle": "Configuration services",
    "text": "Configuration services Inject the project's config.service.ts / configs.service.ts when a component needs global frontend/backend configuration. Do not duplicate global configuration as local component state.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "state-services",
    "headingTitle": "State services",
    "text": "State services Create a dedicated .state.service.ts only when the component architecture actually requires shared or sufficiently complex state. Do NOT create a state service automatically for every component. Prefer keeping simple state directly inside the component using Signals. Create a state service when, for example: state is shared between multiple components, state must survive component recreation, state logic becomes large enough that keeping it in the component hurts readability, multiple components need to coordinate through the same state.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "dependency-injection",
    "headingTitle": "Dependency Injection",
    "text": "Dependency Injection Always prefer Angular's inject() API over constructor injection. GOOD: private readonly router = inject(Router); private readonly changeDetectorRef = inject(ChangeDetectorRef); private readonly apiService = inject(MyApiService); BAD: constructor( private router: Router, private changeDetectorRef: ChangeDetectorRef, private apiService: MyApiService, ) {} Use constructor injection only when there is a specific technical reason that prevents using inject().",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "injection-naming",
    "headingTitle": "Injection naming",
    "text": "Injection naming Use descriptive names based on the injected class/service. GOOD: private readonly userService = inject(UserService); private readonly notificationService = inject(NotificationService); private readonly sessionApiService = inject(TaonSessionApiService); Short conventional names are allowed for common Angular/router dependencies where they improve readability: private readonly cdr = inject(ChangeDetectorRef); private readonly router = inject(Router); private readonly route = inject(ActivatedRoute); Do not use arbitrary abbreviated names for application services.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/angular.md",
    "headingId": "component-internationalization-i18n",
    "headingTitle": "Component Internationalization (i18n)",
    "text": "Component Internationalization (i18n) All user-visible component text should use the Taon translation system when appropriate. For all internationalization rules and examples, follow: ../docs/i18n.md Before adding, modifying, or reviewing any user-visible text in Angular code, read and follow ../docs/i18n.md. Treat ../docs/i18n.md as the single source of truth for: translation setup Signal translations synchronous translations Observable translations template translations translation parameters translation context deciding which strings should and should not be translated Do not duplicate or invent alternative i18n patterns in Angular code. If this file and ../docs/i18n.md appear to conflict regarding internationalization, ../docs/i18n.md takes precedence.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/backend.md",
    "headingId": "backend",
    "headingTitle": "Backend",
    "text": "Backend",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/backend.md",
    "headingId": "isomorphic-source",
    "headingTitle": "Isomorphic source",
    "text": "Isomorphic source Do not assume that a .ts file containing backend code is backend-only. Taon transforms shared source for different runtimes. Isolate code that uses runtime-specific APIs with the appropriate markers: @backend and @backendFunc for backend code. @websql and @websqlFunc for code included in Node.js and WebSQL builds. @browser for browser-only code. @websqlOnly for WebSQL-only code. @esmRemove and @cjsRemove for backend module-format differences. See Isomorphic code regions for marker semantics and examples.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/backend.md",
    "headingId": "runtime-differences",
    "headingTitle": "Runtime differences",
    "text": "Runtime differences Taon supports these distinct backend targets: Node.js has access to Node.js APIs according to the app's environment and permissions. Cloudflare Workers use an ESM runtime with Worker APIs and do not provide the full Node.js runtime. WebSQL runs backend logic in the browser. Electron uses a main-process backend with privileged Node.js APIs. Review Transport layer before relying on networking, realtime communication, or platform APIs across targets.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/backend.md",
    "headingId": "runtime-specific-functions",
    "headingTitle": "Runtime-specific functions",
    "text": "Runtime-specific functions Wrap a function body in @backendFunc when it requires Node.js-only APIs. The browser build keeps the function and returns undefined. export namespace Utils { export const createBackendFile = () => { //#region @backendFunc /* ... */ //#endregion }; } Use @websqlFunc instead when the implementation should be included in both Node.js and WebSQL builds. export namespace Utils { export const createBackendFile = () => { //#region @websqlFunc /* ... */ //#endregion }; }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "where-environment-variables-are-stored",
    "headingTitle": "Where environment variables are stored",
    "text": "Where environment variables are stored Each Taon Project stores its environment variables — both secret and public — in: /env.ts # Main root file with environment variables /environments/**/env.*.ts # Environment files for specific build artifacts/environments",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "example-content-of-an-env-ts-file",
    "headingTitle": "Example content of an env.*.ts file",
    "text": "Example content of an env.*.ts file import type { EnvOptions } from 'tnp/src'; const env: Partial<EnvOptions> = { website: { domain: 'example.domain.com', title: 'My Example Website', useDomain: true, }, config: { /* * A string wrapped with TAON_ENCRYPTED_START and TAON_ENCRYPTED_END * means that the value is encrypted. * * You can decode it by running `taon env:decode` and providing * the correct master password. */ secretApiKey: () => `$$$TAON_ENCRYPTED_START$$asdasdasdasdasdasdBQ==$$$TAON_ENCRYPTED_END$$$`, publicKey: 'ANY_PUBLIC_KEY', }, }; export default env;",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "starting-an-environment-configuration-from-scratch",
    "headingTitle": "Starting an environment configuration from scratch",
    "text": "Starting an environment configuration from scratch You can initially define your environment file with a plain-text secret: import type { EnvOptions } from 'tnp/src'; const env: Partial<EnvOptions> = { website: { domain: 'example.domain.com', title: 'My Example Website', useDomain: true, }, config: { /* * Use `taon env:encode` with a master password of your choice * to encrypt this value. * * After encryption, the value will be wrapped with * TAON_ENCRYPTED_START and TAON_ENCRYPTED_END markers. */ secretApiKey: () => `my secret api key that should NOT be committed to the repository in decoded form!`, publicKey: 'ANY_PUBLIC_KEY', }, }; export default env; Important: Do not commit the file while secret values are still stored in plain text. Run taon env:encode first.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "how-to-access-environment-variables",
    "headingTitle": "How to access environment variables",
    "text": "How to access environment variables Use the generated environment variables from: /src/lib/env/**",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "secret-variables",
    "headingTitle": "Secret variables",
    "text": "Secret variables Secret variables are generated as functions returning promises and must be awaited: // DO NOT USE THESE VARIABLES ON THE FRONTEND! export const ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY = (): Promise<string> => decodeEnv('MY_SECRET_API_KEY'); // DO NOT USE THESE VARIABLES ON THE FRONTEND!",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "public-variables",
    "headingTitle": "Public variables",
    "text": "Public variables Public variables are usually regular strings, numbers, or booleans: // SAFE TO USE ON BOTH FRONTEND AND BACKEND export const ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY = 'ANY_PUBLIC_KEY';",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "preferred-way-of-using-environment-variables",
    "headingTitle": "Preferred way of using environment variables",
    "text": "Preferred way of using environment variables",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "1-create-a-provider",
    "headingTitle": "1. Create a provider",
    "text": "1. Create a provider Use a provider as the central place where generated environment variables are resolved and assigned. @TaonProvider({ className: 'MyEntityProvider', }) export class MyEntityProvider extends TaonBaseProvider { declare SECRET_API_KEY: string; declare PUBLIC_KEY: string; async _() { // Assign environment variables in one place. this.PUBLIC_KEY = ENV_ANGULAR_NODE_APP_CONFIG_PUBLIC_KEY; //#region @backend this.SECRET_API_KEY = await ENV_ANGULAR_NODE_APP_CONFIG_SECRET_API_KEY(); //#endregion /* * This method is executed during context initialization, * so it is the preferred place to resolve and assign * environment variables. */ } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "2-inject-the-provider-into-controllers-repositories-etc",
    "headingTitle": "2. Inject the provider into controllers, repositories, etc.",
    "text": "2. Inject the provider into controllers, repositories, etc. This is the preferred way to access environment variables on the backend: inject the provider. @TaonProvider({ className: 'MyEntityRepository', }) export class MyEntityRepository extends TaonBaseRepostory { protected myEntityProvider = this.inject(MyEntityProvider); @GET() getSecret(): Taon.Response<string> { //#region @websqlFunc return async (req, res) => { return requestToExternalApi({ secret: this.myEntityProvider.SECRET_API_KEY, }); }; //#endregion } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "3-create-config-service-ts-to-access-public-variables-on-the-frontend",
    "headingTitle": "3. Create config.service.ts to access public variables on the frontend",
    "text": "3. Create config.service.ts to access public variables on the frontend This is the preferred way to access public environment variables on the frontend: inject a config service. import { inject, Injectable } from '@angular/core'; import { TaonBaseAngularService } from 'taon/src'; @Injectable() export class MyEntityConfigService extends TaonBaseAngularService { protected myEntityProvider = this.inject(MyEntityProvider); requestWithPublicKey() { fetchSomething({ publicKey: this.myEntityProvider.PUBLIC_KEY, }); } } @Component({ selector: 'my-example-component', // ... }) export class MyExampleComponent { myEntityConfigService = inject(MyEntityConfigService); ngOnInit() { this.myEntityConfigService.requestWithPublicKey(); } }",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "what-not-to-do",
    "headingTitle": "What NOT to do",
    "text": "What NOT to do Do not run taon env:decode before starting a Taon build, such as: taon build:watch:lib taon app You will be asked for the master password when necessary. During the build, Taon automatically creates a decoded copy of: /env.ts /environments/** inside the tmp-env folder. Do not worry if an encrypted value looks different after running taon env:decode or another environment operation. For example: $$$TAON_ENCRYPTED_START$$...$$$TAON_ENCRYPTED_END$$$ The encrypted representation may change. This is normal. The encryption mechanism can rotate the encrypted representation while the master password remains the same. Never commit unencrypted secret variables. Do NOT commit: // UNSAFE — DO NOT COMMIT mySecretApiKey: () => `my-secret-api`, Always use: taon env:encode before committing files containing secrets. Secret values inside /env.ts and /environments/** should be encrypted: // SAFE TO COMMIT mySecretApiKey: () => `$$$TAON_ENCRYPTED_START$$euhauidhaisre$$$TAON_ENCRYPTED_END$$$`,",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "additional-rules-for-ai-agents",
    "headingTitle": "Additional rules for AI agents",
    "text": "Additional rules for AI agents When working with Taon environment variables, an AI agent must: Use only generated environment variables from: /src/lib/env/** Never attempt to encrypt or decrypt environment variables. Never run: taon env:decode Never run: taon env:encode Never access or expose the master password. Never replace generated environment variables with hardcoded secret values.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "how-to-generate-a-master-password",
    "headingTitle": "How to generate a master password",
    "text": "How to generate a master password Use: taon env:gen:pass Alternatively, use the interactive environment menu: taon env",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "how-the-master-password-is-preserved-locally",
    "headingTitle": "How the master password is preserved locally",
    "text": "How the master password is preserved locally The master password is securely preserved by the Taon worker for 1 day. The Taon CLI preserves the password only after verifying that it is correct. You can remove the preserved master password from the worker at any time.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/environment-variables.md",
    "headingId": "how-to-remove-the-master-password-from-the-worker",
    "headingTitle": "How to remove the master password from the worker",
    "text": "How to remove the master password from the worker Use: taon env:rm:pass Alternatively, use the interactive environment menu: taon env",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/file-naming-conventions.md",
    "headingId": "file-naming-and-layout-conventions",
    "headingTitle": "File Naming and Layout Conventions",
    "text": "File Naming and Layout Conventions",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/file-naming-conventions.md",
    "headingId": "typescript-filenames",
    "headingTitle": "TypeScript filenames",
    "text": "TypeScript filenames Use a lowercase kebab-case base name followed by dot-separated suffixes that identify the file’s role. The base name should usually match the feature or subfeature folder that owns the file. Class name Filename MyFeatureEntity my-feature.entity.ts MyFeatureController my-feature.controller.ts MyFeatureRepository my-feature.repository.ts MyFeatureApiService my-feature.api.service.ts MyFeatureConfigService my-feature.config.service.ts MyFeatureStateService my-feature.state.service.ts MyFeatureComponent my-feature.component.ts MyFeatureAbstractContext my-feature.abstract.context.ts MyFeatureActiveContext my-feature.active.context.ts",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/file-naming-conventions.md",
    "headingId": "angular-component-files",
    "headingTitle": "Angular component files",
    "text": "Angular component files Keep each Angular component’s TypeScript, HTML template, and SCSS styles in separate files in the same folder. Use the same .component filename stem for all three. Reference the external files through templateUrl and styleUrl (or styleUrls). my-feature-backoffice/ my-feature-backoffice.component.ts my-feature-backoffice.component.html my-feature-backoffice.component.scss my-feature-backoffice.state.service.ts",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/file-naming-conventions.md",
    "headingId": "feature-folder-layout",
    "headingTitle": "Feature folder layout",
    "text": "Feature folder layout Keep feature-level entities, controllers, and repositories in the feature folder. When a feature contains both a controller and Angular components, put each component in its own subfolder and use the subfolder name as the component’s filename base. my-feature/ my-feature.entity.ts my-feature.controller.ts my-feature.repository.ts my-feature-table/ my-feature-table.component.ts my-feature-table.component.html my-feature-table.component.scss my-feature-row/ my-feature-row.component.ts my-feature-row.component.html my-feature-row.component.scss",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "general-rules",
    "headingTitle": "General Rules",
    "text": "General Rules",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "taon-project-structure",
    "headingTitle": "Taon Project Structure",
    "text": "Taon Project Structure You are operating inside a Taon workspace. Taon projects do not necessarily follow a standard npm repository structure. Before making any changes, identify the relevant Taon project(s) and inspect their root taon.jsonc.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "project-types",
    "headingTitle": "Project Types",
    "text": "Project Types Taon has two project types. Standalone project A standalone project has: { \"type\": \"isomorphic-lib\" } in its root /taon.jsonc. Characteristics: Application/library source code is located in /src. It may be an independent Git repository. It may also exist inside a Taon container project. This is normally where production source-code changes should be made. Container project A container project has: { \"type\": \"container\" } in its root /taon.jsonc. Characteristics: It contains multiple standalone projects and/or other container projects. Treat child projects as separate Taon projects. A task may require inspecting or modifying multiple child projects. Never create Git branches in a container project. When working from a high-level workspace containing multiple Taon projects, do not assume that the workspace root itself is the project being modified. Locate the appropriate standalone project first.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "allowed-modification-scope",
    "headingTitle": "Allowed Modification Scope",
    "text": "Allowed Modification Scope",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "source-files-only",
    "headingTitle": "Source files only",
    "text": "Source files only Unless the user explicitly instructs otherwise in the current prompt, you may only create, modify, move, or delete files inside the /src directory of the relevant standalone project(s). For example, if a task affects: /taon-dev/cms /taon-projects/cms the allowed modification scope is: /taon-dev/cms/src/** /taon-projects/cms/src/** You may inspect files outside /src when necessary to understand the project, dependencies, architecture, configuration, or existing conventions. However, inspection does not grant permission to modify those files.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "allowed",
    "headingTitle": "Allowed",
    "text": "Allowed You may: read files anywhere in the relevant workspace when needed for context create files inside the relevant project's /src modify files inside the relevant project's /src move files inside the relevant project's /src delete files inside the relevant project's /src when required by the task inspect sibling projects to understand existing Taon patterns and implementations",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "forbidden",
    "headingTitle": "Forbidden",
    "text": "Forbidden Do not create, modify, move, or delete files outside the relevant project's /src. This includes, but is not limited to: /package.json /taon.jsonc /tsconfig.json /angular.json /.github/** /.ai/** /node_modules/** /dist/** If completing part of the requested task would require changing a file outside /src, do not make that change. Implement everything that can correctly be implemented within the allowed scope and leave the out-of-scope part unchanged. Do not silently work around this restriction by modifying another configuration or generated file.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "multi-project-tasks",
    "headingTitle": "Multi-Project Tasks",
    "text": "Multi-Project Tasks A single task may involve multiple Taon projects. For example: /taon-dev/cms /taon-projects/cms When this happens: Identify every project involved in the task. Determine whether each project is a standalone project or a container. Inspect the relevant projects before implementing the change. Keep reusable/framework functionality in the appropriate reusable Taon project. Keep application-specific functionality in the consuming application. Modify only /src/** within each affected standalone project. Do not duplicate reusable functionality in consuming projects when it belongs in a shared Taon project. Do not assume that a task must be contained within a single Git repository merely because the agent was started from a common parent directory.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "project-and-artifact-management",
    "headingTitle": "Project and Artifact Management",
    "text": "Project and Artifact Management Project and artifact management is the user's responsibility. Do not: initialize Taon projects create Git branches in container projects build Taon projects or artifacts publish packages release packages or applications deploy applications install dependencies update dependencies run project setup commands run project initialization commands modify generated artifacts Your responsibility normally ends after making the requested production source-code changes inside the appropriate /src directories.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "taon-cli-commands",
    "headingTitle": "Taon CLI Commands",
    "text": "Taon CLI Commands Do not run taon commands. The only exception is migration creation: taon mc my-new-migration and language extractor taon lang:extract Do not run any other taon command unless the user explicitly requests it in the current prompt.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "absolute-rule-never-create-or-modify-tests",
    "headingTitle": "ABSOLUTE RULE: Never Create or Modify Tests",
    "text": "ABSOLUTE RULE: Never Create or Modify Tests Testing is not part of your responsibility unless explicitly requested by the user in the current prompt. You MUST NOT create, generate, modify, move, or delete test files or test directories. This includes, but is not limited to: *.spec.ts *.test.ts *.spec.js *.test.js /test/** /tests/** /__tests__/** It also includes: test fixtures test helpers temporary test files test configuration generated tests modifications to existing tests Do NOT add or modify tests merely because: the implementation would normally require tests existing code has tests repository conventions suggest tests tests would help verify the implementation adding tests is considered best practice acceptance criteria describe expected behavior Do not create temporary tests and delete them afterward. If a requested task would normally include test changes, skip the test portion and implement only the production source code.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "explicit-user-override",
    "headingTitle": "Explicit User Override",
    "text": "Explicit User Override Tests may be created or modified only when the user explicitly requests test work in the current prompt. Do not infer permission from: previous prompts previous tasks existing tests repository conventions the nature of the feature acceptance criteria best practices",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "configuration-and-dependencies",
    "headingTitle": "Configuration and Dependencies",
    "text": "Configuration and Dependencies Unless explicitly requested otherwise, never modify project, package, build, or workspace configuration. In particular, never modify: /package.json /taon.jsonc Do not: modify node_modules install packages remove packages update package versions modify dependency declarations If a requested implementation appears to require a new dependency, do not install or add it automatically. Prefer functionality already available in the workspace when appropriate, or leave the dependency/configuration portion unchanged.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "task-boundaries",
    "headingTitle": "Task Boundaries",
    "text": "Task Boundaries Implement the requested task and avoid unrelated cleanup. Do not perform additional: refactoring unrelated to the task project maintenance dependency maintenance configuration changes test work builds publishing releasing deployment repository restructuring Existing code in sibling Taon projects may be inspected and reused as a reference when useful.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/general.md",
    "headingId": "highest-priority-working-rule",
    "headingTitle": "Highest-Priority Working Rule",
    "text": "Highest-Priority Working Rule Unless the user explicitly overrides these rules in the current prompt: All modifications must be limited to /src/** of the standalone Taon project or projects involved in the task. You may inspect the wider Taon workspace, including containers and sibling projects, to understand architecture and existing implementations. Read broadly when necessary. Modify narrowly.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/npm-yarn-packages.md",
    "headingId": "npm-yarn-install-packages",
    "headingTitle": "npm yarn install/packages",
    "text": "npm yarn install/packages do NOT install ANYTHING from package.json do NOT install new npm/yarn packages do not use npm install or yarn add don't change package.json or any files except from /src folder don't change node_modules",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/.ai/rules/typescript.md",
    "headingId": "typescript-rules",
    "headingTitle": "TypeScript rules",
    "text": "TypeScript rules Never use any unless absolutely necessary. Prefer const. Prefer assigned tp const arrow function over standard function() with function keyword . Prefer early returns. Do not create interfaces that are used only once. Do not add comments explaining obvious code. Preserve existing //#region structure.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/AGENTS.md",
    "headingId": "taon-project-instructions",
    "headingTitle": "Taon project instructions",
    "text": "Taon project instructions This project uses Taon. Read the applicable reference before changing code, and verify framework behavior against the implementation when a guide does not cover it.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/AGENTS.md",
    "headingId": "core-rules",
    "headingTitle": "Core rules",
    "text": "Core rules Do not install dependencies with npm install or yarn install; use the Taon project workflow. Make application changes in /src, preserve Taon patterns and generated files, and do not reformat unrelated code. Reuse existing classes and helpers. Do not replace Taon conventions with conventional Angular, Express, or TypeORM patterns without checking the project guidance first. Keep code changes surgical. Do not modify sibling projects.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/AGENTS.md",
    "headingId": "references",
    "headingTitle": "References",
    "text": "References Architecture and runtime targets Taon contexts Isomorphic code regions Building-block references Coding rules Canonical examples",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/AGENTS.md",
    "headingId": "existing-code-and-verification",
    "headingTitle": "Existing code and verification",
    "text": "Existing code and verification Before creating an abstraction, search /src for an equivalent implementation. For Taon CLI workflows, see the CLI command guide. The project's tests and the Taon Testbench are useful for runtime-specific examples; do not assume that Node.js, WebSQL, and Cloudflare Worker support are interchangeable. After code changes, run the smallest relevant test or build available in the project. Do not claim a command or runtime behavior is verified unless it was checked against source or a working example.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/README.md",
    "headingId": "isomorphic-lib-v2",
    "headingTitle": "isomorphic-lib v2",
    "text": "isomorphic-lib v2",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/TODO.md",
    "headingId": "todo",
    "headingTitle": "TODO",
    "text": "TODO",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/analytics.md",
    "headingId": "taon-analytics",
    "headingTitle": "Taon Analytics",
    "text": "Taon Analytics @taon-dev/analytics collects visitor, session, page-view, and generic event records. The current backoffice includes all-time overview counts and a visitor table; Pages View, Events, and Traffic Sources are placeholders rather than complete reporting dashboards.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/analytics.md",
    "headingId": "add-and-start-tracking",
    "headingTitle": "Add and start tracking",
    "text": "Add and start tracking Register TaonAnalyticsAbstractContext in the Taon backend context and TaonAnalyticsBackofficeRoutes in the admin routes. Baseline includes both. In the Angular root component, provide and start TaonAnalyticsTrackingService once after Taon context initialization: import { Component, OnInit, inject } from '@angular/core'; import { TaonAnalyticsTrackingService } from '@taon-dev/analytics/src'; @Component({ selector: 'app-root', template: '', }) export class AppComponent implements OnInit { private readonly analytics = inject(TaonAnalyticsTrackingService); ngOnInit(): void { this.analytics.start(); } } The service needs browser storage and router navigation, so do not start it in a Node-only backend. Calling start() once from the browser root component is the pattern used by the example applications.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/analytics.md",
    "headingId": "events-and-data-behavior",
    "headingTitle": "Events and data behavior",
    "text": "Events and data behavior Other browser-side services can inject the tracking service and record an application event: await this.analytics.recordEvent('banner-click', { category: 'marketing', data: { bannerId: 'summer' }, }); The service stores a random visitor ID in localStorage and a session ID in sessionStorage. Reloads reuse the session; 30 minutes without recorded activity starts a new session. Navigation completions record page views, and pointer/keyboard activity is throttled. Timestamps come from the backend. Durations are approximate; there is no unload beacon or background session expiry job. No fingerprinting or user-agent parsing is performed. Backend packages can inject TaonAnalyticsEventRepository and call record(). Event names share one generic event table; backend-originated events may omit visitor, session, and user associations. Authenticated user IDs are derived from verified Taon session tokens, not from the collection payload.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/analytics.md",
    "headingId": "permissions-and-runtime",
    "headingTitle": "Permissions and runtime",
    "text": "Permissions and runtime Baseline shows Analytics navigation to superusers or users with toManageAnalytics. The Angular tracking service runs in the browser; the analytics context, repositories, and backoffice APIs run in the configured Taon backend. WebSQL browser mode changes where backend code executes, so verify that the selected database and storage behavior is appropriate before using it as a production analytics store. See Marketing-related events and Baseline, or follow the analytics event tutorial.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/baseline.md",
    "headingId": "taon-baseline",
    "headingTitle": "Taon Baseline",
    "text": "Taon Baseline @taon-dev/baseline is the composition layer for Taon's admin backoffice. Its TaonBaselineAbstractContext includes Session, Sudo, Emails, CMS, E-commerce, Analytics, Marketing, and SEO contexts. TaonBaselineBackofficeRoutes lazily loads their admin routes and gates menu entries using the current session's permissions.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/baseline.md",
    "headingId": "register-the-context-and-route",
    "headingTitle": "Register the context and route",
    "text": "Register the context and route Add the abstract context to the application's active Taon context: import { TaonBaselineAbstractContext } from '@taon-dev/baseline/src'; import { Taon, TaonBaseContext } from 'taon/src'; export const AppContext = Taon.createContext(() => ({ contextName: 'AppContext', contexts: { TaonBaseContext, TaonBaselineAbstractContext, }, })); Register Baseline's route in the application's Angular router. The example apps use the named admin outlet exposed as TaonBaselineBackofficeOutletName, and provide the same active context to that route: import { TaonBaselineBackofficeRoutes } from '@taon-dev/baseline/src'; import { TaonBaselineBackofficeOutletName } from '@taon-dev/ui/src'; import { TAON_CONTEXT } from 'taon/src'; const routes = [ { path: 'backoffice', outlet: TaonBaselineBackofficeOutletName, providers: [ { provide: TAON_CONTEXT, useFactory: () => AppContext }, ], loadChildren: () => import('@taon-dev/baseline/src').then( module => module.TaonBaselineBackofficeRoutes, ), }, ]; Use your application's existing Taon initialization and router providers. Baseline brings module contexts and navigation together; it does not replace those app-specific providers or deployment configuration.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/baseline.md",
    "headingId": "configure-access",
    "headingTitle": "Configure access",
    "text": "Configure access The backoffice routes are lazy-loaded. CMS, E-commerce, Analytics, SEO, Marketing, user, session, and authorization entries are shown only when the session has the corresponding permission or the user is a superuser. Permission names include toManageCms, toManagerEcommerce, toManageAnalytics, toManageSeo, toManageMarketing, toManageUsers, toManageSessions, and toManageAuthorization. Grant permissions using the Session authorization/group workflow, then test with both an authorized and unauthorized account. Menu visibility is not the security boundary: module controllers also validate protected operations.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/baseline.md",
    "headingId": "runtime-and-project-dependencies",
    "headingTitle": "Runtime and project dependencies",
    "text": "Runtime and project dependencies The route tree is Angular/browser code. The active Taon context runs on the backend chosen by the application. Node.js is the normal server target; WebSQL runs backend logic in the browser and does not provide server-side secrets or public webhook reception. Cloudflare Worker deployments need their own bindings and target-compatible database/storage providers. Baseline's abstract context does not select or configure those providers. The example apps register TaonBaselineAbstractContext in their active context and lazy-load TaonBaselineBackofficeRoutes in the admin outlet. See Session, CMS, E-commerce, SEO, Analytics, and Marketing-related events for module details. To register Baseline step by step, follow the existing-project setup tutorial.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/cms.md",
    "headingId": "taon-cms",
    "headingTitle": "Taon CMS",
    "text": "Taon CMS @taon-dev/cms provides posts and related content, categories, tags, comments, content permissions, revisions, and storage-backed media. Course views and structured JSON-table posts build on ordinary CMS posts; they do not require a separate course entity.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/cms.md",
    "headingId": "add-and-configure",
    "headingTitle": "Add and configure",
    "text": "Add and configure For the full admin setup, add TaonBaselineAbstractContext and TaonBaselineBackofficeRoutes; Baseline includes TaonCmsAbstractContext and the lazy CMS backoffice route. A CMS-only application can register TaonCmsAbstractContext and TaonCmsBackofficeRoutes directly. import { TaonCmsAbstractContext } from '@taon-dev/cms/src'; import { Taon, TaonBaseContext } from 'taon/src'; export const AppContext = Taon.createContext(() => ({ contextName: 'AppContext', contexts: { TaonBaseContext, TaonCmsAbstractContext, }, })); Add TaonCmsBackofficeRoutes to the application's route configuration. The application must also configure the storage provider used for uploaded media and initialize the Taon context/database. CMS pages depend on the session and authorization contexts; the CMS abstract context includes TaonSessionAbstractContext.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/cms.md",
    "headingId": "use-the-backoffice",
    "headingTitle": "Use the backoffice",
    "text": "Use the backoffice The CMS navigation provides post, course, category, tag, asset, comment, and content-permission features. Posts support published or draft content, related posts, thumbnails, revisions, and media attachments. Categories can be nested; tags are flat. Product pages can link to CMS posts, and course components can render a protected post and its related lessons; see e-commerce. The backoffice's CMS entry is visible to superusers or users with hasAccess.toManageCms. Individual controllers can apply finer checks such as toManagePosts; grant the relevant permission through Taon authorization rather than relying on a hidden menu item as the security boundary. CMS APIs also enforce their own access and publication rules. Storage assets are accessed through Taon storage APIs. For example, the Assets page lists stored files and requests short-lived private URLs rather than buffering file contents in the browser. Configure the storage backend and public/private access policy for the deployment target.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/cms.md",
    "headingId": "runtime-notes",
    "headingTitle": "Runtime notes",
    "text": "Runtime notes The Angular backoffice runs in the browser. Its context and data APIs must be registered on the application's Taon backend. WebSQL mode places backend work in the browser, so it is not a substitute for a server when the application needs server-managed credentials or externally reachable media URLs. Check the selected storage provider's support before enabling CMS uploads in WebSQL or a Cloudflare Worker. See Baseline for combined registration and the admin setup tutorial.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/e-commerce.md",
    "headingId": "taon-e-commerce",
    "headingTitle": "Taon E-commerce",
    "text": "Taon E-commerce @taon-dev/e-commerce provides product catalog, cart, order, payment transaction, entitlement, and commerce backoffice features. It integrates with CMS for product descriptions and courses. Stripe checkout and subscription events are supported by the current implementation.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/e-commerce.md",
    "headingId": "add-and-configure",
    "headingTitle": "Add and configure",
    "text": "Add and configure The recommended admin integration is Taon Baseline. Its context includes TaonECommerceAbstractContext, which in turn includes the CMS context; its lazy route registers TaonECommerceBackofficeRoutes. For a standalone integration, register the e-commerce abstract context and route directly. The storefront exports TaonCartButtonComponent and TaonCartConfig: import { Component } from '@angular/core'; import { TaonCartButtonComponent, TaonCartConfig, } from '@taon-dev/e-commerce/src'; @Component({ imports: [TaonCartButtonComponent], template: '<taon-cart-button [config]=\"cartConfig\" />', }) export class StoreHeaderComponent { cartConfig: TaonCartConfig = {}; } The component's config input accepts a TaonCartConfig. A working application example also registers TaonECommerceCartProvider in its Taon context; use that example when overriding the default cart behavior. For Stripe, configure STRIPE_SECRET_KEY and STRIPE_WEBHOOK_KEY in the server-side Taon environment. Register the webhook URL shown by the Products page's Sync with Stripe flow with Stripe. Never place either secret in browser code. Payment completion and entitlements are finalized from verified webhook events, not from the browser's success redirect.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/e-commerce.md",
    "headingId": "use-products-cart-and-courses",
    "headingTitle": "Use products, cart, and courses",
    "text": "Use products, cart, and courses Create products in E-commerce > Products, configure price and availability, and optionally use Link to post to use a CMS post for the product details. Customers add eligible products to the cart and complete checkout. Product eligibility is checked on the server for ownership, active subscriptions, stock, pending reservations, per-user limits, currency, and recurring checkout compatibility. The course components can display a public CMS root and its protected related lessons. The CMS post's related-post order is preserved. Purchased media is authorized by the server's session and entitlement-aware auth repository; a browser-provided authorization context is only a refresh trigger.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/e-commerce.md",
    "headingId": "permissions-and-runtime",
    "headingTitle": "Permissions and runtime",
    "text": "Permissions and runtime Baseline shows the e-commerce menu to superusers or users with the exact permission key toManagerEcommerce. Sensitive commerce operations are validated by their Taon controllers and repositories as well. The Stripe secret and webhook flow require a server-side runtime with a reachable webhook endpoint. WebSQL may be useful for browser-local development or UI testing, but it does not provide a place to keep Stripe secrets or receive external Stripe webhooks. Cloudflare Worker deployments must configure Worker bindings and a reachable webhook route; verify database and provider support for that target before deploying. See CMS, Session, and Baseline for related setup.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/marketing.md",
    "headingId": "marketing-related-analytics-events",
    "headingTitle": "Marketing-related analytics events",
    "text": "Marketing-related analytics events The marketing-related capability documented here is the generic event collection in @taon-dev/analytics. It lets an application record interactions such as a promotion or banner click. Analytics does not provide campaign planning, email marketing, audience segmentation, or a marketing automation engine.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/marketing.md",
    "headingId": "record-an-interaction",
    "headingTitle": "Record an interaction",
    "text": "Record an interaction Start TaonAnalyticsTrackingService once in the browser root component as described in Analytics. Inject that service into the component or application service that handles the interaction: import { inject } from '@angular/core'; import { TaonAnalyticsTrackingService } from '@taon-dev/analytics/src'; export class BannerComponent { private readonly analytics = inject(TaonAnalyticsTrackingService); async onBannerClick(): Promise<void> { await this.analytics.recordEvent('banner-click', { category: 'marketing', data: { bannerId: 'summer' }, }); } } Use stable event names and structured data fields that your project can interpret later. The event is stored in the shared analytics event table; it does not automatically create a campaign report or change a user's access.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/marketing.md",
    "headingId": "admin-and-package-boundaries",
    "headingTitle": "Admin and package boundaries",
    "text": "Admin and package boundaries Analytics event data is associated with its optional visitor, session, and user relationships. Authenticated user IDs are taken from verified session tokens. The Analytics backoffice is gated by toManageAnalytics. Baseline also has a separate Marketing navigation entry and imports @taon-dev/marketing; that package is distinct from the analytics event API. Do not infer that the separate menu's features are implemented in @taon-dev/analytics. For event collection lifecycle and backend events, see Analytics. For combined admin navigation, see Baseline.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/seo.md",
    "headingId": "taon-seo",
    "headingTitle": "Taon SEO",
    "text": "Taon SEO @taon-dev/seo manages global SEO defaults and path-specific overrides for static application routes. It resolves browser document metadata; it does not analyze keywords, generate content, or automatically convert CMS posts into SEO pages.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/seo.md",
    "headingId": "add-and-configure",
    "headingTitle": "Add and configure",
    "text": "Add and configure Register TaonSeoAbstractContext in the application's backend context and TaonSeoBackofficeRoutes in the admin route tree. Baseline does both when TaonBaselineAbstractContext and TaonBaselineBackofficeRoutes are used. The Angular app also needs the SEO provider: import { provideTaonSeo } from '@taon-dev/seo'; export const appConfig = { providers: [ ...provideTaonSeo(), ], }; Merge the provider into the app's existing providers; keep its Taon context, router, and startup providers. In the backoffice, set global defaults under SEO > General (Settings) and add path overrides under SEO > Pages. Blank optional page values inherit global defaults. Set canonicalBaseUrl in global settings and canonicalUrl on a page override as absolute HTTP(S) URLs without query strings or fragments.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/seo.md",
    "headingId": "metadata-behavior-and-permissions",
    "headingTitle": "Metadata behavior and permissions",
    "text": "Metadata behavior and permissions The SEO provider loads the global settings and matching page override after Angular starts and on primary route changes. It updates title, description, keywords, canonical URL, robots, and Open Graph metadata. Query strings, fragments, matrix parameters, and auxiliary outlets do not select a page override; trailing slashes are normalized. Baseline shows SEO navigation to superusers or users with toManageSeo. Configuration writes, page listings, and image uploads require this access; public settings lookups and social-image downloads are available for rendering and crawlers. Store images through Taon storage; the database stores image keys, not temporary browser blob URLs.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/seo.md",
    "headingId": "runtime-notes",
    "headingTitle": "Runtime notes",
    "text": "Runtime notes provideTaonSeo() is an Angular/browser provider, while SEO settings and image lookups are served by the registered Taon context. Client-side metadata updates do not replace server-rendered metadata for crawlers that do not execute JavaScript. Make the backend host and public social-image URLs reachable to crawlers. For SSR, verify that the server rendering path emits the metadata needed by the target crawler. See Baseline and the admin setup tutorial.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/session.md",
    "headingId": "taon-session",
    "headingTitle": "Taon Session",
    "text": "Taon Session @taon-dev/session supplies Taon login, registration, session state, and authorization. It also provides user, session, role, group, and authorization backoffice routes. It is designed for Taon applications, not as a standalone authentication package.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/session.md",
    "headingId": "add-it-to-an-application",
    "headingTitle": "Add it to an application",
    "text": "Add it to an application For a complete admin installation, use Taon Baseline, which includes TaonSessionAbstractContext and its backoffice routes. To use Session by itself, register TaonSessionAbstractContext in the active Taon context and add the specific session routes needed by the application. The browser UI exports TaonSessionButtonComponent and TaonSessionComponent. The example app imports the button and binds a TaonSessionConfig: import { Component } from '@angular/core'; import { TaonSessionComponent, TaonSessionConfig, } from '@taon-dev/session/src'; @Component({ imports: [TaonSessionComponent], template: '<taon-session [config]=\"config\" />', }) export class SessionHostComponent { config: TaonSessionConfig = {}; } The configuration is optional in the example application; configure a dashboard destination only when the app has a real need for it. Do not put credentials in a client-side configuration.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/session.md",
    "headingId": "main-features-and-authorization",
    "headingTitle": "Main features and authorization",
    "text": "Main features and authorization Session login and registration support Taon's JWT, cookie, and header authentication paths. TaonSessionMiddleware can protect controller methods. Apply it before inherited middleware when the request must be authenticated first. The session context exposes authorization checks for admin capabilities. Baseline's user, session, and authorization menu entries use toManageUsers, toManageSessions, and toManageAuthorization; superusers can also see these entries. CMS, commerce, SEO, and analytics use their own permission checks. Logging in alone does not grant administrator access. Use the session state returned by the server as the source of authorization. Do not treat a client-provided user ID or permission list as proof of identity.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/taon-admin/session.md",
    "headingId": "runtime-notes",
    "headingTitle": "Runtime notes",
    "text": "Runtime notes Register the session context in the backend context that serves the application. Node.js and WebSQL are distinct Taon deployment modes; browser mode does not make server secrets available to browser code. Use the server environment for credentials and deployment-specific authentication configuration. See the Baseline integration for a working context and backoffice route, and the admin tutorial for an existing Taon application.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.md",
    "headingId": "add-taon-admin-to-an-existing-taon-project",
    "headingTitle": "Add Taon Admin to an existing Taon project",
    "text": "Add Taon Admin to an existing Taon project This tutorial adds the Baseline backoffice to an existing Taon app and verifies that its modules and permission-gated navigation load.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.md",
    "headingId": "prerequisites",
    "headingTitle": "Prerequisites",
    "text": "Prerequisites An existing Taon project with its organization/container dependencies available. Use the project's Taon dependency workflow rather than running npm install in a Taon container. @taon-dev/baseline and its required packages declared and available through that project dependency workflow. Node.js 22 or later for the current Taon CLI. A Taon application context and Angular router already initialized. Session authorization configured, plus a test account that can be granted the required admin permissions. If you are starting a project instead, use the CLI commands guide and verify commands against the installed CLI version.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.md",
    "headingId": "1-add-baseline-to-the-taon-context",
    "headingTitle": "1. Add Baseline to the Taon context",
    "text": "1. Add Baseline to the Taon context Import TaonBaselineAbstractContext and include it alongside TaonBaseContext in the active application context: import { TaonBaselineAbstractContext } from '@taon-dev/baseline/src'; import { Taon, TaonBaseContext } from 'taon/src'; export const AppContext = Taon.createContext(() => ({ contextName: 'AppContext', contexts: { TaonBaseContext, TaonBaselineAbstractContext, }, })); This registers the module contexts composed by Baseline, including Session, CMS, E-commerce, Analytics, SEO, and Marketing. It does not configure your application's database, storage, authentication secrets, or payment provider.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.md",
    "headingId": "2-add-the-lazy-backoffice-route",
    "headingTitle": "2. Add the lazy backoffice route",
    "text": "2. Add the lazy backoffice route Register Baseline's route in your app router. Keep the application context available to the named outlet: import { TaonBaselineBackofficeRoutes } from '@taon-dev/baseline/src'; import { TaonBaselineBackofficeOutletName } from '@taon-dev/ui/src'; import { TAON_CONTEXT } from 'taon/src'; const adminRoute = { path: 'backoffice', outlet: TaonBaselineBackofficeOutletName, providers: [ { provide: TAON_CONTEXT, useFactory: () => AppContext }, ], loadChildren: () => import('@taon-dev/baseline/src').then( module => module.TaonBaselineBackofficeRoutes, ), }; Add adminRoute to the app's existing routes. The outlet constant is admin; the example applications expose the admin outlet through their app navigation. Use the same router and TAON_CONTEXT initialization pattern as the rest of your app.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.md",
    "headingId": "3-configure-authorization-and-module-services",
    "headingTitle": "3. Configure authorization and module services",
    "text": "3. Configure authorization and module services Grant the test account the feature permissions it needs. Baseline checks permissions such as toManageCms, toManagerEcommerce, toManageAnalytics, toManageSeo, and toManageMarketing; Session user, session, and authorization pages have their own permissions. Superusers can see the corresponding routes. Controllers still enforce authorization for protected operations. Configure storage for CMS uploads. For Stripe checkout, set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_KEY in the server-side Taon environment and register the displayed webhook URL in Stripe. These settings are not required just to open the backoffice.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/add-taon-admin-to-existing-project.md",
    "headingId": "4-build-and-verify",
    "headingTitle": "4. Build and verify",
    "text": "4. Build and verify Build the project library before starting the app, then run the project's normal development target. The CLI names below are implemented by Taon: taon build:watch:lib taon app:normal Open the application and use its admin entry point to open the admin outlet. Confirm that the Baseline shell and Welcome page render. Sign in with the authorized test account and verify that the granted modules appear; use an account without those permissions to confirm protected menu entries do not appear. Open one module page and confirm its data request succeeds. For the complete route and runtime caveats, see Taon Baseline. Module-specific setup is in the Session, CMS, E-commerce, SEO, Analytics, and Marketing references.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/track-analytics-events.md",
    "headingId": "track-analytics-events-in-a-taon-app",
    "headingTitle": "Track analytics events in a Taon app",
    "text": "Track analytics events in a Taon app This tutorial starts browser analytics once and records a custom marketing interaction through the shared event API.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/track-analytics-events.md",
    "headingId": "1-register-the-analytics-context",
    "headingTitle": "1. Register the analytics context",
    "text": "1. Register the analytics context Include TaonAnalyticsAbstractContext in the active Taon backend context, or use TaonBaselineAbstractContext, which already includes Analytics. Ensure the application's session context is available as well.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/track-analytics-events.md",
    "headingId": "2-start-the-browser-tracker",
    "headingTitle": "2. Start the browser tracker",
    "text": "2. Start the browser tracker Provide TaonAnalyticsTrackingService in the Angular root component and call start() once after Taon initialization: import { TaonAnalyticsTrackingService } from '@taon-dev/analytics/src'; export class AppComponent implements OnInit { private readonly analytics = inject(TaonAnalyticsTrackingService); ngOnInit(): void { this.analytics.start(); } } The tracker uses browser localStorage, sessionStorage, and router navigation. Do not start it in a Node-only process.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/track-analytics-events.md",
    "headingId": "3-record-an-interaction",
    "headingTitle": "3. Record an interaction",
    "text": "3. Record an interaction Call recordEvent() from the code that handles the interaction: await this.analytics.recordEvent('banner-click', { category: 'marketing', data: { bannerId: 'summer' }, }); The event is saved with the generic analytics events. It does not create a campaign or marketing report automatically.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/tutorial/track-analytics-events.md",
    "headingId": "verify",
    "headingTitle": "Verify",
    "text": "Verify Open the Analytics backoffice with a user who has toManageAnalytics, trigger the event in the browser, then inspect the event through the event API or analytics data. The current Events page is a placeholder, so the absence of an Events dashboard is not evidence that the tracker failed. See the Analytics reference for the session timeout, storage, and backend event behavior.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "apply-internationalization-to-the-entire-project",
    "headingTitle": "Apply Internationalization to the Entire Project",
    "text": "Apply Internationalization to the Entire Project Apply the existing Taon internationalization (i18n) system to all applicable files inside /src. Follow the project's existing Internationalization (i18n) rules exactly.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "goal",
    "headingTitle": "Goal",
    "text": "Goal Go through the entire /src directory and find user-visible text that should be translated. Replace appropriate hardcoded user-visible strings with the Taon translation system. This applies to both: frontend code backend code Do NOT blindly translate every string. Only translate text that is intended to be displayed or communicated to the user.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "frontend",
    "headingTitle": "Frontend",
    "text": "Frontend Inspect all applicable frontend files inside /src, including: Angular components component templates services directives dialogs forms validation messages notifications tooltips labels buttons menu items placeholders titles empty-state messages confirmation messages errors intended for the user Examples of strings that SHOULD normally be translated: label = 'Save'; title = 'Edit user'; tooltip = 'Delete this item'; message = 'Operation completed successfully'; <button>Save</button> <h2>Edit user</h2> <span>No results found</span> Convert them using the appropriate Taon translation mechanism.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "choose-the-correct-api",
    "headingTitle": "Choose the correct API",
    "text": "Choose the correct API Use the simplest appropriate translation mechanism. Prefer Signal translations when the value should react to language changes: label = this.t.signal.gettext('Save'); Use normal synchronous translations when reactivity is unnecessary: label = this.t.gettext('Save'); Use Observable translations only when the translation naturally belongs to an existing RxJS stream: label$ = source$.pipe( switchMap(() => this.t.$.gettext('Save')), ); Do NOT create an Observable solely for translation. For simple template text, use the project's supported template translation mechanism when appropriate: <!-- needs TranslateDirective and \"t\" field inside component class --> <span translate>No results found</span> or: <!-- PREFERED WAY, needs only \"t\" field inside component class --> <span>{{ t.gettext('No results found') }}</span> Follow existing project conventions when deciding between these approaches.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "translation-parameters",
    "headingTitle": "Translation parameters",
    "text": "Translation parameters Do NOT construct translated sentences by concatenating translated and dynamic fragments when the whole sentence can be translated. Avoid: this.t.gettext('Hello') + ' ' + username; Prefer: this.t.gettext('Hello [[ username ]]', { username, }); This allows translators to translate the complete sentence correctly.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "backend",
    "headingTitle": "Backend",
    "text": "Backend Inspect backend code for user-facing text returned or sent to users. Examples include: API response messages validation messages authentication messages emails notifications user-facing errors For controller request translation, use the request-specific t provided by Taon: return async (req, res, { t }) => { return t.gettext('Something went wrong'); }; Do NOT create: const t = Translation.for( Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP, ); for controller request translation. Backend controller translations must use the t supplied through: (req, res, { t }) Use only synchronous translation APIs there. Do NOT use: t.signal t.$ on the backend.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "what-not-to-translate",
    "headingTitle": "What NOT to translate",
    "text": "What NOT to translate Do NOT translate strings that are internal implementation details. Examples: 'GET' 'POST' '/api/users' 'userId' 'accessToken' 'profile-picture' 'WINDOW' 'admin' 'localhost' Also do NOT translate: enum values object/property names database column names entity names used internally API paths route paths file paths CSS classes selectors IDs storage keys configuration keys environment variable names event names logging/debugging messages intended only for developers protocol values MIME types Material icon names code identifiers test data unless it represents actual user-visible UI text For example: <mat-icon>delete</mat-icon> delete is a Material icon identifier and MUST NOT be translated. Likewise: path: 'users' is a route path and MUST NOT be translated. But: menuItem: 'Users' is user-visible and SHOULD be translated if the API supports translated values there.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "preserve-behavior",
    "headingTitle": "Preserve behavior",
    "text": "Preserve behavior This task is an i18n migration, not a refactoring task. Do NOT: redesign components change business logic change application behavior rename unrelated variables reorganize files introduce new architecture modify APIs unnecessarily perform unrelated cleanup Make only changes required to correctly internationalize user-visible text.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "scope-restrictions",
    "headingTitle": "Scope restrictions",
    "text": "Scope restrictions Follow the project's general coding rules. In particular: modify files only inside /src do NOT modify package.json do NOT modify taon.jsonc do NOT modify project configuration do NOT create tests do NOT create *.spec.ts do NOT create *.test.ts do NOT create test configuration do NOT build the project do NOT publish anything do NOT release anything do NOT initialize anything",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "existing-translations",
    "headingTitle": "Existing translations",
    "text": "Existing translations Before changing a file, inspect how translation is already implemented in that file and nearby files. If a file already has: const t = Translation.for(...); or: t = t.for(this); reuse the existing setup. Do NOT create duplicate translation helpers. Preserve existing translated strings unless they are clearly incorrect.",
    "api": false
  },
  {
    "filePath": "isomorphic-lib-v21/docs/usefull-prompts/apply-translations.md",
    "headingId": "work-systematically",
    "headingTitle": "Work systematically",
    "text": "Work systematically Process the complete /src tree. Do not stop after converting a few obvious components. For each applicable file: inspect the file for user-visible text distinguish user-visible strings from internal/programmatic strings apply the appropriate Taon translation mechanism preserve dynamic parameters using [[ parameter ]] preserve existing behavior continue to the next file The task is complete only after the entire /src tree has been inspected for applicable user-visible strings. When uncertain whether a string is user-visible, inspect its usage before modifying it. Do not translate strings blindly based only on their English-looking content.",
    "api": false
  },
  {
    "filePath": "ng2-rest/README.md",
    "headingId": "ng2-rest",
    "headingTitle": "ng2-rest",
    "text": "ng2-rest Robust isomorphic REST framework for browser (Angular, React etc.) for backend Taon apps/libs (NodeJS/TypeScript) (part of taon.dev). Features: Compatible with Angular (2+) (newest 13,14 also...) , React, Vue , NodeJS (works everywhere) Compatible with RxJS operators (exhaustMap, switchMap, request cancelation etc.) Based on axios => excellent alternative to Angular's HttpClient JSONP api request handling Transfer class instance from server to client and back Elegant way of dealing with REST api ( similar to ExpressJS routes definitions ) (more documentation soon... ) To install this package run: npm install ng2-rest --save Import Resource class: import { Resource } from 'ng2-rest/browser';",
    "api": false
  },
  {
    "filePath": "ng2-rest/README.md",
    "headingId": "resource",
    "headingTitle": "Resource",
    "text": "Resource Fit you existing API (not only REST) into new fluent objects with Resource class observables. Use power of async in new angular templates; template.html Users: <ul *ngIf=\"model.allUsers() | async; else loader; let users\" > <li *ngFor=\"let user of users\"> {{user.id}} {{user.fullName()}} <br> <input type=\"name\" [(NgModel)]=\"user.name\" > <button (click)=\"model.update(user)\" > Update </button> </li> </ul> <ng-template #loader> loading users... </ng-template> component.ts class User { name: string; surname: string; id: number; fullName() { return `Surname: ${this.surname}, Name: ${this.name}`; } } // Express.js style url endpoint model // you can ommit \"<User>\" part is you don't wanna see response interface // also you can ommit third argument \",User\" is you don't wanna // map response object to User class objects const rest = Resource.create<User>(\"http://yourbackend.com/api\",\"users/:id\",{'':User} ) class UserComponent { // Prepare your beautiful interface model = { allUsers: () => rest.model() .array .get() .observable // Observable resposnse (useful for Angular 2+ html templates) .pipe( map({ body } => body.json) ) // get all users, body.json => User[] userBy: (id) => rest.model({id}) .get() // Promise response by default .then({ body } => console.log(body.json)) // get user by id, body.json => User update: async (user:User) =>{ try { await rest.model({id:user.id}).put(user) // Promise response by default alert('Update sucess') } catch(e) { alert(e) } } } constructor() { } }",
    "api": false
  },
  {
    "filePath": "ng2-rest/README.md",
    "headingId": "specification",
    "headingTitle": "Specification",
    "text": "Specification Example UrlParams[] : [ { sort: true },{ filter: 'id,5' }, { filter: 'name,test' } ] Name Parameters Description array changes response type to array get model, UrlParams[] get data post model, UrlParams[] create data patch model, UrlParams[] change data (effect of changing data may be diffrent with each request) put model, UrlParams[] change data (can be done multiple times with same effect) head model, UrlParams[] check data delete model, UrlParams[] remove data jsonp model, UrlParams[] get jsonp data",
    "api": false
  },
  {
    "filePath": "ng2-rest/README.md",
    "headingId": "production-mode",
    "headingTitle": "Production mode",
    "text": "Production mode === Nice things to do in production mode: 1. Disable warnings. If you don't wanna see warning, disable it like this: if (environment.production) { Resource.enableWarnings = false; }",
    "api": false
  },
  {
    "filePath": "taon/CHANGELOG.md",
    "headingId": "changelog",
    "headingTitle": "CHANGELOG",
    "text": "CHANGELOG",
    "api": false
  },
  {
    "filePath": "taon/CHANGELOG.md",
    "headingId": "changes-v19",
    "headingTitle": "Changes v19",
    "text": "Changes v19 ✅ angular 19 support",
    "api": false
  },
  {
    "filePath": "taon/CHANGELOG.md",
    "headingId": "changes-v18",
    "headingTitle": "Changes v18",
    "text": "Changes v18 ✅ firedev -> taon rebranding ✅ angular 18 support",
    "api": false
  },
  {
    "filePath": "taon/CHANGELOG.md",
    "headingId": "changes-v16",
    "headingTitle": "Changes v16",
    "text": "Changes v16 ✅ angular 16 support ✅ global npm container for all projects ✅ standalone projects support (app + lib) ✅ organization projects support ✅ stable isomorphic library build ✅ release app to github /docs ✅ websql mode for mocked backend in github /docs",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "taon-framework-cli-cloud",
    "headingTitle": "Taon Framework/CLI/Cloud",
    "text": "Taon Framework/CLI/Cloud TAON Typescript Angular Orm Node ) ( BETA VERSION - For early testing. ) Taon 🔥🔥🔥 is a: CLI Framework Cloud + TypesScript isomorphic libraries/backends/frontends ✅ + Angular libraries and PWA apps ✅ + Databases with Orm (TypeORM) - sql.js -> local development mode ✅ -> local development with backend in browser mode (WEBSQL) ✅ -> production dockerized mode ✅ -> production backend in browser mode (WEBSQL) ✅ - mysql -> production dockerized mode (NOT READY YET) - D1 -> production read sql db ✅ + NodeJS backends deployable on any server with on command (Taon Cloud - PROOF OF CONCEPT READY) + NodeJS backends deployable Cloudflare Wokers® on command ✅ + Electron desktop apps ✅ + Capacitor mobile apps (NOT READY YET) + Visual Studio Code/ VScodium plugins ✅ READ DOCUMENTATION Initial requirements of taon Installed git Increased watchers limit (only on linux): echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "supported-os-es",
    "headingTitle": "Supported OS-es:",
    "text": "Supported OS-es: Win10, Win11 (gitbash, pwsh) MacOS Linux (fedora, arch, ubuntu)/(KDE, Gnome, DDE-Deepin)",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "supported-editors",
    "headingTitle": "Supported editors",
    "text": "Supported editors Visual Studio Code VScodium",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "required-version-of-nodejs",
    "headingTitle": "Required version of NodeJS",
    "text": "Required version of NodeJS Windows 10/11 >= v22 MacOS: >= v22 Linux: >= v22",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "how-to-install-taon",
    "headingTitle": "How to install taon",
    "text": "How to install taon every OS (except linux Arch) npm i -g taon linux Arch: SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm i -g taon",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "how-to-update-taon-s-core-container",
    "headingTitle": "How to update Taon's core container",
    "text": "How to update Taon's core container Update active core containers for your current cli version ( for taon@21 => container-21 ) taon sync for other containers you have to reinstall whole taon, ex. npm i -g taon@19 and then taon sync",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "how-to-uninstall-taon-from-local-machine",
    "headingTitle": "How to uninstall taon from local machine",
    "text": "How to uninstall taon from local machine Taon stores a big global container (in ~/.taon) for npm packages that are being shared across all taon projects. npm uninstall -g taon rm -rf ~/.taon # taon local repositories, databases, settings, caches.",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "projects-that-are-part-of-taon-dev",
    "headingTitle": "Projects that are part of taon.dev:",
    "text": "Projects that are part of taon.dev: ( I am slowly moving taon projects to https://github.com/orgs/taon-dev) taon https://github.com/darekf77/taon framework library tnp https://github.com/darekf77/tnp main cli / code structuring tool taon-core https://github.com/darekf77/tnp-core essential/core helpers for all projects taon-helpers https://github.com/darekf77/tnp-helpers extended core helpers taon-rest https://github.com/darekf77/ng2-rest easy rest api taon-json https://github.com/darekf77/json10 handle JSON in better way taon-logger https://github.com/darekf77/ng2-logger logging in isomorphic apps taon-typeorm https://github.com/darekf77/taon-typeorm TypeOrm fork taon-type-sql https://github.com/darekf77/taon-type-sql strongly type sql taon-incremental-watcher https://github.com/darekf77/incremental-compiler abstraction for incremental builders NodeJS based taon-storage https://github.com/darekf77/taon-storage ts decorators based storage solution taon-walk-object https://github.com/darekf77/lodash-walk-object iterate over deep properties in object taon-class-helpers https://github.com/darekf77/typescript-class-helpers helpers for OOP class names based",
    "api": false
  },
  {
    "filePath": "taon/README.md",
    "headingId": "global-npm-dependencies-installed-with-taon",
    "headingTitle": "Global npm dependencies installed with taon",
    "text": "Global npm dependencies installed with taon Installation happens when you first time use taon [ // alternative to npx ( it wil not download package from npm if is not installed ) { name: 'npm-run', version: '4.1.2' }, //handy for removing files { name: 'rimraf', version: '3.0.2' }, //handy for recreating catalogs { name: 'mkdirp' }, // package manager { name: 'yarn' }, // https server with --base-href { name: 'taon-http-server' }, // code formatter { name: 'prettier' }, // process killer { name: 'fkill', installName: 'fkill-cli' }, // for unit tests runner { name: 'mocha' }, // for unit tests runner { name: 'jest' }, // run ts like js { name: 'ts-node' }, // fork of vsce package without npm dependencies restrictions { name: 'taon-vsce' }, // analyze you final bundle { name: 'webpack-bundle-analyzer' } ]",
    "api": false
  },
  {
    "filePath": "taon/TODO.md",
    "headingId": "taon-v22-x-x",
    "headingTitle": "Taon v22.X.X",
    "text": "Taon v22.X.X 🔲 [cloud-service] 2FA authentication 🔲 build organization projects as micro-frontends 🔲 organization multi window electron app 🔲 angular 22",
    "api": false
  },
  {
    "filePath": "taon/TODO.md",
    "headingId": "taon-v21-x-x",
    "headingTitle": "Taon v21.X.X",
    "text": "Taon v21.X.X ✅ angular v21 support ✅ angular SSR mode for dockerized production 🔲 angular standalone project structure 🔲 [cloud-service] basic command line authentication 🔲 [cloud-service] backend readonly mode for deployment 🔲 [cloud-service] database replication",
    "api": false
  },
  {
    "filePath": "taon/TODO.md",
    "headingId": "taon-v20-x-x",
    "headingTitle": "Taon v20.X.X",
    "text": "Taon v20.X.X < skipping >",
    "api": false
  },
  {
    "filePath": "taon/TODO.md",
    "headingId": "taon-v19-x-x-current-version",
    "headingTitle": "Taon v19.X.X (CURRENT VERSION)",
    "text": "Taon v19.X.X (CURRENT VERSION) ✅ angular v19 support ✅ fast/stable npm packages solution ✅ cloud build: electron, cli, lib, vscode ✅ docs examples for better understranding ✅ realtime development FE/BE (TCP upgrade, IPC) ✅ excellent isomorphic development programmer experience ✅ simple CD/CI develop/build/deploy process ✅ local release electron, cli, vscode ext. ✅ release standalone package as @organization/package",
    "api": false
  },
  {
    "filePath": "taon/TODO.md",
    "headingId": "taon-v18-x-x",
    "headingTitle": "Taon v18.X.X",
    "text": "Taon v18.X.X ✅ angular v18 support ✅ firedev -> taon (rebranding) ✅ docs for new framework api ✅ docs update for new cli",
    "api": false
  },
  {
    "filePath": "taon/TODO.md",
    "headingId": "taon-firedev-v17-x-x",
    "headingTitle": "Taon (Firedev) v17.X.X",
    "text": "Taon (Firedev) v17.X.X < skipped >",
    "api": false
  },
  {
    "filePath": "taon/TODO.md",
    "headingId": "taon-firedev-v16-x-x",
    "headingTitle": "Taon (Firedev) v16.X.X",
    "text": "Taon (Firedev) v16.X.X ✅ angular v16 support ✅ global packages container isomorphic library build ✅ normal and websql app build ✅ release/build/deploy websql or normal app to github pages ✅ electron app build ✅ prettier, eslint ✅ taon git commands ✅ global sources linked inside import src/ ✅ auto impors fix from 'isomorphic-lib/lib' to 'isomorphic-lib/src'",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "developer-guide",
    "headingTitle": "Developer Guide",
    "text": "Developer Guide",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "why-do-i-need-tnp-to-develop-taon",
    "headingTitle": "Why Do I Need tnp to Develop Taon?",
    "text": "Why Do I Need tnp to Develop Taon? The tnp CLI serves as a backup development tool for Taon. If you modify Taon's internal code, you might accidentally break the build system or CLI, making it impossible to build, release, or manage projects using the taon command. The tnp CLI provides a fallback in such situations. The tnp CLI provides more detailed diagnostic information than the standard taon CLI.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "how-to-set-up-a-development-environment-for-taon",
    "headingTitle": "How to Set Up a Development Environment for Taon",
    "text": "How to Set Up a Development Environment for Taon The Taon ecosystem is split across multiple repositories. However, everything is brought together by the taon-dev repository, which acts as the parent container for individual Taon projects.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "1-install-taon",
    "headingTitle": "1. Install Taon",
    "text": "1. Install Taon Follow the installation instructions in the Taon repository.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "2-clone-the-taon-dev-repository",
    "headingTitle": "2. Clone the taon-dev Repository",
    "text": "2. Clone the taon-dev Repository git clone https://github.com/darekf77/taon-dev.git",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "3-pull-all-projects",
    "headingTitle": "3. Pull All Projects",
    "text": "3. Pull All Projects Navigate to the taon-dev directory and pull all related projects. Follow any additional instructions displayed by the CLI. cd taon-dev taon pull:deep",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "4-link-tnp-globally",
    "headingTitle": "4. Link tnp Globally",
    "text": "4. Link tnp Globally The tnp project is located inside the taon-dev repository. cd tnp taon link:global",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "5-verify-the-tnp-installation",
    "headingTitle": "5. Verify the tnp Installation",
    "text": "5. Verify the tnp Installation tnp version You can now use the tnp command wherever you would normally use the taon command. As a first test, try building tnp using its own CLI in watch mode: tnp bwl",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "how-to-modify-the-taon-framework-cli-and-cloud",
    "headingTitle": "How to Modify the Taon Framework, CLI, and Cloud",
    "text": "How to Modify the Taon Framework, CLI, and Cloud The taon-dev directory contains multiple repositories, including taon, tnp, tnp-core, taon-typeorm, and others. Each repository is responsible for a specific part of the Taon ecosystem.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "cli-main-repository-tnp",
    "headingTitle": "CLI — Main Repository (tnp)",
    "text": "CLI — Main Repository (tnp) Use this repository to: Add or modify tnp and taon CLI commands. Extend or modify the build system. cd taon-dev/tnp tnp bwl You will see changes immediately in you tnp tool.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "framework-main-repository-taon",
    "headingTitle": "Framework — Main Repository (taon)",
    "text": "Framework — Main Repository (taon) Use this repository to: Develop and modify Taon framework building blocks. Work with controllers, contexts, providers, repositories, and other framework components. cd taon-dev/taon tnp bwl",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "core-helpers-and-utilities-tnp-core",
    "headingTitle": "Core Helpers and Utilities (tnp-core)",
    "text": "Core Helpers and Utilities (tnp-core) Use this repository to: Add, modify, and test core utilities and helper functions. cd taon-dev/tnp-core tnp bwl",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "http-fetch-wrapper-ng2-rest",
    "headingTitle": "HTTP Fetch Wrapper (ng2-rest)",
    "text": "HTTP Fetch Wrapper (ng2-rest) Use this repository to: Develop and maintain Taon's HTTP communication abstractions. Modify the HTTP request and response handling mechanisms. cd taon-dev/ng2-rest tnp bwl",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "advanced-helpers-utilities-and-types-tnp-helpers",
    "headingTitle": "Advanced Helpers, Utilities, and Types (tnp-helpers)",
    "text": "Advanced Helpers, Utilities, and Types (tnp-helpers) Use this repository to: Develop and maintain higher-level utilities, classes, types, and reusable abstractions. cd taon-dev/tnp-helpers tnp bwl",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "typeorm-fork-taon-typeorm",
    "headingTitle": "TypeORM Fork (taon-typeorm)",
    "text": "TypeORM Fork (taon-typeorm) Use this repository to: Maintain and update Taon's TypeORM fork. Apply framework-specific changes to TypeORM. cd taon-dev/taon-typeorm tnp bwl",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "taon-ui-ui",
    "headingTitle": "Taon UI (ui)",
    "text": "Taon UI (ui) Use this repository to: Develop and maintain reusable UI components. Work on Taon's shared frontend components and abstractions. Note: UI functionality is gradually being migrated from the legacy taon-ui repository to the newer ui repository. cd taon-dev/ui tnp bwl",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "taon-admin-modules-session-cms-e-commerce-analytic-seo",
    "headingTitle": "Taon Admin Modules (session, cms, e-commerce, analytic, seo)",
    "text": "Taon Admin Modules (session, cms, e-commerce, analytic, seo) These repositories provide feature-rich backend and frontend administration tools for Taon applications. Use them to: Extend existing administration features. Develop new backend and frontend functionality. Improve Taon's back-office tools and interfaces. For example, to work on the Session module: cd taon-dev/session tnp bwl The same development workflow applies to the CMS, E-Commerce, Analytics, and SEO modules.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "testing-your-changes-in-an-application",
    "headingTitle": "Testing Your Changes in an Application",
    "text": "Testing Your Changes in an Application It is also useful to keep a second terminal open to run an actual application while developing. tnp an This allows you to test your changes in a running application while the framework or module is being rebuilt in watch mode.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "additional-development-requirements",
    "headingTitle": "Additional Development Requirements",
    "text": "Additional Development Requirements",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "1-visual-studio-code-or-vscodium",
    "headingTitle": "1. Visual Studio Code or VSCodium",
    "text": "1. Visual Studio Code or VSCodium Install either Visual Studio Code or VSCodium. Make sure the corresponding command is available globally in your terminal: code for Visual Studio Code. codium for VSCodium.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "2-taon-development-extension",
    "headingTitle": "2. Taon Development Extension",
    "text": "2. Taon Development Extension Install the taon-dev.tnp extension for Visual Studio Code or VSCodium. You can install it directly from the tnp repository: cd taon-dev/tnp tnp ilvscodeplugin Restart your editor after installing the extension.",
    "api": false
  },
  {
    "filePath": "tnp/DEVELOPER_GUIDE.md",
    "headingId": "important-avoid-conflicting-extensions",
    "headingTitle": "Important: Avoid Conflicting Extensions",
    "text": "Important: Avoid Conflicting Extensions Do not use taon-dev.taon and taon-dev.tnp simultaneously. When developing Taon itself, use the taon-dev.tnp extension instead of taon-dev.taon to avoid potential conflicts.",
    "api": false
  },
  {
    "filePath": "tnp/README.md",
    "headingId": "tnp-cli-part-of-taon-framework",
    "headingTitle": "tnp -> CLI part of taon framework",
    "text": "tnp -> CLI part of taon framework",
    "api": false
  },
  {
    "filePath": "tnp/README.md",
    "headingId": "purpose-of-this-project",
    "headingTitle": "Purpose of this project",
    "text": "Purpose of this project this project is a core part of https://github.com/darekf77/taon local development of taon (tnp means \"typescript-npm-project\" - old name of taon framework) TAON DEVELOPER GUIDE - HOW TO USE TNP",
    "api": false
  },
  {
    "filePath": "tnp/TODO.md",
    "headingId": "todo",
    "headingTitle": "TODO",
    "text": "TODO",
    "api": false
  },
  {
    "filePath": "tnp/docs/ADDITIONAL-COMMANDS.md",
    "headingId": "running-nodejs-backend-app",
    "headingTitle": "Running nodejs backend app",
    "text": "Running nodejs backend app Usually you don't use this command for development -> debugger from Visual Studio Code is for this (F5 on keyboard, Task \"Debug/Start Server\"). tnp run",
    "api": false
  },
  {
    "filePath": "tnp/docs/ADDITIONAL-COMMANDS.md",
    "headingId": "tnp-extension-for-visual-studio-code",
    "headingTitle": "Tnp extension for Visual Studio Code",
    "text": "Tnp extension for Visual Studio Code Install essential vscode plugins from project workspace recommended or to apply best global config for VScode tnp vscode",
    "api": false
  },
  {
    "filePath": "tnp/docs/ADDITIONAL-COMMANDS.md",
    "headingId": "pause",
    "headingTitle": "Pause",
    "text": "Pause Pause terminal test tnp pause",
    "api": false
  },
  {
    "filePath": "tnp/docs/ADDITIONAL-COMMANDS.md",
    "headingId": "github-pages-from-docs-to-branch",
    "headingTitle": "Github pages from /docs to branch",
    "text": "Github pages from /docs to branch Pause terminal test tnp ghPagesInit tnp gh:pages:init tnp ghpagesinit tnp ghPagesInit --full # full process with deleting /docs files tnp ghPagesInit --provider bitbucket # specify different provider",
    "api": false
  },
  {
    "filePath": "tnp/docs/ADDITIONAL-COMMANDS.md",
    "headingId": "show-version-of-projects-inside-container",
    "headingTitle": "Show version of projects inside container",
    "text": "Show version of projects inside container tnp versions",
    "api": false
  },
  {
    "filePath": "tnp/docs/ADDITIONAL-COMMANDS.md",
    "headingId": "download-video-as-mp3",
    "headingTitle": "Download video as mp3",
    "text": "Download video as mp3 Download mp3 from url (got to ~/Download/mp3-from-websites) tnp mp3 <url to video>",
    "api": false
  },
  {
    "filePath": "tnp/docs/ADDITIONAL-COMMANDS.md",
    "headingId": "download-video-as-mp4-video",
    "headingTitle": "Download video as mp4 video",
    "text": "Download video as mp4 video Download mp4 from url (got to ~/Download/mp4-from-websites) tnp mp4 <url to video>",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "ci-cd-architecture",
    "headingTitle": "CI/CD & Architecture",
    "text": "CI/CD & Architecture",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "overview",
    "headingTitle": "Overview",
    "text": "Overview Taon Cloud CI/CD is under development. Centralized build execution, automated validation, deployment orchestration, and team-oriented release management are part of the planned Taon Cloud workflow. However, you do not need to wait for Taon Cloud to benefit from much of this architecture. The Taon CLI already provides a practical, lightweight approach to coordinating development, synchronizing multiple repositories, building interconnected projects directly from source, and releasing applications. For solo developers, small teams, and AI-assisted development, this can be an effective alternative to introducing a full CI/CD platform immediately. The idea is simple: Design your architecture with Taon standalone projects and containers, build directly from source, synchronize Git repositories with Taon commands, and run releases locally today. Move the orchestration to Taon Cloud when you need it. This is not a claim that manual releases provide every guarantee of Continuous Integration and Continuous Delivery. Automated tests, independent build environments, branch protection, security checks, and approvals remain important. Rather, Taon reduces the amount of additional infrastructure needed to get started.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "1-source-first-builds-no-intermediate-npm-releases",
    "headingTitle": "1. Source-First Builds: No Intermediate NPM Releases",
    "text": "1. Source-First Builds: No Intermediate NPM Releases In a conventional multi-package workflow, an application build may depend on publishing internal libraries first: CHANGE SHARED LIBRARY │ ▼ BUILD / TEST LIBRARY │ ▼ PUBLISH TO NPM │ ▼ UPDATE DEPENDENCY VERSIONS │ ▼ INSTALL NEW PACKAGES │ ▼ BUILD / TEST APPLICATION │ ▼ DEPLOY Taon builds internal dependencies directly from source. Internal libraries do not need intermediate NPM releases simply to be consumed by an application in the same Taon development environment. SHARED PROJECT SOURCE ────┐ │ APPLICATION SOURCE ────────┼──► TAON BUILD ──► ARTIFACT │ OTHER PROJECT SOURCE ──────┘ This reduces dependency-version synchronization and avoids repetitive publishing steps during integrated development. Public library distribution and external consumers can still require ordinary package releases.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "2-the-core-concept-isomorphic-app-library-projects",
    "headingTitle": "2. The Core Concept: Isomorphic App-Library Projects",
    "text": "2. The Core Concept: Isomorphic App-Library Projects In Taon, a project does not have to be exclusively a backend project or a frontend project. A standalone project can be both an application and a reusable library — an app-lib. A project can contain backend controllers, repositories, database entities, frontend Angular components, shared models, validation logic, utilities, and functionality reusable across runtimes.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "backend-and-frontend-are-not-fixed-project-categories",
    "headingTitle": "Backend and frontend are not fixed project categories",
    "text": "Backend and frontend are not fixed project categories Different app-libraries naturally contain different proportions of backend and frontend code: BACKEND / FRONTEND COMPOSITION Backend-heavy application/library ┌──────────────────────────────────────────────┐ │ BACKEND 90% FRONTEND 10% │ │ ████████████████████████████████████░░░░ │ └──────────────────────────────────────────────┘ Balanced full-stack application/library ┌──────────────────────────────────────────────┐ │ BACKEND 50% FRONTEND 50% │ │ ████████████████████░░░░░░░░░░░░░░░░░░░░ │ └──────────────────────────────────────────────┘ Frontend-heavy UI application/library ┌──────────────────────────────────────────────┐ │ BACKEND 10% FRONTEND 90% │ │ ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ └──────────────────────────────────────────────┘ Legend: ████ Backend functionality ░░░░ Frontend functionality These percentages are illustrative, not Taon configuration values. A backend-heavy project might include a small diagnostics interface; a frontend-heavy UI library might include backend controllers to support demos, examples, or tests. A project may also have no meaningful server-side component. Isomorphic does not mean every line of code runs everywhere. Node.js database APIs are not automatically available in browsers, and browser APIs are not automatically available in Node.js. The goal is to keep shared logic reusable while allowing runtime-specific implementations to coexist in one project.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "one-project-can-be-both-a-library-and-its-demonstration-application",
    "headingTitle": "One project can be both a library and its demonstration application",
    "text": "One project can be both a library and its demonstration application frontend-ui-storybook-like-app-lib/ │ ├── src/ │ ├── app/ │ │ ├── components/ │ │ ├── examples/ │ │ └── pages/ │ │ │ ├── shared/ │ │ ├── models/ │ │ └── utilities/ │ │ │ └── backend/ │ └── controllers/ │ └── taon.json This project can be a reusable UI library, a standalone demonstration application, a testing environment, and a full-stack application when required. The directory names are illustrative, not a mandatory Taon layout. Separate projects by responsibility, not automatically by runtime.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "3-design-an-entire-company-s-software-architecture",
    "headingTitle": "3. Design an Entire Company's Software Architecture",
    "text": "3. Design an Entire Company's Software Architecture Taon standalone projects and containers can represent much more than one application. They can organize the software architecture of an entire company: products, shared libraries, internal tools, documentation, and platform-specific applications.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "example-company-structure",
    "headingTitle": "Example company structure",
    "text": "Example company structure my-company/ │ ├── shared/ │ ├── core/ │ ├── authentication/ │ ├── database/ │ └── ui-components/ │ ├── products/ │ │ │ ├── customer-portal/ │ │ ├── frontend/ │ │ ├── backend/ │ │ └── documentation/ │ │ │ ├── admin-dashboard/ │ │ ├── frontend/ │ │ └── backend/ │ │ │ └── desktop-app/ │ ├── application/ │ └── shared/ │ ├── internal-tools/ │ ├── reporting/ │ └── monitoring/ │ └── documentation/ ├── developer-guide/ └── architecture/ Here frontend/ and backend/ indicate responsibilities, not a requirement to split each into a separate Taon project. In practice, the company can organize them into isomorphic app-libraries instead.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "containers-as-organizational-boundaries",
    "headingTitle": "Containers as organizational boundaries",
    "text": "Containers as organizational boundaries COMPANY CONTAINER │ ┌────────────────┼────────────────┐ │ │ │ SHARED CODE PRODUCTS INTERNAL TOOLS (container) (container) (container) │ │ │ ┌────┴────┐ ┌────┴────┐ ┌────┴────┐ │ │ │ │ │ │ Core Auth Customer Admin Reports Monitor │ │ │ ┌───┴───┐ │ │ │ └──────────> Backend Frontend Arrows illustrate conceptual dependencies, not automatic dependency resolution. Teams can own independent areas, share app-libraries, and coordinate work from higher-level containers. AI coding agents can likewise work within well-defined project boundaries.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "a-more-taon-native-isomorphic-company-structure",
    "headingTitle": "A more Taon-native, isomorphic company structure",
    "text": "A more Taon-native, isomorphic company structure company-container/ [Git repository] │ ├── backend-api-more-app-lib/ [Git repository] │ └── src/ │ ├── controllers/ │ ├── repositories/ │ ├── entities/ │ ├── shared/ │ └── frontend/ │ ├── frontend-ui-storybook-like-app-lib/ [Git repository] │ └── src/ │ ├── components/ │ ├── pages/ │ ├── shared/ │ └── backend/ │ ├── authentication-app-lib/ [Git repository] │ └── src/ │ ├── controllers/ │ ├── services/ │ ├── shared/ │ └── frontend/ │ └── customer-portal-app-lib/ [Git repository] └── src/ ├── controllers/ ├── repositories/ ├── components/ └── shared/ Each app-library is an independent, reusable unit that may contain both backend and frontend functionality. The labels describe the project's emphasis, not a restriction on what it may contain.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "4-standalone-projects-containers-and-git-repositories",
    "headingTitle": "4. Standalone Projects, Containers, and Git Repositories",
    "text": "4. Standalone Projects, Containers, and Git Repositories A standalone project can be developed, built, and maintained independently, including in its own Git repository. A container project groups related Taon projects into one development workspace. A container can also be a Git repository itself. The monorepo setting in taon.json controls the repository organization of container children. Configuration Repository organization monorepo: false Child projects can be maintained in separate Git repositories. monorepo: true Child projects are included in the container's Git repository.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "multi-repository-container",
    "headingTitle": "Multi-repository container",
    "text": "Multi-repository container company-container/ [Git repository] │ ├── shared-library/ [Git repository] │ └── src/ │ ├── backend-api/ [Git repository] │ └── src/ │ ├── frontend-app/ [Git repository] │ └── src/ │ └── documentation/ [Git repository] └── docs/ Here backend-api and frontend-app are illustrative names only. They could instead be backend-api-more-app-lib and frontend-ui-storybook-like-app-lib, each still containing isomorphic functionality.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "monorepo-container",
    "headingTitle": "Monorepo container",
    "text": "Monorepo container company-container/ [Git repository] │ ├── shared-library/ │ └── src/ │ ├── backend-api/ │ └── src/ │ ├── frontend-app/ │ └── src/ │ └── documentation/ └── docs/",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "combining-both-approaches",
    "headingTitle": "Combining both approaches",
    "text": "Combining both approaches company/ │ ├── shared/ [Separate repositories] │ ├── core/ │ └── authentication/ │ ├── product-a/ [Single repository] │ ├── frontend/ │ └── backend/ │ └── product-b/ [Separate repositories] ├── frontend/ └── backend/ These are conceptual organization examples: repository boundaries can follow product ownership, team responsibility, and reuse requirements rather than a universal backend/frontend split.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "5-synchronize-multiple-git-repositories",
    "headingTitle": "5. Synchronize Multiple Git Repositories",
    "text": "5. Synchronize Multiple Git Repositories When projects live in separate repositories, Taon provides commands to coordinate them from the container.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "pull-across-the-container",
    "headingTitle": "Pull across the container",
    "text": "Pull across the container taon pull:deep",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "push-across-the-container",
    "headingTitle": "Push across the container",
    "text": "Push across the container taon push:deep When working on a shared branch such as master, these commands help synchronize the group of projects without manually entering each repository. COMPANY CONTAINER │ taon pull:deep │ ┌──────────────┼──────────────┐ ▼ ▼ ▼ REPOSITORY A REPOSITORY B REPOSITORY C │ │ │ Updated Updated Updated taon push:deep │ ┌──────────────┼──────────────┐ ▼ ▼ ▼ REMOTE REPO A REMOTE REPO B REMOTE REPO C This is especially useful when a feature spans several app-libraries or multiple developers and AI agents contribute to the same container. Coordinate branches and review changes as appropriate for your team; multi-repository synchronization does not replace atomic transactions across repositories.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "6-build-the-container-directly-from-source",
    "headingTitle": "6. Build the Container Directly from Source",
    "text": "6. Build the Container Directly from Source Taon can build a container's first-level child projects together.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "development-build",
    "headingTitle": "Development build",
    "text": "Development build taon build Short alias: taon b",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "production-build",
    "headingTitle": "Production build",
    "text": "Production build taon build:prod Short alias: taon bp These commands rebuild first-level children in the selected mode, without requiring intermediate NPM publishing for internal source dependencies. TAON CONTAINER │ taon bp │ ┌──────────────┼──────────────┐ ▼ ▼ ▼ APP-LIB A APP-LIB B APP-LIB C │ │ │ PROD BUILD PROD BUILD PROD BUILD A successful build is not the same as a successful test suite. Run the relevant unit, integration, and end-to-end tests before release.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "7-release-strategies-five-types",
    "headingTitle": "7. Release Strategies: Five Types",
    "text": "7. Release Strategies: Five Types Taon supports five release strategies for different artifacts and destinations. Release type Purpose Manual Build and test locally, then publish to a remote destination such as NPM, an app store, or Taon Cloud. Cloud Perform the equivalent release workflow through remote Taon Cloud execution. Cloud-side orchestration is part of the developing Taon Cloud offering. Local Build and deploy to a local repository, dedicated repository, or special Git branch. Static Pages Publish static websites and Markdown-based documentation to GitHub Pages or similar hosting. Cloudflare Wrap Wrangler for full-stack frontend/backend deployment, with supported Cloudflare services such as KV, D1, and R2. The best strategy depends on the project type, target artifacts, team size, codebase complexity, security requirements, and hosting environment. TAON PROJECT │ SOURCE CODE │ TAON BUILD │ RELEASE STRATEGY │ ┌─────────────────┼─────────────────┐ │ │ │ MANUAL LOCAL CLOUD │ │ │ Remote Local Git Taon Cloud destination destination orchestration ADDITIONAL TARGETS │ ┌─────────┴─────────┐ │ │ STATIC PAGES CLOUDFLARE │ │ GitHub Pages Wrangler or similar │ ┌───┼───┐ KV D1 R2 These categories describe release strategies and common destinations; the diagram is conceptual rather than a claim that all targets are interchangeable.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "cloudflare-release-example",
    "headingTitle": "Cloudflare release example",
    "text": "Cloudflare release example taon automatic:release cloudflare:prod Alias: taon ar cloudflare:prod The configured release workflow can deploy frontend and backend functionality to Cloudflare. Cloudflare Workers provide backend execution; D1, KV, and R2 can provide database, key-value, and object storage capabilities when used by the application.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "8-supported-and-planned-release-artifacts",
    "headingTitle": "8. Supported and Planned Release Artifacts",
    "text": "8. Supported and Planned Release Artifacts Taon can build different outputs from its project architecture. Artifact Status Description NPM library and CLI tool ✅ Supported Shared NPM library with an optional global CLI tool. Angular / Node.js application ✅ Supported Full-stack backend/frontend application; WebSQL mode can run compatible backend functionality in the browser. VS Code extension ✅ Supported Extension reusing functionality from the NPM library / CLI. Electron application ✅ Supported Desktop application built around the Angular / Node.js app architecture and Electron IPC. Mobile application ⌛ In progress Planned Capacitor-based application using compatible frontend and backend architecture. Documentation websites generated from Markdown are also a supported output. Shared library code can be reused across applicable artifacts, while documentation websites follow their own build process.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "artifact-composition",
    "headingTitle": "Artifact composition",
    "text": "Artifact composition TAON APP-LIB PROJECT │ SHARED SOURCE │ ┌───────────────────┼───────────────────┐ │ │ │ NPM / CLI ANGULAR / NODE VS CODE │ │ EXTENSION │ │ │ │ ┌────┴────┐ │ │ │ │ │ │ WEB APP ELECTRON │ │ │ DESKTOP │ │ │ │ └──────────────┴────────────────────────┘ │ FUTURE TARGET │ CAPACITOR MOBILE The diagram illustrates potential code reuse, not a requirement that every project produce all artifacts.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "backend-frontend-execution-depends-on-the-artifact",
    "headingTitle": "Backend/frontend execution depends on the artifact",
    "text": "Backend/frontend execution depends on the artifact Artifact Backend execution Frontend execution Angular / Node.js Node.js Browser Angular WebSQL mode Browser-compatible backend logic Browser Electron Electron / Node.js processes Electron renderer VS Code extension VS Code extension host Optional webview NPM library / CLI Node.js or compatible runtime Optional browser-compatible exports Capacitor mobile (planned) Platform-dependent compatible logic Mobile WebView Everything can be designed around the same backend/frontend app-library model, but not every API is available in every runtime.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "websql-mode-backend-inside-the-browser",
    "headingTitle": "WebSQL mode: backend inside the browser",
    "text": "WebSQL mode: backend inside the browser A conventional Angular / Node.js application typically separates execution environments: BROWSER NODE.JS ┌──────────────────┐ ┌──────────────────┐ │ Angular frontend │ ── HTTP ─► │ Backend services │ └──────────────────┘ │ Database access │ └──────────────────┘ In Taon WebSQL mode, compatible backend functionality can run in the browser itself: BROWSER ┌───────────────────────────────────┐ │ Angular frontend │ │ │ │ │ Backend-like logic │ │ │ │ │ Browser-side storage │ └───────────────────────────────────┘ No separate Node.js backend required This can simplify standalone demos and end-to-end testing. Browser security, API availability, persistence, and runtime limitations still apply; WebSQL mode does not make arbitrary Node.js code browser-compatible.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "9-automated-local-releases-before-taon-cloud",
    "headingTitle": "9. Automated Local Releases Before Taon Cloud",
    "text": "9. Automated Local Releases Before Taon Cloud For now, a trusted developer's machine can serve as a lightweight release coordinator. A typical workflow: Developers or AI agents make changes in their assigned projects. Changes are reviewed and pushed to the appropriate Git repositories. Synchronize the container. Build the relevant projects in production mode. Run tests, validation, and security checks required by the project. Finalize Git history and execute the configured release. taon pull:deep taon bp cd my-app-entrypoint-project taon ar cloudflare:prod These commands are the build/release skeleton, not a substitute for a testing step. Add your project's test commands and approvals between the build and release as needed. DEVELOPERS / AI AGENTS │ ▼ MULTIPLE GIT REPOS │ ▼ taon pull:deep │ ▼ taon bp │ ▼ TESTS / VALIDATION │ ▼ FINAL GIT COMMIT │ ▼ taon ar cloudflare:prod │ ▼ DEPLOYMENT This works especially well for solo developers and small teams where release responsibility is centralized. It is not equivalent to independent, reproducible CI runners or mandatory pull-request gates.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "10-keep-taon-s-core-containers-updated",
    "headingTitle": "10. Keep Taon's Core Containers Updated",
    "text": "10. Keep Taon's Core Containers Updated Update the globally installed Taon CLI: npm i -g taon Then synchronize Taon's core containers: taon sync Taon uses core containers to centralize NPM installations required by Taon projects. Synchronization keeps that local environment aligned with the latest available Taon changes, fixes, and patches. As with any dependency update, validate the resulting environment before production release.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "11-rapid-git-checkpoints-taon-push-and-taon-melt",
    "headingTitle": "11. Rapid Git Checkpoints: taon push and taon melt",
    "text": "11. Rapid Git Checkpoints: taon push and taon melt During active development, especially with AI coding agents, it can be useful to save frequent Git checkpoints without stopping to write polished commit messages.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "step-1-quick-checkpoint-commits",
    "headingTitle": "Step 1: Quick checkpoint commits",
    "text": "Step 1: Quick checkpoint commits taon push Taon creates a quick commit with the message: $$$ update $$$ Repeated checkpoints might produce this history: Git history (newest first) ● $$$ update $$$ │ ● $$$ update $$$ │ ● $$$ update $$$ │ ● feat: implement authentication │ ● initial project setup",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "step-2-melt-temporary-commits-into-staged-changes",
    "headingTitle": "Step 2: Melt temporary commits into staged changes",
    "text": "Step 2: Melt temporary commits into staged changes taon melt Taon converts the latest temporary update commits back into staged changes: BEFORE: taon melt HEAD │ ▼ ● $$$ update $$$ ← checkpoint 3 │ ● $$$ update $$$ ← checkpoint 2 │ ● $$$ update $$$ ← checkpoint 1 │ ● feat: authentication ← last finalized commit │ ● initial setup taon melt │ ▼ AFTER: taon melt HEAD │ ▼ ● feat: authentication │ ● initial setup Git staging area: ┌────────────────────────────────────┐ │ Changes from checkpoint 1 │ │ Changes from checkpoint 2 │ │ Changes from checkpoint 3 │ └────────────────────────────────────┘ The temporary commits are removed from the current branch history and their combined changes are staged. Review them and create a meaningful commit: git diff --cached git commit -m \"feat: complete authentication workflow\"",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "step-3-clean-final-history",
    "headingTitle": "Step 3: Clean final history",
    "text": "Step 3: Clean final history FINAL GIT HISTORY ● feat: complete authentication workflow │ ● feat: implement authentication │ ● initial project setup",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "example-checkpoint-workflow",
    "headingTitle": "Example checkpoint workflow",
    "text": "Example checkpoint workflow taon push taon push taon push taon melt git commit -m \"feat: implement new functionality\"",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "release-protection",
    "headingTitle": "Release protection",
    "text": "Release protection Taon automatically prevents a release when the latest commit message is: $$$ update $$$ This prevents an unfinished checkpoint from being treated as a finalized release commit. Git history warning: taon melt rewrites the latest temporary commits. Coordinate with collaborators before rewriting checkpoints that have already been pushed to a shared branch. Review the staging area before creating the final commit.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "12-why-this-works-well-with-ai-coding-agents",
    "headingTitle": "12. Why This Works Well with AI Coding Agents",
    "text": "12. Why This Works Well with AI Coding Agents A container can give different developers or AI agents independent areas of responsibility: Developer A: backend-oriented app-library. Developer B: UI-oriented app-library. AI Agent A: authentication app-library. AI Agent B: tests, documentation, or bug fixes. Release coordinator: integration, validation, and deployment. The projects can remain independently versioned while being built from source in one workspace. COMPANY CONTAINER │ ┌────────────┴────────────┐ │ │ AUTHENTICATION UI COMPONENTS APP-LIB APP-LIB │ │ ┌──────┴──────┐ ┌──────┴──────┐ │ │ │ │ Backend Frontend Components Demo App │ │ │ │ └─────────────┴─────┬─────┴─────────────┘ │ CUSTOMER PORTAL APP-LIB │ PRODUCTION BUILD │ DEPLOYMENT TARGET taon push can save lightweight development checkpoints; taon melt can consolidate them for review; taon pull:deep can synchronize repositories; and taon bp can build the integrated source tree. AI agents should not bypass code review, tests, access controls, or release approval merely because the workflow is convenient.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "13-one-project-architecture-multiple-build-artifacts",
    "headingTitle": "13. One Project Architecture, Multiple Build Artifacts",
    "text": "13. One Project Architecture, Multiple Build Artifacts Taon is designed so a project does not have to be permanently tied to one deployment format. The same source architecture can support web applications, desktop applications, reusable libraries, documentation, and — in the future — additional native targets. TAON PROJECT │ Shared Source Code │ ┌──────────┼──────────┐ │ │ │ WEB APP ELECTRON DOCS │ │ │ Frontend Desktop Markdown Backend Package Website FUTURE TARGETS │ Native Apps │ Additional Runtimes This is a conceptual view of reuse and possible targets, not a promise that every project currently supports every output type.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "design-the-architecture-now-even-if-the-target-arrives-later",
    "headingTitle": "Design the architecture now, even if the target arrives later",
    "text": "Design the architecture now, even if the target arrives later product/ │ ├── domain/ │ └── business-logic/ │ ├── shared/ │ ├── models/ │ └── utilities/ │ ├── applications/ │ ├── web/ │ ├── desktop/ │ └── mobile/ [Future target] │ └── documentation/ A company may start with a website, then need Electron, mobile, or other native applications. Keeping business logic, shared models, and platform-specific functionality in appropriate app-libraries can reduce future restructuring. Native targets will still require platform-specific code, compatible dependencies, and testing. The architectural advantage is reuse, not automatic universal runtime compatibility.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "14-from-local-cli-orchestration-to-taon-cloud",
    "headingTitle": "14. From Local CLI Orchestration to Taon Cloud",
    "text": "14. From Local CLI Orchestration to Taon Cloud Today, Taon CLI coordinates local development and releases: COMPANY PROJECTS │ TAON CONTAINERS │ STANDALONE PROJECTS │ SOURCE-FIRST BUILDS │ TAON CLI │ LOCAL RELEASES Taon Cloud is intended to add centralized orchestration to the same underlying project model: COMPANY PROJECTS │ TAON CONTAINERS │ STANDALONE PROJECTS │ SOURCE-FIRST BUILDS │ TAON CLI │ TAON CLOUD │ ┌──────────────┼──────────────┐ │ │ │ BUILD VALIDATE DEPLOY │ │ │ Artifacts Tests/Checks Environments Potential cloud capabilities include remote builds, Git-triggered workflows, automated tests, deployment logs, managed environments, monitoring, and team-based permissions or approvals. These are future-oriented goals rather than claims that every feature is available today. The key principle is to reuse the existing Taon project structure and CLI commands instead of inventing a separate cloud-only build system.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "15-what-traditional-ci-cd-still-provides",
    "headingTitle": "15. What Traditional CI/CD Still Provides",
    "text": "15. What Traditional CI/CD Still Provides The local approach is useful, but it does not automatically provide: Independent, isolated, reproducible build environments. Git-triggered tests and pull-request validation. Branch protection and mandatory reviews. Centralized logs and durable build artifacts. Dependency scanning and security policies. Deployment approvals, audit trails, and rollback processes. Releases independent of one developer's machine. Use conventional CI/CD infrastructure when your risk profile, team size, or compliance requirements justify it. Taon's CLI can also be invoked inside external CI/CD systems; it does not have to replace them.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "16-command-reference",
    "headingTitle": "16. Command Reference",
    "text": "16. Command Reference Responsibility Command Alias / note Pull changes across container projects taon pull:deep Multi-repository synchronization Push changes across container projects taon push:deep Multi-repository synchronization Build first-level container children for development taon build taon b Build first-level container children for production taon build:prod taon bp Execute configured Cloudflare production release taon automatic:release cloudflare:prod taon ar cloudflare:prod Update global CLI npm i -g taon NPM installation Synchronize Taon core containers taon sync Shared dependency environment Create quick Git checkpoint taon push $$$ update $$$ commit Convert latest temporary checkpoints into staged changes taon melt Review before final commit",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "typical-local-release-sequence",
    "headingTitle": "Typical local release sequence",
    "text": "Typical local release sequence npm i -g taon taon sync taon pull:deep taon bp Run the project's relevant tests and validation checks, review and finalize commits, and then release: taon ar cloudflare:prod",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "typical-rapid-development-sequence",
    "headingTitle": "Typical rapid-development sequence",
    "text": "Typical rapid-development sequence taon push taon push taon melt git diff --cached git commit -m \"feat: implement new functionality\" taon push:deep",
    "api": false
  },
  {
    "filePath": "tnp/docs/CI-CD.md",
    "headingId": "conclusion",
    "headingTitle": "Conclusion",
    "text": "Conclusion Taon Cloud CI/CD is coming, but the foundations are useful already. Taon standalone projects and containers can model an entire company's software architecture. Isomorphic app-libraries keep backend and frontend functionality together when that makes sense. Source-first builds remove unnecessary internal NPM publishing. Deep Git commands synchronize multi-repository workspaces. Temporary checkpoint commits make fast-moving development more convenient. Build and release commands coordinate delivery from a local machine. For solo developers and small teams, that can be enough to start shipping without a dedicated CI/CD server. For larger teams and higher-risk systems, the same commands can participate in conventional CI/CD pipelines today and eventually be orchestrated through Taon Cloud. Design the architecture once. Build directly from source. Release locally today. Automate centrally when you're ready.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "taon-cloud",
    "headingTitle": "Taon Cloud",
    "text": "Taon Cloud Taon Cloud is currently under active development. However, its foundation is already available through Taon Service and the Taon Cloud Terminal UI, which you can use today. Every Taon command integrates with the local service, providing a unified environment for managing projects, ports, databases, builds, processes, and deployments. The long-term goal is simple: manage your entire development and deployment infrastructure using the same tools, whether you're working locally or on a remote server.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "taon-service",
    "headingTitle": "Taon Service",
    "text": "Taon Service Taon includes a built-in local service that simplifies project management, port allocation, domain configuration, process monitoring, and deployments. Taon Service is the foundation of Taon Cloud. Both share the same core functionality, with additional capabilities depending on whether Taon runs on your local machine or a remote server.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "how-it-works",
    "headingTitle": "How it works",
    "text": "How it works Whenever you execute a Taon command, the CLI automatically checks whether a healthy Taon Service instance is running. If the service is unavailable, Taon launches a dedicated system terminal with its interactive management interface. The service continues running independently, maintaining information about active projects, allocated ports, databases, builds, and other background processes. This means you don't have to manually start or configure the service before working with your projects.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "taon-cloud-terminal-ui",
    "headingTitle": "Taon Cloud Terminal UI",
    "text": "Taon Cloud Terminal UI The Taon Cloud Terminal UI brings infrastructure management directly into your terminal. It provides a centralized interface for managing local development environments and, eventually, remote servers over SSH. No browser dashboard is required. You can monitor processes, inspect logs, manage deployments, and control your infrastructure without leaving the terminal. The terminal-first approach also makes Taon particularly suitable for remote development, headless servers, and automated environments.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "taon-cloud-web-ui",
    "headingTitle": "Taon Cloud Web UI",
    "text": "Taon Cloud Web UI The planned Taon Cloud Web UI will provide an alternative interface for managing the same infrastructure through a browser. You will be able to install Taon Cloud on any compatible server running Node.js.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "installation",
    "headingTitle": "Installation",
    "text": "Installation Install Taon globally: npm install -g taon Start the cloud service in detached mode: taon cloud:start --detach Once the service is configured, you'll be able to access the Taon Cloud dashboard through your browser. Taon Cloud Web UI — proposed interface, currently under development.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "features-localhost-vs-cloud",
    "headingTitle": "Features — Localhost vs. Cloud",
    "text": "Features — Localhost vs. Cloud Taon is designed around a simple principle: the same management experience should work on your local machine and in the cloud. Most features are shared between both environments. The main differences concern networking, domain configuration, and infrastructure deployment.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "1-enable-or-disable-cloud-infrastructure",
    "headingTitle": "1. Enable or Disable Cloud Infrastructure",
    "text": "1. Enable or Disable Cloud Infrastructure On localhost Enable or disable the local infrastructure required for cloud-style deployments. Enable or disable Docker-based deployments. Start or stop Traefik and related services. Test deployment configurations locally before moving to production. On a cloud server Manage publicly accessible infrastructure, including: Reverse proxy configuration. Domain routing. Automatic SSL certificate provisioning and renewal. Secure HTTPS access to deployed applications.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "2-project-management",
    "headingTitle": "2. Project Management",
    "text": "2. Project Management Discover, register, create, and manage Taon projects from a single interface. Automatically discover existing projects. View, add, and edit registered projects. Create new Taon projects. Organize projects for deployment. Available in both environments: The same project management workflow is intended to work on localhost and remote Taon Cloud instances. Planned: Integration with domain registrars to simplify domain purchasing and assignment when creating new projects.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "3-deployment-management",
    "headingTitle": "3. Deployment Management",
    "text": "3. Deployment Management A centralized place to decide what to deploy, where to deploy it, and how it should run. Configure deployment targets. Deploy individual projects or build artifacts. Deploy multiple projects or artifacts as a group. Manage deployment configurations. Reuse deployment workflows across local and remote environments. Localhost: Prepare, test, and execute deployments using local infrastructure. Cloud: Deploy and manage applications on remote servers using the same workflow.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "4-domain-management",
    "headingTitle": "4. Domain Management",
    "text": "4. Domain Management Manage domains without repeatedly editing configuration files or manually setting up routing rules. On localhost Test domain connectivity using ping. Assign local development domains to projects. Simulate production-style domains using /etc/hosts. Test domain routing before deployment. On a cloud server Manage domains assigned to deployed applications. Configure domain routing through the reverse proxy. Use automatically managed SSL certificates. Planned: Direct integration with domain providers to simplify DNS configuration, domain assignment, and routing.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "5-automatic-port-management",
    "headingTitle": "5. Automatic Port Management",
    "text": "5. Automatic Port Management Stop manually assigning ports to every project. Taon Service manages port allocation automatically, helping prevent conflicts between projects and background services. Automatically assign available ports when starting projects. Reuse the same ports for projects in the same location. Track ports assigned to applications, services, and Docker containers. Reduce the need for manual --port configuration. Available in both environments: Port management follows the same principles on localhost and remote servers.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "6-process-management-and-logs",
    "headingTitle": "6. Process Management and Logs",
    "text": "6. Process Management and Logs Monitor the processes running within your Taon environment. View active processes. Inspect real-time process output. Read existing log files. Monitor application and service activity. Available in both environments: Manage local processes or inspect processes running on connected Taon Cloud instances.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "7-taon-instance-management",
    "headingTitle": "7. Taon Instance Management",
    "text": "7. Taon Instance Management Connect multiple Taon instances to create a unified development and deployment environment. Add and register Taon instances. List available instances. Check instance connectivity and health. Authenticate connections between instances. Connect local and remote Taon installations. The goal: Your local Taon Service can communicate with remote Taon Cloud instances, allowing you to manage distributed infrastructure from a single interface.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "8-deployment-scheduler",
    "headingTitle": "8. Deployment Scheduler",
    "text": "8. Deployment Scheduler Automate deployments without requiring a separate CI/CD platform for every project. Schedule deployments for a specific date and time. Trigger deployments automatically after pushing to a selected Git branch. Configure deployment automation for individual projects. Available in both environments once implemented: The scheduler will use the same configuration model for local and remote deployments.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "9-settings-and-security",
    "headingTitle": "9. Settings and Security",
    "text": "9. Settings and Security Configure how your Taon environment operates and how users access it. Configure administrator authentication. Enable password-based access. Configure two-factor authentication (2FA). Manage service-level settings. Enable optional infrastructure components, such as Portainer. Localhost: Configure your local Taon Service and development infrastructure. Cloud: Secure access to remote management interfaces and deployed services.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "cloudflare-deploy-taon-to-production-today",
    "headingTitle": "Cloudflare — Deploy Taon to Production Today",
    "text": "Cloudflare — Deploy Taon to Production Today You don't have to wait for the full Taon Cloud implementation to deploy Taon applications to production. Taon already supports deployment to Cloudflare Workers, providing a serverless alternative to managing your own infrastructure. Each Taon project includes a predefined cloudflare release task in its taon.jsonc configuration. With a single command, you can build and deploy your application together with its configured Cloudflare infrastructure.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "cloudflare-infrastructure",
    "headingTitle": "Cloudflare Infrastructure",
    "text": "Cloudflare Infrastructure Taon integrates with the following Cloudflare services: Cloudflare Workers — Run your application backend in a serverless environment. Cloudflare D1 — SQL database storage. Cloudflare R2 — Object storage for files and other assets. Cloudflare KV — Distributed key-value storage for application data.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "deploy-with-one-command",
    "headingTitle": "Deploy with One Command",
    "text": "Deploy with One Command taon ar cloudflare Here, ar is an alias for automatic:release. The command executes the project's configured Cloudflare release workflow, building and deploying the application and its associated resources.",
    "api": false
  },
  {
    "filePath": "tnp/docs/CLOUD-SERVICE.md",
    "headingId": "two-deployment-approaches-one-framework",
    "headingTitle": "Two Deployment Approaches, One Framework",
    "text": "Two Deployment Approaches, One Framework Taon is designed to support two complementary deployment models. Taon Cloud — Self-hosted infrastructure Run your applications on your own servers, manage processes and deployments, configure domains, and maintain control over your infrastructure. Ideal for applications requiring dedicated servers, custom runtime environments, or direct infrastructure access. Cloudflare — Serverless infrastructure Deploy Taon applications to Cloudflare Workers without maintaining a traditional Node.js server. Ideal for applications that benefit from managed infrastructure, global distribution, and simplified operations. Both approaches use the same Taon framework and CLI, allowing you to choose the deployment environment that best suits your project. Develop locally. Deploy anywhere. Manage everything with Taon.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "taon-cli-developer-guide",
    "headingTitle": "Taon CLI — Developer Guide",
    "text": "Taon CLI — Developer Guide Taon CLI provides a unified development workflow for creating, building, running, and releasing full-stack applications and libraries. A Taon project can be both an application and a library, with shared TypeScript code across frontend and backend environments.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "1-creating-projects",
    "headingTitle": "1. Creating Projects",
    "text": "1. Creating Projects Use taon new to create standalone projects, containers, and organization-level project structures.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "standalone-project",
    "headingTitle": "Standalone Project",
    "text": "Standalone Project Create a standalone project with a basic CRUD application: taon new my-standalone-project",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "standalone-project-with-admin-backoffice",
    "headingTitle": "Standalone Project with Admin Backoffice",
    "text": "Standalone Project with Admin Backoffice Create a standalone project using the Taon baseline, which includes the full Taon Admin backoffice: taon new my-standalone-project --baseline",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "documentation-project",
    "headingTitle": "Documentation Project",
    "text": "Documentation Project Create a documentation application that collects Markdown files distributed across projects: taon new my-standalone-project --docs",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "container-with-a-child-project",
    "headingTitle": "Container with a Child Project",
    "text": "Container with a Child Project Create a container and a standalone child project inside it: taon new my-projects-container/my-project Resulting structure: my-projects-container/ └── my-project/",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "organization-container",
    "headingTitle": "Organization Container",
    "text": "Organization Container Create a container named my-container-org, mark it as an organization, and create a child project: taon new @my-container-org/my-project Resulting structure: my-container-org/ └── my-project/ Organization containers allow related Taon projects to be managed together.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "2-supported-build-artifacts",
    "headingTitle": "2. Supported Build Artifacts",
    "text": "2. Supported Build Artifacts Taon can produce multiple artifact types from a shared project architecture. Artifact Entry point NPM library ./src/lib/index.ts CLI tool ./src/cli.ts Angular / Node.js application ./src/app.ts Electron desktop application ./src/app.electron.ts VS Code extension ./src/app.vscode.ts Mobile application (planned) ./src/app.mobile.ts Documentation (MkDocs, Storybook, Compodoc) Markdown and Storybook files Documentation sources include files matching **/*.md and **/*.story.ts. A single Taon project may contain multiple entry points, allowing it to serve as both a reusable library and an application.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "3-building-projects",
    "headingTitle": "3. Building Projects",
    "text": "3. Building Projects Taon provides a consistent set of commands for development, production, and watch builds.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "development-build",
    "headingTitle": "Development Build",
    "text": "Development Build taon build Alias: taon b Builds the NPM library and application source code, including Angular-compatible code. The build process updates the corresponding bundled output used by dependent projects.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "clean-development-build",
    "headingTitle": "Clean Development Build",
    "text": "Clean Development Build taon clear:build Alias: taon cb Removes temporary and distribution build output before rebuilding the project. Useful when generated files or cached build artifacts become inconsistent.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "production-build",
    "headingTitle": "Production Build",
    "text": "Production Build taon build:prod Alias: taon bp Performs a clean production-oriented build (same as in release). This may take longer than a development build because production optimizations and additional processing are applied.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "watch-build",
    "headingTitle": "Watch Build",
    "text": "Watch Build taon build:watch Alias: taon bw Watches project source files and rebuilds the library when changes are detected. This is useful when developing an application and its reusable library functionality simultaneously.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "docs-extract",
    "headingTitle": "Docs extract",
    "text": "Docs extract Extract docs of projects from genTsDocsInclude:[ ] property inside taon.jsonc. Taon will automatically find project if it is linked inside package (source is a symlink to real project location after taon build) node_modules/my-porject/source To Generate documentation Angular components (inside src/lib/generated-docs-from-md-files) taon docs Alias: taon d Watches and rebuilds library code without running the complete application build workflow. This is particularly useful for Electron and VS Code extension development.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "4-running-applications",
    "headingTitle": "4. Running Applications",
    "text": "4. Running Applications Taon provides commands for running applications in different development environments. The interactive application menu is available through: taon app",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "application-commands",
    "headingTitle": "Application Commands",
    "text": "Application Commands Command Alias Purpose taon app:normal taon an Run Angular development server with Node.js backend taon app:cloudflare taon ac Run application with local Cloudflare backend development taon app:websql taon aw Run application in browser-based WebSQL mode taon app:electron taon ae Run Electron desktop application",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "normal-web-application",
    "headingTitle": "Normal Web Application",
    "text": "Normal Web Application taon an Starts the application development environment using Angular and the Node.js backend.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "cloudflare-development",
    "headingTitle": "Cloudflare Development",
    "text": "Cloudflare Development taon ac Starts the Angular development environment configured for local Cloudflare backend development.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "websql-development",
    "headingTitle": "WebSQL Development",
    "text": "WebSQL Development taon aw Starts the Angular application in WebSQL mode. In this mode, compatible backend and database functionality runs directly in the browser without requiring a separately running Node.js backend.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "electron-development",
    "headingTitle": "Electron Development",
    "text": "Electron Development taon ae Starts the Electron application development workflow.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "5-recommended-development-workflows",
    "headingTitle": "5. Recommended Development Workflows",
    "text": "5. Recommended Development Workflows For workflows involving both an application and a reusable library, build the library before starting the application.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "scenario-1-web-application-and-npm-library",
    "headingTitle": "Scenario 1: Web Application and NPM Library",
    "text": "Scenario 1: Web Application and NPM Library Use two terminals. Terminal 1 — Start the library watch build taon bw Wait for the initial library build to complete. Terminal 2 — Start the web application taon an This allows you to develop library functionality and the web application together.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "scenario-2-electron-application-and-npm-library",
    "headingTitle": "Scenario 2: Electron Application and NPM Library",
    "text": "Scenario 2: Electron Application and NPM Library Use two terminals. Terminal 1 — Start the library-only watch build taon bwl Wait for the initial library build to complete. Terminal 2 — Start Electron taon ae This workflow allows library changes to be rebuilt while developing the Electron application.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "scenario-3-vs-code-extension-and-npm-library",
    "headingTitle": "Scenario 3: VS Code Extension and NPM Library",
    "text": "Scenario 3: VS Code Extension and NPM Library Terminal 1 — Start the library-only watch build taon bwl Wait for the initial library build to complete. Then start the VS Code debugger using the project's launch configuration. Each debugger start recreates the extension's menu options.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "6-releasing-projects",
    "headingTitle": "6. Releasing Projects",
    "text": "6. Releasing Projects Taon provides both interactive and automated release workflows.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "interactive-release-menu",
    "headingTitle": "Interactive Release Menu",
    "text": "Interactive Release Menu taon release Alias: taon r Opens the terminal interface for selecting a release operation.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "automated-releases",
    "headingTitle": "Automated Releases",
    "text": "Automated Releases taon auto:release Runs the configured automatic release workflow. Release tasks are defined in taon.jsonc using autoReleaseConfigAllowedItems. To execute a specific task: taon ar task-name-from-taon-jsonc",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "npm-release",
    "headingTitle": "NPM Release",
    "text": "NPM Release The default automated release configuration includes an NPM release task. taon ar npm This works with standalone projects and container organizations.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "cloudflare-production-release",
    "headingTitle": "Cloudflare Production Release",
    "text": "Cloudflare Production Release For projects configured for Cloudflare deployment: taon ar cloudflare:prod Taon executes the corresponding configured release task.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "7-linking-projects-and-cli-tools",
    "headingTitle": "7. Linking Projects and CLI Tools",
    "text": "7. Linking Projects and CLI Tools Taon provides linking commands similar to npm link, allowing locally developed CLI tools and libraries to be used without publishing them first.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "interactive-linking",
    "headingTitle": "Interactive Linking",
    "text": "Interactive Linking taon link Opens the linking workflow.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "local-linking",
    "headingTitle": "Local Linking",
    "text": "Local Linking taon link:local Links the CLI created in the current repository.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "global-development-linking",
    "headingTitle": "Global Development Linking",
    "text": "Global Development Linking taon link:global Creates a global NPM link for the current project in development mode. Useful when testing changes to a CLI tool directly from its source repository.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "release-branch-linking",
    "headingTitle": "Release Branch Linking",
    "text": "Release Branch Linking taon link:release Links the CLI built from a separate release branch. This can be useful when testing a released version without replacing the active development version.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "8-branding-and-pwa-assets",
    "headingTitle": "8. Branding and PWA Assets",
    "text": "8. Branding and PWA Assets Taon can generate branding assets from a project's logo.png. taon branding This recreates assets such as favicons and Progressive Web App icons. It helps keep branding consistent across supported application targets.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "9-automated-code-refactoring",
    "headingTitle": "9. Automated Code Refactoring",
    "text": "9. Automated Code Refactoring Taon provides a project-wide refactoring command. taon refactor The command processes project files to: Apply Prettier formatting. Apply ESLint fixes. Organize imports into regions. This helps maintain consistent code formatting across projects and reduces repetitive maintenance work.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "10-cloudflare-subprojects",
    "headingTitle": "10. Cloudflare Subprojects",
    "text": "10. Cloudflare Subprojects Taon supports managing Cloudflare Worker subprojects. These can be used to extend a Taon application with additional Cloudflare-specific functionality.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "add-a-subproject",
    "headingTitle": "Add a Subproject",
    "text": "Add a Subproject taon sub add Creates a subproject inside the project's sub-projects directory.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "example-structure",
    "headingTitle": "Example Structure",
    "text": "Example Structure my-taon-project/ │ ├── src/ │ ├── sub-projects/ │ └── custom-workers/ │ └── my-worker/ │ └── taon.jsonc",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "remove-a-subproject",
    "headingTitle": "Remove a Subproject",
    "text": "Remove a Subproject To remove a subproject, delete its directory. For example: rimraf ./sub-projects/custom-workers/my-worker",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "deploy-subprojects-manually",
    "headingTitle": "Deploy Subprojects Manually",
    "text": "Deploy Subprojects Manually taon sub deploy Deploys the configured Cloudflare subproject. Manual deployment is usually unnecessary because the main Taon release workflow can handle deployment.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "local-cloudflare-worker-development",
    "headingTitle": "Local Cloudflare Worker Development",
    "text": "Local Cloudflare Worker Development taon sub dev Starts the local development environment for Cloudflare subprojects. When developing an Angular application connected to a local Cloudflare Worker, start the Worker development environment first. Then start the Angular application in a separate terminal: taon ac This allows the Angular application to communicate with the locally running Cloudflare backend.",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "11-quick-command-reference",
    "headingTitle": "11. Quick Command Reference",
    "text": "11. Quick Command Reference Category Command Alias New project taon new — Development build taon build taon b Clean build taon clear:build taon cb Production build taon build:prod taon bp Watch build taon build:watch taon bw Library watch taon build:watch:lib taon bwl Application menu taon app — Web application taon app:normal taon an Cloudflare application taon app:cloudflare taon ac WebSQL application taon app:websql taon aw Electron application taon app:electron taon ae Release menu taon release taon r Automated release taon auto:release taon ar Project linking taon link — Global development link taon link:global — Branding taon branding — Code refactoring taon refactor — Add Cloudflare subproject taon sub add — Deploy Cloudflare subproject taon sub deploy — Local Cloudflare Worker taon sub dev —",
    "api": false
  },
  {
    "filePath": "tnp/docs/COMMANDS.md",
    "headingId": "summary",
    "headingTitle": "Summary",
    "text": "Summary Taon CLI provides a consistent workflow for managing the entire development lifecycle: Create → Build → Develop → Test → Release Its app-library architecture allows projects to combine reusable libraries, backend functionality, frontend applications, and multiple deployment targets. Developers can work with a single project or coordinate entire containers of interconnected applications without manually maintaining separate build and release systems for each project.",
    "api": false
  },
  {
    "filePath": "tnp/docs/EXAMPLES.md",
    "headingId": "1-no-separation-between-backend-and-frontend-code",
    "headingTitle": "1. No separation between backend and frontend code",
    "text": "1. No separation between backend and frontend code Use backend entities as frontend DTOs! This is a dream situation for many developers! A perfect solution for all types of projects (hobbyists, freelancers, enterprises). CRAZY FAST business changes across database tables and frontend Angular templates — CHECK! Frontend, backend, and database code refactored simultaneously! user.entity.ts import { Taon, TaonEntity, TaonBaseEntity } from 'taon/src'; @TaonEntity() class User extends TaonBaseEntity { //#region @backend @Taon.Orm.Column.Generated() //#endregion id: string; } your browser will get code below: import { Taon, TaonBaseEntity, TaonEntity } from 'taon/browser'; @TaonEntity() class User extends TaonBaseEntity { /* */ /* */ /* */ id: string; } ..same thing applies in reverse to browser code common.service.ts import { Taon, TaonBaseAngularService } from 'taon/src'; import { Injectable } from '@angular/core'; // @browser //@region @browser @Injectable() //#endregion class CommonService extends TaonBaseAngularService { helloWorld() { console.log('Hello on backend and frontend') } } your backend will get code below: import { Taon } from 'taon'; /* */ /* */ /* */ /* */ /* */ /* */ class CommonService { helloWorld() { console.log('Hello on backend and frontend') } }",
    "api": false
  },
  {
    "filePath": "tnp/docs/EXAMPLES.md",
    "headingId": "2-websql-mode-for-writing-backend-in-browser",
    "headingTitle": "2. Websql Mode for writing backend in browser!",
    "text": "2. Websql Mode for writing backend in browser! Instead of running a local server, run everything (db, backend) in the browser thanks to sql.js/typeorm! This is possible ONLY in Taon, with the highest possible abstraction concepts. user.entity.ts import { Taon, TaonEntity, PrimarGeneratedColumn } from 'taon/src'; @TaonEntity() class User { //#region @websql @PrimarGeneratedColumn() //#endregion id: string; } your browser in WEBSQL mode will get code below: import { Taon, TaonEntity } from 'taon/websql'; @TaonEntity() class User { //#region @websql @PrimarGeneratedColumn() //#endregion id: string; } your browser in NORMAL NodeJS mode will get code below: import { Taon, TaonEntity } from 'taon/websql'; @TaonEntity() class User { /* */ /* */ /* */ id: string; } Database columns can be created in browser/frontend with sql.js !",
    "api": false
  },
  {
    "filePath": "tnp/docs/EXAMPLES.md",
    "headingId": "3-create-be-fe-crud-rest-api-in-a-blink-of-the-eye",
    "headingTitle": "3. Create BE/FE CRUD REST API in a blink of the eye...",
    "text": "3. Create BE/FE CRUD REST API in a blink of the eye... Define the host only once for both backend and frontend! No more ugly access to the server... Taon takes it to the next level! In an Angular/RxJS environment, it’s more than the perfect solution! user.controller.ts @TaonController({ className: 'UserController' }) class UserController extends TaonBaseCrudController<User> { entityClassResolveFn = ()=> User; //#region @websql async initExampleDbData(): Promise<void> { const superAdmin = new User(); superAdmin.name = 'super-admin'; await this.db.save(superAdmin); } //#endregion } user-api.service.ts @Injectable() export class UserApiService extends TaonBaseAngularService { userController = this.inject(UserController); getAll() { return this.userController .getAll() .received.observable.pipe(map(data => data.body.json)); } } user.component.ts @Component({ selector: 'app-user', template: ` All users: {{ users$| async | json }} ` }) export class UserComponent implements OnInit { userApiService = inject(UserApiService); users$ = this.userApiService.getAll() } app.context.ts import { TaonBaseContext, Taon } from 'taon/src'; const host = 'http://localhost:4444'; // host defined once! const UserContext = await Taon.createContext(()=> { host, contextName: 'UserContext', contexts: { TaonBaseContext }, controllers: { UserController }, entities: { User }, database: true, }); // initialize on backend and frontend async function start() { await UserContext.initialize(): }",
    "api": false
  },
  {
    "filePath": "tnp/docs/EXAMPLES.md",
    "headingId": "4-super-easy-realtime-sockets-communication",
    "headingTitle": "4. Super easy realtime / sockets communication",
    "text": "4. Super easy realtime / sockets communication Real-time communication as simple as possible! React to entity changes (or custom events) more easily than ever before! app.ts (imports) import { Taon, TaonBaseContext } from 'taon/src'; import { Observable, Subject, debounce, debounceTime, map, of, scan, } from 'rxjs'; import { CLIENT_DEV_NORMAL_APP_PORT, CLIENT_DEV_WEBSQL_APP_PORT, HOST_BACKEND_PORT, } from './app.hosts'; import { Helpers } from 'tnp-core/src'; import { _ } from 'tnp-core/src'; import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'; //#region @browser import { Component, inject, Injectable } from '@angular/core'; import { CommonModule } from '@angular/common'; //#endregion app.ts (constants) const host = 'http://localhost:' + HOST_BACKEND_PORT; const frontendHost = 'http://localhost:' + (Helpers.isWebSQL ? CLIENT_DEV_WEBSQL_APP_PORT : CLIENT_DEV_NORMAL_APP_PORT); const saveNewUserEventKey = 'saveNewUserEventKey'; app.ts (angular component + module) //#region @browser @Component({ template: `hello from realtime subscribers<br /> <br /> <button (click)=\"saveNewUser()\">save new user</button> <br />`, standalone: false, }) @UntilDestroy() export class RealtimeClassSubscriberComponent { $destroy = new Subject(); readonly messages$: Observable<string[]> = of([]); saveNewUser() { UserContext.realtime.client.triggerCustomEvent( saveNewUserEventKey, ); } ngOnInit(): void { console.log('realtime client subscribers start listening!'); UserContext.realtime.client .listenChangesEntityTable(UserEntity) .pipe(untilDestroyed(this), debounceTime(1000)) .subscribe(message => { console.log('realtime message from class subscriber ', message); }); } } //#endregion //#region @browser @NgModule({ exports: [RealtimeClassSubscriberComponent], imports: [CommonModule], declarations: [RealtimeClassSubscriberModule], }) export class SingleFileModule {} //#endregion app.ts (user entity) @TaonEntity({ className: 'UserEntity', }) export class UserEntity extends TaonBaseEntity { //#region @websql @PrimarGeneratedColumn() //#endregion id: number; //#region @websql @StringColumn() //#endregion name: string; } app.ts (user subscriber) @TaonSubscriber({ className: 'RealtimeClassSubscriber', }) export class RealtimeClassSubscriber extends Taon.Base.SubscriberForEntity { listenTo() { return UserEntity; } afterInsert(entity: any) { console.log(`AFTER INSERT: `, entity); UserContext.realtime.server.triggerEntityTableChanges(UserEntity); } } app.ts (user controller) @TaonController({ className: 'RealtimeUserController', }) export class RealtimeUserController extends TaonBaseCrudController<UserEntity> { entityClassResolveFn = () => UserEntity; realtimeClassSubscriber = this.inject(RealtimeClassSubscriber); async initExampleDbData() { //#region @websql await this.saveNewUser(); //#endregion } async saveNewUser() { //#region @websqlFunc const counterUser = await this.db.count(); await this.db.save( _.merge(new UserEntity(), { name: 'user' + (counterUser + 1) }), ); Helpers.info(`new user${counterUser + 1} saved.`); //#endregion } } app.ts (user context + start function) var UserContext = Taon.createContext(() => ({ host, frontendHost, contextName: 'UserContext', contexts: { TaonBaseContext }, controllers: { RealtimeUserController }, subscribers: { RealtimeClassSubscriber }, entities: { RealtimeUserEntity: UserEntity }, database: true, logs: { realtime: true, // db: true, // framework: true, }, })); async function start() { const userContext = await UserContext.initialize(); const realtimeUserController = userContext.getClassInstance(RealtimeUserController); //#region @websql UserContext.realtime.server .listenChangesCustomEvent(saveNewUserEventKey) .subscribe(async () => { console.log('save new user event'); await realtimeUserController.saveNewUser(); }); //#endregion } export default start;",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "let-ai-agents-build-your-full-stack-applications",
    "headingTitle": "Let AI Agents Build Your Full-Stack Applications",
    "text": "Let AI Agents Build Your Full-Stack Applications",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "one-language-one-architecture-unlimited-possibilities",
    "headingTitle": "One language. One architecture. Unlimited possibilities.",
    "text": "One language. One architecture. Unlimited possibilities. Modern AI coding agents can generate enormous amounts of code. But generating code is only part of software development. Agents still need to understand project structures, configure build tools, manage dependencies, synchronize frontend and backend interfaces, run tests, and prepare deployments. Taon is designed to reduce that complexity. Instead of making AI agents repeatedly solve infrastructure problems, Taon provides a consistent, strongly typed, isomorphic development environment. You define the architecture. AI agents implement functionality. Taon handles much of the repetitive development infrastructure.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "1-one-language-for-frontend-backend-and-database",
    "headingTitle": "1. One Language for Frontend, Backend, and Database",
    "text": "1. One Language for Frontend, Backend, and Database TypeScript everywhere. 🚀 Use one language across Angular applications, Node.js services, database entities, shared models, and business logic. Developers and AI agents can work across the entire stack without constantly switching programming languages or translating models between incompatible systems.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "2-rock-solid-frameworks-as-the-foundation",
    "headingTitle": "2. Rock-Solid Frameworks as the Foundation",
    "text": "2. Rock-Solid Frameworks as the Foundation Built on proven technologies. ⭐ Taon combines TypeScript, Angular, Node.js, RxJS, NgRx, TypeORM, and Express.js into a unified development experience. Rather than inventing replacements for established technologies, Taon brings them together under a consistent architecture. AI agents can use their existing knowledge of these widely adopted frameworks.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "3-never-repeat-code-unnecessarily",
    "headingTitle": "3. Never Repeat Code Unnecessarily",
    "text": "3. Never Repeat Code Unnecessarily Write once. Reuse across environments. ✅ Taon's isomorphic architecture allows compatible functionality to be shared between frontend, backend, and libraries. Shared models, validation rules, and business logic don't need to be independently recreated for each runtime. The goal is to eliminate unnecessary duplication while keeping environment-specific implementations where they belong.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "4-strongly-typed-frontend-backend-and-database",
    "headingTitle": "4. Strongly Typed Frontend, Backend, and Database",
    "text": "4. Strongly Typed Frontend, Backend, and Database Refactor across the stack with confidence. ✍️ Imagine changing a property in a database entity and having TypeScript immediately identify the affected controllers, services, Angular components, and templates. With shared types and proper tooling, a single refactoring can propagate through the entire application. For AI coding agents, this is especially valuable: the compiler becomes an additional feedback mechanism for detecting incomplete changes.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "5-automatically-generated-configuration",
    "headingTitle": "5. Automatically Generated Configuration",
    "text": "5. Automatically Generated Configuration Less setup. More development. ✏️ Taon manages and regenerates essential framework configuration files. Developers and agents can focus on application functionality instead of repeatedly configuring build systems, development servers, and tooling.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "6-developer-friendly-visual-studio-code-workflow",
    "headingTitle": "6. Developer-Friendly Visual Studio Code Workflow",
    "text": "6. Developer-Friendly Visual Studio Code Workflow Your editor becomes your development command center. 👨‍💻 Taon is designed for a productive Visual Studio Code workflow, including debugging, building, testing, and running applications. AI coding agents can operate within the same project structure and development tools used by human developers.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "7-stable-shared-npm-dependencies",
    "headingTitle": "7. Stable, Shared NPM Dependencies",
    "text": "7. Stable, Shared NPM Dependencies One dependency foundation. Many projects. 🐳 Taon uses shared core containers located under: ~/.taon/taon/projects/container-* Instead of maintaining a complete independent node_modules installation for every project, Taon can link projects to centrally managed dependencies. This can reduce disk usage, accelerate project setup, and simplify dependency maintenance. Centralized dependencies also make updates and security patch management easier, although dependency vulnerabilities still require monitoring and updates.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "8-simplified-project-releases",
    "headingTitle": "8. Simplified Project Releases",
    "text": "8. Simplified Project Releases Complex release workflows. Simple commands. ⚡ Taon supports standalone projects, organizational containers, and multiple release strategies. For example: taon ar cloudflare:prod A single command can execute a configured production release workflow. Future Taon Cloud integration will extend this approach with centralized orchestration.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "9-develop-applications-and-libraries-together",
    "headingTitle": "9. Develop Applications and Libraries Together",
    "text": "9. Develop Applications and Libraries Together Every project can be an app-library. 🌟 A Taon project doesn't have to be exclusively an application or a library. It can provide reusable functionality while also containing an application for developing, testing, and demonstrating that functionality. This is especially useful for AI agents working on independent features or shared components.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "10-backend-and-angular-libraries-together",
    "headingTitle": "10. Backend and Angular Libraries Together",
    "text": "10. Backend and Angular Libraries Together Full-stack packages without artificial separation. 🤝 Taon supports project structures combining Node.js functionality with Angular-compatible libraries. Backend controllers, shared models, and Angular components can coexist within the same project architecture. A project might be 90% backend, 90% frontend, or anything in between. Separate projects by responsibility, not automatically by runtime.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "11-shared-assets-inside-packages",
    "headingTitle": "11. Shared Assets Inside Packages",
    "text": "11. Shared Assets Inside Packages Reuse more than TypeScript code. 💾 Taon supports shared package assets through: src/assets/shared/ Images and other shared resources can be distributed alongside reusable functionality.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "12-websql-run-backend-functionality-in-the-browser",
    "headingTitle": "12. WebSQL — Run Backend Functionality in the Browser",
    "text": "12. WebSQL — Run Backend Functionality in the Browser Why require a separate backend server when the browser can run the application? 🌐 Taon's WebSQL development mode allows compatible backend and database functionality to execute inside the browser. Using technologies such as TypeORM and SQL.js, applications can work with SQL databases in a browser environment, with persistence through browser storage. This creates interesting opportunities for: Serverless application demonstrations. Local development without a separate backend process. Browser-based integration and end-to-end testing. Portable, self-contained development environments. For AI agents, this can significantly simplify the environment needed to run and test full-stack application behavior.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "13-ci-cd-without-unnecessary-infrastructure",
    "headingTitle": "13. CI/CD Without Unnecessary Infrastructure",
    "text": "13. CI/CD Without Unnecessary Infrastructure Start locally. Automate progressively. ⚡ Taon already provides commands for coordinating repositories, building projects, and executing releases. taon pull:deep taon bp cd entrypoint-project taon ar cloudflare:prod You can begin with a static WebSQL application hosted on GitHub Pages or a similar platform. When your requirements grow, you can move to a full-stack deployment strategy such as Cloudflare. Taon Cloud is planned to provide centralized CI/CD orchestration, but you don't need to wait for it to start building and releasing applications.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "14-a-development-process-designed-for-humans-and-ai-agents",
    "headingTitle": "14. A Development Process Designed for Humans and AI Agents",
    "text": "14. A Development Process Designed for Humans and AI Agents Infrastructure should support developers, not dominate their work. 🧠 Taon aims to minimize repetitive DevOps configuration through consistent project structures, generated configuration, shared dependencies, and CLI automation. Human developers remain responsible for architecture, security, quality, and release decisions. AI agents can focus on implementation, testing, refactoring, and maintenance within those boundaries.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "15-let-ai-agents-build-let-taon-keep-everything-together",
    "headingTitle": "15. Let AI Agents Build — Let Taon Keep Everything Together",
    "text": "15. Let AI Agents Build — Let Taon Keep Everything Together The real opportunity isn't simply generating more code. It's enabling multiple AI agents to contribute to a coherent software architecture. SOFTWARE ARCHITECT │ TAON CONTAINER │ ┌─────────────────┼─────────────────┐ │ │ │ AI AGENT A AI AGENT B AI AGENT C │ │ │ Backend-heavy Frontend-heavy Shared Library App-Lib App-Lib App-Lib │ │ │ └─────────────────┼─────────────────┘ │ SHARED TYPES SHARED SOURCE │ TAON BUILD │ TEST & VALIDATE │ TAON RELEASE │ PRODUCTION Each agent can work on a different project or feature. Taon's containers provide a common workspace, source-first builds allow projects to be integrated without intermediate NPM releases, and TypeScript helps detect incompatible changes. The developer controls the architecture and reviews the results. AI agents write the code. Taon provides the structure to build, integrate, test, and release it.",
    "api": false
  },
  {
    "filePath": "tnp/docs/PHILOSOPHY.md",
    "headingId": "the-philosophy",
    "headingTitle": "The Philosophy",
    "text": "The Philosophy Don't make developers and AI agents spend their time rebuilding the same infrastructure. Give them a predictable architecture, powerful existing frameworks, shared source code, and simple commands. Build the architecture once. Let humans and AI agents develop it together. Deploy wherever your application needs to run.",
    "api": false
  },
  {
    "filePath": "tnp/docs/RELEASE-CLOUD.md",
    "headingId": "cloud-release",
    "headingTitle": "Cloud Release",
    "text": "Cloud Release 🚀 Trigger release on remote (or localhost) Taon Cloud instance 🚀 Cloud Release actually uses Manual Release with config on remote (or localhost) Taon Cloud Artifact name Cloud npm lib and cli tool(cloud) ⌛ - trigger remote npm lib/cli publish ⌛ - trigger remote npm libraries chain publish angular node app(cloud) ⌛ - trigger remote build based on config ⌛ - release is bumping versions and deploying to servers ⌛ - release and deployment is a same thing here vscode plugin(cloud) ⌛ - trigger remote build/publish to azure ⌛ - trigger remote build/publish to special assets server electron app(cloud) ⌛ - trigger remote build/publish/deploy to application stores mobile app(cloud) ⌛ - trigger remote build/publish/deploy to application stores docs webapp(cloud) ⌛ - trigger remote build/publish/deploy to remote server website assets",
    "api": false
  },
  {
    "filePath": "tnp/docs/RELEASE-LOCAL.md",
    "headingId": "local-repo-release",
    "headingTitle": "Local/Repo Release",
    "text": "Local/Repo Release 🚀 All released artifacts stored inside project repository 🚀 Perfect if you are starting project alone and you need to somehow show your work/progress Artifact name Local/Repo npm lib and cli tool(local/repo) ✅ - release lib and cli into: repo-folder/local_release/npm-lib-and-cli-tool/project-name angular node app(local/repo) ⌛ - release docker images (dockers backend, frontend, routers etc.) to repo-folder/local_release/angular-node-app/project-name vscode plugin(local/repo) ✅ - release *.vsix plugin file into: repo-folder/local_release/vscode-plugin/project-name electron app(local/repo) ✅ - release app installer (or executable) into: repo-folder/local_release/electron-app/(win/mac/linux)/project-name mobile app(local/repo) ⌛ - release .apk, .ipa app into: repo-folder/local_release/mobile-app/(win/mac/linux)/project-name docs webapp(local/repo) ⌛ - release docs webapp into: repo-folder/local_release/docs-webapp/(win/mac/linux)/project-name",
    "api": false
  },
  {
    "filePath": "tnp/docs/RELEASE-MANUAL.md",
    "headingId": "manual-release",
    "headingTitle": "Manual Release",
    "text": "Manual Release 🚀 Purpose: release artifacts using cli on development machine 🚀 Purpose: A convenient way to check if the Cloud Release will work. 🚀 This release creates a config that is used later in the Cloud Release. Artifact name Manual npm lib and cli tool(manual) ✅ - publish as normal package (project name as npm name) ✅ - publish as organization package ⌛ - handle public/private npm (login if needed), use .npmrc ⌛ - build option: publish only cli without lib code ⌛ - build option: minify/obscure library code file by file ⌛ - build option: (single one file) minify/obscure whole library/cli angular node app(manual) ✅ - build docker with router for NodeJs backend and Angular frontend ✅ - docker can be use with any docker management system ✅ - taon cloud handle start/stop/update/deployment of dockers/apps ✅ - release docs webapp to github_pages special branch: vscode plugin(manual) ⌛ - publish to azure when azure cloud cli available ⌛ - publish special website assets as new release electron app(manual) ⌛ - publish to store (ms store, mac app store, snap, flatpak) ⌛ - publish special website assets as new release mobile app(manual) ⌛ - publish to app store (play, app store, app gallery) ⌛ - publish special website assets as new release docs webapp(manual) ⌛ - publish special website assets documentation as new release ⌛ - release docs webapp to github_pages special branch:",
    "api": false
  },
  {
    "filePath": "tnp/docs/RELEASE-STATIC-PAGES.md",
    "headingId": "static-pages-release",
    "headingTitle": "Static Pages Release",
    "text": "Static Pages Release Take advantage of github pages (or similar solution) in a best possible way. 🚀 Purpose: release any compiled/bundled artifact to static pages (free Github Pages) 🚀 Purpose: A convenient way to store artifacts with with versions 🚀 Perfect for storing open source apps/libs/docs Artifact name Static Pages npm lib and cli tool(static-pages) ⌛ - publish zipped (also with source code) library/cli to static_pages_branch/assets/npm-lib-and-cli-tool/version-X-X-X ⌛ - additionally bundled script for cli installation angular node app(static-pages) ✅ - publish angular app with WEBSQL backend to static_pages_branch vscode plugin(static-pages) ⌛ - publish zipped (also with source code) vscode plugin to static_pages_branch/assets/vscode-plugin/version-X-X-X/ electron app(static-pages) ⌛ - publish zipped (also with source code) electron app installer to static_pages_branch/assets/electron-app/version-X-X-X mobile app(static-pages) ⌛ - publish zipped (also with source code) mobile app installer to static_pages_branch/assets/mobile-app/version-X-X-X docs webapp(static-pages) ✅ - publish documentation to static_pages_branch/documentation",
    "api": false
  },
  {
    "filePath": "tnp/docs/ROADMAP.md",
    "headingId": "taon-roadmap",
    "headingTitle": "Taon Roadmap",
    "text": "Taon Roadmap Track each roadmap item across Taon's deployment targets. Status legend ✅ Done 🚧 In progress 📅 Planned The row below shows example statuses. Node.js Cloudflare Browser WebSQL Electron Capacitor Simple Curd App taon new m-app ✅ ✅ ✅ ✅ ✅ 📅 Testbench ✅ ✅ ✅ 🚧 🚧 📅 Session taon new m-app --session ✅ ✅ ✅ 🚧 🚧 📅 CMS taon new m-app --cms ✅ ✅ ✅ 🚧 🚧 📅 E-Commerce ✅ ✅ ✅ 🚧 📅 📅 SEO ✅ ✅ ✅ 🚧 📅 📅 Analytics ✅ ✅ ✅ 🚧 📅 📅 Marketing ✅ ✅ ✅ 🚧 📅 📅 Baseline taon new m-app --baseline ✅ ✅ ✅ 🚧 📅 📅 ENV/Secret variables ✅ ✅ ✅ ✅ 🚧 📅 Unit Tests (.test,.spec) ✅ ✅ 🚧 🚧 X 📅 E2E Tests (.e2e) 🚧 🚧 🚧 🚧 X 📅",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "taon-vs-other-frameworks-clis-and-platforms",
    "headingTitle": "Taon vs. Other Frameworks, CLIs, and Platforms",
    "text": "Taon vs. Other Frameworks, CLIs, and Platforms Taon is a TypeScript framework and CLI for building applications with Angular frontends and REST APIs. Its isomorphic build model lets browser and backend code live in the same TypeScript file. The build produces target-specific versions of that file, so backend-only code can be excluded from browser output. Taon also offers composable admin modules for content, commerce, and other application features. The comparisons below cover three decisions: how to build your application, how to organize and package your projects, and how much of a website or store you want to assemble yourself.",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "taon-vs-nestjs",
    "headingTitle": "Taon vs. NestJS",
    "text": "Taon vs. NestJS NestJS gives teams a structured Node.js backend with modules, providers, and decorator-based controllers. Taon centers its architecture on contexts, generated REST APIs, and code shared across browser and backend targets. Area NestJS Taon API design Supports REST and GraphQL. Decorators define controller routes and handlers. Focuses on REST. Taon derives routes and generates client calls from context and controller definitions. Browser and backend builds A NestJS application runs on the server. A separate frontend build can consume shared packages. The build can produce browser and backend versions of the same TypeScript source file. Dependency injection Providers are singleton-scoped by default. Request and transient scopes are available. Taon-managed classes are singletons within their context. Composition and inheritance Modules expose providers, and injection tokens identify dependencies. Route paths are configured through decorators. Contexts, controllers, and repositories can be extended. Context and class names participate in route generation and class replacement during context inheritance. Database integration The application selects its database and integration library. Taon provides database workflows for its supported targets, including SQL.js-based browser development. Choose NestJS when the backend is a separate application and you want its module and provider model. Choose Taon when context inheritance, generated REST calls, and a shared browser/backend source model are central to the application.",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "taon-vs-express",
    "headingTitle": "Taon vs. Express",
    "text": "Taon vs. Express Express provides routing and middleware for Node.js. Taon adds conventions for defining REST APIs in classes and generating the browser calls that consume them. Area Express Taon Route definition Register handler functions on an application or router. Define endpoints as decorated controller methods inside a context. Reuse Compose routers, middleware, and handler functions. Compose contexts and extend controllers and repositories. REST client calls The application supplies its own client or adds client generation. Taon generates REST client calls from controller definitions. Middleware Middleware runs in the Node.js application. Taon supports isomorphic middleware for its browser and backend workflows. Browser execution Express runs on Node.js. Taon's WebSQL mode can run the backend in the browser. Choose Express when you want direct control over routing and middleware with few framework conventions. Choose Taon when you want the framework to connect controller methods, generated client calls, and browser-based backend development.",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "taon-cli-vs-angular-cli",
    "headingTitle": "Taon CLI vs. Angular CLI",
    "text": "Taon CLI vs. Angular CLI Angular CLI manages Angular workspaces, applications, and libraries. Taon CLI manages Taon projects and their build targets, including projects with Angular frontends. Area Angular CLI Taon CLI Project structure An Angular workspace can contain multiple applications and libraries. Taon projects can be organized under a container, with individual projects also usable as libraries. Dependency management The workspace uses its package manager and dependency configuration. Taon containers provide a shared package baseline for projects in the container. Library assets and styles Angular libraries can package assets and Sass entry points through library packaging configuration. Taon provides project conventions for sharing assets and SCSS entry points such as index.scss. Build scope Builds Angular applications and libraries. Builds Taon projects for their configured application and library targets. Choose Angular CLI for a conventional Angular workspace. Choose Taon CLI when your Angular frontend is part of a Taon application or when several Taon projects need a shared package baseline and build conventions.",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "taon-vs-next-js",
    "headingTitle": "Taon vs. Next.js",
    "text": "Taon vs. Next.js Next.js and Taon both support full-stack TypeScript development. They organize the browser/server boundary differently. Area Next.js Taon UI framework React Angular Browser/server boundary Uses React Server and Client Components, route handlers, and framework conventions to define where code runs. Uses target-specific code splitting to produce browser and backend versions of the same source file. Application APIs Route handlers expose HTTP endpoints. Server Components can access server-side data directly. Contexts and decorated controllers define REST endpoints, with generated client calls for consumers. Choose Next.js when you want a React application built around its routing and rendering model. Choose Taon when you want Angular, context-based REST APIs, and Taon's approach to sharing TypeScript source across targets.",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "taon-vs-wordpress-and-prestashop",
    "headingTitle": "Taon vs. WordPress and PrestaShop",
    "text": "Taon vs. WordPress and PrestaShop WordPress starts with a content management system. WooCommerce adds store features as a separate plugin. PrestaShop starts with a store application and includes tools for managing content pages. Taon starts with a framework, CLI, and modules that developers assemble into a custom application. Area Taon WordPress with WooCommerce PrestaShop Content @taon-dev/cms provides content and media management. The application defines how content appears on the public site. WordPress provides posts, pages, a block editor, and themes. Block themes support site-wide editing through the Site Editor. The backoffice manages content pages alongside the product catalog. Commerce @taon-dev/e-commerce provides products, carts, orders, Stripe checkout, and entitlements. Developers integrate the storefront and configure payments. WooCommerce adds products, checkout, orders, taxes, and shipping. Payment options and integrations depend on configuration and installed extensions. Store management centers on products, variants, stock, pricing, shipping, and orders. Payment modules connect the store to payment providers. Backoffice @taon-dev/baseline brings together admin modules such as Session, CMS, and E-commerce. Developers register the contexts and routes and configure access. WordPress provides the site admin. WooCommerce adds store management screens. PrestaShop provides a store backoffice with catalog, order, and shop management screens. Customization Extend the application with TypeScript, Angular components, Taon contexts, and packages. Customize the site with themes, WordPress plugins, WooCommerce extensions, and custom code. Customize the store with themes, modules, and custom code. Deployment and maintenance The team builds and deploys the application for its chosen target and maintains its code, integrations, and data. The operator maintains WordPress, WooCommerce, the theme, and plugins. Managed hosting can handle some of this work. The operator maintains PrestaShop, the theme, and modules. Managed hosting can handle some of this work.",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "what-building-with-taon-involves",
    "headingTitle": "What building with Taon involves",
    "text": "What building with Taon involves For a combined website and store, a developer can use Baseline for the backoffice, CMS for content, and E-commerce for products and checkout. The developer connects these modules to the public site, configures permissions and payments, and deploys the application. Once the application is running, the site owner can manage content and products through the configured backoffice. Taon's Node.js, WebSQL browser, and Cloudflare Worker workflows serve different deployment needs. For example, WebSQL mode can run the backend locally in the browser. Production Stripe credentials and public webhook handling require a server-side deployment. See the Taon Admin module guides and the Taon Admin setup tutorial.",
    "api": false
  },
  {
    "filePath": "tnp/docs/TAON-VS-OTHERS.md",
    "headingId": "which-platform-fits-your-project",
    "headingTitle": "Which platform fits your project?",
    "text": "Which platform fits your project? Choose Taon when a development team needs a custom TypeScript application with control over the public site, APIs, permissions, and workflows. The team owns the integration, deployment, and maintenance. Choose WordPress when publishing is the main job and editors need an established CMS and theme ecosystem. Add WooCommerce when the site also needs a store. Choose PrestaShop when running a store is the main job and its built-in catalog, stock, and order workflows cover most of your requirements.",
    "api": false
  },
  {
    "filePath": "tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/build-isomorphic-lib/build-isomorphic-lib.md",
    "headingId": "build-isomorphi-lib",
    "headingTitle": "Build isomorphi lib:",
    "text": "Build isomorphi lib:",
    "api": false
  },
  {
    "filePath": "tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/build-isomorphic-lib/build-isomorphic-lib.md",
    "headingId": "usage-of-region-backend",
    "headingTitle": "Usage of region @backend",
    "text": "Usage of region @backend import { Taon } from 'taon/src' console.log('visible everywhere') //#region @backend console.log('visible in backend only') //#endregion if(Helpers.isBrowser) { console.log('visible everywhere, but only in browser') }",
    "api": false
  },
  {
    "filePath": "tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/build-isomorphic-lib/build-isomorphic-lib.md",
    "headingId": "usage-of-region-backendfunc",
    "headingTitle": "Usage of region @backendFunc",
    "text": "Usage of region @backendFunc import { Taon } from 'taon/src' class MyController { getSecrets() { //#region @backendFunc //#endregion } }",
    "api": false
  },
  {
    "filePath": "tnp/src/lib/project/abstract/artifacts/npm-lib-and-cli-tool/tools/taon-build.md",
    "headingId": "taon-build",
    "headingTitle": "taon build",
    "text": "taon build There are 3 modes for taon buid: old build mode (obm) when everthing is being watch 3x tsc processes (esm, cjs,js.maps) 2x ng build processe (browser,websql) build is heavy (on linux takes too much watchers) lightweight build mode everything goes through main worker that decides about builds last project that triggerd change (start lead build of all projects) build only uses no-watch tsc,ngbuild commands nothing is watching whole node_modules very fast and lightweight on linux (that does not like many file watchers) partial lightweight build mode (DEFAULT MODE) on win,macos -> obm (cjs, esm), lightweight (js.maps, browser,websql) linux -> always lightweight for everything",
    "api": false
  },
  {
    "filePath": "tnp/src/lib/project/abstract/taon-worker/dev-mode/dev-mode.README.md",
    "headingId": "taon-worker-microservice",
    "headingTitle": "Taon Worker/Microservice",
    "text": "Taon Worker/Microservice How to start worker/service // your app app/cli function async startWorker() { const worker = new DevModeWorker( 'unique-for-the-whole-os-id-for-service', 'command for starting this service. ex: dev-mode-cli startWorker' ); const ctrl = await worker.cliStartProcedure(); // by default started as child_process // }",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "os",
    "headingTitle": "Os",
    "text": "Os taon check:port 80 443 8080 => check if port(s) are taken taon copy from-path to-path => copy file or folder taon ln from-path to-path => link file or folder taon refresh => refresh linked projects configuration (after deleting or adding new repo) taon settings:vscode => set random nice colors for you vscode window",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "java-tomcat",
    "headingTitle": "java & tomcat",
    "text": "java & tomcat taon select:java => select java for $JAVA_HOME taon select:tomcat => select tomcat for $TOMCAT_HOME",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "etc-host",
    "headingTitle": "/etc/host",
    "text": "/etc/host taon simulateDomain my-test-domain.com => modify /etc/host in a nice way taon hosts => open /etc/hosts files in VSCode",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "git",
    "headingTitle": "Git",
    "text": "Git",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "handy-shortcuts",
    "headingTitle": "Handy shortcuts",
    "text": "Handy shortcuts taon soft => git reset --soft HEAD~1 taon count:commits => show origin of project taon remove:submodules => remove all submodules from repo taon remove:submodule my-not-wanted-git-submodules => remove submodule by folder name taon remove:tag git-tag-name-optionally => remove git tag (if not provided name - select menu appears) taon last:tag => display info aboutlast tag taon clone git-repo-address-to-clone => display info aboutlast tag",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "remotes",
    "headingTitle": "Remotes",
    "text": "Remotes taon origin => show origin of project taon remote => taon origin taon origins => show all origins of project taon remotes => taon origins taon rename:origin http://my-new-origin => replaces default origin new provided taon set:origin http://my-new-origin => alias to rename:origin taon set:remote:ssh => changes http remote to ssh remote taon set:remote:http => changes ssh remote to https remote",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "rebase",
    "headingTitle": "Rebase",
    "text": "Rebase taon rebase => rebase current branch with default branch taon rebase branch-to-rebase => rebase current branch with changes from branch-to-rebase",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "stash",
    "headingTitle": "Stash",
    "text": "Stash taon stash => stash only staged files taon stashall => stash all files",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "reset-change-branch",
    "headingTitle": "Reset + change branch",
    "text": "Reset + change branch taon branch => git fetch / display menu with branches to select / select branch taon reset => git fetch + remove tmp files for project + taon branch (include children) taon reset my-branch => same as taon reset but specific branch taon reset => reset hard and pull (recrusively)",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "pull-pull",
    "headingTitle": "Pull & Pull",
    "text": "Pull & Pull taon pull => pull current branch or current workspace projects one after another taon pull:all => pull current repo branch and first level of children projects taon pull:deep => pull current repo branch and all projects deep taon pul => taon pushall taon pall => taon pushall taon push => push current project repo with temp message taon push => push current project (+ first level children) repo with temp message taon push:deep => push current project (+ deep children repos) repo with temp message taon pushallorigins => push code to all remotes(origins) defined in .git/config",
    "api": false
  },
  {
    "filePath": "tnp-helpers/BASE-HELPERS-COMMANDS.md",
    "headingId": "smart-conventional-commits-branching",
    "headingTitle": "Smart Conventional Commits Branching",
    "text": "Smart Conventional Commits Branching Checkout branch + add changes + commit message + push branch Create special branches (with metadata inside name) that can be use later with command taon push to \"re-push\" changes and use matadata from branch name as commit message. fix Quick commit and push bugfix taon pfix JIRA-379089 JIRA-380320 proper counter message [my-lib] <=> git checkout -b bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message + git add + git commit -m \"fix(my-lib): proper counter message JIRA-379089 JIRA-380320\" + git push origin bugfix/JIRA-379089-JIRA-380320--my-lib--proper-counter-message taon pfix <=> taon pushfix <=> taon push:fix feature Quick commit and push feature taon pf JIRA-379089 JIRA-380320 admin notification [my-lib] <>=> git checkout -b feature/JIRA-379089-JIRA-380320--my-lib--admin-notification + git add + git commit -m \"feat(my-lib): admin notification JIRA-379089 JIRA-380320\" + git push origin feature/JIRA-379089-JIRA-380320--my-lib--admin-notification taon pf <=> taon pushfeature <=> taon push:feature chore Quick commit and push chore taon pc JIRA-379089 update deps <=> git checkout -b chore/JIRA-379089-update-deps + git add + git commit -m \"chore: update deps JIRA-379089\" + git push origin chore/JIRA-379089-update-deps taon pc <=> taon chore <=> taon pchore docs Quick commit and push docs update taon pd explained installation <=> git checkout -b docs/explained-installation + git add + git commit -m \"docs:explained installation\" + git push origin docs/explained-installation taon pd <=> taon pdocs test Quick commit and push tests update taon ptest admin permission new use case <=> git checkout -b test/admin-permission-new-use-case + git add + git commit -m \"test: admin permission new use case\" + git push origin test/admin-permission-new-use-case taon push:test <=> taon ptest <=> taon ptests styl Quick commit and push style update (formatting, linting etc.) taon pstyle proper project methods <=> git checkout -b style/proper-project-methods + git add + git commit -m \"style: proper project methods\" + git push origin style/proper-project-methods taon pstyl <=> taon pstyle refactor Quick commit and push code refactor taon pref new permission module <=> git checkout -b refactor/new-permission-module + git add + git commit -m \"refactor: new permission module\" + git push origin refactor/new-permission-module taon pref <=> taon prefactor release Quick commit and push release commit taon prelease <=> git checkout -b release/version-v1-2-3 + git add + git commit -m \"release: version v1.2.3\" + git push origin release/version-1-2-3 taon prel <=> taon prelase",
    "api": false
  },
  {
    "filePath": "tnp-helpers/README.md",
    "headingId": "taon-helpers-tnp-helpers",
    "headingTitle": "taon-helpers ( tnp-helpers )",
    "text": "taon-helpers ( tnp-helpers ) part of taon.dev JavasScript/Typescript essential helpers extended/bigger version of taon-core (tnp-core) helpers purspose: every JS/TS helper that I could imagine smart isomorphic mocks for backend/NodeJs things",
    "api": false
  },
  {
    "filePath": "tnp-helpers/README.md",
    "headingId": "usage",
    "headingTitle": "Usage",
    "text": "Usage in taon isomorphic libs/apps or any NodeJS apps/libs: import { Helpers } from 'tnp-helpers'; in any frontend browser apps (except taon lib/apps) import { Helpers } from 'tnp-helpers/browser';",
    "api": false
  }
] as any;

export default TaonDev__DocsDocsIndexData;
