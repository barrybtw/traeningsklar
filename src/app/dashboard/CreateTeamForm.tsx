"use client";

export default function CreateTeamForm() {
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const name = String(formData.get("name") || "").trim();
        const ageGroup = String(formData.get("ageGroup") || "").trim();
        if (!name) {
          alert("Giv dit hold et navn");
          return;
        }
        alert(`Hold oprettet: ${name}${ageGroup ? ` (${ageGroup})` : ""}`);
        form.reset();
      }}
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Holdnavn
        </label>
        <input
          id="name"
          name="name"
          placeholder="Fx U12 A-hold"
          className="h-10 rounded-md border px-3 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="ageGroup" className="text-sm font-medium">
          Årgang (valgfri)
        </label>
        <input
          id="ageGroup"
          name="ageGroup"
          placeholder="Fx U12"
          className="h-10 rounded-md border px-3 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
      </div>

      <button
        type="submit"
        className="h-10 px-5 rounded-md font-semibold bg-primary text-primary-foreground hover:brightness-95"
      >
        Lav dit første hold!
      </button>
    </form>
  );
}
