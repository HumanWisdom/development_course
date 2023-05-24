import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117036Page } from './s117036.page';

describe('S117036Page', () => {
  // let   
    let component:  S117036Page;
  let fixture: ComponentFixture<S117036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
