import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55006Page } from './s55006.page';

describe('S55006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55006Page;
  let fixture: ComponentFixture<S55006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
