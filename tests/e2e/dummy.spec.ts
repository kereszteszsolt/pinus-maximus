import { test, expect } from '@playwright/test';

// Dummy Playwright e2e test located in tests/e2e.
// This test doesn't require browsers; it simply performs a small assertion so
// the Playwright test runner can discover and run it as a smoke test.

test.describe('e2e folder smoke', () => {
  test('dummy e2e smoke test', async () => {
    expect(1 + 1).toBe(2);
  });
});
