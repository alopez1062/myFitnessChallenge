import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { RecetasComponent } from "./components/recetas/recetas.component";

const app_routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "recetas", component: RecetasComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const app_routing = RouterModule.forRoot(app_routes);
