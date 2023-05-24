import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117066tPage } from './s117066t.page';

describe('S117066tPage', () => {
  // let   
    let component:  S117066tPage;
  let fixture: ComponentFixture<S117066tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117066tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117066tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
