import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/assign")({
  component: Assign
});

function Assign() {
  return (
    <div className="p-2">
      <h3>Assign page!</h3>
    </div>
  );
}
