import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117051Page } from './s117051.page';

describe('S117051Page', () => {
  // let   
    let component:  S117051Page;
  let fixture: ComponentFixture<S117051Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117051Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117051Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
