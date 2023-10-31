import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49024Page } from './s49024.page';

describe('S49024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49024Page;
  let fixture: ComponentFixture<S49024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
