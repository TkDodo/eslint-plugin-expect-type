import * as fs from 'fs';
import { rules } from '../../src/rules';

describe('./src/rules/index.ts', () => {
  const rulesNames: ReadonlyArray<string> = Object.keys(rules);
  const files: ReadonlyArray<string> = fs
    .readdirSync('./src/rules')
    .filter((file) => file !== 'index.ts' && file.endsWith('.ts'));

  it('imports all available rule modules', () => {
    expect(rulesNames).toHaveLength(files.length);
  });
});
