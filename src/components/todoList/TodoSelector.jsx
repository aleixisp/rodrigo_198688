import {TrashIcon} from "@heroicons/react/24/outline";

export default function TodoSelector({todo, onChange, onRemove}) {
  const {done, description, title} = todo;

  return <div className="flex items-start space-y-2">
    <div className="min-w-0 flex-1">
      <div className="flex justify-between items-center pt-2">
        <div className="grow border-b border-gray-200 focus-within:border-indigo-600 mr-2">
          <label htmlFor="todo-description" className="sr-only">
            Set TODO title...
          </label>
          <textarea
            rows={1}
            maxLength={30}
            name="todo-title"
            id="todo-title"
            className={`block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6${done ? ' line-through' : ''}`}
            placeholder="Add TODO info..."
            value={title}
            disabled={done}
            onChange={event => onChange({...todo, title: event.target.value})}
          />
        </div>
        <div className="flow-root mr-2 mt-2">
          <button
            onClick={onRemove}
            type="button"
            className="-m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
          >
            <TrashIcon className="h-6 w-6" aria-hidden="true"/>
            <span className="sr-only">Drop item</span>
          </button>
        </div>
        <div className="flex-shrink-0">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            checked={done}
            onChange={() => onChange({...todo, done: !done})}
          />
        </div>
      </div>
      <div className="border-b border-gray-200 focus-within:border-indigo-600">
        <label htmlFor="todo-description" className="sr-only">
          Add TODO info...
        </label>
        <textarea
          rows={3}
          maxLength={250}
          name="todo-description"
          id="todo-description"
          className={`block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:ring-0 sm:text-sm sm:leading-6${done ? ' line-through' : ''}`}
          placeholder="Add TODO info..."
          value={description}
          disabled={done}
          onChange={event => onChange({...todo, description: event.target.value})}
        />
      </div>
    </div>
  </div>;


}