import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: <Routes>[
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
