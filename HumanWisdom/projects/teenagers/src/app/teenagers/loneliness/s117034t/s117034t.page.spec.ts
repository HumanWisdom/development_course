import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117034tPage } from './s117034t.page';

describe('S117034tPage', () => {
  // let   
    let component:  S117034tPage;
  let fixture: ComponentFixture<S117034tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117034tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117034tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
