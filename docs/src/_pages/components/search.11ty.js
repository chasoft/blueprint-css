import schema from '../../../../packages/components/dist/drafter/schema.json';
import { getImport, getExample, getAPI } from '../../_includes/utils/index.js';

export const data = {
  title: 'Search',
  layout: 'doc.11ty.js',
  permalink: 'docs/components/search.html',
  schema: schema.find(c => c.name === 'search')
};

export function render() {
  return /* markdown */`
${getExample(data.schema, 'example')}

${getExample(data.schema, 'vertical' )}

${getExample(data.schema, 'horizontal')}

${getExample(data.schema, 'compact')}

${getImport(data.schema)}

${getAPI(data.schema)}
`;
}
