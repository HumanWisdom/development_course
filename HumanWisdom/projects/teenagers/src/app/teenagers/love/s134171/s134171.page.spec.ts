import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134171Page } from './s134171.page';

describe('S134171Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134171Page;
  let fixture: ComponentFixture<S134171Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134171Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134171Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
