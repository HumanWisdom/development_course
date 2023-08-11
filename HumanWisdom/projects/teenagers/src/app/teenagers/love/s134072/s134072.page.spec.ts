import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134072Page } from './s134072.page';

describe('S134072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134072Page;
  let fixture: ComponentFixture<S134072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
