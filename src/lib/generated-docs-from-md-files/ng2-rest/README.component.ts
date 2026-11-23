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
export class Ng2RestReadmeMdComponent extends TaonDocsPageComponent {
  t = t.for(this);
  public baseHref: string = '/';
  public context: any = {
// @taonSkipNextLineCut
codeblock0: "npm install ng2-rest --save\n",
// @taonSkipNextLineCut
codeblock1: "import { Resource } from 'ng2-rest/browser';\n",
// @taonSkipNextLineCut
codeblock1Html: "<span class=\"hljs-keyword\">import</span> { Resource } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#x27;ng2-rest/browser&#x27;</span>;\n",
// @taonSkipNextLineCut
codeblock2: "Users:\n<ul   *ngIf=\"model.allUsers() | async; else loader; let users\" >\n\n  <li  *ngFor=\"let user of users\"> \n  \t\t{{user.id}} {{user.fullName()}} \n\t\t  <br>\n\t\t<input type=\"name\" [(NgModel)]=\"user.name\" >\n\t\t<button (click)=\"model.update(user)\" > Update </button>\n  </li>\n\n</ul>\n\n<ng-template #loader> loading users...  </ng-template>\n\n",
// @taonSkipNextLineCut
codeblock2Html: "Users:\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ul</span>   *<span class=\"hljs-attr\">ngIf</span>=<span class=\"hljs-string\">&quot;model.allUsers() | async; else loader; let users&quot;</span> &gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">li</span>  *<span class=\"hljs-attr\">ngFor</span>=<span class=\"hljs-string\">&quot;let user of users&quot;</span>&gt;</span> \n  \t\t{{user.id}} {{user.fullName()}} \n\t\t  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n\t\t<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">&quot;name&quot;</span> [(<span class=\"hljs-attr\">NgModel</span>)]=<span class=\"hljs-string\">&quot;user.name&quot;</span> &gt;</span>\n\t\t<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> (<span class=\"hljs-attr\">click</span>)=<span class=\"hljs-string\">&quot;model.update(user)&quot;</span> &gt;</span> Update <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">li</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ul</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ng-template</span> #<span class=\"hljs-attr\">loader</span>&gt;</span> loading users...  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ng-template</span>&gt;</span>\n\n",
// @taonSkipNextLineCut
codeblock3: "class User {\n\tname: string;\n\tsurname: string;\n\tid: number;\n\n\tfullName() {\n\t\treturn `Surname: ${this.surname}, Name: ${this.name}`;\n\t}\n}\n\n// Express.js style url endpoint model\n// you can ommit \"<User>\" part is you don't wanna see response interface\n// also you can ommit third argument \",User\" is you don't wanna\n// map response object to User class objects\nconst rest = Resource.create<User>(\"http://yourbackend.com/api\",\"users/:id\",{'':User} )\n\nclass UserComponent {\n\n   // Prepare your beautiful interface\n    model = {\n\t allUsers: () => rest.model()\n\t\t .array\n\t\t .get()\n\t\t .observable // Observable resposnse (useful for Angular 2+ html templates)\n     .pipe( map({ body } => body.json) ) // get all users, body.json => User[] \n\n\t userBy: (id) => rest.model({id})\n\t\t .get() // Promise response by default\n\t\t .then({ body } => console.log(body.json)) // get user by id,  body.json => User\n\n\t update: async (user:User) =>{\n\t\t try {\n\t\t\tawait rest.model({id:user.id}).put(user) // Promise response by default\n\n\t\t\talert('Update sucess')\n\t\t } catch(e) {\n\t\t\talert(e)\n\t\t }\t\n\t \t}\n    }\n\n\tconstructor() { }\n\n}\n",
// @taonSkipNextLineCut
codeblock3Html: "<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">User</span> </span>{\n\t<span class=\"hljs-attr\">name</span>: <span class=\"hljs-built_in\">string</span>;\n\tsurname: <span class=\"hljs-built_in\">string</span>;\n\tid: <span class=\"hljs-built_in\">number</span>;\n\n\t<span class=\"hljs-function\"><span class=\"hljs-title\">fullName</span>(<span class=\"hljs-params\"></span>)</span> {\n\t\t<span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`Surname: <span class=\"hljs-subst\">${<span class=\"hljs-built_in\">this</span>.surname}</span>, Name: <span class=\"hljs-subst\">${<span class=\"hljs-built_in\">this</span>.name}</span>`</span>;\n\t}\n}\n\n<span class=\"hljs-comment\">// Express.js style url endpoint model</span>\n<span class=\"hljs-comment\">// you can ommit &quot;&lt;User&gt;&quot; part is you don&#x27;t wanna see response interface</span>\n<span class=\"hljs-comment\">// also you can ommit third argument &quot;,User&quot; is you don&#x27;t wanna</span>\n<span class=\"hljs-comment\">// map response object to User class objects</span>\n<span class=\"hljs-keyword\">const</span> rest = Resource.create&lt;User&gt;(<span class=\"hljs-string\">&quot;http://yourbackend.com/api&quot;</span>,<span class=\"hljs-string\">&quot;users/:id&quot;</span>,{<span class=\"hljs-string\">&#x27;&#x27;</span>:User} )\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UserComponent</span> </span>{\n\n   <span class=\"hljs-comment\">// Prepare your beautiful interface</span>\n    model = {\n\t <span class=\"hljs-attr\">allUsers</span>: <span class=\"hljs-function\">() =&gt;</span> rest.model()\n\t\t .array\n\t\t .get()\n\t\t .observable <span class=\"hljs-comment\">// Observable resposnse (useful for Angular 2+ html templates)</span>\n     .pipe( map({ body } =&gt; body.json) ) <span class=\"hljs-comment\">// get all users, body.json =&gt; User[] </span>\n\n\t <span class=\"hljs-attr\">userBy</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">id</span>) =&gt;</span> rest.model({id})\n\t\t .get() <span class=\"hljs-comment\">// Promise response by default</span>\n\t\t .then({ body } =&gt; <span class=\"hljs-built_in\">console</span>.log(body.json)) <span class=\"hljs-comment\">// get user by id,  body.json =&gt; User</span>\n\n\t <span class=\"hljs-attr\">update</span>: <span class=\"hljs-keyword\">async</span> (user:User) =&gt;{\n\t\t <span class=\"hljs-keyword\">try</span> {\n\t\t\t<span class=\"hljs-keyword\">await</span> rest.model({<span class=\"hljs-attr\">id</span>:user.id}).put(user) <span class=\"hljs-comment\">// Promise response by default</span>\n\n\t\t\talert(<span class=\"hljs-string\">&#x27;Update sucess&#x27;</span>)\n\t\t } <span class=\"hljs-keyword\">catch</span>(e) {\n\t\t\talert(e)\n\t\t }\t\n\t \t}\n    }\n\n\t<span class=\"hljs-function\"><span class=\"hljs-title\">constructor</span>(<span class=\"hljs-params\"></span>)</span> { }\n\n}\n",
// @taonSkipNextLineCut
codeblock4: "[ { sort: true },{ filter: 'id,5' }, { filter: 'name,test' } ]",
// @taonSkipNextLineCut
codeblock5: "model, UrlParams[]",
// @taonSkipNextLineCut
codeblock6: "model, UrlParams[]",
// @taonSkipNextLineCut
codeblock7: "model, UrlParams[]",
// @taonSkipNextLineCut
codeblock8: "model, UrlParams[]",
// @taonSkipNextLineCut
codeblock9: "model, UrlParams[]",
// @taonSkipNextLineCut
codeblock10: "model, UrlParams[]",
// @taonSkipNextLineCut
codeblock11: "model, UrlParams[]",
// @taonSkipNextLineCut
codeblock12: "if (environment.production) {\n  Resource.enableWarnings = false;\n}\n",
// @taonSkipNextLineCut
codeblock12Html: "<span class=\"hljs-keyword\">if</span> (environment.production) {\n  Resource.enableWarnings = <span class=\"hljs-literal\">false</span>;\n}\n"
  };

  headings: DocsHeading[] = [
  {
    "id": "ng2-rest",
    "title": "ng2-rest",
    "level": 2
  },
  {
    "id": "resource",
    "title": "Resource",
    "level": 1
  },
  {
    "id": "specification",
    "title": "Specification",
    "level": 1
  },
  {
    "id": "production-mode",
    "title": "Production mode",
    "level": 1
  }
];

}

    