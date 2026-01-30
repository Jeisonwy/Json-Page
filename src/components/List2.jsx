import { people } from "../assets/data.js";
import { getImageUrl } from "../assets/utils.js";

export default function List1() {
  const listItems = people.map((person) => (
    <li
      key={person.id}
      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={getImageUrl(person)}
        alt={person.name}
        className="w-16 h-16 rounded-full object-cover border border-white/20"
      />

      <p className="text-gray-200 leading-relaxed">
        <b className="text-white">{person.name}</b> {person.profession} â€”{" "}
        <span className="italic text-gray-300">
          conocido/a por {person.accomplishment}
        </span>
      </p>
    </li>
  ));

  return (
    <article className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-xl shadow-lg border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-6">CientÃ­ficos</h2>

      <ul className="space-y-4">{listItems}</ul>
    </article>
  );
}
