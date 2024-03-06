import React from 'react'
import { TodoListWidget } from './widgets/TodoListWidget'
import { customListItemProvider } from './widgets/providers/customListItemProvider'
import { getData } from './widgets/data/todoListData'
import { todoSimpleFactory } from './widgets/factories/todoSimpleFactory'

const App = () => {
  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className={'text-4xl font-bold text-center text-zinc-200 mb-8'}>
          Reactを用いたSOLID原則に基づいたTODOリスト
        </h1>
        <TodoListWidget
          title="Simple"
          fetchCallback={getData}
          todoFactory={todoSimpleFactory}
          customListItemProvider={customListItemProvider}
        />
      </div>
    </div>
  )
}

export default App
