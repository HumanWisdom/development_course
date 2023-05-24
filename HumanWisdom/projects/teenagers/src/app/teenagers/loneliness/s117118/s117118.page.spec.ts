import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117118Page } from './s117118.page';

describe('S117118Page', () => {
  // let   
    let component:  S117118Page;
  let fixture: ComponentFixture<S117118Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117118Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117118Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
