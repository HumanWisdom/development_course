import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117121Page } from './s117121.page';

describe('S117121Page', () => {
  // let   
    let component:  S117121Page;
  let fixture: ComponentFixture<S117121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117121Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
