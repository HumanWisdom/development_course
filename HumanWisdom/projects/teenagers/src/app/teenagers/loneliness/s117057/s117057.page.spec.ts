import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117057Page } from './s117057.page';

describe('S117057Page', () => {
  // let   
    let component:  S117057Page;
  let fixture: ComponentFixture<S117057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
