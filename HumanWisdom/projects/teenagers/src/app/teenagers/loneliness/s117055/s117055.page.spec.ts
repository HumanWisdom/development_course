import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117055Page } from './s117055.page';

describe('S117055Page', () => {
  // let   
    let component:  S117055Page;
  let fixture: ComponentFixture<S117055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
