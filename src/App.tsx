import React from 'react'

import { TodoListWidget } from './widgets/TodoListWidget'
import { todoItemSimpleProvider } from './widgets/providers/todoItemSimpleProvider'
import { getData } from './widgets/data/todoListData'
import { todoSimpleFactory } from './widgets/factories/todoSimpleFactory'

const App = () => {
  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className={'text-4xl font-bold text-center text-zinc-200 mb-8'}>
          React SOLID Todo List
        </h1>
        <hr />

        <TodoListWidget
          title="Simple"
          fetchCallback={getData}
          todoFactory={todoSimpleFactory}
          customListItemProvider={todoItemSimpleProvider}
        />
      </div>
    </div>
  )
}

export default App
