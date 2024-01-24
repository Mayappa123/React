const students = [
  "ajay",
  "anil",
  "baban",
  "chirag",
  "devika",
  "aishwarya",
  "tanmay",
  "ganesh",
  "sonali",
  "ram",
];

export default function Name() {
  const names = students.map((s) => <li>{s}</li>);
  return <ol>{names}</ol>;
}
