import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134156Page } from './s134156.page';

describe('S134156Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134156Page;
  let fixture: ComponentFixture<S134156Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134156Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134156Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
