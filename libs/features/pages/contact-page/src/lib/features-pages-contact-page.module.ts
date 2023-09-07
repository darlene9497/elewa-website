import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ContactPageComponent } from './main/contact-page/contact-page.component';
import { ContactPageFormSectionComponent } from './components/contact-page-form-section/contact-page-form-section.component';

import { ContactRoutingModule } from './contact-page.routing';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule, AppHeaderModule, ButtonsModule],
  declarations: [ContactPageComponent, ContactPageFormSectionComponent],
  exports: [ContactPageComponent, ContactPageFormSectionComponent],
})
export class ContactPageModule {}
