import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117122Page } from './s117122.page';

describe('S117122Page', () => {
  // let   
    let component:  S117122Page;
  let fixture: ComponentFixture<S117122Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117122Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
