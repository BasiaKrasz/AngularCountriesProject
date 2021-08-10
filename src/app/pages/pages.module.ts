import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentComponent } from './components/continent/continent.component';
import { CountryComponent } from './components/country/country.component';
import { SharedModule } from '../shared/shared.module';
import { LabelComponent } from './shared/label/label.component';

@NgModule({
  declarations: [ContinentComponent, CountryComponent, LabelComponent],
  imports: [CommonModule, SharedModule],
})
export class PagesModule {}
