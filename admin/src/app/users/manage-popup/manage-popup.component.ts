import { UsersService } from './../users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-manage-popup',
  templateUrl: './manage-popup.component.html',
  styleUrls: ['./manage-popup.component.css']
})
export class ManagePopupComponent implements OnInit, OnDestroy {
  editor: Editor;
  popupvalue: string = '';
  setting_name: string = ''
  updatesetting_name: string = ''
  updatepopupvalue: string = ''
  popupList = []
  constructor(
    public _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.editor = new Editor();
    this.getPopupContent();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  initUpdate(data) {
    this.updatesetting_name = data.SettingName;
    this.updatepopupvalue = data.Value
  }

  getPopupContent() {
    this._userService.getPopupContent().subscribe((res: any) => {
      console.log(res)
      this.popupList = res;
    }, (err: any) => {
      console.log(err);
    })
  }

  keyupinput(value) {
    this.setting_name = value;
  }

  valuekeyupinput(value) {
    this.popupvalue = value;
  }

  updatekeyupinput(value) {
    this.updatesetting_name = value;
  }

  updatevaluekeyupinput(value) {
    this.updatepopupvalue = value;
  }

  reset() {
    this.setting_name = '';
    this.popupvalue = ''
  }

  addPopupContent() {
    let data = {
      Value: this.popupvalue,
      SetID : 1,
      SettingName: this.setting_name
    }
    this._userService.addPopupContent(data).subscribe((res: any) => {
      alert('Popup content added!')
      this.getPopupContent()
    }, (err: any) => {
      console.log(err);
    })
  }

  updatePopupContent(item) {
    let data = {
      Value: this.updatepopupvalue,
      SetID : item.SetID,
      SettingName: this.updatesetting_name
    }
    this._userService.addPopupContent(data).subscribe((res: any) => {
      alert('Popup content updated!')
      this.getPopupContent()
    }, (err: any) => {
      console.log(err);
    })
  }

}
