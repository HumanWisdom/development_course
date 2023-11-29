import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132261Page } from './s132261.page';

describe('S132261Page', () => {
  // let   
    let component:  S132261Page;
  let fixture: ComponentFixture<S132261Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132261Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132261Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
