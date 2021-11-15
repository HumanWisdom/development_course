import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53039Page } from './s53039.page';

describe('S53039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53039Page;
  let fixture: ComponentFixture<S53039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
