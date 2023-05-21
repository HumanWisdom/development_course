import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117049Page } from './s117049.page';

describe('S117049Page', () => {
  // let   
    let component:  S117049Page;
  let fixture: ComponentFixture<S117049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
