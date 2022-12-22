function editElement(text, matchText, replaceTaxt) {
  const element = text.textContent;

  const pattern = new RegExp(matchText, 'g');

  const result = element.replace(pattern, replaceTaxt);

  text.textContent = result;
}
