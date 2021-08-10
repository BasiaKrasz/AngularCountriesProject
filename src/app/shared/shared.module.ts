import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './header/components/logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { AboutModalComponent } from './header/components/about-modal/about-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LogoComponent, HeaderComponent, AboutModalComponent],
  imports: [CommonModule, NgbModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
