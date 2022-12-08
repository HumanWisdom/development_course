import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53029Page } from './s53029.page';

describe('S53029Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53029Page;
  let fixture: ComponentFixture<S53029Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53029Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53029Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
