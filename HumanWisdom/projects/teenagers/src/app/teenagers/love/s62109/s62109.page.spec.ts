import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62109Page } from './s62109.page';

describe('S62109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62109Page;
  let fixture: ComponentFixture<S62109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
