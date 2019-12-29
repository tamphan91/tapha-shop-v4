import { NgModule } from '@angular/core';

import { Home2RoutingModule } from './home2-routing.module';
import { NikeItemComponent } from './page/nike-item/nike-item.component';
import { Home2Component } from './page/home2.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [NikeItemComponent, Home2Component],
  imports: [SharedModule, Home2RoutingModule]
})
export class Home2Module {}
