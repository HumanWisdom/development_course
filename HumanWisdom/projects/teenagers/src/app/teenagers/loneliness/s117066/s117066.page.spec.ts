import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117066Page } from './s117066.page';

describe('S117066Page', () => {
  // let   
    let component:  S117066Page;
  let fixture: ComponentFixture<S117066Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117066Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117066Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
