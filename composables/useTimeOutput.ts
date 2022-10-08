export default function (seconds: number): string {
  if (seconds % 60 >= 10) return `${Math.trunc(seconds / 60)}:${seconds % 60}`;
  return `${Math.trunc(seconds / 60)}:0${seconds % 60}`;
}
