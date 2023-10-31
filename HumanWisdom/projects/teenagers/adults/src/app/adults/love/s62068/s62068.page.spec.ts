import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62068Page } from './s62068.page';

describe('S62068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62068Page;
  let fixture: ComponentFixture<S62068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
