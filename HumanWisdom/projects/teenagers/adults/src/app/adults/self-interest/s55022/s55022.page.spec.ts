import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55022Page } from './s55022.page';

describe('S55022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55022Page;
  let fixture: ComponentFixture<S55022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
