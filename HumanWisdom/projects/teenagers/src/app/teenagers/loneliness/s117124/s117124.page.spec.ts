import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117124Page } from './s117124.page';

describe('S117124Page', () => {
  // let   
    let component:  S117124Page;
  let fixture: ComponentFixture<S117124Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117124Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117124Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
