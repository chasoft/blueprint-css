export function getExample(schema, exampleName, options = { }) {
  const example = schema.examples.find(e => e.name === exampleName);
  const headingText = example.name.split('-').filter(c => c !== '-').join(' ').split(' ').map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');
  const heading = options.title !== false ? `<h2 id="example-${example.name}" bp-text="heading" bp-layout="m-t:md">${headingText}</h2>` : '';
  return /* markdown */`
${heading}
<div class="element-example">
<div>${example.src.replace(/\r?\n|\r/g, '')}</div>
<details>
  <summary>code</summary>

\`\`\`html
${example.src}
\`\`\`
</details>
</div>
`;
}

export function getImport(schema) {
  const modules = !Array.isArray(schema) ? [`@blueprintui/components/include/${schema.name}.js`] : schema
  return /* markdown */`
<h2 id="install" bp-text="heading" bp-layout="m-t:md">Install</h2>

<h3 bp-text="section" bp-layout="m-t:md">NPM</h3>

\`\`\`typescript
// npm package
${modules.map(m => `import '${m}';`).join('\n')}
\`\`\`

<h3 bp-text="section" bp-layout="m-t:md">CDN</h3>

\`\`\`html
<script type="module">
  ${modules.map(m => `import 'https://cdn.jsdelivr.net/npm/${m}/+esm';`).join('\n  ')}
</script>
\`\`\`
  `;
}

export function getDescription(schema, elementName) {
  const element = schema.elements.find(e => e.tagName === elementName);
  return `${element ? `${element.description}` : ``}`;
}

export function getAPI(schema) {
  return /* markdown */`${schema.elements.map(e => /* html */`
<h2 id="${e.tagName}-api" bp-text="subheading" bp-layout="m-t:md">${e.tagName}</h2>
${table('Events', e.events)}
${e.members? table('Properties', e.members.filter(m => m.privacy !== 'private').filter(m => m.privacy !== 'protected').filter(m => !m.name.startsWith('#')).filter(m => !m.name.startsWith('_'))) : ''}
${e.attributes ? table('Attributes', e.attributes.filter(m => !m.name.startsWith('_'))) : ''}
${table('CSS Properties', e.cssProperties)}
${e.slots ? table('Slots', e.slots.map(s => s.name ? s : ({ ...s, name: 'default' }))) : ''}`).join('\n')}`
}

function table(name, rows) {
  return rows ? /* html */`
<h3 bp-text="section" bp-layout="m-t:md">${name}</h3>
<table>
  <thead>
    <tr><th>Name</td><th>Types</th><th>Description</th></tr>
  </thead>
  <tbody>
  ${rows.map(m => /* html */`<tr><td><code bp-text="code">${m.name}</code></td><td><code bp-text="code">${m.type ? m.type.text : ''}</code></td><td>${m.description ? m.description : ''}</td></tr>`).join('')}
  </tbody>
</table>` : '';
}