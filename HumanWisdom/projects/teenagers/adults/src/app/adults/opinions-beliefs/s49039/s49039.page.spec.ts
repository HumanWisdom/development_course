import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49039Page } from './s49039.page';

describe('S49039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49039Page;
  let fixture: ComponentFixture<S49039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
