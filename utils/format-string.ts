export const convertFirstCharToUpperCase = (value: string) =>
  `${value.at(0)?.toUpperCase()}${value.slice(1)}`;
