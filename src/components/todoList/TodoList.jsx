import React from 'react';
import {PlusIcon} from "@heroicons/react/20/solid";
import TodoSelector from "@/components/todoList/TodoSelector";
import TodoEmpty from '@/components/todoList/TodoEmpty';
export default function TodoList({todos, setTodos}) {

  const addNewTodo = () => {
    setTodos(prev => ([...prev, {
      title: `Task #${todos.length + 1}`,
      tags: [],
      description: '',
      done: false
    }]));
  }

  const updateTodo = (data, index) => {
    const newArray = [...todos];
    newArray[index] = data;
    setTodos(newArray);
  }

  const removeTodo = (index) => {
    if (!window.confirm(`Are you sure you want to discard item #${index + 1}?`)) {
      return;
    }
    const newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray);
  }

  return <>
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300"/>
      </div>
      <div className="relative flex items-center justify-between">
        <span className="bg-white pr-3 text-base font-semibold leading-6 text-gray-900">TODO</span>
        <button onClick={addNewTodo}
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <PlusIcon className="-ml-1 -mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
          <span>Add item</span>
        </button>
      </div>
    </div>
    <fieldset>
      {
        todos.length === 0 &&
        <TodoEmpty/>
      }
      {
        todos.length > 0 &&
        <>
          {
            todos.map((todo, index) => (
              <TodoSelector onRemove={() => removeTodo(index)} onChange={data => updateTodo(data, index)} key={index}
                            index={index}
                            todo={todo}/>
            ))
          }
        </>
      }

    </fieldset>
  </>
}