import schema from '../../../../packages/components/dist/drafter/schema.json';
import { getImport, getExample, getAPI } from '../../_includes/utils/index.js';

export const data = {
  title: 'Rating',
  aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/',
  schema: schema.find(c => c.name === 'rating')
};

export function render() {
  return /* markdown */`
The rating input component is used to allow the user to select a rating value within a specified range of values.

${getExample(data.schema, 'example')}

${getExample(data.schema, 'vertical' )}

${getExample(data.schema, 'horizontal')}

${getExample(data.schema, 'compact')}

${getImport(data.schema)}

## Accessibility 
- The rating input component should be fully accessible to users using keyboard navigation.
- When a user navigates to the rating input component, they should be able to adjust the value by using the arrow keys. 
- The rating input component should also be labeled and provide a clear indication of the current value, minimum and maximum values, and what the range input represents to users.

${getAPI(data.schema)}
`;
}
