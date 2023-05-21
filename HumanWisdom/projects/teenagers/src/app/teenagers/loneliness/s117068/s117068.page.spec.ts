import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117068Page } from './s117068.page';

describe('S117068Page', () => {
  // let   
    let component:  S117068Page;
  let fixture: ComponentFixture<S117068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
