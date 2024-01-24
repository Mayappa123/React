const list = [
  { name: "ajay", age: 28, city: "Mumbai" },
  { name: "anil", age: 24, city: "Kolkatta" },
  { name: "sachin", age: 26, city: "Pune" },
  { name: "anjali", age: 30, city: "Patna" },
  { name: "ramesh", age: 235, city: "Delhi" },
  { name: "sonali", age: 30, city: "banglore" },
];

export default function Age() {
  const is30 = list.filter((i) => i.age == 30);

  const above30 = is30.map(i => <li>{i.name}</li>)

  return <li>{above30}</li>;
}
