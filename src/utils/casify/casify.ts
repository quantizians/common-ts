export type CasifyConfig = {
  casing: 'camel' | 'snake' | 'kebab';
  /** characters to ignore */
  ignore: string[];
  /** whether number should be removed. Default: true */
  allowNumber: boolean;
};

/**
 * Transform casing of a string, for example from kebab-case to camelCase
 * @param str {string} string from which casing will be transformed
 * @param casing {string} string currently only 'camel' is supported
 */
export function casify(str: string, config: Partial<CasifyConfig> = {}) {
  const mergedConfig: CasifyConfig = {
    casing: 'camel',
    allowNumber: true,
    ignore: [],
    ...config,
  };
  const { allowNumber, casing } = mergedConfig;
  let { ignore } = mergedConfig;
  let connect = '_';
  switch (casing) {
    case 'kebab':
      connect = '-';
      break;
    case 'snake':
    default:
      connect = '_';
      break;
  }
  ignore.push(connect);
  const toEscape = ['-', '[', ']'];
  ignore = ignore.map(char => toEscape.includes(char) ? `\\${char}` : char);
  str = str
    .trim()
    .replace(
      new RegExp(`[^a-z${allowNumber ? '0-9' : ''}${ignore.join('')}]+`, 'gi'),
      connect,
    )
    .replace(new RegExp(`${connect}+`, 'g'), connect)
    .replace(new RegExp(`${connect}+$`), '')
    .replace(new RegExp(`^${connect}+`), '')
    .replace(/^(.)/, function(match) {
      return match.toLowerCase();
    });
  if (casing === 'camel') {
    str = str.replace(
      new RegExp(`${connect}.`, 'g'),
      function(match) {
        return match.replace(new RegExp(`${connect}`, 'g'), '').toUpperCase();
      },
    );
  } else {
    str = str
      .replace(
        new RegExp(`${connect}.`, 'g'),
        function(match) {
          return match.replace(/./g, letter => letter.toLowerCase());
        },
      ).replace(
        new RegExp(`[a-z${allowNumber ? '0-9' : ''}][A-Z]`, 'g'),
        function(match) {
          return match.replace(/[A-Z]/g, letter => `${connect}${letter.toLowerCase()}`);
        },
      );
  }
  return str;
}
