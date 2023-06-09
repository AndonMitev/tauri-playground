#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Builder;



fn main() {
  Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
  
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello wow, {}!", name)
}

