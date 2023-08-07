import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134161Page } from './s134161.page';

describe('S134161Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134161Page;
  let fixture: ComponentFixture<S134161Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134161Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134161Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
