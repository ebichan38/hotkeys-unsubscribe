import { Component, OnInit } from '@angular/core';
import { HotkeysService } from '@ngneat/hotkeys';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  constructor(private hotkeys: HotkeysService) { }

  ngOnInit(): void {
    const subscription = this.hotkeys.addShortcut({keys: 'shift.a'}).subscribe((e) => {console.log('e;',e)});
    subscription.unsubscribe();
    this.hotkeys.removeShortcuts('shift.a');
  }

}
