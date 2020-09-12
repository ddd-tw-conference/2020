const isExternal = (str: string) => Boolean(str.match(/^([A-Za-z]+:)?\/\//));

export default isExternal;
