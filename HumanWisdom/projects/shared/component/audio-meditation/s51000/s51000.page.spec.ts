import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S51000Page } from './s51000.page';

describe('S51000Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S51000Page;
  let fixture: ComponentFixture<S51000Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S51000Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S51000Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
