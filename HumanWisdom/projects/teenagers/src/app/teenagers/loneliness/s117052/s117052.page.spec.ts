import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117052Page } from './s117052.page';

describe('S117052Page', () => {
  // let   
    let component:  S117052Page;
  let fixture: ComponentFixture<S117052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
