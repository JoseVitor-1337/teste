export default function removeEverythingThatIsNotNumber(value: string): string {
  if (!value) return ""

  return value.replace(/[^\d]+/g, "")
}
