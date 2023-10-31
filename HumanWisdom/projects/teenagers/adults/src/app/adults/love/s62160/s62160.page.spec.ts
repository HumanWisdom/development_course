import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62160Page } from './s62160.page';

describe('S62160Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62160Page;
  let fixture: ComponentFixture<S62160Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62160Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62160Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
