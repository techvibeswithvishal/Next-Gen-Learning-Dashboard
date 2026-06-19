import { supabase } from "./supabase";
import { Course } from "@/types/course";

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Supabase Error:",
      error.message
    );

    throw new Error(
      "Failed to fetch courses"
    );
  }

  return data ?? [];
}