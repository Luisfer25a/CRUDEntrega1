import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongListComponent } from './components/song-list/song-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/songs',
    pathMatch: 'full'
  },
  {
    path: 'songs',
    component: SongListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
