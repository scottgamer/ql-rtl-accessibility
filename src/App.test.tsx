import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import UsersList from "./components/UsersList/UsersList";
import UsersProvider from "./context/UsersProvider";

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
