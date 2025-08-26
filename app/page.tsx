import { redirect } from "next/navigation";

export default function Home() {
  // Redirect root to Russian by default
  redirect("/ru");
}
