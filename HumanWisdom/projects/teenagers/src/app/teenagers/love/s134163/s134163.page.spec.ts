import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134163Page } from './s134163.page';

describe('S134163Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134163Page;
  let fixture: ComponentFixture<S134163Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134163Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134163Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
