import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Nike } from 'app/data/schema/nike';

@Component({
  selector: 'app-nike-item',
  templateUrl: './nike-item.component.html',
  styleUrls: ['./nike-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NikeItemComponent {
  @Input() nike: Nike;
  flipped = false;

  gotoDetail(url: string): void {
    window.open(url, '_blank');
  }
}
