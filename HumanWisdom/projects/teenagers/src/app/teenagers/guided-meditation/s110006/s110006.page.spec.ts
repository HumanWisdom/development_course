import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110006Page } from './s110006.page';

describe('S110006Page', () => {
  // let  
    let component:  S110006Page;
  let fixture: ComponentFixture<S110006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
