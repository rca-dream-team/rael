/**
 * function that takes a key string like 'name' or 'name.first' and returns a function that takes an object and returns the value of the key in the object
 * @param key - the key to get the value of
 * @param obj - the object to get the value from
 */
export const getObjValue = (key: string | number, obj: any) => {
   const keys = key.toString().split('.');
   let result = obj;
   for (const key of keys) {
      if (result && Object.prototype.hasOwnProperty.call(result, key)) {
         result = result[key];
      } else {
         return undefined;
      }
   }
   return result as string;
};

/**
 * @param str
 * @returns a capitalize string ex: 'HELLO_WORLD' => 'Hello World'
 */
export const capitalize = (str: string): string => {
   if (!str) return '';
   return str
      ?.split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
};
