import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule}  from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatFormFieldModule,
  MatSortModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [MaterialComponents]
})
export class MaterialModule { }
