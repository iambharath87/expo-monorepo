const PATH_TO_HOME_APP: string = './app';
const PATH_TO_CC_APP: string = '../credit-card/app';

interface ContextWithPrefix {
  context: __MetroModuleApi.RequireContext;
  prefix: string;
}

const ctx1 = require.context(PATH_TO_HOME_APP, true, /.*/);
const ctx2 = require.context(PATH_TO_CC_APP, true, /.*/);

// Function to combine RequireContext objects
const combineContexts = (
  contextsList: ContextWithPrefix[],
): __MetroModuleApi.RequireContext => {
  // Function to get normalized keys for a context and its associated prefix
  const getNormalizedKeys = (
    ctx: __MetroModuleApi.RequireContext,
    prefix: string,
  ) => ctx.keys().map((key) => `${prefix}${key.slice(1)}`);

  // Combine keys from all contexts
  let combinedKeys: string[] = [];
  for (const { context, prefix } of contextsList) {
    combinedKeys = [...combinedKeys, ...getNormalizedKeys(context, prefix)];
  }

  const myCtx: __MetroModuleApi.RequireContext = (id: string): any => {
    for (const { context, prefix } of contextsList) {
      if (context(`.${id.replace(prefix, '')}`)) {
        return context(`.${id.replace(prefix, '')}`);
      }
    }
    return null; // Return null or throw an error if the id is not found in any context
  };

  myCtx['keys'] = () => combinedKeys;
  myCtx['resolve'] = (id: string) => id;
  myCtx['id'] = 'combinedContext';

  return myCtx;
};

const x = combineContexts([
  { context: ctx1, prefix: '.' },
  { context: ctx2, prefix: '@credit-card' },
]);

export default x;

console.log('x keys:', x.keys());
x.keys().forEach((key) => {
  console.log(key, x(key));
});
