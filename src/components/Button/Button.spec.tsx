import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button test", () => {
  it("should render text correctly", () => {
    render(<Button>This is a button</Button>);
    expect(screen.getByText("This is a button")).toBeDefined();
  });
});
