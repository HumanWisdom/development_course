import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117053tPage } from './s117053t.page';

describe('S117053tPage', () => {
  // let   
    let component:  S117053tPage;
  let fixture: ComponentFixture<S117053tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117053tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117053tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
