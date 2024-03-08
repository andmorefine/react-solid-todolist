import React from 'react'
import { TodoApi } from '@widgets/type'
import { TodoListWidget } from '@widgets/TodoListWidget'
import { getData } from '@widgets/data/todoListData'
import { getData as getDataExt } from '@widgets/data/todoListDataExt'
import { getData as getDataFromApi } from '@widgets/data/todoDummyJsonData'
import { todoSimpleFactory } from '@widgets/factories/todoSimpleFactory'
import { todoExtFactory } from '@widgets/factories/todoExtFactory'
import { todoApiFactory } from '@widgets/factories/todoApiFactory'
import { customListItemProvider } from '@widgets/providers/customListItemProvider'
import { todoItemExtProvider } from '@widgets/providers/todoItemExtProvider'
import { todoApiItemProvider } from '@widgets/providers/todoApiItemProvider'

const App = () => {
  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className={'text-4xl font-bold text-center text-zinc-200 mb-8'}>
          Reactを用いたSOLID原則に基づいたTODOリスト
        </h1>
        <TodoListWidget
          title="SIMPLE"
          fetchCallback={getData}
          todoFactory={todoSimpleFactory}
          customListItemProvider={customListItemProvider}
        />
        <TodoListWidget
          title="EXTEND"
          fetchCallback={getDataExt}
          todoFactory={todoExtFactory}
          customListItemProvider={todoItemExtProvider}
        />
        <TodoListWidget<TodoApi, Promise<TodoApi[]>>
          title="API"
          fetchCallback={getDataFromApi}
          todoFactory={todoApiFactory}
          customListItemProvider={todoApiItemProvider}
        />
      </div>
    </div>
  )
}

export default App
