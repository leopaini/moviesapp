export const getPosterURL = (url: string) => {
  const path = "https://image.tmdb.org/t/p/w500/";
  return path + url;
};

export const toBoldStr = (text: string, word: string): string => {
  const regex = new RegExp(`(${word})`, "ig");
  return text.replace(regex, "<strong>$1</strong>");
};
