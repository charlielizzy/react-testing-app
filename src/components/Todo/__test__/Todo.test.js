import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

it("should be able to type into input", () => {
  render(<Todo />);
  addTask(["Go Grocery Shopping"]);
  const divElement = screen.getByText(/Go Grocery Shopping/i);
  expect(divElement).toBeInTheDocument();
});


it("should render multiple items when multiple tasks added", () => {
});

it("should not have the completed class when the todo item is added", () => {
});

it("task should have the completed class when clicked", () => {
});

