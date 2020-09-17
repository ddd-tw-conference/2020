const isMailTo = (str: string) => Boolean(str.match(/^mailto:/));

export default isMailTo;
