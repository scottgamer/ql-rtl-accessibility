import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import UsersList from "./components/UsersList/UsersList";
import UsersProvider from "./context/UsersProvider";
import App from "./App";

describe("Users list component", () => {
  test("component has heading", () => {
    render(<UsersList />);
    const heading = screen.getByRole("heading", { name: "Registered users" });
    expect(heading).toHaveTextContent("Registered users");
  });

  test("fetch users button is enabled", () => {
    render(<UsersList />);
    const button = screen.getByRole("button", { name: "Fetch users" });
    expect(button).toHaveTextContent("Fetch users");
    expect(button).toBeEnabled();
  });

  test("fetch users when button is pressed", async () => {
    render(
      <UsersProvider>
        <UsersList />
      </UsersProvider>
    );
    const button = screen.getByRole("button", { name: "Fetch users" });
    fireEvent.click(button);

    const listTitle = await screen.findByRole("heading", {
      name: "List of users",
    });
    expect(listTitle).toHaveTextContent("List of users");

    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);
  });
});

describe("App component", () => {
  test("component has heading", () => {
    render(<App />);
    const title = screen.getByRole("heading", { name: "Acceptance form" });
    expect(title).toHaveTextContent("Acceptance form");
  });

  test("checkbox starts unchecked", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I accept the Terms and Conditions",
    });
    expect(checkbox).not.toBeChecked();
  });

  test("button starts disabled", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Continue" });
    expect(button).toBeDisabled();
  });

  test("when checkbox is checked, enable button", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I accept the Terms and Conditions",
    });

    fireEvent.click(checkbox);

    const button = screen.getByRole("button", { name: "Continue" });
    expect(button).toBeEnabled();
  });

  test("when button is enabled and clicked, change terms and conditions message", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I accept the Terms and Conditions",
    });

    fireEvent.click(checkbox);

    const button = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(button);

    const paragraph = screen.getByText(
      "Thanks for accepting the Terms and Conditions"
    );
    expect(paragraph).toBeInTheDocument();
    expect(checkbox).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
