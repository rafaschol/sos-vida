import { PaperClipIcon } from "@heroicons/react/20/solid";

const List = ({ title, subtitle, elements }) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {elements.map((element) => (
            <div
              key={element.id}
              className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt className="text-sm font-medium text-gray-500">
                {element.key}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {element.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default List;
