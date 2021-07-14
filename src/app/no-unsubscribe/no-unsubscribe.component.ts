import { Component, OnInit } from '@angular/core';
import { HotkeysService } from '@ngneat/hotkeys';

@Component({
  selector: 'app-no-unsubscribe',
  templateUrl: './no-unsubscribe.component.html',
  styleUrls: ['./no-unsubscribe.component.css']
})
export class NoUnsubscribeComponent implements OnInit {

  constructor(private hotkeys: HotkeysService) { }

  ngOnInit(): void {
    const subscription = this.hotkeys.addShortcut({keys: 'shift.a'}).subscribe((e) => {console.log('e;',e)});
    this.hotkeys.removeShortcuts('shift.a');
  }

}
