import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117041Page } from './s117041.page';

describe('S117041Page', () => {
  // let   
    let component:  S117041Page;
  let fixture: ComponentFixture<S117041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
