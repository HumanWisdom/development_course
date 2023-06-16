import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117120Page } from './s117120.page';

describe('S117120Page', () => {
  // let   
    let component:  S117120Page;
  let fixture: ComponentFixture<S117120Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117120Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117120Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
