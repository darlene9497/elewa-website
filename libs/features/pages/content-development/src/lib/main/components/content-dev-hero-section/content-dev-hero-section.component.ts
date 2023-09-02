import { Component } from '@angular/core';
import { HeroText } from '@elewa-website/models/schema/ui/texts';

@Component({
  selector: 'elewa-website-content-dev-hero-section',
  templateUrl: './content-dev-hero-section.component.html',
  styleUrls: ['./content-dev-hero-section.component.scss'],
})
export class ContentDevHeroSectionComponent {
  textData: HeroText = {
    title: 'Content development',
    subtitle: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolorem ipsum quia dolor sit Eos qui ratione voluptatem sequi nesciunt.',
  };
}
