import test from 'node:test';
import assert from 'node:assert/strict';
import { isPublished, todayInIndia, articlePath } from '../src/lib/publication.mjs';

test('publication follows the India calendar at the UTC date boundary', () => {
  const now = new Date('2026-11-06T18:30:00Z');
  assert.equal(todayInIndia(now), '2026-11-07');
  assert.equal(isPublished({ draft: false, publishedAt: '2026-11-07' }, now), true);
  assert.equal(isPublished({ draft: false, publishedAt: '2026-11-08' }, now), false);
  assert.equal(isPublished({ draft: true, publishedAt: '2026-11-01' }, now), false);
  assert.equal(isPublished({ publishedAt: '2026-11-01' }, now), false);
});

test('routes preserve their section and reject unsafe slugs', () => {
  assert.equal(articlePath('it/my-note'), '/it/my-note/');
  assert.equal(articlePath('non-it/my-note'), '/non-it/my-note/');
  assert.throws(() => articlePath('it/../resume'));
  assert.throws(() => articlePath('other/my-note'));
});
