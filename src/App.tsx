import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelecetedCategory] = useState("");
  const [expenses, SetExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <Form
          onSubmit={(expense) =>
            SetExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelecetedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => SetExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
