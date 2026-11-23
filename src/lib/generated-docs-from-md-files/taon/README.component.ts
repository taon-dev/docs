//#region imports
import { BehaviorSubject } from 'rxjs';
import { Taon } from 'taon/src';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Translation, TranslateDirective } from '@taon-dev/i18n/src';
import { TaonDocsPageComponent, DocsHeading } from 'taon/src';

//#endregion

const t = Translation.for(Taon.__FILE_RELATIVE_PATH, Taon.LANG_IMPORT_MAP);

@Component({
  selector: 'app-my-docs-page-readme-md',
  templateUrl: './README.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TaonReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\n",
// @taonSkipNextLineCut
codeblock0Html: "<span class=\"hljs-built_in\">echo</span> fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p\n",
// @taonSkipNextLineCut
codeblock1: "npm i -g taon\n",
// @taonSkipNextLineCut
codeblock1Html: "npm i -g taon\n",
// @taonSkipNextLineCut
codeblock2: "SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm i -g taon\n",
// @taonSkipNextLineCut
codeblock2Html: "SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm i -g taon\n",
// @taonSkipNextLineCut
codeblock3: "taon sync \n",
// @taonSkipNextLineCut
codeblock3Html: "taon sync \n",
// @taonSkipNextLineCut
codeblock4: "npm i -g taon@19",
// @taonSkipNextLineCut
codeblock5: "taon sync",
// @taonSkipNextLineCut
codeblock6: "npm uninstall -g taon\nrm -rf ~/.taon  # taon local repositories, databases, settings, caches.\n",
// @taonSkipNextLineCut
codeblock6Html: "npm uninstall -g taon\nrm -rf ~/.taon  <span class=\"hljs-comment\"># taon local repositories, databases, settings, caches.</span>\n",
// @taonSkipNextLineCut
codeblock7: "[\n  // alternative to npx ( it wil not download package from npm if is not installed )\n  { name: 'npm-run', version: '4.1.2' },\n  //handy for removing files\n  { name: 'rimraf', version: '3.0.2' },\n  //handy for recreating catalogs\n  { name: 'mkdirp' },\n  // package manager\n  { name: 'yarn' },\n  // https server with --base-href\n  { name: 'taon-http-server' },\n  // code formatter\n  { name: 'prettier' },\n  // process killer\n  { name: 'fkill', installName: 'fkill-cli' },\n  // for unit tests runner \n  { name: 'mocha' },\n  // for unit tests runner\n  { name: 'jest' },\n  // run ts like js\n  { name: 'ts-node' },\n  // fork of vsce package without npm dependencies restrictions\n  { name: 'taon-vsce' },\n  // analyze you final bundle\n  { name: 'webpack-bundle-analyzer' }\n]\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "taon-framework-cli-cloud",
    "title": "Taon Framework/CLI/Cloud",
    "level": 1
  },
  {
    "id": "supported-os-es",
    "title": "Supported OS-es:",
    "level": 2
  },
  {
    "id": "supported-editors",
    "title": "Supported editors",
    "level": 2
  },
  {
    "id": "required-version-of-nodejs",
    "title": "Required version of NodeJS",
    "level": 2
  },
  {
    "id": "how-to-install-taon",
    "title": "How to install taon",
    "level": 2
  },
  {
    "id": "how-to-update-taon-s-core-container",
    "title": "How to update Taon's core container",
    "level": 2
  },
  {
    "id": "how-to-uninstall-taon-from-local-machine",
    "title": "How to uninstall taon from local machine",
    "level": 2
  },
  {
    "id": "projects-that-are-part-of-taon-dev",
    "title": "Projects that are part of taon.dev:",
    "level": 2
  },
  {
    "id": "global-npm-dependencies-installed-with-taon",
    "title": "Global npm dependencies installed with taon",
    "level": 2
  }
];

}

    