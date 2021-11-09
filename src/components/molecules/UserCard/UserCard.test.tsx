import { Topbar } from "components/organisms/Topbar/Topbar";
import { render, screen } from "test-utils";

describe("User Card", () => {
  it("Renders the component", async () => {
    render(<Topbar />);
    screen.getByText("GitHub users");
  });
});
