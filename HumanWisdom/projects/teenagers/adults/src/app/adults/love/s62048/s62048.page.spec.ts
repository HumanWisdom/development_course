import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62048Page } from './s62048.page';

describe('S62048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62048Page;
  let fixture: ComponentFixture<S62048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
