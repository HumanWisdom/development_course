import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62039Page } from './s62039.page';

describe('S62039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62039Page;
  let fixture: ComponentFixture<S62039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
