import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117076tPage } from './s117076t.page';

describe('S117076tPage', () => {
  // let   
    let component:  S117076tPage;
  let fixture: ComponentFixture<S117076tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117076tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117076tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
