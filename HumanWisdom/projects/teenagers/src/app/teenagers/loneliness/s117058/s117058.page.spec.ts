import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117058Page } from './s117058.page';

describe('S117058Page', () => {
  // let   
    let component:  S117058Page;
  let fixture: ComponentFixture<S117058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
