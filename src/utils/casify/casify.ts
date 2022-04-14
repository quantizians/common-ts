/**
 * Transform casing of a string, for example from kebab-case to camelCase
 * @param str {string} string from which casing will be transformed
 * @param casing {string} string currently only 'camel' is supported
 */
export function casify(str: string, casing: 'camel' = 'camel') {
  switch (casing) {
    case 'camel':
    default:
      return str
        .trim()
        .replace(/\[([a-zA-Z_-]*)\](.?)/g, function(match, p1, p2) {
          return match.replace(/\[[$a-zA-Z_-]*\]/g, `-${p1}${p2.length && p1.length ? '-' : ''}`);
        })
        .replace(/[-_\s]+./g, function(match) {
          return match.replace(/[-_\s]/g, '').toUpperCase();
        })
        .replace(/[-_]$/g, '')
        .replace(/^(.)/, function(match) {
          return match.toLowerCase();
        });
  }
}
