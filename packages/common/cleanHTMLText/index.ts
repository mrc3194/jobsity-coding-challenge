const cleanHTMLText = (text: string) => {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
};

export default cleanHTMLText;
