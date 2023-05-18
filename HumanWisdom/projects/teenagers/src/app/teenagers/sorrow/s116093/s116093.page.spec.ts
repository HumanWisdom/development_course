import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116093Page } from './s116093.page';

describe('S116093Page', () => {
      
    let component:  S116093Page;
  let fixture: ComponentFixture<S116093Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116093Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116093Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
