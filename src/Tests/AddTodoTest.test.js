import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTodo from "../Components/Todo/AddTodo";

describe("Add to the list", () => {
  it("updates", () => {
    const { getByPlaceholderText } = render(<AddTodo/>);
    const input = getByPlaceholderText("Add a new todo");

    fireEvent.change(input, { target: { value: "Test" } });

    expect(input.value).toBe("Test");
  });

  it("adds a new todo item on form submission", () => {
    const onAdd = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddTodo onAdd={onAdd}></AddTodo>
    );
    const input = getByPlaceholderText("Add a new todo");
    const addButton = getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    expect(onAdd).toHaveBeenCalledWith("Test Todo");
  });

  it("does not add a new todo item on form submission if input is empty", () => {
    const onAdd = jest.fn();
    const { getByText } = render(<AddTodo onAdd={onAdd} />);
    const addButton = getByText("Add Todo");

    fireEvent.click(addButton);

    expect(onAdd).not.toHaveBeenCalled();
  });
});
