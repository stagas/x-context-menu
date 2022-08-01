<h1>
x-context-menu <a href="https://npmjs.org/package/x-context-menu"><img src="https://img.shields.io/badge/npm-v0.0.3-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-91-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/x-context-menu@0.0.3/dist/x-context-menu.min.js"><img src="https://img.shields.io/badge/brotli-27.2K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Context menu for x-popup.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i x-context-menu </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add x-context-menu </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add x-context-menu</code>
</td></tr></table>
</h4>

## API

<p>  <details id="ContextMenuProps$11" title="Interface" ><summary><span><a href="#ContextMenuProps$11">#</a></span>  <code><strong>ContextMenuProps</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L36">src/x-context-menu.tsx#L36</a>  <ul>        <p>  <details id="anchorDestination$12" title="Property" ><summary><span><a href="#anchorDestination$12">#</a></span>  <code><strong>anchorDestination</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L37">src/x-context-menu.tsx#L37</a>  <ul><p><span>HTMLElement</span></p>        </ul></details><details id="popupDestination$13" title="Property" ><summary><span><a href="#popupDestination$13">#</a></span>  <code><strong>popupDestination</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L38">src/x-context-menu.tsx#L38</a>  <ul><p><span>HTMLElement</span></p>        </ul></details><details id="scene$15" title="Property" ><summary><span><a href="#scene$15">#</a></span>  <code><strong>scene</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L40">src/x-context-menu.tsx#L40</a>  <ul><p><span>PopupSceneLocal</span></p>        </ul></details><details id="sticky$16" title="Property" ><summary><span><a href="#sticky$16">#</a></span>  <code><strong>sticky</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L41">src/x-context-menu.tsx#L41</a>  <ul><p>boolean</p>        </ul></details><details id="surface$14" title="Property" ><summary><span><a href="#surface$14">#</a></span>  <code><strong>surface</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L39">src/x-context-menu.tsx#L39</a>  <ul><p><span>SurfaceElement</span></p>        </ul></details><details id="Options$17" title="Method" ><summary><span><a href="#Options$17">#</a></span>  <code><strong>Options</strong></code><em>({ event })</em>    </summary>  <a href="src/x-context-menu.tsx#L42">src/x-context-menu.tsx#L42</a>  <ul>    <p>    <details id="props$19" title="Parameter" ><summary><span><a href="#props$19">#</a></span>  <code><strong>props</strong></code>    </summary>    <ul><p>{<p>  <details id="event$21" title="Property" ><summary><span><a href="#event$21">#</a></span>  <code><strong>event</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L42">src/x-context-menu.tsx#L42</a>  <ul><p><span>MouseEvent</span></p>        </ul></details></p>}</p>        </ul></details>  <p><strong>Options</strong><em>({ event })</em>  &nbsp;=&gt;  <ul><span>VKid</span></ul></p></p>    </ul></details></p></ul></details><details id="ContextMenuOption$1" title="Function" ><summary><span><a href="#ContextMenuOption$1">#</a></span>  <code><strong>ContextMenuOption</strong></code><em>({ children, disabled, keyboard, action })</em>    </summary>  <a href="src/x-context-menu.tsx#L15">src/x-context-menu.tsx#L15</a>  <ul>    <p>    {<p>  <details id="children$10" title="Property" ><summary><span><a href="#children$10">#</a></span>  <code><strong>children</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L19">src/x-context-menu.tsx#L19</a>  <ul><p><span>VKid</span></p>        </ul></details><details id="disabled$8" title="Property" ><summary><span><a href="#disabled$8">#</a></span>  <code><strong>disabled</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L17">src/x-context-menu.tsx#L17</a>  <ul><p>boolean</p>        </ul></details><details id="keyboard$9" title="Property" ><summary><span><a href="#keyboard$9">#</a></span>  <code><strong>keyboard</strong></code>    </summary>  <a href="src/x-context-menu.tsx#L18">src/x-context-menu.tsx#L18</a>  <ul><p>string  []</p>        </ul></details><details id="action$5" title="Method" ><summary><span><a href="#action$5">#</a></span>  <code><strong>action</strong></code><em>(e)</em>    </summary>  <a href="src/x-context-menu.tsx#L16">src/x-context-menu.tsx#L16</a>  <ul>    <p>    <details id="e$7" title="Parameter" ><summary><span><a href="#e$7">#</a></span>  <code><strong>e</strong></code>    </summary>    <ul><p><span>MouseEvent</span></p>        </ul></details>  <p><strong>action</strong><em>(e)</em>  &nbsp;=&gt;  <ul>void</ul></p></p>    </ul></details></p>}  <p><strong>ContextMenuOption</strong><em>({ children, disabled, keyboard, action })</em>  &nbsp;=&gt;  <ul><span>VKid</span></ul></p></p>    </ul></details><details id="onContextMenu$22" title="Function" ><summary><span><a href="#onContextMenu$22">#</a></span>  <code><strong>onContextMenu</strong></code><em>(<a href="#ContextMenuProps$11">ContextMenuProps</a>)</em>    </summary>  <a href="src/x-context-menu.tsx#L45">src/x-context-menu.tsx#L45</a>  <ul>    <p>    <a href="#ContextMenuProps$11">ContextMenuProps</a>  <p><strong>onContextMenu</strong><em>(<a href="#ContextMenuProps$11">ContextMenuProps</a>)</em>  &nbsp;=&gt;  <ul><span>Fn</span>&lt;[  named-tuple-member  ], any&gt;</ul></p></p>    </ul></details></p>

## Credits

- [relative-mouse](https://npmjs.org/package/relative-mouse) by [stagas](https://github.com/stagas) &ndash; Get mouse position relative to a DOM element.
- [sigl](https://npmjs.org/package/sigl) by [stagas](https://github.com/stagas) &ndash; Web framework
- [x-popup](https://npmjs.org/package/x-popup) by [stagas](https://github.com/stagas) &ndash; Popup Web Component used for tooltips and context menus
- [x-surface](https://npmjs.org/package/x-surface) by [stagas](https://github.com/stagas) &ndash; Infinitely pannable and zoomable HTML surface as a Web Component.

## Contributing

[Fork](https://github.com/stagas/x-context-menu/fork) or [edit](https://github.dev/stagas/x-context-menu) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
