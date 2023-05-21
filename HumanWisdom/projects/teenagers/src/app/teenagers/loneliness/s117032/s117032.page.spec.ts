import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117032Page } from './s117032.page';

describe('S117032Page', () => {
  // let   
    let component:  S117032Page;
  let fixture: ComponentFixture<S117032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
