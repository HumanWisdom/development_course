import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55029Page } from './s55029.page';

describe('S55029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55029Page;
  let fixture: ComponentFixture<S55029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
