import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S138001Page } from './s138001.page';

describe('S138001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S138001Page;
  let fixture: ComponentFixture<S138001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S138001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S138001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
