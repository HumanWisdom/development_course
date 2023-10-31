import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53048Page } from './s53048.page';

describe('S53048Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53048Page;
  let fixture: ComponentFixture<S53048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
