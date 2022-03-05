import{c as n}from"./app.a967d9a0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="folder-structure" tabindex="-1"><a class="header-anchor" href="#folder-structure" aria-hidden="true">#</a> Folder structure</h1><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>\u{1F4E6}vue3-ssr-template
 \u2523 \u{1F4C2}config <span class="token comment">// contains configuration for each environments</span>
 \u2503 \u2523 \u{1F4DC}local.yml
 \u2503 \u2517 \u{1F4DC}production.yml
 \u2523 \u{1F4C2}public
 \u2503 \u2523 \u{1F4DC}favicon.ico
 \u2503 \u2523 \u{1F4DC}index.html
 \u2503 \u2517 \u{1F4DC}robots.txt <span class="token comment">// robots configuration</span>
 \u2523 \u{1F4C2}src
 \u2503 \u2523 \u{1F4C2}app
 \u2503 \u2503 \u2523 \u{1F4C2}assets
 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}scss
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}app.scss
 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}dna.scss
 \u2503 \u2503 \u2523 \u{1F4C2}components <span class="token comment">// you can arrange your components as you like but we recommend using atoms molecules and organisms </span>
 \u2503 \u2503 \u2503 \u2517 \u{1F4C2}atoms
 \u2503 \u2503 \u2523 \u{1F4C2}i18n
 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}formats
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}formats-CH.ts
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}formats-FR.ts
 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}formats-UK.ts
 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}messages <span class="token comment">// localization</span>
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}messages-en.json
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}messages-fr.json
 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}messages-it.json
 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.ts
 \u2503 \u2503 \u2523 \u{1F4C2}pages <span class="token comment">// all entry pages</span>
 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}Empty.vue
 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}Home.vue
 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}NotFound.vue
 \u2503 \u2503 \u2523 \u{1F4C2}router
 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}routes <span class="token comment">// create a separate file for each routes</span>
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}category.ts
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}home.ts
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.ts
 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}main.ts
 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}not-found.ts
 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.ts
 \u2503 \u2503 \u2523 \u{1F4C2}stores
 \u2503 \u2503 \u2523 \u{1F4C2}typings
 \u2503 \u2503 \u2523 \u{1F4C2}utils
 \u2503 \u2503 \u2523 \u{1F4DC}app.ts
 \u2503 \u2503 \u2523 \u{1F4DC}App.vue
 \u2503 \u2503 \u2523 \u{1F4DC}entry-client.ts
 \u2503 \u2503 \u2523 \u{1F4DC}entry-server.ts
 \u2503 \u2517 \u{1F4C2}server
 \u2503 \u2503 \u2523 \u{1F4C2}controllers
 \u2503 \u2503 \u2523 \u{1F4C2}middlewares
 \u2503 \u2503 \u2523 \u{1F4C2}typings
 \u2503 \u2503 \u2523 \u{1F4C2}utils
 \u2503 \u2503 \u2523 \u{1F4DC}index-dev-server.ts
 \u2503 \u2503 \u2523 \u{1F4DC}index.ts
 \u2523 \u{1F4DC}.env
 \u2523 \u{1F4DC}package.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div>`,2);function r(l,p){return e}var i=s(a,[["render",r]]);export{i as default};
