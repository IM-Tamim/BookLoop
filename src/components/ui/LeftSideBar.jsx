import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2>All Categories</h2>
      <ul className="flex flex-col gap-3 mt-6 text-center">
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className={`${activeId === String(category.id) && "text-blue-500"}
                bg-slate-100 rounded-xl text-xl font-semibold p-2`}
            >
              <Link href={`/category/${category.id}`} className="block">
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;