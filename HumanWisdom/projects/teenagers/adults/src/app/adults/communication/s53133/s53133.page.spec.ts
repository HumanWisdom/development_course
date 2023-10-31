import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53133Page } from './s53133.page';

describe('S53133Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53133Page;
  let fixture: ComponentFixture<S53133Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53133Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53133Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
