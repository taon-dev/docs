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
  selector: 'app-my-docs-page-additional-commands-md',
  templateUrl: './ADDITIONAL-COMMANDS.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateDirective],
})
export class TnpDocsAdditionalCommandsMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "tnp run\n",
// @taonSkipNextLineCut
codeblock0Html: "tnp run\n",
// @taonSkipNextLineCut
codeblock1: "tnp vscode\n",
// @taonSkipNextLineCut
codeblock1Html: "tnp vscode\n",
// @taonSkipNextLineCut
codeblock2: "tnp pause\n",
// @taonSkipNextLineCut
codeblock2Html: "tnp pause\n",
// @taonSkipNextLineCut
codeblock3: "tnp ghPagesInit\ntnp gh:pages:init\ntnp ghpagesinit\ntnp ghPagesInit --full # full process with deleting /docs files\ntnp ghPagesInit --provider bitbucket # specify different provider\n",
// @taonSkipNextLineCut
codeblock3Html: "tnp ghPagesInit\ntnp gh:pages:init\ntnp ghpagesinit\ntnp ghPagesInit --full <span class=\"hljs-comment\"># full process with deleting /docs files</span>\ntnp ghPagesInit --provider bitbucket <span class=\"hljs-comment\"># specify different provider</span>\n",
// @taonSkipNextLineCut
codeblock4: "tnp versions\n",
// @taonSkipNextLineCut
codeblock4Html: "tnp versions\n",
// @taonSkipNextLineCut
codeblock5: "tnp mp3 <url to video>\n",
// @taonSkipNextLineCut
codeblock5Html: "tnp mp3 &lt;url to video&gt;\n",
// @taonSkipNextLineCut
codeblock6: "tnp mp4 <url to video>\n",
// @taonSkipNextLineCut
codeblock6Html: "tnp mp4 &lt;url to video&gt;\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "running-nodejs-backend-app",
    "title": "Running nodejs backend app",
    "level": 2
  },
  {
    "id": "tnp-extension-for-visual-studio-code",
    "title": "Tnp extension for Visual Studio Code",
    "level": 2
  },
  {
    "id": "pause",
    "title": "Pause",
    "level": 2
  },
  {
    "id": "github-pages-from-docs-to-branch",
    "title": "Github pages from /docs to branch",
    "level": 2
  },
  {
    "id": "show-version-of-projects-inside-container",
    "title": "Show version of projects inside container",
    "level": 2
  },
  {
    "id": "download-video-as-mp3",
    "title": "Download video as mp3",
    "level": 2
  },
  {
    "id": "download-video-as-mp4-video",
    "title": "Download video as mp4 video",
    "level": 2
  }
];

}

    