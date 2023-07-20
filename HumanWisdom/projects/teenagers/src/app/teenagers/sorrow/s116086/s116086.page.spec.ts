import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116086Page } from './s116086.page';

describe('S116086Page', () => {
      
    let component:  S116086Page;
  let fixture: ComponentFixture<S116086Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116086Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116086Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
