/**
 * English text for the small set of clubs that have a Hungarian `schedule`
 * string in clubs.json. Presentation-only lookup, not stored on the club
 * itself since it's just 8 short phrases.
 */
const SCHEDULE_EN: Record<string, string> = {
  Hétvégente: "Weekends",
  "Kedd és csütörtök este, vasárnap reggel": "Tue & Thu evenings, Sun mornings",
  "Szombat esténként": "Saturday evenings",
  Havonta: "Monthly",
  "Keddenként, Margitsziget": "Tuesdays, Margaret Island",
  "Havonta, vezetett túrák": "Monthly, guided hikes",
  "Hetente, Puskás Aréna melletti pálya": "Weekly, court next to Puskás Aréna",
};

export function getScheduleEn(schedule: string | null | undefined): string | null {
  if (!schedule) return null;
  return SCHEDULE_EN[schedule] ?? schedule;
}
