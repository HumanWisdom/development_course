import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117123Page } from './s117123.page';

describe('S117123Page', () => {
  // let   
    let component:  S117123Page;
  let fixture: ComponentFixture<S117123Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117123Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117123Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
