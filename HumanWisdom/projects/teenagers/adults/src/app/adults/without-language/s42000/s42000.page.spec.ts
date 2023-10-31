import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S42000Page } from './s42000.page';

describe('S42000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S42000Page;
  let fixture: ComponentFixture<S42000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S42000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S42000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
