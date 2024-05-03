"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params) {
  try {
    // 3. Handle the form submission.
    connectToDatabase();
  } catch (error) {
    // 4. Handle any errors.
  }
}
export async function editQuestion(params) {
  try {
    // 3. Handle the form submission.
    connectToDatabase();
  } catch (error) {
    // 4. Handle any errors.
  }
}
