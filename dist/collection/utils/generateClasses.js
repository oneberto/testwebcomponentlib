export default function generateClasses(classes) {
  return classes.filter(Boolean).join(' ');
}
